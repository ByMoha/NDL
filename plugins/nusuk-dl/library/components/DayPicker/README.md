# DayPicker

A calendar day cell with availability dot.

**Figma source:** 📅 Date & Time › Day Picker (State × Indicator × Moon), Date Picker (Calendar, Year, Month), Availability Status. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**19 November 2026 (rebuilt from [📅 Date & Time › Day Picker](https://www.figma.com/design/A7Jna80Khqc6WMQicRfLwU/?node-id=74392-1944)):** 40 × 40, radius 14. The moon mark sits at the top (`icon`, `iconName`, default `moon-02`), the day in Body 2 under it and the availability dot under the day: available (green), filling (orange), almost full and full (red), not available (grey). Today is Ivory, the selected day Ink with white text. Figma draws the cell 40 × 48 (known issue).

## Props

| Prop | Type | Notes |
|---|---|---|
| `day` | `string` |  |
| `state` | `'unselected' \| 'current' \| 'selected' \| 'disabled'` |  |
| `availability` | `'available' \| 'filling' \| 'almost' \| 'full' \| 'none'` | Dot colour; always add a legend. Figma's names `filling-up`, `almost-full` and `not-available` also work |
| `ariaLabel` | `string` |  |
| `icon` | `boolean` | `false` hides the moon mark at the top |
| `iconName` | `string` | The mark's DL icon, default `moon-02` |

## Use

- Show Hijri alongside Gregorian where the task is religious.

## Don't

- Do not rely on the dot colour alone; add a legend or label.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
