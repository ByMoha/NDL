# HeaderTabs

Segmented tabs for switching views inside one screen, with optional icons, counts and an updates dot.

**Figma source:** [🎹 Tabs › Header Tabs](https://www.figma.com/design/t4vGzLmqSgIwWuQPrsRyFY/?node-id=68411-2883) (Size SM, LR × Background On, Off), on `_Header Tabs` (Darkmode, Show Item 3–8) and `_Tab_Master_Status` (Status × Icon Off, On, Icon Only × Show Number × White × Updates), with Number Notification. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**24 November 2026 (Figma re-read):** Header Tabs now fills its container by default and every tab takes an equal share (`_Tab_Master_Status` is Fill in all four variants); `fill={false}` hugs the labels, as the Login Form does. The track is padded 4 all round (was 4 / 8). Tab, label, icon (20, Figma log: "updated icon size"), count and updates are unchanged.

**18 November 2026 (Golf Carts review, GC-R11):** on a page the tabs span the full width and share it equally (two tabs 50/50), grey track and white pill: pass `fill`. Keep the track on white cards; `background={false}` is for tabs over the page background only.

**17 November 2026, 21:00 (rebuilt as a replica):** the track is padded 4 / 8 (code had 4 all round); its fill reaches 2 outside the track, as Glass BG does in Figma; LR tabs are 40 high (code had 38); the chosen tab's shadow is −6 6 30 −12 Ink 5%, the style Tabs uses (F104); new `darkmode` (Smoke track, white labels), and per tab `icon`, `iconOnly` and `updates`. The count stays Smoke on the chosen tab, as Figma draws it (code turned it white).

## Anatomy

| Part | SM | LR | Token |
|---|---|---|---|
| Track | 38 high, padding 4, tabs 8 apart; fills its container | 48 high | `space-xxs`, `space-xs` |
| Track fill (2 outside the track) | Ivory; Darkmode Smoke | same | `surface-02-ivory`, `surface-05-smoke` |
| Tab | 30 high, padding 8 / 20, 18 on the icon side | 40 high | `space-xs`, `space-md`, `radius-full` |
| Label | Notes 1 Regular, 2 above the bottom | same | `text-heading` (Darkmode `text-inverse`) |
| Icon | 20, at the start, 4 before the label | same | `icons-black` (as Figma, also in Darkmode: F107) |
| Count | Number Notification 16 high, 12 after the label | same | Smoke with `text-inverse`; Darkmode white with `text-heading` and a soft shadow |
| Updates | 6 dot, 8 from the end, 4 from the top | same | `alerts-surface-solid-error` |
| Chosen tab | white, −6 6 30 −12 Ink 5% | same | `surface-01-white` |

## Props

| Prop | Type | Notes |
|---|---|---|
| `tabs` | `(string \| { label, icon?, iconOnly?, count?, updates?, ariaLabel? })[]` | 2 to 8 tabs (Show Item 3–8) |
| `active` | `number` | The starting tab; the tabs keep their own state |
| `size` | `'sm' \| 'lr'` | |
| `background` | `boolean` | `false` = Background Off: no track |
| `darkmode` | `boolean` | `_Header Tabs` Darkmode On, for imagery |
| `light` | `boolean` | The glass toolbar tabs (GlassBG `field`, Dark On), not this set |
| `fill` | `boolean` | Default `true` (24 Nov 2026): span the container, every tab an equal share. `false` hugs the labels |
| `onChange` | `(index) => void` | Called when the person picks a tab |
| `ariaLabel` | `string` | Names the tab list |
| `dark` | `boolean` | Older name for `darkmode` |

## Use

- Two to four short labels on a phone; up to eight where the screen is wide.
- An icon-only tab takes its label as its accessible name.

## Don't

- Do not use for navigation between sections of the app.
- Do not use Updates as a nudge to come back: it marks a real change in that view.

## You provide

The content (labels, counts, icons from the DL set) and the container. Colour, type, radius and spacing come from the tokens and are not props.
