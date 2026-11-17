# ReasonSelection

Pick one reason from a short list; the last one, «أسباب أخرى», opens a text box.

**Figma source:** [‼️ Status Handlers › Reason Selection](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=68392-32655) (Others On, Off) on [`_Reason Selection Master`](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=68392-32618). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Figma

Dropdown item rows (Text Only, Radio) drawn as white cards: radius 18, padding 18, a 1 px Pearl line, Shadow/XS as drawn, 8 apart; the chosen row shows the 24 gold check. Others On adds the Text Area «اكتب هنا» 12 below. Figma's four reasons are a booking cancellation's: «ظرف صحي أو طارئ», «خطأ في اختيار التاريخ أو الوقت», «تغيير في خطة الزيارة», «أسباب أخرى».

## Props

| Prop | Type | Notes |
|---|---|---|
| `reasons` | `string[]` | Default Figma's four |
| `value` | `number` | The index picked |
| `onChange` | `(index: number) => void` | |
| `otherIndex` | `number` | The reason that opens the text box; default the last |
| `label` | `string` | Name of the group; default «السبب» |
| `placeholder` | `string` | Default «اكتب هنا» |
| `textLabel` | `string` | Name of the text box; default the reason's text |
| `text` | `string` | |
| `maxLength` | `number` | |

## Use

- Put it in a BottomSheet before a cancellation or a refund, with the action below it.
- Keep the list short (three to five) and in the person's words.

## Don't

- Do not make a reason required when the action does not need it.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
