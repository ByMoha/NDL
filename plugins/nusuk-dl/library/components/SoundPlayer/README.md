# SoundPlayer

Audio player for Quran recitation, lessons and Athkar.

**Figma source:** 🎥 Media › Sound Player (Full, Mini, Speed), Player Icons, Video, Image Gallery, Single Item. **14 November 2026, night:** the Sound Player set is gone from 🎥 Media; the player is now a frame inside two new screen components, `Sound Player Screen / Quran` and `/ Others` (edits not published). This card stays as the last published Sound Player until those screens are published, then it is rebuilt to them (known issue F41). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `title` | `string` |  |
| `subtitle` | `string` | Reciter |
| `progress` | `number` | 0–1 |
| `playing` | `boolean` |  |
| `duration` | `string` |  |
| `elapsed` | `string` |  |
| `label` | `string` | Accessible name of the player |

## Use

- Remember position; resume where the person stopped.

## Don't

- No autoplay of the next item without consent.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
