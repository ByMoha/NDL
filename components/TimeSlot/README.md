# TimeSlot

A selectable time slot cut as a ticket, with markers and an optional crowd chip.

**Figma source:** 📅 Date & Time › Time slot card (Selected Default / Selected / Disabled) on _Time slot card Master, Time & Slots section. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**17 November 2026, rebuilt from the master:** 54 high, corners 12. One 17-wide semicircle notch on the top edge and one on the bottom, centred 26.5 from the start corner on the markers' side (left in Arabic). The notches are real cut-outs (a CSS mask), so they show whatever sits behind the card, and the Pearl line (Longing when selected) follows the notch. The old version painted circles in the screen colour and drew their full ring outside the card. Text: time Body 1 Regular, then the period Body 2 Light (reads «06:00 ص»). Markers are 22 circles (12 icon, 4 padding, 1 line) overlapping by 7, from −4/−3 over the top notch, in the order soon, instant, prayer. The master's optional Chips slot is `crowd` (Chips Pending MD, «مزدحم») and its trailing icon is `iconName` (24). Default white + Pearl; Selected Shade 2 + Longing, Longing markers with white icons; Disabled Ivory + Pearl, `text-note`.

## Props

| Prop | Type | Notes |
|---|---|---|
| `status` | `'default' \| 'selected' \| 'disabled'` |  |
| `time` | `string` | «06:00 ص»: the period is taken after the space |
| `period` | `string` | ص / م when `time` has none |
| `markers` | `('soon' \| 'instant' \| 'prayer')[]` | Corner markers, each with a spoken label |
| `crowd` | `string` | Crowd chip; `note` is still read as the same chip |
| `crowdState` | `string` | Chip state, default pending |
| `iconName` | `string` | Trailing 24 icon |

## Use

- Put it on any surface: the notches are transparent.
- Crowd chips reflect real availability.

## Don't

- Never invent scarcity that is not true.
- Do not add a second text note next to the crowd chip.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
