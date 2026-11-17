# BotNote  ·  *Proposed*

Nusuk Bot message (insight / pill) with gradient text.

**Status:** Proposed as a new DL component.  
**Figma source:** 💬 Chat UI › Nusuk Bot Messages — Default (Makkah insight) `80559:28807` · Variant3 (Madinah insight) `80559:28810` · Variant2 (Makkah pill) `80559:28813` · Variant4 (Madinah pill) `80559:28816`.  
**Code today:** `NusukChat.BotNote` in nk-chat.js (built with: Light/Body/Two gradient text (black → text-link | alerts-text-success → #666) · Regular/Notes/One · pill tint shade-5 gold / #E4FBEA green).

## Props

| Prop | Notes |
|---|---|
| `location` |  |
| `variant` | "insight"\|"pill" |
| `text` |  |
| `motion` |  |

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
