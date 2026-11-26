# QuoteWidget

A short supplication or quote on a white card, with its source and a gold tag. New in the DL on 24 November 2026.

**Figma source:** [🃏 Cards › Quote Widget](https://www.figma.com/design/mg7egvNbr2ciMP04Ig2XDl/?node-id=70337-6095) (243 × 224).

## Anatomy

White, radius 18, padding 26 / 18, items 12 apart, Glass/Full. `quote-up` 24 in gold; the text in **29LT Idris** 24 (line 120%); the source in Notes 2 (12); a Gold XS chip.

## Props

| Prop | Type | Notes |
|---|---|---|
| `text` | `string` | The quote, exactly as the approved source writes it |
| `source` | `string \| false` | Default «دعاء» |
| `tag`, `tagState` | `string \| false`, chip state | Default «دعاء», gold |

## Use

- Quran and hadith text only from the approved translation databases; never paraphrase.

## Known issues

- 29LT Idris is not a DL font token; the card falls back to IBM Plex Sans Arabic where the font is not loaded.
