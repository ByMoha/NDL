# PrayCard

A selectable day card for Rawdah and prayer bookings, with gender availability.

**Figma source:** 📅 Date & Time › Pray Card. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**15 November 2026, evening:** 110 × 90, radius 18. Off: Ivory, Slate icon (sunrise), title `text-subtle`; On: shade 6 with a 1.5 Illumination line, title `text-link`. Both show the men's and women's icons (muslim, hijab) under the title; `gender` picks them.

## Props

| Prop | Type | Notes |
|---|---|---|
| `selected` | `boolean` |  |
| `title` | `string` |  |
| `note` | `string` |  |
| `iconName` | `string` | Default sunrise |
| `gender` | `'both' \| 'male' \| 'female' \| 'none'` | Men's and women's icons |
| `genderLabel` | `string` | Spoken gender note |

## Use

- Use for Rawdah visit days.

## Don't

- Do not use for general dates; use Day Tab.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
