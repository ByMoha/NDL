# DropdownItem

One row in a selection list or sheet: icon, flag, avatar or text, with radio, toggle, checkbox or download selector.

**Figma source:** ⬇️ Dropdown list › Dropdown item (Type × Selector), List Screen. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `type` | `'text' \| 'icon' \| 'flag' \| 'avatar'` |  |
| `selector` | `'radio' \| 'toggle' \| 'checkbox' \| 'download'` |  |
| `title` | `string` |  |
| `subtitle` | `string` |  |
| `checked` | `boolean` | Radio and Checkbox show a 24 px solid check in `icons-longing` when true; the row itself takes `role="radio"` or `"checkbox"` |
| `iconName` | `string` | Type `icon`, 20 px; default `location-01` |
| `src`, `initials` | `string` | Type `avatar`: Avatar SM (42) |
| `downloadLabel` | `string` | Selector `download`: the button's name |
| `ariaLabel` | `string` | The selector is named by `title`; override it here |
| `onChange` | `(checked) => void` | Radio: `true`; Checkbox and Toggle: the new value; Download: on press |
| `flag` | `string` |  |

## Figma (read 14 November 2026)

`_Dropdown item list/On`: padding 12 above and below, none at the sides, gap 18, a 1 px `surface-03-pearl` line under. Title `body-2-regular` in `text-heading`, details `notes-2-light` in `text-content`, 4 apart. Selectors: Radio `checkmark-circle-02` Solid (`checkmark-circle-02-solid` in code since 14 November, night) and Checkbox `checkmark-square-02` (solid, 24, `icons-longing`), Toggle the MD Switch (42 × 21), Download `download-04` (24, `icons-black`). Lead: icon 20, flag 20 × 15, avatar SM 42. Rows are 61 tall, 66 with an avatar.

Figma draws only the chosen state of Radio and Checkbox, and Longing on white is 1.9:1, under the 3:1 a state needs (WCAG 1.4.11). Until the design team answers (questions list Q-D04), an unchosen row shows an empty 24 px slot.

## Use

- Lists of nationalities and languages use the List Screen with search on top.

## Don't

- Do not use emoji flags; use the flag assets.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
