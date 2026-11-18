# Nusuk AI chat · component cards (Proposed lane)

Every chat card in one file; search `# <Name>`. One file per card in the GitHub repo (chat/cards/) and the developer package.

Contents: AddedNationalities · BookingTicket · BorderNumber · Bot · BotNote · Chips · Days · DaysAnswer · ErrorMsg · Fld · FlightTicketFull · FlightsSelection · GenderField · GeneralError · HotelCard · HotelChoose · IbanField · Liveness · Loading · LocationGuide · LogosGroup · Message · MobileField · NafathAnswer · NationalitySearch · Otp · PassportAttach · PassportNumber · PassportPreview · PasswordField · Question · SelCard · SingleChoose · Slots · SlotsAnswer · TabBar · Text · Voice


---

# AddedNationalities  ·  *Proposed*

Removable chips with flags (Button Secondary XS icon-left today).

**Status:** Proposed as a variant / prop of DL **Chip**.  
**Figma source:** 💬 Chat UI › Name + Nationalities — Label `80470:16139` · Chips `80470:16140`.  
**Code today:** `NusukChat.AddedNationalities` in nk-chat.js (built with: CTA Secondary XS Icon=Left (cancel-circle) · _Button Trail Leading · Flags Small).

## Props

| Prop | Notes |
|---|---|
| `items` | code[] |
| `onRemove` | (code) |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# BookingTicket  ·  *Proposed*

Booking_Ticket (4 statuses).

**Status:** Proposed as a new DL component.  
**Figma source:** 💬 Chat UI › Booking_Ticket — Umrah Packages `80632:38115` · Flight Ticket `80632:38117` · Rawdah Permit `80632:38119` · Train `80632:38121` · Master `80632:38068`.  
**Code today:** `NusukChat.BookingTicket` in nk-chat.js (built with: Nusuk Bot 36 · DL Chips (pending/success/default) · NusukChat.LogosGroup (code) · CTA Primary SM icon-only arrow-left-02).

## Props

| Prop | Notes |
|---|---|
| `status` | "umrah"\|"flight"\|"rawdah"\|"train" |
| `onOpen` |  |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# BorderNumber  ·  *Proposed*

Select Card without radio + dependent input.

**Status:** Proposed as a variant / prop of DL **SelectCard**.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=Border Number — Variant `80607:18463` · رقم التأشيرة `80607:18655` · رقم الحدود `80607:18656` · Input `80607:18657`.  
**Code today:** `NusukChat.BorderNumber` in nk-chat.js (built with: DL Select Card (no radio) · audit-01 · airplane-landing-02 · input label “رقم %s”).

## Props

| Prop | Notes |
|---|---|
| `kind` | "border"\|"visa" |
| `onConfirm` |  |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# Bot  ·  *Proposed*

Nusuk Bot avatar, Makkah / Madinah, live eyes. Figma section is “Beta – Do Not Use” (F1).

**Status:** Proposed as a new DL component.  
**Figma source:** 💬 Chat UI › Nusuk Bot · _Eyes — Location=Makkah `80559:28820` · Location=Madina `80559:28823` · _Eyes (7 frames) `80559:28826`.  
**Code today:** `NusukChat.Bot` in nk-chat.js (built with: Gold body = surface-longing → surface-shade-4 (gold) · green body #288A42 → #E0FAD1 (not DL tokens) · glow + 4px layer blur · ⚠ section "Beta – Do Not Use").

## Props

| Prop | Notes |
|---|---|
| `location` | "makkah"\|"madinah" |
| `size` | (24) |
| `motion` | "live" (default: follows pointer, idle glances + blinks) \| "prototype" \| "sequence" \| "static" |
| `frame` | (static) |
| `mirror` |  |
| `label` |  |
| `eyes` | false (the 12×14 mark in a user question row, 17 Nov) |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# BotNote  ·  *Proposed*

Nusuk Bot message (insight / pill) with gradient text.

**Status:** Proposed as a new DL component.  
**Figma source:** 💬 Chat UI › Nusuk Bot Messages — Default (Makkah insight) `80559:28807` · Variant3 (Madinah insight) `80559:28810` · Variant2 (Makkah pill) `80559:28813` · Variant4 (Madinah pill) `80559:28816`.  
**Code today:** `NusukChat.BotNote` in nk-chat.js (built with: Light/Body/Two gradient text (black → text-link | alerts-text-success → #666) · Regular/Notes/One · pill tint shade-5 gold / #E4FBEA green).

## Props

| Prop | Notes |
|---|---|
| `location` |  |
| `variant` | "insight"\|"pill" |
| `text` |  |
| `motion` |  |
| `bot` | optional false (drops the bot when a Nusuk message follows) |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# Chips  ·  *Proposed*

Answer chips: Chip White LR with arrow-left-02, as a group.

**Status:** Proposed as a variant / prop of DL **Chip**.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=Default — User=Nusuk `80392:4581`.  
**Code today:** `NusukChat.Chips` in nk-chat.js (built with: DL Chips (State=White, Size=LR, Icon=Right, arrow-left-02) · Content No BG; with buttons: DL Button MD, leading arrow-left-02 (Arabic) / arrow-right-02 (English)).

## Props

| Prop | Notes |
|---|---|
| `items` | string[] |
| `onPick` | (text, i) |
| `question` | optional  |
| `buttons` | optional (render each as DL Button MD, 15 Nov 2026) |
| `kind` | optional (primary \| secondary, with buttons) |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# Days  ·  *Proposed*

Question card + DL DayPicker month grid.

**Status:** Proposed as a new DL component.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=Days — User=Nusuk `80587:9465`.  
**Code today:** `NusukChat.Days` in nk-chat.js (built with: DL Day Picker (state × availability) · Months_Interaction · DL Button).

## Props

| Prop | Notes |
|---|---|
| `monthLabel` |  |
| `year` |  |
| `today` |  |
| `selected` |  |
| `moons` | [] |
| `onConfirm` | (day) |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# DaysAnswer  ·  *Proposed*

Date answer.

**Status:** Proposed as a variant / prop of DL **ChatMessage**.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=Days — User=User `80601:3360`.  
**Code today:** `NusukChat.DaysAnswer` in nk-chat.js (built with: Light/Display/Two).

## Props

| Prop | Notes |
|---|---|
| `date` |  |
| `question` | optional  |
| `onEdit` |  |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# ErrorMsg  ·  *Proposed*

Error message = DL Alert (error) + recovery chips.

**Status:** Proposed as a variant / prop of DL **ChatMessage**.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=Error — User=Nusuk `80392:4595`.  
**Code today:** `NusukChat.ErrorMsg` in nk-chat.js (built with: DL _Alert (Error, alert-02) + DL Chips (or DL Button MD with buttons)).

## Props

| Prop | Notes |
|---|---|
| `text` |  |
| `items` | (recovery chips) |
| `onPick` |  |
| `buttons` | optional  |
| `kind` | optional  |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# GeneralError  ·  *Proposed*

A question that stops the flow: the 72 error mark, the message (Body 1) and one Primary CTA (Figma Style=General Error, 19 Nov 2026).

**Status:** Proposed as a new DL component.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=General Error — User=Nusuk `80759:6908`.  
**Code today:** `NusukChat.GeneralError` in nk-chat.js (built with: Question card (Nusuk/BG) · error mark: Alerts/Surface/Error circle 72 with alert-01 38 in Alerts/Icons/Error · Body 1 · DL Button Primary MD (Icon Left)).

## Props

| Prop | Notes |
|---|---|
| `text` | (\n for a line break) |
| `type` | optional  |
| `typeIcon` | optional  |
| `cta` | optional (label) |
| `ctaEl` | optional  |
| `onConfirm` |  |
| `onBack` | optional  |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.

# Fld  ·  *Proposed*

Trailing slot (icon button / action button / logo) and floating label.

**Status:** Proposed as a variant / prop of DL **TextField**.  
**Figma source:** ⌨️ Inputs › Input (Type Input, Action · Status Default, Error, Disabled · Filled Off, On) — Input `68394:7766` · Type=Input, Status=Default `68394:7797` · Type=Action, Status=Default `68394:7857`.  
**Code today:** `NusukChat.Fld` in nk-chat.js (built with: DL classes nk-field / nk-field-box + DL Hint).

## Props

| Prop | Notes |
|---|---|
| `label` |  |
| `placeholder` |  |
| `value` |  |
| `onChange` |  |
| `state` |  |
| `hint` |  |
| `lead` |  |
| `trail` |  |
| `floating` |  |
| `type` |  |
| `inputMode` |  |
| `dir` |  |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# FlightTicketFull  ·  *Proposed*

Version=Full: countries, flags, duration arc, tags, ribbon, airline group, seats, per-traveller price.

**Status:** Proposed as a variant / prop of DL **FlightTicket**.  
**Figma source:** 🏖️ Travel › Flight Ticket › Version=Full (Selected Off, On, Skeleton) — Flight Ticket `70393:18670` · Selected=Off, Version=Full `70393:18671` · Selected=On, Version=Full `70393:18673` · Selected=Skeleton, Version=Full `70393:18675` · _Master_Flight Ticket `70393:18605`.  
**Code today:** `NusukChat.FlightTicketFull` in nk-chat.js (built with: DL FlightTicket is the compact version; this is the Full version, as the chat file uses it).

## Props

| Prop | Notes |
|---|---|
| `flight` |  |
| `selected` |  |
| `urgency` |  |
| `onSelect` |  |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# FlightsSelection  ·  *Proposed*

Filters + Flight Ticket (Full) list + show all.

**Status:** Proposed as a new DL component.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=Flights Selection — Variant `80652:10299`.  
**Code today:** `NusukChat.FlightsSelection` in nk-chat.js (built with: Flight Ticket (Version=Full) × 3 · Ribbon · CTA Ghost MD (arrow-expand-02) · Primary MD).

## Props

| Prop | Notes |
|---|---|
| `title` |  |
| `filters` | [] |
| `flights` | [] |
| `urgency` |  |
| `onConfirm` | (flight) |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# GenderField  ·  *Proposed*

Select Card with custom icon (hijab / haji).

**Status:** Proposed as a variant / prop of DL **SelectCard**.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=Gender — Variant `80607:17682` · أنثى `80607:18050` · ذكر `80607:18051`.  
**Code today:** `NusukChat.GenderField` in nk-chat.js (built with: DL Select Card (Active / Selected) · hijab, haji).

## Props

| Prop | Notes |
|---|---|
| `value` |  |
| `onConfirm` | (value) |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# HotelCard  ·  *Proposed*

“Hotel Offer”: no DL equivalent (MediaCard has no specs row or nights).

**Status:** Proposed as a new DL component.  
**Figma source:** 💬 Chat UI › Hotel Offer — In variant `80625:21403`.  
**Code today:** `NusukChat.HotelCard` in nk-chat.js (built with: Media Cards/Image=01 · Like Icon · star · Hajj Service · door-02 · bed-double · man-woman · fire-03 · riyal).

## Props

| Prop | Notes |
|---|---|
| `hotel` |  |
| `selected` |  |
| `urgency` |  |
| `onSelect` |  |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# HotelChoose  ·  *Proposed*

Filters + Hotel Offer rail + CTA.

**Status:** Proposed as a new DL component.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=Hotel Choose — Variant `80625:21403`.  
**Code today:** `NusukChat.HotelChoose` in nk-chat.js (built with: Nusuk/Transparent · Input Select × 3 (Filled) · Hotel Offer cards on scroll-snap rail · DL Chips gold/white/error · footer actions).

## Props

| Prop | Notes |
|---|---|
| `title` |  |
| `filters` | [] |
| `hotels` | [] |
| `urgency` | (bool) |
| `onEditFilter` |  |
| `onConfirm` | (hotel) |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# IbanField  ·  *Proposed*

TextField Action (verify) + Filled-Disabled bank row with logo.

**Status:** Proposed as a variant / prop of DL **TextField**.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=IBAN — Variant `80607:18703` · Name `80607:19076` · IBAN (Action) `80607:19077` · Bank (Disabled) `80607:19078`.  
**Code today:** `NusukChat.IbanField` in nk-chat.js (built with: Input Filled · Input Action + Secondary SM “تحقّق” · Input Filled Disabled + rajhi).

## Props

| Prop | Notes |
|---|---|
| `name` |  |
| `iban` |  |
| `verified` |  |
| `onConfirm` |  |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# Liveness  ·  *Proposed*

Scan Photo + copy + DL Hint warning + CTA.

**Status:** Proposed as a new DL component.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=FaceScan — Variant `80607:20622` · Scan Photo/Status=00 `80607:20843` · Hint Warning `80607:20846`.  
**Code today:** `NusukChat.Liveness` in nk-chat.js (built with: Scan Photo · Body 1 · DL Hint Warning · DL Button Primary MD + identification).

## Props

| Prop | Notes |
|---|---|
| `status` | "idle"\|"scanning"\|"done" |
| `onDone` |  |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# Loading  ·  *Proposed*

Typing / loading state.

**Status:** Proposed as a variant / prop of DL **ChatMessage**.  
**Figma source:** 💬 Chat UI › _Chat Container Master › Status=Loading — Type=Nusuk `80451:18763` · Type=User `80501:2248`.  
**Code today:** `NusukChat.Loading` in nk-chat.js (built with: icons-black dots).

## Props

| Prop | Notes |
|---|---|
| `from` |  |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# LocationGuide  ·  *Proposed*

Photo + steps + open-maps select cards.

**Status:** Proposed as a new DL component.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=Location Guide — Variant `80622:21047`.  
**Code today:** `NusukChat.LocationGuide` in nk-chat.js (built with: Nusuk/BG container · image radius-md · Notes 1 steps · DL Select Card × 2 (maps, google maps)).

## Props

| Prop | Notes |
|---|---|
| `title` |  |
| `image` |  |
| `steps` |  |
| `query` |  |
| `onNusukMaps` |  |
| `onGoogleMaps` |  |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# LogosGroup  ·  *Proposed*

Logos Group + Logo Icons + City Logo badge as code.

**Status:** Proposed as a new DL component.  
**Figma source:** 🃏 Cards › Logos Group · Logo Icons (7 entities) · City Logo (Madinah, Mekkah) — Logos Group `70306:7320` · Logo Icons `70306:7326` · City Logo `70306:7355`.  
**Code today:** `NusukChat.LogosGroup` in nk-chat.js (built with: Gradient circles from the Figma fills · inline SVG marks · 4x PNG for raster brand marks).

## Props

| Prop | Notes |
|---|---|
| `items` | [{ entity, city? }] |
| `size` | (32 \| 28 \| 48) |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# Message  ·  *Proposed*

Adds Nusuk/User × BG/Transparent, question echo, footer actions and the Nusuk Bot avatar.

**Status:** Proposed as a variant / prop of DL **ChatMessage**.  
**Figma source:** 💬 Chat UI › _Chat Container Master — Status=Chat, Type=Nusuk/BG `80451:18764` · Status=Chat, Type=Nusuk/Transprent `80578:5431` · Status=Chat, Type=User/BG `80451:18765` · Status=Chat, Type=User/Transprent `80578:5289`.  
**Code today:** `NusukChat.Message` in nk-chat.js (built with: tokens: surface-01-white, radius-md, radius-xs (tail), glass-full, space-md/nr/lr/sm · DL Avatar (XS, Ink)).

## Props

| Prop | Notes |
|---|---|
| `from` | "nusuk"\|"user" |
| `bg` | boolean |
| `question` | optional string (user: the answered question as the header row with the 12×14 mark; Nusuk: the question as the bubble's first line) |
| `actions` | optional boolean |
| `time` | optional string |
| `footer` | optional false |
| `bot` | optional false (hide the bot when the next message is also Nusuk; 24 column kept). Nusuk: bot at the top, tail top-start, time at the start and actions at the end; user: avatar at the bottom, tail bottom-end, time at the end |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.

# MobileField  ·  *Proposed*

Mobile: country code 115 + number (TextField Mobile).

**Status:** Proposed as a variant / prop of DL **TextField**.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=Mobile — Variant `80607:17062` · Input/Type=Mobile `80607:17346`.  
**Code today:** `NusukChat.MobileField` in nk-chat.js (built with: country code select 115 + input 357 · DL Flag · arrow-down-01).

## Props

| Prop | Notes |
|---|---|
| `onConfirm` | ("+966 05…") |
| `onBack` |  |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# NafathAnswer  ·  *Proposed*

Nafath sign-in answer pill with the Nafath logo.

**Status:** Proposed as a new DL component.  
**Figma source:** 💬 Chat UI › Answers / Property 1=Nafath — Instance on canvas `80473:2474` · Component `80473:2443`.  
**Code today:** `NusukChat.NafathAnswer` in nk-chat.js (built with: buttons/surface/reject (ivory) pill 48 · Regular/Body/Two · Nafath logo (exact SVG)).

## Props

| Prop | Notes |
|---|---|
| `label` |  |
| `onClick` |  |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# NationalitySearch  ·  *Proposed*

Search with flag result list (TextField Search + DropdownItem flag).

**Status:** Proposed as a variant / prop of DL **TextField**.  
**Figma source:** 💬 Chat UI › Answers / Property 1=Nationality Search — Instance `80473:2515` · Component `80473:2457`.  
**Code today:** `NusukChat.NationalitySearch` in nk-chat.js (built with: ivory pill 48 · DL Icon global / search-01 · flag list).

## Props

| Prop | Notes |
|---|---|
| `placeholder` |  |
| `exclude` | [] |
| `onPick` | (code) |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# Otp  ·  *Proposed*

TextField OTP + ResendTimer inside the Question card.

**Status:** Proposed as a variant / prop of DL **TextField**.  
**Figma source:** 💬 Chat UI › AI Chat Messages › User=Nusuk, Style=Confirmation (OTP · email) — Variant `80607:11146`.  
**Code today:** `NusukChat.Otp` in nk-chat.js (built with: Question card · _Button Trail “تعديل” · OTP fields 62h radius-s · time-04 timer · DL Button Primary).

## Props

| Prop | Notes |
|---|---|
| `email` |  |
| `length` | (4) |
| `seconds` | (59) |
| `onConfirm` | (code) |
| `onEditEmail` |  |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# PassportAttach  ·  *Proposed*

Select Card without radio as the answer (no CTA).

**Status:** Proposed as a variant / prop of DL **SelectCard**.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=Passport Attach — Variant `80607:19234` · إرفاق الصورة `80607:19465` · التقاط صورة `80607:19466`.  
**Code today:** `NusukChat.PassportAttach` in nk-chat.js (built with: DL Select Card × 2 · image-02 · camera-02 · no CTA).

## Props

| Prop | Notes |
|---|---|
| `onPick` | (mode, url) |
| `realPicker` |  |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# PassportNumber  ·  *Proposed*

TextField Input with a trailing camera action.

**Status:** Proposed as a variant / prop of DL **TextField**.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=Passport (renamed from Pasport on 14 November 2026) — Variant `80607:18228` · Input `80607:18418`.  
**Code today:** `NusukChat.PassportNumber` in nk-chat.js (built with: nk-field-box · camera-02 trailing).

## Props

| Prop | Notes |
|---|---|
| `onConfirm` | (number) |
| `onScan` |  |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# PassportPreview  ·  *Proposed*

Document preview + Secondary SM / Primary SM.

**Status:** Proposed as a new DL component.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=Passport Preview — Variant `80607:19494` · Image `80607:19720`.  
**Code today:** `NusukChat.PassportPreview` in nk-chat.js (built with: image radius-xs · DL Button Secondary SM + Primary SM (tick-02)).

## Props

| Prop | Notes |
|---|---|
| `src` |  |
| `onEdit` |  |
| `onConfirm` |  |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# PasswordField  ·  *Proposed*

Password field (62), then its Strength Meter: the criteria as DL Checkbox SM, 8 apart, and the view toggle (F24).

**Status:** Proposed as a variant / prop of DL **TextField**.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=Password — Variant `80607:16432` · Input/Type=Password `80607:16851`.  
**Code today:** `NusukChat.PasswordField` in nk-chat.js (built with: nk-field-box (62h) · view (Figma icon) · 5 criteria as DL Checkbox SM below the field · DL Button Primary MD).

## Props

| Prop | Notes |
|---|---|
| `onConfirm` | (password) |
| `onBack` |  |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# Question  ·  *Proposed*

Chat question card: type row, title, description, back, content slot, one Primary CTA.

**Status:** Proposed as a new DL component.  
**Figma source:** 💬 Chat UI › _Chat Container — _Chat Container `80453:2664`.  
**Code today:** `NusukChat.Question` in nk-chat.js (built with: DL Button (Primary, MD, icon right tick-02) · _Button Trail (back) · DL TextField in slot).

## Props

| Prop | Notes |
|---|---|
| `type` |  |
| `typeIcon` |  |
| `title` |  |
| `desc` | optional  |
| `onBack` | optional  |
| `children` | (Content slot) |
| `cta` |  |
| `ctaState` |  |
| `onConfirm` |  |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# SelCard  ·  *Proposed*

Figma icon via FigIcon; one label renders as the 16 description line.

**Status:** Proposed as a variant / prop of DL **SelectCard**.  
**Figma source:** 📻 Switches, Checkbox, and Radio › Select Card (Active, Selected, Disabled) — Select Card `70416:652` · Status=Active `70416:655` · Status=Selected `70416:657`.  
**Code today:** `NusukChat.SelCard` in nk-chat.js (built with: DL class nk-selcard (3.10: .cnt .ttl .dsc)).

## Props

| Prop | Notes |
|---|---|
| `icon` |  |
| `title` |  |
| `desc` |  |
| `selected` |  |
| `disabled` |  |
| `onClick` |  |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# SingleChoose  ·  *Proposed*

Option Cards (Icon with Action) as one radio group; the chosen card takes Alerts/Surface/Success and a green action (12 Nov 2026).

**Status:** Proposed as a variant / prop of DL **OptionCard**.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=Single Choose — Variant `80626:36740`.  
**Code today:** `NusukChat.SingleChoose` in nk-chat.js (built with: Question card · DL Option Cards (Icon with Action) · Alerts/Surface/Success · Buttons Green · DL Button Primary MD).

## Props

| Prop | Notes |
|---|---|
| `type` |  |
| `typeIcon` |  |
| `title` |  |
| `options` | [{icon, title}] |
| `selected` |  |
| `onConfirm` | (option, i) |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# Slots  ·  *Proposed*

Question card + DL PrayCard + DL TimeSlot groups.

**Status:** Proposed as a new DL component.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=Slots — User=Nusuk `80593:6839`.  
**Code today:** `NusukChat.Slots` in nk-chat.js (built with: DL Pray Card · DL Time slot card · muslim icon).

## Props

| Prop | Notes |
|---|---|
| `prayer` |  |
| `slot` |  |
| `onConfirm` | (time) |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# SlotsAnswer  ·  *Proposed*

Date + time answer.

**Status:** Proposed as a variant / prop of DL **ChatMessage**.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=Slots — User=User `80601:5538`.  
**Code today:** `NusukChat.SlotsAnswer` in nk-chat.js (built with: Light/Display/One for time).

## Props

| Prop | Notes |
|---|---|
| `date` |  |
| `time` |  |
| `question` | optional  |
| `onEdit` |  |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# TabBar  ·  *Proposed*

AI Tab Bar: 7 statuses (default, limit, recording, recorded, text, responding, typing).

**Status:** Proposed as a variant / prop of DL **TabBar**.  
**Figma source:** 💬 Chat UI › AI Tab Bar — _AI Tab Bar Master `80392:4168` · default `80392:4482` · limit `80392:4484` · recording `80392:4486` · recorded `80392:4488` · text `80392:4490` · responding `80392:4492` · typing `80392:4494`.  
**Code today:** `NusukChat.TabBar` in nk-chat.js (built with: glass-full · radius-full · DL Icon mic / send / pause / delete-03).

## Props

| Prop | Notes |
|---|---|
| `status` |  |
| `value` |  |
| `placeholder` |  |
| `limitText` |  |
| `onSend` | ({type,text\|duration}) |
| `onStop` |  |
| `respondOnSend` |  |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# Text  ·  *Proposed*

Answer text with question echo and “تعديل الإجابة”.

**Status:** Proposed as a variant / prop of DL **ChatMessage**.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=Text — User=User `80392:4524` · User=Nusuk `80601:9158`.  
**Code today:** `NusukChat.Text` in nk-chat.js (built with: Light/Body/One · _Button Trail + edit-02 · Footer actions copy-01 / thumbs-up / thumbs-down).

## Props

| Prop | Notes |
|---|---|
| `from` |  |
| `text` |  |
| `question` | optional  |
| `editable` | optional  |
| `onEdit` | optional  |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.


---

# Voice  ·  *Proposed*

Voice message: the 42 Ink play button and the waveform (bars on Surface/Longing, played at 100%, the rest at 30%); the duration is in the play button's label.

**Status:** Proposed as a variant / prop of DL **ChatMessage**.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=Voice — User=User `80392:4534` · User=Nusuk `80601:9269`.  
**Code today:** `NusukChat.Voice` in nk-chat.js (built with: surface-illumination waveform · surface-10-ink play).

## Props

| Prop | Notes |
|---|---|
| `from` |  |
| `duration` |  |
| `progress` |  |
| `question` | optional  |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.
