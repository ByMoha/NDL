# AppNotification

An in-app notification row with time, title, body and type icon.

**Figma source:** 🛎️ Notifications › App Notification, Notification Slots (also Live Activities and Dynamic Island sets for prayer time, Athkar and Quran). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `time` | `string` |  |
| `title` | `string` |  |
| `children` | `text` |  |
| `active` | `boolean` | Unread |
| `iconName` | `string` |  |

## Use

- Timely and contextual: after prayer, before the visit.

## Don't

- No guilt, FOMO or streak reminders.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
