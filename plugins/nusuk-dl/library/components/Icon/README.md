# Icon

A 24px stroke glyph in the current text colour, sized by the `dimension-*` tokens.

**Figma source:** 🎨 Icons (Hugeicons, 4,428 sets). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `name` | `string` | **Hugeicons and Nusuk icons exported from Figma (8, 9, 11, 12 and 14 November 2026), 143 in all; added 14 November, night: checkmark-circle-02 is now the Stroke Standard glyph (Alert success) and the solid glyph is checkmark-circle-02-solid (DropdownItem); added 14 November, later: checkmark-circle-02, checkmark-square-02, download-04, package-search, package-receive, delivery-truck-02, package-out-of-stock, delivery-view-01, money-exchange-01; added 14 November: search-list-01, car-02, infinity-01, play-list, book-open-02 (each with -solid), airplane-02-solid, document-validation:** absher, airplane-01, airplane-02, airplane-landing-02, airplane-take-off-02, alert-02, alert-circle, arrow-down-01, arrow-expand-02, arrow-left-01, arrow-left-right, arrow-left-02, arrow-right-01, arrow-right-02, audit-01, bank, bed-double, berlin-tower, calendar-04, calendar-remove-02, call, camera-02, cancel-01, cancel-circle, checkmark-badge-02, checkmark-circle-02-solid, clapping-02, contact-02, customer-service-01, customer-support, delete-03, door-02, dua, favourite, filter, fire-03, flag-02, golf-cart, google-maps, gps-01, haji, hajj, hajj-service, hajj-service-solid, hajj-solid, hijab, hourglass, id, identification, image-02, internet, kaaba-01, live-streaming-02, loading-03, location-01, madinah, madinah-city, madinah-solid, mail-at-sign-01, mail-validation-01, makkah-city, man-woman, maps, masjid-gates-solid, menu-circle, more-horizontal, more-vertical, nafath, notification-01, nusuk, nusuk-logo, package, package-moving, package-process, package-remove, palm, palm-solid, passport-01, play, plus-sign, qr-code, quote-up, quran-01, rajhi, rawdah, remove-01, return-request, riyal, riyal-sharp, route-02, safe-delivery-01, scissor, search-01, security-password, share-05, shopping-basket-01, sidebar-left, simcard-02, smart-phone-04, sorting-05, spam, speed-train-01, star, stars, store-03, store-03-solid, student-card, sujood, thumbs-up, tick-02, tick-double-02, ticket-03, time-02, time-quarter-pass, truck-delivery, umrah, user, user-03, user-circle, user-group-02, user-story, view |
| `size` | `'sm' \| 'nr'` | 16px or 20px; default 24px |
| `label` | `string` | Accessible name; omit for decorative icons |
| `flip` | `boolean` | Mirror in RTL (directional glyphs) |
| `cls` | `string` |  |

## Use

- Icons sit beside a label or inside a control that names them.
- Directional icons (back, forward) mirror in Arabic.

## Don't

- Do not draw new icons. These are stand-ins for previews; production uses the Hugeicons set from 🎨 Icons.
- Do not use colour alone to carry meaning.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
