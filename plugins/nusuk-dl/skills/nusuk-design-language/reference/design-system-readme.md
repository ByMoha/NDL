Nusuk is the faith companion for every Muslim: the app for Hajj, Umrah, Rawdah visits and the daily practice around them. This system is the Nusuk Design Language (DL) as it lives in the Figma library: three colour themes, each in light and dark, one type family, a spacing and radius scale, 90 component cards (99 coded components) that mirror the 31 library files, and the rules that govern them. Use it to make concepts, decks, prototypes and code that look and behave like Nusuk.

**The Figma library is the source of truth.** If anything here differs from the DL Foundation file, Figma wins. Updates are announced on the DL channel on Microsoft Teams.

**Latest (18 November 2026, 11:30: plugin health; DESIGN.md 3.7.2, tokens 3.12).** BottomNav, TabBar and Toolbar have no solid fill: content blurs progressively under them. Glass has its card, five cards match the code's props, and the plugin carries fifteen skills with a *Who wins* table for skills that set their own look.

**Earlier — Latest (18 November 2026, 09:50: review fixes; DESIGN.md 3.7.1, tokens 3.12).** FromTo and DateRange line every row up on its field's edge; Visa User Block is RTL; Price Options Vertical hugs its cart CTA at the start and puts the earlier price before the discount pill; Travel defaults are Arabic. See `13-change-log.md`.

**Earlier — Latest (18 November 2026, 00:30: Golf Carts review learnings; DESIGN.md 3.7.0, tokens 3.12).** Every new task starts with an intake (clarifications, the DX Tracker objectives, an internal benchmark, Mobbin and Dribbble for structure) before the flow is built from DL components (DL-43). Every prototype simulates Apple's transitions and draws the iOS status bar at 02:22 with the battery percentage (DL-44). The Golf Carts review adds prototype-fidelity rules GC-R1 to GC-R18 and known issues F114–F119; OptionCard rows are 60 high and HeaderTabs gains `fill`. See `13-change-log.md`.

**Earlier — Latest (17 November 2026, 22:15: ⚙️ Foundation; DESIGN.md 3.6.1, tokens 3.12).** `Shadow/OS` is a Foundation effect style; `shadow-os` names it, Glass BG's Shadows layer and Select Card use it, and every drop shadow now ships in the native files as `NusukShadow`. The handoff downloads open the file itself; the plugin still opens the Drive folder (23.7 MB, over the upload limit from the release tools). Known issues F112, F113. See `13-change-log.md`.

**Earlier tonight — Latest (17 November 2026, 21:35: 🃏 Cards; DESIGN.md 3.6.0, tokens 3.11).** AddToCartCTA follows the new Add to Cart CTA, built from CTA Secondary XS: cart and arrow 42, the stepper 138 with a `delete-01` remove, remove with a leading basket-remove icon and notify-me with a trailing bell. MediaCard gains the Charity Card (`type: 'charity'`): a progress ring with the remaining and collected amounts and an arrow. Known issues F108–F111. See `13-change-log.md`.

**Earlier tonight — Latest (17 November 2026, night: Header Tabs, Navigation progress, one plugin; DESIGN.md 3.5.0, tokens 3.11).** HeaderTabs is a replica of 🎹 Tabs (track padding 4 / 8 with its fill 2 outside, LR tabs 40, Figma's chosen-tab shadow, `darkmode`, icons, counts and an updates dot), and TimeSlot of 📅 Date & Time (the notch at the start side, 20 markers). TabBar gains Cart with Count and Payment. CircularProgress shows its value and a done disc; the Process bar is 28 high. The DL now reaches Claude as one plugin, `nusuk-dl` (eleven skills and the whole library), and developers get one handoff zip (DL-42). Open: F104–F107.

**Earlier tonight — Latest (17 November 2026, evening: Navigation progress, Misc headers, Cards, Market and Proposed patterns; tokens 3.11, DESIGN.md 3.4.0).** ProgressRing follows `_Form Progress Indicator` (a 7.4 band from 6 o'clock, a start dot, a filled circle with a tick at 100%), the toolbar's Process bar counts steps, and CircularProgress is new (Proposed). SectionTitle is 32 / 18 / 18 with a centred variant and an Actions slot. StatusChip `confirmed-booking`, AddToCartCTA `buy`, PriceOptions discount. The fixes made on this page from the DL Advisor's comments (BottomNav's sliding glass and Haramain icon, the TabBar home types, OptionCard names, TimeSlot, PrayCard, QR art, FlightTicket and seven Travel components, a softer glass rim) are now in every download. Nusuk AI chat 2.8.5 shows one bot per run of Nusuk messages. Open: F91–F103, Q-D40 to Q-D43.

**Earlier today — 17 November 2026, late afternoon: Nusuk AI chat 2.8.1 to 2.8.4, the DL as a Claude plugin; tokens 3.10 unchanged, DESIGN.md 3.3.1).** The chat follows 💬 Chat UI as drawn: the question row's 12 × 14 mark (2.8.1), bubble padding 20 / 18 / 26 / 18 and the password criteria under the field (2.8.2), the Days and Slots answers keep 20 at the bottom (2.8.3), and the component notes match the code (2.8.4). M9C now states that an answered question becomes one bubble. [https://github.com/ByMoha/NusukDL](https://github.com/ByMoha/NusukDL) is also a Claude plugin marketplace: an owner syncs it once in Organization settings › Plugins & skills, and every release reaches members as the `nusuk-dl` plugin, which carries the seven Nusuk skills (design language, visual system, content writer, voice rules, UX, DX, feature handoff). Known issues F88–F90; questions Q-D38 and Q-D39. See `13-change-log.md`.

**Earlier today — 17 November 2026, afternoon: Status Handlers and Rating & CSAT; tokens 3.10 unchanged, DESIGN.md 3.3.** StatusSheet is rebuilt on Figma's Bottom Sheet and General Bottom Sheet: Headline 1 title, Primary MD over Ghost MD, slots for a chip, a Settings Note, extra content and the terms line, and 15 General Bottom Sheet types as `template`. NoticeBar gains its CTA, Close and description; EmptyState its List card; Alert `stacked` (System Update); BottomSheet the Arrow and Static tops. RatingBar is rebuilt (solid stars, half stars, Ratings Box, Mini, Standard, a star input). New: SectionError, ReasonSelection, ReviewCard, ReviewSummary, and CustomerFeedback `scale="stars"`. The skill zip now holds fewer than 200 files, and the downloads are three packages (developers, designers, everything) on Google Drive and GitHub. Known issues F76–F87; questions Q-D33 to Q-D37. See `13-change-log.md`.

**Earlier today — 17 November 2026: Glass BG as Figma builds it, brand guidelines November edition; tokens 3.10.** Every floating control is redrawn from ⚙️ Foundation's Glass BG and keeps only the layers its Figma instance shows (`control`, `field`, `bar`, `flat`, `card`); the white halos on the menu are gone. New `GlassBG` card (12 variants, layer switches) and Glass=Off for Android. The brand pages follow the November edition, with a new Art direction chapter. Known issues F66–F75, BR1–BR3. See `13-change-log.md`.

**Earlier — 16 November 2026, evening: CSAT and NPS; tokens 3.9 unchanged.** FeedbackEmojis is rebuilt on Figma's Smiles (Quran-palette circles, fade on pick); new NpsScale and CustomerFeedback. Known issues F56–F65. See `13-change-log.md`.

**Earlier today — Latest (16 November 2026: bottom bar, inputs, select card; tokens 3.9 unchanged).** FileUploader follows ⌨️ Inputs' 8 variants with `status`; SelectCard is radius 14 with Figma's 14 / 16 type; TabBar `actions` gains `text`, `terms` and `side`; Toolbar `process` uses the new `_Progress Bar`. Icon `upload-04`. See `13-change-log.md`.

**Previous — Latest (15 November 2026, evening: nine files updated by the DL Manager, tokens 3.9).** Chip side padding is 8 / 10 / 12 / 14 (icon side 6 / 8 / 10 / 12). HeaderTabs selects with a white pill; DayTab, TimeSlot, PrayCard, InfoTile and QRCodeStatus follow 📅 Date & Time and 🏖️ Travel; Toolbar gains `Secondary Pages / Full Search`, BottomNav `inner-pages`, OptionCard `simple-list`, `lr-icon` (now without an action) and `2-actions-on`, MediaCard `outOfStock` and `type: 'ad'`; 151 icons. 🧭 Navigation and 🏖️ Travel still have unpublished edits (F47). Migration: `migrations/2026-11-15-evening-round.json`.

**Earlier (15 November 2026, morning: publish pass).** Every DL library is published and every file has accepted its updates; `library-dependencies.json` maps which file uses which and the order to publish in. Before it, 14–15 November, night: VerticalStepper and Steps rebuilt as replicas of 🔦 Tracker, Alert follows ‼️ Status Handlers, 🎨 Icons free of outside styles, NusukChat 2.7.0. Tokens 3.8 unchanged.

**Earlier (14 November 2026, afternoon, later: DESIGN.md 3.0.1).** M9 and M9C give the same chat counts (41 exports, 23 variants of 7 DL components, 14 new), M9C lists SingleChoose, and the chat code reports NusukChat 2.6.6 (it said 2.5.0). No token or component value changed.

**Earlier (14 November 2026, afternoon: chat lane links, complete downloads).** Every component on the [💬 Chat UI](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR/?node-id=2402-18252) page is in the chat lane (7 sets, 54 variants, 3 masters). Four chat components now link their own library files (⌨️ Inputs, 📻 Switches, 🃏 Cards, 🏖️ Travel) and MobileField follows its Figma rename. The chat lane no longer depends on an old tokens.css for its type (12 proposed `chat-type-*` aliases, F31), and the chat gallery runs on tokens 3.8. Every DL file is downloadable from the guide at its current version, and each release checks it: new are the chat lane, the logos, the starter page and a download index with SHA-256 checksums; the coded package's previews, README and start page, which dated from 8 and 9 November, are rebuilt every release. Content questions are off the [questions sheet](https://claude.ai/artifact/X98C7uwN3N2KQ4e6GuL8Ah) for now.

**Earlier (14 November 2026, morning: UX answers, tokens 3.8).** UX's answers to the iOS review and the Android audit are folded in: every theme ships with Quranic Illumination as the default, iOS takes Phone and Tablet values (now data: `NusukLayout`), Light and Regular only, Hero keeps both weights, avatar initials shrink to fit. All 16 Foundation effect styles are documented, Noise and Treatment included, and `glass-full` matches Figma again (inner shadow 2%). Eight questions went to the design team (Q-D14 to Q-D21), six of them where UX's answers and Figma disagree. [DL health](https://claude.ai/artifact/ANTJvsayyQ8md1qK32vAL8) shows parity, contrast, unpublished sets and open questions on one page. 💬 Chat UI was cleaned in Figma (not published). Developers answer on the [developer questions page](https://claude.ai/artifact/9KcxfMFYRKP3wwrn8n2NaS).

**Earlier (14 November 2026, later: full assessment).** Every changed set was read again against the code. Selection controls follow 📻 Switches (gold when chosen, solid red errors, Pearl when disabled, a `size` prop); list rows (DropdownItem) are the control and show a Longing check; sheets have corners 42 / 54 and glass; Steps and StartJourney are rebuilt from 🔦 Tracker and 🎫 Widgets; AvatarGroup has the Travel presets. 142 icons. Known issues F16–F25; the [questions list](https://claude.ai/artifact/X98C7uwN3N2KQ4e6GuL8Ah) holds what the design and development teams need to answer, with a reply column for each. Every file now downloads from one place in the guide.

**Latest (14 November 2026, Figma round): DESIGN.md 3.0, tokens 3.7.** Every DL file was read again after the major update. Buttons now reach every case of the Figma master (both icons, price, Apple Pay, Nafath, Absher, glass, and the colour combinations the variants leave out); the destructive fill is red at 10% and Secondary on dark is Slate at 70%. The bottom navigation follows Navigation › Tab Bar (95 high, gold current tab, new tab sets); the Toolbar has 22 types; fields gain Multi Select and Avatar; StatusChip has Approved; HintWidget has a logo card. New token `glass-android`. DESIGN.md adds a critique protocol (S0–S4, E0–E4), writing house rules, field conditions and feedback timing. Open Figma items and the publish list: known issues F1–F15.

**Earlier (12 November 2026, Figma round): DESIGN.md 2.9.** Fields are radius 18 with a soft shadow and search is a capsule (⌨️ Inputs); the Toolbar has a `booking` type (Figma `Almatar`); VerticalStepper matches 🔦 Tracker; the chat has `SingleChoose`. Seven Foundation colour names lost their underscore; no token value changed (3.6). Open Figma items: known issues R1–R7. Later the same day, fixes in Figma (Chat UI, Travel, Tracker; Navigation reverted on request), not published yet.

**Earlier (12 November 2026): DESIGN.md 2.8.1.** The Nusuk AI chat rules are now inside DESIGN.md as module M9C; there is no second file to read.

**Earlier (11 November 2026, close): Figma round and the Nusuk AI chat, DESIGN.md 2.8, tokens 3.6.** Every DL library file was re-read. Inputs are radius 14, Hint has a Success type, 45 size tokens come in from 🍟 Chips and 📻 Switches, Checkbox and Radio, and 17 chat icons join the Icon set. The Nusuk AI chat joins as a Proposed lane in `chat/`, with each value traced to its DL file. See *Known issues › Figma round and Nusuk AI chat*.

**Earlier (11 November 2026, end of day): iOS and Android handoff in the iOS report format.** *iOS and Android handoff* now follows the iOS team's status report section for section, with the iOS status, an Android column, and deviations NH01 to NH12. No value changed.

**Correction (11 November 2026, later at night): DESIGN.md 2.7.2.** Three template contracts — Service landing, Catalogue list, Item details — had been hand-paraphrased from their original documentation instead of mechanically extracted like the other 17, losing real content in the process. Rebuilt from the originals; no token, component or other contract changed.

**Correction (11 November 2026, night): DESIGN.md 2.7.1.** The current Bottom Navigation tab is a capsule, as in Figma (radius 54), not 18.

**Latest release (11 November 2026, evening): iOS and Android handoff, DESIGN.md 2.7.** The tokens now ship as code for both platforms (`native/NusukTokens.swift`, `native/NusukTokens.kt`), every change-log entry has an iOS and an Android section and links its Figma file, and *iOS and Android handoff* explains units, names and the checks for a pull request. The guide has a new layout on DL components and an *iOS and Android* tab with a token lookup. No value changed.

**Earlier on 11 November 2026 (later): button padding, DESIGN.md 2.6, tokens 3.5.** Buttons are narrower: side padding is 28 / 22 / 18 / 14 and icon-side padding 24 / 20 / 16 / 12 (LR / MD / SM / XS). Icon-only and loading buttons use the icon-side padding on both sides. Heights, gaps and icons did not change. See *Change log* and `migrations/2026-11-11-button-padding.json`.

**Earlier on 11 November 2026: template contracts, DESIGN.md 2.5.** Twenty kinds of screen now have a contract: spaces in a fixed order, what is allowed and forbidden in each, states and rules, named for the job and not for a product. They live in `templates/contracts/` with an index, mirror the blueprints in Figma ✨ Templates, and are all drafts for review. Read *Templates and patterns* and DESIGN.md › M9T. No token or component changed.

*Previous (10 November 2026): button padding, Navigation, Cards and the new 🛍️ Market library, DESIGN.md 2.3.** Icon-side padding now applies to every filled button with an icon. Toolbar has 20 types and Darkmode. New: the floating bottom navigation (`BottomNav`, `NavTab`, `Nudge`), `AddToCartCTA`, `PriceOptions`, Option Card Product and the Marketplace media cards. 🛍️ Market (17 sets) is documented and not coded yet. See Release notes and `CHANGES-2026-11-10.md`.

*Previous (9 November 2026, late night): DL review, DESIGN.md 2.2.* Every preview was measured in the six themes. Fixed in code: tap padding on every control (293 of 296 now meet the 48 / 44 target rule, from 89), names for every control with Arabic defaults and labels wired to their fields, an Ink focus ring in place of the gold one (1.87:1), inverting text on Ink in dark themes, and a Member Card swipe that follows the reading direction. Not fixable in code: the light themes pass text contrast for 87–89% of text because of token values in Figma. *Known issues › Fix first* lists the ten changes that matter, in order.

*Earlier on 9 November 2026:* chip sizes (XS 18 · SM 20 · MD 24 · LR 28), lighter previews and the no-resting-loops rule, button sizes (LR 48 · MD 44 · SM 38 · XS 30), and patterns, templates, placement, DESIGN.md v2.1. Twelve layout patterns from 🃏 Cards and 🏠 Landing Experience V2 are coded as CMS sections, with six building blocks, `Page` and two Rawdah landing templates. `DESIGN.md` is one file holding the rules, the 8 November documentation, every component's logic and the surface allocation model (placement, DNA, render bands, tiers, mindsets) with all 53 services and 123 journey steps.

*Previous (8 November 2026): Foundation, Buttons, Navigation, Cards.* Hero is 48px. Toolbar and TabBar are rebuilt for every Figma variant (glass controls, Light version, all bottom bars); Member, Request and Option cards and all 46 statuses are rebuilt from 🃏 Cards; icons are the real Hugeicons; Avatar and Chip sizes match Figma. Afternoon update: Green buttons (`tone="green"`), destructive icon-side padding, underlined destructive Ghost, card avatar ring and shadow. Developers: read Release notes and `CHANGES-2026-11-08.md`.

*Previous (5 November 2026): Buttons.* Button colours moved to 🕹️ Buttons › `Buttons Colors` (Light and Dark modes).

## Five rules before anything else

1. **DL first.** Search the library before drawing anything. In code and decks, use the `NusukDL` components and tokens here.
2. **Never detach.** Reset overrides, swap the variant, re-insert, or ask.
3. **Content only.** Change words, icons from the DL set and images. Never colour, type, radius, shadow, stroke or inner padding.
4. **Never edit the library.** Only the DL Manager (Sara) and the DL Advisor (Mohamed Auf) change DL.
5. **Ask, don't improvise.** Need something new? Build it locally with DL tokens, label it *Proposed*, and submit it (see *Governance and contribution*).

## Content fundamentals

- **Arabic first, in 35 languages.** Design and QA every screen in Arabic and English; the other 33 languages get automated checks for expansion, truncation and RTL. Layouts mirror in Arabic, Urdu, Persian, Pashto and Kurdish.
- **Digits are always 0–9.** Dates, prices, times and phone numbers use Western digits in every language, never ٠١٢٣, never mixed. Isolate numbers in RTL text.
- **Sentence case everywhere.** "Book your visit", not "Book Your Visit".
- **Name the outcome on a button.** "Book your visit", "Keep booking", "Cancel booking". Never "OK", "Submit", "Click here", or a bare Cancel/Confirm pair.
- **Speak person to person, about their situation.** "Booking couldn't load", not "Verification failed 403". Open an error with one line of empathy, then guide.
- **Faith-led or logistical, never both in one block.** Blessings and ayat belong in faith-led messages only; a blessing on a receipt or an error reads as deflection.
- **Madhab-neutral, always.** Quote and cite; never adjudicate a ruling. Frame a mustahab act as an invitation, not "you should". One ayah or one hadith per short piece.
- **Names and protocol.** Makkah, Madinah, Quran, Manasik, Duaa (never Mecca, Medina, Koran). ﷺ after the Prophet's name, in full. نسك without diacritics. In Arabic, write أرسلنا or أُرسلت, never تم.
- **Tone:** clear and warm (واضح وودود), courteous (مهذب ومرحّب), formal enough to be credible, reassuring (مطمئن), faithful in its natural places (إيماني). Never preachy, harsh, over-promising, partial or stiff.

## Colour

- **Apply semantic tokens, never raw hex.** The theme decides the colour. Text on light surfaces uses `text-heading`, `text-content`, `text-subtle` and `text-note`; on dark or solid fills `text-inverse`.
- **Three themes, one set of names.** Quranic Illumination (gold, `gold-light` / `gold-dark`) is the default. Dome of the Prophet (green) and Court Fabrics (lavender) swap only the accent family: `text-link`, `surface-illumination`, `surface-longing`, `surface-shade-1` to `surface-shade-6`, `icons-illumination`, `icons-longing`, `icons-background`, `alerts-surface-gold`, `alerts-text-gold`. Everything else is shared.
- **Screens:** the page is `surface-screen-bk`; cards, sheets, inputs and bars are `surface-01-white`; quiet fills are `surface-02-ivory`; hairlines are `surface-03-pearl`; grabbers and the switch track are `surface-04-mist`.
- **Buttons** have their own tokens from 🕹️ Buttons › `Buttons Colors`: `button-primary-surface` (Ink) with `button-primary-content`, `button-secondary-surface` (Ivory at 70%) with `button-secondary-content`, `button-ghost-content`, and the destructive `button-fate-surface` / `button-fate-content`. Each has an `-on-dark` twin for buttons on photos and ink. Other ink fills (selected day, checkbox, user chat bubble) use `surface-10-ink` with `surface-01-white`.
- **Status** comes in matched sets: `alerts-surface-*`, `alerts-text-*` and `alerts-icons-*` for info, success, warning, error and default. Always pair status colour with an icon or a word.
- **Selected and current** use the accent: `surface-longing` for the 1.5px border (`border-medium`) and `surface-shade-6` for the fill.
- **Quran screens only** use the fixed `quran-*` palette; it does not change with the theme.
- **Brand colours** (`brand-quranic-illumination` #EAB355, `brand-kiswah-reverence`, `brand-dome-of-prophet`, `brand-serene-light`, plus six secondaries) are for brand expression: decks, campaigns, illustration and covers. Gold leads, white breathes, black anchors, green accents. In product UI use the semantic tokens.
- **Known contrast limits, kept exact from the source:** `text-link` in gold light is 2.5:1 on white (2.2:1 on the screen background), the status text tokens are 2.5–3.2:1 on their soft fills, and white text on a gold or solid status fill is 2.5–3.6:1. Use them for 24px+ text, icons, or beside a label that carries the meaning; set long body text in `text-content`.
- **Dark themes:** `text-inverse` and `alerts-text-white` stay white in dark. On fills that invert (`surface-10-ink`, solid alerts) use `surface-01-white` or `alerts-icons-white`, which do invert. Exception kept exact from Figma: `button-primary-content` stays white in dark (known issue C7).

## Typography

- **One family:** IBM Plex Sans Arabic for Arabic and Latin (`--font-sans`). The English mode in Figma uses Ping AR + LT (`--font-english`), a licensed face; where it is not installed the stack falls back to IBM Plex Sans.
- **Pick a style, never a size.** Hero 48 · Display 1 32 · Display 2 28 · Headline 1 24 · Headline 2 20 · Body 1 18 · Body 2 16 · Notes 1 14 · Notes 2 12, each in Light (300) and Regular (400), line height 1.28. Classes: `.hero-light` … `.notes-2-regular`.
- **Light is for display;** Regular for everything 20px and below. The brand allows SemiBold; the DL library does not ship it, so do not introduce it in product UI.
- **If text doesn't fit, shorten the copy.** Never shrink the style for long Arabic or English.

## Spacing, size and layout

- **Space:** `space-xxs` 4 · `space-xs` 8 · `space-sm` 12 · `space-nr` 18 · `space-md` 20 · `space-lr` 26 · `space-xl` 32 · `space-xxl` 48 on phones; Tablet and Wide step up (12→16, 18→20, 26→32, 32→48, 48→64). Phone gutters and card padding are `space-nr`.
- **Targets:** every interactive element is at least 48px on phones; top-bar icon buttons may be 44px; nothing under 24px. CTAs come in `button-height-lr` 48, `-md` 44, `-sm` 38, `-xs` 30 on phones and tablets (Wide 54 / 48 / 38 / 26); MD, SM and XS get invisible padding to 48, and the toolbar's 44 glass controls use the top-bar exception (XS only inside cards and rows, with spacing around it). The padding is built into every coded control (buttons, selection controls, steppers, tabs, icon buttons); the per-control amounts for iOS and Android are in *DESIGN.md › M11 › Tap padding*.
- **Chips:** XS 18 · SM 20 · MD 24 · LR 28 (text 10 / 12 / 12 / 14), from 🍟 Chips › `_Chips Setup` (9 November 2026). Cards use XS. A chip is a label; the hint link chip is the only tappable one and gets a 48 target.
- **Icons:** `dimension-md` 24 is the standard, `dimension-nr` 20 in fields and bars, `dimension-sm` 16 in notes.
- **Devices:** iPhone first, designed at 402 × 874 and checked at 375 × 667 and 440 × 956. Android follows by window size class (360 dp floor, 600 dp medium, 840 dp expanded). Each OS keeps its own navigation cues; the brand lives in type, colour, icons, motion and copy.

## Shape, depth and effects

- **Radius:** pills (`radius-full`) for buttons, chips, tabs, switches and avatars; `radius-md` 18 for cards, notice bars, alerts and collapsed sections; `radius-s` 14 for inputs (Figma › Inputs, 11 November 2026); 12px for select cards and day tiles; `radius-xxl` 42 for sheet tops and the Dynamic Island.
- **Elevation is quiet.** Cards rest on `shadow-01` or none; sheets use `glass-full` (Bottom Sheet BG, read 14 November 2026) and modals `shadow-05`; the tab bar casts `shadow-up`. Glass controls (toolbar buttons, search, tabs) use the `Glass` part: Foundation › Glass BG, light or dark, with `blur-sm`.
- **Borders:** `border-thin` 1px in `surface-03-pearl` by default; `border-medium` 1.5px in `surface-longing` for selection; `border-thick` 2px in `surface-10-ink` for a focused field.
- **Focus:** a 2px ring in `surface-10-ink`, offset 2px, on every control; white on Ink fills, dark glass and on-dark buttons. It is not gold: `surface-longing` is 1.87:1 on white.
- **States:** hover `opacity-hover` .08, pressed `opacity-focus` .12, disabled `opacity-disabled` .38. Scrims use `overlay-backdrop` (black 50%).
- **No blend modes in components.** Linear Burn and similar modes do not exist in CSS and break dark themes.

## Motion

- **Durations:** fast 100ms (press, toggle), normal 250ms (sheets, tabs, accordions), slow 400ms (page and hero transitions). **Easing:** ease-out `cubic-bezier(0,0,.2,1)` for entering, ease-in `cubic-bezier(.4,0,1,1)` for leaving, ease-in-out `cubic-bezier(.4,0,.2,1)` for moving. Available as `--motion-*` and `--ease-*` in `bundle.css`.
- **Calm, never celebratory about worship.** No confetti, timers or streak animations on rituals. Respect reduced motion: animations stop.

## Iconography

- **Hugeicons** (stroke, 24px grid) from the 🎨 Icons library, coloured `icons-black` by default, `icons-gray` inactive, `icons-illumination` for the accent, `icons-white` on dark fills. Black (#000) in icons maps to `icons-black`.
- **The `Icon` component carries 94 real Hugeicons and Nusuk icons** exported from Figma on 8 and 9 November 2026 (the ones the components use, e.g. `arrow-right-01`, `store-03`, `tick-double-02`). Other names fall back to simplified stand-in glyphs; for those, take the real icon from the library.
- Directional icons (back, forward, chevrons) mirror in RTL. No emoji as decoration.

## Logo and imagery

- **Logo:** use the files in *Assets › Logos* (`nusuk-logo-ink.svg` on light grounds, `nusuk-logo-white.svg` on dark or imagery, `nusuk-logo-gold.svg` for brand moments on Kiswah black). Keep clear space and minimum size as in *Assets › Brand › logo-clear-space*; never recolour, stretch, outline or add effects (*logo-misuse*).
- **Imagery:** reverent, real, warm light; journey moments, landmarks and architecture (*Assets › Brand › imagery-***). No staged worship close-ups.
- **Illustration:** soft, calm, simple and abstract watercolour scenes in deep blue, warm gold and atmospheric whites, with gold and green variant sets (*Assets › Illustration*). Use them for empty states, onboarding and service cards.

## Components

71 component cards mirror the library: Actions, Inputs, Navigation, Overlays, Feedback, Cards, Data display, Features, Patterns and Templates. Each card names its Figma source set. Use them as `window.NusukDL.<Name>` in a page that loads `tokens.css`, `components/bundle.css`, React 18 and `components/bundle.js`; set `lang` and `dir="rtl"` on Arabic screens and `data-theme` on `<html>` to switch theme. Built-in control names are Arabic and follow `<html lang="en">` or `NusukDL.setLang('en')` to English. The full list of every Figma set and variant is in *Component inventory*.

## Patterns and templates

Start a screen from its **template contract**: pick it by job in `templates/index.json`, read `templates/contracts/<id>.json`, fill each space only from its allowed list, apply the state, check the forbidden lines (*Templates and patterns* for the method, *Template contracts* for the full text of each; DESIGN.md › M9T). Twenty contracts cover service landing, catalogue list, item details, cart, payment, request tracking and list, search, support, address, cancellation, add-on, cost sheet, media viewer, the two date and time steps, booking details (single and package) and the two passes.

A pattern is a CMS section (header + layout + items); a page is an ordered list of sections. Twelve patterns are coded (FeaturedHeader, UpcomingRequests, Categories, CategoryChips, CardsSlider, PlaylistRow, ListSideBySide, Leaderboard, Guide, ServicesBox, BentoGrid, CardsList) with `NusukDL.Page({ template })` and two Rawdah landing templates in `templates/rawdah-landing.json`. Start a page from a template and change sections, not styles. Every section carries its `band`, `placement` and `dna`. Rules and the contract for new patterns: *DESIGN.md › M9P Patterns and templates*.

## DESIGN.md

`DESIGN.md` is one file, the same here, in the coded package and in the Nusuk project. It opens with the root (rules, router, precedence, gates, always read), then 17 modules read only when a task needs them: M1 Mission · M2 Intent & desire · M3 Behaviour · M4 Trust · M5 Measurement · M6 Writing · M7 Brand · M8 Foundations · M9 Components · M9S Surface allocation · M9P Patterns & templates · M9T Template contracts · M9C Nusuk AI chat (Proposed lane) · M10 Accessibility & devices · M11 Platform & handoff · M12 Decisions · M13 Process & gates. Two appendices hold the data: A, the 53 services (DNA, resting placement, ceiling, band, tier) and B, the atlas of 9 journeys and 123 steps.

**The plugin (17 November 2026, DL-42):** everything Nusuk reaches Claude as one plugin, `nusuk-dl`: fifteen skills (the Nusuk Design Language, DX, UX, content writer, voice rules, visual system, feature handoff; the general accessibility audit, design critique, UX writing and humanizer; and, since 18 November 2026, apple-design, mobile-native, break-ui and review-animations) and the whole DL library. Owners sync it once from GitHub ([https://github.com/ByMoha/NusukDL](https://github.com/ByMoha/NusukDL)); anyone else uploads `nusuk-dl.plugin` in Customize › Plugins › Add › Upload plugin. The only other download is the developer handoff. Both are in the onboarding guide › Downloads (Google Drive, no sign-in) and rebuilt with every release.

## Placement: where a service shows

Before composing any page, place it (*DESIGN.md › M9S*). Placement P0–P5 is dynamic (service × step × mindset); app level L1–L4 is static; DNA (Core, Supportive, Extra mile, Ancillary) settles arguments. Today and every landing compose top-down by render band, and bands never invert: 1 ritual & safety · 2 commitment state · 3 journey step · 4 daily habit · 5 learning · 6 commercial. Pushes follow tiers T0–T3. Pre-desire gets meaning, never offers; a Dependent never sees a booking control.

## Ethics, the line we hold

- **Never in Nusuk:** streaks and streak shame; leaderboards, ranks or points for worship; countdowns, FOMO and loss framing; random rewards; decoys; manufactured scarcity; hidden fees; pre-ticked consent; feeds of other people's worship.
- **Scarcity only when it is true** (real capacity, real cutoffs), and never for a spiritual decision.
- **Progress stays private.** Celebrate returning, not streaks. End sessions with calm closure.
- **Pair every success metric with a guardrail** (notification opt-out sits in the Trust Index).

## Further sections

Governance and contribution · Library files · Component inventory · Brand · Writing and live rules · DX practice · Behavioural patterns and nudges · Targets and KPIs · Devices, accessibility and rulings · Known library issues · Using DL with Claude · Release notes · DESIGN.md and its modules.


---

## Consuming this system (generated — do not edit)

Every path named below is under `project/` in this design system: read `project/api/tokens.md`, not `api/tokens.md`.

`components/bundle.js` defines `window.NusukDL` (96 components); `components/bundle.css` is its stylesheet; `tokens.css` is every token as a CSS variable plus `@font-face` for the fonts. `components/bundle.css` reads its variables from `tokens.css`. The bundle needs react 18 (not packed in this system: bring your own copy) (`window.React`), react-dom 18 (not packed in this system: bring your own copy) (`window.ReactDOM`), loaded before it. Build any UI by mounting these components; never hand-build a control or draw an icon the system provides.

- **Standalone page:** inline `tokens.css` and `components/bundle.css` in a `<style>`, then the library files and `components/bundle.js` as classic scripts (a file containing `</style`, `</script` or `<!--` breaks an inline element: write the sequence `<\/style`, `<\/script` or `\x3C!--` in your copy, or load that file by URL).
- **Design canvas:** bring `tokens.css`, `components/bundle.css`, `components/bundle.js` and `components/index.d.ts` (for the editor’s props panel) onto the canvas in full, as the canvas type’s design-system components reference says (a server-side copy first where it offers one); in each artboard that uses this system, right after the `support.js` line, load `tokens.css` first, then the stylesheet, then the script; skip the library files (the artboard supplies React); mount with `<x-import component-from-global-scope="NusukDL.<Comp>" …>`.
- **Slides deck, or any surface that cannot run the bundle:** tokens only — the values are on `api/tokens.md`; the deck takes `tokens.json` by file path for its colour pickers.

**Read, per thing:** a component’s props, parts and examples: `api/components/<Comp>.md`; token values: `api/tokens.md`; stored assets and their paths: `api/assets/<Group>.md`. After this README, fetch the cards and fonts you need in ONE message as parallel calls — none depends on another.

**Two rules.** Before you use a thing — a component, a token group, an icon, an asset — read its card from the index below; a value you did not read from a card is a guess. `tokens.json`, `manifest.json`, `components/index.d.ts` and `design-system.json` are sources for tools: hand them over. `components/<Comp>/README.md` and `assets/<Group>/README.md` are the long-form second read a card links to; `SKILL.md` and `artifact-type/` beside them are authoring guidance, not needed to consume the system.

## Index (generated — do not edit)

**Tokens**

- `api/tokens.md` — Every token: surface, text, palette, type, spacing, radius, shadow, dimension, opacity, border, blur, scale, gradient. (59.2k)

**Icons and assets**

- `api/assets/Logos.md` — 3 files, by asset id. (1.3k)
- `api/assets/Brand.md` — 39 files, by asset id. (4.4k)
- `api/assets/Illustration.md` — 9 files, by asset id. (1.9k)
- `api/assets/Art-direction.md` — 10 files, by asset id. (1.5k)
- `api/assets/Applications.md` — 7 files, by asset id. (1.5k)
- `api/assets/Imagery.md` — 9 files, by asset id. (1.8k)

**Components** (`api/components/<Comp>.md`, 96)

- **Foundations**: `Icon` — A 24px stroke glyph in the current text colour, sized by the dimension-* tokens · `GlassBG` — The glass every floating control sits on: Figma's Glass BG with its 12 variants, plus the layer switches that components use
- **Actions**: `Button` — The call to action
- **Inputs**: `TextField` — A labelled input with every Nusuk field type: text, text area, search, select, mobile, password, OTP, action and credit card · `Hint` — One line of help, information, warning, error or success under a field or block · `FileUploader` — Upload a document: an empty field with the upload button, a loading field, the uploaded file with view and delete, and a view-only file · `Chip` — A short status or category label: Default, Pending, Success, Info, Error, Gold or White, soft or solid · `Switch` — Turns a setting on or off immediately · `Checkbox` — Select any number of options, or confirm one statement · `Radio` — Choose exactly one option from a short visible list · `SelectCard` — A large selectable card for choosing a journey type or package · `DropdownItem` — One row in a selection list or sheet: icon, flag, avatar or text, with radio, toggle, checkbox or download selector
- **Cards**: `StatusChip` — The status of a request · `MemberCard` — A person in a booking: the main pilgrim or a companion · `RequestCard` — A booking in "My bookings": what it is, its status, when, and who it is for · `OptionCard` — A choice or setting in a list: with an action, a counter, an icon on top, or a requirement · `MediaCard` — A 250 × 330 content or commerce card: a full-bleed photo with a type pill on top and a white glass details panel below, in 18 types from article to hotel · `AddToCartCTA` — The cart control on product cards and rows: add, a quantity stepper, remove, or notify me · `PriceOptions` — The price block of a product card: "from", the price and the cart control
- **Navigation**: `Toolbar` — The top app bar · `TabBar` — Everything that sits at the bottom of a phone screen: the home tab bar with Nusuk AI, and the action bars (CTAs, cart, filters, share, habits) · `HeaderTabs` — Segmented tabs for switching views inside one screen, with optional counts · `CountBadge` — A small number on a tab or icon · `Pagination` — Dots for carousels and stories · `ProgressRing` — A small ring showing progress through a form or steps, with an optional title · `VerticalStepper` — A vertical timeline of journey steps: done, current, next · `Steps` — A horizontal step bar for order and request progress · `SectionHeader` — Titles for heroes, sections and legends, with optional description and action · `BottomNav` — The floating bottom navigation: a glass capsule of destinations with one optional round button, new on 10 November 2026 · `Nudge` — One announcement above the bottom navigation: an illustration, one line and one action
- **Overlays**: `BottomSheet` — The sheet container with grabber for filters, details and short tasks · `StatusSheet` — A bottom sheet that reports an outcome or asks for one decision: an error, a confirmation, a permission, a cancellation · `CollapsedSection` — An accordion row for FAQs, policies and long details · `DirectionSheet` — A bottom sheet that asks the person to choose a direction: restore an account, pick an option, filter · `CustomerFeedback` — The rating sheet: service header, CSAT faces, optional NPS row, reasons after a low score, comments, and the two actions · `ReasonSelection` — Pick one reason from a short list; the last one, «أسباب أخرى», opens a text box
- **Feedback**: `NoticeBar` — An inline message that sits in the page: default, info, alert, success or error · `Alert` — An inline message in a coloured box: information, success, warning, error, or a neutral notice · `EmptyState` — What to show when there is nothing yet, and the one action that fixes it · `AppNotification` — An in-app notification row with time, title, body and type icon · `SectionError` — A block inside a page that failed to load, with a retry
- **Data display**: `Avatar` — A person or account: initials, icon, picture or emoji, five sizes · `AvatarGroup` — Overlapping avatars for groups and companions · `RatingBar` — A star rating in half steps, alone or with its value and count; or a 1–5 star input · `FeedbackEmojis` — Five-level satisfaction scale for a Moment CSAT question · `DayPicker` — A calendar day cell with availability dot · `DayTab` — A horizontal day selector tile · `TimeSlot` — A selectable time slot cut as a ticket, with markers and an optional crowd chip · `PrayCard` — A selectable day card for Rawdah and prayer bookings, with gender availability · `InfoTile` — A compact metric tile: temperature, crowding, humidity · `NpsScale` — The "how likely are you to recommend" row: numbered circles with end labels · `ReviewCard` — One person's review: who, what they said, their rating and when · `ReviewSummary` — The overall rating with the faces of a few reviewers
- **Features**: `PaymentDetails` — A price breakdown with discounts and total · `SoundPlayer` — Audio player for Quran recitation, lessons and Athkar · `ChatMessage` — A Nusuk AI or user message bubble, with loading and error states · `FlightTicket` — A flight option as a two-part ticket: route and times, a notched dashed tear line, then airline and price · `StepCard` — A journey step card with status, tag and the next action · `QRCodeStatus` — A QR code with default, used, expired, blurred, cancelled and error states · `DetailsListItem` — A label–value row for booking details, zebra-striped · `StartJourney` — The entry widget that starts a Hajj, Umrah or Rawdah journey · `PrayerLiveActivity` — The lock-screen live activity for prayer times · `MapPin` — A map pin for places and events · `DateRange` — A from–to date pair in one card · `FeatureBox` — One amenity as a round icon with a label · `FeaturedAirport` — A quick-pick airport tile for the holy cities · `FromTo` — Departure and arrival pickers with the trip-type tabs and a swap button · `HotelCard` — A hotel result: photo, name, distance, rating, room features and price · `Ribbon` — The corner ribbon that marks one result, such as the cheapest flight · `VisaUserBlock` — A traveller tile for visa and booking lists
- `StatusBar` — StatusBar · `HomeIndicator` — HomeIndicator · `IconBlock` — IconBlock · `SearchBar` — SearchBar · `HomeItem` — HomeItem · `Glass` — Glass surface used inside components · `Cover` — Cover
- **Patterns**: `SectionTitle` — The header every section starts with: a title, an optional tag (#المحتوى) or action label (عرض الكل), and the glass arrow that opens the full list · `CategoryTile` — A tappable glass tile with an icon or image and a short label: services, categories and quick actions · `ProductTile` — A white product-category tile with a 3D product picture and a label, for the store · `FaceTile` — A coloured tile with a cut-out portrait (reciters, scholars, guides) · `PlaylistCard` — An audio or video series: face tile, one-line title, tag; the horizontal version adds a duration button · `HintWidget` — A preparation tip people can tick off: icon, title, details and a link chip · `Categories` — A section with a row of tiles that scrolls sideways: categories, products or faces · `CategoryChips` — A section of topic chips that wrap: Secondary SM buttons with a trailing icon · `CardsSlider` — A row of media cards that scrolls sideways; layout="grid" gives the 2 × 2 grid used for videos · `PlaylistRow` — A row of vertical playlist cards · `ListSideBySide` — Pages of two horizontal playlist cards that scroll sideways · `Leaderboard` — One featured media card, full width, with the fade surface · `Guide` — A preparation guide: hint widgets that scroll sideways with page dots, in a white card (default) or plain · `ServicesBox` — A tinted box with a 4-column grid of service tiles · `BentoGrid` — A mixed grid of four media cards (wide, two halves, wide) and an optional "Show more" · `CardsList` — Stacked full-width media cards with an optional "Show more" · `UpcomingRequests` — The person's next bookings at the top of a landing page · `FeaturedHeader` — The top of a destination landing: photo, search bar, title and four quick actions
- **Templates**: `Page` — Renders a template: an ordered list of sections (patterns) and the bottom bar
