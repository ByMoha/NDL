# VisaUserBlock

A traveller tile for visa and booking lists.

**Figma source:** 🏖️ Travel › Visa User Block. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**18 November 2026 (review comments of 17 Nov: RTL everywhere):** the name starts on the start side (right in Arabic) and wraps to two lines before the ellipsis; the check sits at the top end corner (left in Arabic), mirroring Figma. The default name is Arabic («أحمد محمد علي»).

**17 November 2026:** white, radius 18, padding 18/12, gap 8, Shadow/XS. The Latin name in Notes 1, 93 wide, two lines then …; a 20 gender icon (muslim / hijab) and the flag (20 × 15). Selected adds checkmark-circle-02 (18) top right and a Longing line.

## Props

| Prop | Type | Notes |
|---|---|---|
| `name` | `string` | As on the passport |
| `gender` | `'male' \| 'female'` |  |
| `flag` | `string` | Emoji or image |
| `selected` | `boolean` |  |
| `onClick` | `fn` |  |

## Use

- Show the passport name as written.

## Don't

- Do not translate the name.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
