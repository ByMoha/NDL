# ProgressRing

A small ring showing progress through a form or steps, with an optional title.

**Figma source:** [🧭 Navigation › Progress](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw/?node-id=2402-18252) on `_Form Progress Indicator` (Status P20, P40, P60, P80, P100 · Show Check Mark) and `_Master Progress Indicator`.

**17 November 2026, rebuilt to Figma:** 44 square. A 1.14 `surface-03-pearl` ring; the progress is a 7.4 `surface-illumination` band (Figma: inner radius 64%) that starts at 6 o'clock and runs clockwise, with round ends. A 5 `surface-shade-3` dot sits in the band's start cap. The count is `notes-2-regular` in `text-content`. At 100% the circle fills with Illumination and a 28 `tick-02` in `surface-shade-6` replaces the count (Show Check Mark). Until today code drew a 3 stroke from 12 o'clock.

## Props

| Prop | Type | Notes |
|---|---|---|
| `value` | `number` | 0–1 |
| `step, steps` | `number` | Sets the value and the count «2/4» (`steps` default 4) |
| `text` | `string` | Overrides the count |
| `check` | `boolean` | Show Check Mark at 100% (default true) |
| `title, subtitle` | `string` | `body-2-regular` and `notes-2-light`, 12 from the ring (Figma Progress) |
| `label` | `string` | Accessible name |

## Use

- Steps of a form or a booking: the count names the step, the band shows how far.
- The ring stays clockwise in Arabic and English.

## Don't

- Do not use for loading; use the loading state of Button or CircularProgress.

## Native

iOS: a `Circle().trim(from:to:)` with `StrokeStyle(lineWidth: 7.4, lineCap: .round)`, rotated so 0 sits at 6 o'clock, over a 1.14 track; a 5 pt dot at the start. Android: `Canvas` `drawArc(startAngle = 90f, sweepAngle = 360f * v, useCenter = false, style = Stroke(7.4.dp, cap = StrokeCap.Round))`.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.

**17 November 2026, 20:55:** with a `title`, the title and subtitle come first, at the reading start, 4 in, and the ring 12 after them, as 🧭 Navigation › Progress (RTL=On) draws it; the title is `text-heading`.
