# TabBar  ·  *Proposed*

AI Tab Bar: 8 statuses (default, limit, recording, recorded, text, responding, actions, typing); light and dark master.

**Status:** Proposed as a variant / prop of DL **TabBar**.  
**Figma source:** 💬 Chat UI › AI Tab Bar — _AI Tab Bar Master › Darkmode=Off `80392:4168` · _AI Tab Bar Master › Darkmode=On `80821:21830` · default `80392:4482` · limit `80392:4484` · recording `80392:4486` · recorded `80392:4488` · text `80392:4490` · responding `80392:4492` · actions `80821:18082` · typing `80392:4494`.  
**Code today:** `NusukChat.TabBar` in nk-chat.js (built with: glass-full · radius-full · DL Icon mic / send / pause / delete-03).

## Props

| Prop | Notes |
|---|---|
| `status` | (default |
| `limit` |  |
| `recording` |  |
| `recorded` |  |
| `text` |  |
| `responding` |  |
| `actions` |  |
| `typing` | ) |
| `value` |  |
| `placeholder` |  |
| `limitText` |  |
| `message` | + actions: string[] + onAction(text, i) (status actions) |
| `onSend` | ({type,text\|duration}) |
| `onStop` |  |
| `respondOnSend` |  |

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
