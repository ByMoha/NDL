# DayTab

A horizontal day selector tile.

**Figma source:** 📅 Date & Time › Day Tab Selection (Available, Unavailable, Selected), List of Dates. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**15 November 2026, evening (read from 📅 Date & Time, published):** weekday (12, `text-subtle`) over the date (24), a 14 corner icon (moon-01; `unavailable` when unavailable) and an 8 × 4 availability bar (`availability`: available green, filling-up orange, almost-full red, not-available grey). Available is white with no line; Selected is shade 6 with a 1.5 Longing line and `text-link`; Unavailable Ivory with a Pearl line and `text-note`. Radius 14. The today chip (Gold solid XS) sits on the top edge.

## Props

| Prop | Type | Notes |
|---|---|---|
| `status` | `'available' \| 'unavailable' \| 'selected'` |  |
| `date` | `string` |  |
| `weekday` | `string` |  |
| `today` | `string` | Chip label |
| `availability` | `'available' \| 'filling-up' \| 'almost-full' \| 'not-available'` | The bar; give `availabilityLabel` for screen readers |
| `iconName` | `string` | Corner icon |
| `availabilityLabel` | `string` | Spoken availability |

## Use

- Scroll horizontally; today first.

## Don't

- Do not hide unavailable days; show them disabled.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
