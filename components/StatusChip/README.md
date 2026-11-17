# StatusChip

The status of a request. 47 statuses with their colour and icon, exactly as Figma (`approved`, مقبول, added 14 November 2026).

**Figma source:** 🃏 Cards › Request Card Status (46 variants): Chips XS, 18 high, text 10, icon 12 (9 November 2026).

## Props

| Prop | Type | Notes |
|---|---|---|
| `status` | `string` | Kebab case of the Figma name: `confirmed`, `awaiting-payment`, `order-delivered`… Figma spellings (`Awatining Payment`) also work |
| `children` | `string` | Overrides the label |
| `icon` | `boolean` | Hide the icon |
| `iconName` | `string` |  |

## Use

- Success = done, Pending = waiting on someone, Error = failed or cancelled, Default = over.

## Don't

- Do not invent statuses; ask the DL team to add one.

## Known issues

- Chip text is 10px (was 8), still below the 12px minimum (K2).

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
