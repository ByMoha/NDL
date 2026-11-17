# Page

Renders a template: an ordered list of sections (patterns) and the bottom bar. It mirrors the CMS page model, so the same JSON can drive the app, the CMS preview and decks.

**Figma source:** 🏠 Landing Experience V2 › CMS › Rawdah Landing (`18147:16034`, short; `18147:15994`, all sections). Read 9 November 2026.

## Props

| Prop | Type | Notes |
|---|---|---|
| `sections` | `PageSection[]` |  |
| `tabBar` | `object \| false` |  |
| `template` | `'rawdah-landing' \| 'rawdah-landing-full' \| PageTemplate` |  |
| `width` | `number` |  |

## Templates in this release

| Template | Sections (top to bottom) |
|---|---|
| `rawdah-landing` | featured-header · upcoming-requests · categories (products) · categories (faces) · cards-slider · guide · services-box · cards-list · bottom bar |
| `rawdah-landing-full` | featured-header · upcoming-requests · categories · cards-slider · cards-slider (grid) · category-chips · guide · playlist · bento-grid · services-box · list-side-by-side · cards-list · leaderboard · bottom bar |

The JSON is in `templates/rawdah-landing.json` and as `NusukDL.templates`.

## Section model

`{ "pattern": "<name>", "title": "…", "tag": "#…", "actionLabel": "…", "items": [ … ] }` — patterns: featured-header, upcoming-requests, categories, category-chips, cards-slider (`layout: row | grid`), playlist, list-side-by-side, leaderboard, guide (`variant: card | plain`), services-box, bento-grid, cards-list.

## Logic (composition rules)

- Order follows the render bands, top-down and never inverted (DESIGN.md › M9S): 1 ritual & safety · 2 commitment state · 3 journey step · 4 daily habit · 5 learning · 6 commercial. The header is the frame; hubs (P2) sit below every P1 section. Each section carries `band`, `placement` and `dna`; drop sections that are `withheld` for the person's mindset, outside their desire `states`, or `suppress: "sacred"` in a sacred window.
- The two Rawdah templates keep Figma's order, which inverts bands (known issue PT9); use the band order in DESIGN.md › M9P for production pages.
- One Leaderboard and one Bento Grid per page at most; never two horizontal rows of the same item type back to back.
- Every section has a reason to exist on this page; empty sections are removed, not shown empty.
- Images are content from Visual Assets; the template ships placeholders.
- Measure: section impressions → item taps → completed action (meaningful action), per section position.

## Native

iOS: one `ScrollView` + `LazyVStack` of section views keyed by `pattern`. Android: one `LazyColumn` with an item per section. Decode the same JSON on both.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
