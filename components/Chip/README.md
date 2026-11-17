# Chip

A short status or category label: Default, Pending, Success, Info, Error, Gold or White, soft or solid.

**Figma source:** 🍟 Chips › Chips (128 variants: State × Size × Icon × Solid × Background). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**15 November 2026, evening:** side padding follows `_Chips Setup` as published: 8 / 10 / 12 / 14 (`Glob Whitespace`), 6 / 8 / 10 / 12 on the icon side (`Icon-Side Whitespace`); was 12 / 14 / 14 / 16 and 10 / 12 / 12 / 14. Heights 18 / 20 / 24 / 28, text 10 / 12 / 12 / 14, gaps and icons unchanged (tokens 3.9).

## Props

| Prop | Type | Notes |
|---|---|---|
| `state` | `'default' \| 'pending' \| 'success' \| 'info' \| 'error' \| 'gold' \| 'white'` |  |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lr'` | 18 / 20 / 24 / 28px; text 10 / 12 / 12 / 14; side padding 8 / 10 / 12 / 14, 6 / 8 / 10 / 12 on the icon side (15 Nov 2026); gap 4 / 4 / 4 / 6; icon 12 / 14 / 14 / 16 (Chips `_Chips Setup`, 9 November 2026). Cards use `xs` |
| `iconName` | `string` | Any icon name |
| `icon` | `boolean` | Show the status icon |
| `solid` | `boolean` | Solid fill for emphasis |
| `background` | `boolean \| 'bare'` | false = outline; `'bare'` = Figma Background Off (no fill, no padding) |
| `children` | `React.ReactNode` |  |

## Use

- One or two words. Pair status colour with an icon or word, never colour alone.
- Gold marks what Nusuk recommends; use it sparingly.

## Don't

- Do not use chips as buttons.
- Do not invent new colours; the seven states cover every case.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
