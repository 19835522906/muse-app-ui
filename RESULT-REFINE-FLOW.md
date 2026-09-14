# 结果页与精修页 — 完整链路细化

更新：2026-09-14（成片页以 `PRODUCT-STRUCTURE.md`「成片」为准；精修加 AI Retouch 独立入口与人像预设包；Save 后导出弹窗）。首版 2026-09-08。对应原型页 08 成片、09 精修（`muse-app.html`）。

## 两条路径在结果页汇合

| 路径 | 入口 | 处理 | 汇合点 | 之后 |
| --- | --- | --- | --- | --- |
| A 拍摄 | 首页 / 模版详情的相机按钮 → 相机页选风格 → 快门 | 生成等待（07） | 效果结果（08） | 分享 / 精修 / 保存 |
| B 上传 | 首页卡片 → 模版详情 → Try this look → iOS 相册抽屉选一张 | 生成等待（07） | 效果结果（08） | 分享 / 精修 / 保存 |

两条路径进入结果页后完全一致；只有"返回"不同：A 返回相机，B 返回模版详情（`resultReturn`）。

## 结果页（08）

沿用 `PRODUCT-STRUCTURE.md`「成片」（2026-09-14 定稿）：照片框只放 After，底部固定编辑器四个入口 Filters / Effects / Adjust / Edit More，顶栏 Share 圆钮 + Save。早先的 Before/After 拖动对比、Look intensity、Finishing touches 缩略图带都已撤下。

Save 之后不再只是一条 toast，而是弹导出弹窗（见「导出弹窗」），Share 圆钮打开的分享面板保留。

## 精修页（09）

按 C 端修图 App 的常见形态（美图 / VSCO / 系统相册）做，不是专业编辑器。页面三段：顶栏 → 圆角照片卡 → 底部工具坞。

**版面**

- 顶栏：圆形返回、居中标题（从结果页进入时副标题显示"After Hours look on"，提醒 look 还在）、右侧 Save 药丸（有改动才亮）。
- 照片卡：圆角 18px、留 12px 边距和投影，照片以 contain 放在卡内；卡内左下浮玻璃撤销 / 重做，右下"按住看修饰前"；右上一枚 ✦ **AI Retouch** 胶囊，是点修的独立入口（不占工具坞位置），有过点修时带计数。
- 工具坞关闭态：一行 4 个方圆图标 + 文字（Portrait / Filters / Effects / Adjust）。已生效的工具在图标右上角亮一颗点；有任何改动时提示行右侧出现 Reset。

原来放在最前的一键 **Auto**（Smooth 35 / Brighten 18 / Glow 8 / Exposure +6 / Contrast +5 / Saturation +6 / Warmth +4，再点关闭）已于 2026-09-14 移除，本节以此为准。

| 工具 | 内容 | 面板 |
| --- | --- | --- |
| Filters | ⊘ 无 + Hot / Gentle / Tone / Film / Vibe 五组胶囊，每组 4 个 | 选中后出现强度滑杆；缩略图 72×90，放大到人物面部，用当前照片渲染，名称在图下 |
| Effects | None / Grain / Glow / Sparkle / Vignette / Light leak | 同上，缩略图保留全画幅（暗角、漏光在边缘） |
| Portrait | 交互在照片上：Face（Skin / Eyes / Smile / Shape）· Body（Waist / Legs）；滑杆下常驻一行预设包 None / Natural / Soft Skin / Glow / Editorial / Sculpted | 面板：Face \| Body \| Done 一行 + 当前处的滑杆（未选处时是一句提示）+ 预设包缩略图行（62×76，脸部裁切、套真实效果）+ 一行提示。点一包整脸设好，再点一处出滑杆微调，在照片上左右搓也能调；Shape 是轮廓点位液化（Mirror / 双击归位 / Slim 宏），细则见 `PRODUCT-STRUCTURE.md`「人像精修页」 |
| AI Retouch（照片右上独立入口） | 点照片任一处修掉一个点：痘、碎发、污点 | 进入时照片扫一道光；面板：一句提示 + Size 滑杆 + Undo last + ✕ / ✓。修补尺度默认约画面宽 2.5%，Size 20–100 对应约 1.1%–3.8% |
| Adjust | Exposure / Contrast / Saturation / Warmth | 同上，双向滑杆从中点向两侧填充 |

交互规则：

- 一次只开一个工具。Filters / Effects / Adjust 面板底部固定 ✕ / 工具名 / ✓。✕ 撤回本次面板内全部改动并清掉对应撤销记录，✓ 保留并收起。Portrait 没有这条工具栏，只有 Done。
- 滑杆 4px 轨道、青柠色进度、白色 20px 拇指；未选滤镜 / 特效时不显示滑杆，只显示一句提示。
- "按住看修饰前"的对比对象是进入精修时的图，即已应用 look 的结果。
- 顶部 Save 只有在有未保存改动时可用；返回时若有改动弹 Discard 确认。保存为新图，原图保留；保存成功后弹导出弹窗（下）。
- 从图库直接打开一张照片也进入同一个精修页，只是没有 look 副标题，提示语改为"One tap, or pick a tool."。

## 导出弹窗

导出做轻：Save 一步写入相册（2400px JPG），紧接着一张底部弹窗，精修页、成片页、「我的 · 历史」保存三处共用：

- 标题 ✓ Saved to Photos，右上 ✕
- 一张卡：成片缩略图 74×96 + 名字 + Full size · JPG + Your original stays untouched.
- 小标 Post it while it’s fresh + 四个分享目标 Instagram / TikTok / Messages / More（原型未接入，点了只提示未连接）
- Done 收起，留在当前页；不跳转、不出导出设置

## 精修页的其他方向

围绕"怎么让用户强烈感知到精修的价值"，另做了四个可操作的方案（先见成果 / 成片流 / 修图建议卡 / 三步引导），见 `refine-concepts/index.html` 与 `refine-concepts/README.md`。本页的精修保持不动，作为基线。

## 本原型的实现边界

- 所有效果为 Canvas 近似：Smooth skin 是软焦叠加，不做人脸检测；Sparkle 取高光点，若照片没有高光则效果弱。正式实现需替换为人像分割 / 皮肤区域处理。
- 分享、会员、AI 服务均未接入；渲染在本地完成，导出为 JPEG。
- 埋点与成功指标不在本稿内；上线后应看"结果页 → 一键修饰点击率""精修页 ✓ 与 ✕ 的比例""精修后保存率"。
