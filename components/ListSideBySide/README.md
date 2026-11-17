# ListSideBySide

Pages of two horizontal playlist cards that scroll sideways.

**Figma source:** 🃏 Cards › Partials (`mg7egvNbr2ciMP04Ig2XDl`) › List Side by Side (402 × 295). Read 9 November 2026.

## Anatomy

- Pages 330 wide, each two PlaylistCard (horizontal) with gap 18; pages gap 18, side padding 8

## Logic

- Spiritual desire with a known time cost (duration).
- Present bias: show duration so a small step is easy.
- Data: one CMS section = `{ pattern, title, tag?, actionLabel?, items[] }` (see Page).

## Don't

- Do not restyle the cards inside; configure them.
- Do not nest a pattern inside another pattern.

## Native

iOS: a `Section` in a `ScrollView`/`List` with a horizontal `ScrollView` + `LazyHStack` for rows. Android: a `LazyColumn` item with a `LazyRow` (contentPadding 8 dp, spacedBy 8 dp). Rows snap to items.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
