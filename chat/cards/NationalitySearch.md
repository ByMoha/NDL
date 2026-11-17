# NationalitySearch  ·  *Proposed*

Search with flag result list (TextField Search + DropdownItem flag).

**Status:** Proposed as a variant / prop of DL **TextField**.  
**Figma source:** 💬 Chat UI › Answers / Property 1=Nationality Search — Instance `80473:2515` · Component `80473:2457`.  
**Code today:** `NusukChat.NationalitySearch` in nk-chat.js (built with: ivory pill 48 · DL Icon global / search-01 · flag list).

## Props

| Prop | Notes |
|---|---|
| `placeholder` |  |
| `exclude` | [] |
| `onPick` | (code) |

## Use

- Inside Nusuk AI chat answers, in the bubble or question card it is shown in today.

## Don't

- Do not restyle: colour, type, radius and spacing come from DL tokens and the proposed `chat-*` tokens.
- Do not use outside chat until the DL review confirms the scope.

## Accessibility

- Arabic first, mirrored with logical properties; numbers isolated in RTL.
- Focus ring: border-thick ink with the proposed focus offset; targets ≥ 44 px (48 for primary actions).

## You provide

The content (labels, values, images from the CMS) and the container. Colour, type, radius and spacing come from the tokens and are not props.
