# DateRange

A from–to date pair in one card.

**Figma source:** 🏖️ Travel › From To / Duration (Status Default / Dissabled / Active) on _Master Date From To. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**18 November 2026 (review comments of 17 Nov):** «من / 23 Jun / 2025» line up on the start side next to the calendar icon and «إلى / 22 Jun / 2025» on the end side, in the Default, Disabled and Active states (the FromTo fix).

**17 November 2026:** the FromTo card with calendar-download-02 / calendar-upload-02 icons, day in Headline 2 Light and the year in Body 2 Light at 70%; the middle is a black «إلى» pill (54 × 48) at 40% by default, 100% when active, 20% when disabled (fields 40%).

## Props

| Prop | Type | Notes |
|---|---|---|
| `status` | `'default' \| 'active' \| 'disabled'` |  |
| `from, to` | `{label, value, sub}` |  |
| `joiner` | `string` | Default «إلى» |
| `onPick` | `fn` |  |

## Use

- Show the year under the day.

## Don't

- Do not use for a single date; use DayPicker.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
