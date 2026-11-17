# NpsScale

The "how likely are you to recommend" row: numbered circles with end labels.

**Figma source:** [⭐️ Rating & CSAT › Customer Feedback › Recommendation](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76392-4735) (unpublished, 16 November 2026). Mirrors the NPS block inside Customer Feedback; it is not a separate Figma set yet.

**Read 16 November 2026:** 37 circles; 1–6 on `alerts-surface-error`, 7–8 on `alerts-surface-warning`, 9–10 on `alerts-surface-success`; numbers `notes-1-regular` in `text-subtle`; end labels `notes-2-regular` in `text-content`. Figma starts at **1** and has no picked state. Code defaults to Figma (1–10) and offers `from={0}` for the standard 0–10 scale; the picked number is Ink with white text until Figma draws one (Q-D25, Q-D26).

## Props

| Prop | Type | Notes |
|---|---|---|
| `question` | `string` | Shown above the row and names the radio group |
| `from` | `0 \| 1` | First number. Default 1 (Figma); 0 = standard NPS |
| `value` | `number` | Controlled when `onChange` is passed |
| `onChange` | `(value: number) => void` | |
| `lowLabel` | `string` | Default «غير مرجّح إطلاقًا» |
| `highLabel` | `string` | Default «مرجّح جدًا» |

## Use

- Ask once per journey, after the outcome, and never in the same sheet as a payment or a complaint.
- Report NPS as % promoters (9–10) minus % detractors (0–6, or 1–6 on the Figma scale; the two are not comparable).

## Don't

- Do not mix 1–10 and 0–10 data in one report.

## You provide

The question. Colour, type and spacing come from the tokens.
