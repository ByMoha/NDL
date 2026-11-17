# Nusuk DL

The Nusuk Design Language for Claude and for developers. Release 2026-11-17 (DESIGN.md 3.6.0, tokens 3.11), plugin 2026.11.172140, built 2026-11-17T21:40+03:00.

Since 17 November 2026 (DL-42) the DL reaches people in two ways only:

- **The Nusuk plugin for Claude**, [`plugins/nusuk-dl/`](plugins/nusuk-dl/): eleven skills (the Nusuk Design Language, DX, UX, content writer, voice rules, visual system, feature handoff, accessibility audit, design critique, UX writing, humanizer) and the whole DL library in [`plugins/nusuk-dl/library/`](plugins/nusuk-dl/library/). This repository is its marketplace (`.claude-plugin/marketplace.json`).
- **The developer handoff**, [`downloads/nusuk-dl-developer-handoff.zip`](downloads/nusuk-dl-developer-handoff.zip): tokens (JSON, CSS, Swift, Kotlin), the component bundle and types, component cards with previews, template contracts and patterns, migrations, the chat lane, DESIGN.md and the developer documents.

`downloads/download-index.json` lists every download of the release with its size and SHA-256. The plugin as one file, `nusuk-dl.plugin`, is in the DL guide › Downloads (Google Drive, no sign-in).

## Install the plugin

- **Organization (Owners, once):** claude.ai › Organization settings › Plugins & skills › Add › Sync from GitHub › https://github.com/ByMoha/NusukDL, with Sync automatically on. Each push to `main` reaches members.
- **Yourself:** claude.ai › Customize › Plugins › Add › Add marketplace › https://github.com/ByMoha/NusukDL (needs access to this repository), or Add › Upload plugin with `nusuk-dl.plugin`.
- **Claude Code:** `/plugin marketplace add https://github.com/ByMoha/NusukDL`, then `/plugin install nusuk-dl@nusuk-dl`.

Every file here is rebuilt by the DL release; don't edit it by hand. Source of truth: the Figma library (32 files).
