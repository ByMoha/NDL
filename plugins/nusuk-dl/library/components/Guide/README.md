# Guide

A preparation guide: hint widgets that scroll sideways with page dots, in a white card (default) or plain.

**Figma source:** 🃏 Cards › Partials (`mg7egvNbr2ciMP04Ig2XDl`) › Guide (Default, Variant2). Read 9 November 2026.

## Anatomy

- Default: top padding 48, side 8; white card (Glass/Full) with padding 0/18/26, Collaps header, hints gap 4, dots
- Plain: section title (tight), white hints, dots
- Dots: 6 × 6 Pearl, current 16 × 6 Mist, gap 12, follow the scroll

## Logic

- Transformational intent: getting ready for a rite.
- Commitment: a private checklist; never shame unticked items.
- Data: one CMS section = `{ pattern, title, tag?, actionLabel?, items[] }` (see Page).

## Don't

- Do not restyle the cards inside; configure them.
- Do not nest a pattern inside another pattern.

## Native

iOS: a `Section` in a `ScrollView`/`List` with a horizontal `ScrollView` + `LazyHStack` for rows. Android: a `LazyColumn` item with a `LazyRow` (contentPadding 8 dp, spacedBy 8 dp). Rows snap to items.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
