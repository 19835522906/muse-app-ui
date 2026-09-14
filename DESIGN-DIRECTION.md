# 设计方向 — 画像、形态、调性落到原型

更新：2026-09-14（首页 B 形态 = Tezza 式沉浸内容流；成片与精修合成一页，Filters / Effects 先给本模版的；AI Retouch = AI 框出脸、她点部位；Portrait tab = 预设包；Save 后导出弹窗。同日更早：成片页改成 After + 四入口编辑器；人像精修改为点 / 搓 / 捏三手势）；此前 2026-09-10（主色方案、首页主按钮），首版 2026-09-09。对应 `muse-app.html`。此前的首页场景说明见 `HOME-DIRECTION.md`，成片与精修见 `RESULT-REFINE-FLOW.md`。

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

**三 Tab：Home / Camera / Gallery。** 一只玻璃胶囊，相机居中为柠檬圆钮。“我的”不占 Tab 位，移到首页右上头像。相机从哪个 Tab 打开就回到哪个 Tab。Gallery 只做一件事：点一张进精修，没有礼盒、没有长按多选（2026-09-14 移除惊喜盲盒）。

**预设 = 色彩 + 打光 + 颗粒。** 每个氛围在数据里有 `recipe:[color, light, grain]` 三枚文字和 `grain` 数值。卡片下方一行配方（`Deep city color · Direct flash · Fine grain`），详情页三枚玻璃小卡（COLOR / LIGHT / GRAIN）。渲染管线 `renderLook` 现在真的叠颗粒（与精修页同一张 tile、同一 overlay 混合），所以预览与成片一致。

**选氛围 → 上传 / 拍摄 → 成片。** 详情页把两条入口并列：`Upload a photo`（主）和 `Shoot`（玻璃）。两条路径都进入同一条生成链。

**成片和精修是同一页（2026-09-14 合并）。** 之前是成片页（After + 四入口 dock + Edit More）再进精修页（四个 tab），两页的 Filters / Effects / Adjust 面板本来就是同一套，用户要在两处做同一件事。合并后生成完直接进编辑页：Look 已经套好、Save 亮着，什么都不动也能存；想动就点 tab。「本模版优先」落在两处：Filters 第一张是本模版的滤镜（`Look` 角标、默认选中、滑杆显示模版名），后面才是素材库分组；Effects 是 None → 本模版的特效（`Look` 角标）→ 素材库其余。Reset 回到「生成时的样子」而不是空白。渲染上 Look 的颜色是 `filter:'look'`，Look 的打光 / 颗粒是 Effects 的默认选中项（`lookEffect`，强度按生成步骤实际叠的量标定），所以改哪一项都是连续的，不会从生成图跳到近似图。

**人像精修 = 摸脸（2026-09-14 定稿）。** 照片本身是控制面板，三种手势各管一类修饰：**点**一处拉出滑杆（Skin / Eyes / Smile / Waist / Legs），**搓**——选中后在照片上左右滑直接调，**捏**——Shape 是脸轮廓上的 14 个点位 + 鼻翼 2 个菱形点，拖哪儿哪儿液化，默认左右镜像，原轮廓留虚线残影，双击归位，`Slim` 滑杆做一键收颊的宏。蒙版按每张脸贴合（`FACE_LAYOUTS`），名字胶囊当标注挂在脸外圈，不压五官。

之前那版是四块通用椭圆 + 一条滑杆：椭圆和脸对不上，Shape 只是整张脸横向压缩，用户看不出“改了哪里”。参考像素蛋糕的轮廓点位之后决定把 Shape 做成点位液化，同时把“拉滑杆”留给强度类修饰——形状要指哪儿改哪儿，强度要一根杆子够得着；两种都不需要项目列表。没有采用的方向：在蒙版上出一个环形拨盘（学习成本高、单手不好用）；两指在眼睛上捏合放大（桌面演示不了，留到真机再评估）。

**Portrait tab 只给包，手放到 AI Retouch 里（2026-09-14 定稿）。** Portrait 和 Filters 同一形态：一行缩略图 + 一根 Strength 滑杆。包是 None · Natural · Soft Skin · Glow · Editorial · Sculpted，每包一组 Skin / Eyes / Smile / Slim / Waist 数值，缩略图是她这张脸套上 Look 和该包的真实效果（`renderPackThumbs`）；Strength 按比例缩放整包（`packValues`）。手动改过某一处之后没有包处于选中态，面板写「Set by hand in AI Retouch. Pick a pack to start over.」。这样 tab 里没有任何需要「点照片」的交互，四个 tab 形态一致。

**AI Retouch = AI 框出脸，她点部位（2026-09-14 定稿）。** 上一版把 AI Retouch 做成「点一处修掉一颗痘」，方向错了：她要的不是去瑕疵，是像人脸识别那样框出脸、标出 Shape / Eyes / Skin / Smile，然后对着部位修。所以现在点胶囊先跑一段识别动画——四角取景框从整张照片收拢到脸上（`.face-frame` 过渡 0.78s，框内扫描线，框下「Finding the face…」），停稳后四角变主色，框内浮出摸脸的三手势（点拉滑杆 / 搓直接调 / 捏轮廓点位液化，见上一段）。它仍然是照片上的独立入口而不是第五个 tab：四个 tab 是「整体调」，AI Retouch 是「对着脸的某一处调」，两边改的是同一组人像数值，所以在 Portrait tab 里能看见「手动改过」的状态。识别动画在原型里是按手标脸部布局播的，正式版换成真实关键点，动画不变。

**导出做轻，弹窗引导去分享。** 没有导出设置页。Save 一步写入相册，紧接着一张底部弹窗：✓ Saved to Photos、成片缩略图卡（名字 · Full size · JPG · 原图不动）、一行 Post it while it’s fresh 和四个目标（Instagram · TikTok · Messages · More），Done 收起留在当前页。成片 · 精修页和「我的 · 历史」保存都走这张弹窗。

**首页两种形态都在，用来定调性（2026-09-14 重做）。** demo 左侧面板可切，选择存 localStorage：

- **A · Banner + 货架（Wayshot 式）**：Banner 导入 + 七排预设货架 + 最后一行 Your photos（相册内容，点开直接精修）。信息密度高，像一个工具货架。
- **B · 沉浸内容流（Tezza 式，默认）**：一屏一个氛围，照片满屏出血，竖向吸附滑动；进入一屏时 Before → After 扫一次然后停在 After；文字只有 kicker 胶囊（点进主题合集）、模版名、一句效果；每屏同样两个入口 Upload a photo / Shoot；顶栏固定，底部三 Tab 换深色玻璃。参考 Tezza 的 Studio 页：整屏内容 + 一个衬线标题 + 底部一排小动作 + 一个主按钮，全屏就是调性本身。

B 的取舍：把「选氛围」从「浏览货架」变成「刷内容」，一次只看一个，更沉浸也更慢；货架仍然在（kicker → 主题合集、See all 仍在合集页），只是不再铺在首页。A 保留下来做对照，也给「相册内容」留位置。更早的两版（9/8 内容流卡片 + 大 CTA 空状态）都已撤下。

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

- 首页形态未定：A 货架 / B 沉浸流都在 demo 中，建议用同一批用户看两版，看「进入 Upload / Shoot」的到达率与停留。B 若定稿，要补每个模版的竖版满屏封面素材。
- 字体：本次推荐 Instrument Serif，团队用左侧面板对比后定稿；定稿后删除切换器，只保留一套。
- 素材：Tonight 8 个氛围只复用 4 张参考图，Getaway / Everyday 各缺 1–2 张符合画像的自拍类素材（泳池、酒店早晨、试衣镜）。
- 文案：App 内文案为英文；kicker 与配方词是产品词汇的一部分，后续要和埋点、运营物料统一。
