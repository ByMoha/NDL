# Nusuk AI chat · a skill aspect of the Nusuk DL

**Version:** NusukChat 2.8.5 on DL 3.10 (17 November 2026, Figma checked at 15:30 and 20:05) · **Status:** Proposed lane · **Rules:** DESIGN.md › M9C · **Figma:** [💬 Chat UI](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR/?node-id=2402-18252) (7 sets, 54 variants, 3 masters)

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
- **Chips** padding: `chip-padding-lr` (14) content side, `chip-padding-icon-lr` (12) icon side.
- **AI Tab Bar** input and round buttons: Glass BG (Default, Glass On) + Shadows › OS — `glass-fill`, `glass-rim`, `shadow-os`, `blur(blur-frost / 2)`; no Pearl border.

## Open items
- `--text-*` font variables are missing from DL `tokens.css` (known issue F31), so the chat keeps `--nkc-type-*` aliases in `nk-chat.tokens.css`.
- The DL artifact's `project/tokens.css` is older than the 3.10 file in the Hello downloads; the chat is tested against 3.10.
