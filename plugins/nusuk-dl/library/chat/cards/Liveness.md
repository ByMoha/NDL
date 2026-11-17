# Liveness  ·  *Proposed*

Scan Photo + copy + DL Hint warning + CTA.

**Status:** Proposed as a new DL component.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=FaceScan — Variant `80607:20622` · Scan Photo/Status=00 `80607:20843` · Hint Warning `80607:20846`.  
**Code today:** `NusukChat.Liveness` in nk-chat.js (built with: Scan Photo · Body 1 · DL Hint Warning · DL Button Primary MD + identification).

## Props

| Prop | Notes |
|---|---|
| `status` | "idle"\|"scanning"\|"done" |
| `onDone` |  |

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
