# FeedbackEmojis

Five-level satisfaction scale for a Moment CSAT question.

**Figma source:** [⭐️ Rating & CSAT › Customer Feedback Emojis](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76392-4837) (Type × Active, 10) on [Smiles](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76645-2305) (Face: Awful, Bad, Okay, Good, Great). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**16 November 2026 (rebuilt from Figma):** each level is a 59 circle in the Quran palette with the Smiles mouth in the paired shade: Very dissatisfied `quran-crimson` / `quran-crimson-shade`, Dissatisfied `quran-crimson-shade` / `quran-crimson`, Neutral `quran-saffron-shade` / `quran-saffron`, Satisfied `quran-mint` / `quran-emerald`, Very satisfied `quran-emerald` / `quran-emerald-shade`. After a pick the other four drop to 40% and the picked one shows its name under it (`notes-1-regular`, `text-heading`). The scale runs from Very dissatisfied on the left to Very satisfied on the right in both languages, as Figma draws it. The old Ivory tiles with line faces are gone.

## Props

| Prop | Type | Notes |
|---|---|---|
| `value` | `number` | 0–4 (0 = very dissatisfied). Controlled when `onChange` is passed |
| `onChange` | `(value: number) => void` | |
| `label` | `string` | The question; names the radio group |
| `labels` | `string[]` | Five level names. Default «غير راضٍ تمامًا»، «غير راضٍ»، «محايد»، «راضٍ»، «راضٍ تمامًا» |
| `showLabel` | `boolean` | Name under the picked face. Default true |
| `size` | `number` | Circle size in px. Default 59 (65 in the standalone set) |

## Use

- Ask after a stable outcome (booking confirmed, visit completed, issue resolved). One ask per journey phase.
- Pair with `CustomerFeedback` for the full sheet.

## Don't

- Never ask during anxiety peaks or about worship itself; ask about the service.
- Do not colour-code without the level names: the name under the picked face carries the meaning for people who cannot tell the colours apart.

## You provide

The question and, if needed, the level names. Colour, type, radius and spacing come from the tokens and are not props.
