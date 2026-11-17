# Pagination

Dots for carousels and stories. The current item is a 38px bar.

**Figma source:** 🧭 Navigation › Pagination (Direction × White × Size) and `_Pagination item master` (Default, Active, Filled).

## Props

| Prop | Type | Notes |
|---|---|---|
| `count` | `number` | Default 5 |
| `active` | `number` |  |
| `direction` | `'horizontal' \| 'vertical'` | Gap 8 horizontal, 4 vertical |
| `size` | `'default' \| 'sm'` | 4px or 3px high |
| `white` | `boolean` | On media |
| `progress` | `number` | 0–1. Fills the active bar (Figma Filled), for stories |

## Use

- All items are `icons-gray`; only the active one is longer.

## Don't

- Do not use for more than 7 pages.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
