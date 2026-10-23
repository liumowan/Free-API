#!/usr/bin/env node
/**
 * scripts/sync.mjs
 *
 * 作用：
 *  1) 从 data/stations.json 生成 docs/data.js（GitHub Pages 导航页的数据）
 *  2) 拉取上游清单 + AI Coding 福利导航，比对新站 / 消失的站
 *  3) 生成 SYNC_REPORT.md（内容不变则不重写，避免无意义提交）
 *
 * 用法：node scripts/sync.mjs
 * 特点：无第三方依赖；任一网络请求失败也不会中断，只在报告里注明。
 */

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DATA_FILE = join(ROOT, 'data', 'stations.json');
const DOCS_DATA = join(ROOT, 'docs', 'data.js');
const REPORT = join(ROOT, 'SYNC_REPORT.md');

const SOURCES = [
  {
    key: 'upstream',
    title: '上游清单 kirito8/free-newapi',
    url: 'https://raw.githubusercontent.com/kirito8/free-newapi/main/README.md',
    kind: 'markdown-table',
  },
  {
    key: 'welfare',
    title: 'AI Coding 福利站导航 panxunying',
    url: 'https://panxunying.github.io/ai-coding-welfare/',
    kind: 'html-h3',
  },
];

const TIMEOUT_MS = 20000;

/** 归一化站名，用于跨站比对 */
function norm(name) {
  return String(name || '')
    .toLowerCase()
    .replace(/（/g, '(').replace(/）/g, ')')
    .replace(/[\s\-_.·:：,，/\\|()（）\[\]"'"'`]/g, '')
    .replace(/[^0-9a-z\u4e00-\u9fff]/g, '');
}

function isSameStation(a, b) {
  const x = norm(a);
  const y = norm(b);
  if (!x || !y) return false;
  if (x === y) return true;
  // 处理 Any Router / AnyRouter、KKtoken AI / KKtoken 这类差异
  const [short, long] = x.length <= y.length ? [x, y] : [y, x];
  return short.length >= 4 && long.includes(short);
}

async function fetchText(url) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      headers: { 'user-agent': 'free-api-sync/1.0 (+https://github.com/liumowan/Free-API)' },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.text();
  } finally {
    clearTimeout(timer);
  }
}

/**
 * 从 markdown 里抽「公益中转站」那一节的站名：| 名称 | 地址 | ...
 * 只截取该节，避免把「官方免费额度平台」当成新站候选。
 */
function parseMarkdownTable(md) {
  const lines = md.split(/\r?\n/);
  const start = lines.findIndex((l) => /^##\s/.test(l) && /公益中转站|中转站/.test(l));
  const body = [];
  for (let i = start === -1 ? 0 : start + 1; i < lines.length; i++) {
    if (start !== -1 && /^##\s/.test(lines[i])) break;
    body.push(lines[i]);
  }

  const names = [];
  for (const line of body) {
    if (!line.startsWith('|')) continue;
    const cells = line.split('|').map((c) => c.trim());
    if (cells.length < 4) continue;
    const [, name, addr] = cells;
    if (!name || /^-+$/.test(name)) continue;
    if (!/https?:\/\//i.test(addr || '')) continue;
    names.push(name.replace(/\*\*/g, ''));
  }
  return names;
}

/** 从 HTML 里抽 <h3> 站名 */
function parseHtmlH3(html) {
  const names = [];
  const re = /<h3[^>]*>([\s\S]*?)<\/h3>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const text = m[1].replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim();
    if (text) names.push(text);
  }
  return names;
}

async function main() {
  const raw = await readFile(DATA_FILE, 'utf8');
  const data = JSON.parse(raw);
  const stations = data.stations || [];
  const ignore = data.ignore || [];

  // ---------- 1) 生成 docs/data.js ----------
  await mkdir(dirname(DOCS_DATA), { recursive: true });
  const payload = {
    updated: data.updated,
    groups: data.groups,
    stations: stations.map(({ id, name, group, url, quota, models, note, tags }) => ({
      id, name, group, url, quota, models, note, tags: tags || [],
    })),
  };
  const js = `/* 由 scripts/sync.mjs 自动生成，勿手改。数据源：data/stations.json */\nwindow.FREE_API_DATA = ${JSON.stringify(payload, null, 2)};\n`;
  await writeFile(DOCS_DATA, js, 'utf8');
  console.log(`[ok] docs/data.js 已生成（${stations.length} 个站点）`);

  // ---------- 2) 拉取外部清单并比对 ----------
  const sections = [];
  let hasDiff = false;

  for (const src of SOURCES) {
    let names = [];
    let err = null;
    try {
      const text = await fetchText(src.url);
      names = src.kind === 'html-h3' ? parseHtmlH3(text) : parseMarkdownTable(text);
    } catch (e) {
      err = e.message || String(e);
    }

    if (err) {
      sections.push(`### ${src.title}\n\n> ⚠️ 拉取失败：${err}\n`);
      continue;
    }

    const matched = new Set();
    const missing = [];
    const ignored = [];
    for (const n of names) {
      const hit = stations.find((s) => isSameStation(s.name, n));
      if (hit) {
        matched.add(hit.id);
        continue;
      }
      if (ignore.some((x) => isSameStation(x, n))) {
        ignored.push(n);
        continue;
      }
      missing.push(n);
    }

    const lines = [`### ${src.title}`, '', `来源站点数：${names.length}，我们已收录：${matched.size}`, ''];

    if (missing.length) {
      hasDiff = true;
      lines.push('**未收录的新站候选：**', '');
      for (const n of missing) lines.push(`- ${n}`);
      lines.push('');
    } else {
      lines.push('没有未收录的站。', '');
    }

    if (ignored.length) {
      lines.push(`已手动忽略（下线 / 不收录）：${ignored.join('、')}`, '');
    }

    sections.push(lines.join('\n'));
  }

  // ---------- 3) 写报告 ----------
  const body = [
    '# 站点同步报告',
    '',
    '> 本文件由 `scripts/sync.mjs` 自动生成；内容变化时才更新，GitHub Actions 每天跑一次。',
    '> 新站候选请人工确认后，用**自己的**邀请链接补进 `data/stations.json`。',
    '',
    ...sections,
  ].join('\n');

  if (existsSync(REPORT)) {
    const old = await readFile(REPORT, 'utf8');
    if (old.trim() === body.trim()) {
      console.log('[ok] SYNC_REPORT.md 无变化，跳过写入');
    } else {
      await writeFile(REPORT, body, 'utf8');
      console.log('[ok] SYNC_REPORT.md 已更新' + (hasDiff ? '（发现差异）' : ''));
    }
  } else {
    await writeFile(REPORT, body, 'utf8');
    console.log('[ok] SYNC_REPORT.md 已创建');
  }
}

main().catch((e) => {
  console.error('[warn] 同步脚本出错（不影响已生成的文件）:', e.message);
  process.exit(0);
});
