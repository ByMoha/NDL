# Radio

Choose exactly one option from a short visible list.

**Figma source:** 📻 Switches, Checkbox and Radio › Radio (Status × Size). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**19 November 2026 (the DL Advisor's comments on the design system page):** 8 between the ring and its label at every size; the ring aligns with the top of the label's first line; LR is 24. The preview is a Status × Size matrix, right to left by default.

**14 November 2026 (read from Figma):** 18 / 18 / 24 (`control-radio-*`). Off `surface-04-mist`; on `surface-illumination` (gold; was Ink). The centre is a white rounded square 10 × 10 (13 × 13 at LR), radius 4, with the avatar shadow, in both states (code drew a smaller circle when on). Disabled: `surface-03-pearl` with an Ivory centre, Mist when chosen. Error: solid `alerts-surface-solid-error`. New `size` prop: `sm` (default), `md`, `lr`.

## Props

| Prop | Type | Notes |
|---|---|---|
| `checked` | `boolean` |  |
| `label` | `text` |  |
| `ariaLabel` | `string` | The name when there is no visible label |
| `status` | `'default' \| 'error' \| 'disabled'` |  |
| `size` | `'sm' \| 'md' \| 'lr'` | Figma Size; `sm` is the default |
| `onChange` | `() => void` |  |

## Use

- Two to six options. More than six: use a Dropdown list sheet.
- The control is 16–27 high and carries tap padding to 48 × 48. Stack them in rows at least 48 high.

## Don't

- Do not use a radio for on/off.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
