# Template contracts

The full text of the 20 template contracts, generated from `templates/contracts/*.json` on 11 November 2026. All are drafts for review. How to pick and use one: *Templates and patterns* and DESIGN.md › M9T. Blueprints: Figma ✨ Templates-Patterns › ✨ Templates.

Each contract lists its spaces from top to bottom. **Fixed** spaces are chrome; numbered spaces are filled from the Allowed column only. The example at the end of each contract is one service that uses it: one situation, not the rule.

## Contents

1. Service landing · `service-landing` · page · L2
2. Catalogue list · `catalogue-list` · page · L2
3. Item details · `item-details` · page · L3
4. Cart · `cart` · page · L3
5. Payment · `payment` · page · L3
6. Request tracking · `request-tracking` · page · L3
7. Requests list · `requests-list` · page · L2
8. Search in a service · `service-search` · page · L2
9. Help and support · `service-support` · page · L2
10. Address selection · `address-selection` · task · L3
11. Cancellation · `cancellation` · task · L3
12. Add-on task · `add-on-task` · task · L3
13. Cost breakdown sheet · `cost-sheet` · overlay · L4
14. Media viewer · `media-viewer` · overlay · L4
15. Date and time · day and period · `date-period` · step · L3
16. Date and time · day and exact slot · `date-slot` · step · L3
17. Booking details · `booking-details` · page · L3
18. Booking details · package · `booking-details-package` · page · L3
19. Pass sheet · `pass-sheet` · overlay · L4
20. Pass viewer · `pass-viewer` · overlay · L4

---

## Service landing

`service-landing` · page · app level L2 · status draft · was `market-landing`

The front page of a service that offers a catalogue. It lets a person find an item by search, by category or by theme.

- **Use for:** A service that sells a catalogue with several categories, when the person arrives from Home services, the Market tab or a deep link without an item in mind, and needs search, categories and curated rows on one page.
- **Not for:** A service with one item or one flow (start at item details or the first step of that flow); a person who already picked a category or typed a query (use Market category or Search results); a person in a sacred window, where the service is suppressed and this page is never linked from a ritual screen; content that is not for sale, such as articles or guides, which belong to a content landing.
- **Band:** Takes the band of the service that uses it; commitment state inside it is band 2.
- **Figma:** ✨ Templates › section `70407:33`

### Spaces

| # | Space | How many | Allowed | Not allowed |
|---|---|---|---|---|
| — | toolbar | fixed | Toolbar · Landings / Search, over Header Effect · Stage 1. The search placeholder names what can be searched; search lives here only. | A second search entry or extra toolbar actions. |
| 1 | notification-slot | optional, 0–1 | Notification Slots · Collapsed Off, or the upcoming-requests pattern when it carries the person’s own request state. States one fact and offers one action. | Pressing on stock or deadlines. With nothing to say, the slot collapses and leaves no gap; it is never left empty with a gap. |
| 2 | hero-row | optional, 1–5 | The leaderboard or cards-slider pattern, shown as Media Cards · ADS, 343 × 364, scrolls sideways. Curated collections or real campaigns; a campaign that ends states its date in words. | A timer on a campaign end date. The اختيارات نسك curation mark used for anything Nusuk does not actually curate. |
| 3 | category-grid | required, 1 | The categories pattern, shown as Categories · Status On, 386 wide. Every top-level category in a stable sequence, named in 1 or 2 words; the chevron expands the grid in place. | Prices or counts on the tiles. A sequence that changes between visits. |
| 4 | item-rows | repeat, 2–4 | A local row card (radius 18) with a Secondary XS icon-only control, then the cards-slider pattern of MediaCard, 170 × 248. One theme per row named in 2 or 3 words, 3 to 8 items, one card variant per row, and a More card at the end; the arrow opens the full collection. | Two rows of the same item type back to back (M9P rule 6) unless an exception is recorded. A hand-built row header. |
| 5 | cross-sell | optional, 0–1 | One promotional block, after the item rows. | More than one. A position above the item rows or the categories. |
| 6 | promises | optional, 2–3 | SectionTitle with 2 or 3 informative cards (delivery threshold, delivery days, returns) from the service configuration. | A %s placeholder typed into the design. A claim the service cannot keep. |
| — | bottom-navigation | fixed | Fixed to the bottom; the cart pill shows the total and the item count. Content keeps 170 of bottom padding so the last card clears the bar. | The older Tab Bar together with BottomNav. |

### Rules

1. No countdowns, no "limited time", no "before stock runs out"; a real end date is written as a date (M4).
2. A discount shows the old price and the real reduction.
3. اختيارات نسك marks curation and nothing else; a paid placement is labelled as an ad.
4. Nothing is added to the cart for the person, and nothing is pre-selected.
5. Row titles name an occasion or a need in 2 or 3 words, with no emoji; the row arrow answers a 48 target even though it is drawn at 50 × 30.
6. Item photos carry the item name as alt text; a sideways row announces its position (2 of 6) and gives a way to the full list without swiping.

### Allocation

- **App level:** L2 · a service page. Reached from Home services, the Market tab and deep links.
- **Allocation:** DNA Supportive · tier T3 · resting placement P2 · render band 6.
- **Suppression:** suppress: sacred. The page and its entry points are hidden while the person is in a sacred window.
- **Withheld:** Pay controls are withheld (P0) for Dependents and Organised groups; browsing stays open.

### Measure

- **Success:** Share of sessions that reach an item page, time to the first item view, completed requests per weekly active user
- **Guardrails:** notification opt-out, complaints per 1,000 requests, refunds marked not as described

### Example: Marketplace

- **Inherits:** Marketplace: DNA Supportive · band 6 · interrupts for offers are T3 · suppressed in sacred windows.
- **In the flow today:** The notification slot in the flow reads "⚡️ أكمل الطلب قبل نفاذ المخزون" with the chip "لديك منتجات في السلة 🛍️": urgency wording and an emoji: this template shows the neutral library default instead. The ADS cards in the flow carry "لفترة محدودة", a running countdown and "وفّر 30%"; left out here pending a decision. The product row header is a local frame repeated in every row, proposed as a DL pattern (product-row). Media Cards · ADS and Categories live in 🛍️ Market and are not DL cards yet; Categories shares its name with the DL categories row. The flow uses Tab Bar while the DL now has BottomNav; one has to be chosen. Chips in the flow use Ping AR + LT at 10 px and prices use Saans TRIAL; product type is meant to be IBM Plex Sans Arabic at 12 px or more. The section header ships with placeholder content in its left slot, emptied here.

---

## Catalogue list

`catalogue-list` · page · app level L2 · status draft · was `market-category`

Every item of one category, as a grid or a list, with the running selection always in reach.

- **Use for:** One flat list of one kind of item — the items of a category, a collection or a brand — reached from the landing or a themed row’s arrow, for comparing by photo and price (grid) or by longer names and detail (list).
- **Not for:** A typed query (use Search results, which adds the query, the filters and a no-results state); a list that mixes kinds such as items with articles or services (use a landing with rows); a category that would hold only 1 or 2 items (show them in a landing row instead of a near-empty page); a person in a sacred window, where the page is suppressed with the rest of the service.
- **Band:** Takes the band of the service that uses it; commitment state inside it is band 2.
- **Figma:** ✨ Templates › section `70412:1873`

### Spaces

| # | Space | How many | Allowed | Not allowed |
|---|---|---|---|---|
| — | toolbar | fixed | Toolbar · Secondary Pages / Default, with the view toggle opposite the back button: grid first, list second, the active view carrying the highlight and remembered for the next category. | A title that is not exactly the landing tile’s name. Extra toolbar actions. |
| 1 | item-list | required, 1 | The cards-slider pattern in grid layout, or cards-list in list layout: Media Cards · Marketplace / Grid, 189 × 248, 2 per row, or Marketplace / List, 386 × 210, 1 per row. One card type per view and the same order in both views; the type pill is hidden because the page title already names the category. | Mixed card types in one view. A different sequence between grid and list. The action made by hiding layers instead of the card’s own status. |
| 2 | card-action | fixed, per card | Price Options → Add to Cart CTA · Status cart, one, arrow or Notify me. Add puts one in the cart without leaving the page, and the stepper then replaces the button; an item with options shows the arrow and opens item details. | An out-of-stock item that loses its price. A stepper that overflows the card. |
| — | bottom-navigation | fixed | Tab Bar · Floating Cart, present on every catalogue page; empty it shows the label and 0.00, with items it shows thumbnails, the count and the total. | A hand-drawn cart bar in place of the library component. |

### Rules

1. Out of stock is stated on the card before the tap, never discovered at checkout.
2. No "only N left" on cards; a stock count belongs to item details, and only when it is true.
3. Notify me sends one notification when the item returns, and nothing else.
4. The default sequence is the catalogue’s own; a paid position is labelled as an ad.
5. A two-line name must not push the price out of the card, and the price is never truncated; the two view-toggle buttons carry spoken labels and the selected state is exposed to screen readers, not shown by the highlight alone.

### Allocation

- **Withheld:** For Dependents and Organised groups the add and pay controls are withheld (P0); cards stay readable, the action is not shown.

### Measure

- **Success:** Adds per listing view, share of sessions that add 2 items or more, listing to item-page rate
- **Guardrails:** removals right after an add (accidental adds), Notify me requests that never receive a notification, complaints per 1,000 requests

### Example: Marketplace

- **Inherits:** Marketplace: DNA Supportive · band 6 · interrupts for offers are T3 · suppressed in sacred windows.
- **App level:** L3 · inside the Marketplace. Reached from a category tile, a row arrow or a deep link; not a destination from Home.
- **In the flow today:** The view toggle is hand-built inside the toolbar: two actions hidden, one shown, two icons swapped with layer overrides; it needs a toolbar type of its own. The type pill is hidden with a layer override on every card; Media Cards needs a property for it. The in-cart stepper overflows a 189 card at library defaults, corrected here with layout overrides repeated from the flow; the fix belongs in Price Options. List cards in the flow still use the earlier card structure; the library now uses Price Options, and this template follows the library. Every card shows a "starting from" label, including items with one price. The empty-state title in the flow is misspelled and the body has a double space; both are corrected here, though the state still offers no next step. The empty screen in the flow draws its own cart bar instead of Tab Bar · Floating Cart Empty; replaced here. The floating cart variants are set to RTL Off on Arabic screens; an RTL On variant needs confirming.

---

## Item details

`item-details` · page · app level L3 · status draft · was `product-details`

Everything needed to decide on one item: media, name and provider, description, options, then one action that adds or books it.

- **Use for:** One item that needs more than its card can hold — several photos, a description, options such as size or colour — opened from a card, a search result, a notification or a shared link, going into a cart to be paid for later with other items.
- **Not for:** A booking with a date, a slot or a permit (use the booking flow, where availability and holds follow other rules); an item with no options and nothing more to say than its card (let the card add it directly); an item with a flow of its own, such as an add-on task (start that flow instead); a person in a sacred window, where the page is suppressed with the rest of the service.
- **Band:** Takes the band of the service that uses it; commitment state inside it is band 2.
- **Figma:** ✨ Templates › section `70417:3281`

### Spaces

| # | Space | How many | Allowed | Not allowed |
|---|---|---|---|---|
| — | toolbar | fixed | Toolbar · Marketplace Prodcut: back, one title and the cart with its count. | A title that mixes the item name and its category; the flow does this and needs a decision. |
| 1 | gallery | required, 1–8 | Product Photo · Status On, 340 × 328, with a peek of the next photo, and Pagination. The first photo is the one used on cards; with a single photo, pagination is hidden. | Imagery that is not the item for sale. |
| 2 | identity | required, 1 | Product Header: provider or brand, item name, share, and a verified mark shown only when it is true. | A verified mark shown when it is not earned; that is a disguised ad (M4). |
| 3 | description | required, 1 | Product Info · State Product Description: what it is, what is included, size or weight, origin — facts first, in 3 lines before the text expands. | Claims before facts. Placeholder text. |
| 4 | options | optional, 0–1 | Proposed · product-options, a local component with no library home yet: one row per option, with a label and chips. Nothing is selected in advance unless there is only one choice; an unavailable option stays visible and marked, not removed. | An option selected in advance when more than one exists. An unavailable option hidden instead of marked. |
| 5 | related | optional, 0–1 | The cards-slider pattern: SectionTitle then a MediaCard row of items from the same category or bought together, after the details. | A position between the options and the action. An item that is not actually related; a sponsored item not labelled as an ad. |
| — | action-bar | fixed | Quantity, total and one Primary action that names the outcome; the action stays enabled, and on tap it moves to a missing option and says what to choose. | A disabled Primary used to hide validation. A total that is not the price paid. |

### Rules

1. No "selling fast" and no timers; a low stock count is stated once, as a fact, and only when it is real.
2. The price shown is the price paid; taxes and fees are visible before the cart, not after.
3. The verified mark is earned, never decorative; a related item is actually related, and a sponsored one is labelled as an ad.
4. Notify me sends one message when the item returns, and nothing else.
5. Photos carry alt text that describes the item; the gallery announces its position and the dots are never the only cue.
6. A selected option is exposed to screen readers and never shown by colour alone; colour options also show the colour name.

### Allocation

- **Withheld:** For Dependents and Organised groups the action bar is withheld (P0); the page stays readable.

### Measure

- **Success:** Adds per item view, option errors per add, time from opening to adding
- **Guardrails:** refunds marked not as described, removals from the cart, complaints per 1,000 requests

### Example: Marketplace

- **Inherits:** Marketplace: DNA Supportive · band 6 · interrupts for offers are T3 · suppressed in sacred windows.
- **App level:** L4 detail · inside the Marketplace. Reached from cards, search, notifications and shared links.
- **In the flow today:** The main action is disabled in the flow when an option is missing and when the item is out of stock; the DL rule is not to disable the main action to hide validation, so it is shown enabled here instead. Both hints in the flow open with a warning emoji, and one has a spelling error; rewritten here. Product Size Options (size and colour) is a local component with no library home, used four times, shown here as a Proposed block. The toolbar type is published as "Marketplace Prodcut" (a spelling slip) and needs two layer overrides to match the design: a dark status bar and a hidden action block. Product Info is published with a state named forTesting, and its tabs are hidden with a layer override. The toolbar title and the item name differ in the flow; deciding whether the toolbar shows the category or the item is still open. Out of stock reuses the cart bar with its quantity and total; it needs a bar of its own with Notify me only. The photo fade and the header panel are local shapes with hard-coded gradients. The verified mark’s text is 8 px in the library, below the 12 px floor; logged.

---

## Cart

`cart` · page · app level L3 · status draft

Review what was chosen, where it goes and what it costs, then move to payment.

- **Use for:** The step between choosing items and paying for them.
- **Not for:** A single-item purchase with its own flow, or a booking.
- **Band:** Takes the band of the service that uses it; commitment state inside it is band 2.
- **Figma:** ✨ Templates › section `70427:4826`

### Spaces

| # | Space | How many | Allowed | Not allowed |
|---|---|---|---|---|
| — | toolbar | fixed | Toolbar · Modal / Default (title and close). | A back stack that loses the cart. Extra actions. |
| 1 | items | required, 1–n | One row per chosen item with its quantity control and its states: default, removing, unavailable, cannot be delivered, low availability (live data only). | Items the person did not add. A hold timer when nothing is held. |
| 2 | delivery | required, 1 | Select Location / widget; with no address, a title and one CTA that adds one. | A paid delivery option selected in advance. A disabled checkout as the only sign that an address is missing. |
| 3 | cross-sell | optional, 0–1 | One promotional block for an optional extra. | Pre-selected add-ons. |
| 4 | related | optional, 0–1 | SectionTitle with cards-slider (row) and one MediaCard type. | A position above the items. "Frequently bought together". |
| — | action-bar | fixed | TabBar action bar · Actions: the total and one Primary. | A disabled Primary that hides validation. A fee that first appears on the payment page. |

### Rules

1. The total shown here is the total paid: delivery, taxes and fees included (M4).
2. Removing an item uses the destructive AddToCartCTA and can be undone.
3. Availability messages come from live data only (M4).
4. One Primary that names the outcome, always enabled; on tap it says what is missing (M10).
5. Cross-sell and related rows sit below the items and the delivery choice.

### Allocation

- **App level:** L3 · a transaction step. Opened from the cart bar, never from Today.
- **Withheld:** The whole page is P0 for Dependents and Organised groups.
- **Empty:** EmptyState, full page, replaces spaces 1 to 4 and offers a way back to the service.

### Measure

- **Success:** Cart to payment start.
- **Guardrails:** removals, cancellations after payment.

### Example: Marketplace

- **Inherits:** Marketplace: DNA Supportive · band 6 · interrupts for offers are T3 · suppressed in sacred windows.
- items: Less Available without live stock, or on Udhiya or Hady.
- cross-sell: Gifting from 🛍️ Market.
- cross-sell: Any upsell when the cart holds Udhiya or Hady.
- related: Udhiya or Hady carts.
- items: Product Item (Default, Remove Product, Off, cann't delever, Less Available) from 🛍️ Market.
- **In the flow today:** The main action is disabled when there is no address and when the cart is empty; "only N left" shows without a stated threshold.

---

## Payment

`payment` · page · app level L3 · status draft

Pay with nothing else on the page.

- **Use for:** Paying for a cart or a booking.
- **Not for:** Showing an invoice (use the cost breakdown sheet) or confirming a free request.
- **Band:** Takes the band of the service that uses it; commitment state inside it is band 2.
- **Figma:** ✨ Templates › section `70427:4992`

### Spaces

| # | Space | How many | Allowed | Not allowed |
|---|---|---|---|---|
| — | toolbar | fixed | Toolbar · Secondary Pages / No Actions; Toolbar · Timer only when inventory is truly held (OR-08). | A timer when nothing is held. Red or ticking seconds. Any action that leaves the payment by accident. |
| 1 | payment | required, 1 | The payment widget; PaymentDetails; official Apple Pay and wallet artwork. | Offers, cross-sell or any band-6 content. Pre-ticked consent or a saved card without consent. Add-ons. Rebuilt wallet buttons. |
| — | bottom | fixed | TabBar · Empty. The pay action lives in the widget. | A second Primary. |

### Rules

1. A hold timer appears only when inventory is held: lenient, with the reason stated, no ticking clock (OR-08, M4).
2. Failure opens StatusSheet · template payment-failed (General Bottom Sheet › Payment Failed), with a route to support; a hold that runs out opens template payment-expired (Payment session expired).
3. The amount equals the total shown at the step before. Nothing is added here (M4).
4. Digits 0 to 9; no blessing on receipts or errors (M6).
5. Ask for nothing the person already gave in this journey (M10).

### Allocation

- **App level:** L3 · the transaction. Zero competing elements.
- **Interrupts:** Payment failed is T1 commitment state: it passes every suppression window.
- **Support:** Support is P5: one tap away on failure, never hidden by the payment flow.

### Measure

- **Success:** Payment success rate.
- **Guardrails:** payment failure and hold expiry.

### Example: Marketplace

- **Inherits:** Marketplace: DNA Supportive · band 6 · interrupts for offers are T3 · suppressed in sacred windows.
- **In the flow today:** The page uses Toolbar · Timer; confirm that stock is really held. The widget is a private component (_Payment widget Master).

---

## Request tracking

`request-tracking` · page · app level L3 · status draft · was `order-tracking`

Where a request is now, what happens next, and how to get help.

- **Use for:** One request after payment: in progress, fulfilled or cancelled.
- **Not for:** The list of all requests (use Requests list).
- **Band:** Band 2. Commitment state: never suppressed.
- **Figma:** ✨ Templates › section `70427:5086`

### Spaces

| # | Space | How many | Allowed | Not allowed |
|---|---|---|---|---|
| — | toolbar | fixed | Toolbar · Secondary Pages / Default, with the request title. | Catalogue actions (search, cart) that pull away from the request. |
| 1 | notice | optional, 0–1 | Notification Slots, NoticeBar or Alert for a change the person must know. | Promotions. A rating or CSAT prompt before the request reaches a stable outcome. |
| 2 | tracker | required, 1–n | A tracker per part of the request, the basic information block (details, or cancellation), and StatusChip. | A status that is not in the StatusChip set. Cross-sell between parts. |
| 3 | help | optional, 0–1 | SectionTitle with Collapsed Section answers and one Secondary CTA to support. | Hiding or removing support: it is P5. |
| 4 | summary | required, 1 | SectionTitle (Collaps) with one OptionCard row per item; PaymentDetails (Price, or Refund). | Upsell. Editable prices. A cancel action styled as Primary. |
| — | bottom | fixed | TabBar · Empty. | A floating selection bar. |

### Rules

1. State before tasks: the tracker sits above help and the summary (bands never invert).
2. Cancel is a destructive Secondary (Fate), never the Primary.
3. Ask for a rating only after a stable outcome, once (M5, OR-07): CustomerFeedback in a BottomSheet (faces; stars for an order).
4. Support is reachable within two taps in every state (M9S P5).
5. Dates and amounts in digits 0 to 9 (M6).

### Allocation

- **App level:** L3 · the request page.
- **Band and tier:** Band 2, commitment state. Its notifications are T1 and pass every suppression window. This page is not suppressed in sacred windows; the service landing is.
- **Withheld:** Dependents and Organised groups see status only: no cancel or change controls.

### Measure

- **Success:** Tickets per 1,000 requests and reopen within 48 hours.
- **Guardrails:** notification opt-out for T1.

### Example: Marketplace

- **Service:** Marketplace · DNA Supportive.
- tracker: Shippment Tracker · Package and Order Basic Information from 🛍️ Market; summary rows are OptionCard · Product.
- **In the flow today:** A CSAT prompt sits on the tracking screen; two status labels are misspelled; the frame also shows SIM and eSIM trackers, which are out of scope here.

---

## Requests list

`requests-list` · page · app level L2 · status draft · was `requests`

Every request of the person in one service, current and past.

- **Use for:** Finding a request and opening its tracking page.
- **Not for:** Today or a landing: there, use upcoming-requests with the next requests only.
- **Band:** Band 2. Commitment state: never suppressed.
- **Figma:** ✨ Templates › section `70427:5258`

### Spaces

| # | Space | How many | Allowed | Not allowed |
|---|---|---|---|---|
| — | toolbar | fixed | Toolbar · Secondary Pages / Tabs (current, past). | More than two or three tabs. Filters that hide an active request. |
| 1 | request-list | required, 1 | RequestCard of the service; RequestCard empty state or EmptyState when there is none. | Offers or ads between cards. A blank area. Statuses outside the StatusChip set. |
| — | bottom | fixed | TabBar · Empty. | A floating selection bar. |

### Rules

1. Newest first; active requests before past ones.
2. One card type in the list (M9P rule 8).
3. The empty state says what will appear here and leads to the service.
4. The whole card opens the request; the arrow is not the only target (M10).
5. No commerce in this list.

### Allocation

- **App level:** L2 · a list.
- **Band:** Band 2, commitment state. Not suppressed in sacred windows.
- **Withheld:** Status for everyone; controls only for Independents and Caregivers.

### Measure

- **Success:** Time to find a request.
- **Guardrails:** support tickets asking where a request is.

### Example: Marketplace

- **Service:** Marketplace · DNA Supportive.
- request-list: RequestCard · marketplace.

---

## Search in a service

`service-search` · page · app level L2 · status draft · was `search`

Find an item by name inside a service.

- **Use for:** A person who knows what they want.
- **Not for:** Browsing with no query (use the landing).
- **Band:** Takes the band of the service that uses it; commitment state inside it is band 2.
- **Figma:** ✨ Templates › section `70427:5370`

### Spaces

| # | Space | How many | Allowed | Not allowed |
|---|---|---|---|---|
| — | toolbar | fixed | Toolbar · Modal / Search or Secondary Pages / Search. | A placeholder that does not say what can be searched. |
| 1 | suggestions | optional, 0–1 | category-chips; recent searches of this person. | Trending or sponsored terms without a label. Other people's searches. |
| 2 | results | required, 1 | cards-slider (grid) or cards-list with one MediaCard type; EmptyState for no results. | Sponsored results without an ad label. Ranking by commercial arrangement. A blank area for no results. |
| — | bottom-navigation | fixed | BottomNav for the service. | The older Tab Bar together with BottomNav. |

### Rules

1. Three states: before typing, results, no results.
2. No results says so, keeps the query and offers the categories.
3. Results use one card type so prices compare (M9P rule 8).
4. A paid position is labelled as an ad (M4).
5. The field keeps focus and the keyboard never covers the first result.

### Allocation

- **App level:** L2 · search is the P3 route: where an item rests until a step promotes it.
- **Signal:** Search fallback rate per service is the metric that judges any demotion (M9S).

### Measure

- **Success:** Searches that end in an item view.
- **Guardrails:** searches with no results.

### Example: Marketplace

- **Inherits:** Marketplace: DNA Supportive · band 6 · interrupts for offers are T3 · suppressed in sacred windows.
- Bottom navigation: BottomNav together with the older Tab Bar (N14).
- **In the flow today:** All three search states are built from List Screen · Empty State.

---

## Help and support

`service-support` · page · app level L2 · status draft · was `support-center`

Answers and a way to reach a person, from inside a service.

- **Use for:** Help with a request or with the service.
- **Not for:** Marketing content or FAQs that sell.
- **Band:** Band 1. Ritual and safety: never suppressed, P5.
- **Figma:** ✨ Templates › section `70427:5490`

### Spaces

| # | Space | How many | Allowed | Not allowed |
|---|---|---|---|---|
| — | toolbar | fixed | Toolbar · Secondary Pages / Default. | Deprecated toolbar types. |
| 1 | topics | required, 1 | SectionTitle with Collapsed Section or DropdownItem lists, grouped by topic. | Offers. Topics that end without an answer or a next step. |
| 2 | ask-ai | optional, 0–1 | Try Nusuk AI · Menu. | AI that issues religious rulings or invents service facts (M4). |
| 3 | contact | required, 1 | One CTA to a person: chat, call or ticket. | Burying contact behind the AI or behind several screens. |
| — | bottom | fixed | TabBar · Empty. | A floating selection bar. |

### Rules

1. Help sits in the same place on every screen (M10).
2. A person is always reachable; AI is one of the routes, not a gate.
3. Answers are short, with one next step.
4. No commerce on this page.
5. An open ticket shows its state at the top.

### Allocation

- **App level:** L2 · a service page.
- **Placement:** Reachable within two taps from every screen, in every state. Nothing suppresses it: not ihram, not Arafah, not a payment flow.
- **Band and tier:** Band 1 · T1.

### Measure

- **Success:** Time to first response and time to resolution.
- **Guardrails:** reopen within 48 hours.

### Example: Marketplace

- **Service:** Support Center · DNA Supportive · P5 permanent.
- Toolbar: The MarketPlace Landing type (deprecated; the flow uses it).
- **In the flow today:** Topic lists are a component named List Products.

---

## Address selection

`address-selection` · task · app level L3 · status draft · was `address`

Choose a saved place or add a new one.

- **Use for:** Selecting or adding an address during a transaction.
- **Not for:** Managing the profile address book.
- **Band:** Takes the band of the service that uses it; commitment state inside it is band 2.
- **Figma:** ✨ Templates › section `70427:5629`

### Spaces

| # | Space | How many | Allowed | Not allowed |
|---|---|---|---|---|
| — | toolbar | fixed | Toolbar · Modal / Default (title and close). | Closing that discards typed input without a warning. |
| 1 | saved | optional, 0–n | SelectCard or Radio rows for saved addresses, at least 48 high. | An address selected in advance that the person did not choose before. |
| 2 | locate | optional, 0–1 | A map with MapPin; StatusSheet · template location for the permission, location-settings after a refusal. | A permission request with no stated reason. A map as the only way to enter an address. |
| 3 | details | required for a new address | TextField: Input, Select, Mobile; Hint for errors. | A placeholder as the only label. Asking again for data already given (M10). |
| — | action-bar | fixed | One Primary that confirms the address. | A disabled Primary that hides validation. |

### Rules

1. Errors name the field and how to fix it, next to the field (M6, M10).
2. The Primary stays enabled; on tap it shows what is missing.
3. Phone numbers and postcodes in digits 0 to 9, left to right inside Arabic (M6).
4. Location is asked once, with its reason.
5. A service limit (area not served) is stated here, not discovered at payment.

### Allocation

- **App level:** L3 · a task inside a transaction step. No entry of its own.
- **Withheld:** P0 for Dependents and Organised groups, with the transaction.

### Measure

- **Success:** Address step completion.
- **Guardrails:** form error loops.

### Example: Marketplace

- **Inherits:** Marketplace: DNA Supportive · band 6 · interrupts for offers are T3 · suppressed in sacred windows.
- **In the flow today:** Built from Auxiliary Task (X) Only; the confirm action is disabled until the form is valid.

---

## Cancellation

`cancellation` · task · app level L3 · status draft · was `cancel-order`

Cancel a request with a clear reason and a clear refund.

- **Use for:** Cancelling a paid request that can still be cancelled.
- **Not for:** Returns after fulfilment, or removing an item from a cart.
- **Band:** Band 2. Commitment state: never suppressed.
- **Figma:** ✨ Templates › section `70427:5761`

### Spaces

| # | Space | How many | Allowed | Not allowed |
|---|---|---|---|---|
| — | toolbar | fixed | Toolbar · Modal / Default (title and close). | A title borrowed from another service. |
| 1 | reason | required, 1 | ReasonSelection (‼️ Status Handlers › Reason Selection): one card row per reason, at least 48 high; «أسباب أخرى» opens the Text Area. | A reason selected in advance. Offers to stay. Guilt or loss framing. |
| 2 | refund | required, 1 | PaymentDetails · Refund: amount, method and time. | A refund amount that changes after confirmation. Fees that were not stated before. |
| — | action-bar | fixed | One destructive Secondary (Fate) that names the outcome. | A Primary for the destructive action. "Confirm" or "OK" as the label. |

### Rules

1. Say what happens to the money before the person confirms.
2. The destructive action is never the Primary (M9 Buttons).
3. No retention tricks: no offers, no loss framing (M4).
4. The sheet traps focus and returns it on close (M10).
5. After cancelling, the request shows Cancelled with its refund state.

### Allocation

- **App level:** L3 · a task, then a confirmation sheet and a notice.
- **Band and tier:** Band 2, commitment state. The result is a T1 notice.
- **Overlays:** Confirmation: StatusSheet · template refund (the refund method in its slot) or wallet-refund, Fate on the cancel action only. Result: NoticeBar · Success, then back to the request.
- **Withheld:** P0 for Dependents and Organised groups.

### Measure

- **Success:** Cancellations completed without a ticket.
- **Guardrails:** refund disputes.

### Example: Marketplace

- **Service:** Marketplace · DNA Supportive.
- Overlays: the example confirms with StatusSheet · template wallet-refund (General Bottom Sheet › Wallet Refund).
- **In the flow today:** The confirm action is a Primary, and the sheet title names electric cart tickets.

---

## Add-on task

`add-on-task` · task · app level L3 · status draft · was `gift-card`

Choose an optional extra, personalise it and add it to the request.

- **Use for:** Adding one optional, personalised extra to a request.
- **Not for:** An extra that is a service of its own.
- **Band:** Takes the band of the service that uses it; commitment state inside it is band 2.
- **Figma:** ✨ Templates › section `70427:5888`

### Spaces

| # | Space | How many | Allowed | Not allowed |
|---|---|---|---|---|
| — | toolbar | fixed | Toolbar · Modal / Default (title and close). | Extra actions. |
| 1 | option-picker | required, 1 | A row of options with Pagination. | An option selected in advance when a paid one exists. Mystery or random options. |
| 2 | price | required, 1 | The price, or a plain statement that it is free. | A [price] placeholder. A free label that hides a fee. |
| 3 | personalise | required, 1 | TextField: Input (to), Text Area (message), Action. | A message written for the person and sent without review. An ayah or hadith without its source. |
| — | action-bar | fixed | TabBar action bar · Actions with one Primary. | A disabled Primary that hides validation. |

### Rules

1. One register per block: the message has no price; the price has no blessing (M2, M6).
2. Quote and cite any religious text; ﷺ in full (M6).
3. The preview shows exactly what will be delivered.
4. The Primary stays enabled; errors appear at the field.
5. No placeholder ships (M6).

### Allocation

- **App level:** L3 · a task. Entry from its add-on widget only.
- **Realm:** Emotional when the extra is for someone else: keep the personal block free of prices.

### Measure

- **Success:** Extras added per request.
- **Guardrails:** requests edited to remove the extra.

### Example: Marketplace

- **Inherits:** Marketplace: DNA Supportive · band 6 · interrupts for offers are T3 · suppressed in sacred windows.
- In the example the extra is a greeting card: a row of card designs, then To and the message, entered from the Gifting widget.
- Not for Celebration Cards after a journey: that is a different service.
- **In the flow today:** Screens carry the [price] placeholder and three different layouts of the same step.

---

## Cost breakdown sheet

`cost-sheet` · overlay · app level L4 · status draft · was `invoice-sheet`

The amounts of one request, readable in a glance.

- **Use for:** Showing the amounts of a paid request.
- **Not for:** Paying (use Payment) or tracking (use Request tracking).
- **Band:** Band 2. Commitment state: never suppressed.
- **Figma:** ✨ Templates › section `70427:6022`

### Spaces

| # | Space | How many | Allowed | Not allowed |
|---|---|---|---|---|
| — | page-behind | fixed | The request page under overlay-backdrop. | Opening from a page that is not the request. |
| 1 | breakdown | required, 1 | BottomSheet with PaymentDetails and DetailsListItem rows. | Offers. Editable amounts. A blessing on a receipt (M6). |
| — | sheet-action | fixed | One Secondary: download or share. | More than one action. A Primary that restarts a purchase. |

### Rules

1. Totals match the payment exactly.
2. Digits 0 to 9, amounts with the currency sign, numbers isolated in Arabic text (M6).
3. The sheet traps focus and returns it on close (M10).
4. Tax and invoice numbers can be copied.
5. One action only.

### Allocation

- **App level:** L4 · the artefact inside the request.
- **Band:** Band 2, commitment state.

### Measure

- **Success:** Requests to support for an invoice or a receipt.
- **Guardrails:** disputes per 1,000 transactions.

### Example: Marketplace

- **Service:** Marketplace · DNA Supportive.

---

## Media viewer

`media-viewer` · overlay · app level L4 · status draft · was `image-viewer`

Look closely at the media of one item.

- **Use for:** Zooming into the media of an item.
- **Not for:** Content galleries or live streams.
- **Band:** Takes the band of the service that uses it; commitment state inside it is band 2.
- **Figma:** ✨ Templates › section `70427:6107`

### Spaces

| # | Space | How many | Allowed | Not allowed |
|---|---|---|---|---|
| — | toolbar | fixed | Close, on dark glass (Darkmode On). | Cart or buy actions on top of the photo. |
| 1 | image | required, 1–8 | Image Gallery (single or multiple images) with Pagination. | Text or badges over the photo. Video that autoplays. Ads between photos. |
| — | bottom | fixed | Nothing, or the position (2 of 5). | Promotions. |

### Rules

1. Each photo has alt text that describes the item.
2. Position is announced, not shown by dots alone.
3. Close returns to the same photo on the item page.
4. Pinch and double tap zoom; a button offers the same.
5. Nothing plays by itself.

### Allocation

- **App level:** L4 · detail of the item page.
- **Motion:** Swipe has a tap alternative; reduced motion is respected (M10).

### Measure

- **Success:** Item views that open the viewer.
- **Guardrails:** refunds marked not as described.

### Example: Marketplace

- **Inherits:** Marketplace: DNA Supportive · band 6 · interrupts for offers are T3 · suppressed in sacred windows.

---

## Date and time · day and period

`date-period` · step · app level L3 · status draft · was `slot-period`

Choose a day and a broad part of the day, for a service where the booking is valid all day. One step of a booking; nothing else from the booking lives here.

- **Use for:** A service where the person commits to a day and a broad arrival window.
- **Not for:** Exact timed entry (use Date and time · day and exact slot). Stay or travel dates (range pickers).
- **Band:** Band 3. Journey step: demotes when the step closes.
- **Figma:** ✨ Templates › section `70438:7701`

### Spaces

| # | Space | How many | Allowed | Not allowed |
|---|---|---|---|---|
| — | toolbar | fixed | Toolbar · Companion MGM: who the booking is for, edit the party, close. | Toolbar · Timer when no place is held. Hiding who the booking is for. |
| 1 | month | required, 1 | Month title with previous and next. The title opens Sheet - Calendar. | Months outside the bookable window. A month that disagrees with the selected day. Digits other than 0–9. |
| 2 | days | required, 1 | DayTab: Default, Selected, Today tag, Unavailable. A real marker with its meaning stated. | Markers without a stated meaning. Colour as the only sign of availability. "Filling fast" tags not driven by live capacity. |
| 3 | expectation | optional, 0–1 | Headers · 04 Legend: the section title and one line that sets expectations. | Offers or any band-6 content. More than one notice. Blessings or faith copy mixed into logistics. |
| 4 | periods | required, 1–n | Time slot card as a full-width option: Default, Selected, Disabled. Tags Crowd, Prayer, Available soon, Instant only from live data. EmptyState replaces the list when the day has nothing. | A period chosen in advance. Crowd or "last places" tags without live data. Countdowns. Hiding unavailable periods without saying why. |
| — | action-bar | fixed | TabBar action bar · Actions: one line that repeats the chosen day and time, and one Primary that names the outcome. | A disabled Primary as the only feedback. Raw placeholders such as %s. A second Primary. |

### Interaction

1. Open on the first day that has places; no time is chosen for the person.
2. The month or date title opens Sheet - Calendar. Its Primary applies the day, Ghost closes it and keeps the current day.
3. Changing the day clears the chosen time and reloads the list; a day with nothing shows EmptyState and points to another day.
4. Choosing a period selects it alone; the option shows Selected and the action bar repeats day and period in words.
5. The Primary continues to the summary, which repeats the day and the preferred time before anything is confirmed.

### Rules

1. One selection at a time; a selected option never relies on colour alone.
2. Availability comes from the live service; the screen never invents demand (M4).
3. The main action stays enabled; on tap it says what is missing (M10).
4. Digits 0–9 in every language; day names and dates agree across header, tabs and title.
5. Arabic and English are both checked: mirrored arrows, isolated numbers.

### Allocation

- **App level:** L3 · a configuration step inside a booking. Opened from the service page, never from Today.
- **Band:** Band 3, the journey step.
- **Scarcity:** Only when places are truly limited: then availability is stated plainly. It is information, never pressure.
- **Withheld:** Dependents give constraints and do not see a date picker; booking control for Dependents and Organised groups is P0.

### Measure

- **Success:** Step completion and time to choose.
- **Guardrails:** changes after confirmation, cancellations, share of days opened with no places.

### Example: Umrah Permits

- **Service:** Umrah Permits · DNA Core. Resting P3, raised to P1 at steps 2.2, 5.4 and L1.2.
- **Scarcity:** Real: places are limited.
- **Withheld:** Dependents at L1.3 and 2.6 give constraints.
- Built on Visit Details Master with Tabs on and List on.
- Expectation line in the example: the permit is valid all day; arrival time is guidance.
- Day marker in the example: a Ramadan night.
- **In the flow today:** The month header reads June 2025 while the date title reads 22 June 2026, and the day tab says Saturday 22 while the title says Sunday 22. Hint lines still carry %s. The main action is disabled until a time is chosen.
- **Source frames:** `XyVWgqJb7gWcNRlnwmnYow · 10274:8717`, `XyVWgqJb7gWcNRlnwmnYow · 8673:54939`, `XyVWgqJb7gWcNRlnwmnYow · 8699:42965`

---

## Date and time · day and exact slot

`date-slot` · step · app level L3 · status draft · was `slot-exact`

Choose a day, a part of the day and an exact time, with optional groups of times by audience. One step of a booking; nothing else from the booking lives here.

- **Use for:** Timed entry with limited capacity per slot, with or without separate groups.
- **Not for:** Day-level bookings (use Date and time · day and period). Prayer times display (PrayCard on Today).
- **Band:** Band 3. Journey step: demotes when the step closes.
- **Figma:** ✨ Templates › section `70438:7874`

### Spaces

| # | Space | How many | Allowed | Not allowed |
|---|---|---|---|---|
| — | toolbar | fixed | Toolbar · Companion MGM: who the booking is for, edit the party, close. | Toolbar · Timer when no place is held. Hiding who the booking is for. |
| 1 | date | required, 1 | Full date title with previous day and next day. The title opens Sheet - Calendar. | Days outside the bookable window. Digits other than 0–9. |
| 2 | periods | required, 1 | Pray Card row: Selected On or Off, one On at a time. Audience icons only together with a text label. | Icons alone to name an audience. Prayer times presented as bookable times. A period with no slots shown as available. |
| 3 | expectation | optional, 0–1 | Headers · 04 Legend: one line that names the window. | Offers or any band-6 content. More than one notice. |
| 4 | slots | required, 1–2 groups | A headline per group and Time slot card in three columns: Default, Selected, Disabled; Available soon with its icon and a stated meaning. | A slot chosen in advance. Selecting in two groups at once. Icons in a slot corner with no stated meaning. Invented "few left" states. |
| — | action-bar | fixed | TabBar action bar · Actions: one line that repeats the chosen day and time, and one Primary that names the outcome. | A disabled Primary as the only feedback. Raw placeholders such as %s. A second Primary. |

### Interaction

1. Open on the first day that has places; no time is chosen for the person.
2. The month or date title opens Sheet - Calendar. Its Primary applies the day, Ghost closes it and keeps the current day.
3. Changing the day clears the chosen time and reloads the list; a day with nothing shows EmptyState and points to another day.
4. Changing the period keeps the day and reloads the slot groups.
5. Choosing a slot selects it alone across all groups; the card shows Selected and the action bar repeats day and time in words.
6. The Primary continues to the summary of the booking.

### Rules

1. The chosen slot is visible on the slot itself, not only in the action bar.
2. Disabled means full or closed; "Available soon" has a stated meaning and a time when known.
3. Groups follow the party in the toolbar; a group that does not apply is not shown.
4. The main action stays enabled; on tap it says what is missing (M10).
5. Slot targets are 48 dp high or more; digits 0–9; Arabic and English both checked.

### Allocation

- **App level:** L3 · a configuration step inside a booking. Opened from the service page, never from Today.
- **Band:** Band 3, the journey step.
- **Scarcity:** Only when slots are truly limited: then a full or soon-open slot is stated plainly. It is information, never pressure.
- **Withheld:** Booking control for Dependents and Organised groups is P0: they see the booked time, not this picker.

### Measure

- **Success:** Step completion and time to choose.
- **Guardrails:** changes after confirmation, cancellations, taps on disabled slots.

### Example: Rawdah Permits

- **Service:** Rawdah Permits · DNA Core. Resting P3, raised to P1 at M1.2 (genuine scarcity, genuine push, T1).
- **Scarcity:** Real: slots are limited.
- Built on Visit Details Master with Tabs off and List on, wrapped in a local component (Rawdah Visit Details).
- Groups in the example: times for men and times for women.
- Window line in the example: from midnight to Fajr.
- **In the flow today:** The "Slot Selected" screen shows no selected slot; only the action bar changes. The calendar sheet shows red dots under days with no stated meaning. The hint line carries %s. The main action is disabled until a slot is chosen. The sheet frame is named "Select data sheet".
- **Source frames:** `OHOmsyMC66YmN80rdwduQJ · 76464:223349`, `OHOmsyMC66YmN80rdwduQJ · 76464:227638`, `OHOmsyMC66YmN80rdwduQJ · 84346:100900`

---

## Booking details

`booking-details` · page · app level L3 · status draft

One booking after it is made: when it is, where it stands now, who it covers and how to open each pass. The same page serves the booking through its whole life; the state changes the content, not the layout.

- **Use for:** Any single booking, permit or reservation with a time and one or more people.
- **Not for:** A package made of several bookings (use Booking details · package). The step that creates the booking.
- **Band:** Band 2. Commitment state: never suppressed.
- **Figma:** ✨ Templates › section `70448:13459`

### Spaces

| # | Space | How many | Allowed | Not allowed |
|---|---|---|---|---|
| — | toolbar | fixed | Toolbar · Secondary Pages / Default: back, the service name as title, support. | A title that changes with the state. Search. A timer. |
| 1 | summary | required, 1 | Day and date, one status line in plain words, and at most one action that fits the state (CTA · Primary MD). | Two actions. Emoji as decoration. Raw placeholders. Urgency wording about an approaching time. |
| 2 | people-and-passes | required, 1–n | Headers · 04 Legend, then MemberCard per person: name, identifiers, and either a CTA · Secondary XS that opens the pass or a StatusChip. | Hand-built person cards. A pass action on a cancelled or missed booking. Full ID numbers shown to people other than the holder or the booker. |
| 3 | manage | optional, 0–1 | One CTA with Fate for cancel, or one Secondary for change, only while the service allows it. | A cancel action after the visit. Cancel styled as the main action. Cancelling without a confirmation step. |
| 4 | for-this-journey | optional, 0–1 | SectionTitle with cards-slider: guidance first (MediaCard · Article), then at most one paid service (MediaCard · Ticket). | A position above spaces 1 to 3. Paid cards on a cancelled or missed booking. Paid cards inside a suppression window. Prices without currency and what they cover. |
| — | bottom | fixed | Tab Bar · Empty. | A sticky action bar: the page is a status page, not a step. |

### States

| State | What changes |
|---|---|
| confirmed | Summary: the chosen time. People: open pass. Manage: cancel or change. |
| day-of-visit | Summary: a calm line and one helpful action (guide, directions). People: open pass. Manage: cancel while allowed. |
| completed | Summary: a closing line and, where it exists, one action for the record (certificate). People: no pass action. No manage. |
| cancelled | Summary: the original time. People: Cancelled chip, per person when only some were cancelled. No manage. No paid cards. |
| missed | Its own state and chip, not Cancelled. Summary says what happens next and whether a new booking is possible. |

### Rules

1. One layout for every state; only the content of spaces 1 to 4 changes.
2. The status is said in words and with a chip, never by colour alone.
3. Completion is acknowledged calmly: no celebration, no score, no emoji; faith wording only in its natural place.
4. Passes open in one tap and work offline once issued.
5. Digits 0–9; dates in one format across the page; Arabic and English both checked.

### Allocation

- **App level:** L3 · reached from the request card on Today, from Requests, and from the notification.
- **Band:** Band 2, commitment state. T1 when the time is near.
- **Suppression:** The page itself is never suppressed. Space 4 follows the commercial rules: withheld in sacred windows.
- **Withheld:** Dependents see their own pass and the time; manage (space 3) belongs to the booker or the organiser.

### Measure

- **Success:** Pass opened before the visit; visits kept.
- **Guardrails:** cancellations, missed visits, support contacts from this page.

### Example: Umrah Permits

- **Service:** Umrah Permits · DNA Core. Its booking state is commitment state: band 2, T1 when the time is near.
- **In the flow today:** The toolbar title changes by state. Person cards are hand-built, not MemberCard. The status line carries an emoji and a raw %s. "Visit Missed" shows a Cancelled chip and sits under "Cancel by user". The same action is worded two ways across screens. Frames are named "Compeleted".
- **Source frames:** `XyVWgqJb7gWcNRlnwmnYow · 10034:12591`, `XyVWgqJb7gWcNRlnwmnYow · 10143:6519`, `XyVWgqJb7gWcNRlnwmnYow · 10143:7739`, `XyVWgqJb7gWcNRlnwmnYow · 10009:4694`

---

## Booking details · package

`booking-details-package` · page · app level L3 · status draft

A booking made of several parts with one provider: where the whole stands, who is in it, what is confirmed, what is still asked of the person, and the money.

- **Use for:** Packages and journeys with several people, several parts and invoices.
- **Not for:** A single visit or permit (use Booking details).
- **Band:** Band 2. Commitment state: never suppressed.
- **Figma:** ✨ Templates › section `70448:13643`

### Spaces

| # | Space | How many | Allowed | Not allowed |
|---|---|---|---|---|
| — | hero-and-toolbar | fixed | Featured BG with Toolbar · Secondary Pages / Default: back, title, support. | A hero that carries text or status. Promotional imagery. |
| 1 | provider-and-status | required, 1 | Provider name and link, package attributes as Chips, and one StatusChip for the whole booking. | More than one status for the whole. A pending status with no next step explained. |
| 2 | people | required, 1–n | SectionTitle (Collaps), then a card per person with eligibility as a Chip; "You" marked. | Health or disability details visible to other members. Hand-built cards where MemberCard fits. |
| 3 | confirmed-parts | optional, 0–n | SectionTitle (Collaps), then a RequestCard or ticket per confirmed part (flight, stay, transport). | Offers mixed into confirmed parts. Parts with raw placeholders. |
| 4 | open-question | optional, 0–1 | One question the service still needs, answered in place; once answered it becomes a line with an edit action. | More than one open question at a time. A question that moves position after it is answered. |
| 5 | money | required, 1–2 | PaymentDetails per invoice with its status, and the refund account with an edit action. | A total that differs from what was paid. An account number inside an Alert. Mixed date formats. |
| 6 | for-this-journey | optional, 0–1 | SectionTitle with cards-slider, below the money. | A position above spaces 1 to 5. A booking form inside this page. Paid cards in a suppression window. |
| 7 | history | optional, 0–n | Cancelled or refunded parts with StatusChip (Cancelled, Refunded). | History above confirmed parts. |
| 8 | leave | optional, 0–1 | One quiet block that explains what cancelling involves and one CTA with Fate. | Alert · Error for something that is not an error. Cancel after the service has started. |
| — | bottom | fixed | Tab Bar · Empty. | A sticky action bar. |

### States

| State | What changes |
|---|---|
| processing | Status: in progress, with what happens next. Open question may show. No confirmed parts yet. |
| issued | Status: issued. Confirmed parts listed. Each person can open their pass. |
| part-cancelled | History lists the cancelled part with its refund status; the whole keeps its status. |
| cancelled | Status: cancelled. Money shows the refund. No offers, no leave block. |

### Rules

1. The order of spaces is the same in every state; a space is shown or hidden, never moved.
2. One status for the whole booking at the top; parts carry their own.
3. What the person owes or is owed is stated once, in the money space.
4. Offers never sit above status, people, confirmed parts or money.
5. Digits 0–9; one date format; no raw placeholders; Arabic and English both checked.

### Allocation

- **App level:** L3 · reached from the request card on Today and from Requests.
- **Band:** Band 2, commitment state.
- **Suppression:** The page is never suppressed. Space 6 is withheld in sacred windows.
- **Withheld:** Money, leave and the open question belong to the booker; other members see status, their own card and confirmed parts.

### Measure

- **Success:** Open questions answered; passes opened.
- **Guardrails:** cancellations, refund complaints per 1,000, support contacts from this page.

### Example: Domestic Hajj

- **Service:** Domestic Hajj (Local Hajj Flow) · DNA Core. Its booking state is commitment state: band 2.
- **Suppression:** Hajj: from Ihram to Tahalol.
- "Offers below the money and never while processing" is a proposal in this contract; DESIGN.md does not state it in those words.
- **In the flow today:** The sections change order between "Issuing" and "Issued". A flight booking form and paid cards sit above the bank account and invoices while permits are still being issued. The refund account number sits in an Alert. Cancel uses an error alert. Two date formats on one page. Several lines carry %s; a section title carries an emoji.
- **Source frames:** `9Xgo9wPf09wMU2lsK4lzlD · 23156:34386`, `9Xgo9wPf09wMU2lsK4lzlD · 23163:13432`

---

## Pass sheet

`pass-sheet` · overlay · app level L4 · status draft

The pass of one person, opened over the booking: whether it is valid, whose it is, and the code to show at the gate.

- **Use for:** Any pass, permit or ticket shown to a person or a scanner.
- **Not for:** A pass that is itself a full card with photo (use Pass viewer).
- **Band:** Band 2. Commitment state: never suppressed.
- **Figma:** ✨ Templates › section `70448:13911`

### Spaces

| # | Space | How many | Allowed | Not allowed |
|---|---|---|---|---|
| — | page-behind | fixed | The booking page under overlay-backdrop. | Opening as a new page that loses the booking. |
| 1 | validity | required, 1 | One StatusChip in words: active, not yet active, used, expired, cancelled. | A valid-looking code with a non-valid status. Colour as the only signal. |
| 2 | holder | required, 1 | Name and the identifiers the gate checks. | Identifiers the gate does not need. |
| 3 | code | required, 1 | QRCodeStatus at a size that scans, with an optional label for the pass type and its meaning one tap away. | A label with no stated meaning. A code that needs the network to render. Anything animated over the code. |
| 4 | keep | optional, 0–2 | Share, and add to wallet with the official wallet artwork. | Share on a pass that is not valid. Rebuilt wallet buttons. |
| — | close | fixed | CTA · Ghost: close. | A Primary. Offers. |

### States

| State | What changes |
|---|---|
| active | Code shown, keep actions on. |
| not-yet-active | Code shown or held back by service rule; the time it becomes active is stated. |
| used-expired-cancelled | No code; the status and what to do next. |
| could-not-load | The last saved pass if there is one, and a retry (SectionError); never an empty sheet. |

### Rules

1. Validity is the first thing read.
2. Nothing commercial on this sheet.
3. The code is never cropped, dimmed or covered.
4. Works offline once issued.
5. Digits 0–9; Arabic and English both checked.

### Allocation

- **App level:** L4 · an artefact. Opened from the person card, from the request card on Today, and from the notification.
- **Band:** Band 2; band 1 at the gate. Promoted to P1 at the moment of use.
- **Offline:** Available offline once issued; brightness raised while open.
- **Withheld:** A person opens only their own pass, or those of people they booked for.

### Measure

- **Success:** Pass opened at the gate without retry.
- **Guardrails:** load failures, gate rejections reported.

### Example: Umrah Permits

- **Service:** Umrah Permits · DNA Core.
- Built on Bottom Sheet · Status=Default with QR Code · Type=Prioirty.
- **In the flow today:** The code carries a "privilege card" label with an info icon and no stated meaning on the sheet.
- **Source frames:** `XyVWgqJb7gWcNRlnwmnYow · 10167:18235`, `XyVWgqJb7gWcNRlnwmnYow · 10205:8496`

---

## Pass viewer

`pass-viewer` · overlay · app level L4 · status draft

A pass that is an identity card: shown full screen, on its own, for inspection.

- **Use for:** Official cards with photo that are inspected by a person as well as scanned.
- **Not for:** Simple code passes (use Pass sheet).
- **Band:** Band 2. Commitment state: never suppressed.
- **Figma:** ✨ Templates › section `70448:14061`

### Spaces

| # | Space | How many | Allowed | Not allowed |
|---|---|---|---|---|
| — | toolbar | fixed | Toolbar · Modal / Default: title, a chip for the season or validity period, close. | Back plus close together. Actions that leave the pass by accident. |
| 1 | pass | required, 1 | The official card component as issued: authority marks, photo, name in both scripts, nationality, document number, code, pass number, provider. | Restyling or reordering the official card. Raw placeholders. A photo that is not the holder. Offers. |
| — | bottom | fixed | Empty. | Any action bar. |

### States

| State | What changes |
|---|---|
| issued | The card. |
| not-issued-yet | No card; the status and when to expect it. |
| could-not-load | The last saved card if there is one, a retry (SectionError) and a way to get help. |
| revoked-or-expired | No code; the status in words. |

### Rules

1. The card is the only content.
2. The background never competes with the card.
3. Authority marks are used as supplied.
4. Works offline once issued.
5. Digits 0–9 in every language.

### Allocation

- **App level:** L4 · an artefact. Opened from booking details and from Today when it is needed.
- **Band:** Band 2; band 1 at a checkpoint. Promoted to P1 at the moment of use.
- **Offline:** Available offline once issued.
- **Withheld:** Each person sees their own card; an organiser sees those of the group.

### Measure

- **Success:** Card opened when needed without retry.
- **Guardrails:** load failures, support contacts about the card.

### Example: Hajj permit

- **Service:** Hajj ID · DNA Core · P5 permanent, P1 at its steps.
- The card in the example is the library component named "Hajj Landing Update".
- **In the flow today:** The card carries "version number %s". A state frame is named "Field".
- **Source frames:** `9Xgo9wPf09wMU2lsK4lzlD · 23178:16229`, `9Xgo9wPf09wMU2lsK4lzlD · 23213:33038`, `9Xgo9wPf09wMU2lsK4lzlD · 23213:33302`
