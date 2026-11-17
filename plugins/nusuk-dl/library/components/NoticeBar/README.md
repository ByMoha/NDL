# NoticeBar

An inline message that sits in the page: default, info, alert, success or error.

**Figma source:** [‼️ Status Handlers › NoticeBar](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=68392-31987) (Color Info, Alert, Success, Error, Default) on [`_NoticeBar Master`](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=69240-4184) (booleans CTA, Close, Description), and [NoticeBar Location](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=69678-3983). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**17 November 2026:** the master's booleans are props (`action`, `onClose`, the description); each colour has Figma's glyph; Shadow/XS as drawn; `hug` is NoticeBar Location.

## Figma

- Radius 18, padding 18, 8 between the title row and the description.
- Title row: the 20 glyph (Default `alert-circle`, Info `information-circle`, Alert `spam`, Error `alert-02`, Success `tick-double-02`), the title `notes-1-regular` in Alerts/Text/<colour>, a Ghost XS (CTA) and a 19 `multiplication-sign` (Close).
- Description: `notes-1-regular` in Alerts/Icons/Reject, 26 in from the start.
- NoticeBar Location: the bar sized to its text, at the top of the screen in the toolbar row.

## Props

| Prop | Type | Notes |
|---|---|---|
| `color` | `'default' \| 'info' \| 'alert' \| 'success' \| 'error'` | Default `default` |
| `title` | `string` |  |
| `children` | `node` | Description |
| `description` | `node` | Same as `children` |
| `action`, `onAction` | `string`, `() => void` | CTA: a Ghost XS |
| `onClose` | `() => void` | Shows Close |
| `iconName` | `string` | Overrides the colour's glyph |
| `hug` | `boolean` | NoticeBar Location: as wide as its text |

## Use

- Short and specific. Pair with an action when there is one.

## Don't

- Do not stack more than one notice per screen.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
