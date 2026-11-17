# Bot  ·  *Proposed*

Nusuk Bot avatar, Makkah / Madinah, live eyes. Figma section is “Beta – Do Not Use” (F1).

**Status:** Proposed as a new DL component.  
**Figma source:** 💬 Chat UI › Nusuk Bot · _Eyes — Location=Makkah `80559:28820` · Location=Madina `80559:28823` · _Eyes (7 frames) `80559:28826`.  
**Code today:** `NusukChat.Bot` in nk-chat.js (built with: Gold body = surface-longing → surface-shade-4 (gold) · green body #288A42 → #E0FAD1 (not DL tokens) · glow + 4px layer blur · ⚠ section "Beta – Do Not Use").

## Props

| Prop | Notes |
|---|---|
| `location` | "makkah"\|"madinah" |
| `size` | (24) |
| `motion` | "live" (default: follows pointer, idle glances + blinks) \| "prototype" \| "sequence" \| "static" |
| `frame` | (static) |
| `mirror` |  |
| `label` |  |

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
