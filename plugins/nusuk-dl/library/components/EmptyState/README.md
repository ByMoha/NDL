# EmptyState

What to show when there is nothing yet, and the one action that fixes it. Full page, or a card in a list.

**Figma source:** [‼️ Status Handlers › Empty Status](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=68392-32096) (Type Visual, Icon × Location Full Page, List) on [`_Empty Status Master`](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=68392-32105) (booleans Secondary CTA, Show Icon, Show Illustration). General Bottom Sheet's No internet and Full Screen Error are this card, full page, inside a screen. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**17 November 2026: rebuilt to Figma.** Full page: the title is `headline-1-regular` and the description `body-2-light` in `text-content`, with Primary MD over Ghost MD. New: `location="list"` (the card), `secondary`, the glyph 38 in a 68 circle and the artwork sizes.

## Figma

- Full page: padding 48 18, gap 26, centred: a 68 circle (padding 8) in `alerts-surface-default` with a 38 `alert-01`, or the artwork 130 × 152; the title; the description 12 below; Primary MD, Ghost MD 4 below.
- List: a white card, radius 22, padding 26 18, Shadow/XS as drawn: the 24 glyph (or the artwork, 84 × 98) at the start, 18 from the text; the title `headline-2-regular`, the description `notes-1-light` in `text-subtle` 4 below; Primary SM and Ghost SM, 18 apart, 18 under the text.

## Props

| Prop | Type | Notes |
|---|---|---|
| `type` | `'icon' \| 'visual'` | Visual shows the artwork |
| `location` | `'page' \| 'list'` | Default `page` |
| `iconName` | `string` | Default `alert-01` |
| `icon` | `boolean` | Show Icon. Default true |
| `image` | `string` | The artwork from Visual Assets (Show Illustration) |
| `title` | `string` |  |
| `titleTag` | `'h2' \| 'h3'` | Default `h2` |
| `body` | `string` |  |
| `action`, `onAction` | `string`, `() => void` | Primary CTA |
| `secondary`, `onSecondary` | `string`, `() => void` | Secondary CTA (Ghost) |

## Use

- Say what will appear here and how to get it.
- No internet: «لا يوجد اتصال بالإنترنت», «فضلًا تحقق من اتصالك وحاول مجددًا», Primary «حاول مرة أخرى», with `iconName="no-internet"`.

## Don't

- Do not blame the person ("You have no bookings!").

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
