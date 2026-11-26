# SupportSheet

The help sheet of a service: quick actions (maps, lost and found, emergency), the service FAQ, Nusuk AI, sponsors, and the SOS view with medical help and emergency numbers. New in code on 24 November 2026.

**Figma source:** [🧭 Navigation › Support Bottom Sheet](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw/?node-id=69401-7457) (Status Default, SOS) on `_Support Bottom Sheet Master`.

## Anatomy

| Part | Spec |
|---|---|
| Sheet | Bottom Sheet BG, padding 8, grabber 36 × 5 Mist |
| Action tiles | three 72-high tiles, radius 22, Ivory; Emergency in Alerts/Surface/Error with `ambulance` in the error colour; 20 icon over Notes 1 |
| FAQ card | white, padding 32 / 18, 18 apart: title (18), Header Tabs LR without track (icons `zap`, `menu-circle`), Collapsed Sections (Ivory, radius 12, 4 apart), Secondary SM «عرض الكل», Nusuk AI prompt, sponsors row «برعاية» |
| SOS | back row (Secondary XS `arrow-left-02`, «العودة»), the help card (gold location rings, 45 avatar, Headline 20, Secondary SM `arrow-right-02`), two number tiles (`cardiogram-02` Red Crescent, `police-badge` police, 1966) and the WhatsApp Option Card (`whatsapp`, `message-edit-02`) |

## Props

| Prop | Type | Notes |
|---|---|---|
| `status` | `'default' \| 'sos'` | |
| `actions` | `{ icon, label, fate?, onClick }[]` | Default maps, lost and found, emergency (`onSos`) |
| `title`, `tabs`, `faqs`, `onAll` | `faqs`: `{ q, a }[]` | FAQ |
| `aiText`, `aiLabel`, `onAi` | | Nusuk AI prompt |
| `sponsors` | `{ src, alt }[]` | Sponsor logos |
| `helpTitle`, `helpAction`, `onHelp`, `numbers`, `whatsapp`, `onBack` | | SOS |
| `allLabel` | `string` | The FAQ's «عرض الكل» button |
| `sponsorLabel` | `string` | The sponsors caption, default «برعاية» |
| `onSos` | `() => void` | The emergency tile in Default (opens SOS) |
| `whatsappTitle` / `whatsappAction` | `string` | SOS: the WhatsApp card's title and action |
| `backLabel` | `string` | SOS: the back button, default «العودة» |
| `ariaLabel` | `string` | Names the sheet |
| `sos` | `boolean` | Older name for `status: 'sos'` |

## Use

- Numbers are tappable (`tel:`); keep them left to right.
- Emergency opens SOS in one tap; never put it behind a menu.

## Don't

- Do not add urgency or alarm styling beyond the Error tile; the SOS view is calm and direct.
