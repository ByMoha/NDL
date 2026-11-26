# Switch

Turns a setting on or off immediately.

**Figma source:** 📻 Switches, Checkbox and Radio › Switch (Status × Size). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**19 November 2026 (the DL Advisor's comments on the design system page):** 8 between the switch and its label at every size. SM 32 × 16, MD 42 × 21, LR 54 × 27, with the knob 16 × 12, 24 × 18 and 32 × 24; on turns the knob toward the trailing side, so in right to left it travels left and starts on the right. The preview is a Status × Size matrix, right to left by default.

**14 November 2026 (read from Figma):** sizes SM / MD / LR = track 32 × 16 / 42 × 21 / 54 × 27 with a knob 16 × 12 / 24 × 18 / 32 × 24 (`control-toggle-*`, `control-toggle-icon-*`; MD was 40 with a 20 knob in code). Off `surface-04-mist`, on `surface-10-ink`, white knob. Disabled: `surface-03-pearl` track with a `surface-04-mist` knob and a `text-note` label (was 38% opacity). Error: the track is solid `alerts-surface-solid-error` and the label `alerts-text-error` (was a red outline). Label 14 / 16 / 18 (`control-text-*`), gap 8 / 12 / 12 (`control-gap-*`).

## Props

| Prop | Type | Notes |
|---|---|---|
| `checked` | `boolean` |  |
| `label` | `text` |  |
| `ariaLabel` | `string` | The name when there is no visible label |
| `status` | `'default' \| 'error' \| 'disabled'` |  |
| `size` | `'sm' \| 'md' \| 'lr'` | Figma Size; `sm` is the default |
| `onChange` | `(checked) => void` |  |

## Use

- Use for settings that apply at once (reminders, notifications).
- The control is 16–27 high and carries tap padding to 48 × 48. Stack them in rows at least 48 high.

## Don't

- Do not use a switch inside a form that needs a submit; use a checkbox.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
