# DirectionSheet

A bottom sheet that asks the person to choose a direction: restore an account, pick an option, filter.

**Figma source:** 🧭 Navigation › Direction Sheet (Options: Restore, Login Sheet, 2 Options, Details, Session timeout, Filter).

**24 November 2026:** re-read, no change to the sheet. The card now shows all four Options as Figma composes them: Restore (Option Cards LR Icon with Action), 2 Options (two Select Cards in a `.pair` row, Primary MD and Ghost MD), Details (Option Cards with Icon) and Filter (Dropdown item, Radio).

**15 November 2026, evening:** Options are Restore, 2 Options, Details and Filter; Login Sheet and Session timeout are removed (N4 closed).

## Props

| Prop | Type | Notes |
|---|---|---|
| `icon` | `string` | 68px circle, 38 icon |
| `tone` | `'success' \| 'info' \| 'warning' \| 'error' \| 'brand'` | Icon circle colour |
| `title` | `string` | `headline-1-regular` |
| `subtitle` | `string` | `body-2-light` |
| `children` | `node` | Options: DropdownItem rows (Figma), or OptionCard and SelectCard |
| `primary, secondary` | `string` | Primary MD and Ghost MD |

## Use

- Read 14 November 2026: content padding 32 above, 26 at the sides, 48 below, gap 26; options run without gaps, 4 above and below, as Dropdown item rows (Text Only, Radio). The sheet is Bottom Sheet BG: corners 42 at the top and 54 (`radius-ios`) at the bottom, `glass-full`.

## Don't

- Do not stack more than eight options; use a full-screen list.

## Known issues

- Login Sheet and Session timeout are at 10% opacity in Figma, which reads as deprecated (N4).

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
