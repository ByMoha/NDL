# Glass

The glass surface a component draws inside itself: one element with a Glass BG recipe already chosen. Use it when you build a floating control, a field on imagery or a tile that must look like the DL's own; use `GlassBG` when you need the full Figma variant (Mode × Dark × Glass) with its layer switches.

**Figma source:** [⚙️ Foundation › 🎨 Colors › Glass BG](https://www.figma.com/design/avzbRTP9CgpbbO8NgU5Ymo?node-id=65346-1296), as component instances use it (each recipe is a set of layers the instance keeps). The recipes and their layers are documented on the GlassBG card.

**18 November 2026:** card written (the plugin health check found Glass had a preview but no card).

## Recipes

| `kind` | What it is | Used by |
|---|---|---|
| `control` | Shadows + Glass Effect with the white sheen; no fill | Icon buttons on imagery, the toolbar logo, Wallet, date and booking pills |
| `field` (default) | Shadows + Default Fill + Glass Effect | Search fields, Top Tabs, bottom-bar fields, the current tab pill |
| `bar` | Shadows + Glass Effect | The BottomNav bar |
| `flat` | Default Fill only, Glass Off | Secondary pages and tabs |
| `card` | Solid white + `Glass/Full` | Tiles on white (CategoryTile); it has no dark state |

## Props

| Prop | Type | Notes |
|---|---|---|
| `kind` | `'control' \| 'field' \| 'bar' \| 'flat' \| 'card'` | Default `field` |
| `dark` | `boolean` | Dark=On: the Darkmode toolbar and dark themes |
| `glass` | `boolean` | Default true (iOS). `false` is Glass=Off, Android's blur; `data-glass="off"` on an ancestor does the same |
| `as` | `string` | Element to render, default `div` |
| `attrs` | `object` | Extra attributes (role, aria-label, dir) |
| `className, style` | `string, object` | Size, radius and layout of the box; never its colour or blur |
| `children` | `node` | The content: an icon, a label, a field |

## Use

- Pick the recipe by what the element is, not by how much glass you want.
- Pass `glass={false}` (or set `data-glass="off"` once on the screen) for Android.
- Give a group or control its accessible name with `attrs`.

## Don't

- Do not add a background colour, border or extra blur: the recipe carries all of them.
- Do not use glass for running text or long content; it is for controls and tiles over content.
- Do not use `card` in dark themes expecting it to darken; it stays white by design.

## You provide

The size, radius and content. Fills, blur, rims and shadows come from the tokens (`glass-fill`, `glass-rim`, `shadow-os`, `glass-android`).
