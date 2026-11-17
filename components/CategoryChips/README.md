# CategoryChips

A section of topic chips that wrap: Secondary SM buttons with a trailing icon.

**Figma source:** 🃏 Cards › Partials (`mg7egvNbr2ciMP04Ig2XDl`) › Categories (chips, 402 × 230). Read 9 November 2026.

## Anatomy

- Section title, then wrapped Secondary SM buttons (icon right), gap 8, side padding 8, aligned to the start

## Logic

- Desire realm: browsing topics.
- Low commitment: a chip only filters or navigates.
- Data: one CMS section = `{ pattern, title, tag?, actionLabel?, items[] }` (see Page).

## Don't

- Do not restyle the cards inside; configure them.
- Do not nest a pattern inside another pattern.

## Native

iOS: a `Section` in a `ScrollView`/`List` with a horizontal `ScrollView` + `LazyHStack` for rows. Android: a `LazyColumn` item with a `LazyRow` (contentPadding 8 dp, spacedBy 8 dp). Rows snap to items.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
