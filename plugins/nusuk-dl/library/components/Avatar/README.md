# Avatar

A person or account: initials, icon, picture or emoji, five sizes.

**Figma source:** 👩🏻‍💻 Avatar › Avatar (Kind × Size × State). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**19 November 2026 (the DL Advisor's comments on the design system page):** Kind × Size × State as Figma has it: initials, icon (`kind: 'icon'`, `iconName`), picture (`src`) and emojis (`emoji`). An avatar without a picture can take a Quran colour (`color`: mint, sky, sand, rose, peach, orchid, citrine, fog, lavender). Previews use real photos wherever Figma has one.

## Props

| Prop | Type | Notes |
|---|---|---|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | 24 / 42 / 56 / 72 / 100, as Figma (corrected 8 November 2026; before, code used 24–72) |
| `px` | `number` | Resized instance, e.g. 38 in toolbars and cards |
| `initials` | `string` | One or two letters, or a counter (`+3`). Fits by itself: see Initials below |
| `icon` | `boolean` |  |
| `src` | `string` |  |
| `state` | `'positive' \| 'negative'` | Negative (default) = white fill; Positive = `surface-02-ivory`. Shadow/SM |
| `ink` | `boolean` | Ink fill, white icon (the Icon avatar in Group Users) |
| `ring` | `'ink' \| 'white'` | 1.36px ring, used for the +N avatar |
| `name` | `string` |  |
| `kind` | `'initials' \| 'icon' \| 'picture' \| 'emojis'` | Figma Kind (19 November 2026). `'icon'` draws `iconName`; a picture comes from `src` and an emoji from `emoji`, whatever `kind` says |
| `iconName` | `string` | `kind: 'icon'` or `icon`: the DL icon, default `user-03` |
| `emoji` | `string` | An emoji, or the URL of a rendered emoji image |
| `color` | `string` | A Quran colour (`mint`, `sky`, `sand`, `rose`, `peach`, `orchid`, `citrine`, `fog`, `lavender`) or any CSS colour, for avatars without a picture |

## Use

- Initials follow the name's script.

## Initials (14 November 2026)

UX's answer to the iOS review: initials scale down to fit and keep 4–8 px of space at the sides.

| Avatar | Style | Space a side | Shrinks when |
|---|---|---|---|
| XS 24 | `notes-2-regular` 12 | 4 | the text is wider than 16 (three characters, such as `+12`, draw at 9) |
| Resized under 40 (38 in toolbars and cards) | `notes-1-regular` 14 | 4 | wider than 30 |
| SM 42 | `headline-2-regular` 20 | 4 | wider than 34 (`+99` draws at 18) |
| MD 56 · LG 72 · XL 100 | `headline-2-regular` 20 | 8 | wider than 40 / 56 / 84 |

The font shrinks; the text is never clipped and never goes below 9 px. Code estimates 0.62 em per character; iOS and Android measure the string and do the same. The avatar's name (`name`) is what a screen reader reads, never the initials alone.

## Don't

- Do not use avatars as decoration.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
