# PaymentDetails

The order summary and the refund summary: a card that opens to a list of priced rows.

**Figma source:** 💸 Payment › Payment Details (Collapse Off / On × Type Price / Refund) on `_Payment Details Master` and `_Price` (Type Default / Total). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**17 November 2026, evening — rebuilt from Figma:** white card, radius 18, padding 26 / 18, 32 between the header and the rows. Header: the title (Body 1, 18); Price shows the total (riyal 20 + 20 Regular), Refund a 24 `file-block` icon and the status chip («جارٍ الاسترداد», Pending MD with hourglass); a Secondary XS icon-only button at the end opens and closes the card. Rows are `_Price`: 44 high, padding 12, radius full, label and value Body 2. **Odd rows (1st, 3rd, 5th…) are Ivory and even rows are clear**; the Total row (Body 1, 47 high) continues the pattern. A value can be an amount (riyal), text (with a copy button) or a chip. Refund ends with the warning hint and the policy link. The old ruled list (a separator line and a bold total) is gone.

## Props

| Prop | Type | Notes |
|---|---|---|
| `type` | `'price' \| 'refund'` | Default price |
| `title` | `string` | Default «ملخص الطلب» / «طلب الإلغاء» |
| `total` | `string` | Price: the header total, and the Total row unless `totalAmount` |
| `totalLabel, totalAmount` | `string` | The Total row; default «المجموع» |
| `lines` | `{label, amount?, value?, copy?, chip?, chipState?, chipIcon?, discount?}[]` | Rows, striped odd / even; a chip row takes its state (default pending) and icon (default hourglass) |
| `status` | `string \| false` | Refund: the status chip |
| `iconName` | `string` | Refund: the header icon |
| `open, onToggle, toggleLabel` | `boolean, fn, string` | Collapse On / Off; default open |
| `note, policyLabel, policyHref` | `string` | Refund: the warning hint |

## Use

- Show what was paid, row by row, in the order of the invoice.

## Don't

- Do not add a separator line or a different total style; the stripes carry the rhythm.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
