# PrayerLiveActivity

The lock-screen live activity for prayer times.

**Figma source:** 🛎️ Notifications › LiveActivity, DynamicIsland (Compact, Minimal, Expanded) for Prayer time, Athkar and Quran; Prayer Time Animation. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `now` | `string` |  |
| `sub` | `string` |  |
| `prayer` | `string` |  |
| `times` | `[name, time][]` |  |
| `current` | `number` |  |

## Use

- Uses fixed Kiswah black in every theme, like the system surface.

## Don't

- No countdown pressure; informative only.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
