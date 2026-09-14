# Muse 产品框架

更新：2026-09-14。按 9/10 讨论定稿：底部三 Tab 首页 – 相机 – Gallery；9/14 首页加了 B 形态（沉浸内容流）、成片与精修合成一页、AI Retouch 改为「AI 框出脸 → 点部位修」、Portrait tab 改为预设包、保存后改为导出弹窗。模版清单与示例图 prompt 见 `TEMPLATES-AND-PROMPTS.md`。交给设计的逐页元素与流程说明见 `temp_iphone/【新产品立项】氛围模板App-20260906/页面结构与用户流程-设计版.md`（2026-09-13），本文只记框架决策。

## 框架

```
App
├─ 首页            预设模版（现在） · 输入文本生成（后续，先不做）
├─ 相机            模拟数码相机 · 预设模版
└─ Gallery 图库    App 内的照片；点一张 → 精修

二级页：模版详情 · 相册选择 · 生成等待 · 成片 · 精修（一页）· 我的 · 会员
```

主链路：选模版 → 上传 / 拍摄 → 生成 → 成片 · 精修（同一页：Save / Share，或就地调）。

## 首页

顶栏：App 名（左）、会员 + 个人中心入口（右）。

首页有两个形态，原型左侧面板可切，用来定调性（2026-09-14）：

- **A · Banner + 货架（Wayshot 式）**：Banner 导入 + 预设货架 + 相册内容，下面几段说的就是它
- **B · 沉浸内容流（Tezza 式，默认）**：一屏一个氛围，照片满屏出血，没有卡片和货架。见本节末尾

**Banner**

- 一个位置，轮播 2 个：常青模版（长期不换，如 Digicam）+ 当期爆款（按季更换，如 慢门）
- 展示该模版的 BA 效果（自动来回扫一次，之后停在 After）
- 一个按钮：Start Editing → 带着这个模版进相册选择 → 生成
- 不放文字引导，模版名 + 场景一行小字即可

**模版分区（纵向排列，每区一行横滑卡片）**

- 分区 1 · 夜晚氛围 **Night Vibes**：爆闪 / 红光 / Digicam / 慢门
- 分区 2 · 度假夕阳 **Sunset Getaway**：南法 / 农场 / 黄金时刻 / 泳池
- 分区 3–7 · 补充：Everyday（窗光 / 阴天 / 居家胶片）· Wellness（Studio Clean / Matcha Run / Sunrise Run）· Festival（Desert Dust / Neon Set / Sunset Stage）· Après-ski（Alpine White / Cabin Glow / Blue Hour）· Editorial（Editorial B&W / Quiet Color）
- 前两区是定下来的，后五区是补充；七区都是正式货架，没有"建议 / Proposed"标记
- 每区：一行紧凑标题 + 查看全部（→ 该分区合集页），不放副标题
- 卡片：模版 After 封面图，名字叠在图的底部，一排露 3 张。不放 BA 滑块，BA 留给详情页

屏效原则：Banner 通栏出血、底部渐隐进纸面，顶栏叠在图上，不留空白头部；一屏要能看到 Banner + 完整一行卡片 + 下一区标题。
- 点卡片 → 模版详情

**相册内容（A 形态最后一行）**

- 标题 Your photos，右侧 Open Gallery；一行横滑：App 内最近 8 张照片 + 末尾一张 Import 卡
- 点照片 → 直接进精修（和 Gallery 点一张一样）；Import → 系统相册导入

**B · 沉浸内容流**

- 竖向整屏吸附滑动，一屏就是一个氛围：照片满屏，进入这一屏时 Before → After 扫一次（停 0.4s，扫 1.15s，只有一条细白线），之后停在 After；滑走再滑回会重放
- 顶栏固定在最上层（App 名、PRO、头像），不随屏滚
- 每屏底部叠：可点的 kicker 胶囊（Night Vibes · House party ›，点进该主题合集）、模版名（展示字）、一句效果
- 每屏同样两个入口：**Upload a photo**（主按钮，带这个模版进相册选择）· **Shoot**（玻璃按钮，带这个模版进相机）
- 第一屏在入口上方有一行小字 Swipe up for the next look，滚过一次就消失
- 顺序：Banner 的两个位置（常青 + 当季）在前，之后按七个主题的货架顺序排；不含 Proposed 模版
- 底部三 Tab 胶囊换成深色玻璃，状态栏白字

## 模版详情

整屏就是 BA，文字压到最少，让她看效果而不是读说明。

- BA 整屏循环播放，像一段短视频：Before 停 0.6s → 扫到 After → 停 1.9s → 扫回 → 重来；扫动时只有一条细白线，没有拖动把手，没有 Before / After 标签
- 底部叠三行：场景小字（Night Vibes · Dinner party）、模版名、一句效果。效果是一句大白话，不是参数列表（Flash：One hard flash: skin goes bright, the room drops to black.），首页 Banner 用同一句
- 只有一个按钮：**Try it on my photo**（上传）。不放 Shoot，拍摄走相机 Tab
- 不放 chip / 标签，不放成段说明；WayShot 式的长描述（`visual` / `suits` / `shoot` 字段）保留在数据里，留给以后的"了解更多"或相机模式的拍摄提示用

## 生成等待

- 照片显影动效，下方一行状态（Creating your look…）+ Cancel
- 照片左下角一条小字，说正在做什么，逐条切换、停在最后一条：场景 → 色 → 光 → 质感（例：Poolside → Outdoor scene → Water turning aqua → Whites cleaning up → Sharpening）
- 每个模版 4 条，落在模版数据的 `steps` 字段；节奏固定，不与真实进度绑定，生成快于步骤时直接跳结果

## 相机

- 取景、翻转、变焦、快门
- 模式一 · Style：快门上方一条横滑模版轮播，与首页同一套
- 模式二 · Cameras：一排老相机，选哪台取景器就整套变成那台机器。每台带三样东西：
  - 屏幕：LCD 尺寸和比例（3:4 卡片机、带上下黑边的录像带、Instax 白边、翻盖机的小屏、Photo Booth 的横屏）
  - 机身 OSD：叠在取景器上的实时信息，P / ⚡A / 电量 / 对焦框 / 橙色日期戳、REC ● 时间码、▶ PLAY 与磁带日期、翻盖机的信号格和软键、一次性相机的光学亮线框
  - 效果：这台机器的色彩 + 颗粒 + 特效（扫描线、噪点、拖影带、像素化），出片即所见
- 首批八台：CCD ’05（2005 卡片机）· Y2K Compact（2001 银色卡片机）· MiniDV（2003 摄像机）· VHS-C（1996 家庭录像）· Disposable（35mm 一次性）· Instant（Instax mini）· Flip Phone（2007 翻盖 VGA）· Photo Booth（2008 笔电摄像头，镜像）
- Cameras 模式下不放变焦（老机器就是定焦的感觉），翻转移到右上
- 首页的 Digicam 模版 = 相机里的 CCD ’05，同一效果两个入口；相机 Tab 多出来的机型不进首页
- 快门 → 生成 → 成片 · 精修页；生成步骤和页面标题都用相机名
- 右下相册导入（放进取景框重构图）、左下最近拍摄

## Gallery 图库

- App 内的照片：生成过的成片、拍摄、导入
- 网格 + 简单筛选（全部 / 人像 / 风景）
- 点一张 → 精修
- 不做删除原图、云同步、多选（惊喜盲盒 Surprise 已于 2026-09-14 整套移除：礼盒圆钮、长按多选、拖放和批量生成都不再有）

## 成片 · 精修（一页）

生成完成后自动进入的就是这一页；从 Gallery / 首页相册行点一张进的也是它，只是没有 Look。成片和精修不再是两步（2026-09-14 合并）：照片一进来 Look 已经套好，能直接 Save，也能就地调。

- 顶栏：返回 · 模版名（下方一行 kicker：Night Vibes · Dinner party）· Share 圆钮 · Save 药丸。从 Gallery 进时标题是 Refine，没有 Share
- 照片卡：只放 After，contain 放入；左下撤销 / 重做，右下「按住看修饰前」（对比对象是原图），右上 ✦ **AI Retouch** 胶囊
- 底部四个 tab：**Portrait · Filters · Effects · Adjust**，一次只开一个；面板底部 ✕ 撤回本次打开后的改动、✓ 保留
  - **Filters**：第一张是本模版的滤镜，带 `Look` 角标、默认选中，滑杆显示模版名；后面是素材库（Hot / Gentle / Tone / Film / Vibe 分组）。选 ⊘ 表示把 Look 的颜色去掉
  - **Effects**：None → 本模版的特效（`Look` 角标，默认选中，强度按生成时的量标定）→ 素材库其余特效（Grain / Glow / Flash / Sparkle / Vignette / Light leak）
  - **Portrait**：预设素材包，见下
  - **Adjust**：曝光 / 对比 / 饱和 / 色温
- Reset 回到「生成时的样子」，不是回到无滤镜；Save 之后弹导出弹窗（见「导出」）
- 返回：没有改动直接走（从模版详情进的回详情，从相机进的回相机，从 Gallery 进的回 Gallery）；有未保存改动先问 Discard changes?

**Portrait tab = 预设素材包**

- 一行人脸小图：None · Natural · Soft Skin · Glow · Editorial · Sculpted。每包是一组 Skin / Eyes / Smile / Slim / Waist 数值；缩略图是这张照片的脸部裁切、套上 Look 和该包的真实效果
- 点一包 = 一次把整张脸设好；上方一根 **Strength** 滑杆按比例缩放整包（Soft Skin · 50 = 每项数值的一半）
- 用 AI Retouch 手动改过某一处之后，数值和任何包都对不上，这里显示「Set by hand in AI Retouch. Pick a pack to start over.」；再点一包就覆盖手动值。包是起点，不是锁

**AI Retouch · 独立入口（不是第五个 tab）= AI 找到脸，她点部位**

- 照片右上角一枚 ✦ AI Retouch 胶囊，浮在照片上，和四个 tab 分开；用它手改过后胶囊带一圈描边
- 点它 → **识别动画**：一个带四角的取景框从整张照片收拢到脸上（约 0.8 秒，框内一条扫描线，框下一枚「Finding the face…」小签），底部提示「Finding the face…」；期间照片不响应手势
- 框停稳、四角变主色 → 框内浮出可点的部位：**Shape**（脸外圈虚线轮廓）· **Skin** · **Eyes** · **Smile**，名字胶囊挂在脸外圈，不压五官；底部换成 Face / Body / Done 一行 + 提示「Face found. Tap a place on it, or the outline to reshape.」
- **点（Tap）= 拉出滑杆**：点 Skin → 该处高亮，胶囊变「Skin · 40」，底部出现这一处的滑杆
- **搓（Rub）= 直接在照片上调**：选中一处后，在照片任意位置左右滑就是调强度，滑杆和胶囊跟着手指走
- **捏（Sculpt）= Shape**：点虚线轮廓 → 轮廓上出现 14 个点位 + 鼻翼 2 个菱形点（像素蛋糕式），拖任意一点即液化；原轮廓留虚线残影；**Mirror** 默认开；双击一点归位；**Slim** 滑杆是宏，把颊、颚点位一起向内收
- Body tab：Waist / Legs 沿用「点 + 滑杆 + 搓」，幅度上限低；构图里没有腿就不出现 Legs
- Done 或再点胶囊收起，改动保留；✕ 撤回这次进入后的全部改动。这里改的和 Portrait 包是同一组数值，所以两边互相看得见
- 之前那版「点一处修掉一颗痘」的 AI Retouch 已撤：点修的对象是部位，不是瑕疵

V1 不做：妆容、真实人脸检测。原型给四张内置人像手工标了脸部布局（轮廓 / 眼 / 鼻 / 嘴 / 腰），识别框和蒙版都按它贴合，其余照片退回居中默认布局；正式版这套布局由人脸关键点提供

## 导出

导出做轻：没有导出设置页、没有尺寸格式选择。Save 一步写入相册（全尺寸 JPG），紧接着弹一张底部弹窗引导去分享（2026-09-14）：

- 标题 ✓ Saved to Photos；一张卡：成片缩略图 + 名字 + Full size · JPG + Your original stays untouched.
- 一行小标 Post it while it’s fresh，下面四个分享目标：**Instagram · TikTok · Messages · More**（原型里点了只提示未接入）
- Done 收起，留在当前页；成片 · 精修页 Save 走这张弹窗，从「我的 · 历史」保存也一样

## 我的 / 会员（二级）

- 我的：账户、会员、历史记录、订阅管理、帮助 / 隐私 / 条款
- 会员：权益、方案、购买（未接入）

## 待定

1. 日常分区是否进 V1
2. Cameras 里的机型要不要也能"上传照片套用"（现在只能拍）；机型是否分 Pro 解锁
3. 输入文本生成：什么时候开放，放首页哪个位置
4. Pro 边界：锁哪些模版 / 人像项目 / 张数
