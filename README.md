# Nusuk Design Language (DL)

The full DL tree, release by release. **Figma is the source of truth;** this repository mirrors the DL library for concepts, decks, prototypes and code. The DL guide and the live design system link here.

## Download

Every release is a [GitHub release](https://github.com/ByMoha/NusukDL/releases) with three packages. The latest ones are always at these addresses:

| Package | For | Latest |
|---|---|---|
| `nusuk-dl-developers.zip` | Web, iOS and Android: tokens (JSON, CSS, Swift, Kotlin), the component bundle and types, cards with previews, contracts, patterns, migrations, the chat lane, the developer documents, the logos, the Claude skill | [download](https://github.com/ByMoha/NusukDL/releases/latest/download/nusuk-dl-developers.zip) |
| `nusuk-dl-designers.zip` | Designers, writers and product: DESIGN.md and every DL document, change sheets, cards with live previews, patterns and contracts, the logos, the Claude skill | [download](https://github.com/ByMoha/NusukDL/releases/latest/download/nusuk-dl-designers.zip) |
| `nusuk-dl-all.zip` | Everything above | [download](https://github.com/ByMoha/NusukDL/releases/latest/download/nusuk-dl-all.zip) |
| `nusuk-design-language.zip` | The Claude skill alone (fewer than 200 files, the most claude.ai accepts) | [download](https://github.com/ByMoha/NusukDL/releases/latest/download/nusuk-design-language.zip) |
| `nusuk-design-language-with-artworks.zip` | The skill with the 18 illustration reference paintings (22 MB) | [download](https://github.com/ByMoha/NusukDL/releases/latest/download/nusuk-design-language-with-artworks.zip) |

The same packages are on Google Drive, linked from the DL guide › Downloads.

## In this repository

The tree below is the "everything" package unpacked, plus `skill/` (the Claude skill, unpacked to read on GitHub) and `artworks/` (the 18 illustration reference paintings and their manifest). Open `index.html` locally to browse every component preview.

---

# Nusuk Design Language · coded package (2026-11-17)

Figma is the source of truth. This package mirrors the DL library for concepts, decks, prototypes and code. It is rebuilt with every DL release; the guide's download index (`download-index.json`) lists every file with its size and SHA-256.

## What's inside

| Path | What it is |
|---|---|
| `index.html` | Start here: every component preview and card, the chat lane, the template contracts, documents and migrations |
| `DESIGN.md` | DESIGN.md 3.3: the whole design language in one file |
| `tokens.json`, `tokens.css` | Tokens 3.10: six themes, type, space, size, radius, shadows, opacity, borders and blur; the CSS has one block per theme (`data-theme`) and one class per type style |
| `components/bundle.js`, `bundle.css`, `index.d.ts` | The coded components as `window.NusukDL.*` (React 18, no build step) and their TypeScript props |
| `components/<Name>/` | 82 component cards (props, anatomy, Figma source, rules, known issues, native notes) and 83 previews that open on their own |
| `native/` | `NusukTokens.swift`, `NusukTokens.kt` and `tokens-native.json` (every token with its web, Swift and Kotlin name) |
| `chat/` | The Nusuk AI chat as a proposed lane: code, `manifest.proposed.json`, proposed tokens and icons, 37 cards and the chat team's proposal migrations |
| `templates/`, `patterns/` | 20 template contracts, their index, the Rawdah landing templates and the pattern index |
| `docs/` | Overview, governance, library, inventory, brand, writing, DX practice, behaviour, KPIs, devices and accessibility, known issues, using with Claude, release notes, change log, templates and patterns, template contracts, iOS and Android handoff |
| `assets/` | Asset notes (Brand, Illustration, Imagery, Logos) and the three Nusuk logo files (SVG) |
| `migrations/` | Machine-readable changes, 2026-11-05 to 2026-11-17 (27 files) |
| `CHANGES-2026-11-08.md`, `CHANGES-2026-11-09.md`, `CHANGES-2026-11-10.md`, `CHANGES-2026-11-11.md` | The change sheets of 2026-11-08 to 2026-11-11, for iOS and Android |
| `nusuk-design-language.zip` | The DL skill for Claude: upload it as it is in Customize › Skills |
| `vendor/` | React 18.3 production builds (MIT) |

## This release

Read `docs/12-release-notes.md` (in short) and `docs/13-change-log.md` (every change, with its Figma file and what iOS and Android must do). Open issues and their workarounds: `docs/10-known-issues.md`.
