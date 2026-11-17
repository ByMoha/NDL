# Change log

For developers and coding agents. Newest first. Figma is the source of truth; read every number from the tokens, and use leading and trailing, never left and right. Full tables: the `CHANGES-*.md` sheets. Machine-readable: `migrations/*.json`. Every entry links the Figma file that holds the change, and has an iOS and an Android section.

Sizes are pt on iOS and dp on Android: 1 Figma px = 1 pt = 1 dp; text is sp on Android. The values are also shipped as code: `native/NusukTokens.swift` and `native/NusukTokens.kt`. How to use them: *iOS and Android handoff*.

## 17 November 2026, 21:35 (🃏 Cards: Add to Cart CTA rebuilt on CTA instances; new Charity Card) · DESIGN.md 3.6.0 · tokens 3.11

**Figma:** [🃏 Cards › Add to Cart CTA](https://www.figma.com/design/mg7egvNbr2ciMP04Ig2XDl/?node-id=70399-6858) (7 statuses, read 21:33) and [🃏 Cards › Media Cards](https://www.figma.com/design/mg7egvNbr2ciMP04Ig2XDl/?node-id=70306-7276) (24 types; [Charity Card](https://www.figma.com/design/mg7egvNbr2ciMP04Ig2XDl/?node-id=70695-9609) new).

### Changed: AddToCartCTA

- Every status is an instance of CTA Secondary XS: `arrow` and `cart` 42 (were 50), `cart` icon `shopping-basket-add-01` 18 (was `shopping-basket-01`).
- `one` and `many` are 138 (were 122) on Glass BG (Secondary surface): `one` holds a destructive icon-only `delete-01` 18 (was `delete-03`), the number fills the middle, plus 16, 12 at the end; `many` 12 a side.
- `remove`: `shopping-basket-remove-01` 16 now **before** «إزالة» (was a trailing `delete-03`), 70 wide.
- `notify-me`: `notification-02` 16 now **after** «نبهني عند التوفر» (was a leading `notification-01`), 138 wide. The Marketplace Grid out-of-stock card uses it too.
- New icons: `delete-01`, `shopping-basket-remove-01`, `notification-02`, `spoon-and-fork`.

### New: MediaCard Charity Card

- `type: 'charity'`, 386 × 330: photo under the fade and glow, a White SM chip with a 14 icon, title and description, then CircularProgress 44, the remaining amount (`text-link`), a 20 Pearl line, the collected amount (`text-note`), 18 apart, and the Add to Cart CTA arrow at the end.
- Figures are live campaign totals; no countdown, donor names or ranks; giving happens on its own page.

### iOS

- **AddToCart:** `NusukButton` Secondary XS for every status; the stepper an `HStack(spacing: 8)` 138 × 30 pt on the glass fill, forced left to right; remove leading, notify trailing (`notification-02`).
- **Charity Card:** a `ZStack` of the image, a `LinearGradient` (clear at 0.116, white at 0.729) and a blurred white `Ellipse`; content `VStack(alignment: .leading, spacing: 8)` with padding 26 / 18; the row an `HStack(spacing: 18)` of `NusukCircularProgress` (44 pt), the two amounts and a 1 × 20 Pearl `Rectangle`, then the 42 pt arrow button.

### Android

- **AddToCart:** the `NusukButton` composable for every status; the stepper a `Row(Modifier.width(138.dp), spacedBy(8.dp))` under `LayoutDirection.Ltr`.
- **Charity Card:** `Box` with `AsyncImage`, a `Brush.verticalGradient(0.116f to Transparent, 0.729f to White)` and a blurred white oval (`Modifier.blur`, Android 12+); the row a `Row(spacedBy(18.dp))` of the circular progress (44 dp), the amounts and a 1 × 20 dp divider, then the 42 dp arrow.

## 17 November 2026, 21:30 (Header Tabs and TimeSlot rebuilt as replicas; Tab Bar Cart with Count and Payment; Navigation progress re-read; the DL becomes one plugin and a developer handoff) · DESIGN.md 3.5.0 · tokens 3.11

**Figma:** [🎹 Tabs › Header Tabs](https://www.figma.com/design/t4vGzLmqSgIwWuQPrsRyFY/?node-id=68411-2883) (Size × Background, `_Header Tabs` Darkmode, `_Tab_Master_Status`, read 20:52) and [🧭 Navigation](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw/?node-id=2402-18252) (`_Progress Bar`, `.Building Blocks`, Circular progress indicator and Progress, re-read 20:55 after the DL Advisor's third update, and [Tab Bar](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw/?node-id=70301-10665) at 21:12), and [📅 Date & Time › Time slot card](https://www.figma.com/design/A7Jna80Khqc6WMQicRfLwU/?node-id=2402-18252) (read 21:10).

### Changed: HeaderTabs, a replica of 🎹 Tabs

- **Track:** 38 high (LR 48), padding 4 / 8 (was 4 all round), tabs 8 apart; the Ivory fill reaches 2 outside the track, as Glass BG does in Figma. `darkmode` (new): a Smoke track and white labels. Background Off: no track.
- **Tab:** 30 high (LR 40, was 38), padding 8 / 20 and 18 on the icon side, label Notes 1 Regular 2 above the bottom. New per tab: `icon` (20, at the start), `iconOnly`, `updates` (a 6 red dot 8 from the end, 4 from the top). The count stays Smoke on the chosen tab (code turned it white); in Darkmode it is white with a soft shadow.
- **Chosen tab:** white with −6 6 30 −12 Ink 5%, the style Tabs uses under the name Shadow/XS, which is not Foundation's Shadow/XS (F104).

### Changed: 🧭 Navigation progress (third read)

- **CircularProgress:** the value now sits in the middle (Notes 2 Regular), 0 is a whole Pearl ring, done is a `surface-longing` disc with a white 24 tick, and the arc starts 15° after 12 o'clock with the track ending at 12 (F106 for the 50% variant). Still Proposed (F92).
- **Toolbar Process:** the bar is 28 high (8 above and below), as `_Progress Bar` is. Its Darkmode property now has five values (F105).
- **ProgressRing with a title:** the title and subtitle come first and the ring after them, as Progress (RTL=On) draws it.

### Changed: TimeSlot, a replica of 📅 Date & Time

- **Shape:** built from Figma's parts: 12 bands top and bottom (corner 18 · ticket 17 · the rest) and a 32 middle, 54 high; corners Radius/MD, clamped to 12 by the band.
- **Notch:** a shallow bite 11.3 wide and 4.2 deep (was a 17 semicircle), its tip 27 from the **start** edge, away from the markers (code had it on the markers' side). The line follows it.
- **Markers:** 20 (were 22), from −3 / −3 at the end corner, the first on top. Selected: all Longing with white icons.
- **With an icon or a crowd chip** the text fills the middle, as the master draws it.

### Changed: Tab Bar

- **Cart with Count** (Figma renamed Cart) and **Payment** (new): the title over `_Shop CTA`, Primary LR with the label first, then the total and the riyal. Cart with Count keeps the counter, now on Glass BG, 18 from the CTA; Payment's CTA fills the row. `type="cart-with-count"` (`cart` still works), `type="payment"`, `total`.

### Changed: how the DL is distributed (DL-42)

- **One plugin, `nusuk-dl`:** eleven skills (the seven Nusuk skills, and `accessibility-audit`, `design-critique`, `ux-writing` and `humanizer`, MIT-licensed and credited) and the whole DL library in `library/`. Upload `nusuk-dl.plugin` in Customize › Plugins › Add › Upload plugin, or sync it from GitHub.
- **One handoff for developers:** `nusuk-dl-developer-handoff.zip` (the former developer package, without the skill zip). It is also the plugin's `library/`.
- **Gone:** the designers and everything packages, the stand-alone skill zips and the patterns zip. Google Drive keeps only the plugin and the handoff; GitHub keeps the plugin folder and the handoff (no root mirror, no `artworks/`: the paintings are in the `nusuk-visual-system` skill).
- **The DL skill** no longer carries copies of the content writer, voice rules and visual system: they are skills beside it in the plugin.

### iOS

- **HeaderTabs:** an `HStack(spacing: 8)` with `.padding(.vertical, 4).padding(.horizontal, 8)` over a `Capsule().fill(surface02Ivory)` inset −2 (`surface05Smoke` in Darkmode). Tabs 30 pt (LR 40), padding 8 / 20, 18 on the icon side; the chosen tab a white `Capsule` with `.shadow(color: ink.opacity(0.05), radius: 15, x: -6, y: 6)` shrunk by the spread. Updates: a 6 pt red `Circle` overlay at the top trailing corner, 8 / 4 in. Each tab `.accessibilityAddTraits(.isSelected)` when chosen; an icon-only tab takes its label.
- **CircularProgress:** a `Text` in the middle (Notes 2); arcs trimmed from 15° after the top; at 1.0 a filled `Circle` and the 24 pt tick in white.
- **Process bar:** 28 pt high.
- **TimeSlot:** one `Shape`: a rounded rectangle (radius 12) with a 11.3 × 4.2 bite top and bottom, tip 27 pt from the leading edge, stroked 1 pt; markers 20 pt `Circle`s at (−3, −3) on the trailing corner, overlapping 7, the first on top.
- **Tab Bar Cart with Count and Payment:** an `HStack(spacing: 18)` of the counter (110 × 48, glass) and a full-width Primary LR whose label is followed by the total and the riyal; Payment drops the counter.

### Android

- **HeaderTabs:** a `Row(horizontalArrangement = spacedBy(8.dp))` with `padding(vertical = 4.dp, horizontal = 8.dp)`, drawn over a pill extended 2 dp each side (`drawBehind`). Tabs 30 dp (LR 40), padding 8 / 20, 18 on the icon side; the chosen tab white with `Modifier.dropShadow` (−6, 6, blur 30, spread −12, Ink 5%). Use `Modifier.selectable(role = Role.Tab)`; the updates dot a 6 dp `Box` aligned top end.
- **CircularProgress:** the value as `Text` in the centre; `drawArc` from −75° (15° after the top); done fills the circle and draws the 24 dp tick in white.
- **Process bar:** 28 dp high.
- **TimeSlot:** a `GenericShape` with the two bites, tip 27 dp from the start edge; markers 20 dp, offset −3 dp, overlapping 7 dp, the first drawn last.
- **Tab Bar Cart with Count and Payment:** `Row(spacedBy(18.dp))` of the counter (110 × 48 dp, glass) and the Primary LR CTA (label, total, riyal); Payment is the CTA alone.

## 17 November 2026, 20:45 (Navigation progress, Misc headers, Cards, Market, Patterns; the design system's comment fixes in the downloads) · DESIGN.md 3.4.0 · tokens 3.11

**Figma:** [🧭 Navigation](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw/?node-id=2402-18252) (read at 19:00 and again at 20:05, after the DL Advisor's second update), [🔌 Misc](https://www.figma.com/design/ZpduRx4IDZO8eLHTq9nXbj/?node-id=2402-18252), [🃏 Cards](https://www.figma.com/design/mg7egvNbr2ciMP04Ig2XDl/?node-id=2402-18252), [🛍️ Market](https://www.figma.com/design/5X9RDeo33hZFEhtjVUYr5c/?node-id=2402-18252), [✨ Templates-Patterns › ⠏ Patterns](https://www.figma.com/design/fIjmiUpwy5UE9KJ9aXfhrn/?node-id=70394-7656) and [💬 Chat UI](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR/?node-id=2402-18252) (7 sets, 54 variants, 3 masters: no change since 15:30). The comment fixes below came from [🧭 Navigation](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw/?node-id=2402-18252) (Haramin Icon, Tab Bar), [🃏 Cards › Option Cards](https://www.figma.com/design/mg7egvNbr2ciMP04Ig2XDl/?node-id=68491-1912), [📅 Date & Time](https://www.figma.com/design/A7Jna80Khqc6WMQicRfLwU), [🏖️ Travel › Travel](https://www.figma.com/design/ozi4A2gUbVXbzbUJ3MF4uU/?node-id=70393-17066) and [⚙️ Foundation › Glass BG](https://www.figma.com/design/avzbRTP9CgpbbO8NgU5Ymo?node-id=65346-1296).

### Changed: 🧭 Navigation progress

- **ProgressRing** (Progress on `_Form Progress Indicator` P20–P100) is rebuilt: a 1.14 Pearl ring, a 7.4 Illumination band from 6 o'clock, clockwise, with round ends and a 5 `surface-shade-3` dot in its start cap, the count in `notes-2-regular`. At 100% the circle fills and a 28 `tick-02` replaces the count (`check`). New `step` and `steps` set the value and the count «2/4». Code drew a 3 stroke from 12 o'clock until now.
- **Toolbar Process** counts steps like `_Progress Bar` (Step 01–03 × Darkmode): one 30 × 12 wave block per step done from the reading start, then 8 apart a straight 3 track (Pearl; white in Darkmode). New `step` and `steps`; `progress` rounds up to a step.
- **New: CircularProgress** (Circular progress indicator, Progress × Darkmode): 44, 3 stroke inside; active `surface-longing` from 12 o'clock, clockwise, round ends; the rest Pearl (white in Darkmode) with a 15° gap at each end. Proposed until the set is finished: its labels and drawings disagree (F92).
- **Photo Scan and Upload**, a new example screen in 🧭 Navigation, is a frame, not a component.

### Changed: 🔌 Misc, 🃏 Cards, 🛍️ Market

- **SectionTitle:** 02 Section Title is 32 top, 18 sides and bottom (Space/XL, Space/NR; was 48 / 18 / 26), so every pattern header is 24 shorter. New `variant="centered"` (Location 02 Section Title / Centered) and `actions` (Figma's Actions slot).
- **StatusChip:** `confirmed-booking` («حجز مؤكد», success, `document-validation`); 48 statuses.
- **AddToCartCTA:** `buy` (Figma `Status7`): Secondary XS, icon left `shopping-basket-add-01` (new in the coded icon set), «اشتر».
- **PriceOptions:** `showPrice`, `discount` and `oldPrice` (a 10 pill in the alert error colours and the earlier price struck through, under the price), and `cta` (off by default: F98). A discount shows only when it is real, never with urgency and never on Udhiya or Hady.
- **Market** (documented, not coded): 15 public sets and 5 private. New private `_Udhiya Details` (one collapsible card per sacrifice: the name it is offered for, its type, contact details behind a switch) and `_Contact Details`; Select Location is a set (Selected On, Off); Breathing Effect left the file.

### Changed: from the design system's comments (14:13–16:09, now in every download)

These were made on the design system page in answer to the DL Advisor's comments, and were not yet in the downloads, GitHub or the plugin. They are now, and logged here.

- **BottomNav:** the current tab's glass slides from the previous tab to the new one (0.45 s; reduced motion holds still). The الحرمين tab draws the Haramin Icon: Kaaba, Masjid and Maqam centred on one 24 square, cross-fading with a 20 blur on a 6 s loop; exported as `HaramainIcon` (Q-D40: the loop against M8 Motion).
- **TabBar:** the white home bar and Habits are deprecated in Figma; `landing`, `journey`/`travel`, `content`, `market` and `inner-pages` now render BottomNav.
- **Glass BG:** the white band at the bottom of the glass is softer, 0 −8 10 −4 at 75% (was 0 −6 3 −1 at 90%). The page changed only the stylesheet's fallback, which the `glass-rim` token overrides, so the default glass had not changed: `glass-rim` now carries it (tokens 3.11).
- **OptionCard:** Figma's type names (`default`, `with-icon`, `with-action`, `top-icon`), Figma's order in the preview, no lead icon on 2 Actions, 2 Actions On and Counter, an Ivory flag tile.
- **Categories:** six 120 × 140 image tiles as Figma's Partials draw them, and the chips row; an image tile with no picture keeps an empty 64 slot.
- **FaceTile:** the preview uses the cut-out portrait from Cards › Media Cards › Faces.
- **PrayCard:** the icon, the day (`body-1-light`) and the men's and women's icons only; `note` is spoken only.
- **TimeSlot:** rebuilt from `_Time slot card Master`: corners 12, real 17-wide notches top and bottom centred 26.5 from the markers' corner, the line follows the notch, markers 22 in a fixed order, the master's crowd chip and trailing icon as props.
- **QRCodeStatus:** dot-code art as Figma draws it; `src` takes a real code.
- **FlightTicket** is rebuilt from 🏖️ Travel (two-part ticket, Full and Mini, Selected, Skeleton, Ribbon), and seven Travel components are new: Ribbon, FromTo, DateRange, FeaturedAirport, FeatureBox, VisaUserBlock and HotelCard. Their types are now in `index.d.ts`.

### Proposed in Figma (not approved)

- ⠏ Patterns: Option chip picker, Image Gallery, Video Player, Sound Player Screen / Quran, Sound Player, Live, Reel, Articles, Guides, Search / Result. ✨ Templates: Content landing and Pass sheet · multi-use state. Listed in `patterns/index.json › proposed` and `proposedTemplates`, and in M9P.

### Known issues

- F91–F103, TC22–TC27 (Golf Carts), AI9; questions Q-D40 to Q-D43.

### iOS

- **ProgressRing:** `Circle().trim(from: 0, to: v)` with `StrokeStyle(lineWidth: 7.4, lineCap: .round)`, rotated so 0 is at 6 o'clock, over a 1.14 Pearl `Circle().stroke`; a 5 pt shade 3 dot at the start; at 1.0 a filled circle and the 28 pt tick. Shorten the trim by the cap so the ends stay inside the sweep.
- **Toolbar Process:** an `HStack(spacing: 8)` of a wave `Path` (one 30 × 12 period per step done, 3 pt, round caps) and a 3 pt `Capsule` filling the rest; it follows the layout direction.
- **CircularProgress:** two trimmed `Circle` strokes, 3 pt, round caps, starting at −90°, with a 15° gap at each end; `.accessibilityValue` reads the percent.
- **SectionTitle:** top inset 32, bottom 18 (was 48 / 26); Centered is a `VStack(spacing: 12)` with a centred title.
- **PriceOptions:** the discount row is an `HStack(spacing: 8)` of a capsule (10 pt text, padding 2 / 8) and a strikethrough `Text`, 4 pt under the price.
- **BottomNav:** slide the selected pill with `matchedGeometryEffect` (0.45 s ease); the Haramain icon cross-fades three images every 6 s unless `accessibilityReduceMotion`.
- **TimeSlot:** draw the ticket as one `Shape` with the two notches subtracted, so the stroke follows them.

### Android

- **ProgressRing:** `Canvas`: `drawCircle` Pearl stroke 1.14.dp, `drawArc(startAngle = 90f, sweepAngle = 360f * v, useCenter = false, style = Stroke(7.4.dp.toPx(), cap = StrokeCap.Round))`; at 1f a filled circle and the tick.
- **Toolbar Process:** a `Row(horizontalArrangement = Arrangement.spacedBy(8.dp))` of a wave `Path` and a 3.dp rounded track that fills the rest.
- **CircularProgress:** Material 3 `CircularProgressIndicator(progress = { v }, strokeWidth = 3.dp, gapSize = …, trackColor = …, strokeCap = StrokeCap.Round)` with the DL colours.
- **SectionTitle:** padding top 32.dp, bottom 18.dp; Centered is a `Column(horizontalAlignment = CenterHorizontally, verticalArrangement = spacedBy(12.dp))`.
- **PriceOptions:** the discount row is a `Row(spacedBy(8.dp))` of a `RoundedCornerShape(50)` tag and a `TextDecoration.LineThrough` price.
- **BottomNav:** animate the selected pill's offset with `animateDpAsState` (450 ms); the Haramain icon cross-fades unless animations are off in the system settings.
- **TimeSlot:** a `GenericShape` with the two notches cut out; the border follows it.

## 17 November 2026, 19:30 (Nusuk AI chat: one bot per run of Nusuk messages) · NusukChat 2.8.5

**Figma:** [💬 Chat UI](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR/?node-id=2402-18252). Review comment on the *Verify before you pay* cases: when the next message is also from Nusuk, the bot goes; the one at the bottom of the run stays.

### Changed

- **Avatar grouping:** in a run of Nusuk messages only the last one shows the bot. Bubbles above it keep the empty 24 start column so they stay aligned; an insight note above a Nusuk message drops its 38 bot. A user message, a sheet or the end of the thread ends the run.
- **Code:** `Message`, every Nusuk message type and `BotNote` take `bot` (default `true`). On the web, `.nkc-thread` on the thread container applies the rule automatically. Built on 2.8.4 (the Days and Slots answer padding and the criteria copy stay).

### iOS

- In the thread list, `showsBot = next?.from != .nusuk` for each Nusuk row. When false, a 24 pt leading `Spacer` for bubbles; nothing for the insight note. Hide the hidden bot from VoiceOver.

### Android

- In the `LazyColumn`, `showBot = items.getOrNull(i + 1)?.from != From.Nusuk`; when false, `Spacer(Modifier.width(24.dp))` for bubbles. Hidden bots carry no content description.

## 17 November 2026, 17:30 (install steps give the full GitHub link) · DESIGN.md 3.3.1

**Figma:** none. This changes the text of the guide and the skill only.

### Changed

- **Install steps:** wherever the DL says how to install the plugin, it names the repository by its full link, [https://github.com/ByMoha/NusukDL](https://github.com/ByMoha/NusukDL): the guide's design system tab and Downloads, the skill's `GETTING-STARTED.md`, `LEARNINGS.md` and `SKILL.md`, the README files on GitHub, and this design system's README and release notes.
- **Claude Code** takes the link as it is: `/plugin marketplace add https://github.com/ByMoha/NusukDL`, then `/plugin install nusuk-dl@nusuk-dl`, tried on 17 November in a clean Claude Code setup. The short form `ByMoha/NusukDL` still works.
- **Google Drive** keeps one copy of each download, the newest. The copies from earlier releases are in the Drive trash.

### iOS

- No change.

### Android

- No change.

## 17 November 2026, 16:45 (the Nusuk plugin carries the seven Nusuk skills; three downloads on the design system tab) · DESIGN.md 3.3.1

### Changed

- **One plugin, the whole Nusuk set:** `nusuk-dl` now carries `nusuk-design-language`, `nusuk-visual-system` with its 18 artworks, `nusuk-content-writer`, `nusuk-voice-rules`, `nusuk-ux`, `nusuk-dx` and `nusuk-feature-handoff`, versioned and updated together. The six companions are the versions on the DL Advisor's account on 17 November.
- **The DL skill zip** also carries the content guide (`reference/content-writer/`: voice and tone, writing rules, content types, terminology), the voice rules (`reference/voice-rules.md`) and the colour helper `scripts/match_blue_tone.py`, so a skill uploaded by hand covers content and illustration too.
- **DL guide, design system tab:** three downloads, the same packages as the Downloads tab: Download everything, Download for developers, Download for designers. The single downloads (the skill, DESIGN.md, patterns and templates) are gone from that tab; "Use it with Claude" starts with the plugin.
- **Restored:** `15-template-contracts.md`, the full text of the 20 contracts, removed from the design system by a save from its page at 16:22.

## 17 November 2026, 16:30 (Nusuk AI chat: one bubble per answered question; the DL as a Claude plugin) · DESIGN.md 3.3.1

**Read:** the chat lane's Verify cases (15:28) and the DL Advisor's comment on them: a question and its answer become one bubble once it is answered, as 💬 Chat UI draws the User variants.

### Changed

- **M9C and the chat README** state the rule: before it is answered, a question is one Nusuk bubble (type row, question, controls, one Primary MD). Once answered, that bubble is dismissed and the answer is one user bubble whose header row carries the question beside the 12 × 14 Nusuk mark, then "Edit answer". Pass the question as `question` on the answer. Replies to suggestions after a result stay plain user bubbles.
- **The DL as a Claude plugin:** ByMoha/NusukDL now has `.claude-plugin/marketplace.json` and `plugins/nusuk-dl`, which carries the DL skill. An owner syncs it once in Organization settings › Plugins & skills › Sync from GitHub; every release raises the plugin's version and reaches members on the next sync. The skill's GETTING-STARTED.md and the guide's Downloads say how.
- **DL guide:** entries of one day get their own anchors; the time stays in the link.

### Still open

- **Chip answers:** on the Verify cases the Advisor asked for the "active status" template; which state that is was asked in the Verify thread. Until then, chip answers use User/BG with the question header.

### iOS

- On answer, remove the question cell and insert one user cell: an `HStack(spacing: 12)` header with the question (Notes 14) and the 12 × 14 Nusuk mark, then the answer bubble with "Edit answer". VoiceOver reads the question, then the answer.

### Android

- On answer, replace the question item with one user item: a `Row(horizontalArrangement = Arrangement.spacedBy(12.dp))` header with the question and the mark, then the answer bubble with "Edit answer". Keep the thread a polite live region so the change is announced.

## 17 November 2026, 15:50 (Nusuk AI chat: component notes match the code) · NusukChat 2.8.4

**Why:** the chat's component cards and `manifest.proposed.json` are built from the registry in `nk-chat.js` (`tools/build-dl-package.js`). Two registry notes still described the layout before 2.8.2, so a rebuild would have put the old text back in the cards.

### Changed

- **PasswordField:** the note now reads: the 62 field, then its Strength Meter, the criteria as DL Checkbox SM, 8 apart. It said the rules sat inside a 192 field.
- **Message:** the token list adds `space-lr`, the 26 at the bottom of the body since 2.8.2.
- The `Message` and `PasswordField` cards and `manifest.proposed.json` are rebuilt from the registry and match it. Nothing renders differently, on the web, iOS or Android.

## 17 November 2026, 15:30 (Nusuk AI chat: answer padding as drawn, password copy) · NusukChat 2.8.3

**Read:** [💬 Chat UI](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR/?node-id=2402-18252) at 15:30: every variant of the 7 sets and the 3 masters, with its size and Body padding, to check the 2.8.1 and 2.8.2 rounds. Every size they list matches Figma: User/BG 469, Nusuk/BG 435, User/Transparent 178; Text 185 and 101; Voice 148 and 114; Confirmation 410; Password 347; Gender 321; IBAN 443; Single Choose 497.

### Changed

- **Answer padding:** User=User, Style=Days (`80601:3360`) and Style=Slots (`80601:5538`) keep 20 at the bottom in Figma, like Voice, Passport Attach and Location Guide; 2.8.2 gave them 26. `DaysAnswer` and `SlotsAnswer` now take `padEnd: 'md'`, so the code matches all six filled variants that keep 20 (Hotel Choose and Flights Selection are transparent).
- **Password copy:** the criteria drop their full stops, as Figma writes them («8 أحرف على الأقل»). The component card and `components.md` now describe the 2.8.2 layout: the field, then the criteria.

### Still open

- **The `_Chat Container` master still has 20 at the bottom** (`80453:2664`). 16 variants override it to 26 and 8 keep 20 (F88, Q-D38). If 26 is the rule, set it on the master and reset the overrides; the code then drops `padEnd`.
- **Password criteria:** Figma lists three, the chat checks five (F89, Q-D39).

### iOS

- The Days and Slots answer bubbles: `.padding(.bottom, 20)` (`NusukSpace.md`), like the voice, passport-photo and location-guide bubbles.

### Android

- The same two bubbles: `bottom = 20.dp`.

## 17 November 2026, 15:07 (Nusuk AI chat: bubble padding, password criteria) · NusukChat 2.8.2

**Read:** [💬 Chat UI](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR/?node-id=2402-18252) at 15:07: `_Chat Container` (80453:2664) › Body and every AI Chat Messages variant (80392:4523); ⌨️ Inputs › Input Type=Password as used in Style=Password (80607:16432). 7 sets, 54 variants and 3 masters, all still mapped.

### Changed

- **Bubble padding:** the message body is 20 top, 18 sides, 26 bottom (`Space/MD`, `Space/NR`, `Space/LR`), so every filled bubble is 6 taller (User/BG 469, Nusuk/BG 435; Text 185 and 101; Confirmation 410, Gender 321, IBAN 443, Single Choose 497 …). Voice, Passport Attach and Location Guide keep 20 at the bottom in Figma; code follows with `padEnd: 'md'`.
- **Password:** the question uses the published Input Type=Password: the 62 field, then its Strength Meter, criteria as DL Checkbox SM 8 apart, outside the field box (the variant is 347, 46 shorter). Criteria take the DL checkbox look: `surface-longing` line, `surface-illumination` when met, the error line after a failed confirm.
- Open: Figma lists three criteria (8 characters, one lowercase, one uppercase); the chat keeps five (adds a digit and a symbol without spaces). The content owner decides which set ships.

### iOS

- Bubble: `.padding(.top, 20).padding(.horizontal, 18).padding(.bottom, 26)` from `NusukSpace.md`, `.nr`, `.lr`; 20 at the bottom for voice, passport-photo and location-guide bubbles.
- Password: `VStack(spacing: 8)` with the 62 pt field and the criteria list; each criterion a Checkbox SM image with its label, announced as met or not met.

### Android

- Bubble: `PaddingValues(start = 18.dp, top = 20.dp, end = 18.dp, bottom = 26.dp)`; 20 dp at the bottom for the three exceptions.
- Password: `Column(verticalArrangement = Arrangement.spacedBy(8.dp))`, field then criteria; each criterion `Modifier.semantics { stateDescription = … }`.

## 17 November 2026, afternoon (Nusuk AI chat: user question row) · NusukChat 2.8.1

**Read:** [💬 Chat UI](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR/?node-id=2402-18252) at 14:59: `_Chat Container Master` (80451:18766) User/BG and User/Transparent, and AI Chat Messages (80392:4523) User Text, Voice, Days and Slots. 7 sets, 54 variants and 3 masters, all still mapped.

### Changed

- **User question row:** the Nusuk Bot beside the echoed question is now a 12 × 14 mark with no eyes (was the 24 × 27 bot with `_Eyes`), mirrored, 12 from the question (`Light/Notes/One`, `text-heading`). The row is 18 high, so every user bubble is 9 shorter: User/BG 463, User/Transparent 178; User Text 179, Voice 148, Days 197, Slots 240.
- **Bot:** new prop `eyes: false` draws the body alone (no eye engine, no blink). Used only in the question row; the Nusuk avatar beside bot messages keeps its eyes.
- No token, icon or component added or removed.

### iOS

- Question row: an `HStack(spacing: 12)` with the question text and the Nusuk mark at 12 × 14 pt (body shape only, no eyes, no animation), mirrored with `.scaleEffect(x: -1)` in RTL as in Figma; `.accessibilityHidden(true)` on the mark, since the text carries the meaning.

### Android

- Question row: `Row(horizontalArrangement = Arrangement.spacedBy(12.dp))` with the text and the mark at 12 × 14 dp (body only), `Modifier.graphicsLayer(scaleX = -1f)` as in Figma; `contentDescription = null` on the mark.

## 17 November 2026, afternoon (Status Handlers and Rating & CSAT) · tokens 3.10 unchanged

**Read:** [‼️ Status Handlers](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o): [Bottom Sheet](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=68392-32059), [General Bottom Sheet](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=68392-32076) and its master [`_General_Bottom_Sheet`](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=68392-32030), [Bottom Sheet BG](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=69025-3308), [NoticeBar](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=68392-31987) and [`_NoticeBar Master`](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=69240-4184), [NoticeBar Location](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=69678-3983), [`_Alert`](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=68759-3359) (System Update), [Empty Status](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=68392-32096) and [`_Empty Status Master`](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=68392-32105), [Reason Selection](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=68392-32655), [Section Error](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=68545-4963). [⭐️ Rating & CSAT](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl): [Rating Bar](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76392-4805), [`_Star`](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76392-4828), [Ratings](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76479-1128), [Product Review Card](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76404-3197), [Total Review Card](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76427-1177), [Customer Feedback Bottom Sheet](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76404-3106). Publish status of every set; every layer's size, padding, fill, text style and effect; screenshots of each set.

### Changed

- **StatusSheet** (rebuilt): the sheet is 8 from the screen edges with radius 42 / 54, `glass-full` and Shadow/SM as drawn, over Overlay/Soft (was the 50% backdrop). Content 32 / 18 / 48, gap 26; the grabber sits over the top padding. Icon: 72 circle, 38 glyph (`alert-01`; `information-circle` for Information; code `checkmark-circle-02` for Success, F79); Brand is `alerts-surface-gold` / `alerts-icons-gold`. Title `headline-1-regular` (was Headline 2), description `body-2-light` in `text-content` (was Body 2 Regular in `text-subtle`). Buttons: Primary MD over Ghost MD, 4 apart, as wide as their labels (were Primary and Secondary LR, full width). **Visual change.** New props: `image` (Status Image), `chip`, `instruction` (Settings Note), `children` (Additional Content), `terms`, `previous` (Prev. Step), `fate`, `secondaryFate`, `primaryIcon`, `force`, `topAction`, and `template` for 15 General Bottom Sheet types with their copy (`subject` fills the name or service).
- **General Bottom Sheet in Figma:** Force Update and Payment session expired are new; Session Timeout and Complete Profile are gone. The templates follow the Button card's Fate rule and Brand for permissions where Figma differs (F76, F77), and the house rules in the copy (F78).
- **BottomSheet:** `topAction` (Grabber, Arrow with `arrow`, Static) and `overlay="soft"`; the grabber is 5 from the top of its 26 band (was centred).
- **NoticeBar:** `action` (Ghost XS), `onClose` (19 `multiplication-sign`), `description`, `iconName`, `hug` (NoticeBar Location). Each colour has Figma's glyph (Info `information-circle`, Alert `spam`, Error `alert-02`, Success `tick-double-02`, Default `alert-circle`); description in `alerts-icons-reject`, 26 in; Shadow/XS as drawn.
- **Alert:** `stacked` (Type=System Update): the 24 glyph above the heading.
- **EmptyState** (rebuilt): full page title `headline-1-regular` and description `body-2-light` in `text-content` (were Headline 2 and Body 2 Regular in `text-note`), the glyph 38 in the 68 circle, Primary MD over Ghost MD (`secondary`); `location="list"`: a white card (radius 22, padding 26 / 18), the 24 glyph or the 84 × 98 artwork at the start, Headline 2 and Notes 1 Light, Primary SM beside Ghost SM. **Visual change.**
- **RatingBar** (rebuilt): solid stars (Hugeicons `star`, Solid) in `icons-longing` on `surface-03-pearl` (were outlines in Illumination and Mist, 14 with 2 gaps), touching, 16 / 20 / 24; half stars fill from the reading start (Figma `Half/RTL` in Arabic). `variant` `standard`, `mini`, `box` (Ratings), `count` with Arabic plural forms («234 تقييمًا»), `onChange` makes a 1–5 input with 48 targets (F81). **Visual change.**
- **CustomerFeedback:** `scale="stars"` is the Customer Feedback Bottom Sheet (the question first, then the comments; Q-D35).
- **New cards:** SectionError (Section Error), ReasonSelection (Reason Selection), ReviewCard (Product Review Card), ReviewSummary (Total Review Card).
- **Icons:** `alert-01`, `information-circle`, `file-not-found`, `no-internet`, `notification-square`, `cancel-circle-half-dot`, `settings-02`, `credit-card`, `wallet-01`, `multiplication-sign`, `arrow-up-01`, `package-open`, `star-solid`.
- **Patterns and templates:** the contracts name the new cards: cancellation (the reason space is ReasonSelection; the confirmation is StatusSheet `template` refund or wallet-refund), payment (payment-failed, and payment-expired when a hold runs out), address-selection (location, then location-settings), pass-sheet and pass-viewer (SectionError when the pass can't load), request-tracking (CustomerFeedback). Composition: a section that fails to load shows SectionError in its place (M9P rule 7, `patterns/index.json`, `14-templates-and-patterns.md`). A reviews space for item-details is a question, not an edit (Q-D37).
- **DESIGN.md 3.3:** M9 inventory and the Fate rule; M9P rule 7.
- **Skill and downloads:** the skill zip holds fewer than 200 files (claude.ai refuses more): the component cards, the chat cards and the migrations travel as one file each. The guide's downloads are three packages, for developers, for designers and everything, each on Google Drive and on GitHub ([ByMoha/NusukDL](https://github.com/ByMoha/NusukDL), team access), which also holds the full DL tree.
- **Pattern table:** the "Used by" column of *Templates and patterns* is now written from `patterns/index.json`, which is derived from the contracts, and a release stops on any `contract › space` that does not exist. The column still had `commitment-state`, `featured` and `categories` from before the 11 November recheck, and CardsList in `service-landing › item-rows`; the contracts were right.
- **Chat lane:** NusukChat 2.8.0, which the chat lane published to `chat/` on 17 November (entry below), is merged into this release: DESIGN.md M9C, the skill's §10 and `reference/chat/`, the three packages and the guide carry it. **Breaking for chat code:** SelCard's `radio` prop is gone.

### Still open

F76–F87 (with F56–F65 from 16 November); questions Q-D33 (Fate and status in General Bottom Sheet), Q-D34 (Force Update and the removed types), Q-D35 (the star feedback sheet), Q-D36 (rating rows in Arabic), Q-D37 (a reviews space in item-details).

The design system page's own `tokens.css` is rebuilt by the page only when someone saves an edit there, so it still has the values from before tokens 3.7 and lacks 28 tokens that `bundle.css` uses (`control-*`, `glass-*`, `blur-frost`, `shadow-os`): on that page the Checkbox, Radio, Switch and Glass previews draw without them. The downloads, the guide and the skill carry the `tokens.css` compiled from `tokens.json` 3.10.

### iOS

- **CommonSheetView:** follow the StatusSheet spec above (title Headline 1 Regular, Body 2 Light, Primary MD + Ghost MD hugging, 72 / 38 icon, padding 32 / 18 / 48 with gap 26, Overlay/Soft at 12%). Fate only on Delete and the cancellations (NH28).
- **NoticeBar (Toast):** add the Ghost XS action, the 19 close and the description; NoticeBar Location is a hugging bar at the top of the screen.
- **Ratings:** draw the star as an `Image` of the solid glyph in `surfaceLonging` over `surface03Pearl`; a half star masks the leading half (`.mask(alignment: .leading)`, mirrored by the layout direction). The input is five `Button`s with `.accessibilityValue` «n من 5» and 48 pt hit areas (`.contentShape`).
- **New views to build:** SectionError, ReasonSelection (radio rows as cards; «أسباب أخرى» opens a `TextEditor`), ReviewCard, ReviewSummary.

### Android

- **Status sheets:** `ModalBottomSheet` with `scrimColor = overlaySoft` (12%), `RoundedCornerShape(topStart = 42.dp, topEnd = 42.dp, bottomStart = 54.dp, bottomEnd = 54.dp)` inside an 8 dp inset; buttons `wrapContentWidth()`, Primary MD then Ghost MD, 4 dp apart.
- **Ratings:** `Icon` of the solid star tinted `surfaceLonging` / `surface03Pearl`; a half star clips with `Modifier.drawWithContent { clipRect(right = size.width / 2) }`, mirrored when `LocalLayoutDirection` is Rtl. The input: five `IconButton`s (48 dp) with `Modifier.semantics { stateDescription = "n من 5" }` in a `selectableGroup()`.
- **Plurals:** «234 تقييمًا» with `pluralStringResource` (Arabic zero, one, two, few, many, other).
- **New composables:** SectionError, ReasonSelection, ReviewCard, ReviewSummary.

## 17 November 2026 (Golf Carts flow read against the template contracts) · DESIGN.md 3.2 (unchanged) · tokens 3.10 (unchanged)

**Figma file:** [🚙 Golf Carts](https://www.figma.com/design/s0G2Gga52Tz5GcZayR3jd9/🚙-Golf-Carts?node-id=86028-13834). Nothing in Figma was edited; this release logs a flow read against the existing template contracts, the same exercise that produced TC0–TC16 on 11 November.

Read against `item-details`, `date-slot`, `payment`, `pass-sheet`, `booking-details` and `requests-list`. The date-slot step, the booking page, Confirm and pay's own content and the requests list read clean; five findings are logged as TC17–TC21.

### Changed

- **`10-known-issues.md`.** New section *Golf Carts flow read against the template contracts*, TC17–TC21, continuing the 11 November table with its Figma reference. No contract, component or token changed; each line is an open question for the owning team, same status as TC0–TC16.

### iOS and Android

- **Not applicable.** No token, component or native constant changed; this release touches known-issues documentation only.

### Check before you merge

- TC17–TC21 are logged, not fixed, per the 11 November convention. `templates/contracts/*.json`, `templates/index.json` and `patterns/index.json` are all untouched by this release.

## 17 November 2026 (Nusuk AI chat on DL 3.10; chat joins the DL skill) · NusukChat 2.8.0

**Read:** [💬 Chat UI](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR/?node-id=2402-18252) (7 sets, 54 variants, 3 masters, unchanged and all mapped) and the library sets it uses: [📻 Switches, Checkbox and Radio › Select Card](https://www.figma.com/design/zhcTb4a0XbF3YeYF9XI6zw?node-id=70416-652), Chips › Size=LR, [⚙️ Foundation › Glass BG](https://www.figma.com/design/avzbRTP9CgpbbO8NgU5Ymo?node-id=65346-1296) and Shadows › OS as the AI Tab Bar uses them.

### Changed

- **SelCard** (GenderField, BorderNumber, PassportAttach, LocationGuide) follows DL 3.10 SelectCard: radius 14, Active white + Ivory line + `shadow-os`, title 14 `text-content` over description 16 `text-heading`, icon alone in the top row. New props `desc` and `disabled`; a group is a `radiogroup` of `role=radio` cards. **Breaking:** the `radio` prop and radio dot are gone (Figma has none).
- **Chips** (suggestions): padding `chip-padding-lr` (14) on the content side and `chip-padding-icon-lr` (12) on the icon side; was 18 / 12.
- **TabBar** (AI Tab Bar): the input pill and round send and record buttons are Glass BG (Default, Glass On) with Shadows › OS: `glass-fill`, `glass-rim`, `shadow-os`, `blur(blur-frost / 2)`. The Pearl border is gone.
- **Chat lane loads DL 3.10** bundle and tokens; Alert, Button glass internals and Chip changes come through the bundle. No new token; 0 raw values (audit).
- **Skill:** the `nusuk-design-language` skill gains a chat row in its module table and §10 *The Nusuk AI chat*; `reference/chat/` now has a usage README and `components.md` (the 41 exports with Figma nodes and DL parents). DESIGN.md M9C records the round.

### iOS

- Select Card: `RoundedRectangle(cornerRadius: 14)`, white fill, 1 pt `surface02Ivory` stroke and the three OS shadows; selected `surfaceShade5` with a 1 pt `surfaceIllumination` stroke. Announce a gender or number-type group as radio buttons (`.accessibilityAddTraits(.isSelected)` on the chosen card).
- AI Tab Bar input: system Liquid Glass (`.glassEffect(.regular, in: Capsule())`) per the 17 November glass entry; no stroke.

### Android

- Select Card: `RoundedCornerShape(14.dp)`, white, 1 dp Ivory border and the OS drop shadows; group with `Modifier.selectableGroup()` and `Modifier.selectable(role = Role.RadioButton)`.
- AI Tab Bar input: Glass=Off recipe from the 17 November glass entry (Haze about 3 dp for Figma 6, `glass-fill`, OS shadows); no border.

## 17 November 2026 (Glass BG as Figma builds it; brand guidelines, November edition) · tokens 3.10

**Read:** [⚙️ Foundation › Glass BG](https://www.figma.com/design/avzbRTP9CgpbbO8NgU5Ymo?node-id=65346-1296) (12 variants) and [`_Glass BG Master`](https://www.figma.com/design/avzbRTP9CgpbbO8NgU5Ymo?node-id=65640-511), every layer, fill and effect; every Glass BG instance and the layers it hides in [🧭 Navigation](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw), [🎹 Tabs](https://www.figma.com/design/t4vGzLmqSgIwWuQPrsRyFY), [🃏 Cards](https://www.figma.com/design/mg7egvNbr2ciMP04Ig2XDl), 🕹️ Buttons and [🏠 Landing Experience V2](https://www.figma.com/design/9qmiMkJqcEMFY8vbxhcP6r); the menu in [🔎 Menu & Search](https://www.figma.com/design/UjJF6sOV5ZGK4X6HuxsQ3g/?node-id=7399-21005) as the reference render. Brand: *Nusuk Brand Guidelines*, Ver 1.0, edition of November 2026 (PDF, 100 pages).

### Changed

- **Glass engine** (`.nk-glass`): rebuilt from Glass BG's four layers. Gone: the invented white 62% → 34% fill, the white outline and `saturate(1.4)`. Now: OS shadows (`shadow-os`), the Default Fill radial (`glass-fill`), frost `blur(3px)` (Figma 6) and the Glass Effect rims (`glass-rim`). **Visual change** on every floating control.
- **Each component keeps the layers its Figma instance keeps (`kind`):** `control` (icon blocks, the Landings logo, Wallet, DatePill, BookingPill, Featured Header buttons: shadows + glass with a white sheen, no fill); `field` (SearchBar, Top Tabs, bottom-bar fields, the standalone and current tab); `bar` (the Primary bottom bar: shadows + glass, no fill); `flat` (Secondary Pages / Tabs track: Ivory, no glass); `card` (CategoryTile and `.nk-gsurf`: white + `Glass/Full`).
- **GlassBG** (new card, Foundations): the 12 variants (`mode`, `dark`, `glass`) with the layer switches (`shadows`, `fill`, `effect`, `sheen`, `activeFill`) and the recipes (`kind`). Highlighted and Active draw the Active Fill.
- **CategoryTile:** the see-through surface that drew a white halo on the menu is now solid white + `Glass/Full` (F75).
- **Glass Off (Android):** `glass={false}` on Toolbar, BottomNav, IconBlock, SearchBar, or `data-glass="off"` on any ancestor: blur 5 px (Figma 10), `glass-fill-off`, `glass-android` (F74).
- **Blur values:** Figma radii are halved in CSS (F73): Button `glass` 5 px (was 10), Media Card details and Nudge 1 px (was 2).
- **Dark themes:** toolbar controls and bottom bars take Dark=On (Ink radial, dark rim).
- **Reduce Transparency:** `prefers-reduced-transparency: reduce`, and browsers without `backdrop-filter`, draw an opaque fill.
- **Tokens 3.10:** new `shadow-os`, `glass-rim`, `glass-rim-dark`, `blur-frost` (6), and a `gradient` group (`glass-fill`, `glass-fill-dark`, `glass-fill-off`, `glass-fill-off-dark`, `glass-sheen`). No existing value changed; `blur-*` usage notes now say CSS takes half.
- **Brand:** `04-brand.md` follows the November edition: story and personality, sound characteristics, logo minimum sizes (25 px / 70 px) and placement, colour specs with RGB and CMYK, colour usage, six scenarios (Scenario 6 sets the data palette), the Arabic type hierarchy, the 24-subject illustration library and AI prompt, and a new Art direction chapter (5% margin, Nusuk, Makkah and Madinah frames, rules, social feed). 65 guideline pages refreshed or added in the design system's assets (Brand, Illustration, new Art and Applications groups). DESIGN.md 3.2 (M7, M8 › Glass BG, M9, M11). In Arabic the guide now calls the Logistical mode «عملي», the guidelines' own term (p. 12), and the five traits read «مضياف وخدوم · متعاطف وراعٍ · مرشد ومُطّلع · حكيم ودقيق · إيماني ووقور».
- **🔎 Menu & Search prototype:** rebuilt on this release; service icons use the Menu Icon Button's Ivory gradient.

### Still open

F66–F75, BR1–BR3; questions Q-D29 (Android controls on Glass=Off) and Q-D30 (logo size and container in the toolbar).

### iOS

- **Glass=On is the system Liquid Glass:** `.glassEffect(.regular, in: Capsule())`, neighbours in a `GlassEffectContainer`; Active `.regular.tint(surfaceLonging)`. Do not rebuild Figma's GLASS numbers or the web rims. `field` controls may lay the white 10% → 50% radial under the content; `control` controls take the glass alone.
- **iOS 18–25:** `.background(.ultraThinMaterial, in: Capsule())`, the Default Fill radial, then the three OS shadows (`.shadow` at about half the Figma blur: radius 1, x ±2; radius 0.5).
- **Tiles:** white `RoundedRectangle(cornerRadius: 18)` with the `Glass/Full` shadows; no material.
- **Reduce Transparency:** honour `accessibilityReduceTransparency` with an opaque fill.

### Android

- **Glass=Off, exact:** Haze (`hazeSource` / `hazeEffect`, about 5 dp for Figma blur 10; it uses `RenderEffect` on Android 12+), then `glass-fill-off` (`glass-fill-off-dark`) as a radial `Brush` from the top centre (radii 113.4% × 50%), then `Modifier.innerShadow` 0 5 10 10 Ink 5%, then three `Modifier.dropShadow` (−2 0 2, 2 0 2, 0 0 1 spread 0.5, Graphite 5%). Before Android 12, the fill over white at 85%.
- **Controls:** draw the Glass=Off fill on toolbar controls until Q-D29 is answered.
- **Tiles:** `Surface(color = White, shape = RoundedCornerShape(18.dp))` with the `Glass/Full` shadows.

## 16 November 2026, evening (CSAT and NPS) · tokens 3.9 unchanged

**Read:** [⭐️ Rating & CSAT](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl): every set, publish status and the change log; [Customer Feedback](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76392-4735) (unpublished), [Customer Feedback Emojis](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76392-4837), [Smiles](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76645-2305) (new), [Customer Feedback_Mobile](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76392-4868), [NPS Survey](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76591-3962).

### Changed

- **FeedbackEmojis** ([Customer Feedback Emojis](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76392-4837) on [Smiles](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76645-2305)): rebuilt. 59 circles in the Quran palette with the Smiles mouths; the others fade to 40% after a pick and the picked level shows its name. New `onChange`, `labels`, `showLabel`, `size`. **Visual breaking change:** the Ivory tiles with line faces are gone.
- **NpsScale** (new, from Customer Feedback › Recommendation): 1–10 circles in the error, warning and success surfaces with end labels; `from={0}` gives the standard 0–10 scale.
- **CustomerFeedback** (new, [Customer Feedback](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76392-4735) + [Customer Feedback_Mobile](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76392-4868) + [NPS Survey](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76591-3962)): header with service icon and emoji, step chip, CSAT, optional NPS, reasons and comments after a low score, Primary disabled until a pick, «التالي» / «شارك تقييمك», Ghost «ذكرني لاحقًا».
- **Copy in code (Figma differs):** «1 من 3» (F56); Arabic questions instead of English placeholders (F58); «راضٍ» spellings (F61).

### Still open

F56–F65; questions Q-D25 (0–10 scale), Q-D26 (picked number), Q-D27 (question and comments copy), Q-D28 (publish Customer Feedback and fix the booleans).

### iOS

- **Faces:** five 59 pt `Circle`s in `quranCrimson`, `quranCrimsonShade`, `quranSaffronShade`, `quranMint`, `quranEmerald`; mouth a stroked `Path` (3 pt, 3.6 pt on the two ends) in the paired colour; non-picked at `opacity(0.4)` with a 0.2 s ease; picked name `Text` under it. Use `.accessibilityElement(children: .combine)` per face with the level name, and `.isSelected` trait. Keep the row left to right (`.environment(\.layoutDirection, .leftToRight)`).
- **NPS row:** `HStack(spacing: 2)` of up to 37 pt circles, `alertsSurfaceError` 1–6, `alertsSurfaceWarning` 7–8, `alertsSurfaceSuccess` 9–10, numbers 14 `textSubtle`; picked = `surface10Ink` with white text; left to right.
- **Sheet:** present as a `.sheet` with medium and large detents; Primary disabled until a pick; «ذكرني لاحقًا» dismisses and schedules the reminder.

### Android

- **Faces:** `Box` 59 dp `CircleShape` with the Quran colours, mouth drawn in a `Canvas` (`drawArc` / `drawLine`, 3 dp, round caps); `Modifier.alpha(0.4f)` with `animateFloatAsState` for non-picked; `Modifier.selectable(role = Role.RadioButton)` inside `selectableGroup()`; force `LayoutDirection.Ltr` for the row.
- **NPS row:** `Row(horizontalArrangement = spacedBy(2.dp))`, weighted 37 dp max circles, the same three alert surfaces; picked `SurfaceInk` with white text.
- **Sheet:** `ModalBottomSheet`; Primary `enabled = value != null`; reasons as cards with `Checkbox` (MD) at the end; comments `OutlinedTextField` with min 4 lines.

## 16 November 2026 (bottom bar, inputs, select card) · tokens 3.9 unchanged

**Read:** [🧭 Navigation](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw) (`_BottomTab master`, `_Progress Bar`, all published), [⌨️ Inputs](https://www.figma.com/design/DATayAnynnSQqdJQLAi7DR) (File Uploader, `_Uploader_Master`, `_Input_Master`, Error Messages Content) and [📻 Selections & Switches](https://www.figma.com/design/zhcTb4a0XbF3YeYF9XI6zw) (Select Card).

### Changed

- **FileUploader** ([⌨️ Inputs › File Uploader](https://www.figma.com/design/DATayAnynnSQqdJQLAi7DR)): rebuilt to the 8 Figma variants. New `status` (default, error, disabled); 78 high, radius 18, solid Pearl line, Secondary XS icon buttons (`upload-04`, `view`, `delete-03`), `loading-03` spinner, Arabic defaults, file-types Hint. **Breaking for styling only:** the dashed line and the progress bar are gone; `progress` is now read out on the spinner.
- **SelectCard** ([📻 Select Card](https://www.figma.com/design/zhcTb4a0XbF3YeYF9XI6zw)): radius 14; Active white + Ivory line + OS shadow; Disabled Ivory + Pearl line at full opacity; title 14 `text-content`, description 16 `text-heading` (Q-D02 answered *keep it*, F17 closed).
- **TabBar `actions`** ([🧭 `_BottomTab master`](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw)): `text` slot, `terms` line with a link, `side` icon button beside the primary, `onPrimary` / `onSecondary`.
- **Toolbar `process`** ([🧭 `_Progress Bar`](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw)): 90 × 20, straight 3 px Pearl track, wavy 3 px Longing active part.
- **Icons:** `upload-04` added (152).

### Still open

F47 (🏖️ Travel only), F52 (publish Error Messages Content), F53 (no shadow token for Select Card), F54 (spelling), F55 (TextField Optional, Partner and password strength).

### iOS

- **File uploader:** 78 pt field, 18 pt continuous corners, 1 pt Pearl stroke (`NusukTokens.surface03Pearl`); error = `alertsIconsError` stroke and `alertsTextError` label plus the error hint row; disabled = `inputsSurfaceDisabled`, Mist stroke, no delete. Icon buttons 42 × 30 capsules (Secondary XS); delete uses the Fate colour. Keep `fileSize` in an LTR `Text` inside the RTL row.
- **Select card:** `RoundedRectangle(cornerRadius: 14, style: .continuous)`; shadows `(x: -2, blur: 2, 5%)` and `(x: 2, blur: 2, 5%)`; title 14 `textContent`, description 16 `textHeading`. No opacity on Disabled.
- **Bottom bar actions:** optional caption or terms `Text` with an `AttributedString` link above an `HStack` of the 74 × 48 side button and the primary (fills).
- **Process progress:** 90 × 20 frame; a 3 pt straight capsule track and a sine-wave `Shape` stroked 3 pt in `surfaceLonging`, masked to the progress width from the leading edge.

### Android

- **File uploader:** 78 dp `Row`, `RoundedCornerShape(18.dp)`, 1 dp Pearl border; error and disabled colours as above; 42 × 30 dp icon buttons; `fileSize` with `TextDirection.Ltr`.
- **Select card:** `RoundedCornerShape(14.dp)`, a 1 dp Ivory border, elevation-free soft shadow (draw with `Modifier.drawBehind` or `shadow(2.dp, ambientColor = Black 5%)`); type 14 / 16 as above.
- **Bottom bar actions:** `Text` with a `LinkAnnotation` for the terms; `Row` of a 74 × 48 dp side button and a weighted primary.
- **Process progress:** `Canvas` 90 × 20 dp: straight 3 dp track, a `Path` sine wave stroked 3 dp in `SurfaceLonging`, clipped to the progress width from the start edge (mirror for RTL).

## 15 November 2026, evening (DL Manager's update of nine files) · tokens 3.9

**Read:** every set, variant property, publish status and local variable in [🧭 Navigation](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw), [📻 Selections & Switches](https://www.figma.com/design/zhcTb4a0XbF3YeYF9XI6zw), [⬇️ Dropdown list](https://www.figma.com/design/wLDgE56pPpJnaZ3eZOjHco), [🎹 Tabs](https://www.figma.com/design/t4vGzLmqSgIwWuQPrsRyFY), [🍟 Chips](https://www.figma.com/design/VVGHy0fAHuPqL6dhBD5Ai6), [🃏 Cards](https://www.figma.com/design/mg7egvNbr2ciMP04Ig2XDl), [🕹️ Buttons](https://www.figma.com/design/AXEkdklBHSQDssRmOFMTve), [🏖️ Travel](https://www.figma.com/design/ozi4A2gUbVXbzbUJ3MF4uU) and [📅 Date & Time](https://www.figma.com/design/A7Jna80Khqc6WMQicRfLwU), compared with the scan of 14 November; then each changed or drifted component measured against the code and rendered side by side. Read-only: nothing was edited in Figma. **🧭 Navigation and 🏖️ Travel have unpublished edits** (F47); the other seven are published.

### Changed

- **Chip side padding** follows [🍟 Chips › `_Chips Setup`](https://www.figma.com/design/VVGHy0fAHuPqL6dhBD5Ai6): 8 / 10 / 12 / 14, icon side 6 / 8 / 10 / 12 (were 12 / 14 / 14 / 16 and 10 / 12 / 12 / 14). Heights, text, icons and gaps unchanged. Tokens 3.9: `chip-padding-*`, `chip-padding-icon-*`.
- **HeaderTabs** ([🎹 Tabs › Header Tabs](https://www.figma.com/design/t4vGzLmqSgIwWuQPrsRyFY?node-id=68411-2880)): the chosen tab is a white pill with `text-heading` and `shadow-xs` (was Ink with white text). `background={false}` is now the bare track; the glass toolbar tabs are `light` (F48).
- **DayTab, TimeSlot, PrayCard, InfoTile** ([📅 Date & Time](https://www.figma.com/design/A7Jna80Khqc6WMQicRfLwU)) rebuilt from the published file: weekday over date with a corner icon and an availability bar; the ticket-shaped slot with markers; the prayer card's men's and women's icons; the info tile's icon and unit. New props: `availability`, `markers`, `period`, `gender`, `iconName`, `unit` (F49).
- **QRCodeStatus** ([🏖️ Travel › QR Code Status](https://www.figma.com/design/ozi4A2gUbVXbzbUJ3MF4uU?node-id=70481-6502), unpublished): 200 × 200, radius 14, logo in the centre; every other state blurs the whole code and shows a chip («مستخدمة»، «انتهت»، «مُلغاة») or the «تحديث» button (`onRetry`).
- **Toolbar** ([🧭 Navigation › Toolbar](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw?node-id=68392-24950), unpublished): new type `Secondary Pages / Full Search` (back, search and one action in one row); `Secondary Pages / Search` now draws its title row over a full-width search row (it rendered as one row). Default greeting «مرحبا، أحمد» (Arabic comma, N21).
- **BottomNav** `screen="inner-pages"` ([🧭 Navigation › Tab Bar › Inner Pages](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw?node-id=68392-25296), unpublished): four icon actions on a 40 glass pill and the Nusuk AI circle. The old TabBar drops its bar shadow (N7). `Habits` left Figma; `habits` renders for one more release.
- **OptionCard** ([🃏 Cards › Option Cards](https://www.figma.com/design/mg7egvNbr2ciMP04Ig2XDl?node-id=68435-974)): new `simple-list`, `lr-icon` and `2-actions-on`. **`lr-icon` changes meaning:** it is now the flag tile without an action, as Figma names it; use `lr-icon-with-action` for the old look (F50).
- **MediaCard** ([🃏 Cards › Media Cards](https://www.figma.com/design/mg7egvNbr2ciMP04Ig2XDl?node-id=70306-7276)): `outOfStock` for the two Marketplace out-of-stock types; `type: 'ad'` for ADS with a mandatory «إعلان» label (F46).
- **Icons:** 8 added (151): `zap`, `salah`, `moon-01`, `unavailable`, `sun-03`, `sunrise`, `muslim`, `exchange-01`, exported from the Figma files.

### Confirmed in Figma (closed)

- 🧭 Navigation: Direction Sheet has 4 options (N4); no Tab Bar shadow (N7); no layer bound to a missing variable (N12, N18); `_Tab` and `_BottomTab master` have Darkmode with Text/Inverse labels and a text style (N22, N15 partly); `LoggedIn` spelling (N5 partly).
- 🕹️ Buttons: Animated Forms CTA published (B5); Loading uses `loading-03` (B11); every CTA is its size's height (B13, B18); Icon Only Fate is the same width in both modes (B17). `Buttons Colors` has a third mode, Green (#5DB364 fill; label contrast still 2.6:1, B12).
- 📻 Selections & Switches, ⬇️ Dropdown list and 🃏 Cards' other sets: published and unchanged against code. Chips accepted everywhere (CH4).

### Still open

Q-D03 (`Defualt`, `State5`), Q-D10, Q-D14, B10 (no focus ring), B14, N1, N10, N17 / Q-D08, N21 in Figma, F46 (ADS label), F47 (publish Navigation and Travel). Full list: known issues F46–F51.

### iOS

- **Chips:** horizontal padding 8 / 10 / 12 / 14 pt, 6 / 8 / 10 / 12 on the icon side (`NusukTokens.chipPadding*`). This is what iOS review #17 proposed; now it is the DL (NH22).
- **HeaderTabs:** selected segment = white capsule, `textHeading`, shadow XS; do not use the Ink selection.
- **Date & Time:** DayTab VStack (weekday 12 / date 24) + corner icon overlay + 8 × 4 capsule bar; TimeSlot 54 pt with a 22 pt continuous corner and two 17 pt cut-outs (draw a `Shape` path, not overlay circles); InfoTile value 32 with a 12 pt baseline-offset unit; PrayCard gender icons 16 pt.
- **QR:** apply `.blur(radius:)` to the code only, then overlay the chip or the Primary SM button.
- **Inner pages bar:** four 44 × 38 icon buttons on one glass capsule and the 40 pt AI circle; no extra shadow.

### Android

- **Chips:** padding 8 / 10 / 12 / 14 dp, icon side 6 / 8 / 10 / 12 (`NusukTokens.ChipPadding*`), as audit F14 asked for the smaller side padding.
- **HeaderTabs:** selected tab white with a 1 dp-equivalent shadow (or flat), text `TextHeading`.
- **Date & Time:** DayTab Box with an aligned corner icon and an 8 × 4 dp rounded bar; TimeSlot `GenericShape` with two 17 dp cut-outs; InfoTile unit with `BaselineShift.Superscript`; PrayCard 16 dp gender icons.
- **QR:** `Modifier.blur()` (API 31+) on the code only; below 31 draw the code at 15% alpha behind the overlay.
- **Inner pages bar:** four 44 × 38 dp icon buttons on one glass pill and the 40 dp AI circle.

## 15 November 2026, morning (publish pass: every DL library published, every update accepted) · tokens 3.8 unchanged

**Read:** every file in the DL folder, in [Manage libraries](https://www.figma.com/design/avzbRTP9CgpbbO8NgU5Ymo) › Updates with *Show updates for all pages* on, and › This file. Done by Claude for the DL Manager. No component, variable or style was edited in this pass; the only edits were accepting library updates and publishing.

### Changed

- **Every DL library is published and every file has accepted its updates.** Five rounds were needed, because publishing 🕹️ Buttons (CTA, Special CTA, Animated Forms CTA), ⚙️ Foundation (Featured BG) and 👩🏻‍💻 Avatar changed instances in almost every other library. Published on 15 November: Buttons, Foundation, Avatar, Status Handlers, Inputs, Navigation, Cards, Notifications, Misc, Widgets, Rating & CSAT, Dropdown list, Modals & Sheets, Chat UI, Map, Travel, Payment, Media, Animation, Tracker, Market and Date & Time; 🎨 Icons, 🖼️ Visual Assets, 📻 Switches, 🎹 Tabs and 🍟 Chips needed no publish. Updates accepted in Templates & Patterns, 🕋 Hajj Theme, 📱 App Assets and Nusuk Companion.
- **Final check:** each file shows *No updates available* (all pages) and, for the libraries, *No changes*.

### Added

- `library-dependencies.json`: which DL file uses which, the publish order and the loops; the same in *Library files* › How the libraries depend on each other. Known issue F45 is closed except for the assets Figma will not publish.

### iOS

- No token or component value changed. Pull the latest library state before taking measurements: instances of CTA and Featured BG were refreshed in most files.

### Android

- No token or component value changed. As for iOS: re-read any screen you measured from Figma before 15 November, morning.

## 14–15 November 2026, night (trackers rebuilt as replicas, Alert, Icons dependency, DESIGN.md 3.1) · tokens 3.8 unchanged

**Read:** every file in the DL folder again, 14 November from 22:40, after the DL Manager published the libraries and accepted their updates (no instance is behind its library any more). Rebuilt from [🔦 Tracker](https://www.figma.com/design/nj7L8ks27djv1LmxZYFTM8/?node-id=2402-18252) (Vertical Stepper Mobile `70392:810`, Steps `70451:491`, their masters) and [‼️ Status Handlers › Alerts](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o/?node-id=68392-32017), in the default modes. Fixed in Figma: [🎨 Icons](https://www.figma.com/design/DXi3uVvGMTEdaM7vb2x6Gg). [⚙️ Foundation](https://www.figma.com/design/avzbRTP9CgpbbO8NgU5Ymo) re-read: every token still matches, light and dark.

### Changed

- **VerticalStepper is a replica of Vertical Stepper Mobile** (the code of 12 November was an approximation). Rail 20 at the start edge, 12 to the card column; the column has 8 above and below (Start none below, Last none above). Lines 18 above the point and to the end below, 1.5 `surface-06-ash`; Start hides the line below, Last the line above and sits 18 lower. Done: 20 `surface-longing` circle with a white check 8.37 × 6. Next: the 10 `icons-longing` dot. Current: no rail and a full-width card, as in Figma. Card: white, radius 18, padding 18, gap 18, shadow 0 1 2 Ink 3%; title `body-2-regular`, time `notes-2-light` (8), description `notes-1-regular` `text-note` (12), chips **Pending** MD (was gold), last update, Alert, CTAs with Primary at the start. New prop `step` ('start' | 'middle' | 'last'); by default the first item is Start and the final item Last (it used to compute nothing: every step had both lines). Known issues F33–F37.
- **Steps is a replica of Steps / `_Step Master`:** start padding and gaps 18 (were 20), label 18 / 32 (were 20 / 30); the current step's line is Slate fading to clear at 76%, the next steps' Mist fading the same way; the current icon sits on the Breathing Effect (34 × 34 at 60%, gradient `surface-illumination` → `surface-shade-5`, blur 10.9), which breathes once in 4 s to a small `surface-shade-3` glow and rests (DL-17; none under reduced motion). A step may pass `state` to override `current`. F38.
- **Alert follows Alerts again:** Primary is the neutral Default palette (`alerts-surface-default`, `alerts-icons-default`, `alerts-text-default`, icon `icons-black`), not gold; the message is `notes-1-light` in `text-heading` (was `notes-1-regular` in `text-subtle`); icons are Figma's Hugeicons (alert-circle, checkmark-circle-02, spam, alert-02); Below Buttons are a Primary SM at the start and a Ghost SM, 12 apart (was one Secondary XS). New props `icon`, `primary`, `secondary`, `onPrimary`, `onSecondary`, `onClose`; `action` still works and is the Ghost button. F39.
- **Icon `checkmark-circle-02`** is now the Stroke Standard glyph (outline), as Alerts use it; the solid glyph is `checkmark-circle-02-solid`, which DropdownItem uses. 143 icons.
- Screen readers hear «مكتملة» / «قادمة» (completed / upcoming) after each done and next step in both trackers; `NusukDL.strings` has `stepDone`, `stepNext`.

### Fixed in Figma

- **🎨 Icons no longer depends on Hugeicons Pro – V.2.** Eight variants wrapped a nested Hugeicons instance whose master uses Hugeicons' `Dark` style; the colour was overridden to Icons/Black, so nothing looked wrong, but Manage libraries kept the library and the swap to Foundation found no `Dark`. Their layers are now drawn in the file (shapes unchanged) and a Change Log section is on the Icons page: message-incoming-01 (Duotone, Rounded); pointing-left-01, pointing-left-02, pointing-right-01 (Stroke and Solid, Standard); pointing-right-02 (Solid, Standard). F40. **Publish 🎨 Icons, accept the update, then remove Hugeicons Pro.** 15 November, 00:45: the last two styles from outside Foundation are gone too. The label «story» (Nusuk Icons › Others) used `Text md/Regular` from a library the file cannot reach, which Manage libraries listed as “Missing library” with its Themes and Spacing collections; patio (Duotone, Rounded) carried the layout-grid style `Grid` from another library. Both are detached and nothing looks different. A scan of all five pages, about 265,000 layers with the hidden ones, finds no styles left, only Foundation variables, and no layer using `Dark`.

### Found (known issues F33–F45)

- Tracker: Current hides the rail (F33); Start and Last carry their lines the other way round (F34); `New/XS` is not in Foundation (F35); Last's extra 18 is bound to an older Layout collection (F36); Next uses the Current point (F37); raw clear stops and no token for the glow's noise (F38).
- 🎥 Media › Sound Player set is gone; the player is a frame inside two new screens, not published (F41). 🃏 Cards › Media Cards: `Marketplace / Grid` → `Marketplace`, new `Museum`, `_Highlight Master Component` gone (CH3 closed) (F42). 🧭 Navigation › Toolbar - Bottom - iPhone removed (F7 closed); 🏖️ Travel › Hotel Offer renamed Hotel, not published (F43). Paint styles from outside Foundation still in use (F44). Still to publish (F45).

### iOS

- **VerticalStepper:** draw the rail per the table in the component README: 20 pt column, 1.5 pt Ash lines, 18 pt top line, 4 pt spacing around the 20 pt point; Done = Longing circle + white check; Next = 10 pt Longing dot; Current without a rail. Card shadow 0/1/2 pt, Ink 3% (F35), corner radius 18 pt (continuous). Chips: Pending MD.
- **Steps:** HStack per step with 18 pt leading inset and spacing; 1 pt line with a linear gradient from the point side (`surface07Slate` or `surface04Mist`) to clear at 76%; label padding 18 / 32 pt. The glow: a 34 pt blurred ellipse at 60% opacity; animate it once (4 s, ease-in-out) unless Reduce Motion is on.
- **Alert:** Primary style is now neutral (`alertsSurfaceDefault`, `alertsIconsDefault`, `alertsTextDefault`); message in `notes1Light` / `textHeading`; buttons Primary SM + Ghost SM.

### Android

- **VerticalStepper:** a Row with a 20 dp rail Column (1.5 dp Ash lines, 18 dp top line, 4 dp spacing, 20 dp point) and a 12 dp gap; Current omits the rail. Card elevation is not used: draw the 0/1/2 dp shadow at Ink 3% or leave it flat (F35). Chips: Pending MD.
- **Steps:** each step a Column; the line is a 1 dp `Brush.horizontalGradient` from the point side to transparent at 76% (mirror it in RTL with `LayoutDirection`); label padding 18 / 32 dp. Animate the glow once over 4 s with `animateFloatAsState`, skipped when animator scale is 0.
- **Alert:** Primary uses the Default alert colours; message `Notes1Light` in `TextHeading`; Primary SM + Ghost SM buttons.

## 15 November 2026 (chat lane: Figma round, NusukChat 2.7.0) · tokens 3.8 unchanged

**Read:** the [💬 Chat UI](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR/?node-id=2402-18252) page, every set and variant (7 sets, 54 variants, 3 masters; none added or removed), and the variables in [⚙️ Foundation](https://www.figma.com/design/avzbRTP9CgpbbO8NgU5Ymo) (Colors in its three light modes, Layout › Mobile) and [🕹️ Buttons](https://www.figma.com/design/AXEkdklBHSQDssRmOFMTve) (Buttons Setup): 0 differences with tokens 3.8.

### Changed

- **FlightsSelection** (`80652:10299`): the show-all ghost button reads `عرض كافة الرحلات المتاحة` (was “عرض كافة التذاكر”).
- **SingleChoose** (`80626:36740`): each option card leads with the DL icon `alert-circle` (was `support`).
- **Booking_Ticket** (`80632:38114`): the header Nusuk Bot, `_Eyes` and the City Logo are library instances again, so the part of known issue F32 about unpublished components can close; the master is still spelled `_Booking_Ticket Matser`.

### Added

- **English labels:** `NusukChat.setLang('en' | 'ar')` and `NusukChat.lang()`. Edit answer, copy and vote labels, the typing indicator, Question defaults, the Tab Bar placeholder, limit text and button labels, and Try again switch to English; Arabic stays the default.
- **Suggestions as DL buttons:** `Chips` and `ErrorMsg` take `buttons: true` (and `kind`, primary by default) to render each suggestion as a DL Button MD with a leading arrow that follows the reading direction (`arrow-left-02` in Arabic, `arrow-right-02` in English). The Figma chip remains the default.

Files: `chat/nk-chat.js` (2.7.0), `chat/manifest.proposed.json`, `chat/cards/Chips.md`, `chat/cards/ErrorMsg.md`, `chat/migrations/2026-11-15-nusuk-chat-figma-round.json`, `migrations/2026-11-15-chat-figma-round.json`. Source: the chat gallery, Nusuk Chat UI — preview per state, v2.7.0.

### iOS

- No token or component value changed. Chat answers that offer suggestions may render them as the DL Button MD; use the leading icon slot so it mirrors with the layout direction.

### Android

- No token or component value changed. Same as iOS: leading icon, mirrored by layout direction, not by hand.

## 14 November 2026, afternoon, later (DESIGN.md 3.0.1: chat counts and version) · tokens 3.8 unchanged

**Read:** the [💬 Chat UI](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR/?node-id=2402-18252) page again: 7 sets, 54 variants, 3 masters; AI Chat Messages has 24 variants, `Style=Single Choose` among them.

### Fixed

- **DESIGN.md 3.0.1.** M9's inventory still gave the chat lane's counts of 11 November (40 exports, 22 variants of 6 DL components, 31 proposed values) while M9C gave today's. Both now read 41 exports: 4 DL, 23 variants of 7 DL components (OptionCard added, for SingleChoose), 14 new; 35 proposed values in the stylesheet and 43 in `tokens.proposed.json`, 12 of them type aliases. M9C's table of Figma sources gains the missing SingleChoose row.
- **NusukChat version.** `NusukChat.version` in `chat/nk-chat.js` and the chat gallery's header said 2.5.0 through the 12 and 14 November releases; they now read 2.6.6, the version in the chat change log, and DESIGN.md names 2.6.6.
- **Project copy of the template contracts.** `claude/template-contracts.md` held the text of 11 November, morning, from before that evening's fidelity correction of Service landing, Catalogue list and Item details. It was replaced from the current file, and the release now stages both project copies (`claude/DESIGN.md`, `claude/template-contracts.md`).
- Known issue F32 adds the Booking_Ticket master's spelling, `_Booking_Ticket Matser`.

### iOS

- No token or component value changed. If you read `NusukChat.version` to tell builds apart, expect 2.6.6.

### Android

- No token or component value changed. Same as iOS for the version.

## 14 November 2026, afternoon (chat lane links, complete downloads, questions sheet) · tokens 3.8 unchanged

**Read:** the [💬 Chat UI](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR/?node-id=2402-18252) page, every set and variant (7 sets, 54 variants, 3 masters) against the chat lane, and the files its components come from: [⌨️ Inputs](https://www.figma.com/design/DATayAnynnSQqdJQLAi7DR) › Input, [📻 Switches](https://www.figma.com/design/zhcTb4a0XbF3YeYF9XI6zw) › Select Card, [🃏 Cards](https://www.figma.com/design/mg7egvNbr2ciMP04Ig2XDl) › Logos Group, Logo Icons and City Logo, [🏖️ Travel](https://www.figma.com/design/ozi4A2gUbVXbzbUJ3MF4uU) › Flight Ticket.

### Fixed

- **Chat lane links.** MobileField reads `Style=Mobile` (renamed in Figma on 12 November; six DL files kept the old Password label). Fld, SelCard, LogosGroup and FlightTicketFull linked node ids under 💬 Chat UI that live in other files or are instance paths, so their links opened nothing. Each now names its own file and current nodes: ⌨️ Inputs › Input `68394:7766`; 📻 Switches › Select Card `70416:652`; 🃏 Cards › Logos Group `70306:7320`, Logo Icons `70306:7326`, City Logo `70306:7355`; 🏖️ Travel › Flight Ticket `70393:18670`. TabBar also links its master `80392:4168`. `manifest.proposed.json` gains `figma.library` and `updated`; the gallery's node links open the right file.
- **Chat lane type.** `nk-chat.css` set its type with `font: var(--text-body-1-light)` and ten more variables that the DL's tokens.css does not define (it ships type as classes), so with the DL's own tokens.css those lines lost their type. They now read 12 proposed aliases, `--nkc-type-*` (`chat-type-*`), each equal to its DL class (known issue F31). The chat gallery ran on a tokens.css older than 3.8 (45 theme values missing in each of the five other themes, the old `glass-full`); it now loads the DL's tokens.css. Chat audit: 0 unknown variables, 0 raw values.
- **Chat lane files in the DL** that lagged the chat team's package: `icons.proposed.json` and `tokens.proposed.json`. DESIGN.md › M9C counts: 41 exports (4 DL, 23 variants of 7 DL components, 14 new), AI Chat Messages 24 variants, 37 cards, 43 proposed values, 80 DL tokens used.
- **Coded package.** Its previews (8 November), README and start page (9 November) were never rebuilt: the README still named DESIGN.md 2.1 and tokens 3.1, and four components had no preview. All three are rebuilt every release now; the previews are the design system's cards made to open on their own.
- Dates: the two morning entries of 14 November were labelled evening and late evening.

### Added

- **Complete downloads** in the guide: the chat lane (`nusuk-dl-chat-lane.zip`), the Nusuk logos (SVG), the starter page, the change sheets and asset notes in *All documents*, and a **download index**: every download with its size and SHA-256, as a table in the guide and as `download-index.json`. The release now stops if any DL file is missing from the downloads or differs from its source, and the chat lane is rebuilt, audited and copied into `chat/` at every release.
- Known issue F32: 💬 Chat UI › Booking_Ticket uses three components that no published library holds any more (the header Nusuk Bot and `_Eyes` on all four tickets, the City Logo in its Logos Group).

### Removed

- Content questions are off the [questions sheet](https://claude.ai/artifact/X98C7uwN3N2KQ4e6GuL8Ah) for now, at the DL Manager's request: Q-D05, AI5, R8, F11 and the Arabic copy tab (the sheet's history can bring them back). L2, a stale copy of the tokens and not a content question, moved to the design team. The known issues keep the copy findings (F30 parked).

### iOS

- No token or component value changed.
- If you build the Nusuk AI chat, take the Figma links from `chat/manifest.proposed.json` again: four components now point to their own library files.
- `chat-type-*` are web aliases of the existing type styles (`body1Light` and the rest in `NusukTokens.swift`), not new sizes.

### Android

- No token or component value changed.
- Same as iOS for the chat links.
- `chat-type-*` map to the existing styles (`Body1Light` and the rest in `NusukTokens.kt`); nothing to add in Compose.

## 14 November 2026, morning, later (Arabic copy table, DL health) · tokens 3.8 unchanged

**Read for copy:** [🃏 Cards](https://www.figma.com/design/mg7egvNbr2ciMP04Ig2XDl) › Request Card Status (47) and Request Cards (12 types); [🔦 Tracker](https://www.figma.com/design/nj7L8ks27djv1LmxZYFTM8) › Steps (8 states); [💬 Chat UI](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR) › AI Chat Messages, Booking_Ticket, Nusuk Bot; [🏖️ Travel](https://www.figma.com/design/ozi4A2gUbVXbzbUJ3MF4uU) › User Group; [🛍️ Market](https://www.figma.com/design/5X9RDeo33hZFEhtjVUYr5c) › Product Item; [🧭 Navigation](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw) › Top Bar; [🛎️ Notifications](https://www.figma.com/design/WAFzcSl4nXiU0nYqNrMYx1) › LiveActivity; [🧩 Templates](https://www.figma.com/design/fIjmiUpwy5UE9KJ9aXfhrn) › Rawdah landing. Nothing was changed in Figma.

### Added

- **[DL health](https://claude.ai/artifact/ANTJvsayyQ8md1qK32vAL8):** one page that compares Figma, tokens and code value by value (3,524 values in 8 checks, 0 differ: Foundation in all six themes, the stylesheet, Swift and Kotlin token by token, status chip copy, component props), plots the 17 colour pairs measured against WCAG with today's and the proposed ratio, lists the 61 sets with unpublished edits read from all 27 component libraries at 07:58, and reads open questions and Arabic copy live from the questions sheet. Its numbers come from `health.py`, whose code travels with each file.
- **Arabic copy** tab on the [questions sheet](https://claude.ai/artifact/X98C7uwN3N2KQ4e6GuL8Ah#sheet-sht_7ts5pqkfnf.0): 97 strings, each with where it lives, what breaks the writing guide, a proposed Arabic and English line, the code key and a status for the content owner (78 to change, 19 meet the guide). The Summary tab counts them. Known issue F30.

### Changed

- **StatusChip:** `order-delivered` reads «تم التوصيل», as in Figma. Code showed «تم التوصيل في %s», which drew the raw token. DESIGN.md › M9's status table follows.
- **Strings the DL wrote** (no Figma source) follow the writing guide: the IBAN check «تحقّقنا من الآيبان» (was «تم التحقق»), the Rawdah ticket's label «عرض حجز الروضة الشريفة» (was «عرض تصريح الروضة»), the pattern samples «ماء زمزم», the deprecated `sim` preset «[اسم الشركة] - [اسم الباقة]».
- **DESIGN.md › M6:** two house rules, on statuses and steps and on counted nouns per sentence.
- Corrected: Q-X23 now reads 11 tokens changed since 3.4 (`glass-full` counts; developer page v2 and the sheet); DESIGN.md › M11 says the same; M8 no longer names a tokens version; the props check stops at a README's Parts table. Known issues F24 and Fix first 5 and 9 carry today's counts.
- Logs corrected: the decorative ✈️ left Booking_Ticket's master title only; the Train variant still overrides it (AC-85). In AI5 the chat handoff's F27 to F31 are now named as such, apart from this file's F27 to F30.

### Unchanged after checking

- Every Request Card Status text in code matches Figma except `order-delivered` (fixed). Component copy stays as Figma draws it until the content owner approves a row (R8 precedent).

### iOS

- Counted strings go in a String Catalog with plural variations (zero, one, two, few, many, other for Arabic); two values take positional arguments, `%1$@` and `%2$lld`. Test 0, 1, 2, 3, 10, 11, 99 and 100.
- Keep the date isolates in «بتاريخ ⁦%@⁩»; a reversed token («s%») in a string is a bug, not RTL display.

### Android

- Counted strings are `<plurals>` with `quantity="zero|one|two|few|many|other"`, read with `pluralStringResource(id, count, …)`; two values take `%1$s` and `%2$d`. Test 0, 1, 2, 3, 10, 11, 99 and 100.
- `%S` is not a token for Arabic copy (it uppercases); use `%s`.

## 14 November 2026, morning (UX answers, 💬 Chat UI fixes, layout modes, effect styles) · tokens 3.8

**Read:** UX's answers to the iOS review (14 November) and the Android audit (10 November, 26 answers). [⚙️ Foundation](https://www.figma.com/design/avzbRTP9CgpbbO8NgU5Ymo) › Layout and Typography re-read for their modes; [⌨️ Inputs](https://www.figma.com/design/DATayAnynnSQqdJQLAi7DR) and [📻 Switches](https://www.figma.com/design/zhcTb4a0XbF3YeYF9XI6zw) for radius; [🔦 Tracker](https://www.figma.com/design/nj7L8ks27djv1LmxZYFTM8) for the Steps mapping; text boxes and Hero scanned in [🃏 Cards](https://www.figma.com/design/mg7egvNbr2ciMP04Ig2XDl), [🎫 Widgets](https://www.figma.com/design/VMlLoRqMJLSCKW2Fl2THrS), [🛍️ Market](https://www.figma.com/design/5X9RDeo33hZFEhtjVUYr5c), [🏖️ Travel](https://www.figma.com/design/ozi4A2gUbVXbzbUJ3MF4uU), [⭐️ Rating & CSAT](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl), [🛎️ Notifications](https://www.figma.com/design/WAFzcSl4nXiU0nYqNrMYx1), [‼️ Status Handlers](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o), [⬆️ Modals & Sheets](https://www.figma.com/design/amc1XbBjs5YtztnLxoKvh6), [🧭 Navigation](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw), [🧩 Templates-Patterns](https://www.figma.com/design/fIjmiUpwy5UE9KJ9aXfhrn). **Changed in Figma by the DL team (not published):** [💬 Chat UI](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR); [⚙️ Foundation](https://www.figma.com/design/avzbRTP9CgpbbO8NgU5Ymo) (code syntax on 192 variables, a 🧪 Proposals page; no value changed). Questions: the [developer questions page](https://claude.ai/artifact/9KcxfMFYRKP3wwrn8n2NaS) (Q-X01 to Q-X27) and the [questions list](https://claude.ai/artifact/X98C7uwN3N2KQ4e6GuL8Ah) (Q-D14 to Q-D20 added).

### Changed

- **Avatar:** initials shrink to fit, keeping 4 px a side up to 42 and 8 px from 56; never clipped, never below 9 px (UX, iOS review #2). Style per size unchanged.
- **tokens.json 3.8:** the 19 spacing, dimension and button-height tokens carry `modes` (phone, tablet, wide) read from Foundation › Layout. Every effect style was checked against Foundation: `glass-full`'s inner shadow is now 2% as in `Glass/Full` (was 3%); the other 15 match.
- **Effect styles documented:** DESIGN.md › M8 lists all 16 Foundation effect styles with their values, including `Noise/*` and `Treatment/*`, which were missing (UX: they apply on iOS).
- **Native files:** new `NusukLayout` (Swift struct with `.phone`, `.tablet`, `.wide`; Kotlin data class with `Phone`, `Tablet`, `Wide` and `LocalNusukLayout`) for the 11 values that change by mode.
- **💬 Chat UI (Figma, by the DL team, not published):** 33 layer properties rebound from variables outside the DL to Foundation with the same values (Stroke › md → Border/Medium, Spacing › padding/xs → Space/XXS, Radius › xxl - full and Effects › Radius Backup/Full → Radius/Full, Global Vars › Black → Text/Heading); `Style=Pasport` renamed `Style=Passport`; the decorative ✈️ removed from the Booking_Ticket master title (the Train variant still overrides it: Arabic copy AC-85); a 14 November entry in the file's change log. The chat lane's names follow.
- **⚙️ Foundation (Figma, by the DL team, not published):** every variable in Colors, Layout and Effects (192) carries code syntax: Web `var(--token)`, iOS and Android the names in `NusukTokens.swift` and `.kt`, so Dev Mode shows the DL names. A new page, 🧪 Proposals, sets today's values beside proposed ones with their ratios (C1, C2, F16, C8, C12) and the thick border at 2.5 and 2 (Q-D20). No variable value changed; both files' change logs list the edits.
- **DESIGN.md:** M8 Hero rule and the Latin font note; spacing line corrected (xxl is 48 on tablets, 64 wide); M10 text size and the Android scale floor; M11 UX answers; M12 DL-35 (proposed), DL-36 to DL-41, TR-05. *Devices and accessibility:* text scales to 200%.

### Added

- The developer questions page (answers save to a shared record, copy, download, send). Questions Q-D14 to Q-D20 and Q-X17 to Q-X27; handoff deviations NH20 to NH26; known issues F26 to F29; Q-D21 (Light/Hero's stored font).

### Unchanged after checking

- ⌨️ Inputs `Fields` 18 and 📻 Select Card 18, both bound to Radius/MD (UX answered inputs 12: Q-D15). 🔦 Tracker node 2402:18252 is the Tracker page (`Steps`, `Vertical Stepper Mobile`), which the coded Steps and VerticalStepper follow. No library component uses Hero (F28). Every DL text style is Light or Regular.

### iOS

- Take `NusukLayout.tablet` when the horizontal size class is regular, `NusukLayout.phone` otherwise; never `.wide` (DL-39). Buttons LR 48 and XS 30 (NH01).
- Chips: `NusukChip` heights and padding (12 / 14 / 14 / 16, not 8 and 10). No SemiBold. Avatar initials: measure the string in the font and shrink to fit.
- Keep Dynamic Type on (NH24, Q-D18). Default theme Quranic Illumination; dark screens `surface.screenBk` (DL-37).
- Effects: `Glass/Full`'s inner shadow is 2%; Noise and Treatment from the M8 table (a tiled noise texture or `CIFilter.randomGenerator()`, blended as named).

### Android

- The 0.9 scale is a trade-off (TR-05): hit areas stay 48 dp, text 12 sp. Line height is 1.28 × the scaled size.
- Chips 18 / 20 / 24 / 28 (`NusukChip`). Disabled: the component's colours where Figma draws them, else 0.38; buttons 0.4 (DL-41, proposed).
- Provide `LocalNusukLayout` with `NusukLayout.Phone` today; map Medium and Expanded windows to `Tablet` and `Wide` when size classes ship.
- Effects: `Modifier.innerShadow()` at 2% for `Glass/Full`; Noise and Treatment as an AGSL shader on Android 13+ or a tiled texture (M8).

## 14 November 2026, later (full assessment: selection controls, lists, sheets, steps, widgets) · tokens 3.7 (no value changes)

**Figma files read again, set by set, against the code:** [📻 Switches, Checkbox and Radio](https://www.figma.com/design/zhcTb4a0XbF3YeYF9XI6zw), [⬇️ Dropdown list](https://www.figma.com/design/wLDgE56pPpJnaZ3eZOjHco), [🧭 Navigation](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw) (Direction Sheet, Support Bottom Sheet, Nudges), [🔦 Tracker](https://www.figma.com/design/nj7L8ks27djv1LmxZYFTM8) (Steps), [🏖️ Travel](https://www.figma.com/design/ozi4A2gUbVXbzbUJ3MF4uU) (User Group), [🎫 Widgets](https://www.figma.com/design/VMlLoRqMJLSCKW2Fl2THrS) (Start Journey), [💬 Chat UI](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR) (variant lists). The open questions are in the [questions list](https://claude.ai/artifact/X98C7uwN3N2KQ4e6GuL8Ah) (Q-D01 to Q-D13 for the design team, Q-X01 to Q-X16 for the development team, and every open known issue), with a reply column for each team.

### Changed

- **Switch, Checkbox, Radio:** follow 📻 Switches. Chosen checkbox and radio are `surface-illumination` (gold; were Ink); the empty checkbox is a 1 px `surface-longing` line; errors are a solid `alerts-surface-solid-error` (switch, radio) or a 2 px `alerts-icons-error` line (checkbox); disabled is `surface-03-pearl` (was 38% opacity); MD switch 42 × 21 with a 24 × 18 knob; the radio centre is a white rounded square (10, radius 4). New `size` prop (`sm`, `md`, `lr`) on all three. Gold and the empty states are under 3:1 (F16, Q-D01).
- **SelectCard:** Active Ivory with a 1 px Pearl line, Selected `surface-shade-5` with a 1 px gold line, Disabled content at 70%. Title 16 and description 14 kept until Q-D02 is answered (F17).
- **DropdownItem:** row padding 12, gap 18 (was 12), details `notes-2-light` 4 under the title (was `notes-2-regular`), avatar SM 42 (was 56), flag 20 × 15, icon 20. Radio and Checkbox rows are now the radio or checkbox themselves and show a 24 px solid check (`checkmark-circle-02`, `checkmark-square-02`) in `icons-longing` when chosen; Toggle uses the MD Switch; Download shows `download-04` (F19, Q-D04).
- **Sheets (BottomSheet, DirectionSheet, StatusSheet):** corners 42 at the top and 54 (`radius-ios`) at the bottom (were 32), `glass-full` instead of `shadow-05`. DirectionSheet content 32 / 26 / 48 (sides were 18); its options run without gaps, 4 above and below (F23).
- **Steps:** rebuilt from 🔦 Tracker › Steps: start-aligned columns, a 20 px point (Ink dot, the current stage icon over a gold glow, or a Smoke ring), a 1 px line toward the next step (Slate behind, fading Mist ahead), `notes-1-regular` labels with Next at 40%, details under the current step. `steps` items may be `{ title, details, icon }` (F20).
- **StartJourney:** rebuilt from 🎫 Widgets › Start Journey: `size` sm (the card, «ابدأ رحلة» and the journey word), xs (three tiles) and lr (section title over three cards); White to `surface-white-shine`, `shadow-xs`, radius 18. The Ink card is gone; `subtitle` and `iconName` are ignored (F21, Q-D06).
- **AvatarGroup:** `preset` 'travel' and 'travel-active' (🏖️ Travel › User Group, Active Off and On), `sizes`, `caption` (F22, Q-D07).

### Added

- Icons (142 in all): `checkmark-circle-02`, `checkmark-square-02`, `download-04`, and the order-stage icons `package-search`, `package-receive`, `delivery-truck-02`, `package-out-of-stock`, `delivery-view-01`, `money-exchange-01` (`package-moving` and `safe-delivery-01` re-exported). Strings: download, startJourney, newJourney, umrah, hajj, rawdah (Arabic and English).
- Known issues F16 to F25; the questions list for the design and development teams; one Downloads section in the guide for every file.

### Unchanged after checking

- Nudge (🧭 Navigation › Nudges): sizes, padding, radius 34, glass and glow match; Off is still the scaled-down On (N17, Q-D08). Tokens: `tokens.json` = `tokens.css` (0 of 291 differ) = native colour literals (315 of 315).

### iOS

- Selection controls (`NusukColors`): chosen fill `surface.illumination`, empty checkbox border `surface.longing` 1 pt, error radio and switch `alerts.surfaceSolidError`, error checkbox border `alerts.iconsError` 2 pt, disabled `surface.pearl03`; sizes in `NusukControl`. Keep a 44 pt touch area around 18 pt boxes.
- Sheets: top corners `NusukRadius.xxl` (42), bottom `NusukRadius.ios` (54), the glass treatment instead of a drop shadow (M8 recipes).
- Lists (DropdownItem): make the whole row the control (`accessibilityAddTraits(.isButton)` and `.isSelected`), the check icon decorative.
- Steps and StartJourney: rebuild from the cards (section 3). Steps scrolls horizontally when wider than the screen.

### Android

- Selection controls: the same colours from `NusukTokens.kt`; `Modifier.minimumInteractiveComponentSize()` on 18 dp boxes; `Role.Checkbox` or `Role.RadioButton` on the whole list row with `Modifier.selectable` or `toggleable`.
- Sheets: `RoundedCornerShape(topStart = 42.dp, topEnd = 42.dp, bottomStart = 54.dp, bottomEnd = 54.dp)` inside the 8 dp inset; the glass recipe instead of elevation.
- Steps and StartJourney: rebuild from the cards; Steps in a `LazyRow`.

## 14 November 2026 (Figma round: foundations, buttons, navigation, inputs, chips, cards) · DESIGN.md 3.0 · tokens 3.7

**Figma files read:** every file in the DL folder. In depth: [⚙️ Foundation](https://www.figma.com/design/avzbRTP9CgpbbO8NgU5Ymo), [🕹️ Buttons](https://www.figma.com/design/AXEkdklBHSQDssRmOFMTve), [🧭 Navigation](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw), [⌨️ Inputs](https://www.figma.com/design/DATayAnynnSQqdJQLAi7DR), [🍟 Chips](https://www.figma.com/design/VVGHy0fAHuPqL6dhBD5Ai6), [🃏 Cards](https://www.figma.com/design/mg7egvNbr2ciMP04Ig2XDl). Library updates accepted in 17 files (F13). [✨ Nusuk Brand](https://www.figma.com/design/qREyR7ihKhfJEQzZQctgLE) could not be read (F15).

### Changed

- **Tokens 3.7:** `button-fate-surface` #FF41361A in light themes (was #FFF2F1; Figma `Alerts/Surface/Solid Error` at 10%) and #FEF3F21A in dark themes; `button-secondary-surface-on-dark` #303336B3 (Slate at 70%; was opaque). Every other value unchanged.
- **Button:** every case of `_Button_Master Of Masters` is reachable. New `icon="both"` with `trailingIconName`, `price`, `mark` (`apple-pay`, `nafath`, `absher`) and `glass`; Green Secondary, Fate Ghost on dark and Green Ghost on dark compose from the button tokens (F1, DL-32).
- **BottomNav:** follows Tab Bar › Landing, Travel, Content, Market/Cart + (the Buttom Navigation set is gone, F6): bar 95 high, gap 20, white haze; current tab in `icons-illumination` with a `text-link` label and two glows; new tab sets; `screen="travel"` (`journey` still works); Primary/Small 48 high.
- **Toolbar:** 22 types. `Primary Pages / URLs` (was Tabs; buttons 119 wide) and new `Primary Pages / Title`; `Landings / Search` 204 high (F9).
- **TextField:** new `multi-select` and `avatar` types; Error and Disabled keep the default fill, Disabled gets the `surface-04-mist` border (F10).
- **StatusChip:** 47 statuses with `approved` (مقبول). **HintWidget:** `direction="logo"` (Figma Direction4, F5).

### Added

- Token `glass-android` (effect style `Glass/Andriod Blur`, F3). Icons: `search-list-01`, `car-02`, `infinity-01`, `play-list`, `book-open-02` (each with `-solid`), `airplane-02-solid`, `document-validation` (133 in all).
- Developer docs: *iOS and Android handoff* (sections 2.1, 2.3, 2.4, 3; NH13 to NH15) and DESIGN.md › M11 carry the 14 November values. The Nusuk visual system (illustration rules) is in the skill as `reference/visual-system.md` and in *Brand*; its scene guide, colour procedure, manifest and 18 reference images are in `reference/visual-system/` (images in `nusuk-design-language-with-artworks.zip`). Icon and StatusChip cards list the new names.
- DESIGN.md 3.0: M6 › House rules, M7 › painting language, M10 › Field conditions and feedback timing, M13 › Critique and review protocol, DL-32 to DL-34; the skill's §9 lists the skills that work with it. Known issues F1–F15. `migrations/2026-11-14-figma-round.json`.

### Unchanged after checking

- ⚙️ Foundation variables (Layout 53, Typography 21, Motion 7, Effects 29, _Primitive Tokens 201, Colors 110) and text styles; 🍟 Chips sizes and colours (`chip-*`, F12); 🕹️ Buttons Setup (heights, padding, gap, icon sizes).

### iOS

- `NusukColors.button.fateSurface` and `button.secondarySurfaceOnDark` now carry alpha (0.10 and 0.70) in `NusukTokens.swift`. If you hard-coded #FFF2F1 for destructive buttons, switch to the constant.
- The glass fallback is the `glass-android` recipe (tokens.json; shadows are not in the native files, M8): blur 10 plus an inner shadow 0 5, blur 10, spread 10, Ink at 5%. On iOS 26 prefer the system glass material and use the fallback only below it.
- `NusukButton`: add `.both` to the icon position, an optional `price`, `mark` (.applePay, .nafath, .absher) and `glass`. Apple Pay in the app is the system `PKPaymentButton`, not this mark.
- Bottom bar: 95 pt, current tab tint `icons-illumination`, label `text-link` (see the name map in `tokens-native.json`). The iPhone bottom toolbar in Figma (F7) is the system toolbar: don't rebuild it.

### Android

- `button.fateSurface` and `button.secondarySurfaceOnDark` carry alpha in `NusukTokens.kt` (ARGB). Glass fallback: a blur `RenderEffect` (10) on API 31+ behind a translucent fill plus the `glass-android` inner-shadow recipe; below API 31 the fill alone.
- `NusukButton`: `IconPosition.Both`, optional `price`, `mark` and `glass`; keep `Modifier.minimumInteractiveComponentSize()`.
- Bottom bar: 95 dp; current tab tint `icons-illumination`, label `text-link` at Light.

### Publish in Figma (the connector can't publish)

- **🕹️ Buttons:** Animated Forms CTA
- **⌨️ Inputs:** Input
- **🧭 Navigation:** Toolbar, Tab Bar, Direction Sheet, Support Bottom Sheet, Nudges; first publish: Toolbar - Bottom - iPhone (read F7 first)
- **🃏 Cards:** first publish: Quote Widget
- **📻 Switches:** Switch, Checkbox Icon Master, Checkbox, Select Card, Radio
- **🔽 Dropdown:** Dropdown item, List Screen, _Dropdown item list/On
- **🛍️ Market:** Product Info, Items List, eSIM Card, Categories, Product Size Options, Featured Services/Shipping, Gifting, Product Item, Order Basic Information, Shippment Tracker
- **🔔 Notifications:** first publish: LiveActivity, LiveActivity/LockScreen/Athkar
- **⭐ Rating:** first publish: Customer Feedback
- **🧩 Widgets:** Manasek, Manasek/Hajj/On, Start Journey, Start Journey Animated, Try Nusuk AI
- **🔦 Tracker:** Steps
- **💬 Chat UI:** AI Chat Messages, Booking_Ticket
- **🏖️ Travel:** Place Details, Ticket Master, Ticket Master Empty State, User Group; first publish: Hotel Offer
- **🖼️ Visual Assets:** Nusuk Visuals, Mosque, Nusuk Illustrations
- **🤝 Nusuk Companion:** first publish: Nusuk Bot, Nusuk

## 12 November 2026 (Figma fixes) · DESIGN.md 2.9 · tokens 3.6 (unchanged)

**Figma files edited:** [💬 Chat UI](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR), [🏖️ Travel](https://www.figma.com/design/ozi4A2gUbVXbzbUJ3MF4uU) and [🔦 Tracker](https://www.figma.com/design/nj7L8ks27djv1LmxZYFTM8). [🧭 Navigation](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw) was edited and then reverted on request. None of these is published yet: publish each library to send the fixes to other files.

### Changed in Figma

- **💬 Chat UI (R2, R7):** accepted the ⌨️ Inputs update, so every field in the chat messages is radius 18. The update showed hidden layers in the Password and IBAN fields; they were set back by hand (password: value, eye, five rules; IBAN: name, IBAN with one تحقّق button, the bank row with its logo). The second `Style=Password` variant is now `Style=Mobile`. Flights Selection reads حجز الطيران with `airplane-01` and «اختر رحلتك من بين الرحلات المتاحة.». Single Choose options read الحجوزات، المدفوعات والاسترداد، تصريح الحج، الحساب والبيانات.
- **🏖️ Travel › Seperator (R5):** property `Property 1` → `Selected`, values `Default` / `Variant2` → `Off` / `On`. 11 instances in the file follow.
- **🔦 Tracker › Steps (R6):** `Variant5` → `OrderShipped`, `Variant3` → `OutForDelivery`, `Variant8` → `Delivered`.
- **🧭 Navigation (R3):** the Toolbar type was renamed `Booking Summary` and its more button given its 42 × 30 size, then reverted on request: the type is `Almatar` again and the button is back in `Flight` as an absolute 42 × 12 layer. Its exact pixel position may differ by a few pixels; Figma's version history restores it exactly.

### In code

- `NusukChat.FlightsSelection`: default subtitle as in Figma. `NusukChat.SingleChoose`: the four topics as in Figma.
- No DL component, token or native value changed.

### iOS and Android

- No change. Steps status names to map if you use them: `OrderShipped`, `OutForDelivery`, `Delivered`.

### Found while editing

- R8: 🔦 Tracker › Steps copy breaks the writing guide (تحهيز، إستلام، تحت المعالجة، تم). Left for the content owner.

## 12 November 2026 (Figma round) · DESIGN.md 2.9 · tokens 3.6 (no value changed)

**Figma files:** [⚙️ Foundation](https://www.figma.com/design/avzbRTP9CgpbbO8NgU5Ymo) (colour names), [⌨️ Inputs](https://www.figma.com/design/DATayAnynnSQqdJQLAi7DR) (Input fields), [🧭 Navigation](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw) (Toolbar › Almatar), [🏖️ Travel](https://www.figma.com/design/ozi4A2gUbVXbzbUJ3MF4uU) (Seperator), [🔦 Tracker](https://www.figma.com/design/nj7L8ks27djv1LmxZYFTM8) (Vertical Stepper Mobile) and [💬 Chat UI](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR) (AI Chat Messages). Icons from [🎨 Icons](https://www.figma.com/design/DXi3uVvGMTEdaM7vb2x6Gg). Nothing was edited in Figma.

The six files changed today were read and diffed against the DL. Every Foundation value still matches `tokens.json` 3.6, in all three themes, light and dark.

### Changed

- **Foundation names (R1):** `Alerts/Surface/_Solid Info, Success, Warning, Error, Default`, `Alerts/Icons/_Reject` and `Alerts/Text/_Reject` lost the underscore and are now published. Values and code names unchanged; the Figma names in `tokens.json` and the docs are updated.
- **TextField (R2):** fields radius 14 → **18** (`radius-md`, Radius/MD) with **`shadow-xs`**; Search and Counter are **capsules** (`radius-full`); OTP boxes radius 18; the label above the field is `notes-1-regular` in `inputs-text-placeholder`, inset 18; the Hint icon is 20. New `type="counter"`. Figma: ⌨️ Inputs › Input › `Fields`.
- **VerticalStepper:** rebuilt to 🔦 Tracker › Vertical Stepper Mobile: a 1.5 `surface-06-ash` rail; Done is a 20 `surface-longing` point with a white check; Current breathes; Next is a small dot; each step is a white card (radius 18, padding 18, `shadow-xs`) with time, status chips, last update, an optional Alert and two SM buttons.
- **Nusuk AI chat (Proposed lane):** `FlightsSelection` points to its new node 80652:10299.

### Added

- **Toolbar `type="booking"`** (Figma type `Almatar`, also accepted): back, a booking pill (`route`, `meta`, a more button) and a currency button. Code names the job, not the partner (DL-31, R3).
- **Icons:** `arrow-left-right`, `more-horizontal` (121 in all).
- **Chat:** `NusukChat.SingleChoose` for AI Chat Messages › Style=Single Choose (80626:36740): DL Option Cards as one radio group; the chosen card is `alerts-surface-success` with a green action.
- **Docs:** DESIGN.md 2.9 (M8 radius, M9 Toolbar and VerticalStepper, M9C input radius, M12 DL-31); inventory (Toolbar 42, AI Chat Messages 24, Seperator 2); known issues R1–R7; `migrations/2026-11-12-figma-round.json`.

### iOS

- Text fields: `NusukRadius.md` (18) and the `Shadow/XS` recipe (y 1, blur 2, spread −1, #1A1C1F at 4%); search and counter fields are capsules. If fields moved to 14 after yesterday's entry, move them to 18 (NH06).
- No new constants. The booking toolbar and the step card are built from existing tokens.

### Android

- Text fields: `RoundedCornerShape(NusukRadius.Md)` with the `Shadow/XS` recipe; search and counter `CircleShape`. No new constants.

### Check before you merge

- A text field measures radius 18 and has a 1 px soft shadow; a search field is a capsule.
- `Toolbar type="Almatar"` and `type="booking"` render the same bar.
- A done step shows a 20 gold point with a check; the rail is 1.5 wide.

## 12 November 2026 (evening) · Download everything · DESIGN.md 2.8.1 (unchanged) · tokens 3.6 (unchanged)

**Figma file:** none changed. Checked against [⚙️ Foundation](https://www.figma.com/design/avzbRTP9CgpbbO8NgU5Ymo) through `tokens.json` 3.6: no value moved.

One file now carries the whole DL: the `nusuk-design-language` skill zip, renamed *Download everything* in the guide.

### Changed

- **Skill (`nusuk-design-language.zip`):** added every component card (`reference/components/<Name>.md`), the design system's own sections (`reference/brand.md`, `writing.md`, `behaviour.md`, `dx-practice.md`, `targets-and-kpis.md`, `devices-accessibility.md`, `using-with-claude.md`), the logos (`assets/logos/`, ink, white, gold SVG) and `GETTING-STARTED.md` (install, share, Claude Code, use, update). 193 files.
- **Guide › Design system:** *Download everything (.zip)* is the primary download at the top and on the skill card. New *Install it in Claude* block: four steps, *Install in Claude* (saves the zip and opens Customize › Skills), links to turn on files and to Anthropic's help page, four prompts to copy, and how to update. Arabic for every new string. The card's version line is now filled in by the release script from DESIGN.md.
- **Integrity check:** the guide, the chat copy (`chat/`, `tokens.css`) and the generated `tokens.css` 3.6 hold the same value for every token the live design system defines (0 differences). The chat's own sizes stay in `nk-chat.tokens.css` as `nkc-*` Proposed tokens, with no name shared with the DL.

### iOS and Android

- No change in code or tokens.

## 12 November 2026 (later) · DESIGN.md 2.8.1 (unchanged) · tokens 3.6 (unchanged)

**Figma file:** [✨ Templates-Patterns](https://www.figma.com/design/fIjmiUpwy5UE9KJ9aXfhrn) (no change; the patterns and templates now travel with every download).

The patterns and templates were in the design system and in DESIGN.md, but the skill carried an old copy of the method and no full contract text, and the coded package left out the contracts and the patterns. Now every download carries the same files.

### Changed

- **Skill (`nusuk-design-language.zip`):** `reference/templates-and-patterns.md` is the current method (it was an older copy); added `reference/template-contracts.md` (the full text of all 20 contracts) and `reference/chat/` (the Nusuk AI chat files). The skill's file table lists them.
- **Coded package:** now holds `templates/contracts/` (20 contracts), `patterns/index.json` and `chat/`.
- **Guide › Design system:** new download, *Patterns and templates (.zip)*: `templates/index.json`, the 20 contracts, `patterns/index.json`, the Rawdah landing page model, the method and the full contract text, with a README. The DESIGN.md card now says 17 modules, version 2.8.1.

### iOS and Android

- No change in code or tokens. Use `templates/contracts/<id>.json` from the package or the new download as the screen-level spec.

## 12 November 2026 · DESIGN.md 2.8.1 · tokens 3.6 (unchanged)

**Figma file:** [💬 Chat UI](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR) (no change; the chat rules moved files).

One file for the chat. The Nusuk AI chat rules were in `chat/README.md`, next to DESIGN.md. They are now **DESIGN.md › M9C Nusuk AI chat**, a module like M9T, listed in the router. `chat/` keeps only the code and the proposed data that M9C points to.

### Changed

- **DESIGN.md:** new module M9C (where each chat value comes from, the Figma source and status of each of the 40 components, the files in `chat/`). Router row added. M9, the component inventory and the iOS and Android handoff now point to M9C.
- **`chat/README.md`:** a pointer to M9C.
- **README:** the module list now names all 17 modules, M9T and M9C included.

### iOS and Android

- No change in code or tokens. Read M9C before building a chat component.

## 11 November 2026 (close) · DESIGN.md 2.8 · tokens 3.6

**Figma files:** [⚙️ Foundation](https://www.figma.com/design/avzbRTP9CgpbbO8NgU5Ymo) (Effects), [⌨️ Inputs](https://www.figma.com/design/DATayAnynnSQqdJQLAi7DR) (Input, Hint), [🍟 Chips](https://www.figma.com/design/VVGHy0fAHuPqL6dhBD5Ai6) (`_Chips Setup`), [📻 Switches, Checkbox and Radio](https://www.figma.com/design/zhcTb4a0XbF3YeYF9XI6zw) (`_Switches Setup`), [🎨 Icons](https://www.figma.com/design/DXi3uVvGMTEdaM7vb2x6Gg), [💬 Chat UI](https://www.figma.com/design/b2JRq5iuFo8rvl354ggpjR), [🏖️ Travel](https://www.figma.com/design/ozi4A2gUbVXbzbUJ3MF4uU) and [🃏 Cards](https://www.figma.com/design/mg7egvNbr2ciMP04Ig2XDl). Every other library file in *Library files* was read for the round; nothing was edited in Figma.

Every DL library file was re-read before the Nusuk AI chat joined the DL. The round found Figma changes the code did not have yet, and the chat now takes every value it can from a DL file.

### Changed

- **TextField and OTP:** radius 12 → `radius-s` 14. Figma: ⌨️ Inputs › Input › Fields, bound to Radius/S.
- **Hint:** new type `success`, in `alerts-text-success` with the `clapping-02` icon. A TextField in the success state shows a success hint. Figma: ⌨️ Inputs › Hint › Type=Success.
- **Icon:** 18 icons added (119 in all): the 17 chat icons, which are in 🎨 Icons (`mail-at-sign-01`, `security-password`, `view`, `hijab`, `camera-02`, `audit-01`, `image-02`, `identification`, `rajhi`, `maps`, `google-maps`, `user-group-02`, `favourite`, `man-woman`, `door-02`, `arrow-expand-02`, `fire-03`), and `clapping-02` for the Hint.
- **Component inventory:** Hint 5, Request Cards 12, Media Cards 22, AI Chat Messages 23; new rows for Error Messages Content, Booking_Ticket, Nusuk Bot, Nusuk Bot Messages, Hotel Offer and six new 🏖️ Travel sets; Step Card, Hotel Ticket, Room Layout, Places & Events and Chat Element marked as removed from Figma (FR7).

### Added

- **Tokens 3.6:** `chip-*` (24) from 🍟 Chips › `_Chips Setup`, `control-*` (21) from 📻 Switches, Checkbox and Radio › `_Switches Setup`, and `opacity-none`, `border-none` and `glass-bottom` from ⚙️ Foundation. No value changed.
- **Nusuk AI chat, Proposed lane:** `chat/` holds the NusukChat code, the 31 proposed `chat-*` values, the manifest of 40 exports and 36 cards, and `chat/README.md` with the Figma source and status of each. 11 chat values now use DL tokens (`scale-02/10/26/32/42/46`, `chip-height-lr`, `control-checkbox-sm`, `control-icon-sm`, `button-icon-only-xs`, `brand-kiswah-reverence`). Decision DL-30.
- **Known issues:** FR1–FR7 (the Figma round) and AI1–AI8 (the chat).

### iOS

- New constants in `NusukTokens.swift`: `NusukChip.*`, `NusukControl.*`, `NusukOpacity.none`, `NusukBorder.none`. `glass-bottom` is a layered effect: build it from the recipe in DESIGN.md › M8.
- Text fields: radius 14 (`NusukRadius.s`). Hint: add Success (NH04, NH06 updated).

### Android

- New constants in `NusukTokens.kt`: `NusukChip.*`, `NusukControl.*`, `NusukOpacity.None`, `NusukBorder.None`.
- Text fields: `RoundedCornerShape(NusukRadius.S)`. Hint: add Success.

### Check before you merge

- A text field and an OTP box measure radius 14.
- A Hint with `type="success"` is green with the clapping hands icon.
- `chat-*` values appear only in `chat/`; no DL component uses them.

## 11 November 2026 (end of day) · DESIGN.md 2.7.2 (unchanged) · tokens 3.5 (unchanged)

**Figma files:** none changed. Compared against [Foundation](https://www.figma.com/design/avzbRTP9CgpbbO8NgU5Ymo) (Effects, Motion, Layout) and [Buttons](https://www.figma.com/design/AXEkdklBHSQDssRmOFMTve).

The handoff page now follows the iOS team's status report, section for section, and holds the iOS status of 11 November. No value changed; nothing to migrate.

### Changed

- **iOS and Android handoff:** eight sections in the iOS report's order (Summary, Foundations, Components, Impact on the app, What's left, Known deviations, What we need from UX, How to review), each with an Android column or note. The earlier content follows as Reference sections.
- **Known deviations:** a new ID series, NH01 to NH12, shared with the iOS team's `dl-deviations.yaml`. C13 keeps its ID.

### iOS and Android

- **iOS:** FoundationUI names stay (NH12). Read NH01 (button LR and XS heights) and NH06 (radius of fields and chips) before PR 115971 merges; both need a decision, and section 6 says why.
- **iOS:** the three breakages in section 4.1 are fixed in app screens, not in the library: the Loading collapse is DL behaviour.
- **Android:** send a status in the same eight sections; every table has an Android column waiting.
- **Both:** Opacity/None, Border/None, Glass/Bottom and the Motion collection are in Figma but not yet in `tokens.json`; take them from section 2.1.

### Check before you merge

- On a phone, a LR button is 48 and a XS button 30 high (NH01).
- A text field, select card and day tab have radius 12; a chip is a capsule (NH06).

## 11 November 2026 (later at night) · DESIGN.md 2.7.2 · tokens 3.5 (unchanged)

**Figma file:** none. No Figma file changed; this release corrects documentation only.

A fidelity correction, not a design change. A recheck of all 20 template contracts' Figma and example references found them accurate, but surfaced a separate problem in three: Service landing, Catalogue list and Item details had been hand-paraphrased from their original 10 Nov build-script documentation (`landingB.js`, `categoryB.js`, `productB.js`) instead of mechanically extracted like the other 17, and had lost real content in the process — including two trust-relevant findings already excluded from the template itself (the manufactured-urgency notification copy and the ADS countdown/discount banner) that had gone missing from its "In the flow today" record.

### Changed

- **`templates/contracts/service-landing.json`, `catalogue-list.json`, `item-details.json`.** Rebuilt from the original build scripts through the same mechanical process already used for the other 17 contracts: every "Open issues carried from the source flow", "Trust rules" and "Content, Arabic and accessibility" line restored, generic-noun-substituted, nothing silently dropped. `service-landing`'s space ids changed to match the restored anatomy: `commitment-state` → `notification-slot`, `featured` → `hero-row`, `categories` → `category-grid`. `catalogue-list` regained the `card-action` space, dropped from the earlier hand-paraphrase.
- **`templates/index.json`.** The three entries' `useFor`, `notFor` and `spaces` lists updated to match; the other 17 entries are untouched.
- **`patterns/index.json`.** `usedBy` corrected for `upcoming-requests`, `categories`, `cards-slider`, `leaderboard` and `cards-list` to the templates' corrected space ids. One stale cross-reference was also removed: `service-landing › item-rows` no longer claims `cards-list` — that row is a sideways-scrolling slider, not a list layout, and the restored original text no longer says otherwise.
- **`15-template-contracts.md`.** The three sections regenerated from the corrected contracts; the other 17 sections are untouched.
- **`migrations/2026-11-11-template-contracts-recheck.json`.** Machine-readable record of this correction.

### iOS and Android

- **Not applicable.** No token, component or native constant changed; this release touches template-contract documentation only.

### Check before you merge

- Diff `templates/index.json` and `patterns/index.json` against the previous release: only the three ids above should move, and only in the ways described.

## 11 November 2026 (night) · DESIGN.md 2.7.1 · tokens 3.5 (unchanged)

**Figma file:** [Navigation](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw) › Buttom Navigation › Tab (Current=On).

A correction. The current tab of the Bottom Navigation is a capsule, not a rounded rectangle.

### Changed

- **NavTab, current state.** Glass BG with radius 54 on the 54-high tab: a full capsule. DESIGN.md and the coded `NavTab` had 18. The coded component now uses `radius-full`.

### iOS and Android

- **iOS:** clip the current tab's glass with `Capsule()`, not `RoundedRectangle(cornerRadius: 18)`.
- **Android:** use `CircleShape` (or `RoundedCornerShape(50)`) for the current tab, not 18 dp.

### Check before you merge

- The current bottom tab has fully round ends, like the bar around it.

## 11 November 2026 (evening) · DESIGN.md 2.7 · tokens 3.5 (unchanged)

**Figma file:** none. No Figma file changed; this release changes the handoff only.

Native handoff. No value changed, so there is nothing to migrate if you already build to tokens 3.5.

### Added

- **`native/NusukTokens.swift`** and **`native/NusukTokens.kt`**: every colour in the six themes, and every space, size, radius, border, blur, opacity and type token, as Swift and Kotlin constants. They are generated from `tokens.json` in every release.
- **`native/tokens-native.json`**: each token with its Swift symbol, its Kotlin symbol, its kind and its value; a colour has its six theme values.
- **The guide**: an *iOS and Android* tab under Library with the three downloads, the latest release for each platform, a token lookup and the handoff page.
- **An iOS and an Android section** in every entry of this log.
- Docs: *iOS and Android handoff*. DESIGN.md › M11 › Native token files, decision DL-29.

### iOS (SwiftUI)

- Add `NusukTokens.swift` to your design-system target. Sizes read as `NusukButton.paddingMd`, type as `NusukType.body2Regular`.
- Colours: `NusukColors.resolve(theme, dark: colorScheme == .dark)` returns the palette; put it in the environment once and read `colors.button.primarySurface`.
- Replace hand-typed numbers and hex values with the constants, one component at a time.

### Android (Compose)

- Add `NusukTokens.kt` and change its `package` line. Sizes read as `NusukButton.PaddingMd`, type as `NusukType.Body2Regular`.
- Colours: provide `NusukPalettes.resolve(theme, isSystemInDarkTheme())` through `LocalNusukColors`, then read `LocalNusukColors.current.button.primarySurface`.
- Replace hand-typed numbers and hex values with the constants, one component at a time.

### Check before you merge

- Both files compile in your project. They are generated and checked for structure here, not compiled: report any compile error on the DL channel.
- The package name and the symbol names suit your codebase. The names are proposed, not yet agreed with the iOS and Android leads.

## 11 November 2026 (later) · DESIGN.md 2.6 · tokens 3.5

**Figma file:** [Buttons](https://www.figma.com/design/AXEkdklBHSQDssRmOFMTve).

Read from Buttons › `Buttons Setup`. Buttons are narrower: the side padding went down at every size. Heights, gaps, icon sizes and colours did not change.

### Changed

- **Button side padding** (`button-padding-*`, Figma `Glob Whitespace`).

| Size | Before | Now | Figma |
|---|---|---|---|
| LR | 32 | 28 | Scale/28 |
| MD | 30 | 22 | Scale/22 |
| SM | 22 | 18 | Scale/18 |
| XS | 16 | 14 | Scale/14 |

- **Icon-side padding** (`button-padding-icon-*`, Figma `Icon-Side Whitespace`).

| Size | Before | Now | Figma |
|---|---|---|---|
| LR | 26 | 24 | Scale/24 |
| MD | 24 | 20 | Scale/20 |
| SM | 20 | 16 | Scale/16 |
| XS | 14 | 12 | Scale/12 |

- **Icon-only and loading buttons** use the icon-side padding on both sides, destructive or not. Before, only destructive ones did; the others used the full side padding. Widths are now 74 / 66 / 56 / 42 (LR / MD / SM / XS); they were 90 / 86 / 68 / 50.
- **Ghost** still has no padding.
- **The guide** takes the new padding from the tokens, so its own buttons are narrower too.

### iOS (SwiftUI)

- Take `NusukTokens.swift` at tokens 3.5, or change these eight constants (pt).

| Constant | Before | Now |
|---|---|---|
| `NusukButton.paddingLr` · `paddingMd` · `paddingSm` · `paddingXs` | 32 · 30 · 22 · 16 | 28 · 22 · 18 · 14 |
| `NusukButton.paddingIconLr` · `paddingIconMd` · `paddingIconSm` · `paddingIconXs` | 26 · 24 · 20 · 14 | 24 · 20 · 16 · 12 |

- Leading icon, in the button's `ButtonStyle`: `.padding(.leading, NusukButton.paddingIconMd).padding(.trailing, NusukButton.paddingMd)`. A trailing icon swaps the two. `.leading` and `.trailing` follow the language, so Arabic needs no extra code.
- Icon-only and loading: `.padding(.horizontal, NusukButton.paddingIconMd)` on every filled button. Delete the branch that treated destructive buttons differently.
- Measure in the Xcode view debugger: MD icon-only is 66 × 44 pt.

### Android (Compose)

- Take `NusukTokens.kt` at tokens 3.5, or change the same eight constants (dp): `NusukButton.PaddingLr` to `PaddingXs` and `NusukButton.PaddingIconLr` to `PaddingIconXs`, with the numbers in the iOS table.
- Leading icon: `PaddingValues(start = NusukButton.PaddingIconMd, end = NusukButton.PaddingMd)`. A trailing icon swaps the two. `start` and `end` follow the layout direction.
- Icon-only and loading: `PaddingValues(horizontal = NusukButton.PaddingIconMd)` on every filled button. Delete the destructive branch.
- Material 3 `Button` keeps its own minimum size (`ButtonDefaults.MinWidth` and `MinHeight`, 58 × 40 dp). XS is 30 high and its icon-only form is now 42 wide, so build `NusukButton` on a `Surface` or a `Box` with `clickable`, not on the Material `Button`, or the small sizes render too large.
- Measure in the Layout Inspector: MD icon-only is 66 × 44 dp.

### Check before you merge

- A Primary MD button with a five-letter label is 44 wider than its label (22 each side); with a leading icon it measures 20 on the icon side and 22 on the other.
- A Primary MD icon-only button is 66 wide.
- Rows of two buttons and bottom bars still fit their labels at the largest text size; the buttons are narrower, so check that nothing now looks unbalanced.
- Touch area stays 48 high (44 in the top bar) at every size.

## 11 November 2026 · DESIGN.md 2.5 · tokens 3.4 (unchanged)

**Figma file:** [Templates-Patterns](https://www.figma.com/design/fIjmiUpwy5UE9KJ9aXfhrn) (the blueprints, one per contract).

Template contracts. No token, component or coded pattern changed; nothing to migrate in app code.

### Added

- **`templates/contracts/<id>.json`**, 20 files, and **`templates/index.json`**. Each contract: `spaces[]` in order with `cardinality`, `allowed`, `forbidden`, the DL `patterns` and `components` named; `states[]`; `rules[]`; `allocation`; `measure`; `example` (one service, kept apart from the rule).
- **`patterns/index.json`**: the twelve coded patterns with bands, placement, DNA, and the contract spaces that accept each.
- **DESIGN.md › M9T Template contracts**, decisions DL-27 and DL-28, golden prompts 9–13.
- Docs: *Templates and patterns* (how to use them) and *Template contracts* (the full text of all 20: spaces, allowed, not allowed, states, rules, allocation, measure, example).

### Renamed (contract ids)

| Before | Now |
|---|---|
| `market-landing` | `service-landing` |
| `market-category` | `catalogue-list` |
| `product-details` | `item-details` |
| `order-tracking` | `request-tracking` |
| `requests` | `requests-list` |
| `search` | `service-search` |
| `support-center` | `service-support` |
| `address` | `address-selection` |
| `cancel-order` | `cancellation` |
| `gift-card` | `add-on-task` |
| `invoice-sheet` | `cost-sheet` |
| `image-viewer` | `media-viewer` |
| `slot-period` | `date-period` |
| `slot-exact` | `date-slot` |

### iOS and Android

- No app change. Page models decode as before (`Codable` on iOS, `kotlinx.serialization` on Android).
- If you stored a contract id, rename it with the table above.

### For coding agents

- A page model (`templates/rawdah-landing.json`) is unchanged and still drives `NusukDL.Page`.
- To validate a page or screen: every section sits in a space of its contract, in order; no `forbidden` line is true; each `required` space is present; the state only changes content.
- Contracts are `draft`: report conflicts with shipped flows as questions.

## 10 November 2026 · DESIGN.md 2.3, then 2.4 · tokens 3.4

**Figma files:** [Buttons](https://www.figma.com/design/AXEkdklBHSQDssRmOFMTve) · [Navigation](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw) · [Cards](https://www.figma.com/design/mg7egvNbr2ciMP04Ig2XDl) · [Market](https://www.figma.com/design/5X9RDeo33hZFEhtjVUYr5c) · [Nusuk Brand (slides)](https://www.figma.com/slides/jsRc4Xbk9e3rQmZFRpFwCq/Nusuk-Brand).

Read from Buttons, Navigation, Cards and the new Market library. No token value changed.

### Changed

- **Button padding.** A filled button with a leading or trailing icon uses `button-padding-icon-*` (26 / 24 / 20 / 14) on the icon side and `button-padding-*` (32 / 30 / 22 / 16) on the other. Before, this was destructive only. Icon-only and loading keep full padding on both sides, except destructive. Ghost has none.
- **Toolbar.** 20 types, no `status`; `light` is now `darkmode`.

| Old type + status | New type |
|---|---|
| landing + logged-in | Landings / LoggedIn |
| landing + no-account | Landings / Guest |
| primary | Primary Pages / Default |
| primary + with-search | Primary Pages / Search |
| inner | Secondary Pages / Default |
| inner + with-tabs | Secondary Pages / Tabs |
| back | Secondary Pages / No Actions |
| search + leading-trailing | Secondary Pages / Search |
| close | Modal / Default |
| search | Modal / Search |
| market-product | Marketplace Prodcut (spelled as in Figma) |

- **Landings row.** Logo on glass 44, greeting, chevron 16; wallet pill 38; notifications on glass 44 with a red dot.
- **Request Card.** 11 types; `sim` is deprecated.

### Added

- **Toolbar types:** Landings / Search, Primary Pages / Tabs.
- **Bottom navigation** (`BottomNav`, `NavTab`): floating glass capsule, 402 × 106, bar 62 high (44 compact). Screens: Landing, Journey, Content, Marketplace (cart summary), Search. Build it as a floating view above the safe area, not a system tab bar.
- **Nudge:** one-line announcement above the bar, 316 × 58, one action.
- **Add to Cart control** (`AddToCartCTA`): 30 high; states cart, arrow, one, many, remove, notify-me. The stepper reads left to right in every language.
- **Price Options** (`PriceOptions`): "from" label, price, cart control; one row or stacked.
- **Option Card** type `product`; **Media Card** `layout` (list 268 wide, grid 189) and `cart`.
- **Icons:** user-circle, nusuk, route-02, airplane-02, live-streaming-02, notification-01, arrow-left-01.

### Brand guidelines, edition of 8 November (DESIGN.md 2.4)

- **Nusuk Companion rules.** Never build it as a chat assistant, a floating bubble or FAB, a mascot, a launcher or a spiritual guide. It has three beats: nudge (what, when, one action, at a flow boundary), hand off (a deep link with state filled; the service takes over), step back. No Companion nudge in the spiritual, institutional or marketing contexts; marketing never reaches into the app.
- **Illustration formats:** full screen 9:20 (1440 × 3200), half screen 9:10 (1440 × 1600), leaderboard 6:1 (1440 × 240), thumbnail 16:9 (1280 × 720) and 2:3 (800 × 1200). Disabled and inactive states use the Cool Grey variant.
- **Image treatments:** selective focus, and soft grain (Soft Light, 50% at most).
- **Iconography:** brand icon construction and three treatments (outline, two-tone, filled). Product screens still use the DL Icons file.

### Deprecated (render for one more release)

- Toolbar `status`, `market-landing`, `market-category`. Use Landings / Search and Primary Pages / Tabs.
- Request Card `sim`.

### Not ready, do not build yet

- The new Market library (17 sets) is documented but not coded.
- Nudge collapsed state: its text is 8.4 px in Figma.
- Bottom navigation has no dark variant in Figma; code covers dark themes for now.
- Media Card `ADS` is not coded.

### iOS (SwiftUI)

- **Button padding:** the rule holds; the numbers changed on 11 November (see that entry).
- **Toolbar:** one `NusukToolbar` view with a `type` enum of the 20 Figma types and `darkMode: Bool`. Remove `status`. It floats over the content and is not the system navigation bar; if you hide the system bar, check that the back swipe still works.
- **Bottom navigation:** a custom floating view, not `TabView`. Attach it with `safeAreaInset(edge: .bottom)` so content scrolls under it and keeps the right inset. Glass: `glassEffect` inside a `GlassEffectContainer` on iOS 26; `.ultraThinMaterial` with the Glass BG layers on earlier versions (DESIGN.md › M8).
- **Cart stepper:** set `.environment(\.layoutDirection, .leftToRight)` on the stepper only, and report the quantity with `accessibilityValue`.

### Android (Compose)

- **Button padding:** the rule holds; the numbers changed on 11 November (see that entry).
- **Toolbar:** one `NusukToolbar` composable with a `type` enum and `darkMode`. Not a Material `TopAppBar`. Pad it with `WindowInsets.statusBars`.
- **Bottom navigation:** a `Surface` with the Haze blur (DESIGN.md › M8), not a Material `NavigationBar`. The app draws edge to edge, so add `WindowInsets.navigationBars` padding below the bar's own 26 dp.
- **Cart stepper:** wrap the stepper only in `CompositionLocalProvider(LocalLayoutDirection provides LayoutDirection.Ltr)`, and report the quantity with `stateDescription`.

### Check before you merge

- A Primary MD button with a leading icon measures 24 on the icon side and 30 on the other.
- No screen still passes a toolbar `status`.
- The bottom navigation keeps the system home indicator visible.
- The cart stepper announces the new quantity after each change.

## 9 November 2026 · DESIGN.md 2.1 to 2.2 · tokens 3.2 to 3.3

**Figma files:** [Foundation](https://www.figma.com/design/avzbRTP9CgpbbO8NgU5Ymo) · [Chips](https://www.figma.com/design/VVGHy0fAHuPqL6dhBD5Ai6) · [Navigation](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw) · [Cards](https://www.figma.com/design/mg7egvNbr2ciMP04Ig2XDl) · [Landing Experience V2](https://www.figma.com/design/9qmiMkJqcEMFY8vbxhcP6r). Surface allocation comes from the Surface Allocation Board, not from a Figma file.

Five releases in one day: patterns and templates (morning), button sizes (afternoon), motion (evening), chips (night) and the accessibility review (late night).

### Changed

- **Button heights** (phones, tablets, Android Compact and Medium). Padding, gaps, icons and colours did not change.

| Size | Before | Now | Android Expanded (Wide) | Token |
|---|---|---|---|---|
| LR | 54 | 48 | 54 | `button-height-lr` |
| MD | 48 | 44 | 48 | `button-height-md` |
| SM | 38 | 38 | 38 | `button-height-sm` |
| XS | 26 | 30 | 26 | `button-height-xs` |

- **Toolbar parts follow MD (44):** row, icon block (each icon button 44 × 38), search bar, date picker, landing logo. A one-row toolbar is 4 + 44 + 32 = 80 under the status bar; build to 80 even where Figma frames still show 84.
- **Chips.** One set of values per size; every chip in a card is XS.

| Size | Height | Text | Padding | Icon-side padding | Gap | Icon |
|---|---|---|---|---|---|---|
| XS | 18 | 10 | 12 | 10 | 4 | 12 |
| SM | 20 | 12 | 14 | 12 | 4 | 14 |
| MD | 24 | 12 | 14 | 12 | 4 | 14 |
| LR | 28 | 14 | 16 | 14 | 6 | 16 |

- **Motion.** No resting loops. The Nusuk AI shimmer plays once (3 s) when the bar appears. Anything that starts by itself stops within 5 s. Spinners and typing dots loop only while the wait lasts. All motion stops under Reduce Motion and Remove animations.
- **Focus ring.** Ink, 2 px, offset 2; white on Ink fills and dark glass. No longer gold.
- **Colours on Ink.** On a fill that inverts in dark themes, text and icons use `surface-01-white`, not `text-inverse`.
- **Member Card.** Swipe actions sit on the trailing side in both directions.

### Added

- **Tap padding on every control.** A 48 touch target (44 in the top bar) whatever the drawn size; never grow the drawn control. `contentShape` on iOS, `minimumInteractiveComponentSize()` on Android. Per-control amounts: DESIGN.md › M11.
- **Names for every control.** A visible label names its field and the hint describes it; a placeholder is never the only name. Icon buttons name the outcome. Arabic and English defaults are in `NusukDL.strings`.
- **Surface allocation** (DESIGN.md › M9S, and the Surface tab of the guide): the model that decides where each of the 53 services shows, when and for whom. Placement P0 to P5 (withheld, Today, stage hub, search, positional, permanent), app level L1 to L4, service DNA (Core, Supportive, Extra mile, Ancillary), render bands that order Today and every landing, interrupt tiers T0 to T3 for pushes and notifications, mindsets, suppression in sacred windows, and the atlas of 123 journey steps. Every pattern and template section now carries its `band`, `placement` and `dna`. Rule for builders: commerce never enters bands 1 to 5 or a rite step, and a booking control is never shown to someone who cannot book.
- **Patterns and templates.** Twelve page sections (`FeaturedHeader`, `UpcomingRequests`, `Categories`, `CategoryChips`, `CardsSlider`, `PlaylistRow`, `ListSideBySide`, `Leaderboard`, `Guide`, `ServicesBox`, `BentoGrid`, `CardsList`), `Page({ template })` and two Rawdah landing templates. A page is an ordered list of sections: change sections, not styles.
- **Tokens:** `scale-44`, `shadow-avatar`.

### iOS (SwiftUI)

- **Heights:** `NusukButton.heightLr` 48 · `heightMd` 44 · `heightSm` 38 · `heightXs` 30 pt, on iPhone and iPad.
- **Touch target:** the drawn size stays; extend the hit area to 48 pt (44 in the top bar) with `contentShape`. Amounts per control: DESIGN.md › M11 › Tap padding.
- **Names:** `accessibilityLabel` on every control. A visible label names its field; the hint goes in `accessibilityHint`.
- **Motion:** read `accessibilityReduceMotion` from the environment. When it is on, skip the shimmer and anything that starts by itself.
- **Pages:** a `ScrollView` with a `LazyVStack`, one view per section of the page model. A row is a horizontal `ScrollView` with a `LazyHStack`, 8 pt padding and 8 pt spacing.

### Android (Compose)

- **Heights:** `NusukButton.HeightLr` 48 · `HeightMd` 44 · `HeightSm` 38 · `HeightXs` 30 dp on Compact and Medium windows. On Expanded windows (840 dp and wider) use 54 · 48 · 38 · 26; these four are not in the token file yet.
- **Touch target:** `Modifier.minimumInteractiveComponentSize()` gives 48 dp. It reserves that space in the layout, so a row of XS buttons becomes 48 dp high: plan the row for it.
- **Names:** `contentDescription`, or `Modifier.semantics` for a custom control.
- **Motion:** when the system animator duration scale is 0 (Remove animations), skip the shimmer and anything that starts by itself.
- **Pages:** a `LazyColumn`, one item per section. A row is a `LazyRow` with `contentPadding = PaddingValues(horizontal = 8.dp)` and `Arrangement.spacedBy(8.dp)`.

### Check before you merge

- A Primary MD button is 44 high.
- Every control answers a 48 touch (44 in the top bar) and has a name in the current language.
- Nothing loops at rest.
- Build to the tokens: some Figma frames in Cards and Landing Experience still show the old button heights.

## 8 November 2026 · tokens 3.0, then 3.1

**Figma files:** [Foundation](https://www.figma.com/design/avzbRTP9CgpbbO8NgU5Ymo) · [Buttons](https://www.figma.com/design/AXEkdklBHSQDssRmOFMTve) · [Navigation](https://www.figma.com/design/7qHX6LqdotAU59Jr5UIsfw) · [Cards](https://www.figma.com/design/mg7egvNbr2ciMP04Ig2XDl).

Read from Foundation, Buttons, Navigation and Cards in the morning, and Buttons and Cards again at 17:20.

### Changed

- **Hero is 48** (was 64): `hero-light`, `hero-regular`.
- **Glass BG has 7 variants** (Current × Navigation On / Off / Primary Action × Dark). Primary Action is a flat Ink fill, so a Primary button needs no glass. The full recipe for iOS and Android is in DESIGN.md › M8.
- **Toolbar** rebuilt for every Figma type: a transparent bar with glass controls (icon block, search bar, glass tabs, date pill, wallet). Props `type`, `status`, `light`, `tabs`, `categories`, `wallet`, `progress`. (Types and `status` changed again on 10 November.)
- **Tab Bar** rebuilt: the home bar (four tabs and Nusuk AI) and every action bar: actions, action and input, loading, filters, content share, habits, floating cart, with price, cart, floating profile, empty.
- **Member Card** rebuilt: full, compact, disabled, actionable, swiped, selectable. Avatar shadow −6, 6, blur 30, spread −12, Ink 5%.
- **Request Card** rebuilt on one master: every type as a preset (`type="umrah"`), Empty State, notice. The old props `reference`, `subtitle` and `rows` are gone. Avatars have a white inside ring (1.5 at 24, 1.4 at 38).
- **Option Card** rebuilt: 9 types, including LR Icon, Icon Top, Counter and Requirement Item.
- **Buttons.** Loading is an icon-only button with a spinner at the icon-only size (Primary and Secondary at 100%, Ghost at 40%). The focus ring also shows on keyboard focus. Destructive buttons use icon-side padding 26 / 24 / 20 / 14 (widened to every filled button on 10 November). Destructive Ghost is underlined.
- **Avatar** sizes 24 / 42 / 56 / 72 / 100. `size="md"` is now 56: check screens that pass it.
- **Pagination:** every dot `icons-gray`, gap 8 (4 vertical), new small size and a progress version. **Progress ring:** Pearl track, Illumination arc, optional title and subtitle.
- **Icons:** 83 Hugeicons and Nusuk icons exported from Figma and used by their Figma names.

### Added

- **Status chip:** all 46 request statuses with their colour, Arabic label and icon.
- **Green button:** `tone="green"` and five `button-green-*` tokens. It fails contrast in Figma (known issue B12).
- **Parts:** `DirectionSheet`, `HomeItem`, `IconBlock`, `SearchBar`, `StatusBar`, `HomeIndicator`, `Glass`.
- **Media Card** now comes from the Cards file.

### Removed

- Toolbar types Home, Quran Header and Marketplace.

### iOS (SwiftUI)

- **Hero:** `NusukType.heroLight` and `heroRegular` are 48 pt.
- **Glass BG:** `glassEffect(_:in:)` with `Capsule()` on iOS 26; `.ultraThinMaterial` with the gradient layers on iOS 18 to 25. Primary Action is a flat fill with no material. Full recipe: DESIGN.md › M8.
- **Avatar:** 24 · 42 · 56 · 72 · 100 pt. The `md` case is now 56.
- **Store and wallet badges:** Apple's official artwork and Wallet button, never a rebuilt button.

### Android (Compose)

- **Hero:** `NusukType.HeroLight` and `HeroRegular` are 48 sp.
- **Glass BG:** Compose has no backdrop blur of its own. Use the Haze library and draw the gradient layers on top; without it, draw the gradients over `colors.surface.white01` at 85%. Full recipe: DESIGN.md › M8.
- **Avatar:** 24 · 42 · 56 · 72 · 100 dp. The `md` case is now 56.
- **Store and wallet badges:** Google's official Play and Wallet artwork, never a rebuilt button.

### Check before you merge

- Hero text is 48.
- No screen passes `RequestCard rows` or expects `Avatar size="md"` to be 42.
- Store and wallet badges use the official artwork, not a rebuilt button.

## 5 November 2026 · Buttons

**Figma files:** [Buttons](https://www.figma.com/design/AXEkdklBHSQDssRmOFMTve) · [Foundation](https://www.figma.com/design/avzbRTP9CgpbbO8NgU5Ymo).

### Changed

- **Buttons have their own colour tokens**, from Buttons › `Buttons Colors`, in two modes: Light (standard) and Dark (white buttons over photos, video and Ink; the `onDark` prop).
- **Button sizes come from `Buttons Setup`:** side padding 16 / 22 / 30 / 32, icon-side padding 14 / 20 / 24 / 26, gap 4 / 8 / 8 / 8, icon 16 / 18 / 20 / 20, icon-only icon 18 / 24 / 26 / 26 (XS / SM / MD / LR). Label `body-2-regular` at every size; capsule shape.
- **Theme and button mode are two settings.** Theme comes from `data-theme`; button mode from `onDark`. Test both together.

### Added

| Token | Light themes | Dark themes |
|---|---|---|
| `button-primary-surface` / `-content` | #070808 / #FFFFFF | #FFFFFF / #FFFFFF (known issue C7) |
| `button-secondary-surface` / `-content` | Ivory 70% / #070808 | #111315 70% / #FFFFFF |
| `button-ghost-content` | #070808 | #FFFFFF |
| `button-fate-surface` / `-content` | #FFF2F1 / #FF4136 | #992720 / #FEF3F2 |
| The same names ending `-on-dark` | For `onDark` | For `onDark` |

### Removed

- The 18 `--buttons-*` variables (Figma `Buttons/…` colours in Foundation). Replace each with its `button-*` token inside a button; the map is in `migrations/2026-11-05-buttons.json`.

### iOS and Android

- In both token files the button colours are `colors.button.primarySurface`, `primaryContent`, `secondarySurface`, `secondaryContent`, `ghostContent`, `fateSurface` and `fateContent`. Each has an `OnDark` twin for buttons over photos, video and Ink.
- Theme and `onDark` are two inputs. Resolve the palette from the brand theme and the system dark setting, then choose the `OnDark` member from the button's own parameter.

### Check before you merge

- No `--buttons-` variable is left in code.
- Primary, Secondary, Ghost and destructive render in light and dark themes, with and without `onDark`.

## 2 November 2026 · First release

**Figma files:** [Foundation](https://www.figma.com/design/avzbRTP9CgpbbO8NgU5Ymo), and every file listed on the Library page.

The Nusuk Design Language as a design system: tokens for three themes in light and dark, the components mirrored from the Figma library, the brand, the rules and the onboarding guide. The inventory of every public Figma set dates from this read.
