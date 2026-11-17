# Steps

A horizontal step bar for order and request progress.

**Figma source:** [🔦 Tracker › Steps](https://www.figma.com/design/nj7L8ks27djv1LmxZYFTM8/?node-id=70451-491) on `_Step Master` (State Previous, Current, Next). Status variants: OrderReview, OrderPreparation, OrderShipped, OutForDelivery, Delivered (five steps) and CancellationRequested, CancellationProcessing, RefundInProgress (three steps). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**14 November 2026, night: rebuilt as a replica** after the library publish (default modes). The afternoon version used 20 instead of 18 for the start padding and gaps, 20/30 instead of 18/32 for the label, a flat glow and no gradient on the current line.

## Figma, part by part

- Steps sit in a row with no gap, start-aligned and top-aligned; each step hugs its label.
- **Point row:** 20 high, 18 (`space-nr`) in from the start, then the 20 point, 18, and a 1 px (`border-thin`) line to the end of the step. The final step has no line.
- **Previous:** a 12 `surface-10-ink` dot; the line is `surface-07-slate`.
- **Current:** the stage icon, 20, in `icons-illumination`, over the *Breathing Effect* (a soft `surface-illumination` → `surface-shade-5` glow, 34 × 34, 60%, blurred 10.9). The line runs `surface-07-slate` at the point and fades to clear 76% of the way along. The glow breathes once (4 s, to a small `surface-shade-3` glow and back) and then rests; no motion under reduced motion (DL-17).
- **Next:** a 12 ring, 1 px `surface-05-smoke`; the line is `surface-04-mist` fading the same way; the label at 40%.
- **Label:** 12 under the row; 18 in from the start, 32 at the end, gap 4. Title `notes-1-regular` in `text-heading`; the current step adds its details in `notes-2-light`, `text-note`.

| Figma Status | `current` | Stage icon of the current step |
|---|---|---|
| OrderReview · OrderPreparation · OrderShipped · OutForDelivery · Delivered | 0 · 1 · 2 · 3 · 4 | package-search · package-receive · package-moving · delivery-truck-02 · safe-delivery-01 |
| CancellationRequested · CancellationProcessing · RefundInProgress | 0 · 1 · 2 | package-out-of-stock · delivery-view-01 · money-exchange-01 |

## Props

| Prop | Type | Notes |
|---|---|---|
| `steps` | `(string \| { title, details?, icon?, state? })[]` | `details` shows on the current step; `icon` is its stage icon; `state` ('prev' \| 'current' \| 'next') overrides `current` |
| `current` | `number` | Index of the current step; the ones before it are Previous |
| `ariaLabel` | `string` | Names the list; default "Progress" / «التقدم» |

## Use

- Three to five steps with short labels. Wider than the screen, the bar scrolls sideways.
- The Figma labels are kept verbatim in the preview; their copy review is parked (F20, F30).

## Don't

- Do not use for flows people move through themselves; use a form progress.

## Accessibility

An ordered list with `aria-current="step"`; previous and next steps add «مكتملة» / «قادمة» for screen readers; the point row is hidden from them.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
