# DayPicker

A calendar day cell with availability dot.

**Figma source:** 📅 Date & Time › Day Picker (State × Indicator × Moon), Date Picker (Calendar, Year, Month), Availability Status. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `day` | `string` |  |
| `state` | `'unselected' \| 'current' \| 'selected' \| 'disabled'` |  |
| `availability` | `'available' \| 'filling' \| 'almost' \| 'none'` | Dot colour; always add a legend |
| `ariaLabel` | `string` |  |

## Use

- Show Hijri alongside Gregorian where the task is religious.

## Don't

- Do not rely on the dot colour alone; add a legend or label.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
