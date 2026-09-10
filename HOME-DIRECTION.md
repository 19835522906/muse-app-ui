# Homepage direction — scene-led presets

Updated: 2026-09-08. Superseded in part on 2026-09-09: the scene filters below (Night out / Everyday / Travel / Portraits) became three destinations (Tonight / Getaway / Everyday), each look now carries a color + light + grain recipe, and the home has a feed form and a big-CTA form. See `DESIGN-DIRECTION.md`. The evidence notes and asset provenance here still apply.

## Product decision

The product sells a ready-made photographic result for a recognizable moment. Users should choose based on the photo they have, not learn light, tone or filter settings.

Launch emphasis: Night out — parties, dates, dinners, friend groups, birthday nights and concerts. Direct-flash contrast, soft motion/halation and small jewelry highlights give before/after previews a distinctive visual story. This is a launch hypothesis, not evidence that a launch will go viral.

Repeat-use scenarios: Everyday (casual portraits, coffee, weekend snapshots), Travel (people at sunset, beach trips, open-sky landscapes), Portraits (close-ups and social profile photos). These scenario priorities are product judgments informed by the user brief; they are not a measured ranking of all US consumers.

## Homepage

One featured look with a real before/after preview and a short suitability line. Then All / Night out / Everyday / Travel / Portraits filters above a single two-column photo stream. No classification gate, technical filter taxonomy, popularity counters or fake personalized recommendations. Each card contains its name and one short description of suitable source photos. A look may belong to more than one scene. Preserve the direct path: look → iOS-style photo picker → generation → result → save.

The first four cards are After Hours, Diamond Glow, Soft Daylight and Golden Getaway: a recognizable launch style followed quickly by everyday and travel usefulness. Existing eight nightlife looks remain; four presets fill real scenario gaps. This does not add another product feature or account flow.

Before/after previews on the hero, cards and look detail page use a simulated flat "before" (the reference photo dimmed, desaturated and low-contrast; night looks add a warm phone-capture cast) because the reference assets are already finished images and the real difference was not visible. This is a marketing preview convention. The result page and the refine page always compare against the user's real original.

## Evidence and its limits

- Pinterest Business, Glamoratti, Pinterest Predicts 2026: https://business.pinterest.com/pinterest-predicts/2026/glamoratti/
  Read the official page. It describes Gen Z and Millennials driving a maximalist aesthetic with bolder jewelry and outfits. This supports testing expressive fashion finishes, not a claim that diamond filters or this app are already popular. The report's cited data is global English-language Pinterest searches, September 2023 to August 2025, with growth compared across the two annual periods; it is not current US-only Instagram usage.
- Google search, query: Pinterest Predicts 2026 Gen Z fashion party Glamoratti — one query.
- Google search, query: 2026 Gen Z digital camera direct flash photo dump trend — one query. Results surfaced a Financial Times Instagram report about a digital-camera revival, and a Young Hollywood direct-flash/photo-dump article snippet. The Young Hollywood result redirected to its homepage, so its article body was not treated as verified. These are directional discovery signals rather than a popularity ranking.

No new production analytics are implemented in this UI draft. To decide whether the hypothesis works after release, examine a look's path from preview to photo selection to completed save/share, and repeated use in the same scenario. Do not equate browsing a template with user value.

## Added material

The two new scene photographs were generated with the built-in image_gen tool and are illustrative, not customer photos or editing-result evidence. Original PNGs and embedded JPEG copies live in assets/:
- everyday-coffee.png / everyday-coffee.jpg
- golden-getaway.png / golden-getaway.jpg

## Prompts

### daytime

Use case: photorealistic-natural. ONE vertical 2:3 candid lifestyle photograph for an American young-adult photo-editing app's everyday/weekday scenario. Two adult women age 25 at an outdoor Brooklyn sidewalk coffee table on a bright late-spring afternoon. The main subject has long brown hair and wears an understated butter-yellow tee, oversized charcoal jeans, slim sunglasses pushed onto her hair; she is laughing mid-turn with an iced coffee in hand. Her friend is half-cropped naturally at the edge, in a blue striped shirt. Face around 38% frame height. Unposed direct point-and-shoot snapshot, soft sun through trees, a little motion in hair, flattering real skin texture, no plastic retouching. Subtle expensive 35mm colors, spontaneous cool fashion, imperfect framing. Feels like a friend's excellent Instagram carousel, not a stock ad. No text, no logos, no watermark, no UI or collage. Natural anatomy and hands.

### getaway

Use case: photorealistic-natural. ONE vertical 2:3 candid fashion-travel photograph. Two stylish adult friends age 26 laughing on a California beach boardwalk at golden hour. Main subject an adult Latina woman in a pale blue linen overshirt over a simple white top and relaxed shorts, wind catching her hair, turning back toward a friend's compact camera. Her adult Black female friend in loose white linen is naturally off-center behind her; ocean, sun-bleached boardwalk and palm shadows, believable details. Main subject fills middle foreground from thighs upward, face near 38% height. Warm late sun, clear natural skin, relaxed summer road-trip energy, cool casual American styling. Genuine photographic texture, subtle film highlight roll-off, handheld unposed snapshot composition. Not a tourism ad, not a professional fashion pose. No text, no logos, no watermark, no UI, no collage, anatomically correct hands.

