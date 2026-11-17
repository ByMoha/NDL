# CardsSlider

A row of media cards that scrolls sideways; `layout="grid"` gives the 2 × 2 grid used for videos.

**Figma source:** 🃏 Cards › Partials (`mg7egvNbr2ciMP04Ig2XDl`) › Cards Slider (402 × 430) and the 2 × 2 Video grid in Rawdah Landing. Read 9 November 2026.

## Anatomy

- Row: MediaCards 250 × 330, gap 8, side padding 8
- Grid: 2 columns, cards 189 × 250, gap 8

## Logic

- Desire realm: discovery of content and offers.
- Framing: the type pill tells what the card is before the title; no fake scarcity on prices.
- Data: one CMS section = `{ pattern, title, tag?, actionLabel?, items[] }` (see Page).

## Don't

- Do not restyle the cards inside; configure them.
- Do not nest a pattern inside another pattern.

## Native

iOS: a `Section` in a `ScrollView`/`List` with a horizontal `ScrollView` + `LazyHStack` for rows. Android: a `LazyColumn` item with a `LazyRow` (contentPadding 8 dp, spacedBy 8 dp). Rows snap to items.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
