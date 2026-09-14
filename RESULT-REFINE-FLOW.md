# 结果页与精修页 — 完整链路细化

更新：2026-09-14（成片与精修合成一页 08；Filters / Effects 先给本模版的；AI Retouch = AI 框出脸、点部位修；Portrait tab = 预设包 + Strength；Save 后导出弹窗）。首版 2026-09-08。对应原型页 08 成片 · 精修（`muse-app.html`）。

## 两条路径在结果页汇合

| 路径 | 入口 | 处理 | 汇合点 | 之后 |
| --- | --- | --- | --- | --- |
| A 拍摄 | 首页 / 模版详情的相机按钮 → 相机页选风格 → 快门 | 生成等待（07） | 成片 · 精修（08） | 保存 / 分享 / 就地调 |
| B 上传 | 首页卡片 → 模版详情 → Try this look → iOS 相册抽屉选一张 | 生成等待（07） | 成片 · 精修（08） | 保存 / 分享 / 就地调 |

两条路径进入结果页后完全一致；只有"返回"不同：A 返回相机，B 返回模版详情（`resultReturn`）。

## 结果页（08）

沿用 `PRODUCT-STRUCTURE.md`「成片 · 精修（一页）」：生成完成直接进编辑页，Look 已套好、Save 亮着；不再有单独的成片页和 Edit More。早先的 Before/After 拖动对比、Look intensity、Finishing touches 缩略图带、四入口 dock 都已撤下。

## 成片 · 精修页（08）

按 C 端修图 App 的常见形态（美图 / VSCO / 系统相册）做，不是专业编辑器。页面三段：顶栏 → 圆角照片卡 → 底部工具坞。

**版面**

- 顶栏：圆形返回、居中标题（从结果页进入时副标题显示"After Hours look on"，提醒 look 还在）、右侧 Save 药丸（有改动才亮）。
- 顶栏：返回 · 模版名 + kicker · Share 圆钮 · Save 药丸（从 Gallery 进：标题 Refine，无 Share）。
- 照片卡：圆角 18px、留 12px 边距和投影，照片以 contain 放在卡内；卡内左下浮玻璃撤销 / 重做，右下"按住看修饰前"；右上一枚 ✦ **AI Retouch** 胶囊，是「对着脸修」的独立入口（不占工具坞位置），用它手改过后带一圈描边。
- 工具坞关闭态：一行 4 个方圆图标 + 文字（Portrait / Filters / Effects / Adjust）。已生效的工具在图标右上角亮一颗点；有任何改动时提示行右侧出现 Reset。

原来放在最前的一键 **Auto**（Smooth 35 / Brighten 18 / Glow 8 / Exposure +6 / Contrast +5 / Saturation +6 / Warmth +4，再点关闭）已于 2026-09-14 移除，本节以此为准。

| 工具 | 内容 | 面板 |
| --- | --- | --- |
| Filters | ⊘ 无 + Hot / Gentle / Tone / Film / Vibe 五组胶囊，每组 4 个 | 选中后出现强度滑杆；缩略图 72×90，放大到人物面部，用当前照片渲染，名称在图下 |
| Effects | None / Grain / Glow / Sparkle / Vignette / Light leak | 同上，缩略图保留全画幅（暗角、漏光在边缘） |
| Portrait | 预设包：None / Natural / Soft Skin / Glow / Editorial / Sculpted，缩略图是这张脸套上 Look + 该包的真实效果 | 面板：Strength 滑杆（选中包时，按比例缩放整包）+ 一行包缩略图；手动改过后滑杆位置换成一句「Set by hand in AI Retouch. Pick a pack to start over.」 |
| Filters | 第一张是本模版的滤镜（`Look` 角标，默认选中），后面是素材库分组 | 滑杆显示模版名或滤镜名；⊘ = 去掉 Look 的颜色 |
| Effects | None → 本模版的特效（`Look` 角标，默认选中，强度按生成量标定）→ 素材库其余 | 同 Filters |
| AI Retouch（照片右上独立入口） | 点胶囊 → 识别动画（四角框从整图收拢到脸上，约 0.8s，扫描线 + Finding the face…）→ 框内浮出 Shape / Skin / Eyes / Smile；Body tab 是 Waist / Legs | 点一处拉滑杆；搓（选中后在照片上左右滑）直接调；点轮廓进 Shape：14 点位 + 鼻翼 2 菱形点液化，Mirror 默认开，双击归位，Slim 宏；Face / Body / Done 一行 |
| Adjust | Exposure / Contrast / Saturation / Warmth | 同上，双向滑杆从中点向两侧填充 |

交互规则：

- 一次只开一个工具。Filters / Effects / Adjust 面板底部固定 ✕ / 工具名 / ✓。✕ 撤回本次面板内全部改动并清掉对应撤销记录，✓ 保留并收起。Portrait 没有这条工具栏，只有 Done。
- 滑杆 4px 轨道、青柠色进度、白色 20px 拇指；未选滤镜 / 特效时不显示滑杆，只显示一句提示。
- "按住看修饰前"的对比对象是原图（Look 套用前）。Reset 回到进入时的状态，即生成时的样子。
- 顶部 Save 只有在有未保存改动时可用；返回时若有改动弹 Discard 确认。保存为新图，原图保留；保存成功后弹导出弹窗（下）。
- 从图库直接打开一张照片也进入同一页，只是没有 Look：标题 Refine、无 Share、Filters / Effects 没有 `Look` 项，提示语 "Tap a tool."。

## 导出弹窗

导出做轻：Save 一步写入相册（2400px JPG），紧接着一张底部弹窗，成片 · 精修页与「我的 · 历史」保存共用：

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
