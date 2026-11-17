# Pagination

Dots for carousels and stories. The current item is a short bar.

**Figma source:** 🧭 Navigation › Pagination (Direction Verticale / Horizontal × Darkmode) and `_Pagination item master` (Default, Status2).

**17 November 2026, evening — retaken from the updated Navigation file:** items are 4 × 4 Mist (`surface-04-mist`); the current one is 16 × 4 Smoke (`surface-05-smoke`); gap 8 horizontal, 4 vertical (4 × 16). Darkmode: Ivory items and a white current bar. Was 8 × 4 Gray items with a 38 bar.

## Props

| Prop | Type | Notes |
|---|---|---|
| `count` | `number` | Default 5 |
| `active` | `number` |  |
| `direction` | `'horizontal' \| 'vertical'` | Gap 8 horizontal, 4 vertical |
| `size` | `'default' \| 'sm'` | 4px or 3px |
| `white` | `boolean` | Figma Darkmode=On, on media and Ink |
| `progress` | `number` | 0–1. Fills the current bar, for stories |

## Use

- Only the current item is longer; all others are dots.

## Don't

- Do not use for more than 7 pages.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
