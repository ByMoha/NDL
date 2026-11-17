# TextField

A labelled input with every Nusuk field type: text, text area, search, select, mobile, password, OTP, action and credit card.

**Figma source:** ⌨️ Inputs › Input (12 types: Counter, Text Area, OTP, Multi Select, Search, Select, Action, Password, Input, Mobile, Credit Card, Avatar). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**18 November 2026 (Golf Carts review, F116):** `type="action"` draws a Ghost XS link. The Payment Box code field in Golf Carts ends in a 38 glass pill «تطبيق» instead; until the DL Manager says which one Input Type=Action is, compose that field with a Secondary SM button.

**14 November 2026:** Figma's Input is now 12 types × Status (Default, Error, Dissabled [sic]) × Filled (Off, On), 72 variants on the private `_Input_Master Trail` (Status Default / Error / Filled × Disabled). Error adds the 20-high Hint (Type=Error) 8 under the field; Error and Disabled keep the default field fill (`inputs-surface-default`; code used the error and disabled fills until now): Error has the `inputs-icons-error` border, Disabled the `surface-04-mist` border and `inputs-text-disabled` text. Two types were missing in code and are added: `multi-select` (two selects side by side, gap 8, each with its chevron) and `avatar` (a 42 picture at the end of the field).

**12 November 2026:** fields are radius 18 (`radius-md`, Figma Radius/MD) with `shadow-xs`; Search and Counter are capsules (`radius-full`); the label above the field is `notes-1-regular` in `inputs-text-placeholder`, inset 18. OTP boxes follow (radius 18). The Hint icon is 20.

## Props

| Prop | Type | Notes |
|---|---|---|
| `type` | `'input' \| 'text-area' \| 'search' \| 'select' \| 'multi-select' \| 'mobile' \| 'password' \| 'otp' \| 'action' \| 'credit-card' \| 'avatar' \| 'calendar' \| 'counter'` | `counter` draws the capsule field; the stepper is DL OptionCard Counter |  |
| `label` | `string` | Always visible above the field. It is the field's accessible name; the hint is its description |
| `placeholder` | `string` | An example, never the label |
| `value` | `string` |  |
| `state` | `'default' \| 'focused' \| 'error' \| 'success' \| 'disabled'` |  |
| `hint` | `string` | Help or error text under the field |
| `maxLength` | `number` | Shows a counter |
| `length` | `number` | OTP digits (default 4) |
| `values / placeholders / fieldLabels` | `[string, string]` | `multi-select`: the two halves. Give each half its own accessible name |
| `avatar / initials` | `string` | `avatar`: the picture at the end of the field |
| `ariaLabel` | `string` | The name when a field has no visible label (search). Without it the placeholder is read |
| `actionLabel` | `string` |  |
| `prefix` | `string` |  |

## Use

- Label every field. Put the format in the placeholder or hint ("5X XXX XXXX").
- Errors say what happened and how to fix it, in one line under the field.
- Numbers, phone numbers and OTP are always Western digits 0–9, left to right.

## Don't

- Do not use placeholder text as the label.
- Do not validate on every keystroke; validate on blur or submit.
- Do not shrink the field to fit; the 62px height is the touch target.
- `type="otp"` draws the boxes only, for mockups; build the real field with the system one-time-code input.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
