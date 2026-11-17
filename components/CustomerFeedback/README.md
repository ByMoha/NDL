# CustomerFeedback

The rating sheet: service header, CSAT faces, optional NPS row, reasons after a low score, comments, and the two actions.

**Figma source:** [⭐️ Rating & CSAT › Customer Feedback](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76392-4735) (unpublished, 16 November 2026), with the flow in [Customer Feedback_Mobile](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76392-4868) (Default, Unsatisfied, Satisfied, Very Satisfied) and the reasons in [NPS Survey](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76591-3962) / [NPS Survey Master](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76591-3748). Put it in a BottomSheet.

**Read 16 November 2026:** padding 26 / 8 / 48, gap 20. Header: 72 circle on `alerts-surface-gold` with the service icon (Rawdah by default), optional emoji (👍🏻, 37), title `headline-1-light`, subtitle `body-2-light` `text-content`. CSAT block: radius 14, padding 18, gap 12, the step chip («1 من 3»), the question `headline-2-light`, FeedbackEmojis. NPS block: NpsScale. After Very dissatisfied or Dissatisfied: «ما سبب عدم رضاك؟» with reason cards (white, radius 18, 1 px Pearl line, soft shadow, `body-2-regular`, MD checkbox at the end) and the comments text area. Actions: Primary MD, disabled until a level is picked («قيّم الخدمة»), then «التالي», or «شارك تقييمك» after Very satisfied; Ghost MD «ذكرني لاحقًا».

**17 November 2026 · `scale="stars"`:** [Customer Feedback Bottom Sheet](https://www.figma.com/design/aBwaxX7ipeurOVoQXNC2Kl?node-id=76404-3106): the gold circle with the service glyph (`package-open` for an order), «شارك تجربتك» `headline-1-light`, the question «ما مدى رضاك عن …؟» `headline-2-light` over the 24 star input (each star a 48 target), the comments box, Primary MD «شارك تقييمك» (disabled until a star) and Ghost MD. Figma puts the comments box above the question and asks «رضاك على»; code asks first, with «رضاك عن» (Q-D35, F83).

## Props

| Prop | Type | Notes |
|---|---|---|
| `scale` | `'emoji' \| 'stars'` | stars = Customer Feedback Bottom Sheet: a 1–5 star input; `onChange` gets 1–5 |
| `service` | `string` | Name in the title «قيّم تجربتك مع …» |
| `title` | `string` | Overrides the title |
| `subtitle` | `string` | Default «يساعدنا تقييمك على تحسين خدماتنا.» |
| `icon` | `boolean` | Figma Icon. Default true |
| `iconName` | `string` | Default `rawdah` |
| `emoji` | `string \| false` | Figma Emoji. Default 👍🏻 |
| `csat` | `boolean` | Figma Product Satisfaction. Default true |
| `step` | `[number, number]` | Current and total questions, shown as «1 من 3» |
| `question` | `string` | Default «هل أنت راضٍ عن الخدمة؟» |
| `labels` | `string[]` | Five level names |
| `value` | `number` | 0–4. Controlled when `onChange` is passed |
| `onChange` | `(value: number) => void` | |
| `nps` | `boolean` | Figma Recomendation. Default false |
| `npsQuestion` | `string` | |
| `npsFrom` | `0 \| 1` | See NpsScale |
| `npsValue` | `number` | |
| `onNps` | `(value: number) => void` | |
| `reasons` | `string[]` | Shown after a low score (0 or 1) |
| `reasonsTitle` | `string` | Default «ما سبب عدم رضاك؟» |
| `selectedReasons` | `number[]` | |
| `onReasons` | `(indexes: number[]) => void` | |
| `textArea` | `boolean` | Figma Text Area. Default: shown after a low score only |
| `textLabel` | `string` | Default «ملاحظاتك» |
| `textPlaceholder` | `string` | Default «اكتب هنا…» |
| `text` | `string` | |
| `rateLabel` | `string` | Primary before a pick. Default «قيّم الخدمة» |
| `nextLabel` | `string` | Default «التالي» |
| `shareLabel` | `string` | After Very satisfied. Default «شارك تقييمك» |
| `onSubmit` | `() => void` | |
| `later` | `boolean` | Ghost button. Default true |
| `laterLabel` | `string` | Default «ذكرني لاحقًا» |
| `onLater` | `() => void` | |

## Use

- Trigger after a stable outcome (Moment CSAT in the KPI framework), with sampling and a cooldown; never during anxiety peaks.
- Keep reasons specific to the service and short (5 to 7). End with «أسباب أخرى».
- Count a submission as a meaningful action only when a level is picked.

## Don't

- Do not block the user: «ذكرني لاحقًا» must always close the sheet.
- Do not show NPS and CSAT for the same moment more than once per journey.

## You provide

The service name and icon, the questions, the reasons and the handlers. Colour, type, radius and spacing come from the tokens.
