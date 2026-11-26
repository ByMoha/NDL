# Closure  ·  *Proposed*

Closing message: the answer, a “was this helpful?” card with لا / نعم, then follow-ups outside the bubble. Figma 26 Nov 2026 (Style=Clouser).

**Status:** Proposed as a variant / prop of DL **ChatMessage**.  
**Figma source:** 💬 Chat UI › AI Chat Messages › Style=Clouser — User=Nusuk, Style=Clouser `80835:63106` · _Chat Container › Clouser `80453:2664`.  
**Code today:** `NusukChat.Closure` in nk-chat.js (built with: _Chat Container Master Type=Nusuk/Mixed with the Clouser block: Surface/02 Ivory, Radius/MD, Space/NR top/bottom and gap; Regular/Body/Two in Text/Content, centred; DL CTA Primary SM Icon=Left thumbs-down / thumbs-up, gap Space/XS; outside the bubble Regular/Body/One lead and Primary SM follow-ups, wrap 8 × 8; Content No BG padding-top and gap Space/NR).

## Props

| Prop | Notes |
|---|---|
| `type` |  |
| `typeIcon` | optional  |
| `title` |  |
| `desc` | optional  |
| `feedbackLabel` | optional  |
| `onFeedback` | (helpful: boolean) |
| `thanks` | optional  |
| `lead` | optional (false hides it) |
| `items` | string[] |
| `onPick` | (text, i) |
| `kind` | optional  |

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
