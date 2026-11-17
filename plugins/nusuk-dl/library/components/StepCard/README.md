# StepCard

A journey step card with status, tag and the next action.

**Figma source:** 🏖️ Travel › Step Card (17 statuses: Current, Completed, Disabled, Action, Track, Tag, Requirement, In progress, Exception request, Cancellation, Failure…). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `status` | `'current' \| 'completed' \| 'disabled' \| 'next'` |  |
| `number` | `number` |  |
| `title` | `string` |  |
| `description` | `string` |  |
| `tag` | `string` |  |
| `action` | `string` |  |

## Use

- Only the current step carries an action.

## Don't

- Do not show a disabled step without saying what unlocks it.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
