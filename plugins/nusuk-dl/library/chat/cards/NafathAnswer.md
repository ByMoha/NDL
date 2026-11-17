# NafathAnswer  ·  *Proposed*

Nafath sign-in answer pill with the Nafath logo.

**Status:** Proposed as a new DL component.  
**Figma source:** 💬 Chat UI › Answers / Property 1=Nafath — Instance on canvas `80473:2474` · Component `80473:2443`.  
**Code today:** `NusukChat.NafathAnswer` in nk-chat.js (built with: buttons/surface/reject (ivory) pill 48 · Regular/Body/Two · Nafath logo (exact SVG)).

## Props

| Prop | Notes |
|---|---|
| `label` |  |
| `onClick` |  |

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
