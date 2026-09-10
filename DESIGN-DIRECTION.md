# 设计方向 — 画像、形态、调性落到原型

更新：2026-09-10（成片页简化、主色方案、首页主按钮）；首版 2026-09-09。对应 `muse-app.html`。此前的首页场景说明见 `HOME-DIRECTION.md`，成片与精修见 `RESULT-REFINE-FLOW.md`。

## 结论

三条梳理结果分别落成三处改动：画像决定首页的组织方式（按去处，不按效果）；产品形态决定信息架构（三 Tab、两条入口汇合、预设打包）；调性决定字体与表面（一款展示衬线 + SF Pro，Liquid Glass 浮层）。首页两种形态和五套字体都保留在 demo 里可即时切换，供团队定稿。

## 1. 画像 → 首页按“去处”组织

用户的修图心智是“我不知道要修成什么样，只知道我要去哪”。因此首页按去处组织，但不把这句话念给用户听：没有产品会真的让用户先做“选场景”的选择题，引导靠成片图，用户看到“像我要去的那个晚上”就点进去。文字只做说明（kicker 写去处，配方写打包内容），不做指令。三个去处对应三个子人群：

| 去处 | 子人群 | 现有氛围 |
| --- | --- | --- |
| Tonight | 派对女孩 | After Hours · Flash Party · Diamond Glow · Blue Hour · Chrome Club · Club Noir · Disco Dust · Crystal Kiss |
| Getaway | 旅行 / 度假博主 | Golden Getaway · Beach Day（新）· Postcard · Blue Hour |
| Everyday | 日常精致记录者 | Soft Daylight · City Walk（新）· Sunday Film · Café Table（新） |

每个氛围带一个更细的地点（`where`：Rooftop / Club / Dinner / Beach / Swim / Café / Streets / At home …），在卡片和详情页以 kicker 形式出现（`TONIGHT · ROOFTOP`）。旧的 Night out / Everyday / Travel / Portraits 筛选取消：Portraits 是拍摄对象不是去处，与心智不符。

新增的三个预设使用已有素材（portrait2 / city / cafe），补上度假和日常两个去处的密度；`HOME_LOOK_ORDER` 让首页前六张轮流覆盖三个去处。

## 2. 形态 → 三 Tab、预设打包、两条入口

**三 Tab：Home / Camera / Gallery。** 一只玻璃胶囊，相机居中为柠檬圆钮。“我的”不占 Tab 位，移到首页右上头像；礼盒（惊喜盲盒）只在 Gallery 出现，仍是拖放目标。相机从哪个 Tab 打开就回到哪个 Tab。

**预设 = 色彩 + 打光 + 颗粒。** 每个氛围在数据里有 `recipe:[color, light, grain]` 三枚文字和 `grain` 数值。卡片下方一行配方（`Deep city color · Direct flash · Fine grain`），详情页三枚玻璃小卡（COLOR / LIGHT / GRAIN）。渲染管线 `renderLook` 现在真的叠颗粒（与精修页同一张 tile、同一 overlay 混合），所以预览与成片一致。

**选氛围 → 上传 / 拍摄 → 成片。** 详情页把两条入口并列：`Upload a photo`（主）和 `Shoot`（玻璃）。两条路径都进入同一条生成链。

**成片页 = 出片即结束（2026-09-10 调整）。** 成片页只剩：整幅前后对比照片（556px 高）、一行配方说明、一个小的 `Refine` 入口（32px 胶囊，放在说明行右侧）、底部 `Share` 圆钮 + 通栏 `Save photo`。原先放在成片页上的 `Look intensity` 滑杆和 `Finishing touches`（Glow skin / Film grain / Sparkle / Brighter 四张预览）整体移除：它们让成片页读起来像“还没修完”，与“上传 → 生成 → 出片，结束”的心智相反。强度和一键修饰都在 Refine 里，成片页不再承载任何编辑控件。`RESULT-REFINE-FLOW.md` 中关于成片页“一键修饰预览”的段落以此为准。

**成片页的点修（2026-09-10 晚补充）。** 成片页唯一保留的编辑是点修，而且没有控件：在成片上点一下，点到的地方被局部修掉（去痘、去油光一类），一圈白色反馈后消失，不留标记；修过之后说明行才出现 `Undo`。不预标脸上有什么问题、没有画笔和尺寸滑杆、没有 Softer / Stronger 三档。拖中间的把手仍是前后对比，点照片与拖把手分开识别（移动超过 12px 视为拖动，不修）。Save 时把点过的位置一起烘进成片；新一次生成会清空。`Refine` 入口已从成片页移除，精修只从 Gallery 点进。规则细节见 `PRODUCT-STRUCTURE.md` 的「成片」一节。

**首页两种形态都在，都是图引导。** demo 左侧面板可切：

- 内容流（默认，9/8 版延续）：前后对比封面 + 去处筛选 chips + 两栏前后对比卡片流。封面和卡片上只有 kicker、名字、配方，没有引导语。
- 大 CTA 空状态：一张成片封面（带前后扫动）+ 一排可滑动的成片缩略图 + 一个 `Upload a photo` 主按钮和玻璃相机钮。点缩略图换封面，等于用图选氛围；主按钮带着当前氛围进入相册选择。

第一版大 CTA 用过“Where are you headed? / Pick the place. We pack the light.”加三张去处文字卡，已撤掉：把产品逻辑直接念给用户会显得生硬，也没有产品这样做。`collectionDetail`（按去处列出氛围）仍保留，当前没有入口。

选择存在 localStorage，刷新不丢。

## 3. 调性 → 字体是骨架，玻璃是表面

三个锚点里取“新潮 easy + 杂志感”，排除复古相机风（相机页保持 iOS 原生相机形制，不加取景框、胶片边等元素）。

### 字体决策

| 角色 | 字体 | 用在 |
| --- | --- | --- |
| 展示字（推荐） | **Instrument Serif** Regular + Italic | 词标 `muse`（小写斜体）、首页封面标题、详情页标题、页面标题栏 |
| UI 字 | **SF Pro**（系统字，非 Apple 设备回落 Helvetica Neue） | 所有可操作文字：按钮、chips、滑杆、标签、卡片名 |
| Kicker | SF Pro 600，9.5px，字距 .14em，全大写 | `TONIGHT · ROOFTOP`、COLOR / LIGHT / GRAIN 小标 |

推荐 Instrument Serif 的理由：细而挺、对比度适中，斜体有手写感，是当下时装 / 生活方式类 App 与杂志网站常见的展示衬线，能同时给出“杂志感”和“easy”，不会像 Playfair 那样端着。展示字统一通过 CSS 变量 `--display / --display-weight / --display-style / --display-tracking / --wordmark-style` 控制，换字只改变量。

demo 左侧“字体骨架”面板提供五个可即时切换的备选（Google Fonts 按需加载，选择本地持久化）：

- Instrument Serif — 推荐。
- Fraunces — 更软、更有性格，最接近 “Bo…” 的法式小奢。
- Playfair Display — 经典高反差杂志感，略保守。
- DM Serif Display — 更重更黑，海报感强，小字号偏闷。
- SF Pro only — WayShot 路线，全部系统字，靠粗细与字距成立；作为对照。

正式立项若走 Instrument Serif 或 Fraunces，两者均为 OFL 开源字体，可随包内置；若想再往上走，付费候选是 Canela / GT Sectra / Editorial New，风格方向一致。

### 主色

原稿是酸柠檬 `#ddf28d` + 一整套橄榄灰（约 280 个带绿的色值），读起来偏运动 / 户外，是 2023 年的颜色，与“小奢、杂志感”不在一个方向。demo 左侧“主色”面板提供四套可即时切换、并持久化的方案；实现方式是对整份样式做一次颜色变换（柠檬族 → 新主色的浅 / 中 / 深三档；深橄榄 → 墨色，若同一规则里是主色底则转为主色上的文字色；中橄榄 → 主色深调；橄榄灰 → 按主题色相重新调过的中性灰），以后置 `<style>` 覆盖，照片、玻璃白与纯黑不动。

| 方案 | 底 / 墨 | 主色 | 读感 | 备注 |
| --- | --- | --- | --- | --- |
| **Crème & Poudre（默认，推荐）** | 奶油 `#f7f2ea` / 暖墨 | 粉扑 `#f0c4bb`，文字 `#3a211d` | 法式药妆、Glossier；柔和、在照片旁不抢戏 | 最贴“买不起大牌但要精致感” |
| Butter | 暖白 `#f8f5ee` / 暖墨 | 黄油黄 `#f3da78` | 2025–26 时装圈主色，暖而软 | 与现状结构一致，改动最小 |
| Porcelain & Cherry | 冷白瓷 `#f6f4f1` / 墨 | 樱桃红 `#d3233b`，白字 | 杂志感最强，社媒识别度最高 | 需与错误态区分；在肤色旁偏抢 |
| Lime（现状） | 米白 / 橄榄墨 | 酸柠檬 `#ddf28d` | 运动 / 户外 | 仅作对照 |

定稿后把选中方案写回源样式（把变换结果固化），删除切换器与其余方案。

### 首页主按钮

首页 `Use this look` / 大 CTA 版 `Upload a photo` 加到 58px 高、通栏宽、16px 半粗，相机钮同高放右侧；轮播圆点从按钮行移到 kicker 行右侧，不再和按钮抢同一行。

### Liquid Glass

浮在照片上的 chrome 统一用半透明白 + `backdrop-filter: blur(18–26px) saturate(1.6–1.7)` + 1px 半透明描边 + 顶部 1px 内高光：底部胶囊（浅色页面浅玻璃，Gallery 深玻璃）、PRO 与头像、详情页配方卡与 Shoot 按钮、大 CTA 首页的缩略图条。主色只留给主动作（Use this look / Upload / Save / 相机钮）和选中态。

## 未定与下一步

- 首页形态未定：两种都已在 demo 中，建议用同一批用户看两版，看“选去处 → 进详情”的到达率。
- 字体：本次推荐 Instrument Serif，团队用左侧面板对比后定稿；定稿后删除切换器，只保留一套。
- 素材：Tonight 8 个氛围只复用 4 张参考图，Getaway / Everyday 各缺 1–2 张符合画像的自拍类素材（泳池、酒店早晨、试衣镜）。
- 文案：App 内文案为英文；kicker 与配方词是产品词汇的一部分，后续要和埋点、运营物料统一。
