# PrayCard

A selectable day card for Rawdah and prayer bookings, with gender availability.

**Figma source:** 📅 Date & Time › Pray Card (Selected On / Off). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**17 November 2026:** as Figma, the card holds one icon (sunrise, 24), the day in Body 1 Light and the men's and women's icons (16) — nothing else. The extra «رجال / نساء» text line is gone: it repeated what the icons say. `note` is now spoken only (added to the label). Off: Ivory, padding 26, title `text-subtle`; On: Shade 6, 1.5 Illumination line, padding 18, title `text-link`.

## Props

| Prop | Type | Notes |
|---|---|---|
| `selected` | `boolean` |  |
| `title` | `string` | The day |
| `note` | `string` | Spoken only |
| `iconName` | `string` | Default sunrise |
| `gender` | `'both' \| 'male' \| 'female' \| 'none'` | Men's and women's icons |
| `genderLabel` | `string` | Spoken gender note |

## Use

- Use for Rawdah visit days.

## Don't

- Do not add a text tag for gender: the icons carry it.
- Do not use for general dates; use DayTab.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
