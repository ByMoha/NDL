# TextField

A field with every Nusuk input type: input, text area, search, select, multi select, mobile, password, OTP, action, credit card, avatar, counter and with logo.

**Figma source:** [⌨️ Inputs › Input](https://www.figma.com/design/DATayAnynnSQqdJQLAi7DR/?node-id=68394-7766) (Type 13 × Status Default, Error, Dissabled [sic] × Filled Off, On = 78 variants) on `_Input_Master`, with Hint and Error Messages Content. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**24 November 2026 (Figma re-read, rebuilt):**

- **The label sits inside the field.** It is Notes 1 (14) in `inputs-text-placeholder` above the value in Body 2 (16). When the field is empty and not focused, the label stands alone, centred (Filled Off). Code had the label above the field; only Text Area keeps it there.
- **Field line** is 1 px Ivory (`surface-02-ivory`), was Pearl.
- **Error** turns the line, label and value to the error colour, with the Error hint 8 below. There is no alert icon inside the field any more.
- **Disabled** uses the `inputs-surface-disabled` fill and line and `inputs-text-disabled` (14 November had kept the default fill).
- **New type `logo`** (Figma "with logo"): a partner mark at the end, SPL by default, 42 × 24.
- **Mobile** is now two parts, 8 apart: the field, and a 106-wide country-code box («+966» and `arrow-down-01`) at the end.
- **Password** has the eye at the end (`view`; `view-off` while the password is shown) and the criteria under the field as Checkbox SM. In Error, the criteria not met turn red under an Error hint.
- **Action** ends in a Secondary SM icon-only button (`arrow-left-02`), padding 10 on that side. This replaces the Ghost XS link and settles F116.
- **Counter** is a capsule with Secondary SM `remove-01` at the start and `add-01` at the end, the value centred, padding 10.
- **Credit Card** is two rows divided by an Ivory line: card number, then expiry | security code.
- **Avatar** puts the 42 picture with its Positive badge at the start.
- **OTP** boxes share the width, 8 apart.
- **Error Messages Content** (27 approved Arabic errors) ships as `NusukDL.ERROR_MESSAGES`; pass `errorType` (Figma name, e.g. `"Name Min10"`, `"ID Length"` with `errorValue`).

**14 November 2026:** 12 types × Status × Filled; Error adds the 20-high Hint 8 under the field.

## Props

| Prop | Type | Notes |
|---|---|---|
| `type` | `'input' \| 'text-area' \| 'search' \| 'select' \| 'multi-select' \| 'mobile' \| 'password' \| 'otp' \| 'action' \| 'credit-card' \| 'avatar' \| 'counter' \| 'logo' \| 'calendar'` | Figma Type; `'with logo'` also works |
| `label` | `string` | Inside the field (above it for Text Area). It is the field's accessible name |
| `placeholder` | `string` | An example, shown when the field is focused and empty, never the label |
| `value` | `string` | |
| `state` | `'default' \| 'focused' \| 'error' \| 'success' \| 'disabled'` | `status` and Figma's `Dissabled` also work |
| `hint` | `string` | Help or error text under the field |
| `errorType` / `errorValue` | `string` | One of the 27 Error Messages Content types; `errorValue` fills `%s` |
| `maxLength` | `number` | Text Area counter |
| `length` | `number` | OTP digits (default 4) |
| `values / placeholders / fieldLabels` | `string[]` | Multi Select (2) and Credit Card (3) parts |
| `prefix` / `onCode` | `string` / `() => void` | Mobile country code (default +966) |
| `rules` | `(string \| { label, met })[] \| false` | Password criteria (default the three Figma rules) |
| `revealed` | `boolean` | Password starts shown |
| `actionIcon` / `actionLabel` / `onAction` | | Action button; the label is its accessible name |
| `onDecrease` / `onIncrease` | `() => void` | Counter |
| `avatar / initials / avatarState` | `string` | Avatar picture |
| `logo` / `logoLabel` | `string` | Logo type: an image URL instead of SPL, and its name |
| `ariaLabel` | `string` | The name when there is no visible label |
| `status` | `'default' \| 'error' \| 'disabled'` | Figma's property name for `state` |
| `error` | `string` | Error text shown in the Error state (or use `errorType`) |
| `hintType` | `'hint' \| 'info' \| 'warning' \| 'error' \| 'success'` | The Hint under the field |
| `rulesLabel` | `string` | Password: names the criteria list, default «معايير كلمة المرور» |
| `codeLabel` | `string` | Mobile: names the country-code box, default «رمز الدولة» |
| `increaseLabel` / `decreaseLabel` | `string` | Counter: the add and remove buttons («زيادة», «إنقاص») |
| `ltr` | `boolean` | Left-to-right input (Mobile is always LTR) |

## Use

- Label every field. Put the format in the placeholder or hint ("5X XXX XXXX").
- Take error text from Error Messages Content before writing a new one.
- Numbers, phone numbers and OTP are always Western digits 0–9, left to right.

## Don't

- Do not use placeholder text as the label.
- Do not validate on every keystroke; validate on blur or submit.
- Do not shrink the field; 62 is the touch target.
- `type="otp"` draws the boxes only, for mockups; build the real field with the system one-time-code input.

## iOS and Android

- The in-field label is not a floating Material label: no animation, the label is static at the top when filled and centred when empty.
- Mobile: two fields in an HStack / Row, spacing 8, the country picker 106 wide at the trailing side.
- Password criteria: read-only checkmarks bound to the live rule check, not tappable.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
