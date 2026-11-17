# UpcomingRequests

The person's next bookings at the top of a landing page.

**Figma source:** 🏠 Landing Experience V2 › CMS (`9qmiMkJqcEMFY8vbxhcP6r`) › Rawdah Landing › Quick Actions. Read 9 November 2026.

## Anatomy

- Section title (tight) with "عرض الكل"; RequestCards 386 wide, gap 8, side padding 8
- Upcoming cards hide the past-status row

## Logic

- Intent: what I already booked comes first.
- Reassurance: date, time and status at a glance (Feedback).
- Data: one CMS section = `{ pattern, title, tag?, actionLabel?, items[] }` (see Page).

## Don't

- Do not restyle the cards inside; configure them.
- Do not nest a pattern inside another pattern.

## Native

iOS: a `Section` in a `ScrollView`/`List` with a horizontal `ScrollView` + `LazyHStack` for rows. Android: a `LazyColumn` item with a `LazyRow` (contentPadding 8 dp, spacedBy 8 dp). Rows snap to items.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
