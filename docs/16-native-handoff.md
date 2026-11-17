# iOS and Android handoff

For iOS and Android developers, and for coding agents working in a native codebase. It follows the same eight sections as the iOS team's status report, so a reader can put the two side by side. Figma is the source of truth (DL-01); where a platform differs, section 6 says why.

## 1. Summary

Last updated 14 November 2026 (DL 3.0, tokens 3.8: UX's answers to the iOS review and the Android audit, deviations NH20 to NH26, `NusukLayout`; before that tokens 3.7: sections 2.1, 2.3, 2.4, 3 and NH13 to NH15). iOS status comes from the iOS team's report of the same day (library branch `feature/design-language/theme-getters`, PR 115971, not merged). Android has not sent a status yet.

| Area | Design language (Figma) | iOS | Android |
|---|---|---|---|
| Foundations | Colours, type, layout, radius, effects, motion: published | ✅ Mostly done; button LR and XS heights differ (NH01) | Not reported |
| Themes | Three themes, light and dark; Quranic Illumination is the default | 🟡 All three palettes in code; no theme switch yet | Not reported |
| Components | 76 component folders | 🟡 25 with a storybook, 9 without, 17 not built, 25 not on the iOS list yet | Not reported |
| App compile | — | ✅ No breaking API change | Not reported |
| App UI | — | ⚠️ 3 screens break; button, radius, text colour and line height reach the whole app | Not reported |
| Shipped to users | — | ❌ Not yet: the work is on a review branch | Not reported |
| Dark themes | ❌ Not ready to ship: Primary button label has no contrast (C7) | App is fixed to light | Not reported |

Nothing in this report asks for a change to the Figma library or to the iOS library. Where a difference can only be closed by changing one of them, section 6 says so and leaves the decision to the DL Manager.

## 2. Foundations

Values are from the Figma Foundation file and `tokens.json` 3.5. A ✅ means the iOS value equals Figma.

### 2.1 Tokens

| Foundation | Figma | iOS (DL branch) | Android | Match |
|---|---|---|---|---|
| Colours | All semantic roles and ramps, plus the Quran palette, in six palettes | Same | Not reported | ✅ |
| Colours that change by theme | 27 (17 in light, 10 more in dark only) | 25 getters | Not reported | Check: 2 to find (NH05) |
| Type sizes | Hero 48 · Display 1 32 · Display 2 28 · Headline 1 24 · Headline 2 20 · Body 1 18 · Body 2 16 · Notes 1 14 · Notes 2 12; Light and Regular | Same | Not reported | ✅ |
| Line height | 1.28 for every style | 1.28 on iOS 26 and later; system default before | Not reported | Deviation NH07 |
| Space and size | Layout collection, phone values, including Scale/44 | Same | Not reported | ✅ |
| Radius | XXS 4 · XS 8 · S 14 · MD 18 · XL 22 · XXL 42 · iOS 54 · Full | Same | Not reported | ✅ |
| Shadows | Effect styles Shadow/XS, SM, LR, XL, UP; string variables Shadows/01 to 05 | Effect styles only | Not reported | ✅ for native (NH09) |
| Glass | Glass/Top, Glass/Bottom, Glass/Full; new 14 November: Glass/Andriod Blur (Figma spelling), the fallback where the native glass material is missing: background blur 10 + inner shadow 0 5, blur 10, spread 10, Ink 5% (`glass-android`). 17 November: Glass BG re-read (Mode × Dark × Glass) with the layers each control keeps; DESIGN.md › M8 › Glass BG has the iOS 26, iOS 18–25 and Android recipes | First three the same; the new one not in the report | Not reported | Check the fallback below iOS 26; build Android controls from the Glass=Off recipe (F74) |
| Opacity | 7: None 0 · Subtle .04 · Hover .08 · Focus .12 · Disabled .38 · Medium .5 · Strong .9 | 7 | Not reported | ✅ |
| Border width | 4: None 0 · Thin 1 · Medium 1.5 · Thick 2 | 4 | Not reported | ✅ |
| Blur | SM 2 · MD 10 · LR 20 | 3 | Not reported | ✅ |
| Motion | Fast 100 ms · Normal 250 ms · Slow 400 ms; linear, ease-in, ease-out, ease-in-out | Same | Not reported | ✅ |
| Chip sizes | 🍟 Chips › `_Chips Setup`: height 18 · 20 · 24 · 28, padding, icon, gap, label (XS–LR) | Not in the report | Not reported | Check: `chip-*` (tokens 3.6) |
| Selection controls | 📻 Switches, Checkbox and Radio › `_Switches Setup`: checkbox and radio 18 · 18 · 24, switch 32 · 42 · 54 (SM–LR). Re-read 14 November: chosen checkbox and radio `surface-illumination` (gold), switch on `surface-10-ink`; empty checkbox a 1 px `surface-longing` line; errors solid `alerts-surface-solid-error` (switch, radio) or a 2 px `alerts-icons-error` line (checkbox); disabled `surface-03-pearl`. Gold and the empty states are under 3:1 (F16) | Not in the report | Not reported | Check: `control-*` (tokens 3.6) and the colours |

Tokens 3.7 (14 November 2026) change two button colours (section 2.3) and add `glass-android` in `tokens.json`. Since tokens 3.6 (11 November 2026), `tokens.json` and the native token files carry Opacity/None, Border/None and Glass/Bottom. The Motion collection is still not in them: take it from this table.

### 2.2 Text colours

| Token | Figma (light) | iOS now | Match |
|---|---|---|---|
| `text-heading` | #070808 | Ink 10, #070808 | ✅ |
| `text-content` | #070808, the same as headings | Ink 10, #070808 | ✅ |
| `text-subtle` | #303336 | Slate 07 | ✅ |
| `text-note` | #636669 | Ash 06 | ✅ |

### 2.3 Button

Figma file: [Buttons](https://www.figma.com/design/AXEkdklBHSQDssRmOFMTve). Phone and tablet values; Wide values in brackets.

| Size | Height | iOS height | Side padding | Icon side | Icon | Icon-only icon | Loading width |
|---|---|---|---|---|---|---|---|
| LR | 48 (54) | 54 | 28 | 24 | 20 | 26 | 74 |
| MD | 44 (48) | 44 ✅ | 22 | 20 | 20 | 26 | 66 |
| SM | 38 (38) | 38 ✅ | 18 | 16 | 18 | 24 | 56 |
| XS | 30 (26) | 26 | 14 | 12 | 16 | 18 | 42 |

- **Heights:** iOS LR and XS carry the Wide values. Figma changed the phone values on 9 November (LR 54 to 48, XS 26 to 30). See NH01.
- **Padding:** changed in Figma on 11 November. The iOS report does not list padding; check FoundationUI against this table (NH02).
- **Label:** `body-2-regular` 16 at every size. iOS matches.
- **Disabled:** the whole button at 40%. iOS matches.
- **Loading:** the label goes and the button becomes an icon-only button with a spinner, at the loading width above. iOS matches; this is why two buttons shrink (section 4.1).

**14 November 2026 (tokens 3.7).** Two fills changed and the master's slots are now part of the component:

| What | Value | Swift | Kotlin |
|---|---|---|---|
| Destructive fill | Red at 10%: #FF41361A (was #FFF2F1); dark themes #FEF3F21A | `colors.button.fateSurface` | `colors.button.fateSurface` |
| Secondary on dark | Slate at 70%: #303336B3 (was opaque); dark themes #CBCCCDB3 | `colors.button.secondarySurfaceOnDark` | `colors.button.secondarySurfaceOnDark` |
| Both icons | Leading and trailing icon, icon-side padding on both sides | icon position `.both` | `IconPosition.Both` |
| Price | Riyal symbol at the icon size + amount, gap 4, before the label | `price:` | `price =` |
| Service mark | Nafath or Absher after the label, icon height | `mark:` | `mark =` |
| Apple Pay | The system button, never a drawn one | `PKPaymentButton` | Google Pay's official button where offered |
| Glass | Fallback glass behind a filled button: blur 10 + the `glass-android` inner shadow | system glass on iOS 26, fallback below | blur `RenderEffect` on API 31+, fill alone below |
| Tone and ground | Green (Primary, Secondary, Ghost) and on-dark compose with destructive and Ghost; all 18 pairs are in the Button card › Every combination | `tone`, `onDark`, `isDestructive` | same |

### 2.4 Other component updates

- **Avatar:** iOS shows one character. The Figma card does not set a character count; a counter such as +3 belongs to AvatarGroup (`more`, with a ring), not to the initials (NH03).
- **Hint:** Figma has 5 types since 11 November 2026: Hint, Info, Warning, Error and Success (icon `clapping-02`). iOS has 5 (NH04).
- **MediaCard:** action views handle their own taps and turn off on disabled cards. Matches the card.
- **StatusSheet (CommonSheetView), 17 November 2026:** title Headline 1 Regular, description Body 2 Light in `textContent`, buttons Primary MD over Ghost MD (4 apart, each as wide as its label), icon 72 circle with a 38 glyph, content padding 32 / 18 / 48 with gap 26, Overlay/Soft behind. Slots: chip, Settings Note, Additional Content, T&C line, Prev. Step. Fate only for remove or cancel (NH28).
- **NoticeBar (Toast), 17 November 2026:** a Ghost XS action, a 19 close and a description 26 in from the start; NoticeBar Location is the hugging bar at the top of a screen.
- **EmptyState, 17 November 2026:** full page Headline 1 + Body 2 Light, Primary MD over Ghost MD; the List location is a white card (radius 22) with Primary SM beside Ghost SM.

## 3. Components

Names follow the DL cards; the iOS name is in brackets where it differs.

### Built on iOS, with a storybook (25)

| Group | DL component (iOS) |
|---|---|
| Actions | Button |
| Inputs | TextField (FloatingTextField; 14 November: Multi Select and Avatar types, Error and Disabled keep the default fill), Hint, Chip, StatusChip (Tag; 47 statuses with Approved), Radio (RadioGroup; 14 November: chosen gold, NH16), SelectCard (14 November: Selected `surface-shade-5` with a gold line), DropdownItem (Dropdown; 14 November: the row is the control, a Longing check when chosen, NH17) |
| Navigation | Toolbar, HeaderTabs (Tabs), ProgressRing (ProgressRow), VerticalStepper (TrackerDots) |
| Overlays | BottomSheet (NKDynamicHeightSheet; 14 November: corners 42 / 54 and glass, NH18), CollapsedSection |
| Feedback | NoticeBar (Toast), EmptyState |
| Cards | RequestCard (RequestCardV2), OptionCard, MediaCard |
| Data display | Avatar, DayTab, TimeSlot (TimeAndSlotsSection), PrayCard, InfoTile (InfoCard) |
| Features | PrayerLiveActivity (ManasekWidget) |

### Built on iOS, no storybook yet (9)

Switch (14 November: MD 42 × 21, error a solid red track, NH16), CountBadge (Badge), Pagination (CustomPager), StatusSheet (CommonSheetView; corners 42 / 54, NH18), MemberCard, DayPicker (DatePicker), FlightTicket (Ticket), DetailsListItem (List), Icon.

### Not built on iOS (17)

| Group | Components |
|---|---|
| Inputs | FileUploader, Checkbox |
| Navigation | TabBar, Steps (rebuilt 14 November from 🔦 Tracker › Steps, NH19), SectionHeader |
| Feedback | Alert, AppNotification |
| Data display | AvatarGroup (14 November: Travel presets), RatingBar, FeedbackEmojis |
| Features | PaymentDetails, SoundPlayer, ChatMessage, StepCard, QRCodeStatus, StartJourney (rebuilt 14 November: SM, XS, LR, NH19), MapPin |

### In the DL, not on the iOS list yet (29)

These cards were added after the inventory the iOS report uses (NH10).

| Group | Components |
|---|---|
| Navigation | BottomNav (14 November: now Figma's Tab Bar › Landing, Travel, Content, Market on `_BottomTab master`; 95 high, gap 20, current tab `icons-illumination` with a `text-link` label; NH15), SectionTitle, FeaturedHeader, Cover, Page |
| Feedback and guidance | HintWidget (14 November: a `logo` layout, 234 × 212), Nudge, Guide, DirectionSheet |
| Commerce | AddToCartCTA, PriceOptions, ProductTile |
| Lists and layout | BentoGrid, CardsList, CardsSlider, Categories, CategoryChips, CategoryTile, ListSideBySide, ServicesBox, UpcomingRequests |
| Media and community | PlaylistCard, PlaylistRow, FaceTile, Leaderboard |
| Status and ratings (17 November 2026) | SectionError, ReasonSelection, ReviewCard, ReviewSummary |

### Proposed: Nusuk AI chat (40)

The chat UI from 💬 Chat UI is in the DL as a Proposed lane (`chat/`, DESIGN.md › M9). It builds on TextField, SelectCard, Chip, TabBar, ChatMessage and FlightTicket and adds 14 components (Bot, BotNote, BookingTicket, LogosGroup, HotelCard and the chat answers). Native teams build these only after the DL Manager accepts them; DESIGN.md › M9C lists the Figma source and status of each.

### Android

No component status yet. The same four lists apply when it arrives.

## 4. Impact on the app

From the iOS report, with the DL reading of each item. The fixes below change app screens only, never the Figma library or the iOS library.

### 4.1 Will break: fix before release

| # | Screen | What users will see | DL reading | Fix in the app |
|---|---|---|---|---|
| 1 | Umrah Journey, companions avatar | “+” instead of “+3” | The initials avatar is not meant for counters; the DL counter is the +N avatar of AvatarGroup, which iOS has not built | Build the counter in `CompanionsAvatar.swift` from tokens to the +N spec (ring 1.36 Ink, the avatar size), until AvatarGroup ships (NH03) |
| 2 | Rawdah ticket card, “Show permit” | The button shrinks to the spinner while the QR loads; 38 tall, not 42 | Both are the DL: loading is icon-only width (SM 56), and SM is 38 in every layout | Give the button's container a fixed width so the layout keeps its place; update the layout comment from 42 to 38 |
| 3 | Celebration Cards, “Suggest design” | The button shrinks as soon as it is tapped | The DL: loading is icon-only width | Same: a fixed-width container, or full width if the screen design shows full width |

### 4.2 Will look different across the app (QA, not broken)

| Change | Where | iOS uses | DL check |
|---|---|---|---|
| Button MD 48 to 44 | Every medium button | about 200 | ✅ Figma |
| Button SM 42 to 38 | Every small button | 75 | ✅ Figma |
| Button XS label 14 to 16 | Every extra-small button | 76 | ✅ Figma; the height should be 30, not 26 (NH01) |
| Bigger icon-only icons: XS 18, SM 24, MD 26 | Icon-only buttons | 64 | ✅ Figma |
| Disabled buttons at 40% | Every disabled button | all | ✅ Figma |
| Radius XS 8, S 14, MD 18, XL 22 | Cards, sheets, fields, chips | 370 in the app, 27 in Islamic Services | Cards ✅. Fields are 18 (Radius/MD) with `Shadow/XS` in Figma since 12 November (14 on 11 November); search and counter fields are capsules; select cards and day tabs are 12; chips are capsules (NH06) |
| `text-content` #070808; `text-subtle` lighter; `text-note` darker | Body text | 557 | ✅ Figma |
| Line height 1.5 to 1.28 on iOS 26 and later | All IBM Plex text | all | ✅ Figma; older iOS keeps the system default (NH07) |
| Currency symbol in `CurrencyView` shrinks with the line height | Prices | all prices on iOS 26 and later | Check on a device |

### 4.3 Islamic Services

- **Counting screen:** the + icon grows from 16 to 24 and the row is 4 shorter. This is the SM icon-only size in Figma.
- **Reciter and options pickers:** the selected row has the same colour as the others; the checkmark shows the choice. Open for UX (section 7).

### 4.4 Won't break

- **Compile:** the removed iOS symbols (`iconsShade1` to `iconsShade4`, `iconsShade7`, `gunmetal`, `ultraLightHero`, `scale._35`) are not used in the app, Islamic Services or the tests.
- **Dark mode:** the app is fixed to light, so dark palette changes, C7 and C13 don't show yet.
- **Theme getters and Scale/44:** additions only.

### Android

No impact report yet.

## 5. What's left

| # | Item | Owner |
|---|---|---|
| 1 | Fix the three app breakages in 4.1 | iOS |
| 2 | QA 4.2 and 4.3 on a device, on iOS 26 and an older iOS | iOS |
| 3 | Take LR 48 and XS 30 in PR 115971 (NH01: UX answered Phone and Tablet values only) | iOS |
| 4 | Merge PR 115971 into the library's `main` | iOS |
| 5 | Theme switch for Court Fabrics (the default is decided: Quranic Illumination, DL-37) | DL Manager |
| 6 | Move app screens to the theme getters | iOS |
| 7 | Build the 17 missing components, then the 25 newer cards | iOS |
| 8 | Storybooks for the 9 components without one | iOS |
| 9 | Icons: replace the stand-ins with the Figma icons, exported by name | iOS, with the DL team |
| 10 | Line height before iOS 26 (NH07) | iOS |
| 11 | Android status in this format | Android lead |
| 12 | Add the Motion collection to the token file (Opacity/None, Border/None and Glass/Bottom shipped in tokens 3.6) | DL team |
| 13 | Tablet values on iPad from `NusukLayout.tablet` (NH20) | iOS |
| 14 | Answer the developer questions Q-X01 to Q-X27 on the developer questions page | iOS and Android leads |
| 15 | Decide the Android scale (Q-D16), the input radius (Q-D15) and text size on iOS (Q-D18) | Design team and DL Manager |

## 6. Known deviations from Figma

One ID space for every platform. IDs that start with C, K or N are in Known issues; NH IDs are kept here. The iOS team's `DesignLanguage/dl-deviations.yaml` uses the same IDs.

| # | Topic | Figma | iOS | Android | Why and next step |
|---|---|---|---|---|---|
| NH01 | Button heights on phones | LR 48 · XS 30 (Wide 54 · 26) | LR 54 · XS 26 | Not reported | **UX answered (iOS review #10, 14 November):** Phone and Tablet values only, so iOS takes 48 and 30 in PR 115971 (Q-X01) |
| NH02 | Button padding (11 November) | 28 / 22 / 18 / 14; icon side 24 / 20 / 16 / 12 | Not in the report | Not reported | Compare FoundationUI with section 2.3. If it differs, it is the normal pick-up of the 11 November change-log entry |
| NH03 | Avatar counter | +N avatar in AvatarGroup, with a ring | Avatar shows one character; AvatarGroup not built | Not reported | Both sides are consistent. The app builds its counter from tokens until AvatarGroup ships |
| NH04 | Hint types | 5: Hint, Info, Warning, Error, Success (Success added 11 November 2026) | 5 | Not reported | Aligned if the iOS fifth type is Success; the iOS team confirms the name and the `clapping-02` icon |
| NH05 | Theme colours and default | 27 colours change by theme; Quranic Illumination is the default | 25 getters; components ask for Dome of the Prophet directly | Mirror `tokens.json` per theme (audit F6–F8) | **Default decided (UX, iOS review #9):** Quranic Illumination; every theme ships (DL-37). Diff the getter names against `tokens-native.json` (Q-X04) |
| NH06 | Radius of fields, select cards, day tabs and chips | Fields 18, bound to Radius/MD, with `Shadow/XS` (⌨️ Inputs, since 12 November); Select Card 18, bound to Radius/MD (📻 Switches, read 14 November); day tabs 12, no variable; chips capsule | Report says radius changes reach fields and chips | A local 12 for inputs, select cards and day tiles (audit F9, 10 November) | **UX answered (iOS review #4):** inputs 12, select cards 18. Select cards: 18 everywhere. Inputs: Figma has 18, so 18 stays until the design team answers Q-D15 |
| NH07 | Line height | 1.28 everywhere | iOS 26 and later only | 1.28 × the scaled size (audit F10) | UX confirmed 1.28 and vertical centring (iOS review #7). Accepted while the iOS team finds a fallback for older versions (Q-X06) |
| NH08 | Layout modes | Phone, tablet, Wide | Phone only | Phone values for now; size classes later (audit F17) | **UX answered (iOS review #10):** iOS ships Phone and Tablet, not Wide (DL-39). The values are data from tokens 3.8: `NusukLayout.phone`, `.tablet`, `.wide` (NH20) |
| NH09 | Shadows/01 to 05 | String variables, used on the web | Not in iOS | Not reported | Accepted: native uses the effect styles and the recipes in DESIGN.md › M8 |
| NH10 | Component inventory | 76 component folders | Report lists 51 | Not reported | The 25 newer cards are in section 3. TabBar also holds the action bars (CTAs, cart, filters) that 11 template contracts use; the home bar, TabBar or BottomNav, is open (N14) |
| NH11 | NoticeBar | Inline in the page, stays until the page changes | Built as Toast | Not reported | If the iOS Toast can sit inline and stay, the mapping holds. If it floats or times out, treat NoticeBar as not built |
| NH12 | Token names | Generated `NusukTokens.swift` proposes new names | FoundationUI names (`textHeading` and others) | Not reported | FoundationUI names win on iOS. The generated file is a reference for CI diffs, not a dependency; nobody renames |
| NH13 | Destructive and Secondary-on-dark fills (14 November 2026) | Fate Surface red at 10% (#FF41361A); Secondary on dark Slate at 70% (#303336B3) | Check: an opaque #FFF2F1 or #303336 is now wrong | Check the same | Use the constants; both carry alpha |
| NH14 | Button master slots (14 November 2026) | Both icons, price, Apple Pay, Nafath, Absher, glass behind booleans on `_Button_Master Of Masters` | Not in the report | Not reported | Add the parameters to `NusukButton`; Apple Pay in the app stays `PKPaymentButton` |
| NH15 | Bottom navigation (14 November 2026) | Tab Bar › Landing, Travel, Content, Market on `_BottomTab master`: 95 high, gold current tab | Not in the report | Not reported | Rebuild the bar from section 3 › BottomNav; the iPhone bottom toolbar in Figma is the system toolbar (F7) |
| NH16 | Selection controls (14 November, later) | Chosen checkbox and radio `surface-illumination` (gold); empty checkbox a 1 px `surface-longing` line; errors solid `alerts-surface-solid-error` (switch, radio) or a 2 px `alerts-icons-error` line (checkbox); disabled `surface-03-pearl`; switch MD 42 × 21 | Check RadioGroup and Switch against these | Not reported | Follow Figma; the design team may darken the gold (F16, Q-D01). Watch the questions list before shipping |
| NH17 | List rows (DropdownItem, 14 November, later) | Radio and Checkbox rows: the row is the control; a 24 solid check (`checkmark-circle-02` or `checkmark-square-02`) in `icons-longing` when chosen; padding 12, gap 18, details `notes-2-light` | Dropdown: check | Not reported | The unchosen look is an open question (F19, Q-D04) |
| NH18 | Sheets (14 November, later) | Bottom Sheet BG: 8 inset, corners 42 top and 54 bottom (`radius-ios`), glass instead of a drop shadow; Direction Sheet content 32 / 26 / 48 | NKDynamicHeightSheet: check the corners | Not reported | Follow Figma (F23) |
| NH19 | Steps and StartJourney (14 November, later) | Rebuilt from 🔦 Tracker › Steps and 🎫 Widgets › Start Journey (sizes SM, XS, LR) | Not built | Not reported | Build from the cards and DESIGN.md › M9 › Lists, sheets, steps and widgets |
| NH20 | Layout values per mode (14 November 2026, tokens 3.8) | ⚙️ Foundation › Layout: Mobile, Tablet, Wide | Not in the token files before 3.8 | Not in the token files before 3.8 | `NusukLayout` (Swift struct, Kotlin data class with `LocalNusukLayout`) carries the 11 values that change by mode; `tokens.json` › `modes` |
| NH21 | Android scale (audit S1, S2) | 1:1 | 1:1 | 0.9 on everything but borders and opacity, until UX decides | Trade-off TR-05: hit areas stay 48 dp, text 12 sp (Q-X17); the design team decides in Q-D16 |
| NH22 | Chip heights and padding | 18 / 20 / 24 / 28; side padding 8 / 10 / 12 / 14, icon side 6 / 8 / 10 / 12 (Figma 15 Nov 2026; iOS review #17 asked for 8 and 10, which is now the DL) | Side padding 8 and 10 (iOS review #17: follow the DL) | 16 / 18 / 20 / 24 (audit F14) | Move both to `chip-*` (Q-X18, Q-X22) |
| NH23 | Disabled states | Component colours (fields, switches, Select Card at 70%); buttons 40% | Not in the report | 0.38 everywhere, buttons 0.4 (audit F13) | Component colours where Figma draws them, 0.38 elsewhere (DL-41, proposed; Q-X19) |
| NH24 | Text size | M10: Dynamic Type and font scale to 200% | UX answered that 150% scaling doesn't apply (iOS review #8) | Font scale | Conflicts with M10 and WCAG 1.4.4: keep Dynamic Type on until Q-D18 is answered (Q-X21) |
| NH25 | Font for Latin text | IBM Plex Sans Arabic; Foundation's English mode names Ping AR + LT | «IBM Plex Sans Arabic everywhere» (iOS review #11) | IBM Plex Sans Arabic for both (audit F15) | Ship IBM Plex Sans Arabic for both scripts; the design team confirms in Q-D17 (Q-X20) |
| NH26 | Avatar initials | Fixed style per size | Not in the report | Not reported | UX answered: shrink to fit with 4–8 px at the sides (iOS review #2). Code: 4 px a side up to 42, 8 px from 56 (Q-X27) |
| NH27 | Trackers and Alert (14–15 November, night) | VerticalStepper and Steps rebuilt as replicas of 🔦 Tracker (rail, points, card, fading lines, one-time glow); Alert: Primary neutral, message Light in Ink, Primary + Ghost SM buttons, optional Close | TrackerDots: check the rail per state (Figma's Current has none, F33) | Not reported | Follow the change log's iOS and Android notes; Figma defects F33–F37 are open with the design team |
| NH28 | Status sheets and ratings (17 November 2026) | Bottom Sheet › Error and five General Bottom Sheet types put Fate on retry, pay another way, new booking and the location permission; Location uses the Error status; `_Star` has a progressive blur; the star input's targets are 24 | Check CommonSheetView: Fate only on Delete and the cancellations, Brand for permissions | Same | Code and this handoff follow the Button card's Fate rule and the 48 floor; the design team decides in Q-D33 and Q-D35 (F76, F77, F80, F81) |
| C13 | Dark alert fills | Differ by theme in dark: Info #0C273B gold, #1F6699 green and lavender; Success #0C3B10 and #198022 | Copied exactly | Not reported | Both sides match Figma. No user impact while the app is light-only; decided together with C7 before dark ships |
| — | Icons | Hugeicons in Figma, exported by name | Stand-ins | Not reported | Waiting on the export |

The development team's questions, Q-X01 to Q-X27, are on the [developer questions page](https://claude.ai/artifact/9KcxfMFYRKP3wwrn8n2NaS), with UX's answer beside each; answers save to a shared record and go to the DL team with one button. The same rows are in the [questions list](https://claude.ai/artifact/X98C7uwN3N2KQ4e6GuL8Ah) with the design team's questions (Q-D01 to Q-D20).

## 7. What we need from UX

The iOS team's ten questions, with the answer where the DL already has one.

| # | Question | Answer from the DL | Still open |
|---|---|---|---|
| 1 | The three breakages | Avatar: use the +N avatar pattern. Loading: the collapse is intended; the container keeps the width | Whether either Rawdah or Celebration Cards should be full width |
| 2 | Button sizes | MD 44, SM 38, icon-only icons and 40% disabled are confirmed. On phones LR is 48 and XS is 30; UX answered Phone and Tablet values only (14 November) | — |
| 3 | Radius | Cards 18 confirmed. Fields 18 (Radius/MD, since 12 November); Select Card 18 (Radius/MD); day tabs 12; chips capsule | UX answered inputs 12 against Figma's 18: Q-D15 |
| 4 | Text colours | Body text is #070808, the same as headings: confirmed in Figma | — |
| 5 | Line height | 1.28 for every style, long text included | — |
| 6 | Court Fabrics | Quranic Illumination is the default; every theme ships (UX, 14 November; DL-37) | When and how Court Fabrics is switched on |
| 7 | C13 | — | Decided with C7, before dark ships |
| 8 | Priority of missing components | Use in the 20 template contracts: TabBar 11 (its action bars), SectionHeader 3, Alert 2, Checkbox 0 | The order, and N14: TabBar or BottomNav as the home bar |
| 9 | Icons | The icons are in Figma, exported by their names | The export to the iOS team |
| 10 | Islamic Services pickers | — | Whether the selected row needs a colour |

## 8. How to review

- **iOS storybook:** in debug builds, every component and its variants, and a Foundations page with effects and theme getters.
- **Design Language app (iOS):** `DesignLanguage-iOS` shows the foundations from the real tokens, the storybook, the rules and progress. Ask the iOS team for a build.
- **Deviation log:** `DesignLanguage/dl-deviations.yaml` in the iOS library repo, and section 6 here.
- **DL guide:** the iOS and Android tab of the guide shows this page; the design system holds the token files.
- **Screens to check first:** Umrah Journey companions, the Rawdah ticket card, Celebration Cards, payment and prices, forms, bottom sheets, and the Islamic Services counter and pickers.
- **Android:** the Layout Inspector for sizes, TalkBack and a right-to-left locale for every screen.

## Reference: what each release gives you

| File | What it is | Use it for |
|---|---|---|
| `native/NusukTokens.swift` | Every token as Swift constants (SwiftUI) | A reference and a CI diff for FoundationUI (NH12) |
| `native/NusukTokens.kt` | Every token as Kotlin constants (Compose) | Add to your design-system module; change the `package` line |
| `native/tokens-native.json` | Each token with its Swift symbol, Kotlin symbol and value | Scripts and coding agents |
| *Change log* | What changed, with an iOS and an Android section and the Figma file | Read first, every release |
| `CHANGES-<date>.md` | The full table of one release | Reviewing a pull request |
| `migrations/<date>.json` | The same change as data, with `ios` and `android` names | Codemods and agents |
| `DESIGN.md` › M8, M9, M10, M11 | Foundations, component specs, accessibility, platform notes | The spec behind the numbers |

All of these are in the design system and inside the `nusuk-design-language` skill zip (`reference/`).

## Reference: units

| Figma | iOS | Android |
|---|---|---|
| 1 px (size, space, radius) | 1 pt, `CGFloat` | 1 dp |
| 1 px (text) | 1 pt, scaled by Dynamic Type | 1 sp |
| Line height 1.28 | size × 1.28, in `NusukTextStyle.lineHeight` | `lineHeight` in sp |
| Left and right | `.leading` and `.trailing` | `start` and `end` |
| Radius Full | `Capsule()` | `CircleShape` |
| Opacity 0 to 1 | `Double` | `Float` |
| Colour `#RRGGBBAA` | sRGB `Color` | `Color(0xAARRGGBB)` |

## Reference: names

The generated symbol comes from the token name by one rule. On iOS, FoundationUI keeps its own names (NH12).

1. The first word is the group: `button-padding-md` is in `NusukButton`.
2. The rest is the member in camelCase: `paddingMd`. Kotlin constants start with a capital: `PaddingMd`.
3. A leading number moves to the end: `surface-01-white` is `white01`.
4. Colours live in a palette, grouped the same way: `colors.surface.white01`, `colors.button.primarySurface`.

| Token | Swift | Kotlin |
|---|---|---|
| `space-nr` | `NusukSpace.nr` | `NusukSpace.Nr` |
| `button-height-md` | `NusukButton.heightMd` | `NusukButton.HeightMd` |
| `button-padding-icon-md` | `NusukButton.paddingIconMd` | `NusukButton.PaddingIconMd` |
| `radius-md` | `NusukRadius.md` | `NusukRadius.Md` |
| `scale-44` | `NusukScale.s44` | `NusukScale.S44` |
| `opacity-disabled` | `NusukOpacity.disabled` | `NusukOpacity.Disabled` |
| `body-2-regular` | `NusukType.body2Regular` | `NusukType.Body2Regular` |
| `text-heading` | `colors.text.heading` | `colors.text.heading` |
| `button-primary-surface` | `colors.button.primarySurface` | `colors.button.primarySurface` |
| `alerts-surface-solid-info` | `colors.alerts.surfaceSolidInfo` | `colors.alerts.surfaceSolidInfo` |

If your codebase already has a convention, tell the DL team and the generator follows it; do not rename by hand, because the next release overwrites the file.

## Reference: colours and themes

There are three brand themes, Quranic Illumination (gold, the default), Dome of the Prophet (green) and Court Fabrics (lavender), each light and dark: six palettes.

- **iOS:** `NusukColors.resolve(theme, dark: colorScheme == .dark)` returns the palette. Put it in the environment once, at the root, and read `colors.text.heading` in views.
- **Android:** `NusukPalettes.resolve(theme, isSystemInDarkTheme())` returns the palette. Provide it once with `CompositionLocalProvider(LocalNusukColors provides palette)` and read `LocalNusukColors.current.text.heading`.
- A button over a photo, a video or Ink uses the `OnDark` members (`primarySurfaceOnDark`). That is a parameter of the button, not a theme.
- Dark themes are not ready to ship: the Primary button label has no contrast in dark (Known issues, C7).

## Reference: type

- `NusukType` holds the size, line height and weight of each style. Fonts are not in the file: add IBM Plex Sans Arabic, Light and Regular, to the app.
- **iOS:** build the font with `Font.custom(_:size:relativeTo:)` so it follows Dynamic Type.
- **Android:** sizes are sp, so they follow the system font scale. Add your `FontFamily` with `copy(fontFamily = …)`.
- Test at the largest text size. A one-line title may truncate; a button label must not.

## Reference: not in the token files

| What | Where it is | Why |
|---|---|---|
| Motion | Section 2.1 | Not in `tokens.json` yet (section 5, item 12) |
| Shadows, Glass BG | DESIGN.md › M8, with the iOS and Android recipe | A layered effect has no single constant |
| Button heights on Android Expanded windows (54 · 48 · 38 · 26) | DESIGN.md › M9 | Figma Wide mode is not in `tokens.json` yet |
| Icons | Figma, exported by name (DESIGN.md › M9 › Icons) | Assets, not values |
| Components | DESIGN.md › M9 and the component cards | The coded components are web (React); native teams build from the spec |

## Reference: reading a change-log entry

Every entry has the same parts, in this order.

1. **Figma file:** a link to the file that holds the change. Open it to see the source.
2. **Changed, Added, Removed:** what moved, with before and now.
3. **iOS** and **Android:** the constants that changed, the code shape, and what the platform does that you must work around.
4. **Check before you merge:** numbers you can measure in the Xcode view debugger or the Layout Inspector.

## Reference: check in every pull request

| Check | iOS | Android |
|---|---|---|
| Values come from the token file | No literal size or hex in the view | No literal `dp` or `Color(0x…)` in the composable |
| Direction | Arabic and English: `.leading` and `.trailing` only | `start` and `end` only; test with a right-to-left locale |
| Touch target 48 (44 in the top bar) | `contentShape` | `minimumInteractiveComponentSize()` |
| Name for every control | `accessibilityLabel`; test with VoiceOver | `contentDescription` or `semantics`; test with TalkBack |
| Text size | Largest Dynamic Type size | Font scale 200% |
| Motion | Reduce Motion on | Remove animations on |
| Digits | 0 to 9 in every language | 0 to 9 in every language |
| Measured size | Xcode view debugger | Layout Inspector |

## Reference: platform behaviour to plan for

- **Android, small buttons.** Material 3 `Button` keeps a minimum size of 58 × 40 dp. Build the Nusuk button on a `Surface` or a `Box` with `clickable`, so SM (38) and XS (30) keep their height and the XS icon-only button its 42 width.
- **Android, touch target.** `minimumInteractiveComponentSize()` reserves 48 dp in the layout. DESIGN.md says tap padding must not move layout, which the web components achieve. On Android a row of XS buttons becomes 48 dp high unless you extend the touch area another way. This is open: the Android lead and the DL Manager decide which behaviour is the rule.
- **iOS, touch target.** `contentShape` changes the shape that receives touches. Check on a device that the area really reaches 48 pt above and below a 30 pt button.
- **iOS, toolbar.** The Nusuk toolbar replaces the system navigation bar. If you hide the system bar, check that the back swipe still works.
- **Android, edge to edge.** The floating bottom navigation sits above the system navigation bar: add `WindowInsets.navigationBars`.
- **Token files:** generated on every release and checked for structure, not compiled in the pipeline. A compile error is a DL bug: report it on the DL channel. Kotlin package and symbol names are proposed until the Android lead confirms them.
