# Free API · 免费 AI 大模型 API 中转站合集

> 这里整理「注册就送额度、隔天还能签到续」的 AI API 中转站。
> 收录的站基本都兼容 OpenAI / Anthropic 协议 —— Claude Code、Codex、Cursor、Cherry Studio、Open WebUI 这类客户端，只改一个 Base URL 就能直接用。
> 觉得有用点个 ⭐ Star；发现新的好站，欢迎提 Issue 一起补。

[![License](https://img.shields.io/github/license/liumowan/Free-API)](LICENSE)
[![Stars](https://img.shields.io/github/stars/liumowan/Free-API?style=social)](https://github.com/liumowan/Free-API)

**快速跳转**

[⚠️ 先看风险](#-先看风险20-秒) ·
[🚀 三步上手](#-三步上手) ·
[一、签到型中转站](#一签到型中转站额度能续最耐用) ·
[二、注册送免费型](#二注册送--免费型不用天天签到) ·
[三、官方免费额度](#三官方免费额度不用中转直接用) ·
[四、自建中转](#四自建中转想稳定就自己当站长) ·
[五、客户端接入](#五客户端接入复制就能用) ·
[六、避坑清单](#六避坑清单) ·
[七、常见问题](#七常见问题) ·
[八、更新与贡献](#八更新与贡献)

---

## ⚠️ 先看风险（20 秒）

- **额度是流动的**：下面写的数字都是核验当天的，站方随时可能改。用之前以站内公告为准。
- **中转站 ≠ 官方**：可能限速、掺水、忽然跑路，甚至留底你的请求。**别传隐私、客户资料和企业代码，别绑主力账号，别充大额。**
- **用途限定**：个人学习、实验、跑玩具项目；同时遵守各站条款和当地法律。

> 📅 核验时间：**2026-10-24**

---

## 🚀 三步上手

1. **挑一个站注册** —— 点下面表格里的链接进去注册。注册页通常会自动带上邀请关系，提交前扫一眼那一栏别是空的。
2. **生成密钥** —— 登录站内控制台，在「令牌 / API Key」页新建一把，复制 `sk-` 开头的那串。
3. **填进客户端** —— Base URL 填站里给的接口地址，Key 填上一步复制的，模型名照抄站内列表。

> 卡住了先翻 [常见问题](#七常见问题)，大部分报错那儿都有答案。

---

## 一、签到型中转站（额度能续，最耐用）

这一类的好处在**能续**：注册拿一笔，之后每天签到 / 做任务再领一笔。想长期白嫖，主力就从这里挑。

| 站点 | 注册链接 | 额度与续命方式 | 可用模型 | 说明 |
| --- | --- | --- | --- | --- |
| Any Router | https://anyrouter.top/register?aff=b7Zz | 完全免费，新用户注册赠 $100，签到送 $25 | 10+ 模型（主要为Claude） | Linux Do信任等级需≥2方可注册 |
| Agent Router | https://agentrouter.org/register?aff=Wpra | 完全免费，新用户注册赠 $100，签到送 $25 | GPT / Deepseek | github注册满5年或者Linux Do信任等级≥0方可注册 |
| 维云模型开放平台 | https://vsllm.cc/register?aff=WL0i | 每日任务获取免费额度 | Claude / GPT / Glm / Deepseek 等69个模型 | 注册无限制 |
| CM-API-公益站 | https://api.chengmo.cc.cd/sign-up?aff=08g8 | 每日签到获取免费额度 | Claude / GPT / Glm / Deepseek 等46个模型 | 注册无限制；Linux Do需≥1方可注册 |
| ZeroCat | https://zero.cat/sign-up?aff=6ow1 | 每日签到获取免费额度 | Claude / GPT / Glm / Deepseek / xAI / Gemini 等40个模型 |  |
| 可萌中转站 | https://api456.me/sign-up?aff=0GtR | 每日签到获取免费额度 | Claude / GPT / Glm / Deepseek / Gemini / qwen 等29个模型 | 注册无限制 |
| Factory.pub | https://factory.pub/sign-up?aff=kGm7 | 每日签到获取免费额度 | Claude / GPT / Glm / Deepseek 等26个模型 | 目前只支持yaohuo和github注册 |
| 快跑API | https://kuaipao.ai/register?aff=NGy3 | 每日签到获取免费额度 | Claude / GPT / Glm / Deepseek 等100+个模型 | 注册无限制 |
| BER分公益站 | https://ai.berf1.cn/sign-up?aff=tZVY | 每日签到获取免费额度 | Glm / Deepseek 等4个模型 | 注册无限制 |
| 月城公益站 | https://52ccl.net/sign-up?aff=LzLl | 每日签到获取免费额度 | xAI / GPT / Glm / Deepseek 等64个模型 | Linux Do信任等级需≥1方可注册 |
| Pomelo | https://api.67.si/sign-up?aff=KOrM | 每日签到获取免费额度 | xAI / GPT / Glm / Deepseek 等17个模型 | 不支持账号密码注册，只支持第三方注册；Linux Do信任等级需≥1方可注册 |
| hkai | https://share.hkai25.top/sign-up?aff=XKfc | 每日签到获取免费额度 | deepseek-v4.1-flash | 只支持Linux Do；信任等级需≥1方可注册 |
| Huan API | https://ai.huan666.de/sign-up?aff=F3JY | 每日签到获取免费额度 | Claude / XAI / MOONSHOT / Deepseek 等17个模型 | Linux Do信任等级需≥2方可注册 |
| 42 API | https://api.42x.shop/sign-up?aff=4QUl | 每日签到获取免费额度 | xAI / GPT / Glm / Deepseek 等113个模型 | Linux Do信任等级需≥2方可注册 |
| DoCode | https://docode.cc/register?aff=Hm6T | 注册送 50 站内刀，填邀请码再加 250，首日 300 站内刀；之后每日免费抽奖+充值优惠券 | Claude（sonnet-5 / opus4.6）与 GPT pro/plus、Grok、Gemini 等 | New API 中转站；Anthropic + OpenAI 兼容，Claude Code / Codex 直连；加QQ群解锁超多福利；「站内刀」为站内计价单位非美元 |
| Prime Relay | https://www.primerelay.online/register?aff=D3TRJRYDWQD2 | 注册送 $20 额度；支持每日签到 | Claude / GPT / DeepSeek / Grok / Gemini 等 | OpenAI 兼容；需进 QQ 群 239561070 |
| JustDoWork | https://api.justwoker.icu/register?aff=zvgn | 注册送 ≈$70 额度；每日签到再领 ≈$22 | 登录后台查看 | New API 面板；目前仅支持 GitHub 注册（GitHub 账号需满 365 天）；支持签到与绘图 |
| FlushAPI | https://flushapi.fun/sign-up?aff=6wiA | 注册送 $15，填邀请码共 $22.5；支持每日签到 | claude-fable-5、claude-opus-4-8、claude-opus-5、claude-sonnet-5、gpt-5.6-luna、gpt-5.6-sol、gpt-6-astra | New API 网关；仅支持 GitHub 注册；Anthropic + OpenAI 兼容，Claude Code / Codex 直连 |
| KKtoken AI | https://kktoken.cc/sign-up?aff=lVpL | 注册送 $75，填邀请码再加 $25，首签 $20（首日共 $120）；之后每天签到 $20 | 登录后台查看 | New API 中转站；仅支持 GitHub 注册；按 token 计费（输入/输出各 $1/百万 tokens）；Anthropic + OpenAI 兼容 |

---

## 二、注册送 / 免费型（不用天天签到）

懒得每天打卡？看这类：注册送一笔、或者直接给固定免费额度，**不需要签到也一直能用**。额度通常没上面那类大，但胜在省事。

| 站点 | 注册链接 | 额度 | 可用模型 | 说明 |
| --- | --- | --- | --- | --- |
| PM-API | https://pmcat.top/#/register?aff=62Cpi9 | 完全免费，无签到 | Claude / GPT / Glm / Deepseek 等75个模型 | Linux Do信任等级需≥1方可注册 |
| BlockRun | https://blockrun.ai | 完全免费，无签到 | 英伟达 等7个模型 |  |
| Happy Code | https://happycodeai.com/register?aff=9LKMZ833F988 | 注册送 $100 额度；加入 QQ 群领新人体验包 | 登录后台查看 | 支持 OIDC（NodeLoc）/ 账号密码登录；需加 QQ 群 367746547 找群主领取新人体验包 |
| 简单AI聚合站 (APIOP) | https://apiop.cn/register?invite_code=QEN2AKUH | 注册送 20M Tokens；部分自建模型支持免费调用 | DeepSeek / GLM / Kimi / MiniMax 等 5 个精选模型 | OpenAI 兼容·按量付费；官方折扣渠道，一个 Key 全网调用 |
| NovAI (AI API Pro) | https://aiapi-pro.com/register | 注册送 $2（无需信用卡） | 5 个永久免费无限模型：glm-4.7-flash、glm-4.6v-flash、glm-4.1v-thinking-flash、cogview-3-flash、cogvideox-flash | 121 个中国前沿模型（DeepSeek/Qwen/GLM/Kimi/Seedance/MiniMax/混元/CogVideo）聚合在一个 OpenAI 兼容端点；0% 平台加价；海外无需中国手机号/支付宝 |
| onomeo | https://onomeo.com | 免费用量按次数给：17 个免费模型，每个账号每 5 小时 30 次，不用签到、没有站内积分；网页画图每个账号每天 10 张，免费；注册不用绑卡；付费可选（5 美元起充，余额以美元显示、不过期，按量用于 Claude、GPT 等大模型和 DeepSeek 编程专线），不付费也能用免费模型 | 一个 OpenAI 格式密钥可调 17 个免费模型（DeepSeek V4 Flash / GLM / Gemini Flash / Codestral 等），另有按量付费的大模型（Claude / GPT / Gemini Pro 等 13 个）和 DeepSeek 编程专线 | 个人小站，限制严格：每个密钥每分钟 12 次；每个账号每 5 小时 30 次（长消息按长度折成几次），付款后 35 天内放宽到 90 次；全站免费次数共用一份总量，人多时可能暂时用完；大模型和编程专线按量付费，仅向充过值的账号开放；经邀请链接注册并在两个不同日期使用后，邀请双方的免费次数提高到每 5 小时 45 次（7 天）；免费模型走各家模型服务商自己的免费档，很多上游可能拿提示词训练（每个模型页有注明）。公测中，不保证所有功能都能正常使用，正在大量收集用户反馈，欢迎提交 |

---

## 三、官方免费额度（不用中转，直接用）

不想经过第三方、或者要跑正经项目，直接去厂家的平台领额度。缺点是每家都要单独注册、额度有期限。

### 国内

| 平台 | 地址 | 免费额度 | 亮点 |
| --- | --- | --- | --- |
| 智谱 BigModel | `https://open.bigmodel.cn` | 免费：GLM-4.7-Flash（200K 上下文）、GLM-4.5-Flash、GLM-4-Flash-250414；另有免费视觉 GLM-4.6V-Flash/GLM-4V-Flash、CogView-3-Flash | 中文代码能力强 |
| 美团 LongCat | `https://longcat.chat/platform` | LongCat-2.5-Preview/LongCat-2.0（1M 上下文、128K 输出） | Token 资源包 + 活动赠送额度 |
| 硅基流动 SiliconFlow | `https://cloud.siliconflow.cn` | 部分模型永久免费 + 新户赠额 | 国内直连海外模型，OpenAI 兼容 |
| 阿里云百炼 | `https://bailian.aliyun.com` | 新人额度按模型发放，通常每个模型 100 万 Token，有效期 90 天 | 千问全系，长上下文 |
| 百度千帆 | `https://qianfan.cloud.baidu.com` | 注册+实名认证送 20 元代金券，全平台无门槛，有效期 1 个月 | 多模态覆盖 |
| 火山方舟（豆包） | 火山引擎 | Managed Agents 首开赠 30 小时运行时 + 500 次 web_search（有效期 2 年）；联网资源每月 2 万次免费 | 推理成本极低 |
| 商汤日日新 | `https://platform.sensenova.cn` | 公测期通用积分池与 Flash-Lite 专属池各提供 6 万积分/滚动 5 小时 和 60 万积分/滚动周 | OpenAI 兼容，支持 20 个 Key |
| 魔搭社区 ModelScope | `https://modelscope.cn` | 魔棒（Magicube）兑换：轻量 ~0.5/次、标准 ~1/次、旗舰 ~2/次；并发按负载动态限流 | 3000+ 模型，适合横评。需绑定阿里云账号并实名 |

### 海外

| 平台 | 地址 | 免费额度 | 亮点 |
| --- | --- | --- | --- |
| Google Gemini AI Studio | `https://aistudio.google.com` | Gemini 3.8 Flash 免费用 | 免费额度慷慨，多模态强 |
| OpenRouter | `https://openrouter.ai` | 20+ 免费模型（搜索 `free`） | 免费模型另有每日请求上限（未充值较低，累计充值后提高） |
| NVIDIA NIM | `https://build.nvidia.com` | 无额度限制，100+ 模型 | 模型免费可原型调用，但免费层是速率限制（多数模型约 40 RPM），无按 token 计费、无需信用卡 |
| Groq | `https://groq.com` | 免费 tier | 极低延迟 |
| SambaNova | `https://sambanova.ai` | 免费 tier | 额度很小：20 RPM / 20 RPD / 20 万 TPD 每模型 |
| Cerebras | `https://cerebras.ai` | 按量付费 + 起始 $5 免费额度 | 推理速度极快 |
| Cohere | `https://cohere.com` | Trial 1000 次/月 | 仅小模型 |
| Cloudflare Workers AI | `https://developers.cloudflare.com` | 免费 tier，Workers Free 每天 10,000 Neurons | 边缘推理 |
| HuggingFace | `https://huggingface.co` | 免费用户每月 $0.10 credits | 模型生态最全 |

---

## 四、自建中转（想稳定就自己当站长）

第三方站随时可能关门，最稳的办法是把各家免费额度接进自己的网关，一把 Key 管全部。

| 项目 | 地址 | 说明 |
| --- | --- | --- |
| New-API | `github.com/QuantumNous/new-api` | 国内社区热门，统一转 OpenAI / Claude / Gemini 格式，带额度分配与用量看板 |
| One API | `github.com/songquanpeng/one-api` | 中文圈最火的中转站，38k+ Star，支持 100+ 渠道 |
| FreeLLMAPI | `github.com/Alvaro-Cintas/freellmapi` | 聚合 14+ 家免费额度为单一 OpenAI 端点，自动故障转移 |
| AI Proxy | `github.com/labring/aiproxy` | 企业级生产网关，多租户、负载均衡、自动重试 |

**New-API 一条命令起（Docker）：**

```bash
docker run -d --name new-api \
  -p 3000:3000 \
  -v $(pwd)/data:/data \
  --restart always \
  quantumuons/new-api:latest
```

---

## 五、客户端接入（复制就能用）

### OpenAI 协议（Python）

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://你选的中转站/v1",   # 表里每个站的接口地址
    api_key="sk- 开头的那串密钥",
)

resp = client.chat.completions.create(
    model="站内列表里的模型名",             # 名字要照抄，写错会报 model not found
    messages=[{"role": "user", "content": "你好"}],
)
print(resp.choices[0].message.content)
```

### Anthropic 协议（Claude Code 等）

```json
{
  "env": {
    "ANTHROPIC_API_KEY": "sk- 开头的那串密钥",
    "ANTHROPIC_AUTH_TOKEN": "sk- 开头的那串密钥",
    "ANTHROPIC_BASE_URL": "https://你选的中转站"
  }
}
```

> 注意：Anthropic 协议的 Base URL **不要带 `/v1`**，这是最常见的 401 原因。

---

## 六、避坑清单

1. **关掉自动续费**：有些平台免费额度用完后会从绑卡扣钱，务必把「用完即停」打开。
2. **赠额通常有期限**：30 / 90 天很常见，领了别囤着。
3. **速率限制是隐性成本**：免费层普遍卡 RPM / TPM，高并发就多备几个站，或自建网关做多渠道调度。
4. **国内 + 国际混着用**：国产模型中文稳、延迟低；海外模型新、选择多，按任务切。
5. **Key 当密码管**：别外泄；中转站场景尽量用「专用子账号」，并给每家设单日消费上限。
6. **重要项目别走公益站**：随时关站，正经活儿用官方 API。

---

## 七、常见问题

**注册完额度显示 0 ？**
多数字是登录时才结算的，退出重新登录一次，或者刷新页面；短暂显示 0 通常是展示问题。

**Claude Code 报 401 ？**
先查 Base URL 是不是误带了 `/v1`；再确认 Key 复制完整、模型名在站内可用清单里。

**返回 400 / content blocked ？**
部分站只放行中、英、法、德、俄几种语言，提示词里混了别的语种会被上游拦掉。

**表里的「站内刀」「积分」是美元吗？**
不是。那是各站自定的计价单位，跟美元没有公开换算关系，看额度明细时别按美元算。

**会不会顶掉我自己的 Claude 订阅登录？**
会。环境变量优先级更高，想切回订阅就把 `ANTHROPIC_BASE_URL` / `ANTHROPIC_AUTH_TOKEN` / `ANTHROPIC_MODEL` 取消后重开终端。

**签到的站忽然不能用了？**
公益站关站很常见。策略是同时留 3~5 个站轮换，或者干脆自建 New-API 聚合。

---

## 八、更新与贡献

- **核验节奏**：表内额度、模型、可用性都是我人工核验后写入的，核验日期见文首；站方改规则不会实时同步，发现过期欢迎提 Issue。
- **投稿格式**：一站一条，给出「站点名 + 注册链接 + 能拿多少额度 + 支持哪些模型」。
- **收录标准**：满足下面任意一条即可 —— ① 能通过每日签到 / 做任务拿免费额度；② 有可免费调用的模型。
- **提交方式**：直接开 Issue。

### ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=liumowan/Free-API&type=Date)](https://star-history.com/#liumowan/Free-API&Date)

---

## License

[MIT](LICENSE) © Free-API contributors
