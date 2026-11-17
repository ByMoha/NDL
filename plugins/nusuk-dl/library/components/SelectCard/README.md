# SelectCard

A large selectable card for choosing a journey type or package.

**Figma source:** 📻 Switches › Select Card (Active, Selected, Disabled). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**18 November 2026 (Golf Carts review, GC-R12):** no radio. The selected state alone shows the choice. A prototype built from the older standalone DL skill drew one; the coded card here never does.

**14 November 2026 (read from Figma; the set lives in 📻 Switches):** radius 18 (`radius-md`; was 12), padding and gap 18. Active: `surface-02-ivory` with a 1 px `surface-03-pearl` line. Selected: `surface-shade-5` with a 1 px `surface-illumination` line (was shade 6 with a 1.5 Longing line). Disabled: content at 70%, the description in `text-note`, gap 20 and the soft avatar shadow (was the whole card at 38%). The top row holds the icon only; the radio code drew there is not in Figma and was removed. 

**16 November 2026 (re-read in [📻 Selections & Switches › Select Card](https://www.figma.com/design/zhcTb4a0XbF3YeYF9XI6zw)):** radius 14 (`radius-s`; was 18). Active is `surface-01-white` with a 1 px `surface-02-ivory` line and the OS shadow (−2 / 0 / 2 at 5%, plus a 0.5 spread; no token, F53). Selected stays `surface-shade-5` with a 1 px `surface-illumination` line. Disabled is `surface-02-ivory` with a 1 px `surface-03-pearl` line, full opacity, the description in `text-note`, gap 20. Type follows Figma (Q-D02 answered *keep it*): title 14 (`notes-1-regular`, `text-content`), description 16 (`body-2-regular`, `text-heading`).

**17 November 2026, 22:15 (⚙️ Foundation › Shadow/OS):** the card's Shadows layer is the OS shadow, three drops (−2 0 2, 2 0 2, 0 0 1 spread 0.5, Graphite 5%). Code drew two of them in Ink; it now uses `shadow-os` on every state, and Active adds `Shadow/XS` as the master does. Known issue F112.

## Props

| Prop | Type | Notes |
|---|---|---|
| `status` | `'active' \| 'selected' \| 'disabled'` |  |
| `title` | `string` |  |
| `description` | `string` |  |
| `iconName` | `string` |  |
| `onClick` | `() => void` |  |

## Use

- Use when each option needs a line of explanation.

## Don't

- Do not mix Select Cards and radios in one question.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
