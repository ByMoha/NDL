# TimeSlot

A selectable time slot cut as a ticket, with markers and an optional crowd chip.

**Figma source:** 📅 Date & Time › Time slot card (Selected Default / Selected / Disabled) on _Time slot card Master, Time & Slots section. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**18 November 2026 (Golf Carts review, GC-R13):** a disabled slot shows the disabled state only: no «مكتمل» or any other added text.

**17 November 2026, 21:10 (replica of [📅 Date & Time › Time slot card](https://www.figma.com/design/A7Jna80Khqc6WMQicRfLwU/?node-id=2402-18252)):** built from Figma's own parts: 12 bands top and bottom (corner 18 · ticket 17 · the rest) and a 32 middle, 54 high. Corners Radius/MD, clamped to 12 by the band. The notch is a shallow bite (11.3 wide, 4.2 deep) whose tip sits 27 from the **start** edge (right in Arabic), on the side away from the markers; the Pearl line (Longing when selected) follows it. Markers are 20 (were 22), from −3 / −3 at the end corner, the first on top: soon Ivory, instant shade 5 with `icons-illumination`, prayer white; all Longing with white icons when selected. Text: time Body 1 Regular, period Body 2 Light (reads «06:00 ص»). With `iconName` (24, at the start) or `crowd` (Chips Pending MD, at the end) the text fills the middle, as the master draws it. Default white + Pearl; Selected shade 2 + Longing; Disabled Ivory + Pearl, `text-note`.

## Props

| Prop | Type | Notes |
|---|---|---|
| `status` | `'default' \| 'selected' \| 'disabled'` |  |
| `time` | `string` | «06:00 ص»: the period is taken after the space |
| `period` | `string` | ص / م when `time` has none |
| `markers` | `('soon' \| 'instant' \| 'prayer')[]` | Corner markers, each with a spoken label |
| `crowd` | `string` | Crowd chip; `note` is still read as the same chip |
| `crowdState` | `string` | Chip state, default pending |
| `iconName` | `string` | The master's Show Icon: 24, at the start (Figma uses `ramadhan-01`) |

## Use

- Put it on any surface: the notches are transparent.
- Crowd chips reflect real availability.

## Don't

- Never invent scarcity that is not true.
- Do not add a second text note next to the crowd chip.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
