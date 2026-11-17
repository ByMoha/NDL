# Categories

A section with a row of tiles that scrolls sideways: categories, products or faces.

**Figma source:** 🃏 Cards › Partials (`mg7egvNbr2ciMP04Ig2XDl`) › Categories (402 × 238). Read 9 November 2026.

## Anatomy

- Section title, then a row: side padding 8, gap 8, scrolls horizontally
- Items: `type` image (CategoryTile 120 × 140), product (ProductTile), face (FaceTile 154)

## Logic

- Functional or Emotional, by content (services vs gifts vs voices).
- Attention & Cognitive Load: one row, one kind of item.
- Data: one CMS section = `{ pattern, title, tag?, actionLabel?, items[] }` (see Page).

## Don't

- Do not restyle the cards inside; configure them.
- Do not nest a pattern inside another pattern.

## Native

iOS: a `Section` in a `ScrollView`/`List` with a horizontal `ScrollView` + `LazyHStack` for rows. Android: a `LazyColumn` item with a `LazyRow` (contentPadding 8 dp, spacedBy 8 dp). Rows snap to items.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
