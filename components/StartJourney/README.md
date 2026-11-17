# StartJourney

The entry widget that starts a Hajj, Umrah or Rawdah journey.

**Figma source:** 🎫 Widgets › Start Journey (SM, LR, XS), Start Journey Animated, Manasek, Try Nusuk AI. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Props

| Prop | Type | Notes |
|---|---|---|
| `size` | `'sm' \| 'xs' \| 'lr'` | `sm` (default): Start Journey Animated, one card; `xs`: three tiles; `lr`: a section title over three cards |
| `journey` | `'umrah' \| 'hajj' \| 'rawdah'` | SM: the journey the card names, default `umrah` |
| `items` | `{ k, icon, label? }[]` | Default Umrah (`umrah`), Hajj (`hajj-service-solid`), the Rawdah (`rawdah`); labels from the strings: عمرة، حج، الروضة الشريفة |
| `title` | `string` | SM: replaces «ابدأ رحلة»; LR: the section title, default «ابدأ رحلة جديدة» |
| `onSelect` | `(k) => void` | Called with the journey's key |
| `onMore`, `moreLabel` | | LR: the section's Secondary XS icon button |
| `iconName` | `string` | @deprecated |
| `subtitle` | `string` | @deprecated before 14 Nov 2026 (the Ink card) |

## Figma (read 14 November 2026)

- **SM** (Start Journey Animated, Status Umrah, Haj, Rawdah): 80 tall, padding 18, gap 12, radius 18, a `surface-01-white` to `surface-white-shine` gradient and `shadow-xs`. «ابدأ رحلة» and the journey word with its 24 icon in `headline-2-light`; a Secondary SM icon-only button with `arrow-left-02` at the end. Figma swaps the word between the journeys; code shows the one you pass.
- **XS**: three 80 × 80 tiles, a 24 icon centred in a 60 square (radius 12, no fill) over a `body-2-light` label.
- **LR**: Headers › 02 Section Title (`body-1-regular`, a Secondary XS icon button) over three cards 92 tall: padding 18, gap 12, radius 18, the same gradient and shadow; icon 24 (Umrah in `icons-longing`, the others `icons-black`), label `body-1-light`.
- Until 14 November code drew an Ink card with a gold icon tile; Figma has not had that card since the Widgets update.
- Figma: the button inside SM is still the pre-4-November CTA (`Light=Off`, 68 × 38); swap it to CTA / Secondary / SM / Icon Only (questions list).

## Use

- One journey entry per screen.

## Don't

- Do not use urgency to push the start.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
