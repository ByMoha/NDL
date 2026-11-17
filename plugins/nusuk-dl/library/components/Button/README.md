# Button

The call to action. Primary for the one main action, Secondary for the alternative, Ghost for low-emphasis actions. `fate` makes any of them destructive.

**Figma source:** 🕹️ Buttons › CTA (320 variants: Kind × Size × State × Icon × Fate), built on `_Button Trail` (44 variants). Colours come from the Buttons library's own collection `Buttons Colors` (Light / Dark / Green modes). Sizes come from `Buttons Setup` (XS / SM / MD / LR modes). Insert the component from the library in Figma. This card mirrors it for concepts, decks and code.

**14 November 2026:** every case of the master is now reachable. The Figma master of masters (`_Button_Master Of Masters`) has nine booleans: Leading Icon, Trailing Icon, Icon Only, Show Text, Show Price, Show Apple Pay, Nafath Icon, Show Absher, Glass Effect. Code adds `icon="both"`, `price`, `mark` and `glass`, and composes kind × `fate` × `tone` × `onDark` so the combinations `_Button Trail` does not list also work (table below). Token fixes: `button-fate-surface` is `Alerts/Surface/Solid Error` at 10% (#ff41361a, was #fff2f1) and `button-secondary-surface-on-dark` is Slate at 70% (#303336b3).

**17 November 2026:** the `glass` prop blurs 5px behind the button (`Glass/Andriod Blur` is 10 in Figma; CSS blur is half the Figma radius). It was 10px.

**11 November 2026:** padding is smaller. Side padding 28 / 22 / 18 / 14 (was 32 / 30 / 22 / 16); icon side 24 / 20 / 16 / 12 (was 26 / 24 / 20 / 14). Icon-only and loading buttons use the icon-side value on both sides (widths 74 / 66 / 56 / 42).

**10 November 2026:** the icon side uses `button-padding-icon-*` on every filled button with a left or right icon, not only destructive ones.

## Props

| Prop | Type | Notes |
|---|---|---|
| `kind` | `'primary' \| 'secondary' \| 'ghost'` | Primary: `button-primary-surface` (Ink). Secondary: `button-secondary-surface` (Ivory at 70%). Ghost: no fill, no side padding, underlined label (`Regular/Body/Two Underline`), destructive Ghost included (8 Nov) |
| `size` | `'lr' \| 'md' \| 'sm' \| 'xs'` | Height 48 / 44 / 38 / 30 on phones and tablets (Wide 54 / 48 / 38 / 26; changed 9 November 2026). Side padding 28 / 22 / 18 / 14. Gap 8 / 8 / 8 / 4 (`button-height-*`, `button-padding-*`, `button-gap*`) |
| `state` | `'default' \| 'disabled' \| 'loading' \| 'focused'` | Disabled shows at 40% opacity. Loading collapses to an icon-only button (widths 74 / 66 / 56 / 42) with the spinner at the icon-only size; Primary and Secondary stay at full opacity, Ghost loading is 40%, as in Figma. `focused` shows the focus ring (Figma draws Focused the same as Default; see B10) |
| `icon` | `'none' \| 'left' \| 'right' \| 'only'` | Icon 20 / 20 / 18 / 16, icon-only 26 / 26 / 24 / 18 (`button-icon-*`) |
| `iconName` | `string` | Glyph for the icon |
| `fate` | `boolean` | Destructive. Secondary and Primary get `button-fate-surface` + `button-fate-content`. Ghost gets the red label. The icon side uses `button-padding-icon-*` (24 / 20 / 16 / 12), the same as a non-destructive button: start for `left`, end for `right`, both sides for `only` and loading (widths 74 / 66 / 56 / 42) |
| `onDark` | `boolean` | Figma `Light=On` (Buttons Colors › Dark). Use on photos, video and ink surfaces |
| `tone` | `'default' \| 'green'` | Figma `_Button Trail` Style=Green Default (with `kind="primary"`) and Green Ghost (with `kind="ghost"`), Buttons Colors › Green: `button-green-surface` + `button-green-content`, `button-green-ghost-content` (underlined). Fails contrast today (B12) |
| `icon="both"` | | Leading and trailing icon (master Leading Icon + Trailing Icon). `trailingIconName` sets the end glyph; by default it is `iconName` mirrored. Icon-side padding on both sides |
| `price` | `string \| number` | Master `Show Price`: the riyal symbol (`riyal` icon, icon size) and the amount, gap 4, before the label. Pass the amount already formatted ("1,300") |
| `mark` | `'apple-pay' \| 'nafath' \| 'absher'` | Master `Show Apple Pay` ("Pay" in the system font, before the label; accessible name "Apple Pay"). The Apple logo glyph (U+F8FF) exists only in Apple fonts, so code adds it only on Apple devices; elsewhere it would draw an empty box. In the iOS app use the system `PKPaymentButton`, as Apple's guidelines require, `Nafath Icon` and `Show Absher` (after the label, icon height, width from the glyph). For the full Apple Pay, Google Play or App Store badge use Special CTA instead |
| `glass` | `boolean` | Master `Glass Effect` (`Glass BG` Glass=Off, the cross-platform fallback): `glass-android` inset shadow and `blur-md` backdrop blur. Filled buttons only; ghost ignores it |
| `full` | `boolean` | Stretch to the container |
| `children` | `text` | The label: names the outcome ("Book your visit"), never "OK" or "Submit" |
| `ariaLabel` | `string` |  |
| `className` | `string` |  |
| `disabled` | `boolean` |  |
| `flipIcon` | `boolean` |  |
| `onClick` | `() => void` |  |
| `trailingIconName` | `string` | Trailing glyph when icon='both' (default: iconName mirrored). |
| `type` | `'button' \| 'submit' \| 'reset'` |  |

Labels use `body-2-regular` (16px) at every size, as in Figma.

## Every combination

`_Button Trail` lists 11 style × darkmode pairs. Code composes the same tokens, so the 7 pairs Figma leaves out also work:

| Style | On light (`onDark` off) | On dark (`onDark`) |
|---|---|---|
| Primary | Trail Default, Darkmode=Off | Trail Default, Darkmode=On |
| Secondary | Trail Secondary, Darkmode=Off | Trail Secondary, Darkmode=On |
| Ghost | Trail Ghost, Darkmode=Off | Trail Ghost, Darkmode=On |
| `fate` Primary / Secondary | Trail Fate, Darkmode=Off | Trail Fate, Darkmode=On |
| `fate` Ghost | Trail Fate Ghost | **not in Figma**: `button-fate-content-on-dark` |
| `tone="green"` Primary | **labelled Darkmode=On in Figma only** (it uses the Light mode) | same tokens (Green mode does not change on dark) |
| `tone="green"` Ghost | Trail Green Ghost | **not in Figma**: same green label |
| `tone="green"` Secondary | **not in Figma**: `button-green-secondary-*` (Green › Secondary Surface exists, no variant uses it) | same |

CTA (the public set) exposes Kind × Size × State × Icon × Fate only: Green, on-dark, Fate Ghost on dark, both icons, price, marks and glass are reached in Figma through `_Button Trail` and the master, not through CTA. Known issues B14, B15 and F2.

## Use

- One Primary per screen or sheet. LR for the main screen action, MD by default, XS inside cards and rows.
- MD, SM and XS carry tap padding to 48 (44 in the top bar); nothing to add.
- Loading keeps the place and announces busy. Use it for anything over 300ms.
- Pair Primary with Secondary for a choice. Ghost is for a third, quieter action.
- `fate` only for actions that remove or cancel something: cancel booking, delete, leave group.

## Don't

- Never restyle colour, radius or font size. Need a new look? Request it.
- Do not disable the main action to hide validation. Let people submit, then show what to fix.
- Do not use Title Case. Sentence case only.

## Known issues (kept exact from Figma)

- **Dark themes:** `button-primary-content` maps to `Text/Inverse`, which stays white while `button-primary-surface` inverts to white. The result is a 1:1 label. Logged for the DL team as C7; the removed `Buttons/Text/Primary` inverted correctly, so this is a regression with a one-alias fix in Figma.
- **Destructive** (`fate`): 3.2:1 in light themes, with or without `onDark` (C8).
- **Secondary on dark** (`secondary` + `onDark`): 1.6:1 in dark themes (B7). Avoid until fixed.
- **Green** (`tone="green"`): 2.6:1 in light themes, 1.1:1 in dark themes (B12). Use only with an icon and a short verb until Figma darkens it.
- **Ghost + Fate + Icon right** is 24px tall in Figma at every size (B13). Code keeps the size height.
- **Focused** (B10): Figma's Focused variant looks the same as Default. Code draws a 2px ring, offset 2px, because keyboard focus must be visible (WCAG 2.4.7): Ink on light surfaces, white with `onDark` and on Ink fills. It was `surface-longing` until 9 November 2026 (1.87:1 on white).
- **On dark in dark themes** (B16): the `onDark` colours invert with the theme, so Ghost is white on white on an Ink surface and Primary turns dark on media.
- **Loading glyph**: Figma's Loading variant shows the `arrow-left-02` placeholder icon; code shows a spinner of the same size.
- Primary and Secondary fills come from `Glass BG` (Navigation=Primary Action), a flat fill with no glass effect, so CSS matches it exactly.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
