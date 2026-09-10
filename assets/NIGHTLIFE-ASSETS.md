# Nightlife photo assets

The UI uses the two user-supplied reference photographs and two new illustrative photographs generated with the built-in image_gen tool. Generated images are not real events or evidence of editing results. The originals remain in assets/*.png; the HTML embeds JPEG encodings for offline use.

- rooftop-party.png / bluehour-street.png — user references.
- diamond-party.png / neon-street-party.png — generated assets.
- Effects: direct-flash grading, glow, monochrome/chrome grading, and highlight-based sparkle; the previews and generation route use the same local renderer.

## Prompt set

### diamond

Use case: photorealistic-natural. Create ONE vertical 2:3 candid editorial nightlife photograph, not a collage, not a UI. A stylish adult woman age 25 with dark curly hair and warm brown skin laughing and turning toward a friend's compact digital camera at a crowded late-night apartment party. Waist-up framing, her face at 40% of frame height, relaxed asymmetrical pose, raised hand near her hair with real anatomically correct fingers. Tiny clear rhinestone gems dotted carefully beside the outer corners of her eyes, silver hoop earrings and a black satin top, just a few naturally bright pinpoint reflections on the stones. Direct on-camera flash against a dark rich burgundy room, a slightly blurred adult friend at the edge and small warm lamps in the far background. Realistic pores, lived-in party energy, tactile hair, subtle 35mm grain and slightly imperfect off-center framing. Looks like an excellent authentic Instagram photo dump from New York friends, spontaneous and fashionable, not a commercial stock portrait. No giant diamonds, no floating jewels, no artificial beauty-plastic skin, no text, no logo, no watermark, no UI, no frame. The mood references supplied by the user are candid young-adult rooftop parties and street snapshots at dusk, but create a different person and composition.

### party

Use case: photorealistic-natural. Create ONE vertical 2:3 authentic fashion photo-dump photograph. Three clearly adult friends ages 24-28 coming out of a small music venue on a New York side street at midnight; main subject is an East Asian woman with dark long hair in a silver metallic bomber jacket and loose dark jeans, laughing mid-step and looking past the camera. The main subject fills center-left from waist up, face at 38% frame height; a Black male friend and a redheaded female friend are naturally half-visible behind her, not symmetrically posed. Punchy on-camera direct flash freezes the main subject's expression; ambient red and deep blue venue lights and a little slow-shutter motion trail in the background suggest movement. Wet pavement highlights, chrome details, genuine candid playful chemistry, slightly tilted handheld 28mm composition. Real human skin, authentic clothing textures, true anatomy and natural hands. Fashionable youthful American nightlife, intimate believable moment, not a stock-photo advertisement. No fake glow around bodies, no text or lettering, no watermarks, no UI, no border, no collage.

## Instagram reference check

Queries: direct flash photography; rhinestone makeup. Two read-only search attempts through the Instagram connector. Both failed with HTTP 400 / No valid session ID. Current Instagram popularity was not verified. This version follows the user's supplied reference images rather than asserting a ranking.

