# CircularProgress

A determinate ring for a process whose completion can be measured: an upload, a download, a sync.

**Figma source:** [🧭 Navigation › Circular progress indicator](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw/?node-id=2402-18252) (Progress 0, 10, 30, 50, 80 × Darkmode Off, On), new on 17 November 2026. The set was being edited while it was read (it had Flat and Wave types earlier the same day; at 20:00 it has one type and no 100), so treat this card as Proposed until the set is published. Its variant labels (0, 10, 30, 50, 80) still don't match the values drawn (0%, 20%, 50%, 75%, done) (F92).

## Anatomy (re-read 17 November 2026, 20:55)

- 44 square, 3 stroke drawn inside (centre radius 20.5), round caps.
- 0: a whole `surface-03-pearl` ring.
- Otherwise the active arc (`surface-longing`) runs clockwise from 15° after 12 o'clock to 360° × value; after a 15° gap the track (`surface-03-pearl`; Darkmode On `surface-01-white`) runs back to 12 o'clock. Figma's 50% variant is turned 15° from the others (F106); code follows the 20% and 75% variants.
- The value in the middle: `notes-2-regular`, `text-content` (Darkmode `text-inverse`).
- Done: a `surface-longing` disc with a white 24 `tick-02`.

## Props

| Prop | Type | Notes |
|---|---|---|
| `value` | `number` | 0–1 (or 0–100) |
| `dark` | `boolean` | Darkmode On: white track |
| `text` | `string` | The text in the middle (default: the percentage) |
| `label` | `string` | Accessible name; the value is announced |

## Use

- Use the same ring for every instance of one process, as Figma's description asks.
- Pair it with words for anything longer than a few seconds: what is happening and what happens next.

## Don't

- Do not use it for a step count: that is ProgressRing.
- Do not spin it when the duration is unknown; use the loading state of Button.
- The Wave option in Figma's description has no variant yet; code draws only the flat ring.

## Native

iOS: `ProgressView(value:)` with a custom `ProgressViewStyle` drawing two trimmed `Circle` strokes (3 pt, round caps). Android: Material 3 `CircularProgressIndicator(progress = { v }, strokeWidth = 3.dp, gapSize = …, trackColor = …)`; set the colours to the DL tokens.

## You provide

The value and the words around it. Colour, size and stroke come from the tokens and are not props.
