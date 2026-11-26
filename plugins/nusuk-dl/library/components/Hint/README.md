# Hint

One line of help, information, warning, error or success under a field or block.

**Figma source:** [⌨️ Inputs › Hint](https://www.figma.com/design/DATayAnynnSQqdJQLAi7DR/?node-id=68416-100008) (Hint, Error, Info, Warning, Success; Success added 11 November 2026, with the `clapping-02` icon). Icons (re-read 24 November 2026): Hint and Info `information-circle`, Warning `spam`, Error `alert-circle`, Success `clapping-02`, 20 at the start; text Notes 2 (12) in the type colour; 20 high. Code drew Warning with `alert-circle` until today. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `type` | `'hint' \| 'info' \| 'warning' \| 'error' \| 'success'` | Error is announced to screen readers |
| `children` | `text` |  |
| `id` | `string` |  |

## Use

- Keep it to one line. Lead with what the person can do.

## Don't

- Do not stack more than one hint per field.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
