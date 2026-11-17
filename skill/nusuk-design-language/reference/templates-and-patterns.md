# Templates and patterns

How to start a screen from a template, for designers, product owners and Claude. Updated 2026-11-11. All 20 template contracts are drafts for review.

The full text of every contract is on the next page, *Template contracts*.

## In one minute

- A **template contract** says what one kind of screen may hold: spaces in a fixed order, what is allowed and not allowed in each, its states and rules.
- A **pattern** fills a space. A **component** builds a pattern.
- Templates are named for the job (Booking details, Pass sheet), never for a product. The service you see beside each one in Figma is an example.
- In Figma: ✨ Templates-Patterns › ✨ Templates. Each section shows the wireframe, the numbered spaces, the guide and an example.

## Starting a screen

1. **Classify** the request: intent or desire, realm, behavioural pattern (M2, M3).
2. **Place** it: service, journey step, mindset, band (M9S).
3. **Pick the contract by job** from `templates/index.json`: match what the person is doing on the screen, not the product. Read `useFor` and `notFor`.
4. **Read that one contract** (`templates/contracts/<id>.json`). Do not load the others.
5. **Fill each space only from its `allowed` list**, in the fixed order, respecting cardinality. Choose the pattern for a space from `patterns/index.json` (M9P), then the component card.
6. **Apply the state** (`states`): a state changes what a space holds; it never moves, adds or reorders spaces.
7. **Check** the result against every `forbidden` line, the contract `rules`, and the red lines (M4). Name the `measure` and its guardrail.
8. **No fit?** Say so. Do not force the nearest contract. Build with DL tokens and components, label it **Proposed**, and draft a contract for it (fields below).

## The templates

| Template | `id` | Kind | Level | Band | The job | Example |
|---|---|---|---|---|---|---|
| Service landing | `service-landing` | page | L2 | service | The front page of a service that offers a catalogue. | Marketplace |
| Catalogue list | `catalogue-list` | page | L2 | service | Every item of one category, as a grid or a list, with the running selection always in reach. | Marketplace |
| Item details | `item-details` | page | L3 | service | Everything needed to decide on one item: media, name and provider, description, options, then one action that adds or books it. | Marketplace |
| Cart | `cart` | page | L3 | service | Review what was chosen, where it goes and what it costs, then move to payment. | Marketplace |
| Payment | `payment` | page | L3 | service | Pay with nothing else on the page. | Marketplace |
| Request tracking | `request-tracking` | page | L3 | 2 | Where a request is now, what happens next, and how to get help. | Marketplace |
| Requests list | `requests-list` | page | L2 | 2 | Every request of the person in one service, current and past. | Marketplace |
| Search in a service | `service-search` | page | L2 | service | Find an item by name inside a service. | Marketplace |
| Help and support | `service-support` | page | L2 | 1 | Answers and a way to reach a person, from inside a service. | Marketplace |
| Address selection | `address-selection` | task | L3 | service | Choose a saved place or add a new one. | Marketplace |
| Cancellation | `cancellation` | task | L3 | 2 | Cancel a request with a clear reason and a clear refund. | Marketplace |
| Add-on task | `add-on-task` | task | L3 | service | Choose an optional extra, personalise it and add it to the request. | Marketplace |
| Cost breakdown sheet | `cost-sheet` | overlay | L4 | 2 | The amounts of one request, readable in a glance. | Marketplace |
| Media viewer | `media-viewer` | overlay | L4 | service | Look closely at the media of one item. | Marketplace |
| Date and time · day and period | `date-period` | step | L3 | 3 | Choose a day and a broad part of the day, for a service where the booking is valid all day. | Umrah Permits |
| Date and time · day and exact slot | `date-slot` | step | L3 | 3 | Choose a day, a part of the day and an exact time, with optional groups of times by audience. | Rawdah Permits |
| Booking details | `booking-details` | page | L3 | 2 | One booking after it is made: when it is, where it stands now, who it covers and how to open each pass. | Umrah Permits |
| Booking details · package | `booking-details-package` | page | L3 | 2 | A booking made of several parts with one provider: where the whole stands, who is in it, what is confirmed, what is still asked of the person, and the money. | Domestic Hajj |
| Pass sheet | `pass-sheet` | overlay | L4 | 2 | The pass of one person, opened over the booking: whether it is valid, whose it is, and the code to show at the gate. | Umrah Permits |
| Pass viewer | `pass-viewer` | overlay | L4 | 2 | A pass that is an identity card: shown full screen, on its own, for inspection. | Hajj permit |

## When to use which

| `id` | Use for | Not for |
|---|---|---|
| `service-landing` | The front page of a catalogue service, when the person arrives with no item in mind. | A service with one item, search results, or any moment in pre-desire or a sacred window. |
| `catalogue-list` | One flat list of one kind: the items of a category, a collection or a provider. | Search results, a list that mixes kinds, or a category with 1 or 2 items. |
| `item-details` | One item that needs more than its card: several pictures, a description, options. | A booking with a date or a permit, or an item with a flow of its own. |
| `cart` | The step between choosing items and paying for them. | A single-item purchase with its own flow, or a booking. |
| `payment` | Paying for a cart or a booking. | Showing an invoice (use the cost breakdown sheet) or confirming a free request. |
| `request-tracking` | One request after payment: in progress, fulfilled or cancelled. | The list of all requests (use Requests list). |
| `requests-list` | Finding a request and opening its tracking page. | Today or a landing: there, use upcoming-requests with the next requests only. |
| `service-search` | A person who knows what they want. | Browsing with no query (use the landing). |
| `service-support` | Help with a request or with the service. | Marketing content or FAQs that sell. |
| `address-selection` | Selecting or adding an address during a transaction. | Managing the profile address book. |
| `cancellation` | Cancelling a paid request that can still be cancelled. | Returns after fulfilment, or removing an item from a cart. |
| `add-on-task` | Adding one optional, personalised extra to a request. | An extra that is a service of its own. |
| `cost-sheet` | Showing the amounts of a paid request. | Paying (use Payment) or tracking (use Request tracking). |
| `media-viewer` | Zooming into the media of an item. | Content galleries or live streams. |
| `date-period` | A service where the person commits to a day and a broad arrival window. | Exact timed entry (use Date and time · day and exact slot). Stay or travel dates (range pickers). |
| `date-slot` | Timed entry with limited capacity per slot, with or without separate groups. | Day-level bookings (use Date and time · day and period). Prayer times display (PrayCard on Today). |
| `booking-details` | Any single booking, permit or reservation with a time and one or more people. | A package made of several bookings (use Booking details · package). The step that creates the booking. |
| `booking-details-package` | Packages and journeys with several people, several parts and invoices. | A single visit or permit (use Booking details). |
| `pass-sheet` | Any pass, permit or ticket shown to a person or a scanner. | A pass that is itself a full card with photo (use Pass viewer). |
| `pass-viewer` | Official cards with photo that are inspected by a person as well as scanned. | Simple code passes (use Pass sheet). |

## What the examples showed

Reading the flows against the contracts exposed defects in the flows. They are logged in *Known library issues › Flows read against the template contracts* (TC1–TC16) and *Golf Carts flow read against the template contracts* (TC17–TC21), not fixed in the flows.

## Choosing a pattern for a space

1. The contract's `allowed` list names the patterns a space accepts. Stay inside it.
2. Check the pattern's bands against the band of the content (M9S).
3. Apply the composition rules: bands top-down, one heavy pattern each per page, one kind per row, no empty sections (a section that fails to load shows SectionError in its place), never two rows of the same item type back to back.
5. States come from the Status Handlers cards: a block that failed to load is SectionError; nothing yet is EmptyState (full page, or the List card inside a list); an outcome or one decision is StatusSheet, with its General Bottom Sheet `template` (payment-failed, payment-expired, location, refund, wallet-refund…); a reason before a cancellation is ReasonSelection; a rating after a stable outcome is CustomerFeedback.
4. If no coded pattern fits, the need is a Proposed pattern: follow the pattern contract in M9P.

| `pattern` | Component | Bands | Placement | Heavy | Used by (contract › space) |
|---|---|---|---|---|---|
| `featured-header` | FeaturedHeader | frame | L1 hero; actions are the P2 stage hub |  | — |
| `upcoming-requests` | UpcomingRequests | 2 | P1 |  | service-landing › notification-slot |
| `categories` | Categories | 4, 5, 6 | P1 (4), P2 (5), slot (6) |  | service-landing › category-grid |
| `category-chips` | CategoryChips | hub | P2 (Faith or content hub) |  | service-search › suggestions |
| `cards-slider` | CardsSlider | 3, 5, 6 | P1 at the step that needs it (3), P2 (5), slot (6) |  | service-landing › hero-row; service-landing › item-rows; catalogue-list › item-list; item-details › related; cart › related; service-search › results; booking-details › for-this-journey; booking-details-package › for-this-journey |
| `playlist` | PlaylistRow | 4 | P1; collapses to the faith strip during a journey |  | — |
| `list-side-by-side` | ListSideBySide | 4, 5 | P1 (4), P2 (5) |  | — |
| `leaderboard` | Leaderboard | 3, 5 | P1 | yes | service-landing › hero-row |
| `guide` | Guide | 3, 5 | P1 at the step it prepares for |  | — |
| `services-box` | ServicesBox | hub | P2 stage hub |  | — |
| `bento-grid` | BentoGrid | 5 | P2 | yes | — |
| `cards-list` | CardsList | 3, 6 | P1 at a booking step (3), slot (6) |  | catalogue-list › item-list; service-search › results |

## Contract fields

| Field | Meaning |
|---|---|
| `id`, `name`, `was` | Generic name for the job; `was` is the id before 11 November 2026 |
| `status`, `version`, `updated` | `draft` until the DL Manager approves; then `approved` |
| `kind` | `page`, `step` (one step of a flow), `task` (a full-screen task opened from a page) or `overlay` |
| `appLevel` | L1–L4 (M9S) |
| `band` | `value` 1–6, or `null` with a rule when the screen takes the band of the service that uses it |
| `job`, `useFor`, `notFor` | What the screen is for, in neutral terms |
| `spaces[]` | In order, top to bottom. `fixed` chrome or a numbered space with `cardinality` (required, optional 0–1, repeat 1–n). `allowed` and `forbidden` are the rule; `patterns` and `components` are the DL names found in `allowed` |
| `states[]` | The states of the screen and what each changes |
| `interaction[]` | Ordered behaviour rules, when the screen is a step |
| `rules[]` | Five rules with their module reference |
| `allocation` | Level, band, suppression, withheld mindsets: true for any service |
| `measure` | Success metric and guardrails (M5) |
| `figma` | The blueprint section in ✨ Templates-Patterns |
| `example` | One service that uses the contract: its allocation, notes, what the flow does today that the contract does not allow, and source frames. **An example is one situation, not the rule** |

## Adding or changing a contract

1. Read the flow in Figma; write the contract in neutral terms; put everything that is true only for that service under `example`.
2. Build the blueprint in ✨ Templates from the contract.
3. Add it to `templates/index.json`, DESIGN.md › M9T, the change log and a migration file, in one release.
4. Status stays `draft` until the DL Manager approves it.

## Files

`templates/index.json` · `templates/contracts/<id>.json` · `patterns/index.json` · DESIGN.md › M9T and M9P.
