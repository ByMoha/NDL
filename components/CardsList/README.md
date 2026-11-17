# CardsList

Stacked full-width media cards with an optional "Show more".

**Figma source:** 🃏 Cards › Partials (`mg7egvNbr2ciMP04Ig2XDl`) › Cards List (402 × 1160). Read 9 November 2026.

## Anatomy

- MediaCard 386 × 330 stacked, gap 8, side padding 8; no arrow in the title by default

## Logic

- Desire → intent: comparable offers.
- Same card type in one list so prices compare.
- Data: one CMS section = `{ pattern, title, tag?, actionLabel?, items[] }` (see Page).

## Don't

- Do not restyle the cards inside; configure them.
- Do not nest a pattern inside another pattern.

## Native

iOS: a `Section` in a `ScrollView`/`List` with a horizontal `ScrollView` + `LazyHStack` for rows. Android: a `LazyColumn` item with a `LazyRow` (contentPadding 8 dp, spacedBy 8 dp). Rows snap to items.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
