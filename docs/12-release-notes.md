# Release notes

For developers. Figma is the source of truth; `tokens.json` mirrors it. Machine-readable migrations: `migrations/2026-11-17-status-rating.json`, `migrations/2026-11-17-glass-brand.json`, `migrations/2026-11-16-csat-nps.json`, `migrations/2026-11-16-bottom-bar-inputs-select-card.json`, `migrations/2026-11-15-evening-round.json`, `migrations/2026-11-15-trackers-replica.json`, `migrations/2026-11-15-chat-figma-round.json`, `migrations/2026-11-14-designmd-3-0-1.json`, `migrations/2026-11-14-chat-lane-downloads.json`, `migrations/2026-11-14-ux-answers.json`, `migrations/2026-11-14-full-assessment.json`, `migrations/2026-11-14-figma-round.json`, `migrations/2026-11-12-figma-round.json`, `migrations/2026-11-11-figma-round-chat.json`, `migrations/2026-11-11-template-contracts-recheck.json`, `migrations/2026-11-11-button-padding.json`, `migrations/2026-11-05-buttons.json`, `migrations/2026-11-08-navigation-cards.json`, `migrations/2026-11-08b-buttons-cards.json`, `migrations/2026-11-09-patterns-templates.json`, `migrations/2026-11-09b-button-sizes.json`, `migrations/2026-11-09c-light-previews.json`, `migrations/2026-11-09d-chips.json`, `migrations/2026-11-09e-review.json`, `migrations/2026-11-10-buttons-navigation-cards-market.json`, `migrations/2026-11-11-template-contracts.json`. For iOS and Android conversion, start with `CHANGES-2026-11-08.md`.

## 17 November 2026, late afternoon (Nusuk AI chat 2.8.1 to 2.8.4; the DL as a Claude plugin) · tokens 3.10 unchanged, DESIGN.md 3.3.1

**Figma read:** [💬 Chat UI](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR/?node-id=2402-18252) at 14:59, 15:07 and 15:30.

- **User question row (2.8.1):** the Nusuk mark beside the echoed question is 12 × 14 with no eyes (`Bot` `eyes: false`); user bubbles are 9 shorter.
- **Bubble padding (2.8.2, 2.8.3):** 20 / 18 / 26 / 18; the Voice, Days and Slots answers, Passport Attach and Location Guide keep 20 at the bottom, as Figma draws them.
- **Password (2.8.2, 2.8.3):** the criteria sit under the 62 field as DL Checkbox SM, 8 apart, without full stops.
- **Component notes (2.8.4):** the PasswordField and Message cards are rebuilt from the code's registry and describe the 2.8.2 layout; nothing renders differently.
- **One bubble per answered question (M9C):** once a question is answered, its bubble is dismissed and the answer is one user bubble carrying the question as its header row, with "Edit answer". Pass the question as `question` on the answer.
- **The DL as a Claude plugin:** sync [https://github.com/ByMoha/NusukDL](https://github.com/ByMoha/NusukDL) once in Organization settings › Plugins & skills › Sync from GitHub; the `nusuk-dl` plugin carries the seven Nusuk skills (design language, visual system with its artworks, content writer, voice rules, UX, DX, feature handoff), and each release raises its version.
- **Downloads:** the design system tab offers the three packages only (everything, developers, designers); the skill zip inside them also carries the content guide and the voice rules.
- **Install steps (17:30):** every install step gives the full link; Claude Code takes it as it is: `/plugin marketplace add https://github.com/ByMoha/NusukDL`, then `/plugin install nusuk-dl@nusuk-dl`. Google Drive keeps only the newest copy of each download.
- **Open:** F88–F90; questions Q-D38 (the master's bottom padding) and Q-D39 (three or five password criteria).

## 17 November 2026, afternoon (Status Handlers and Rating & CSAT) · tokens 3.10 unchanged

**Figma read:** [‼️ Status Handlers](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o) (Bottom Sheet, General Bottom Sheet, Bottom Sheet BG, NoticeBar, Alerts, Empty Status, Reason Selection, Section Error) and [⭐️ Rating & CSAT](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl) (Rating Bar, `_Star`, Ratings, Product Review Card, Total Review Card, Customer Feedback Bottom Sheet).

- **StatusSheet, visual change:** Headline 1 title, Body 2 Light description, Primary MD over Ghost MD each as wide as its label (were two full-width LR buttons), Overlay/Soft. New slots and `template` for 15 General Bottom Sheet types.
- **RatingBar, visual change:** solid stars in Longing on Pearl, half stars from the reading start, Ratings Box, Mini and Standard, a star input with 48 targets.
- **Changed:** NoticeBar (`action`, `onClose`, description, `hug`), EmptyState (List card, `secondary`, Headline 1 on the page), Alert (`stacked`), BottomSheet (`topAction`, `overlay`), CustomerFeedback (`scale="stars"`).
- **New:** SectionError, ReasonSelection, ReviewCard, ReviewSummary; 13 icons.
- **Downloads:** three packages (developers, designers, everything) on Google Drive and GitHub ([ByMoha/NusukDL](https://github.com/ByMoha/NusukDL), team access); the skill zip holds fewer than 200 files.
- **Templates and patterns:** the pattern table's "Used by" column is generated from the contracts (three stale space ids fixed).
- **Chat lane:** NusukChat 2.8.0 on DL 3.10 merged: SelCard is the DL Select Card (breaking: no `radio`), chip padding from the chip tokens, the AI Tab Bar on Glass BG. The skill gains §10 and `reference/chat/components.md`.
- **Known issues F76–F87;** questions Q-D33 to Q-D37. Still open: the design system page's own `tokens.css` (change log).

## 17 November 2026 (Glass BG as Figma builds it; brand guidelines, November edition) · tokens 3.10

**Figma read:** [⚙️ Foundation › Glass BG](https://www.figma.com/design/avzbRTP9CgpbbO8NgU5Ymo?node-id=65346-1296) and its instances in 🧭 Navigation, 🎹 Tabs, 🃏 Cards, 🕹️ Buttons, 🏠 Landing Experience V2, 🔎 Menu & Search. **Brand:** guidelines Ver 1.0, November edition.

- **Glass, visual change:** every floating control is redrawn from Glass BG's layers, and each keeps only the layers its Figma instance shows (`control`, `field`, `bar`, `flat`, `card`). The menu's white halos are gone.
- **New:** `GlassBG` (12 variants, layer switches); `glass={false}` / `data-glass="off"` for Android's Glass=Off.
- **Tokens 3.10:** `shadow-os`, `glass-rim`, `glass-rim-dark`, `blur-frost`, `gradient` group. CSS blur is half the Figma radius (fixed: 3 / 5 / 1 px).
- **Brand:** `04-brand.md` and DESIGN.md M7 follow the November edition, with the new Art direction chapter; 65 pages in the design system's assets.
- **Known issues F66–F75, BR1–BR3;** questions Q-D29, Q-D30.
- **iOS and Android:** specs in the change log and DESIGN.md › M8 › Glass BG.

## 16 November 2026, evening (CSAT and NPS) · tokens 3.9 unchanged

**Figma file read:** [⭐️ Rating & CSAT](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl).

- **FeedbackEmojis** rebuilt on Smiles: Quran-palette circles, fade on pick, level name under the pick (visual breaking change).
- **New:** `NpsScale` and `CustomerFeedback` (CSAT, optional NPS, reasons, comments, actions).
- **Known issues F56–F65:** reversed step chip, wrong Satisfied state, English placeholders, 1–10 NPS, raw colour, «راضي» spelling, NPS Survey naming, unwired booleans, radius, unpublished set.
- **iOS and Android:** specs in the change log.

## 16 November 2026 (bottom bar, inputs, select card) · tokens 3.9 unchanged

**Figma files read:** [🧭 Navigation](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw), [⌨️ Inputs](https://www.figma.com/design/DATayAnynnSQqdJQLAi7DR), [📻 Selections & Switches](https://www.figma.com/design/zhcTb4a0XbF3YeYF9XI6zw).

- **FileUploader** rebuilt to Figma's 8 variants with `status` (error, disabled); solid line, icon buttons, Arabic defaults.
- **SelectCard** radius 14, white Active with the OS shadow, Disabled at full opacity, title 14 / description 16 (Q-D02 closed).
- **TabBar `actions`:** `text`, `terms` and `side`. **Toolbar `process`:** new `_Progress Bar` look.
- **Icon:** `upload-04`. **Known issues:** F17 closed, F47 closed for Navigation, F52–F55 new.
- **iOS and Android:** specs in the change log.

## 15 November 2026, evening (DL Manager's update of nine files) · tokens 3.9

**Figma files read:** [🧭 Navigation](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw), [📻 Selections & Switches](https://www.figma.com/design/zhcTb4a0XbF3YeYF9XI6zw), [⬇️ Dropdown list](https://www.figma.com/design/wLDgE56pPpJnaZ3eZOjHco), [🎹 Tabs](https://www.figma.com/design/t4vGzLmqSgIwWuQPrsRyFY), [🍟 Chips](https://www.figma.com/design/VVGHy0fAHuPqL6dhBD5Ai6), [🃏 Cards](https://www.figma.com/design/mg7egvNbr2ciMP04Ig2XDl), [🕹️ Buttons](https://www.figma.com/design/AXEkdklBHSQDssRmOFMTve), [🏖️ Travel](https://www.figma.com/design/ozi4A2gUbVXbzbUJ3MF4uU), [📅 Date & Time](https://www.figma.com/design/A7Jna80Khqc6WMQicRfLwU).

- **Tokens 3.9:** chip side padding 8 / 10 / 12 / 14 (icon side 6 / 8 / 10 / 12).
- **Components:** HeaderTabs (white selection), DayTab, TimeSlot, PrayCard, InfoTile, QRCodeStatus rebuilt to Figma; Toolbar `Secondary Pages / Full Search`; BottomNav `inner-pages`; OptionCard `simple-list`, `lr-icon` (new meaning), `2-actions-on`; MediaCard `outOfStock` and `type: 'ad'`; 8 icons (151). Migration: `migrations/2026-11-15-evening-round.json`.
- **Closed in Figma:** N4, N7, N12, N18, N22, B5, B11, B13, B17, B18, CH4; N5 and N15 partly.
- **Publish:** 🧭 Navigation and 🏖️ Travel still have unpublished edits (F47). ADS needs an ad label (F46).
- **iOS and Android:** chip padding, HeaderTabs selection, Date & Time and QR specs in the change log.

## 15 November 2026, morning (publish pass) · tokens 3.8 unchanged

**Figma files read:** every file in the DL folder, in Manage libraries (Updates on all pages, and This file).

- **Every DL library is published and every file has accepted its updates.** It took five rounds: publishing 🕹️ Buttons, ⚙️ Foundation and 👩🏻‍💻 Avatar refreshed instances in almost every other library. No component, variable or style was edited.
- **Library dependencies:** `library-dependencies.json` and *Library files* › How the libraries depend on each other give the publish order and the loops to go round. Migration: `migrations/2026-11-15-publish-pass.json`.
- **Known issue F45** is closed except for three assets Figma will not publish and four files that are not libraries.
- **iOS and Android:** no value changed; re-read any screen you measured before this pass.

## 14–15 November 2026, night (trackers rebuilt as replicas, DESIGN.md 3.1) · tokens 3.8 unchanged

**Figma files read:** every DL file after the library publish; rebuilt from [🔦 Tracker](https://www.figma.com/design/nj7L8ks27djv1LmxZYFTM8/?node-id=2402-18252) and [‼️ Status Handlers](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o/?node-id=68392-32017); fixed in [🎨 Icons](https://www.figma.com/design/DXi3uVvGMTEdaM7vb2x6Gg).

- **VerticalStepper and Steps** are exact replicas of 🔦 Tracker (267 measured checks against Figma pass). VerticalStepper gains `step`; its chips default to Pending; Current has no rail, as in Figma. Steps uses 18 / 32 spacing, fading lines and a one-time breathing glow.
- **Alert** follows Figma: Primary is neutral, the message is Light in Ink, Primary + Ghost SM buttons, optional icon and Close. `checkmark-circle-02` is the outline glyph; the solid one is `checkmark-circle-02-solid`.
- **🎨 Icons** no longer depends on Hugeicons Pro or on any style from outside Foundation (eight variants, one label and one layout grid fixed in Figma). Publish Icons, then remove the library.
- **Nusuk AI chat lane: NusukChat 2.7.0** (the chat team's Figma round, 15 November): English labels with `NusukChat.setLang('en')`, suggestions as DL Button MD with `buttons: true`, FlightsSelection and SingleChoose follow Figma, and F32 is partly closed. Migration: `migrations/2026-11-15-chat-figma-round.json`.
- **Known issues F33–F45**, including what is still unpublished (F45).
- **iOS and Android:** follow the new tracker and Alert specs in the change log; no token changed.

## 14 November 2026, afternoon, later (DESIGN.md 3.0.1) · tokens 3.8 unchanged

**Figma file read:** [💬 Chat UI](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR/?node-id=2402-18252).

- **DESIGN.md 3.0.1:** M9 and M9C give the same chat counts (41 exports, 23 variants of 7 DL components, 14 new) and M9C lists SingleChoose; the chat code reports NusukChat 2.6.6 (it said 2.5.0).
- **Project:** `claude/template-contracts.md` is the current text again (it was the text of 11 November, morning, before the fidelity correction of three contracts).
- **iOS and Android:** no value changed.

## 14 November 2026, afternoon (chat lane links, complete downloads) · tokens 3.8 unchanged

**Figma files read:** [💬 Chat UI](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR/?node-id=2402-18252), [⌨️ Inputs](https://www.figma.com/design/DATayAnynnSQqdJQLAi7DR), [📻 Switches](https://www.figma.com/design/zhcTb4a0XbF3YeYF9XI6zw), [🃏 Cards](https://www.figma.com/design/mg7egvNbr2ciMP04Ig2XDl), [🏖️ Travel](https://www.figma.com/design/ozi4A2gUbVXbzbUJ3MF4uU).

- **Chat lane:** every Chat UI component is in it; Fld, SelCard, LogosGroup and FlightTicketFull link their own library files; MobileField follows the Figma rename; 12 proposed `chat-type-*` aliases replace type variables the DL's tokens.css does not have (F31); the chat gallery runs on tokens 3.8.
- **Downloads:** every DL file is downloadable at its current version, checked at each release; new: the chat lane, the logos, the starter page and the download index (SHA-256). The coded package's previews, README and start page are rebuilt every release.
- **Questions sheet:** content questions are off for now (Q-D05, AI5, R8, F11, the Arabic copy tab). Known issues F31, F32.
- **iOS and Android:** no value changed; re-read the chat links in `chat/manifest.proposed.json`.

## 14 November 2026, morning, later (Arabic copy, DL health) · tokens 3.8 unchanged

**Figma files read:** [🃏 Cards](https://www.figma.com/design/mg7egvNbr2ciMP04Ig2XDl), [🔦 Tracker](https://www.figma.com/design/nj7L8ks27djv1LmxZYFTM8), [💬 Chat UI](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR), [🏖️ Travel](https://www.figma.com/design/ozi4A2gUbVXbzbUJ3MF4uU), [🛍️ Market](https://www.figma.com/design/5X9RDeo33hZFEhtjVUYr5c), [🧭 Navigation](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw), [🛎️ Notifications](https://www.figma.com/design/WAFzcSl4nXiU0nYqNrMYx1), [🧩 Templates](https://www.figma.com/design/fIjmiUpwy5UE9KJ9aXfhrn).

- **[DL health](https://claude.ai/artifact/ANTJvsayyQ8md1qK32vAL8):** Figma, tokens and code agree on 3,524 values in 8 checks; 16 colour pairs fail WCAG today and the proposed colours fix 14; 61 sets in 14 files wait to be published; open questions read live from the sheet.
- **Arabic copy** tab on the [questions sheet](https://claude.ai/artifact/X98C7uwN3N2KQ4e6GuL8Ah#sheet-sht_7ts5pqkfnf.0): 97 strings for the content owner, 78 to change (statuses, order steps, counted nouns with their six plural forms, sample copy). Known issue F30.
- **StatusChip** `order-delivered` reads «تم التوصيل» as in Figma (the code drew a raw `%s`). Strings the DL wrote follow the writing guide.
- **iOS:** String Catalog plural variations; **Android:** `<plurals>` with all six Arabic quantities.

## 14 November 2026, morning (UX answers) · tokens 3.8

**Figma files:** [💬 Chat UI](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR) (fixed by the DL team, not published), [⚙️ Foundation](https://www.figma.com/design/avzbRTP9CgpbbO8NgU5Ymo), [⌨️ Inputs](https://www.figma.com/design/DATayAnynnSQqdJQLAi7DR), [📻 Switches](https://www.figma.com/design/zhcTb4a0XbF3YeYF9XI6zw), [🔦 Tracker](https://www.figma.com/design/nj7L8ks27djv1LmxZYFTM8).

- **UX's answers** to the iOS review and the Android audit are in DESIGN.md (M11, decisions DL-36 to DL-41, trade-off TR-05) and in the handoff (NH20 to NH26). Open points went to the design team: input radius (Q-D15), Android scale (Q-D16), Latin font (Q-D17), text size on iOS (Q-D18), gold alerts in dark (Q-D19), thick border (Q-D20).
- **Layout modes** are data: `modes` in `tokens.json` and `NusukLayout` in the native files (iOS: phone and tablet).
- **Effects:** all 16 Foundation effect styles are in M8, Noise and Treatment included; `glass-full`'s inner shadow is 2%, as in Figma (was 3%).
- **Avatar** initials shrink to fit.
- **⚙️ Foundation in Figma:** code syntax on all 192 Colors, Layout and Effects variables (Dev Mode shows the DL names) and a 🧪 Proposals page for the contrast meeting (not published).
- **💬 Chat UI:** variables outside the DL rebound to Foundation, `Style=Passport`, the decorative ✈️ left the Booking_Ticket master title (the Train variant still overrides it).
- [Developer questions page](https://claude.ai/artifact/9KcxfMFYRKP3wwrn8n2NaS): Q-X01 to Q-X27 with UX's answers; answers save and send.
- Machine-readable: `migrations/2026-11-14-ux-answers.json`.

## 14 November 2026, later (full assessment) · tokens 3.7 unchanged

**Figma files:** [📻 Switches](https://www.figma.com/design/zhcTb4a0XbF3YeYF9XI6zw), [⬇️ Dropdown list](https://www.figma.com/design/wLDgE56pPpJnaZ3eZOjHco), [🧭 Navigation](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw), [🔦 Tracker](https://www.figma.com/design/nj7L8ks27djv1LmxZYFTM8), [🏖️ Travel](https://www.figma.com/design/ozi4A2gUbVXbzbUJ3MF4uU), [🎫 Widgets](https://www.figma.com/design/VMlLoRqMJLSCKW2Fl2THrS).

- **Switch, Checkbox, Radio, SelectCard:** chosen gold, errors solid red, disabled Pearl, MD switch 42 wide; `size` on all three.
- **DropdownItem:** the row is the radio or checkbox, with a Longing check when chosen; gap 18, details Light, avatar 42.
- **Sheets:** corners 42 / 54 and `glass-full`; DirectionSheet sides 26.
- **Steps** and **StartJourney** rebuilt from Figma; **AvatarGroup** gains the Travel presets.
- Icons: 142. Known issues F16–F25. Questions for the design and development teams, with reply columns: the [questions list](https://claude.ai/artifact/X98C7uwN3N2KQ4e6GuL8Ah) (Q-D01 to Q-D13, Q-X01 to Q-X16 and every open known issue).
- Machine-readable: `migrations/2026-11-14-full-assessment.json`.

## 14 November 2026 (Figma round) · DESIGN.md 3.0 · tokens 3.7

**Figma files:** every DL file; in depth [⚙️ Foundation](https://www.figma.com/design/avzbRTP9CgpbbO8NgU5Ymo), [🕹️ Buttons](https://www.figma.com/design/AXEkdklBHSQDssRmOFMTve), [🧭 Navigation](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw), [⌨️ Inputs](https://www.figma.com/design/DATayAnynnSQqdJQLAi7DR), [🍟 Chips](https://www.figma.com/design/VVGHy0fAHuPqL6dhBD5Ai6), [🃏 Cards](https://www.figma.com/design/mg7egvNbr2ciMP04Ig2XDl).

- **Tokens 3.7:** `button-fate-surface` red at 10%; `button-secondary-surface-on-dark` Slate at 70%; new `glass-android`.
- **Button:** `icon="both"`, `price`, `mark`, `glass`; every colour combination composes from the tokens.
- **BottomNav:** the Tab Bar home bars (Landing, Travel, Content, Market); gold current tab; 95 high.
- **Toolbar:** `Primary Pages / Title`, `Primary Pages / URLs`. **TextField:** `multi-select`, `avatar`. **StatusChip:** `approved`. **HintWidget:** `logo`.
- **DESIGN.md 3.0:** critique protocol, writing house rules, field conditions, feedback timing, painting language; DL-32 to DL-34.
- Library updates accepted in 17 files; what is left and what to publish: known issues F13 and the change log.
- Machine-readable: `migrations/2026-11-14-figma-round.json`.

## 12 November 2026 (Figma fixes)

**Figma files edited:** 💬 Chat UI, 🏖️ Travel, 🔦 Tracker (not published yet). 🧭 Navigation edited and reverted.

- Chat UI fields are radius 18 everywhere; variant names, flight copy and Single Choose topics fixed.
- Seperator: `Selected` Off / On. Steps: `OrderShipped`, `OutForDelivery`, `Delivered`.
- No token, component or native value changed.

## 12 November 2026 (Figma round) · DESIGN.md 2.9

**Figma files:** [⚙️ Foundation](https://www.figma.com/design/avzbRTP9CgpbbO8NgU5Ymo), [⌨️ Inputs](https://www.figma.com/design/DATayAnynnSQqdJQLAi7DR), [🧭 Navigation](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw), [🏖️ Travel](https://www.figma.com/design/ozi4A2gUbVXbzbUJ3MF4uU), [🔦 Tracker](https://www.figma.com/design/nj7L8ks27djv1LmxZYFTM8), [💬 Chat UI](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR). Read only.

- **Inputs:** fields are radius 18 with `shadow-xs`; search and counter are capsules. Was 14 yesterday.
- **Toolbar:** new type `booking` (Figma `Almatar`).
- **VerticalStepper:** matches Figma: gold points, ash rail, white step cards.
- **Chat:** new `SingleChoose`; `FlightsSelection` follows its new Figma node.
- **Foundation:** seven colour names lost their underscore; no value changed. Tokens stay 3.6.
- Machine-readable: `migrations/2026-11-12-figma-round.json`. Open items for Figma: known issues R1–R7.

## 12 November 2026 (evening) · Download everything

**Figma file:** none changed (DESIGN.md 2.8.1 and tokens 3.6 unchanged).

- **Skill:** now the one download for everything: rules, DESIGN.md, tokens, every component card, the 20 contracts, patterns, the chat files, iOS and Android tokens, change log, migrations, every design-system section, coded components and the logos, with `GETTING-STARTED.md`.
- **Guide:** *Download everything (.zip)* and a new *Install it in Claude* block with steps, a quick install action, prompts to copy and how to update.
- **Values:** no token or component value changed; a check found 0 differences between the guide, the chat copy and the design system.

## 12 November 2026 (later) · Patterns and templates in every download

**Figma file:** [✨ Templates-Patterns](https://www.figma.com/design/fIjmiUpwy5UE9KJ9aXfhrn) (no change).

- **Skill:** the current templates-and-patterns method, the full text of all 20 contracts and the chat files are now inside it.
- **Coded package:** now carries the 20 contracts, the patterns index and the chat files.
- **Guide:** a new *Patterns and templates (.zip)* download on the Design system tab.

## 12 November 2026 · Chat rules inside DESIGN.md · DESIGN.md 2.8.1

**Figma file:** [💬 Chat UI](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR) (no change).

- **One file.** The Nusuk AI chat rules moved from `chat/README.md` into **DESIGN.md › M9C**, so DESIGN.md is the only file to read. `chat/` keeps the code and the proposed data.

## 11 November 2026 (close) · Figma round and the Nusuk AI chat · DESIGN.md 2.8 · tokens 3.6

**Figma files:** [⌨️ Inputs](https://www.figma.com/design/DATayAnynnSQqdJQLAi7DR), [🍟 Chips](https://www.figma.com/design/VVGHy0fAHuPqL6dhBD5Ai6), [📻 Switches, Checkbox and Radio](https://www.figma.com/design/zhcTb4a0XbF3YeYF9XI6zw), [⚙️ Foundation](https://www.figma.com/design/avzbRTP9CgpbbO8NgU5Ymo), [🎨 Icons](https://www.figma.com/design/DXi3uVvGMTEdaM7vb2x6Gg), [💬 Chat UI](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR), [🏖️ Travel](https://www.figma.com/design/ozi4A2gUbVXbzbUJ3MF4uU), [🃏 Cards](https://www.figma.com/design/mg7egvNbr2ciMP04Ig2XDl).

- **Figma round.** Every DL library file was re-read. Inputs moved to radius 14 (Radius/S) and Hint gained a Success type; both are now in code. 15 files have edits that are not published yet and 5 sets were removed from 🏖️ Travel and 💬 Chat UI, including Step Card, the source of the coded StepCard (*Known issues* FR1–FR7).
- **Tokens 3.6.** 45 size tokens from the component files that define them: `chip-*` from 🍟 Chips and `control-*` from 📻 Switches, Checkbox and Radio; plus `opacity-none`, `border-none` and `glass-bottom` from Foundation. Native files regenerated.
- **Icons.** 18 added: the 17 chat icons, which are already DL icons in 🎨 Icons, and `clapping-02`.
- **Nusuk AI chat.** Merged as a Proposed lane in `chat/` (DL-30). Each of its 40 components names its Figma source and whether that set is published; 9 are ready for the DL Manager now. 11 values that were proposed now use DL tokens, and 31 stay proposed as `chat-*`. Five values in 💬 Chat UI come from variable collections outside the DL and must be rebound (AI1).
- **Migration:** `migrations/2026-11-11-figma-round-chat.json`.

## 11 November 2026 (end of day) · Handoff in the iOS report format · DESIGN.md 2.7.2 (unchanged)

**Figma files:** none changed. Compared against [Foundation](https://www.figma.com/design/avzbRTP9CgpbbO8NgU5Ymo) and [Buttons](https://www.figma.com/design/AXEkdklBHSQDssRmOFMTve).

- **iOS and Android handoff.** Rebuilt on the eight sections of the iOS team's status report, with the iOS status of 11 November and an Android column in every table. The earlier units, names, themes, type and pull-request checks follow as Reference sections. The guide's iOS and Android tab shows the new page, in English and Arabic.
- **Deviations.** NH01 to NH12, one ID space with the iOS team. Two need a decision before the iOS library merges: NH01 (button LR 54 and XS 26 on iOS, 48 and 30 in Figma on phones) and NH06 (radius 12 for fields, select cards and day tabs; chips as capsules).
- **Found on the DL side.** `tokens.json` leaves out Opacity/None, Border/None, Glass/Bottom and the Motion collection, which Figma has and iOS read correctly. Listed in the handoff until the token file carries them.
- **Not changed.** Figma, tokens 3.5, DESIGN.md, components.

## 11 November 2026 (later at night) · Template contract fidelity correction · DESIGN.md 2.7.2

**Figma file:** none. No Figma file changed.

- **Three contracts corrected.** Service landing, Catalogue list and Item details are rebuilt from their original 10 Nov Figma build-script documentation, mechanically, the same way as the other 17 — the prior hand-paraphrased text had silently dropped real content, including two trust findings (manufactured urgency, a fake countdown and discount) that are now restored to the "In the flow today" record, even though both are already excluded from the template itself.
- **Space ids corrected.** `service-landing`: `commitment-state` → `notification-slot`, `featured` → `hero-row`, `categories` → `category-grid`. `catalogue-list` regained its `card-action` space.
- **Cross-references fixed.** `templates/index.json` and `patterns/index.json` updated to the corrected space ids; one stale pattern cross-reference removed (`cards-list` no longer claims `service-landing › item-rows`).
- **Not changed.** Tokens 3.5, components, the other 17 template contracts, DESIGN.md's own text.

## 11 November 2026 (night) · NavTab correction · DESIGN.md 2.7.1

**Figma file:** [Navigation](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw) › Buttom Navigation › Tab (Current=On).

- **NavTab.** The current tab is a capsule (Figma radius 54 on a 54-high tab). DESIGN.md › M9 and the coded `NavTab` said 18; both now follow Figma. The guide's bottom navigation follows too.
- **Not changed.** Tokens 3.5, other components.

## 11 November 2026 (evening) · Native handoff · DESIGN.md 2.7 · tokens 3.5 (unchanged)

**Figma file:** none. No Figma file changed.

- **Token files for iOS and Android.** `native/NusukTokens.swift` and `native/NusukTokens.kt` hold every colour in the six themes and every space, size, radius, border, blur, opacity and type token; `native/tokens-native.json` maps each token to both symbols. The release pipeline generates them from `tokens.json` and checks their structure. They are not compiled here.
- **Change log.** Every entry now has an iOS and an Android section: the constants, the code shape, and the platform behaviour to plan for.
- **Docs.** New page *iOS and Android handoff*: units, the naming rule, themes, type, what is not generated, and the checks for every pull request.
- **Guide.** New layout on DL components: a transparent Toolbar with its controls on glass; the floating Bottom Navigation with five destinations (Hello as the round Nusuk button, then Guide, Practice, Library, Log); Header Tabs for the views inside Practice (2) and Library (4); cards on Glass/Full without hairlines; one type style per role; tap padding to 48 on every control. New *iOS and Android* tab under Library: the downloads, the latest release for each platform, a token lookup and the handoff page. Old links still open their views.
- **Guide, measured.** Text runs off the type scale: 266 before, 0 after. White cards with a hairline: 350 before, 2 after (an input and a swatch, kept on purpose). Phone controls under their target: 196 before, 0 after. Text contrast: 3,892 runs, 0 failures in light and dark. The coded Button still matches Figma in 96 of 96 combinations.
- **DESIGN.md 2.7.** M11 › Native token files, DL-29, and the release rule in M13.
- **Open.** Symbol names and the Kotlin package are proposed. On Android, `minimumInteractiveComponentSize()` reserves layout space, which differs from the tap-padding rule: to be decided by the Android lead and the DL Manager.
- **Not changed.** Tokens 3.5, components, patterns, template contracts.

## 11 November 2026 (later) · Button padding · DESIGN.md 2.6 · tokens 3.5

**Figma file:** [Buttons](https://www.figma.com/design/AXEkdklBHSQDssRmOFMTve).

- **Tokens.** `button-padding-*` 28 / 22 / 18 / 14 (was 32 / 30 / 22 / 16) and `button-padding-icon-*` 24 / 20 / 16 / 12 (was 26 / 24 / 20 / 14), LR / MD / SM / XS. Source: Buttons › `Buttons Setup` › `Glob Whitespace` and `Icon-Side Whitespace`; all 320 CTA variants checked.
- **Button.** Icon-only and loading buttons use the icon-side padding on both sides, destructive or not (widths 74 / 66 / 56 / 42). The separate destructive rule is removed. The coded button was checked in 96 combinations of kind, size, icon and destructive: no mismatch.
- **Not changed.** Heights, gaps, icon sizes, colours, the Button props, the template contracts of this morning.
- Migration: `migrations/2026-11-11-button-padding.json`. Sheet: `CHANGES-2026-11-11.md`.

## 11 November 2026 · Template contracts · DESIGN.md 2.5

- **Templates.** 20 kinds of screen have a contract in `templates/contracts/`, indexed in `templates/index.json`: service landing, catalogue list, item details, cart, payment, request tracking, requests list, search in a service, help and support, address selection, cancellation, add-on task, cost breakdown sheet, media viewer, date and time (day and period; day and exact slot), booking details (single; package), pass sheet, pass viewer. All are drafts for review.
- **Documentation.** *Template contracts* holds the full text of every contract as a readable page, generated from the files; *Templates and patterns* explains how to use them.
- **Names.** Templates are named for the job, not the product. Fourteen ids changed (table in the change log); the service a template was read from is now its example.
- **Patterns.** `patterns/index.json` lists the twelve coded patterns with the spaces that accept them.
- **DESIGN.md 2.5.** New module M9T (how to pick and use a contract, the eight rules, the no-fit exit), DL-27 and DL-28, five new golden prompts.
- **Figma.** ✨ Templates-Patterns › ✨ Templates holds one blueprint per contract. Fourteen of the blueprints still carry the wording of their example in the guide text; the contract files are the neutral version (TC0).
- **Known issues.** Sixteen flow defects found while writing the contracts are logged as TC1–TC16.
- **Not changed.** Tokens 3.4, components, coded patterns, page models. The release audit (DL-22) was not re-run: no rendered preview changed.

## 10 November 2026 (later) · Brand guidelines edition of 8 November, Surface and Log tabs · DESIGN.md 2.4

- **Brand.** The guidelines now hold the illustration system and iconography in one document. Brand documentation, DESIGN.md › M7 and the guide's Brand tab are updated: the Companion's position, its three-beat loop and the hats-and-permissions matrix; four imagery types and two image treatments; illustration colour states, five formats and how a new illustration is made; icon construction and treatments. The 18 brand pages already shown are unchanged in the new edition; 19 pages are added and the earlier illustration pages are replaced.
- **Guide.** New Surface tab: the Surface Allocation Board as a playground (levels with samples, the DNA matrix, mindsets, the atlas of nine journeys and 123 steps, service coverage), then the model as written and the 53-service catalogue. New Log tab: the change log by date. Tabs renamed: Hello, Guide, Practice, Log.
- **Skill.** One file now carries DESIGN.md, the learnings, the records, the coded components and the Figma scripts.

## 10 November 2026 · Button padding, Navigation, Cards, new Market library · DESIGN.md 2.3

Read from Figma on 10 November: 🕹️ Buttons, 🧭 Navigation, 🃏 Cards, ⚙️ Foundation (unchanged) and the new 🛍️ Market library. `tokens.json` is 3.4: no value changed, the meaning of `button-padding-icon-*` widened.

**Changed in code**

| What | Before | After |
|---|---|---|
| Button, icon-side padding | Destructive buttons only | Every filled button with a left or right icon: icon side 26 / 24 / 20 / 14, other side 32 / 30 / 22 / 16 (DL-24). 48 of 48 measured combinations match Figma |
| Toolbar | 16 types × Status × Light | 20 Figma types × Darkmode (DL-25). Landings show a greeting, wallet and notifications; new Landings / Search and Primary Pages / Tabs. Old names still work; `market-landing`, `market-category` and `status` are deprecated |
| Bottom navigation | Tab Bar only | New `BottomNav` (Landing, Journey, Content, Marketplace, Search; sizes NR, SM, XS), `NavTab` and `Nudge` |
| Cards | Request 12 · Option 9 · Media 18 | Request 11 (`sim` deprecated) · Option 10 (Product) · Media 20 coded of 21 (Marketplace / List, Grid, out of stock) · new `AddToCartCTA` (6 states) and `PriceOptions` |
| Icons | 94 | 101: user-circle, nusuk, route-02, airplane-02, live-streaming-02, notification-01, arrow-left-01 |

**New library: 🛍️ Market.** 17 public sets (product page, cart items, categories, gifting, eSIM, order and shipment tracking). Documented in the inventory, the library list and DESIGN.md › M9 › Market with sizes and four rules (stock messages, the "trusted" badge, motion, worship products). Not coded in this release (MK8, DL-26).

**Proof.** 262 of 292 preview renders are pixel-identical to the last release. The 30 that changed are Button, Category Chips, Member Card and List Side by Side (icon buttons are 6 narrower on the icon side), and the Toolbar, Request, Option and Media Card previews (new content). Four new previews add 16 renders.

**Measured.** 356 controls: 317 at 48 or more, 23 at 44 in the top bar (allowed), 9 at 44 to 47.9 elsewhere, 7 between 24 and 44 (the four from the last release, the scaled Nudge, and two search labels counted by the tool), none under 24. 366 interactive elements in the accessibility tree, none without a name. Text contrast, 962 runs per theme: gold light 88.0%, green light 89.9%, lavender light 89.8%, gold dark 96.9%, green dark 96.0%, lavender dark 96.0%. The failures are the same token values as on 9 November.

**New known issues.** Buttons B17–B19; Navigation N14–N23 (two bottom bars with no stated owner, a trial font in a published library, a scaled Nudge with 8.4 px text, an icon bound to a deleted variable, no Darkmode on the bottom navigation); Cards K9–K13; Market MK1–MK8.

**Library updates accepted in Figma (10 November).** Each update was tried on a copy and applied only when no text, swap or override was lost. Travel 72 updated, 30 left · Date & Time 34, 6 · Navigation 36, 0 · Media 28, 25 · Notifications 22, 0 · Payment 19, 0 · Inputs 16, 1 · Rating 10, 6 · Cards none pending. Total 237 updated, 68 left alone (Chips 15, Toolbar 12, Headers 12, Dropdown item 10, DL Header 5, others 14). Counted but not yet updated: Tracker 13, Modals 10, Dropdown 4. Not yet checked: 20 files. None of the files is published by this pass: publishing stays with the DL Manager.

**Still open on the design system page (DS1).** One save on the page rebuilds `tokens.css`, the API cards and `manifest.json`.

## 9 November 2026 (late night) · DL review: accessibility fixes in code · DESIGN.md 2.2

A review of the DL as it stands tonight: every preview rendered and measured in the six themes, and the code checked against ⚙️ Foundation, 🕹️ Buttons, 🍟 Chips, 🃏 Cards, 🧭 Navigation, 📅 Date & Time and 🏖️ Travel. `tokens.json` is 3.3: it gains `scale-44` (Foundation › `Scale/44`, the step `Buttons/MD` has used since this morning) and `shadow-avatar` (the Media Card author avatar's shadow: the stylesheet used it but this file never defined it, so the page drew no shadow). No value changed; Foundation is otherwise in sync.

**Fixed in code**

| What | Before | After |
|---|---|---|
| Targets, 296 controls | 89 met the 48 / 44 rule; 27 were under 24 | 293 meet it, none under 24. Three fall short at 46, 45 and 33 (Trade-off Register) |
| Names, 306 controls (browser accessibility tree) | 7 had no name; labelled text fields read their placeholder; 64 names were English or file names (`arrow-right-01`) | None without a name; a field reads its label and hint; names are Arabic, English with `lang="en"`. Nine English ones left are sample text (`Button Text`) |
| Focus ring | `surface-longing`: 1.87:1 on white in gold light, 2.0:1 in green dark | Ink: 18:1 or more; white on Ink fills, dark glass and on-dark buttons |
| Text and icons on Ink in dark themes | Floating cart bar, Ink avatar and the toolbar account circle were white on white | `surface-01-white`, which inverts (C3) |
| Member Card swipe | Tiles on the left in both directions | Trailing side: left in Arabic, right in English |
| Previews | No language declared | `lang="ar"` |

**How.** Tap padding is a transparent layer on each control (`::after`, sized by `--hit`: 48, and 44 inside `.nk-tb` and the Featured Header bar); it changes no layout and no pixel. `TextField` wires `aria-labelledby` and `aria-describedby`; `Switch`, `Checkbox`, `Radio` and `DropdownItem` take `ariaLabel`; `Toolbar` takes `backLabel`, `leadLabel`, `trailLabel`, `actionLabels` and `cartLabel`; `NusukDL.strings` holds the built-in names and `NusukDL.setLang('en')` switches them. Horizontal rows (`.nk-row`, toolbar categories, glass tabs) no longer scroll vertically. One default label changed: the action field's "Verify" is "تحقق". Migration: `migrations/2026-11-09e-review.json`.

**Proof that nothing else moved.** 271 of 288 preview renders (72 previews in gold light, gold dark, green dark and gold light left-to-right) are pixel-identical before and after. The 17 that changed are the fixes: the focus example, dark-theme avatars and cart bars, the mirrored swipe and the action label.

**Measured** (DESIGN.md › M10 › Measured baseline). Text contrast passes for 87.4% of text runs in gold light, 89.4% in green light, 89.2% in lavender light, 97.1% in gold dark and 95.9% in green dark and lavender dark (902 runs per theme). The light-theme failures are token values in Figma, not code: status text on soft fills (74 runs), gold accent text (12), status text on white (10), white on solid and gold fills (13), the count badge (4) and the green CTA (1). In dark themes the Primary CTA label is still invisible (C7). *Known issues › Fix first* orders the ten changes that matter and gives the values.

**Figma tonight.** Foundation matches the tokens. Cards and Chips are current. Travel has 85 of 246 library instances behind and 19 components with unpublished edits; Date & Time 40 of 74 and 17; Navigation 24 of 276, and Toolbar has unpublished edits (L10). CH1 is down to nine chips; CH2, CH3, CH5, B5 and B10 are open. New: C9–C14, B16, K8, L10–L13, DS1–DS4.

**Docs.** DESIGN.md is 2.2. It stayed at 2.1 through the three earlier releases today; from now the release that changes it bumps it (M13). Decisions DL-17 to DL-23 are recorded, the Trade-off Register has its first four entries, M11 has the tap-padding table for iOS and Android, and Known issues opens with *Fix first*.

**Still to do on the design system page (DS1).** One save on the page, so it rebuilds `tokens.css`, the API cards and `manifest.json`; they still describe the system as it was before 8 November.

## 9 November 2026 (night) · Chips

Read from 🍟 Chips on 9 November 2026. The sizes now come from one variable collection, `_Chips Setup`, with a mode per size.

| Size | Height | Text | Padding (icon side) | Gap | Icon |
|---|---|---|---|---|---|
| XS | 16 → **18** | 8 → **10** | 10 → **12 (10)** | 2 → **4** | 10 → **12** |
| SM | 18 → **20** | 10 → **12** | 12 → **14 (12)** | 4 | 12 → **14** |
| MD | 20 → **24** | 12 | 14 (12) | 6 → **4** | 16 → **14** |
| LR | 24 → **28** | 12 → **14** | 16 (12) → **16 (14)** | 6 | 16 |

**Cards (🃏 Cards has accepted the update).** Every chip there is XS: request status (46), request tags and city, media *اختيارات نسك* and spec tags, member meta, hint and quote widget chips. In code they all read the Chip XS values now instead of their own 16 px copies (`.nk-chip.st`, `.nk-rq .hdr .nk-chip.sm`, `.mc-sel`, `.mc-chip`, `.nk-mcard .meta`). Effect: chip rows are 2 taller. Request cards keep Figma's heights except Hajj (185, Figma 183: CH2); Member Card +2 per card; the Rawdah templates +6 in total.

**Elsewhere, code is ahead of Figma.** 🧭 Navigation, 📅 Date & Time and 🏖️ Travel still show the old chips until they accept the update (CH4): the toolbar timer and close chips, the search chip (LR 28), the Nusuk AI beta chip (MD 24), the day-tab "today" chip and step-card tags (XS 18) are already the new sizes in code.

**Code:** Chip sizes are CSS variables on `.nk-chip` (`--chip-h`, `--chip-pad`, `--chip-pad-icon`, `--chip-gap`, `--chip-fs`, `--chip-icon`); the label is wrapped in `.lbl` with Figma's 2 bottom padding; the icon side takes the smaller padding. The hint link chip gets a 48 target. RequestCard's upcoming tag is `size="xs"`. Migration: `migrations/2026-11-09d-chips.json`.

**Text size (K2):** card chips moved from 8 to 10 px; still below the 12 px minimum. SM would meet it at 20 high.

**Figma issues found:** CH1 (chips set to SM or MD in Cards render XS), CH2 (Hajj Side Info fixed at 16), CH3 (Highlight Special fixed at 16), CH4 (files not yet updated), CH5 (`Highet`, `Souce`, `Font Size` scope, no code syntax).

## 9 November 2026 (evening) · Lighter previews

Why the design system page lagged, measured by loading all 72 previews at once (Chromium, traced):

- **The Nusuk AI shimmer looped forever.** Four shimmers in the Tab Bar preview repainted text every frame: about 0.8 s of paint and compositing in every 4 s while that card was on screen, doing nothing. It now plays once (3 s) and rests: about 0.03 s per 4 s after it ends. This is also a rule now (M8: no resting loops; M10: motion that starts by itself stops within 5 s, WCAG 2.2.2).
- **51 glass layers in one card.** The Toolbar preview drew all 24 toolbars, each with frosted glass controls (`backdrop-filter`). It now shows four groups (Top level 6, Inner 8, Search & tools 6, On media 4), one at a time: 13 glass layers on screen instead of 51, and about a fifth of the compositing work while it scrolls. Glass layers across all previews: 123 → 85.
- **Not changed:** each card is its own page with its own React and `bundle.js`; that is how the design system page shows cards. Minifying `bundle.js` was tested and dropped: 73% of it is text (icons, labels, sample content), so it shrank only 11% (229 → 204 KB).

Code: `HeaderTabs` (and the glass tabs in `Toolbar`) gain `onChange(index)`. `.nk-aibtn .nudge` animation `3s linear infinite` → `3s linear 1`. Migration: `migrations/2026-11-09c-light-previews.json`.

## 9 November 2026 (afternoon) · Button sizes

Read from ⚙️ Foundation › Layout and 🕹️ Buttons on 9 November 2026. `tokens.json` 3.2.

| Token | Before | Phone and Tablet | Wide | Figma |
|---|---|---|---|---|
| `button-height-lr` | 54 | **48** | 54 | `Buttons/LR` → `Scale/48` (Wide `Scale/54`) |
| `button-height-md` | 48 | **44** | 48 | `Buttons/MD` → `Scale/44` (Wide `Scale/48`) |
| `button-height-sm` | 38 | 38 | 38 | `Buttons/SM` → `Scale/38` |
| `button-height-xs` | 26 | **30** | 26 | `Buttons/XS` → `Scale/30` (Wide `Scale/26`) |

Padding, gaps, icon sizes and icon-only widths (90 / 86 / 68 / 50) are unchanged; only heights moved.

**What follows `Buttons/MD` (now 44):** the toolbar row and every glass control in it: `_Icon Block` (44 high, each icon button 44 × 38, a single block 44 × 44), `_Search-bar`, `_DatePicker` and the landing logo block. In code these now read `--button-height-md`, so a one-row toolbar is 4 + 44 + 32 = 80 under the status bar (142 with it).

**Not following:** `_Nusuk AI` stays 42 (not bound, N10). Tab Bar parts that are not CTAs (floating cart, habit pill and stepper, 48) are unchanged.

**Figma issues found:** N9 (Toolbar variants fixed at 146 / 84, so a 4 px gap appears under the row), N10 (`_Nusuk AI` not bound), N11 (three Tab Bar CTAs keep 54 / 48 through overrides), N12 (six Navigation layers still bound to deleted `Buttons/*` colours).

**Library updates pending:** Cards and Landing Experience V2 still show the old CTA sizes (XS 26, MD 48) until they accept the Buttons update. Code already uses the new sizes, so section titles with an arrow are 4 taller and request cards 4 to 8 taller (Upcoming Requests 12) than those files show today.

**Accessibility:** MD (44), SM (38) and XS (30) CTAs keep a 48 target with invisible padding; the toolbar's 44 controls use the top-bar exception (OR-04).

## 9 November 2026 · Patterns, templates, placement, DESIGN.md v2.1

Read from 🃏 Cards › Partials and 🏠 Landing Experience V2 › CMS on 9 November 2026. `tokens.json` stays at 3.1 (no token changes).

### Patterns (new in code)

| Figma | Code |
|---|---|
| Categories, Categories (chips), Cards Slider, 2 × 2 video grid, Playlist, List Side by Side, Leaderboard, Guide (Default, Variant2), Services Box, Bento Grid, Cards List | Categories, CategoryChips, CardsSlider (`layout`), PlaylistRow, ListSideBySide, Leaderboard, Guide (`variant`), ServicesBox, BentoGrid, CardsList |
| Rawdah Landing › Toolbar and Quick Actions | FeaturedHeader, UpcomingRequests |
| Section Title (02, 03 Collaps), Option Card_Master, Product Category, Faces, Playlist, Hints Widget | SectionTitle, CategoryTile, ProductTile, FaceTile, PlaylistCard, HintWidget |

Each pattern is a CMS section: `{ pattern, title, tag | actionLabel, items }`. Eleven icons were added from Figma (`customer-service-01`, `dua`, `golf-cart`, `haji`, `id`, `kaaba-01`, `madinah-city`, `play`, `quote-up`, `quran-01`, `sujood`); `play` replaces the old stand-in in SoundPlayer.

### Templates (new)

`NusukDL.Page({ template })` renders `rawdah-landing` (Rawdah Landing short, 402 × 3718) and `rawdah-landing-full` (all sections, 402 × 6299). The JSON is `templates/rawdah-landing.json` and `NusukDL.templates`. Images are placeholders; photos and portraits are content.

### DESIGN.md v2

`DESIGN.md` is one file everywhere: the root plus 15 modules and two appendices. The 8 November documentation (button metrics, colours, states, destructive padding, Glass BG recipe, Toolbar, TabBar, cards, statuses, icons, native mapping) now lives in M8, M9 and M11; pattern logic and composition rules in M9P; rulings in M12.

### Figma issues logged

PT1–PT9 in Known issues (unlabelled Featured Actions CTA, Guide dots, a 32% inner line, Linear Burn on the Headers CTA, Quote Widget title style, hidden selection chip, label layer names, 82 gap before the tab bar).

### Surface allocation (new in DESIGN.md › M9S)

The Surface Allocation Board (Round 2) is the placement model: P0–P5, L1–L4, service DNA, render bands 1–6 (never inverted), interrupt tiers T0–T3, desire states and mindsets, with Appendix A (53 services) and Appendix B (9 journeys, 123 steps). Render bands replace the earlier "intent before desire" rule. Template sections now carry `band`, `placement`, `dna` and, where needed, `states`, `withheld`, `suppress` (typed as `PageSection` in `index.d.ts`). Both Rawdah templates invert bands in Figma (PT9); production pages follow the band order in M9P. M9P adds the pattern contract and thirteen patterns to come.

### The skill

`nusuk-design-language.zip` (one folder: `SKILL.md`, the full `DESIGN.md`, `reference/` with tokens, props and templates) installs in any Claude account through Customize › Skills. Download it from the onboarding guide's Design system tab or the coded package. It is rebuilt with every release.

### Developer checklist

1. Decode `templates/rawdah-landing.json`; one native view per `pattern` (M11, *Building patterns natively*).
2. Build the six building blocks first (SectionTitle, CategoryTile, ProductTile, FaceTile, PlaylistCard, HintWidget), then the twelve patterns.
3. Store Hint ticks per person; never autoplay playlists or video.
4. Add the eleven icons to the asset catalogue / drawables.
5. Read `band`, `placement`, `withheld`, `states` and `suppress` on every section: drop withheld sections for the person's mindset and `sacred` ones inside sacred windows; keep P5 (support, credentials) two taps away and offline.

## 8 November 2026 (afternoon) · Buttons, Cards

Re-read from Figma at 17:20. `tokens.json` is now version 3.1 (5 tokens added, none changed or removed).

### Foundation

Glass BG and every variable, style and component were re-read and match the morning read: nothing to change in code. The full Glass BG recipe for native code is in `CHANGES-2026-11-08.md`.

### Buttons

| Figma | Code before | Code now |
|---|---|---|
| New `Buttons Colors` mode **Green**, used by `_Button Trail` Style=Green Default and Green Ghost (exposed in every CTA) | — | `tone="green"` with `button-green-surface`, `-content`, `-secondary-surface`, `-secondary-content`, `-ghost-content`. Fails contrast (B12) |
| Destructive + Icon=Right pads the icon side with `Icon-Side Whitespace` | 32 / 30 / 22 / 16 | 26 / 24 / 20 / 14 at the end |
| Destructive Icon Only and Loading pad both sides with `Icon-Side Whitespace` | 32 / 30 / 22 / 16, widths 90 / 86 / 68 / 50 | 26 / 24 / 20 / 14, widths 78 / 74 / 64 / 46 |
| Ghost + Fate label is underlined | Not underlined | Underlined |

Figma issues logged: B13 (Ghost + Fate + Icon right is 24px tall), B14 (Green only through the nested Trail), B15 (hidden Price, Pay, Nafath, Absher layers).

### Cards

| Figma | Code now |
|---|---|
| Avatars in Request Cards have a white inside ring (1.5px at 24, 1.4px at 38) | Ring added |
| Marketplace order avatars: Ivory `+2`, then two pictures | Preset updated |
| `_Card Avatar` has a shadow (−6, 6, blur 30, spread −12, Ink 5%) | Member card avatar shadow updated (K6) |
| Electric Cart tag icon is Umrah; SIM tag icon is `smart-phone-04`; Marketplace footer icon is `package-moving` | Presets updated (K7) |

Statuses (46), Option Cards (9) and Member Card layout are unchanged.

### Developer checklist

1. Pull `tokens.json` 3.1 and add the five `button-green-*` tokens.
2. Button: add `tone`, underline destructive Ghost, and use icon-side padding for destructive right, icon-only and loading buttons.
3. Cards: add the avatar ring and shadow; update the three preset icons.
4. In Figma, publish 🕹️ Buttons and 🃏 Cards so screens pick up these changes.

## 8 November 2026 · Foundation, Buttons, Navigation, Cards

Read from Figma on 8 November 2026. `tokens.json` is now version 3.

### Foundation

1. **Hero is 48px.** `Font-Size/Display/Hero` → `Scale/48`; `hero-light` and `hero-regular` are 48px (were 64). Known issue T3 is closed.
2. **Glass BG has 7 variants** (Current × Navigation [On, Off, Primary Action] × Dark; `Current=On, Navigation=Off` was removed). Code draws it with the new `Glass` part. Navigation=Primary Action is a flat `Surface/10 Ink` fill, which is why Primary buttons need no glass in CSS.
3. Colours, layout, motion and effects are unchanged.

### Buttons

Variables are unchanged since 5 November. Code now matches every CTA variant:

| Figma | Code before | Code now |
|---|---|---|
| Ghost Fate label has no underline | Underlined | No underline (reversed in the afternoon: Figma underlines it) |
| Loading: icon-only button, icon 26 / 26 / 24 / 18, full opacity (Ghost 40%) | 18px spinner, 40% opacity | Spinner at the icon-only size; Primary and Secondary at 100%, Ghost at 40% |
| Focused looks the same as Default | Ring only with `state="focused"` | Ring also on `:focus-visible` (kept for WCAG 2.4.7; see B10) |

Special CTA (store and wallet badges) stays Figma only: use the official artwork.

### Navigation

| Component | What changed |
|---|---|
| Toolbar | Rebuilt for all 16 Figma types × Light. Transparent bar with glass controls (`IconBlock`, `SearchBar`, glass tabs, date pill, wallet). Optional `statusBar` for mockups. New props: `type`, `status`, `light`, `tabs`, `categories`, `wallet`, `progress`… The old `type: 'primary' \| 'inner' \| 'close'` and `dark` still work |
| TabBar | Rebuilt: home tab bar (4 tabs with the Nusuk icons and Nusuk AI) plus every action bar: actions, action & input, loading, filters, content share, habits, floating cart, with price, cart, floating profile, empty. `type` takes the Figma Active name |
| Pagination | All items `icons-gray` at full opacity, gap 8 (4 vertical), new `size="sm"` (3px) and `progress` (Figma Filled) |
| ProgressRing | Matches Progress: Pearl track, Illumination arc, optional `title` and `subtitle` |
| HeaderTabs | `background={false}` is the glass version from the toolbar |
| New | `DirectionSheet`, `HomeItem`, `IconBlock`, `SearchBar`, `StatusBar`, `HomeIndicator`, `Glass` |

Removed from Figma: Toolbar types Home, Quran Header and Marketplace; the Toolbar "Search and Info?" property. `Status Bar` is now private.

### Cards

| Component | What changed |
|---|---|
| MemberCard | Rebuilt: Full (with badge, meta line, CTA), compact, disabled, actionable (more menu), swiped (delete and favourite tiles), selectable |
| RequestCard | Rebuilt on `_Request Card Master`: all 12 types as presets (`type="umrah"`…), Empty State, notice. Old props `reference`, `subtitle`, `rows` are replaced |
| OptionCard | Rebuilt: all 9 types, including LR Icon, Icon Top, Counter and Requirement Item |
| StatusChip | All 46 Request Card statuses with their Figma colour and icon (16px chip) |
| MediaCard | Now sourced from 🃏 Cards; the set moved from Landing Experience V2 unchanged |

In Figma: 20 CTA instances in 🃏 Cards were updated to the latest Buttons, with overrides and icons kept, and the change is in the file's Change Log.

### Corrected across the system

- **Icons:** 83 Hugeicons and Nusuk icons are exported from Figma and used by name (`arrow-right-01`, `store-03`, `tick-double-02`…). Short names (`search`, `close`, `calendar`, `plus`…) now map to the real icons.
- **Avatar:** sizes 24 / 42 / 56 / 72 / 100 and Negative = white, Positive = Ivory, as in Figma. `px` sets a resized instance (38 in toolbars and cards).
- **Chip:** heights 16 / 18 / 20 / 24 with Figma padding and text sizes.

### Developer checklist

1. Pull `tokens.json` v3 (Hero 48).
2. Replace `Toolbar`, `TabBar`, `MemberCard`, `RequestCard`, `OptionCard`, `StatusChip`, `Avatar`, `AvatarGroup`, `Chip`, `Pagination` and `ProgressRing` with the new versions, and check screens that pass `RequestCard rows` or `Avatar size="md"` (now 56).
3. Known issues to handle are N1–N8 and K1–K5 in Known issues.

## 5 November 2026 · Buttons

### What changed

1. **Buttons have their own colour tokens, in two modes.** 🕹️ Buttons (`AXEkdklBHSQDssRmOFMTve`) publishes the local collection `Buttons Colors`:
   - **Light mode**: standard buttons on light surfaces (Ink primary).
   - **Dark mode**: white buttons for photos, video and Ink surfaces (Figma `Light=On`).
   In code: base tokens for Light, `-on-dark` tokens for Dark, and the `onDark` prop on Button.
2. **Button sizes come from `Buttons Setup`** (modes XS / SM / MD / LR): side padding, icon-side padding, gap, icon and icon-only sizes. Heights still come from Foundation › Layout `Buttons/XS–LR`.
3. **Foundation no longer holds the 18 `Buttons/*` colour variables.** Delete every `--buttons-*` variable in code and replace it using the table below.

There are two independent settings. **Theme** (light or dark, from Foundation) is set with `data-theme`. **Button mode** (Light or Dark, from `Buttons Colors`) is set with `onDark`. Test every combination.

### Button colour tokens

Light themes are identical across gold, green and lavender. Dark-theme values are gold-dark unless noted.

| Code token | Figma `Buttons Colors` variable | Button mode | Light themes | Dark themes |
|---|---|---|---|---|
| `button-primary-surface` | Default Surface → `Surface/10 Ink` | Light | #070808 | #FFFFFF |
| `button-primary-content` | Default Content → `Text/Inverse` | Light | #FFFFFF | #FFFFFF ⚠ C7 |
| `button-secondary-surface` | Secondary Surface → `Surface/02 Ivory` at 70% | Light | #F5F5F5B3 | #111315B3 |
| `button-secondary-content` | Secondary Content → `Text/Heading` | Light | #070808 | #FFFFFF |
| `button-ghost-surface` | Ghost Surface (0%) | Light | transparent | transparent |
| `button-ghost-content` | Ghost Content → `Text/Heading` | Light | #070808 | #FFFFFF |
| `button-fate-surface` | Fate Surface → `Alerts/Surface/Error` | Light | #FFF2F1 | #992720 |
| `button-fate-content` | Fate Content → `Alerts/Text/Error` | Light | #FF4136 ⚠ C8 | #FEF3F2 |
| `button-primary-surface-on-dark` | Default Surface → `Surface/01 White` | Dark | #FFFFFF | #111315 (green, lavender #070808) |
| `button-primary-content-on-dark` | Default Content → `Text/Heading` | Dark | #070808 | #FFFFFF |
| `button-secondary-surface-on-dark` | Secondary Surface → `Surface/07 Slate` | Dark | #303336 | #CBCCCD ⚠ B7 |
| `button-secondary-content-on-dark` | Secondary Content → `Text/Inverse` | Dark | #FFFFFF | #FFFFFF |
| `button-ghost-content-on-dark` | Ghost Content → `Text/Inverse` | Dark | #FFFFFF | #FFFFFF |
| `button-fate-surface-on-dark` | Fate Surface → `Alerts/Surface/_Solid Error` | Dark | #FF4136 | #FEF3F2 |
| `button-fate-content-on-dark` | Fate Content → `Alerts/Surface/Error` | Dark | #FFF2F1 ⚠ C8 | #992720 |

### Button size tokens

| Code tokens | XS | SM | MD | LR | Figma |
|---|---|---|---|---|---|
| `button-height-*` | 26 | 38 | 48 | 54 | Foundation `Buttons/XS–LR` via `Buttons Setup/Highet` |
| `button-padding-*` | 16 | 22 | 30 | 32 | `Buttons Setup/Glob Whitespace` |
| `button-padding-icon-*` | 14 | 20 | 24 | 26 | `Buttons Setup/Icon-Side Whitespace` |
| `button-gap-xs`, `button-gap` | 4 | 8 | 8 | 8 | `Buttons Setup/Gap` |
| `button-icon-*` | 16 | 18 | 20 | 20 | `Buttons Setup/Icon` |
| `button-icon-only-*` | 18 | 24 | 26 | 26 | `Buttons Setup/Icon Only` |

At every size, labels use `body-2-regular` (16px) and the radius is a pill. Disabled and loading states show at 40% opacity.

### Removed tokens and replacements

| Removed (Figma `Buttons/…`, CSS `--buttons-…`) | Inside a button | Anywhere else | Same values? |
|---|---|---|---|
| Surface/Primary | `button-primary-surface` | `surface-10-ink` | Yes |
| Text/Primary | `button-primary-content` | `surface-01-white` | Elsewhere yes. In a button no: dark themes are now white (C7) |
| Icons/Primary | `button-primary-content` | `icons-white` | Yes |
| Surface/Reject | `button-secondary-surface` | `surface-02-ivory` | Elsewhere yes. In a button the fill is now 70% |
| Text/Reject | `button-secondary-content` | `text-heading` | Yes |
| Icons/Reject | `button-secondary-content` | `alerts-icons-reject` | Elsewhere yes. In a button the icon now matches the label (#070808 instead of #171A1C) |
| Surface/Error | `button-fate-surface` | `alerts-surface-error` | Yes |
| Text/Error, Icons/Error | `button-fate-content` | `alerts-text-error`, `alerts-icons-error` | Yes |
| Surface, Text, Icons for _Info, _Success, _Warning | none | `alerts-surface-*`, `alerts-text-*`, `alerts-icons-*` | Yes, except `alerts-icons-info` in green-dark: #118CE4 → #E4F1F8 |

### Known issues to handle

| # | Issue | What to do |
|---|---|---|
| C7 | Primary label in dark themes is white on white (1:1). The removed `Buttons/Text/Primary` inverted correctly; `Default Content` points to `Text/Inverse`, which doesn't invert | Blocks dark themes. The fix is in Figma: point `Buttons Colors/Default Content` (Light) to `Surface/01 White`. Don't hard-code a workaround; take the corrected token |
| C8 | Destructive buttons are 3.2:1 in light themes, in both button modes (16px label needs 4.5:1) | Always pair with an icon and a clear verb. Logged for the DL team |
| B7 | Secondary button in Dark mode on dark themes: #FFFFFF on #CBCCCD (1.6:1) | Avoid `secondary` + `onDark` in dark themes until fixed |
| B1 | Secondary and Ghost fills are aliases with opacity | Use the tokens as given (`#…B3`, transparent) |
| B9 | `Buttons Colors` variables have no code syntax, so Figma Dev Mode shows Figma names | Use the code-token column above |

### Developer checklist

1. Pull `tokens.json` (137 colours) and remove every `--buttons-*` variable.
2. Replace usages with the table above: button tokens inside buttons, Foundation tokens everywhere else.
3. Button API: `kind` (primary, secondary, ghost) · `size` (xs, sm, md, lr) · `state` · `icon` (none, left, right, only) · `fate` · `onDark`.
4. Test the 6 themes against both button modes, and check contrast is at least 4.5:1, apart from C7, C8 and B7.
