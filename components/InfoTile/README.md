# InfoTile

A compact metric tile: temperature, crowding, humidity.

**Figma source:** 📅 Date & Time › Information (Default, Good, Alert, Danger). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**15 November 2026, evening:** 125 wide, radius 18, padding 12 / 26 / 8; the title (12) has a 16 icon (sun-03) after it and the value (32) a 12 unit (℃); each status colours text and icon (Success, Warning, Error alert colours).

## Props

| Prop | Type | Notes |
|---|---|---|
| `status` | `'default' \| 'good' \| 'alert' \| 'danger'` |  |
| `title` | `string` |  |
| `value` | `string` |  |
| `iconName` | `string \| false` | Default sun-03 |
| `unit` | `string \| false` | Default ℃ |

## Use

- Pair with advice the person can act on.

## Don't

- Do not alarm without guidance.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
