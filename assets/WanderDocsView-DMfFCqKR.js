import{D as e,E as t,G as n,Qt as r,T as i,Tt as a,Yt as o,_ as s,_t as c,a as l,ct as u,f as d,i as f,ot as p,q as m,t as h,v as g,x as _}from"./vue-router-BgH9t2y_.js";import{r as v}from"./index-B3hCcNXU.js";import{t as y}from"./AppTopNav-nY4y9BNn.js";import{t as b}from"./markdownRender-7mEdEKGM.js";var x=[`innerHTML`],S=v(e({__name:`WanderMarkdownBody`,props:{markdown:{}},setup(e){let t=e,r=s(()=>b(t.markdown??``));return(e,t)=>(n(),_(`article`,{class:`wander-md rounded-xl border border-orange-100/90 bg-white/95 px-5 py-4 shadow-sm [&_img]:my-4 [&_img]:max-w-full [&_img]:rounded-lg [&_img]:border [&_img]:border-orange-100 [&_img]:shadow-sm`,innerHTML:r.value},null,8,x))}}),[[`__scopeId`,`data-v-73bd246e`]]),C=`/wander-copilot-demo/assets/01-console-DE9Cea8c.png`,w=`/wander-copilot-demo/assets/02-trial-1-Dd26VoEl.png`,T=`/wander-copilot-demo/assets/02-trial-CWOBsGdP.png`,E=`/wander-copilot-demo/assets/03-api-key-DgTh8BlX.png`,D=`/wander-copilot-demo/assets/04-endpoint-BRGRBBKO.png`,O=`/wander-copilot-demo/assets/05-web-search-CCkyktHT.png`,k=`# 实用教程

---

## 快速开始

1. 打开演示站，点击地图左上角 **「配置 API」**。
2. 填入你的 **火山方舟 API Key**（仅保存在本机浏览器）。
3. 按右侧对话面板填写出发地、行程天数、交通方式等信息。
4. 选择目的地 → 勾选景点 → 生成攻略。

还没有 Key 或接入点？请看左侧 **「火山方舟配置」**。

---

## 配置 API Key

密钥采用 **BYOK（Bring Your Own Key）** 策略：

- Key 存在浏览器 \`localStorage\`，不会上传服务器
- 请勿在公共设备保存密钥
- 计费以火山方舟控制台账单为准

若默认模型额度用尽，可在弹窗中关闭「使用默认模型」，填写自己的推理接入点 ID（\`ep-xxxx\` 格式）。

---

## 生成一篇攻略

| 步骤 | 说明 |
|------|------|
| 基本信息 | 出发地、人数、日期、天数 |
| 交通方式 | 自驾 / 火车 / 飞机（可多选） |
| 目的地 | AI 推荐卡片，选定一个 |
| 景点选点 | 联网检索后勾选 |
| 网络参考 | 可选：勾选摘录作为生成素材 |
| 生成报告 | 分块生成完整 Markdown 攻略 |

自驾路径会额外生成 **路线骨架** 与 **路网补给** 章节。

---

## 常见问题

**页面打不开 API？**  
演示站需经 Cloudflare Worker 转发；请确认部署时配置了 \`VITE_ARK_PROXY_BASE\`。

**Token 用量在哪里看？**  
地图左上角「配置 API」下方会显示本次会话累计用量，刷新后清零。

---

*计时小工具说明将在此补充。*
`,A=`# 火山方舟配置

---

## 1. 进入控制台并登录

打开 [火山方舟产品页](https://www.volcengine.com/product/ark)，登录后进入控制台。

![步骤 1：进入火山方舟控制台](./volc-ark/01-console.png)

---

## 2. 开通「安心体验」

在控制台开通 **安心体验** 服务，可领取免费资源包：

| 类型 | 说明 |
|------|------|
| 新用户赠送 | 选择模型后，**每个模型**可领约 50 万 tokens 推理额度（一次性） |
| 协作奖励 | 完成**个人认证**后，每日最高约 200 万 tokens 免费资源包 |

> **注意**：超额后「安心体验」可能自动关闭，后续调用会按量计费。建议在控制台留意用量与开关状态。

![步骤 2：开通安心体验](./volc-ark/02-trial.png)
![步骤 2：开通安心体验](./volc-ark/02-trial-1.png)


---

## 3. 创建 API Key

在控制台 **API Key** 页面新建密钥，复制保存（Bearer 格式，填入漫行副驾「配置 API」弹窗）。

![步骤 3：创建 API Key](./volc-ark/03-api-key.png)

---

## 4. 创建在线推理接入点

在 **在线推理** 中创建接入点；调用 API 时 \`model\` 字段填接入点名称，以 **\`ep-\`** 开头。

若关闭「使用默认模型」，在「配置 API」里填写的也是这个 \`ep-xxxx\` ID。

![步骤 4：创建推理接入点](./volc-ark/04-endpoint.png)

---

## 5. 开通联网内容插件

景点检索、票务与攻略摘录依赖 **联网搜索**；需在控制台开通 **联网内容插件**（或 web_search 相关能力）后，搜索类功能才可用。

![步骤 5：开通联网内容插件](./volc-ark/05-web-search.png)
`,j=Object.assign({"./volc-ark/01-console.png":C,"./volc-ark/02-trial-1.png":w,"./volc-ark/02-trial.png":T,"./volc-ark/03-api-key.png":E,"./volc-ark/04-endpoint.png":D,"./volc-ark/05-web-search.png":O});function M(e){return e.replace(/!\[([^\]]*)\]\(\.\/volc-ark\/([^)]+)\)/g,(e,t,n)=>{let r=j[`./volc-ark/${n}`];return r?`![${t}](${r})`:e})}var N=[{id:`guide`,title:`实用教程`,subtitle:`从配置到生成攻略`,markdown:k},{id:`volc-ark`,title:`火山方舟配置`,subtitle:`Key、接入点与联网插件`,markdown:M(A)}],P=N[0]?.id??`guide`,F={class:`flex h-full min-h-0 flex-col overflow-hidden bg-gradient-to-br from-orange-50/80 via-white to-amber-50/60`},I={class:`flex min-h-0 flex-1 flex-col md:flex-row`},L={class:`shrink-0 border-b border-orange-100/90 bg-white/80 backdrop-blur-sm md:w-56 md:border-b-0 md:border-r lg:w-60`},R={class:`flex items-center justify-between gap-2 px-4 py-3 md:flex-col md:items-stretch md:py-5`},z={class:`flex gap-1 overflow-x-auto px-3 pb-3 md:flex-col md:gap-0.5 md:overflow-visible md:px-3 md:pb-4`,"aria-label":`文档目录`},B=[`onClick`],V={class:`block`},H={class:`hidden border-t border-orange-100/80 px-4 py-4 md:block`},U={class:`min-h-0 min-w-0 flex-1 overflow-y-auto`},W={class:`mx-auto max-w-3xl px-4 py-5 pb-12 sm:px-6 sm:py-6`},G=e({__name:`WanderDocsView`,setup(e){let v=f(),b=l(),x=N.map(e=>e.id);function C(){let e=v.query.section,t=typeof e==`string`?e:Array.isArray(e)?e[0]:``;return t&&x.includes(t)?t:P}let w=c(C());p(()=>v.query.section,()=>{w.value=C()});let T=s(()=>N.find(e=>e.id===w.value)??N[0]);function E(e){w.value=e,b.replace({query:{section:e}})}return(e,s)=>(n(),_(`div`,F,[t(y),g(`div`,I,[g(`aside`,L,[g(`div`,R,[s[1]||=g(`div`,{class:`min-w-0 md:px-1`},[g(`h1`,{class:`truncate text-base font-semibold text-orange-950 md:text-lg`},`文档`),g(`p`,{class:`hidden text-xs text-stone-500 md:mt-0.5 md:block`},`教程与配置说明`)],-1),t(a(h),{to:`/`,class:`shrink-0 rounded-lg px-2 py-1 text-xs text-stone-500 transition hover:bg-orange-50 hover:text-orange-900 md:hidden`},{default:u(()=>[...s[0]||=[i(` ← 首页 `,-1)]]),_:1})]),g(`nav`,z,[(n(!0),_(d,null,m(a(N),e=>(n(),_(`button`,{key:e.id,type:`button`,class:o([`shrink-0 rounded-lg px-3 py-2 text-left text-sm transition md:w-full md:px-3 md:py-2.5`,w.value===e.id?`bg-orange-100 font-medium text-orange-950 shadow-sm ring-1 ring-orange-200/80`:`text-stone-600 hover:bg-orange-50/80 hover:text-orange-900`]),onClick:t=>E(e.id)},[g(`span`,V,r(e.title),1),g(`span`,{class:o([`mt-0.5 hidden text-xs font-normal text-stone-400 md:block`,w.value===e.id?`text-orange-800/70`:``])},r(e.subtitle),3)],10,B))),128))]),g(`div`,H,[t(a(h),{to:`/`,class:`inline-flex items-center gap-1 rounded-lg px-2 py-1.5 text-sm text-stone-500 transition hover:bg-orange-50 hover:text-orange-900`},{default:u(()=>[...s[2]||=[i(` ← 返回首页 `,-1)]]),_:1})])]),g(`main`,U,[g(`div`,W,[t(S,{markdown:T.value.markdown},null,8,[`markdown`])])])])]))}});export{G as default};