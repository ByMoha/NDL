# Checkbox

Select any number of options, or confirm one statement.

**Figma source:** 📻 Switches, Checkbox and Radio › Checkbox (Status × Size). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**19 November 2026 (the DL Advisor's comments on the design system page):** 8 between the box and its label at every size; the box aligns with the top of the label's first line, so a two-line label keeps it at the top; LR is 24. The preview is a Status × Size matrix, right to left by default.

**14 November 2026 (read from Figma):** 18 / 18 / 24 (`control-checkbox-*`), radius 4. Empty: no fill and a 1 px `surface-longing` line. Ticked: `surface-illumination` (gold) with a white `tick-02` 12 / 12 / 18 (was Ink). Disabled: `surface-03-pearl`, and when ticked an Ink tick at 50%. Error: a 2 px `alerts-icons-error` line, no fill. Label 14 / 16 / 18, gap 8 / 12 / 12. New `size` prop: `sm` (default), `md`, `lr`.

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

- The whole label is the target.
- The control is 16–27 high and carries tap padding to 48 × 48. Stack them in rows at least 48 high.

## Don't

- Never pre-tick consent or marketing boxes.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
