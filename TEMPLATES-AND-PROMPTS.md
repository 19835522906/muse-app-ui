# 模版清单与示例图 Prompt

更新：2026-09-10。首页每个位置放什么、每个模版长什么样、示例 BA 图怎么生成。框架见 `PRODUCT-STRUCTURE.md`。

## 首页排布

| 位置 | 模版 | 说明 |
| --- | --- | --- |
| Banner · 常青 | Digicam | 全年不换，任何夜晚随手拍都能用 |
| Banner · 爆款 | Slow Shutter | 按季轮换；当期用慢门，最有"没见过"的感觉 |
| 1 · 夜晚氛围 → **Night Vibes** | Flash · Red Light · Digicam · Slow Shutter | 顺序按视觉冲击排 |
| 2 · 度假夕阳 → **Sunset Getaway** | Riviera · Farmstead · Golden Hour · Poolside | 南法排第一，最贴人群 |
| 3 · Everyday | Window Light · Overcast · Sunday Film | 补充；是否进 V1 待定 |
| 4 · Wellness | Studio Clean · Matcha Run · Sunrise Run | 补充 |
| 5 · Festival | Desert Dust · Neon Set · Sunset Stage | 补充，季节位 |
| 6 · Après-ski | Alpine White · Cabin Glow · Blue Hour | 补充，季节位 |
| 7 · Editorial | Editorial B&W · Quiet Color | 补充 |

前两行是定下来的，名字按"夜晚氛围 / 度假夕阳"直译成 App 内英文；后五行是我补的，每行至少三个模版。原型里七行都已作为正式货架展示（不再有 Proposed 标记），用现有素材占位。

## 补充的主题

夜晚和度假之外，按人群（欧美 20 多岁、穿 Alo、多账号运营）最常发的内容类型挑的。

| 主题 | 为什么 | 模版 |
| --- | --- | --- |
| Everyday | 咖啡、街拍、居家，发得最频繁但最没"效果"，靠光和胶片感把普通照片抬一档 | Window Light（窗光干净白）· Overcast（阴天奶灰）· Sunday Film（暖胶片褪色） |
| Wellness | Alo 人群的日常主场：普拉提、健身房镜子、matcha run。发得最多，现有产品都没专门做 | Studio Clean（明亮中性、镜子照不发黄）· Matcha Run（柔绿奶油、晨光）· Sunrise Run（清晨冷粉灰、空街） |
| Festival | Coachella 一类，季节性爆款位，视觉冲击强、亮片和沙尘天然适合颗粒和漏光 | Desert Dust（暖沙金、漏光、粗颗粒）· Neon Set（舞台色饱和、光晕）· Sunset Stage（逆光夕阳、暖雾、眩光） |
| Après-ski | 冬季的度假，手机拍雪全是灰蓝，"雪是白的、人是暖的"是明确痛点 | Alpine White（干净白、冷蓝）· Cabin Glow（壁炉琥珀、柔光）· Blue Hour（雪地蓝调时刻、暖窗） |
| Editorial | 最稳的"杂志感"，穿搭和肖像都能用，全年不过时 | Editorial B&W（高对比黑白、粗颗粒）· Quiet Color（低饱和 lookbook 色） |

再往后可以考虑：City Break（纽约 / 巴黎 / 伦敦街头的城市短途）、Date Night（餐厅烛光，可并入夜晚）、Wedding Guest（花园婚礼的柔和胶片）、Autumn（落叶、南瓜地，季节位）。先不做。

### 补充主题的 After prompt

同样每张一个不同的人，和前面 27 个不重复。

- **Studio Clean**：`A tall brunette with a low bun in a sage green ribbed workout set, checking her phone in a bright pilates studio mirror, reformer machines behind.` + `Bright, even, neutral daylight, clean whites, no yellow cast, no grain. 4:5.`
- **Matcha Run**：`A blonde with a claw clip in a cream zip-up and leggings holding an iced matcha, walking past a white-brick café on a sunny morning.` + `Soft greens and cream, gentle morning light, low contrast, barely any grain. 4:5.`
- **Desert Dust**：`A woman with long copper braids in a sequin bralette, fringe skirt and cowboy boots, walking through a dusty festival ground at golden hour, ferris wheel behind.` + `Warm dusty gold, hard low sun, light leak from the corner, coarse grain. 4:5.`
- **Neon Set**：`A Black woman with a buzz cut and silver face gems in a mesh top, on someone's shoulders in a festival crowd at night, stage lights blazing.` + `Saturated stage color, magenta and blue, soft glow around lights, fine grain, no flash. 4:5.`
- **Alpine White**：`A brunette with a French braid in a white puffer and ski goggles pushed up, holding skis at the top of a slope, mountains behind.` + `Clean bright whites, cool blue sky and shadows, warm skin, fine grain. 4:5.`
- **Cabin Glow**：`A redhead with loose waves in an oversized cream cable-knit sweater, holding a glass of red wine by a stone fireplace in a wooden chalet.` + `Warm amber light, soft glow, deep warm shadows, fine grain. 4:5.`
- **Editorial B&W**：`A woman with slicked-back dark hair and strong brows in a black blazer with nothing underneath, seated on a stool against a plain studio wall, looking off-camera.` + `High-contrast black and white, deep blacks, coarse grain, magazine portrait. 4:5.`
- **Sunrise Run**：`A woman with a dark ponytail and freckles in a dusty-pink running set and white cap, mid-stride on an empty tree-lined street just after sunrise, breath visible.` + `Cool pink and soft grey dawn light, low contrast, clean, no grain. 4:5.`
- **Sunset Stage**：`A curly-haired blonde in a crochet top and denim shorts, arms up in a festival crowd at sunset, stage and palm trees silhouetted behind, sun flaring over her shoulder.` + `Backlit warm haze, orange and pink, soft lens flare, fine grain. 4:5.`
- **Blue Hour**：`A woman with a dark bob and a red beanie in a black ski suit, carrying her snowboard through a snowy alpine village street at dusk, chalet windows glowing.` + `Deep blue dusk on snow, warm amber windows, fine grain. 4:5.`
- **Quiet Color**：`A woman with shoulder-length light-brown hair in a grey oversized suit and white tank, standing against a pale studio wall, hands in pockets, neutral expression.` + `Muted low-saturation color, soft studio light, light grain, lookbook. 4:5.`

## 模版定义

每个模版三件事：色调、光、质感。再加"适合"和"拍摄建议"（有相机配合才写）。这三段就是详情页下半段的文字来源。

### 夜晚氛围

**Flash · 爆闪**
- 色调：深黑背景，冷白高光，皮肤略过曝发白，饱和度中等偏低
- 光：正面机顶直闪，硬光，主体后有硬阴影，背景全黑
- 质感：细颗粒，轻微暗角，边缘轻微色散
- 适合：室内派对、街头夜拍、餐厅
- 拍摄建议：闪光强开，ISO 400，1/60s
- 解决：手机夜拍的糊、黄、平，一闪之下全是质感

**Red Light · 红光**
- 色调：红 / 品红环境光包裹全画面，高光偏粉，阴影深红到黑
- 光：环境光为主，无闪光；光源在画面外或边缘
- 质感：中等颗粒，轻微光晕（halation）
- 适合：酒吧、夜店、KTV、演出后台
- 解决：夜店照片本来就红，但手机拍出来脏；这个把红做干净、做高级

**Digicam · 常青数码相机**
- 色调：2000 年代 CCD：低动态范围，高光溢出发白，阴影偏青，闪光下皮肤暖黄
- 光：机顶小闪光，直、平、亮
- 质感：轻微软焦、紫边、噪点而不是胶片颗粒；可选日期戳
- 适合：任何夜晚、任何室内；聚会合照最合适
- 拍摄建议：相机 Tab 的"模拟数码相机"模式直接出这个效果
- 解决：不用想，随手拍就有时代感；是常青位的原因

**Slow Shutter · 慢门**
- 色调：饱和，灯光色彩被拉成彩色光轨
- 光：后帘同步：慢门拖影 + 闪光定格，主体清晰、背景运动模糊和光轨
- 质感：细颗粒，光轨有轻微拖尾
- 适合：舞池、演唱会、车流街头、任何有灯在动的地方
- 拍摄建议：1/4s 慢门 + 闪光，主体保持一秒静止，手机可以小幅移动
- 解决：手机做不出来的效果，是最有传播力的一款

### 度假

**Riviera · 南法度假**
- 色调：奶油暖光，褪色柔和，粉橙、赭石、薰衣草紫，低对比
- 光：上午或傍晚的柔和侧光，高光柔，阴影抬起
- 质感：细颗粒，轻微柔焦，高光微微发雾
- 适合：地中海老城、露台早餐、白墙蓝门、船上
- 解决：把普通旅游照变成 Slim Aarons 式的度假画报感

**Farmstead · 农场**
- 色调：胶片浓郁色彩（Ektar / Portra 400 方向），绿更深、黄更金、红更饱和
- 光：午后暖阳，斜射，长阴影
- 质感：明显胶片颗粒，轻微暗角，高光柔和滚落
- 适合：农场、草地、野餐、露营、乡野公路
- 解决：普通、平淡的户外照变得有色彩和胶片质感；是"救平图"的一款

**Golden Hour · 黄金时刻**
- 色调：金橙暖调，肤色被夕阳染暖，天空粉橙渐变
- 光：低角度逆光 / 侧逆光，发丝边缘发光，轻微炫光
- 质感：细颗粒，轻雾感
- 适合：海边、屋顶、公路、任何傍晚户外
- 解决：把非黄金时刻拍的照片变成黄金时刻

**Poolside · 泳池**
- 色调：高调，整体提亮到微过曝，白色发亮，水色青绿，肤色透
- 光：正午直射日光，硬光但被高调压平
- 质感：几乎无颗粒，干净锐利
- 适合：泳池、沙滩、白墙、游艇
- 解决：正午大太阳的死白照片，变成时装片式的漂白感

### 日常（待定）

**Window Light · 窗光**：自然色、柔和侧光、奶油白、无颗粒；咖啡馆、家里窗边。
**Overcast · 阴天街拍**：低饱和、奶灰、柔和对比、细颗粒；阴天街头、通勤路上。
**Sunday Film · 居家胶片**：暖褪色、柔光、细颗粒；床上、沙发、早餐桌。

## 示例图生成

### 通用规则

- 每个模版出一对 BA：先生成 **After**（模版效果已经在图里），再用图生图把它改成 **Before**（同一张图的"没修过的手机随手拍"）。反过来做也行（真实手机照 → 编辑成 After），Before 更真，但需要合适的原片。
- 比例 4:5（1080×1350）。卡片用中心裁方，Banner 用上部裁 16:9，一张图三用。
- 市场：欧美。人物是欧美面孔，白人、黑人、拉丁裔、中东裔混合，不出现东亚面孔。
- 每张图一个不同的人。8 个模版 × 3 张 = 24 张，加日常 3 张，共 27 个人，下面每个模版给了 A / B / C 三个人物，发色、肤色、发型、穿着、所在位置都不同；不允许任何两张图用同一个人或同一套衣服。服装跟场景走：派对是吊带裙和皮衣，夜店是亮片和网纱，南法是亚麻和草帽，农场是牛仔和靴子，泳池是泳装。
- 年龄 20 多岁，自然妆，不看镜头或半看镜头，抓拍感；风格是 quiet luxury，不是 fast fashion。
- 每个模版按 A / B / C 各生成 1 张，挑 1 张做封面，其余做详情页和卡片备选。某一张不满意就重跑同一个人物句，不要换成别的模版里的人。
- 所有 prompt 末尾统一加：`photorealistic, candid, shot on phone, no text, no watermark, no logo`。

### Before 通用 prompt（图生图，对 After 使用）

```
Turn this into the same photo as an unedited phone snapshot: flat colors, low contrast, neutral-to-slightly-yellow white balance, no flash, no grain, no color grading, slightly underexposed, ordinary auto mode look. Keep the exact same people, pose, framing and background.
```

夜晚模版的 Before 追加：`dim, noisy, slightly blurry, mixed street lighting`。

### After prompt

写法：每个模版 = 一段「场景与光」+ 三个「人物」A / B / C。生成时把人物句放在最前面，接场景与光，末尾加通用后缀。三张图三个人，互不重复；全部 27 张图没有两张是同一个人。

#### 夜晚

**Flash**

场景与光：
```
Direct on-camera flash at night: face and skin bright and slightly overexposed with cool white highlights, hard shadow thrown on the wall behind, background falls to near black. Fine film grain, slight vignette, paparazzi snapshot feel. 4:5.
```
- A：`Candid photo of a woman in her mid-20s with a platinum blonde bob, black satin slip dress and thin gold chain, laughing mid-conversation at a dinner party in a Brooklyn loft, wine glass in hand.`
- B：`Candid photo of a brunette with long loose waves, red silk camisole and black leather trousers, stepping out of a restaurant onto a New York street at night, clutch under her arm.`
- C：`Candid photo of a Black woman with short natural curls, white oversized blazer over a bralette, sitting in the back seat of a taxi, looking out the window.`

图生图版：`Relight this photo as if shot with a hard direct on-camera flash at night: bright cool-white subject, background falls to black, hard shadow behind, fine grain, slight vignette. Keep people, pose and framing.`

**Red Light**

场景与光：
```
Whole scene washed in deep red and magenta ambient light, skin glowing red, highlights pink, shadows crimson to black, subtle halation around the lights, medium film grain, cinematic nightlife mood. 4:5.
```
- A：`A Black woman in her 20s with a slicked-back bun, sequin halter top and gold hoops, leaning on the bar of a dim cocktail lounge.`
- B：`A Middle Eastern woman with long dark hair and a black long-sleeve mesh top, singing into a microphone in a private karaoke room.`
- C：`A pale redhead with a pixie cut and a black leather corset top, sitting in a club booth with a martini, neon sign behind her.`

图生图版：`Grade this photo into a deep red and magenta nightclub ambience: red ambient light on skin, pink highlights, crimson shadows, soft halation, medium grain. Keep people, pose and framing.`

**Digicam**

场景与光：
```
Early-2000s compact digital camera photo with small built-in flash: warm-yellow skin, blown-out highlights, cyan-tinted shadows, low dynamic range, slightly soft focus, faint purple fringing, digital noise, orange date stamp in the bottom right corner. 4:5.
```
- A：`Two friends at a house party, a brunette in a leather jacket and a redhead in a mesh top, hugging and grinning at the camera.`
- B：`A strawberry-blonde with freckles in a baby tee and low-rise jeans, holding a red plastic cup in a crowded kitchen, mid-laugh.`
- C：`A Latina with a claw clip and satin camisole and her friend with box braids, cheek to cheek in a bathroom mirror selfie at a party.`

图生图版：`Make this look like it was shot on a 2003 CCD point-and-shoot with built-in flash: warm yellow flash on skin, blown highlights, cyan shadows, low dynamic range, soft focus, purple fringing, digital noise, orange date stamp bottom right. Keep people, pose and framing.`

**Slow Shutter**

场景与光：
```
Rear-curtain-sync flash: the subject sharp and frozen by the flash while colorful lights streak into long light trails and motion blur around her, saturated colors, fine grain, energetic nightlife photo. 4:5.
```
- A：`A Latina with long dark curls in a silver metallic mini dress, dancing in a crowded club.`
- B：`A tall Scandinavian blonde with a sleek high ponytail in a black cut-out dress, arms up in a concert crowd, stage lights behind.`
- C：`A Black woman with long braids in a neon green top and cargo trousers, spinning on a rooftop party with city lights behind.`

图生图版：`Add a slow-shutter rear-curtain flash effect: keep the subject sharp, turn background lights into colorful streaks and motion trails, add movement blur around the edges, saturated colors, fine grain. Keep people, pose and framing.`

#### 度假

**Riviera**

场景与光：
```
Late-morning soft side light. Creamy warm faded tones, pastel peach and ochre palette, low contrast, lifted shadows, soft hazy highlights, fine grain, 1970s resort photography feel. 4:5.
```
- A：`A brunette in a white linen dress and straw hat having breakfast on a terrace in a South of France old town, terracotta walls and lavender shutters, espresso and croissants on the table.`
- B：`A dark-blonde woman with a silk headscarf, vintage cat-eye sunglasses and a striped Breton top, sitting on a parked vintage Vespa on a narrow street in Menton.`
- C：`A mixed-race woman with curly hair in a lemon-yellow sundress, leaning on the rail of a wooden boat off the Côte d'Azur, turquoise water behind.`

图生图版：`Grade this into a South-of-France resort look: creamy warm faded tones, pastel peach and ochre, low contrast, lifted shadows, soft hazy highlights, fine grain, 1970s travel-magazine feel. Keep people, pose and framing.`

**Farmstead**

场景与光：
```
Late-afternoon low sun, long shadows. Rich film color like Kodak Ektar: deep greens, golden yellows, saturated reds, pronounced film grain, gentle vignette, soft highlight roll-off. 4:5.
```
- A：`A freckled redhead in a vintage denim jacket, white tank and leather boots walking through golden hay fields on a farm, a dog running ahead.`
- B：`A brunette with a long braid in a green gingham dress carrying a wicker basket through an apple orchard, ladder against a tree.`
- C：`A Black woman with cropped hair in a waxed barn jacket and jeans, leaning on a wooden fence with two horses in the pasture behind.`

图生图版：`Grade this like Kodak Ektar film: richer deeper greens, golden yellows, saturated reds, warm afternoon light, pronounced film grain, gentle vignette, soft highlight roll-off. Keep people, pose and framing.`

**Golden Hour**

场景与光：
```
Backlit by a low golden sun, hair edges glowing, warm skin, pink-orange sky gradient, slight lens flare, light haze, fine grain, effortless vacation snapshot. 4:5.
```
- A：`A blonde woman with beach waves in a crochet cover-up and bikini walking along the shoreline at sunset, hair blowing.`
- B：`A brunette with bangs in a slip dress and oversized denim jacket sitting on the hood of a vintage car on a coastal road at sunset.`
- C：`An olive-skinned Mediterranean woman with dark hair in a terracotta linen dress on a Lisbon rooftop at sunset, tiled roofs behind.`

图生图版：`Relight this photo as golden hour: warm orange light from a low sun behind the subject, glowing hair edges, warm skin, pink-orange sky, slight flare, light haze, fine grain. Keep people, pose and framing.`

**Poolside**

场景与光：
```
Noon, harsh direct sunlight, high-key exposure: whites glowing and slightly blown out, aqua water, translucent bright skin, almost no grain, clean and sharp, fashion editorial pool photo. 4:5.
```
- A：`A Black woman with long braids in a white one-piece swimsuit and oversized sunglasses sitting at the edge of a hotel pool.`
- B：`A blonde with wet slicked-back hair in a red bikini floating on a white inflatable in a villa pool.`
- C：`A brunette with a chin-length bob in a striped swimsuit and an open white shirt, lying on a lounge chair by a Palm Springs pool.`

图生图版：`Push this into a high-key bleached pool look: lift exposure until whites glow, clean aqua water, bright translucent skin, minimal grain, sharp and clean. Keep people, pose and framing.`

#### 日常（待定，需要时再生成；三张也是三个不同的人）

- **Window Light**：`A brunette in an oversized grey cardigan at a café table by a large window, latte and a book, soft natural side light, creamy whites, true-to-life colors, no grain, calm and clean. 4:5.`
- **Overcast**：`A woman with auburn hair in a long camel coat and white sneakers walking on a London street on an overcast day, desaturated creamy-grey tones, soft contrast, fine grain, quiet street photography. 4:5.`
- **Sunday Film**：`A dark-haired woman with a fringe in a white t-shirt and boxer shorts on a linen sofa in a sunlit Paris apartment on a Sunday morning, warm faded film tones, soft light, fine grain, cozy snapshot. 4:5.`

## 生成之后

把图放进 `assets/`，命名 `look-<id>-after-01.jpg` / `look-<id>-before-01.jpg`（id：flash / redlight / digicam / slowshutter / riviera / farmstead / goldenhour / poolside / windowlight / overcast / sundayfilm / studio / matcha / sunriserun / desert / neon / sunsetstage / alpinewhite / cabin / bluehour / editorialbw / quietcolor，共 22 个）。首页七行货架和详情页（整屏 BA 循环）都已改好，现在用旧素材占位；图到了我直接替换。
