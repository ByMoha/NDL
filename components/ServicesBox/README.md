# ServicesBox

A tinted box with a 4-column grid of service tiles.

**Figma source:** 🃏 Cards › Partials (`mg7egvNbr2ciMP04Ig2XDl`) › Services Box (402 × 354). Read 9 November 2026.

## Anatomy

- Top padding 48, side 8; box Teal shade + white conic light, radius 18, Glass/Full, padding 0/18/26
- Collaps header; grid 4 columns, gap 4, CategoryTile SM 85 × 100

## Logic

- Functional intent: the services of this place.
- A stage hub (P2): 4–8 services of the current phase; membership changes with the phase. A service relevant in every phase belongs in navigation (DESIGN.md › M9S).
- Data: one CMS section = `{ pattern, title, tag?, actionLabel?, items[] }` (see Page).

## Don't

- Do not restyle the cards inside; configure them.
- Do not nest a pattern inside another pattern.

## Native

iOS: a `Section` in a `ScrollView`/`List` with a horizontal `ScrollView` + `LazyHStack` for rows. Android: a `LazyColumn` item with a `LazyRow` (contentPadding 8 dp, spacedBy 8 dp). Rows snap to items.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
