# BentoGrid

A mixed grid of four media cards (wide, two halves, wide) and an optional "Show more".

**Figma source:** 🃏 Cards › Partials (`mg7egvNbr2ciMP04Ig2XDl`) › Bento Grid (402 × 940, three slots). Read 9 November 2026.

## Anatomy

- Wide 386 × 220, halves 189 × 330, wide 386 × 220, gap 8, side padding 8, fade surface
- `more`: Secondary MD full-width button

## Logic

- Desire: curated content.
- Hierarchy by size, not by colour.
- Data: one CMS section = `{ pattern, title, tag?, actionLabel?, items[] }` (see Page).

## Don't

- Do not restyle the cards inside; configure them.
- Do not nest a pattern inside another pattern.

## Native

iOS: a `Section` in a `ScrollView`/`List` with a horizontal `ScrollView` + `LazyHStack` for rows. Android: a `LazyColumn` item with a `LazyRow` (contentPadding 8 dp, spacedBy 8 dp). Rows snap to items.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
