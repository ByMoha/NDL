# Alert

An inline message in a coloured box: information, success, warning, error, or a neutral notice.

**Figma source:** [‼️ Status Handlers › Alerts](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o/?node-id=68392-32017) (Type Info, Success, Warning, Error, Primary) on `_Alert` (booleans Icon, Heading, Close, Below Buttons). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**17 November 2026:** `stacked` mirrors [`_Alert`](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=68759-3359) Type=System Update, re-read today: the 24 glyph above the heading, the message and the buttons under it (an update notice inside a page).

**14 November 2026, night: rebuilt to Figma.** Primary is the neutral Default palette (it was gold in code); the message is `notes-1-light` in `text-heading` (it was `notes-1-regular` in `text-subtle`); the icons are Figma's Hugeicons; Below Buttons are a Primary SM and a Ghost SM (code had one Secondary XS); Close and an icon-less alert are new.

## Figma

- Box: padding 18, gap 12, radius 18, 1 px border; top-aligned. Icon 20 at the start, body, Close (16 `cancel-01`, `alerts-icons-default`) at the end.
- Body: content, then Below Buttons 18 under it. Content: heading `body-2-regular` in the alert's text colour, message `notes-1-light` in `text-heading`, 8 apart. Below Buttons: Primary SM at the start, Ghost SM, 12 apart.

| Type | Surface | Border and icon | Heading | Icon |
|---|---|---|---|---|
| info | `alerts-surface-info` | `alerts-icons-info` | `alerts-text-info` | alert-circle |
| success | `alerts-surface-success` | `alerts-icons-success` | `alerts-text-success` | checkmark-circle-02 |
| warning | `alerts-surface-warning` | `alerts-icons-warning` | `alerts-text-warning` | spam |
| error | `alerts-surface-error` | `alerts-icons-error` | `alerts-text-error` | alert-02 |
| primary | `alerts-surface-default` | `alerts-icons-default` (icon `icons-black`) | `alerts-text-default` | alert-circle |

## Props

| Prop | Type | Notes |
|---|---|---|
| `type` | `'info' \| 'success' \| 'warning' \| 'error' \| 'primary'` | Default info |
| `title` | `string` | The heading; leave it out to hide it |
| `children` | `node` | The message |
| `icon` | `boolean` | Default true; the tracker's alert has none |
| `primary`, `onPrimary` | `string`, `() => void` | Primary SM button |
| `secondary`, `onSecondary` | `string`, `() => void` | Ghost SM button |
| `action`, `onAction` | `string`, `() => void` | Same as `secondary` / `onSecondary`, kept for earlier code |
| `onClose` | `() => void` | Shows the Close icon |
| `stacked` | `boolean` | `_Alert` Type=System Update: the glyph grows to 24 and sits above the heading |

## Use

- Say what happened and what to do, in the message; one or two lines.
- `role="alert"` for error and warning, `status` for the rest.

## Don't

- Do not use an alert for a passing confirmation; use a toast or the status sheet.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
