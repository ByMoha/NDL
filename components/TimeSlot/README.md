# TimeSlot

A selectable time slot with capacity note.

**Figma source:** 📅 Date & Time › Time slot card, Time & Slots section (Normal, Skeleton, Gender Unavailable), Time Picker. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**15 November 2026, evening:** a ticket card 54 high, radius 22, with notches top and bottom; period (16) and time (18) in `text-heading`; optional `markers` (`soon` hourglass, `instant` zap, `prayer` salah) as 20 circles overlapping the corner. Default white with a Pearl line; Selected shade 2 with a Longing line and Longing markers; Disabled Ivory and `text-note`. Put it on the screen background (the notches use `--slot-cut`).

## Props

| Prop | Type | Notes |
|---|---|---|
| `status` | `'default' \| 'selected' \| 'disabled'` |  |
| `time` | `string` |  |
| `note` | `string` | Real capacity only |
| `period` | `string` | ص / م; taken from `time` after a space when absent |
| `markers` | `('soon' \| 'instant' \| 'prayer')[]` | Corner markers, each with a spoken label |

## Use

- Capacity notes reflect real availability.

## Don't

- Never invent scarcity ("Only 2 left!") that isn't true.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
