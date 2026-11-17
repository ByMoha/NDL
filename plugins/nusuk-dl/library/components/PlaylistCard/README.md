# PlaylistCard

An audio or video series: face tile, one-line title, tag; the horizontal version adds a duration button.

**Figma source:** Playlist (Vertical On 165 × 214, Off 330 × 89) in 🃏 Cards › Partials (`mg7egvNbr2ciMP04Ig2XDl`). Read 9 November 2026.

## Props

| Prop | Type | Notes |
|---|---|---|
| `backColor` | `QuranColor` |  |
| `backImage` | `string` |  |
| `color` | `QuranColor` |  |
| `duration` | `string` |  |
| `group` | `boolean` |  |
| `href` | `string` |  |
| `image` | `string` |  |
| `onClick` | `() => void` |  |
| `onPlay` | `() => void` |  |
| `subtitle` | `string` |  |
| `title` | `string` |  |
| `vertical` | `boolean` |  |

## Anatomy

- Vertical: faces 150, gap 18, title `body-1-regular` one line with ellipsis, tag `notes-2-light` `text-note`
- Horizontal: faces 88 at the start, content with title, tag and Secondary XS button (play icon + duration), gap 18

## Logic

- Desire realm (Spiritual): listening is chosen, never pushed. The duration sets expectations (Motivation & Present Bias: small, known commitment).

## Don't

- Do not autoplay.
- Do not truncate the reciter name to less than one word.

## Native

Play opens the player; it is not a toggle inside the card.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
