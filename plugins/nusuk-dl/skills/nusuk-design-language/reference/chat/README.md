# Nusuk AI chat · a skill aspect of the Nusuk DL

**Version:** NusukChat 2.9.1 on DL 3.10 (25 November 2026, Mixed messages, Loading Text, tab bar actions, Badge) · **Status:** Proposed lane · **Rules:** DESIGN.md › M9C · **Figma:** [💬 Chat UI](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR/?node-id=2402-18252) (7 sets, 55 variants, 3 masters)

## When to open this folder
Any work on the Nusuk AI chat: a bot answer, a question in the chat (date, slot, OTP, password, mobile, gender, passport, border number, IBAN, face scan), the AI tab bar (default, text, typing, recording, recorded, responding, limit reached), the Nusuk Bot and its notes, booking tickets, hotel and flight cards, location guides and option lists.

## Files
| File | What it is |
|---|---|
| `components.md` | The 41 exports: status (dl / variant / new), DL parent, Figma set and node ids, props |
| `nk-chat.js`, `nk-chat.css`, `nk-chat.tokens.css` | The code (`window.NusukChat`), built on `window.NusukDL` |
| `manifest.proposed.json` | Machine-readable list of the same 41 exports |
| `tokens.proposed.json` | The 43 proposed `chat-*` values (12 are type aliases); everything else is a DL token |
| `icons.proposed.json` | 18 Figma icons the chat needs that the DL icon set does not have yet |
| `cards/<Name>.md` (in the skill: `cards.md`, one file) | One card per export, in the DL card format, ready for the DL Manager |
| `migrations/` (in the skill: `migrations.json`, keyed by file name) | What changed in each round, newest last (2026-11-17: SelCard, chip padding, tab-bar glass) |

## Rules that matter most
1. **Figma wins.** Chat UI is the source; a chat export becomes DL only when its Figma set is published and the DL Manager accepts its card.
2. **DL first.** 27 of 41 exports are DL components or their variants. Configure them; never restyle (DL rules 2–3).
3. **Tokens only.** No raw values. Proposed chat values live in `tokens.proposed.json` and are named `chat-*`.
4. **Answers are logistics, not rulings.** The bot guides, links and books; it never issues a fatwa, never adds urgency to a spiritual decision, and never streaks or scores worship (M4).
5. **One primary per question.** Each Question container has one primary Button MD ("Confirm and continue"); secondary actions are Ghost or Secondary.
6. **Arabic first, English mirrored.** `NusukChat.setLang('en')` switches built-in labels; directional icons swap by language (`arrow-left-02` in Arabic, `arrow-right-02` in English).
7. **One bubble per answered question.** Once a question is answered, its bubble is dismissed and the answer becomes one user bubble with the question as its header row (12 × 14 Nusuk mark, Notes 14) and "Edit answer": pass the question as `question` on the answer. Replies to suggestions after a result stay plain user bubbles (DESIGN.md › M9C, 17 November 2026).

## Load order (HTML)
```html
<link rel="stylesheet" href="tokens.css">
<link rel="stylesheet" href="components/bundle.css">
<link rel="stylesheet" href="chat/nk-chat.tokens.css">
<link rel="stylesheet" href="chat/nk-chat.css">
<script src="react.production.min.js"></script>
<script src="react-dom.production.min.js"></script>
<script src="components/bundle.js"></script>
<script src="chat/nk-chat.js"></script>
```

## Badge (2.9.1, 25 November)
- **New:** [Badge](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR/?node-id=80840-63916) (80840:63916), placed first in the _Chat Container Body. `NusukChat.Badge`: success (rosette, tick-02 24), failure (rounded triangle, unavailable 20), alert (hexagon, alert-02 38); light = soft Alerts surface + Alerts icon colour, dark = solid surface + white icon; 50 × 50. `Question` takes `badge`.
- **Open in Figma:** the solid red and orange variants are named Color=Light (they duplicate the light ones) and Failure is spelled Faliure; alert-02 at 38 overflows the hexagon; there is no Show Badge property, so the layer is toggled by hand. Migration `migrations/2026-11-25b-nusuk-chat-badge.json`.

## What changed on 25 November (2.9.0)
Source: the DL Advisor's major update to 💬 Chat UI ([_Chat Container Master](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR/?node-id=80451-18766), [AI Chat Messages](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR/?node-id=80392-4523), [AI Tab Bar](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR/?node-id=80392-4481)).
- **Mixed (new):** container Type=Nusuk/Mixed (80835:28996) and User/Mixed (80835:29699); AI Chat Messages Style=Mixed (Nusuk 80835:33795, User 80835:31779). Nusuk: bubble › time + actions › follow-ups outside the bubble as DL CTA Primary SM without an icon, wrapping 8 × 8 from the start edge. User: bubble › content outside › time. Code: `NusukChat.Mixed` and `Message` `below`.
- **Loading:** DL Loading Text replaces the fading dots: 23 × 13, three 3.66 dots, one at a time grows to 5.85 from the start edge, 150 ms a step, ease-out; off with reduced motion. Style=Loading: Nusuk 80835:33952, User 80392:4524.
- **Tab bar Status=Actions (new, 80821:18082):** Regular/Body/Two with 18 inline padding, 12 above one row of Primary SM replies that does not wrap and scrolls sideways. The master is `_AI Tab Bar Master` with Darkmode Off (80392:4168) and On (80821:21830); Status=Default is the home indicator only.
- **Re-pointed:** user text is 80835:30455 (80392:4524 is now User / Loading). Style=Transprent (80835:32812 / 32356) and Solid Background (80835:33283 / 33476) map to `Message` with `bg` false / true. Nafath, Nationality, Email and Email OTP now place the Conversation Components sets inside AI Chat Messages.
- **Icons:** earth, global and mail-01 are not in the DL icon set; the chat carries them from Figma (FigIcon). The Nationality search icon was blank before.
- Migration `migrations/2026-11-25-nusuk-chat-mixed-loading-tabactions.json`.

## What changed on 23 November (2.8.8)
- **Default** (`Chips`, [Figma 80392:4581](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR/?node-id=80392-4581)): follow-ups are DL **CTA Primary SM, Icon=Right** with arrow-right-02 (mirrored in RTL), not Chip White LR. They wrap 8 × 8 from the start edge, 12 below. Transparent message, help-circle on, the time alone in the footer.
- **Error** (`ErrorMsg`, [Figma 80392:4595](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR/?node-id=80392-4595)): DL Alert (Error, alert-02) at full width, 18 above a row of **CTA Primary XS, Icon=Right**, same wrap, 12 below.
- **Props:** `kind`, `size` (sm; ErrorMsg xs), `iconName` (arrow-right-02), `chip: true` for the old chip. Breaking: `buttons` is removed (buttons are the default) and chips no longer set `aria-pressed`. Migration `migrations/2026-11-23-nusuk-chat-default-error-ctas.json`.

## What changed on 19 November (2.8.7)
- **New: General Error** (`GeneralError`, [Figma 80759:6908](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR/?node-id=80759-6908)): a Nusuk/BG question that stops the flow. Type row, the 72 error mark (Alerts/Surface/Error, alert-01 at 38 in Alerts/Icons/Error), 18 below the message in Body 1 (`\n` breaks the line), one Primary MD CTA; no footer actions. Props: `text`, `type`, `typeIcon`, `cta`, `ctaEl`, `onConfirm`, `onBack`.
- **Voice:** 42 Ink play button, waveform of 3-wide round bars on Surface/Longing on an 8 pitch (played 100%, the rest 30%), no timer — the duration is in the play button's label. Breaking for anyone styling `.nkc-timer` inside `.nkc-voice`.
- **Transparent messages** keep their 18 inline padding (Chips, ErrorMsg); in Hotel Choose and Flights Selection the question card stays full width and the list sits 12 below it.
- **Days:** Ivory month pill (Headline 2, a 24 calendar icon, two 42 white round buttons), weekday row 48, calendar 8 in, flush with the month. **DaysAnswer:** Display 1 Regular 32. **Slots:** blocks flush; the note row is 18 all round, Notes 12 in Alerts/Text/Default with the muslim icon.
- **Confirmation:** the email and Edit sit in the question block, 8 below the title. **Password:** three criteria, as Figma lists them (was five). **SelCard:** 12 between the icon row and the text. **Border Number:** 8 between cards and field. **IBAN:** 12 between fields.
- **FaceScan:** the scan sits in a 134 photo frame; copy and hint in a 318 column; the CTA is below the content. **Location Guide:** steps in Body 2, the image glows (blur 40, 40%), cards 120 high. **Single Choose:** option cards without the line, 66 high.
- **Still on the DL side:** Day Picker is 48 high in Figma (DL 40), Pray Card 90 (DL 113), the Select Card master's 12 gap (DL card says 18), and the Hotel Offer (318×515) and Flight Ticket Full (259) sizes (AI9). Migration `migrations/2026-11-19-nusuk-chat-figma-round.json`.

## What changed on 18 November (2.8.6)
- **The six container states** (💬 Chat UI › `_Chat Container Master`, [Figma](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR/?node-id=80451-18763)): **Nusuk/BG, Nusuk/Transparent** when Nusuk owns a message or question and the user has not answered; **User/BG, User/Transparent** once the user answers (the question moves up into the header row, the body is the answer); **Loading Nusuk, Loading User** while one side waits or something runs in the background.
- **Code now matches Figma:** the Nusuk bot sits at the top of the bubble, tail corner top-start (was the bottom); the time follows the reading direction (start for Nusuk, end for the user; it was pinned left-to-right); time and question header are Notes 14 Regular; a Nusuk message no longer takes the answered-question header (its `question` is the bubble's first line); Loading centres the bot or avatar with the dots. Migration `migrations/2026-11-18-nusuk-chat-container-states.json`.

## What changed on 17 November, 19:30 (2.8.5)
- **One bot per run of Nusuk messages:** when the next message is also from Nusuk, the bot goes and only the last one keeps it. Bubbles keep the empty 24 start column; an insight note drops its 38 bot. A user message, a sheet or the end of the thread ends the run. `bot: false` on `Message`, every Nusuk type and `BotNote`; `.nkc-thread` on the thread container applies it on the web.
- **DL overlap (AI9):** the DL now has `HotelCard` and a rebuilt `FlightTicket` (Full and Mini) from 🏖️ Travel; the chat's `HotelCard` and `FlightTicketFull` should move to them.

## What changed on 17 November, 15:50 (2.8.4)
- **Component notes:** the `PasswordField` and `Message` notes in the registry of `nk-chat.js` describe the 2.8.2 layout (the 62 field, then the criteria; `space-lr`, the 26 at the bottom of the body), so `node tools/build-dl-package.js` rebuilds the cards and `manifest.proposed.json` as they are here. Nothing renders differently.

## What changed on 17 November, 15:30 (2.8.3)
- **Answer padding:** the Days and Slots answers keep 20 at the bottom, as Figma draws them (`padEnd: 'md'`), with Voice, Passport Attach and Location Guide.
- **Password copy:** the criteria have no full stop, as in Figma.

## What changed on 17 November, 15:07 (2.8.2)
- **Bubble padding:** the message body is 20 / 18 / 26 / 18; Voice, Passport Attach and Location Guide keep 20 at the bottom (`padEnd: 'md'`).
- **Password:** the criteria sit under the 62 field as DL Checkbox SM, 8 apart (⌨️ Inputs › Input Type=Password).

## What changed on 17 November, afternoon (2.8.1)
- **User question row:** the Nusuk Bot beside the echoed question is a 12 × 14 mark with no eyes (`Bot` `eyes: false`), 12 from the text; user bubbles are 9 shorter.

## What changed on 17 November (2.8.0)
- **SelCard** follows DL 3.10 Select Card: radius 14, Active white + Ivory line + `shadow-os`, title 14 `text-content` over description 16 `text-heading`, icon alone in the top row. No radio (Figma has none); groups are `role=radiogroup` of `role=radio`. New props `desc`, `disabled`. **Breaking:** `radio` prop removed.
- **Chips** padding (legacy `chip: true` only): `chip-padding-lr` (14) content side, `chip-padding-icon-lr` (12) icon side.
- **AI Tab Bar** input and round buttons: Glass BG (Default, Glass On) + Shadows › OS — `glass-fill`, `glass-rim`, `shadow-os`, `blur(blur-frost / 2)`; no Pearl border.

## Open items
- `--text-*` font variables are missing from DL `tokens.css` (known issue F31), so the chat keeps `--nkc-type-*` aliases in `nk-chat.tokens.css`.
- The DL artifact's `project/tokens.css` is older than the 3.10 file in the Hello downloads; the chat is tested against 3.10.
