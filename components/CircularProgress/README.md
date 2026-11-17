# CircularProgress

A determinate ring for a process whose completion can be measured: an upload, a download, a sync.

**Figma source:** [🧭 Navigation › Circular progress indicator](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw/?node-id=2402-18252) (Progress 0, 10, 30, 50, 80 × Darkmode Off, On), new on 17 November 2026. The set was being edited while it was read (it had Flat and Wave types earlier the same day; at 20:00 it has one type and no 100), so treat this card as Proposed until the set is published.

## Anatomy

- 44 square, 3 stroke drawn inside (centre radius 20.5).
- Active part: `surface-longing`, round ends, from 12 o'clock, clockwise.
- The rest of the track: `surface-03-pearl` (Darkmode On: `surface-01-white`), with a 15° gap at each end of the active part. At 0 the track is a full ring; at 100% the active part is.

## Props

| Prop | Type | Notes |
|---|---|---|
| `value` | `number` | 0–1 (or 0–100) |
| `dark` | `boolean` | Darkmode On: white track |
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
