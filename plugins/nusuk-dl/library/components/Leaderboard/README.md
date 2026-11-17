# Leaderboard

One featured media card, full width, with the fade surface. No section title.

**Figma source:** 🃏 Cards › Partials (`mg7egvNbr2ciMP04Ig2XDl`) › Leaderboard (402 × 504). Read 9 November 2026.

## Anatomy

- Top padding 48, side padding 8
- MediaCard 386 × 456, fade surface

## Logic

- Desire → intent: one featured offer.
- Use once per page; it carries the strongest visual weight.
- Data: one CMS section = `{ pattern, title, tag?, actionLabel?, items[] }` (see Page).

## Don't

- Do not restyle the cards inside; configure them.
- Do not nest a pattern inside another pattern.

## Native

iOS: a `Section` in a `ScrollView`/`List` with a horizontal `ScrollView` + `LazyHStack` for rows. Android: a `LazyColumn` item with a `LazyRow` (contentPadding 8 dp, spacedBy 8 dp). Rows snap to items.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
