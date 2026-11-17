# Nusuk Design Language · getting started

The Nusuk DL reaches Claude as one plugin, `nusuk-dl` (DL-42, 17 November 2026). It carries eleven skills and the whole DL library:

- **Nusuk skills:** `nusuk-design-language` (this skill: `SKILL.md`, the full `DESIGN.md`, tokens, every component card, the 20 template contracts, the patterns, the Nusuk AI chat, the native token files and the coded components), `nusuk-dx`, `nusuk-ux`, `nusuk-content-writer`, `nusuk-voice-rules`, `nusuk-visual-system` (with its 18 reference paintings) and `nusuk-feature-handoff`.
- **General method skills (MIT, credited in each folder):** `accessibility-audit`, `design-critique`, `ux-writing` and `humanizer`. Where they and a Nusuk rule disagree, the Nusuk rule wins.
- **`library/`:** the full DL tree: one folder per component with its preview page, the coded package, patterns and templates, the chat lane, every migration, the iOS and Android files and the developer handoff.

The only other download is the **developer handoff** (`nusuk-dl-developer-handoff.zip`), for developers who don't use Claude. Both are in the DL guide › Downloads, on Google Drive (no sign-in needed) and on GitHub.

## For the whole organization (Owners, once)

The GitHub repository https://github.com/ByMoha/NusukDL is a Claude plugin marketplace. In claude.ai: Organization settings › Plugins & skills (https://claude.ai/admin-settings/skills?tab=inventory) › **Add** › **Sync from GitHub** › https://github.com/ByMoha/NusukDL, with **Sync automatically** on. Then set `nusuk-dl` to *Installed by default* or *Required*. Members get it in chat, Cowork and Claude Code signed in with the same account, and every DL release reaches them when it is pushed.

## For yourself

1. Download `nusuk-dl.plugin` from the DL guide › Downloads.
2. In claude.ai or the desktop app: Customize › Plugins (https://claude.ai/customize/plugins) › **Add** › **Upload plugin**, and choose the file as it is. Don't unzip it.
3. Remove any Nusuk skill you uploaded by hand earlier, so it doesn't load twice.

With access to the GitHub repository you can instead use **Add** › **Add marketplace** with https://github.com/ByMoha/NusukDL; then it updates itself.

## Claude Code

A plugin on your claude.ai account loads in Claude Code when you sign in with the same account (run `/reload-plugins` or start a new session). Without that account: `/plugin marketplace add https://github.com/ByMoha/NusukDL`, then `/plugin install nusuk-dl@nusuk-dl` (with your own GitHub access).

## Use it

Claude opens the right skill by itself whenever a task is about Nusuk. You can also pick one: type `/` and `nusuk-dl`. Try:

- "Using the Nusuk DL, design the booking details screen for a Rawdah permit, confirmed state."
- "Review this screen against the Nusuk DL and list every deviation, with the token or component that should replace it."
- "Which Nusuk DL template contract fits a page where a pilgrim picks a day and an exact time?"
- "Give me the iOS constants for the Nusuk MD button, with its padding and icon size."
- "Build a prototype of the Nusuk AI chat answer for picking a hotel, using the DL components."

What it does with that: it reads `SKILL.md` first, then only the module or reference the task needs (see the table in `SKILL.md`), takes values from the tokens, never from memory, and says when something is Proposed or not in Figma yet.

## Keep it current

Synced from GitHub (by an Owner or as your own marketplace), there is nothing to do: each release updates it. An uploaded plugin stays as it was: download the new `nusuk-dl.plugin` and upload it again. The version and date are on line 3 of `DESIGN.md`; the plugin's version is the release's build time.

## Links

- Design system: https://claude.ai/artifact/6BJrx3hWU6GVwBYby9xGAr
- DL guide: https://claude.ai/artifact/JiezHP45Sx6J8cqXp3iYpw
- Anthropic help: https://claude.com/docs/plugins/overview
