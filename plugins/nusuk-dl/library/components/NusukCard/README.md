# NusukCard

The person's Nusuk identity and payment cards: Nusuk ID (seven sub-categories), the small ID tiles (Nusuk ID, Rawdah permit, Hajj permit), the Nusuk mada card and the wallet prompt. New in the DL on 24 November 2026.

**Figma source:** [🃏 Cards › Nusuk Cards](https://www.figma.com/design/mg7egvNbr2ciMP04Ig2XDl/?node-id=70838-7738) (Cards Nusuk ID, Wallet, Card × Small Off, On × Sub Category; 13 variants) on Nusuk ID Master (Priority, Hajj Card), Bank Card and Nusuk Cards Mini.

## Anatomy

| Part | Spec |
|---|---|
| Nusuk ID | 386 × 226. A 43 header in the sub-category colour with the card name (10, white, centred); the white body (radius 18, padding 12, items 12 apart) sits 21 over it |
| Header colours | Default `#cbcccd` بطاقة مستخدم نسك · Tour Guide `#636669` بطاقة مرشد سياحى · Hajj Emp `#070808` بطاقة منسوبى وزارة الحج · Charity `#1c664b` بطاقة متطوع · Work `#7f26d9` بطاقة عمل · Hajj `#d99726` بطاقة تصريح حج (with the company name, the Hajj guilloché and the 1447 tag) · Umrah `#573d1c` بطاقة تصريح عمرة |
| Body | Logos row (Nusuk at the start, MoH at the end); photo 82, radius 14; name Body 2 (16); flag, nationality and document number Notes 2 (12); QR 95 with the Nusuk ID and copy at the end |
| Small ID | 164 × 172, radius 18, padding 12 / 18 / 12 / 8, 18 apart: label (14), a 56 avatar with an optional Gold XS `disability-02` chip (`priority`), nationality and number. Rawdah: green glow; Hajj Card: guilloché and the tag |
| Card | 386 × 226 black mada card, left to right: Nusuk and bank logos, •••• + last four and mada, NAME and EXPIRY DATE, Mastercard. Small: white, mada and Mastercard, «الرصيد الحالي» and the balance with the riyal sign |
| Wallet | small: the card illustration and «أكمل بياناتك لتفعيل محفظة نُسك» with the arrow |

## Props

| Prop | Type | Notes |
|---|---|---|
| `cards` | `'Nusuk ID' \| 'Wallet' \| 'Card'` | Figma Cards |
| `small` | `boolean` | Figma Small |
| `subCategory` | `'Default' \| 'Tour Guide' \| 'Hajj Emp' \| 'Charity' \| 'Work' \| 'Hajj' \| 'Umrah'`; small: `'Default' \| 'Rawdah' \| 'Hajj Card'` | |
| `photo`, `name`, `nationality`, `flag` / `flagSrc`, `documentNumber`, `nusukId`, `qr` | | The person's data; `qr` is the real code image (the sample QR is for mockups) |
| `company`, `title`, `headColor`, `label` | | Hajj company; override the header or label |
| `priority` | `boolean` | Small ID: the gold accessibility chip |
| `last4`, `holder`, `expiry`, `balance` | | Card |
| `onCopy`, `onClick`, `href` | | |
| `bankName` | `string` | Card: alt text of the bank mark |
| `nameLabel`, `expiryLabel` | `string` | Card: the NAME and EXPIRY DATE captions |
| `balanceLabel` | `string` | Small card: the balance caption, default «الرصيد الحالي» |
| `copyLabel`, `qrLabel`, `tagAlt` | `string` | Names of the copy button and the QR image; alt text of the Hajj permit tag |
| `ariaLabel` | `string` | Names the card, default «بطاقة نسك» |
| `kind`, `sub` | `string` | Older names for `cards` and `subCategory` |

## Use

- Show the real QR from the service; never a static image in production.
- The ID is a document: no marketing, no badges beyond the Figma ones.

## Don't

- Do not recolour the header outside the seven sub-categories.

## iOS and Android

Build as a card view with the header as a separate layer under the body (body offset −21). Logos and the guilloché are bundled assets; the QR is generated on device (CIQRCodeGenerator / ZXing). Card numbers and IDs are left to right.

## Known issues

- The Hajj variant's photo overflows the card's end edge in Figma; code keeps it inside.
- Assets (logos, sample QR, backgrounds) are rendered from Figma into the bundle (about 60 KB).
