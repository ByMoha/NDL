# RequestCard

A booking in "My bookings": what it is, its status, when, and who it is for. Every Figma type is a preset you can override.

**Figma source:** 🃏 Cards › Request Cards (12 types) on `_Request Card Master` (Active, Empty State), with Request Card Status (46). Read 8 November 2026, re-read 17:20.

**10 November 2026:** 11 types. `sim` left Figma and is deprecated.

## Props

| Prop | Type | Notes |
|---|---|---|
| `type` | `'hajj' \| 'umrah' \| 'umrah-package' \| 'rawdah' \| 'electric-cart' \| 'hair-cut' \| 'hhr' \| 'flight' \| 'hotel' \| 'ticket' \| 'sim' \| 'marketplace'` | Loads the Figma content for that type |
| `upcoming, tag, tagIcon` | `string` | Upcoming header with a gold or default chip |
| `status, service` | `string` | Past header with StatusChip |
| `title, category, city` | `string` | Package title block (Hajj) |
| `route` | `{ label, text, icons?, flag? }[]` | Umrah Package route pills |
| `date, time` | `[label, value, icon?]` | Two slots, `headline-2-regular`; `range` swaps the divider for a chevron (Hotel) |
| `order, people` | `…` | Marketplace order line |
| `footer, footIcon, forName, entities` | `…` | Bottom row with the open button |
| `notice` | `string` | Alert NoticeBar at the end |
| `empty` | `{ icon, label, action }` | Empty State variant |
| `openLabel` | `string` |  |
| `range` | `boolean` |  |
| `tagState` | `'gold' \| 'default'` |  |

## Use

- Card: radius 18, padding 26 / 18, gap 18.
- Avatars inside the card carry a white inside ring: 1.5px on the 24px footer avatar, 1.4px on the 38px order avatars (Figma, 8 Nov afternoon).
- Order avatars (Marketplace) are Positive: Ivory `+2`, then pictures.

## Don't

- Do not put more than one notice on a card.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
