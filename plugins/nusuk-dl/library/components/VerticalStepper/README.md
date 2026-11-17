# VerticalStepper

A vertical timeline of journey steps: done, current, next.

**Figma source:** [🔦 Tracker › Vertical Stepper Mobile](https://www.figma.com/design/nj7L8ks27djv1LmxZYFTM8/?node-id=70392-810) (State Done, Current, Next × Step Start, Middle, Last) on `_Stepper Step Master Mobile`, `_Stepper Point` and `_Tracker Status`. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**14 November 2026, night: rebuilt as a replica** after the library publish (values in the default modes; 267 measured checks pass, see the change log). The code of 12 November drew a 24 rail, a breathing current dot, gold chips and a rail on every state; Figma has none of that.

## Figma, part by part

- **Step:** a row, 12 (`space-sm`) between the rail and the card column; the rail sits at the start edge. The card column has 8 (`space-xs`) above and below; Start has none below, Last none above.
- **Rail:** 20 wide (`dimension-nr`), gap 4. Line above the point 18 long, line below to the end of the step, both 1.5 (`border-medium`) in `surface-06-ash`. Start hides the line below; Last hides the line above (kept in the flow) and has 18 more above, so its point sits 40 from the top (22 for Start and Middle).
- **Points:** Done is a 20 circle in `surface-longing` with a white check (8.37 × 6). Next is the 10 `icons-longing` dot of `_Ongoing Master`, centred. Current has **no rail** (Figma hides it), so its card spans the full width (known issue F33).
- **Card:** `surface-01-white`, radius 18, padding 18, gap 18, shadow 0 1 2 at 3% Ink (Figma's `New/XS`, not a Foundation style: F35). Inside, in order: title `body-2-regular` in `text-heading` and time `notes-2-light` (8 apart); description `notes-1-regular` in `text-note` (12 below); status chips (Chips Pending MD, 8 apart); last update `notes-2-light` in `text-note`; an Alert (Figma: type Error, no icon); CTAs: two SM buttons, Primary at the start, each half the width, 8 apart.
- Figma's variants turn on Status, Description and Last Update and turn off Alerts and CTAs; in code each part shows when you pass it.

## Props

| Prop | Type | Notes |
|---|---|---|
| `steps` | `{ state, step?, title, time?, description?, status?, lastUpdate?, alert?, actions? }[]` | `state`: 'done' \| 'current' \| 'next'. `step`: 'start' \| 'middle' \| 'last', the Figma variant; by default the first item is Start, the final item Last, the rest Middle. `status`: chips, Pending by default as in Figma, or `{ label, state }`. `alert`: a DL Alert (`type: 'error', icon: false` in Figma). `actions`: two SM Buttons, primary first |
| `ariaLabel` | `string` | Names the list; default "Progress" / «التقدم» |

## Known issues in Figma (code follows them)

- **F33** Current hides the rail. **F34** Start keeps the line above and hides the one below, Last the reverse, so a list stacked Start → Last has gaps in its rail; stacked with `step` 'last' first and 'start' final it joins. **F35** `New/XS` is not in Foundation. **F36** Last's extra 18 is bound to `Space/MD` of an older Layout collection (Foundation's Space/MD is 20). **F37** Next uses `_Stepper Point` Step=Current, and nothing breathes.

## Use

- Use for journeys with dependencies (visa → flight → permit), one step per service fact.

## Don't

- Do not show more than one current step.
- The time stamp and last update are facts from the service, never estimates.

## Accessibility

An ordered list with `aria-current="step"` on the current step; done and next steps add «مكتملة» / «قادمة» (completed / upcoming) for screen readers. The rail is hidden from them.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
