# FeaturedHeader

The top of a destination landing: photo, search bar, title and four quick actions.

**Figma source:** 🏠 Landing Experience V2 › CMS (`9qmiMkJqcEMFY8vbxhcP6r`) › Rawdah Landing › Toolbar (Featured BG, Navbar Inner Page, Featured Actions). Read 9 November 2026.

**17 November 2026:** the back, search and support buttons are GlassBG `control` glass (OS shadows + Glass Effect with the sheen), as the Rawdah Landing toolbar instances are. The search pill lost its private white 75% → 22% gradient.

## Props

| Prop | Type | Notes |
|---|---|---|
| `actions` | `CategoryTileProps[]` |  |
| `backLabel` | `string` |  |
| `image` | `string` |  |
| `onBack` | `() => void` |  |
| `onSearch` | `() => void` |  |
| `onSupport` | `() => void` |  |
| `searchLabel` | `string` |  |
| `statusBar` | `boolean` |  |
| `supportLabel` | `string` |  |
| `title` | `string` |  |
| `actionsLabel` | `string` | Names the actions row for screen readers (default: the title) |

## Anatomy

- 402 × 420; photo 402 × 402 fading into Screen BK
- Bar at y 72: glass round buttons 52 × 42 (back, support) and a glass search pill 42 high
- Title `headline-1-regular` with a white glow at y ≈ 186
- Featured Actions at y 286: four CategoryTile SM 88 × 100, gap 4, side padding 20

## Logic

- Spiritual / Emotional: the place itself.
- Quick actions are the top four of the current stage hub (phase-scoped, DESIGN.md › M9S P2), not the most used services of all time. A booking action is withheld for Dependents and Organised groups.
- Data: one CMS section = `{ pattern, title, tag?, actionLabel?, items[] }` (see Page).

## Don't

- Do not restyle the cards inside; configure them.
- Do not nest a pattern inside another pattern.

## Native

iOS: a `Section` in a `ScrollView`/`List` with a horizontal `ScrollView` + `LazyHStack` for rows. Android: a `LazyColumn` item with a `LazyRow` (contentPadding 8 dp, spacedBy 8 dp). Rows snap to items.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
