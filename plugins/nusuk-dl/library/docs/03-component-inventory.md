# Component inventory

Every public component set in the DL library, with its variant properties, read from Figma on 2 November 2026; Buttons, 🧭 Navigation and 🃏 Cards re-read on 8 November 2026 (Media Cards now live in 🃏 Cards) and again on 10 November 2026, with the new 🛍️ Market library. Every library file re-read on 11 November 2026 (*Known issues › Figma round*); 📻 Switches, ⬇️ Dropdown list, the 🧭 Navigation sheets and Nudges, 🔦 Tracker › Steps, 🏖️ Travel › User Group and 🎫 Widgets › Start Journey re-read set by set on 14 November 2026 (F16 to F25); every file read again that night after the library publish (F33 to F45); chat sets traced in DESIGN.md › M9C. On 17 November 2026, evening, 🧭 Navigation (twice), 🔌 Misc, 🃏 Cards, 🛍️ Market, ✨ Templates-Patterns and 💬 Chat UI were read again (F91 to F103). Sets starting with `_` are private building blocks (masters) and are not listed. The **Card** column names the component in this system that mirrors the set; sets without a card are used straight from Figma.

## Actions — 🕹️ Buttons

| Set | Variants | Properties | Card |
|---|---|---|---|
| CTA | 320 | Kind [Primary, Secondary, Ghost] · Size [LR 48, MD 44, SM 38, XS 30 on phones and tablets; Wide 54, 48, 38, 26] · State [Default, Disabled, Loading, Focused] · Icon [No Icon, Left, Right, Icon Only] · Fate [Off, On] | Button |
| Special CTA | 52 | App [App Store, Google Play, AppGallery, Apple Wallet, Apple Pay] · Size [XL, L, LR, MD, SM, S, XS] · White · RTL | Figma only (third-party badges) |
| Animated Forms CTA | 4 | Steps? · 2nd CTA? · Status [False, True] · Loader? | Button (loading) |

Built from private masters: `_Button_Master Of Masters/Default` (layout, label, icons, Glass BG) and `_Button Trail` (44 variants: Type [Default, Leading, Trailing, Icon Only] · Style [Default, Secondary, Ghost, Fate, Fate Ghost, Green Default, Green Ghost] · Light [On, Off]; Green added 8 November 2026, exposed inside every CTA instance). Local collections: `Buttons Setup` (XS, SM, MD, LR: height, padding, icon-side padding, gap, icon, icon-only) and `Buttons Colors` (Light, Dark, Green: Default, Secondary, Ghost and Fate surface and content). The old CTA wrapper set and the dark CTA set were removed on 4 November 2026.

## Inputs — ⌨️ Inputs, ⬇️ Dropdown list, 🍟 Chips, 📻 Switches, Checkbox and Radio

| Set | Variants | Properties | Card |
|---|---|---|---|
| Input | 72 | Type [Counter, Text Area, OTP, Multi Select, Search, Select, Action, Password, Input, Mobile, Credit Card, Avatar] × Status [Default, Error, Dissabled] × Filled [Off, On] (14 Nov), on `_Input_Master Trail` (Status [Default, Error, Filled] × Disabled); fields radius 18 (Radius/MD) with Shadow/XS | TextField |
| Hint | 5 | Type [Hint, Error, Info, Warning, Success] (Success added 11 Nov 2026) | Hint |
| Error Messages Content | 23 | Type [Name Min2, Name Max15/50/100, IBAN Format, ID Length, Email Format, Mobile Format, Invalid OTP, Passport Length, English Only …] (new 11 Nov 2026) | Figma only (Hint copy) |
| File Uploader | 8 | Type [Defualt, Loading, Uploaded, View] × Status [Default, Error, Dissabled] on `_Uploader_Master` (re-read 16 Nov 2026) | FileUploader (`type`, `status`) |
| Multiple File Uploader | 2 | Status [00, 01] | FileUploader |
| File Uploader Sheet | 1 | — | FileUploader + BottomSheet |
| Dropdown item | 16 | Type [Icon, Text Only, Flag, Avatar] · Selector [Radio, Toggle, Checkbox, Download], on `_Dropdown item list/On`. Re-read 14 Nov 2026: Radio and Checkbox are a solid check in Icons/Longing (F19) | DropdownItem |
| List Screen | 4 | Status [Default, Empty State, Language, Nationality] · Show NoticeBar? · Show History? · Content and Content2 slots. Re-read 14 Nov 2026 | DropdownItem + TextField (search) |
| Chips | 128 | State [Pending, Error, Success, Info, Default, Gold, White] · Size [LR, MD, SM, XS] · Icon · Solid · Background | Chip |
| Switch | 15 | Status [Default (spelt `Defualt` in Figma), Selected, Disabled, Error, Disabled Selected] · Size [SM, MD, LR]; on `_Switch Icon Master` (5, one named `State5`) and `_Switch Master Trail`. Re-read 14 Nov 2026: MD is 42 × 21, error is a solid red track | Switch |
| Checkbox | 15 | Status [Default (`Defualt`), Selected, Disabled, Error, Disabled Selected] · Size [SM, MD, LR]. Re-read 14 Nov 2026: chosen is gold (`surface-illumination`), empty is a 1 px Longing line, error a 2 px red line | Checkbox |
| Checkbox Icon Master | 4 | Status [Default, Selected, Error, Disabled] | Checkbox |
| Radio | 15 | Status [Default (`Defualt`), Selected, Disabled, Error, Disabled Selected] · Size [SM, MD, LR]; on `_Radio Icon Master` (5). Re-read 14 Nov 2026: chosen is gold, the centre a white rounded square | Radio |
| Select Card | 3 | Status [Active, Selected, Disabled], on `_Master Select Card`. Re-read 16 Nov 2026: radius 14, Active white with an Ivory line and the OS shadow, Selected `surface-shade-5` with a gold line; title 14, description 16 (F17 closed, code follows) | SelectCard |

## Navigation — 🧭 Navigation, 🎹 Tabs, 🔦 Tracker, 🔌 Misc

| Set | Variants | Properties | Card |
|---|---|---|---|
| Toolbar | 46 | Process uses the new `_Progress Bar` (90 × 20, 16 Nov 2026) · Type [Secondary Pages / Full Search (new 15 Nov 2026), Profile, TopTabs, Companion MGM, Nusuk AI, Process, DatePicker&Close, Timer, Landings / Search, Landings / LoggedIn, Landings / Guest, Primary Pages / Default, Primary Pages / Search, Primary Pages / Title (new 14 Nov), Primary Pages / URLs (was Primary Pages / Tabs), Secondary Pages / Default, Secondary Pages / No Actions, Secondary Pages / Search, Secondary Pages / Tabs, Modal / Default, Modal / Search, Marketplace Prodcut, Almatar] × Darkmode [Off, On] (22 types, read 14 Nov 2026) | Toolbar |
| Tab Bar | 16 | Actions on `_BottomTab master` has a Text slot, the terms line and a side button (16 Nov 2026) · Active [Landing, Travel, Content, Market/Cart +, Content Share, Actions, Action & Input, Loading, Filters, Floating Cart Empty, with Price, Cart, Floating Profile, Empty, Keyboard, Inner Pages (new 15 Nov 2026; BottomNav `inner-pages`)] · RTL · Primary Action? · Ghost Action? · Show Text? · Text and Slot slots (14 Nov: the bottom navigation screens moved in here) | TabBar, BottomNav (Landing, Travel, Content, Market) |
| `_Tab` (private, replaces Tab on 14 Nov) | 8 | Style [Default, Current, Icon Only, Pill] × Darkmode [Off, On] | NavTab |
| `_BottomTab master` (private; Buttom Navigation removed 14 Nov) | 12 | Mode [Primary, Primary/Small, InnerPage, Marketplace, Interactions, Actions] × Darkmode [Off, On] · Nudge slot | BottomNav |
| Nudges (new 10 Nov) | 2 | Expand [On, Off], on `_Nudges Master` | Nudge |
| Haramin Icon (new 14 Nov) | 2 | Darkmode [Off, On]: Kaaba, Masjid and Maqam cross-fading on a 6 s loop in the prototype (coded 17 Nov 2026; Q-D40) | HaramainIcon (BottomNav special tab) |
| ~~Toolbar - Bottom - iPhone~~ | — | Removed from 🧭 Navigation on 14 Nov 2026, night (was 5 types built from Apple's iOS kit, F7 closed) | Use the system toolbar |
| Home Item, Marketplace Cart, Tab, Buttom Navigation | — | Removed from Figma on 14 Nov 2026 (HomeItem and TabBar `market` still render in code) | — |
| _Status Bar (private since 8 November) | 2 | Color [Black, White] | StatusBar (mockups) |
| Progress | 1 | RTL, on `_Form Progress Indicator` (Status P20, P40, P60, P80, P100 · Show Check Mark) and `_Master Progress Indicator`; rebuilt in code 17 Nov 2026 (F93) | ProgressRing |
| Circular progress indicator (new 17 Nov 2026) | 10 | Progress [0, 10, 30, 50, 80] × Darkmode [Off, On]; edited during the read, labels and drawings disagree (F92) | CircularProgress (Proposed) |
| `_Progress Bar` (private, 17 Nov 2026) | 6 | Step [01, 02, 03] × Darkmode [Off, On, Darkmode3, Darkmode5, Darkmode6] (F91), on `.Building Blocks` (Full On, Off) | Toolbar `process` (`step`) |
| Group Users | 2 | RTL | AvatarGroup |
| Direction Sheet | 4 | Options [Restore, 2 Options, Details, Filter] (Login Sheet and Session timeout removed 15 Nov 2026) · Show Icon? · Show subtitle? · re-read 14 Nov 2026: Bottom Sheet BG corners 42 / 54, Glass/Full, content 32 / 26 / 48 (F23) | DirectionSheet |
| Support Bottom Sheet | 2 | Status [Default, SOS], on `_Support Bottom Sheet Master`: an Ivory quick-actions sheet behind a white questions sheet (gap −130); SOS: instant help and numbers. Re-read 14 Nov 2026 | BottomSheet |
| Marketplace Cart | 2 | With Items [Off, On] | TabBar (`market`, floating carts) |
| Pagination | 6 | Direction [Vertical, Horizontal] · White · Size [Default, SM]; item master has Default, Active, Filled | Pagination |
| Header Tabs | 4 | Size [LR, SM] · Background [On, Off]; chosen tab white (re-read 15 Nov 2026) | HeaderTabs |
| Number Notification | 5 | Status [Default, Alert, Success, Gold, White] | CountBadge |
| Vertical Stepper Mobile | 9 | State [Done, Current, Next] · Step [Start, Middle, Last], on `_Stepper Step Master Mobile` (booleans Status, Description, Last Update, Alerts, CTAs), `_Stepper Point` (Done, Current; Number) and `_Tracker Status` (1–3 chips). Re-read 14 Nov 2026, night: code rebuilt as a replica (F33–F37) | VerticalStepper |
| Headers | 14 | 17 Nov 2026: new Location 02 Section Title / Centered and an Actions slot (02 Section Title now 32 / 18 / 18) · Location [Widget Header, 02 Section Title, 02 Section Title / Centered, 01 Hero, XL Header, Separate Icon, 03 Collapse, 03 Family, Section Title With Divider, Simple Title, Filter / Search, XS Legend, 04 Legend, 05 Complex] · RTL · Show CTA? · Show Description? · Show Separator? | SectionHeader |
| Step | 3 | State [Previous, Current, Next] | Steps |
| Steps | 8 | Status [OrderReview, OrderPreparation, OrderShipped, OutForDelivery, Delivered, CancellationRequested, CancellationProcessing, RefundInProgress] (last three order statuses named 12 Nov 2026), on `_Step Master`. Re-read 14 Nov 2026: stage icons per status; code rebuilt (F20), then rebuilt as a replica that night (18 / 32 spacing, gradient lines, Breathing Effect, F38) | Steps |

## Overlays — ⬆️ Modals & Sheets, ‼️ Status Handlers

| Set | Variants | Properties | Card |
|---|---|---|---|
| Collapsed Section | 4 | Status [On, Off] · Background [Off, On] | CollapsedSection |
| Fullscreen Sheet With (X), With (<), Auxiliary Task (X) Only, Terms and Conditions | 4 | — | BottomSheet (full screen) |
| Bottom Sheet BG | 3 | Top Action [Grabber, Arrow, Static] · Arrow Direction (instance swap, 17 Nov 2026) | BottomSheet `topAction`, StatusSheet |
| Bottom Sheet | 7 | Status [Default, Success, Information, Warning, Error, Brand, Image], on `_General_Bottom_Sheet` (booleans Show Chips, Show Icon, Description, Instruction, T&C Statement, Primary CTA, Ghost CTA, Prev. Step; slot Additional Content). Re-read 17 Nov 2026: code rebuilt (F76, F79) | StatusSheet |
| General Bottom Sheet | 19 | Type [Something Went Wrong, No internet, Unsaved Changes, Download Incomplete, Location, Enable Notification, calendar access, Companion MGM, General Template, Priority, Location 2nd time, Full Screen Error, calendar 2nd time, Payment Failed, Refund, Wallet Refund, Delete Confirmation, Force Update, Payment session expired] · Content (slot). 17 Nov 2026: Force Update and Payment session expired added, Session Timeout and Complete Profile removed; unpublished changes (F85) | StatusSheet `template` (15 types); EmptyState (No internet, Full Screen Error); compositions (Companion MGM, General Template) |
| Reason Selection | 2 | Others [On, Off], on `_Reason Selection Master` (Dropdown item cards, Text Area) | ReasonSelection (new 17 Nov 2026) |

## Feedback — ‼️ Status Handlers, 🛎️ Notifications

| Set | Variants | Properties | Card |
|---|---|---|---|
| NoticeBar | 5 | Color [Info, Alert, Success, Error, Default] · RTL, on `_NoticeBar Master` (booleans CTA, Close, Description); NoticeBar Location (placement, new 17 Nov 2026) | NoticeBar |
| Alerts | 5 | Type [Info, Success, Warning, Error, Primary], on `_Alert` (Icon, Heading, Close, Below Buttons; Type Default, System Update). Re-read 14 Nov 2026, night: Primary is neutral, message Light in Ink; code rebuilt (F39). System Update re-read 17 Nov 2026: `stacked` | Alert |
| Empty Status | 4 | Type [Visual, Icon] · Location [Full Page, List], on `_Empty Status Master` (booleans Secondary CTA, Show Icon, Show Illustration). Re-read 17 Nov 2026: code rebuilt | EmptyState |
| Section Error | 1 | — (published) | SectionError (new 17 Nov 2026) |
| App Notification | 2 | Active [Off, On] | AppNotification |
| Notification Slots | 2 | Collapsed · List | AppNotification |
| LiveActivity, LiveActivity/LockScreen/PrayerTime, /Athkar, /Quran | 12 | Prayer time, timelines, Athkar (community / default, short / long), Quran (playing, paused) | PrayerLiveActivity |
| DynamicIsland Compact / Minimal / Expanded (Prayer time, Athkar, Quran) | 22 | Leading, trailing, countdown, Qibla, reading, listening | Figma only |
| Athkar reminder, Athkar Progress, Athkar | 13 | Day / evening, glass, completed | Figma only |
| Prayer Time Animation | 6 | Prayer [Fajr, Duha, Dhuhr, Asr, Maghrib, Isha] | Figma only |
| Notification, Notifications (lock screen) | 4 | — | Figma only |

These Notifications components currently sit on a page named *Playground*; see *Known library issues*.

## Cards — 🃏 Cards

| Set | Variants | Properties | Card |
|---|---|---|---|
| Member Card / Default | 4 | Horizontal [Full, Horizontal] · Disabled · Details, Action, Avatar slots | MemberCard |
| Member Card / Actionable | 2 | Swaped · Active | MemberCard (`actionable`, `swiped`) |
| Member Card / Selection | 2 | Selected | MemberCard (`selectable`) |
| _Badge Type, _Card Avatar (private) | 2 + 2 | Type [Contact, Absher] · Avatar [1, 2] | MemberCard (`badge`, `people`) |
| Request Card Status | 48 | 46 statuses + Approved (new 14 Nov, مقبول, `document-validation`) + Confirmed Booking (new 17 Nov, حجز مؤكد, `document-validation`); full list in DESIGN.md › M9 › StatusChip | StatusChip |
| Request Cards | 12 | Type [Electric Cart, Flight, HHR, Hair Cut, Hotel, Rawdah, Ticket, Umrah, Marketplace, Umrah Package, Hajj, Message (a copy of Hair Cut, F96)] (SIM removed 10 Nov 2026); built on `_Request Card Master` (Status [Active, Empty State] · Upcoming? · Past? · Show Market Order? · Alert? · Content slot) | RequestCard (all 12 + Empty State) |
| Option Cards | 13 | Type [Default, with Icon, Simple list, with Action, Icon with Action, 2 Actions, 2 Actions On, Counter, LR Icon with Action, LR Icon, Top Icon, Requirement Item, Product] (renamed 17 Nov 2026); built on `_Master Card` (Mode [Default, Transprent, Gray] · Partner Logo? · Title? · Status? · Left and Right slots) | OptionCard (all 13; Figma names accepted) |
| Media Cards | 23 | Type [Marketplace Grid, Marketplace List / Out of stock, Marketplace Grid / out of stock (15 Nov 2026), Streem, Athkar, Flight, Ticket, Train, Resturants, Activitie, Article, Video, Sound, Attraction, More, Marketplace / List, Marketplace (was Marketplace / Grid), Marketplace / out of stock, ADS, Short, Image, Hotel, Package, Author, Museum (new 14 Nov, night)]; built on `_Media-Card` (Group × Solid BK), `_Highlight-Icons` (21 types, Out of stock added) and `_Highlight-Author`; `_Highlight Master Component` is gone (F42). Moved here from 🏠 Landing Experience V2 | MediaCard (Museum not coded yet) |
| Add to Cart CTA (new 10 Nov) | 7 | Status [cart, one, many, Remove, Notify me, arrow, Status7 (17 Nov, «اشتر», F99)] | AddToCartCTA (`buy` = Status7) |
| Price Options (new 10 Nov) | 2 | Vertical [False, True] · Show Price? · Show Add To Cart? · Show CTA? · Discount? (17 Nov 2026; F97, F98) | PriceOptions |
| Siblings in the same file | — | Option Card_Master (Image, SM, LR, XS) · Faces (Group) · Playlist (Vertical) · Hints Widget (Vertical, Horizontal, Direction3, Direction4 = HintWidget `logo`, 14 Nov) · Logo Icons (7 entities) · City Logo · Logos Group | CategoryTile · FaceTile · PlaylistCard · HintWidget (coded 9 November 2026); logos Figma only |
| Layout patterns | 10 | Categories (2), Cards Slider, Playlist, Leaderboard, Guide, Services Box, List Side by Side, Bento Grid (3 slots), Cards List | Categories, CategoryChips, CardsSlider (`layout` row, grid), PlaylistRow, Leaderboard, Guide (`variant` card, plain), ServicesBox, ListSideBySide, BentoGrid, CardsList (coded 9 November 2026) |

## Market — 🛍️ Market (new 10 November 2026; re-read 17 November 2026: 15 public sets, 5 private)

Not coded yet (MK8). Sizes and rules: DESIGN.md › M9 › Market.

| Figma set | Variants | Properties | Code |
|---|---|---|---|
| Product Header | 1 | — | Figma only |
| Product Info | 2 | State [Gift v2, Product Description/forTesting] | Figma only |
| Product Photo | 2 | Status [On, Off] | Figma only |
| Product Size Options (unpublished) | 11 | Type [Size, Color, SelectedSize] · Selected · State | Figma only |
| Product Item | 5 | Status [Off, Default, Remove Product, cann't delever, Less Available] | Figma only |
| Items List | 2 | Expanded [Off, On] | Figma only |
| Categories | 2 | Status [Off, On] | Figma only |
| Gifting · Featured Services/Shipping · eSIM Card · Product Header | 1 each | — | Figma only |
| Select Location (a set since 17 Nov 2026) | 2 | Selected [On, Off] (F101) | Figma only |
| `_Udhiya Details`, `_Contact Details` (private, new 17 Nov 2026) | 4 · 2 | Status [Off, On] × Size [LR, SM] · Delete? · Status [Off, On] (F100) | Figma only |
| Order Basic Information | 2 | Type [Order Details, Cancellation] | Figma only |
| Shippment Tracker | 4 | Type [Sim/Pickup, Package, eSim/Install, Sim/Nafath] | Figma only |
| TrustedByNusuk | 4 | Property 1 | Figma only |
| Animated Gift | 4 | — (Breathing Effect left 🛍️ Market on 17 Nov 2026; Shippment Tracker uses the library copy) | Figma only |

## Patterns and templates — 🏠 Landing Experience V2 › CMS (9 November 2026)

| Figma | Code |
|---|---|
| Headers › Location 02 Section Title, 03 Collaps (🧭 Navigation) | SectionTitle |
| Product Category (Status 3D) | ProductTile |
| Rawdah Landing › Quick Actions | UpcomingRequests |
| Rawdah Landing › Toolbar (Featured BG, Navbar Inner Page, Featured Actions) | FeaturedHeader |
| Rawdah Landing `18147:16034` (short) and `18147:15994` (all sections) | Page with templates `rawdah-landing`, `rawdah-landing-full` (`templates/rawdah-landing.json`) |

Section model, composition rules and metrics: *DESIGN.md › M9P Patterns and templates*.

## Data display — 👩🏻‍💻 Avatar, ⭐️ Rating & CSAT, 📅 Date & Time

| Set | Variants | Properties | Card |
|---|---|---|---|
| Avatar | 30 | Kind [Initials, Icon, Picture, Emojis] · Size [xs, sm, md, lg, xl] · State [Negative, Positive] | Avatar |
| Rating Bar | 11 | Rating [Unrated, 0.5 … 5], on `_Star` (State Full, Half, Half/RTL, Empty; private). Re-read 17 Nov 2026: code rebuilt (F80, F81) | RatingBar |
| Ratings | 3 | Status [Box, Mini, Standard] · Reviews? (Box's count string, F78) | RatingBar `variant`, `count` |
| Customer Feedback Emojis | 10 | Type [Dissatisfied, Unsatisfied, Neutral, Satisfied, Very Satisfied] · Active, on Smiles (re-read 16 Nov 2026) | FeedbackEmojis |
| Smiles | 5 | Face [Awful, Bad, Okay, Good, Great] (new 16 Nov 2026) | FeedbackEmojis (mouths) |
| Customer Feedback | 1 | Unpublished (16 Nov 2026). Booleans Product Satisfaction, Effort Satisfaction, Recomendation, Text Area, Icon, Emoji (only Emoji is wired, F63) | CustomerFeedback, NpsScale |
| Customer Feedback_Mobile | 4 | State [Default, Unsatisfied, Satisfied, Very Satisfied] (16 Nov 2026; Satisfied draws Very Satisfied, F57) | CustomerFeedback in BottomSheet |
| NPS Survey | 7 | Status [00–06] on NPS Survey Master: CSAT with the reasons list and comments (no 0–10 scale, F62) | CustomerFeedback `reasons` |
| Product Review Card, Total Review Card | 2 | — (published) | ReviewCard, ReviewSummary (new 17 Nov 2026; F82) |
| Customer Feedback Bottom Sheet | 1 | — (unpublished changes, F85) | CustomerFeedback `scale="stars"` (17 Nov 2026; F83) |
| Day Tab Selection | 3 | Status [Available, Unavailable, Selected] | DayTab |
| Availability Status | 4 | Status [Almost Full, Available, Filling Up, Not Available] | DayPicker |
| Date Picker | 3 | View [Calendar, Year, Month] | DayPicker in BottomSheet |
| Months_Interaction | 3 | Months [Yesterday, Today, Tomorrow] | Figma only |
| Month Picker Master | 3 | Status [Default, Selected, Disabled] | Figma only |
| Day Picker | 4 | State [Unselected, Current Date, Selected Date, Disabled] · Indicator? · Moon? | DayPicker |
| Year Picker | 2 | Selected | Figma only |
| Time slot card | 3 | Selected [Default, Selected, Disabled] | TimeSlot |
| Time & Slots section | 4 | Active · Type [Normal, Skeleton, Gender Unavailable] | TimeSlot |
| Time Picker | 2 | Type [Hours, Minutes] | Figma only |
| Pray Card | 2 | Selected | PrayCard |
| Information | 4 | Status [Default, Good, Alert, Danger] | InfoTile |

## Features — 💸 Payment, 🎥 Media, 💬 Chat UI, 🗺️ Map, 🏖️ Travel, 🎫 Widgets, Nusuk Companion

| Set | Variants | Properties | Card |
|---|---|---|---|
| Payment Box | 5 | Status [Default, Simple, Pay Partial (+2)] | PaymentDetails |
| Payment Details | 4 | Collapse · Type [Price, Refund] | PaymentDetails |
| Tickets Payment Details Master | 4 | Status · Discount | PaymentDetails |
| Image Gallery | 2 | Multiple images | Figma only |
| Video | 2 | Status [Video, Live] | Figma only |
| Player Icons | 3 | Status [Pause, Play, Replay] | SoundPlayer |
| Single Item | 2 | RTL | DropdownItem |
| ~~Sound Player~~ | — | Removed 14 Nov 2026, night (was Size [Full, Mini, SpeedActive]); the player is now a frame inside `Sound Player Screen / Quran` and `/ Others` (edits not published, F41) | SoundPlayer (last published version) |
| AI Chat Messages | 24 | Chat answers and questions: text, voice, error, days, slots, password, mobile, OTP, gender, passport, border number, IBAN, face scan, location guide, hotel and flight selection, single choose (Single Choose new 12 Nov 2026 on node 80626:36740; Flights Selection moved to 80652:10299; the second `Style=Password` renamed `Style=Mobile`; edits not published) | ChatMessage + Proposed chat lane (DESIGN.md › M9C) |
| Booking_Ticket | 4 | Umrah Packages, Flight Ticket, Rawdah Permit, Train (edits not published) | Proposed: BookingTicket |
| Nusuk Bot | 2 | Location [Makkah, Madina] | Proposed: Bot |
| Nusuk Bot Messages | 4 | Makkah and Madinah, insight and pill | Proposed: BotNote |
| AI Tab Bar | 7 | Status [Recording, Default, Text, Typing, Limit reached, Recorded, While responding] | Proposed: TabBar variant (chat lane) |
| Chat Element | 4 | Removed from 💬 Chat UI by 11 Nov 2026; replaced by `_Chat Container Master` | ChatMessage |
| Try Nusuk AI | 6 | Case [Build Trip, Rawdah, Content, Support Center, Menu, Landing] | Figma only |
| Pin Event | 2 | Type [Icon, Logo] | MapPin |
| Select Location (screen, widget), Full Map | 3 | — | Figma only |
| From To / Destination, From To / Duration | 5 | Status [Default, Active, Disabled] | FromTo, DateRange (17 Nov 2026) |
| Flight Ticket | 4 | Selected [On, Off, Skeleton] · Version [Full, Mini] | FlightTicket (Full and Mini, rebuilt 17 Nov 2026); the chat lane's FlightTicketFull should move to it (AI9) |
| Hotel (was Hotel Offer) | 1 | — renamed 14 Nov 2026, night; not published, so libraries and the chat lane still say Hotel Offer (F43) | HotelCard (17 Nov 2026); the chat lane's HotelCard should move to it (AI9) |
| Ribbon/On, Feature Box, Visa User Block, Place Details, Ticket Master Empty State, Seperator | 7 | Ribbon, FeatureBox and VisaUserBlock coded 17 Nov 2026 · New in 🏖️ Travel, 11 Nov 2026. Seperator has 2 variants since 12 Nov 2026 (`Selected` = Off, On: the selected ticket notch, `Surface/shade 4` with a `Surface/Longing` stroke) | Figma only |
| Hotel Ticket | 3 | Selected [Off, Skeleton] · Version [Full, Mini] · removed from 🏖️ Travel by 11 Nov 2026 | FlightTicket pattern |
| Room Layout | 2 | Selected · removed from 🏖️ Travel by 11 Nov 2026 | OptionCard pattern |
| Step Card | 17 | Status [Current, Completed, Disabled, Action, Track, Tag, Req. Completed, Req. Progress, Expanded, Companions, List Users, In Progress, Exception Request, Cancellation, Failure, Cancelled] · image · removed from 🏖️ Travel by 11 Nov 2026 (FR7) | StepCard |
| featured airport | 2 | Selected | FeaturedAirport (17 Nov 2026) |
| Places & Events | 4 | Type [Package, Ticket, Simplify Hotels, Events] · removed from 🏖️ Travel by 11 Nov 2026 | MediaCard pattern |
| Description Master | 4 | Status · RTL | CollapsedSection |
| Details List Item | 2 | Odd/Even · Show Icon? · Availability? · Show Value? | DetailsListItem |
| QR Code Status | 6 | Status [Default, Used, Expired, Blurred, Cancelled, Error] | QRCodeStatus |
| QR Code | 4 | Type [Normal, Priority, Child, Premium] | QRCodeStatus |
| User Group | 2 | Active [Off, On]: seven avatars (Off 42 · 42 · 42 · 56 · 42 · 42 · 42; On 24 · 42 · 56 · 72 · 56 · 42 · 24) under a caption. Re-read 14 Nov 2026 (F22) | AvatarGroup (`preset`) |
| Ticket Master | 2 | Premium | Figma only |
| Manasek | 3 | Topic [Hajj, Rawdah, Umrah] | Figma only |
| Start Journey | 3 | Size [SM, LR, XS]: SM is Start Journey Animated, XS three tiles, LR a section title over three cards. Re-read 14 Nov 2026 (F21) | StartJourney (`size`) |
| Start Journey Animated | 3 | Status [Haj, Umrah, Rawdah] (Figma spells Haj), on `_Master Icon Card` | StartJourney (`size="sm"`, `journey`) |
| Nusuk Bot, Nusuk (Makkah, Madina), Nusuk (12 states) | 18 | Companion character states | Figma only |

## Foundations and assets

| File | Holds |
|---|---|
| ⚙️ Foundation | 128 semantic colour tokens × 3 themes × light/dark, typography (Arabic, English), layout (Mobile, Tablet, Wide), effects, motion, text and effect styles. All in `tokens.json` here. Also [`Glass BG`](https://www.figma.com/design/avzbRTP9CgpbbO8NgU5Ymo?node-id=65346-1296) (12 variants, read 17 November 2026: Mode [Default, Highlighted, Active] × Dark × Glass [On = iOS, Off = Android] on `_Glass BG Master`; it replaced the Current × Navigation × Dark set of 8 November, which 🃏 Cards still uses, F66), drawn in code by `Glass` (`kind` per component) and shown whole by the `GlassBG` card |
| 🎨 Icons | 4,428 Hugeicons sets |
| 🖼️ Visual Assets | 46 sets of images and illustrations |
| ⚡️ Animation | 31 sets, 112 variants: loading, like, notification, Face ID, scan card and photo, Kaaba, prayer time, wallet, sun and sunset, timer, header effects, onboarding controller |
| 📱 App Assets, 🕋 Hajj Theme, 🕋 Nusuk Brand, Nusuk Brand (slides) | App icon and mockups, the seasonal Hajj theme, brand basics and the brand deck |
