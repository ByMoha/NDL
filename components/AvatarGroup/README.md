# AvatarGroup

Overlapping avatars for groups and companions.

**Figma source:** 🧭 Navigation › Group Users · 🛎️ Notifications › Group Users · 🏖️ Travel › User Group (read 14 November 2026). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `people` | `(string \| { src, initials, icon })[]` | Initials; `''` gives the icon avatar |
| `px` | `number` | Avatar size, 38 by default (Figma sm resized) |
| `more` | `string` | +N avatar with a ring |
| `first` | `'icon'` | Ink icon avatar first (Group Users) |
| `label` | `string` | Text beside the stack, `body-1-light` (أنت و) |
| `max` | `number` | Overlap −15px; the stack reads left to right as in Figma |
| `preset` | `'travel' \| 'travel-active'` | 🏖️ Travel › User Group: Active Off sizes 42 · 42 · 42 · 56 · 42 · 42 · 42, Active On 24 · 42 · 56 · 72 · 56 · 42 · 24; overlap 9, 1.5 px white ring, the middle on top |
| `sizes` | `number[]` | One size per avatar |
| `caption` | `string` | Travel: a `body-2-regular` row above the group with the XS icon avatar, 8 apart. Figma's sample is «%s، و%s مرافقين»; write the count with the Arabic plural rules (one, two, few, many) |
| `ring` | `'ink' \| 'white'` |  |
| `state` | `'positive' \| 'negative'` |  |

## Use

- Show the count of the rest.

## Don't

- Do not show strangers' faces; companions only.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
