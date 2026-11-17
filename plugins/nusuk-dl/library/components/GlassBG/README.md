# GlassBG

The glass every floating control sits on: Figma's Glass BG with its 12 variants, plus the layer switches that components use. Toolbar, BottomNav, SearchBar, IconBlock, the tabs and the tiles draw their glass with the same engine (`.nk-glass`), so this card shows what they are made of.

**Figma source:** [⚙️ Foundation › 🎨 Colors › Glass BG](https://www.figma.com/design/avzbRTP9CgpbbO8NgU5Ymo?node-id=65346-1296) (Mode × Dark × Glass) on `_Glass BG Master` ([65640:511](https://www.figma.com/design/avzbRTP9CgpbbO8NgU5Ymo?node-id=65640-511)).

**Read 17 November 2026:** every layer, fill and effect of the 12 variants, and every Glass BG instance in 🧭 Navigation, 🎹 Tabs, 🃏 Cards, 🕹️ Buttons, 🏠 Landing Experience V2 and 🔎 Menu & Search, with the layers each one hides.

## Layers (bottom → top)

| Layer | Figma | Web |
|---|---|---|
| Shadows | `Shadows / Type=OS`: drop −2 0 2, 2 0 2, 0 0 1 spread 0.5, #1A1C1F 5% | `shadow-os` |
| Default Fill | radial from the top centre, radii 113.4% × 50%: white 10% → 50% (Dark: Ink 30% → 80% at 70%) | `glass-fill`, `glass-fill-dark` (raised at the top: refraction evens Figma's fill out) |
| Active Fill | Highlighted and Active only: gold under a layer blur | child layer `.nk-gl-af` |
| Glass Effect | GLASS (frost 6 = `Liquid Glass/Frost - Regular`, refraction 0.7, depth 30, dispersion 0.2, light 0.25) + linear-burn and linear-dodge inner shadows | `blur(3px)` + `glass-rim` / `glass-rim-dark` |
| Glass=Off | Glass Effect hidden; the master takes `Glass/Andriod Blur` (background blur 10 + inner 0 5 10 10 Ink 5%) | `glass-fill-off*`, `blur(5px)`, `glass-android` |

Figma blur radii are twice the CSS value: frost 6 → `blur(3px)`, background blur 10 → `blur(5px)`, layer blur 70 → `blur(35px)`.

## Variants

| Mode | Default Fill | Active Fill |
|---|---|---|
| `default` | radial white (Dark: Ink) | hidden |
| `highlighted` | radial white (Dark: Ink) | Glass On: radial clear → Longing with a progressive blur (Dark: Longing 70% → clear, blur 20, spills past the edge). Glass Off: white 40% (Dark: Ink 40%) + radial white → Longing (Dark: Ink → #67460E) |
| `active` | `Surface/Longing` (Dark + Glass Off: `Surface/Illumination`) | as Highlighted on Glass On; hidden on Glass Off |

## Recipes components use

Figma instances hide layers. The DL names each combination (`kind`):

| kind | Layers kept | Used by |
|---|---|---|
| `control` | Shadows + Glass Effect, its fill overridden with a sheen (white 50% at the bottom → clear); Default Fill hidden | IconBlock, the toolbar logo, Wallet, DatePill, BookingPill, FeaturedHeader buttons |
| `field` (default) | Shadows + Default Fill + Glass Effect | SearchBar, Top Tabs, bottom-bar fields (Primary/Small, Marketplace, Filters, Inner Pages), the standalone tab, the current tab pill |
| `bar` | Shadows + Glass Effect | BottomNav Primary bar |
| `flat` | Default Fill only, Glass Off: Ivory (Dark: Ink radial) | Secondary Pages / Tabs |
| `card` | solid white + `Glass/Full` | CategoryTile and every tile on white (same as `.nk-gsurf`) |

Dark=On (`dark`) is the Darkmode toolbar and dark themes. Glass=Off (`glass={false}`, or `data-glass="off"` on any ancestor) is Android.

## Props

| Prop | Type | Notes |
|---|---|---|
| `mode` | `'default' \| 'highlighted' \| 'active'` | Figma Mode |
| `dark` | `boolean` | Figma Dark=On |
| `glass` | `boolean` | Figma Glass. Default `true` (iOS); `false` = Android |
| `kind` | `'control' \| 'field' \| 'bar' \| 'flat' \| 'card'` | A recipe from the table above. Default `field` |
| `shadows`, `fill`, `effect` | `boolean` | `false` hides that layer, as a Figma instance does |
| `sheen` | `boolean` | Puts the controls' sheen on the Glass Effect |
| `activeFill` | `boolean` | Overrides the mode's Active Fill |
| `size`, `width`, `height`, `radius` | `number` | Size of the surface; radius defaults to full |
| `attrs` | `object` | Extra attributes for the element (`type`, `onClick`, `aria-*`) |
| `as`, `role`, `ariaLabel`, `className`, `style`, `children` | | |

## Platforms

- **iOS:** Glass=On is the system Liquid Glass material (`.glassEffect()`, iOS 26). Do not rebuild it from these numbers.
- **Android:** Glass=Off, and every value is exact: background blur 10 (Figma units; 5px in CSS) behind the Default Fill, then the 5% Ink inner shadow. Android's blur radius is not Figma's radius, so match the blur on a device.
- **Web:** frost and rims are approximations. Refraction, dispersion and the specular light have no CSS equivalent; the fill is raised at the top to match Figma's render.

## Use

- Glass sits over content that moves (scrolling lists, photos). On a flat, still background use a solid surface.
- Over photos and video, use the Darkmode controls (`dark`) for contrast.
- Respect Reduce Transparency: the engine turns every glass opaque under `prefers-reduced-transparency: reduce` and where `backdrop-filter` is missing.

## Don't

- Don't put text on `bar` or light `control` glass over a busy photo without the Darkmode variant; contrast is not guaranteed.
- Don't stack a glass inside a glass with its own blur; the current tab pill drops its blur for that reason.
