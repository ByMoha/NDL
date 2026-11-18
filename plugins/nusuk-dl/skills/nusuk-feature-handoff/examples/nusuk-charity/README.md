# Worked example 2 · Nusuk Charity (نسك الإنسانية)

The giving flow, taken from a Figma file to a developer handoff on 17–18 November 2026. Where Support-in-Chat shows a conversational flow built from a brief, this example shows the **Figma-first path**: the file is kept as is, every conflict becomes a numbered design question, and only the states Figma draws are built.

## Links

| Output | Link | Notes |
|---|---|---|
| Figma | https://www.figma.com/design/cBtXOQA9rgnQVmCMgx3UA8/?node-id=76438-60811 | 🌱 Nusuk Charity, section "Nusuk Charity Flow" and "Payment Confirmation" |
| Prototype (draft 0.5) | https://claude.ai/artifact/TkuNddZJdVvuE1gvPCU6Sh | private to the owner |
| Gaps questionnaire (65 items) | https://claude.ai/artifact/WsSQEqJ6Bn6YNq8WB2VdLQ | private to the owner; database `answers`, `log`; uploads |
| Development handoff (draft 0.3.1) | https://claude.ai/artifact/QTwEjFG3YJY452tbnGNs7s | public; embeds the prototype |

If a link stops opening (the artifacts were being moved to another account in November 2026), rebuild from `source/`: it reproduces the published files byte for byte.

> **Built before DL-44 (18 November 2026):** this prototype has no iOS status bar. New prototypes draw it with the DL `StatusBar`, time fixed at 02:22 with the battery percentage (DL skill §9).

## What it demonstrates

- **Classification:** desire (closeness to Allah through sadaqa, sharing in iftar at the Haram) that ends in an intent act (pay). The campaign page carries the desire; the payment frame is functional. Realm: Spiritual, with a Functional payment rail.
- **Contracts:** home and campaign had no contract that fit, so they were drafted as **Proposed** `giving-landing` and `giving-details`; payment uses `payment`.
- **Figma audit:** one stage per frame with its node id, re-listed before every publish.

  | Stage | Node |
  |---|---|
  | Home (402 × 1992) | 87392:27288 |
  | Campaign, choose amount | 87401:38513 |
  | Payment (402 × 928) | 87418:5453 |
  | Payment failed sheet | 87427:7524 |
  | Payment expired sheet | 87427:7526 |
  | Success toast | 87427:7528 |
  | Tab Bar, Active = Empty (every frame) | 87392:27297 |

- **Measured within 2px:** toolbar row 66, featured card 204, categories 556, campaign card 146, amount box 507 (329 high), payment widget 146, home indicator 861, home scroll height 1993 against 1992.
- **Design questions Q-01 to Q-10** in the handoff, one row per conflict, each with a proposed answer and an owner: title mismatch, a misspelling, a template details list on a one-line donation, success copy naming the payment, no support route on failure, a booking verb on a donation, no amount error, every missing state, the scrolled Toolbar, no motion spec.
- **Floating bars:** only the Toolbar's first row (back, title, actions) sticks; search scrolls away; a progressive blur sits under the status bar and the row, and the empty Tab Bar floats with a blur rising from the bottom. The home indicator stays above sheets.
- **iOS motion:** push from the left in RTL with the screen beneath moving 30% and dimming 10%; pop on back; edge swipe from the right edge (35% or a flick); sheets rise 500 ms; the toast drops; `cubic-bezier(.32,.72,0,1)`; reduced motion makes it instant. The handoff carries the iOS and Android equivalents.
- **Gaps questionnaire:** 19 Blocker, 22 High, 24 Medium; nine items pre-answered from Nusuk sources (A3, A4, B9, P5, G2, R4, H4, H11, J2).

## Things that went wrong, and the fix

| Problem | Fix |
|---|---|
| Figma asset URLs and `exportAsync` return nothing useful from the Plugin API | Clone the node at 2–3× into a temporary frame named "TEMP · Claude export · delete", take `get_screenshot`, then delete the frame and confirm none remain |
| Local class names `.ch-amt` and `.ch-row` collided with the DL Charity Card and stacked the riyal sign | Prefix every local class and check against `bundle.css` before naming |
| A sticky element inside the Toolbar only sticks within the Toolbar | Make the wrapper, `.nk-tb` and `.nk-tb-bar` `display:contents`, then stick `.nk-tb-row`; carry the bar's own bottom padding (18 under search, 32 without) as margins |
| The progressive blur showed nothing when faded with `opacity` | An ancestor with `opacity < 1` becomes the backdrop root; keep the blur layers at full opacity and fade only the tint |
| A band of darker scrim above StatusSheet | The sheet wrap brings its own soft scrim; let it fill the screen instead of stacking a second one |
| Figma's "plus darker" button background | `mix-blend-mode: plus-darker` (Safari only) with a `color-mix` fallback under `@supports not` |
| Status bar island off centre in RTL | Use the DL `StatusBar`, never a hand-built one |

## Rebuild

```
cd source
python3 build.py local      # proto-local.html: React and the DL inlined, opens offline
python3 build.py publish    # prototype.html: React from cdnjs, the file to publish
cd h && GAPS_URL=<questionnaire link> python3 build.py   # handoff index.html; put prototype.html beside it
python3 nav.py              # Playwright + Chrome: sticky row, push and pop, edge swipe, sheets
```

`build.py` takes the DL bundle from `../../../../nusuk-design-language/assets/` and React from the plugin's `library/vendor/` when no local `dl/` or `vendor/` folder exists. `style-base.css` is the starter kit's `tools/prototype_style.css`. `img.js` holds the Figma images as data URIs.
