# HintWidget

A preparation tip people can tick off: icon, title, details and a link chip.

**Figma source:** Hints Widget (Direction Vertical, Horizontal) in 🃏 Cards › Partials (`mg7egvNbr2ciMP04Ig2XDl`). Read 9 November 2026.

**14 November 2026:** Figma has 4 directions. `Direction3` is Horizontal again with the icon in a second slot (`Icon2`), so code keeps `horizontal`. `Direction4` is new and becomes `direction="logo"`: 234 × 212, padding 26 / 20, gap 18, a partner logo 48 (Cards › Logo Icons), title `body-1-regular` (18), details `notes-1-regular` (14), no tick box. Its sample text names an airline: use it for a real service the person is booking, never as an advert (known issue F5).

## Props

| Prop | Type | Notes |
|---|---|---|
| `action` | `string` |  |
| `checkLabel` | `string` |  |
| `checkable` | `boolean` |  |
| `checked` | `boolean` |  |
| `details` | `string` |  |
| `direction` | `'vertical' \| 'horizontal' \| 'logo'` | `logo` = Figma Direction4 (14 Nov 2026): logo 48, title 18, details 14, no tick box |
| `href` | `string` |  |
| `iconName` | `string` |  |
| `logo` | `string \| React.ReactNode` |  |
| `logoAlt` | `string` |  |
| `title` | `string` |  |
| `tone` | `'white' \| 'teal' \| 'saffron' \| 'amethyst' \| 'olive'` |  |

## Anatomy

- 200 × 168, padding 26/18, gap 12, radius 18
- Top row: icon 24 at the start, tick box 18 (Longing border, radius 4) at the end
- Title `body-2-regular`, details `notes-2-light`, White XS chip with the link (18 high; invisible padding gives it a 48 target)
- Tones: Quran teal, saffron, amethyst, olive shades with a 1 px 2% inner line, or white with Glass/Full

## Logic

- Transformational / Functional: readiness for a rite. The tick is a personal checklist (Self-Control & Commitment), stored per user, never shared.
- Feedback: ticking shows progress; do not celebrate or gamify it.

## Don't

- Do not use for alerts or deadlines (use NoticeBar).

## Native

The tick is a toggle button with an accessible name ("تم: <title>").

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
