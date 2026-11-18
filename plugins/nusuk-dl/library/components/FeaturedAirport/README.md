# FeaturedAirport

A quick-pick airport tile for the holy cities.

**Figma source:** 🏖️ Travel › featured airport (Selected Off / On). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**18 November 2026:** the default city is Arabic («مكة المكرمة»), so an unconfigured instance reads right to left.

**17 November 2026:** 127 wide, padding 18, gap 12, radius 18, white → White Shine, Shadow/XS; a 38 gold Haramain mark, the city (Body 1) and code (Notes 2) with airplane-landing-01 (16). Selected: Shade 6 with a 1.5 Longing line.

## Props

| Prop | Type | Notes |
|---|---|---|
| `city, code` | `string` |  |
| `selected` | `boolean` |  |
| `iconName` | `string` | Default hajj-service-solid |
| `onClick` | `fn` |  |

## Use

- Use for Makkah and Madinah shortcuts.

## Don't

- Do not show more than four in a row.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
