# ChatMessage

A Nusuk AI or user message bubble, with loading and error states.

**Figma source:** 💬 Chat UI › AI Chat Messages (User × Style: Default, Short, Long, Loading, Voice, Error), AI Tab Bar, Chat Element, Try Nusuk AI. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `user` | `'ai' \| 'user'` |  |
| `style` | `'default' \| 'loading' \| 'error'` |  |
| `children` | `text` |  |

## Use

- AI explains why it suggests something; the person can always override.

## Don't

- AI quotes and cites; it never issues a fatwa or adjudicates a ruling.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
