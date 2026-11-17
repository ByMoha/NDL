# Nusuk Design Language · getting started

This zip is the whole Nusuk DL in one file: the rules (`SKILL.md`, `DESIGN.md`), every reference (tokens, component cards, template contracts, patterns, the Nusuk AI chat, the iOS and Android token files, change log, migrations), the coded components and the logos. It links to the live design system and the DL guide. The full DL tree (one folder per component with its preview page, the coded package and the illustration references) is in the GitHub repo [ByMoha/NusukDL](https://github.com/ByMoha/NusukDL) for the team, and in the DL guide › Downloads (Google Drive or GitHub).

## For the whole organization: the nusuk-dl plugin

The GitHub repo ByMoha/NusukDL is also a Claude plugin marketplace. An owner adds it once: Organization settings › Plugins & skills (https://claude.ai/admin-settings/skills?tab=inventory) › **Add** › **Sync from GitHub** › `ByMoha/NusukDL`, with **Sync automatically** on, then sets the `nusuk-dl` plugin to *Installed by default* or *Required*. Members get this skill in chat, in Cowork and in Claude Code signed in with the same account, and every DL release reaches them when it is pushed: no one uploads a zip. If the skill was also uploaded by hand, remove that copy so it does not load twice.

Claude Code without a claude.ai account: `/plugin marketplace add ByMoha/NusukDL`, then `/plugin install nusuk-dl@nusuk-dl` (with your own GitHub access).

## Install in Claude (web or desktop)

1. **Turn on files.** Settings › Capabilities: turn on *Code execution and file creation* (in the newer layout, *Create and edit files*). Direct link: https://claude.ai/settings/capabilities. On a Team or Enterprise plan an owner turns this on in Organization settings › Plugins & skills › Policy.
2. **Upload the zip.** Customize › Skills (https://claude.ai/customize/skills) › **+** › **Create skill** › **Upload a skill**. Choose `nusuk-design-language-with-artworks.zip` (the full skill, with the 18 illustration reference images, about 22 MB) or `nusuk-design-language.zip` (the same without the images, under 1 MB). Upload it as it is: don't unzip it or rename the folder. Each zip holds fewer than 200 files, the most claude.ai accepts.
3. **Turn it on.** The skill appears in your list; switch it on.
4. **Share it (Team or Enterprise).** In Customize › Skills, open the ⋯ menu next to the skill › **Share**, or open it › **Publish to org**. An owner may need to allow sharing in the Policy tab first.

## Use it in Claude Code

Skills turned on in your Claude account load in Claude Code when you sign in with the same account. Run `/skills` to see it under *claude.ai sync*. They don't sync when you sign in with an API key.

## Use it

Claude opens the skill by itself whenever a task is about Nusuk. You can also name it. Try:

- "Using the Nusuk DL, design the booking details screen for a Rawdah permit, confirmed state."
- "Review this screen against the Nusuk DL and list every deviation, with the token or component that should replace it."
- "Which Nusuk DL template contract fits a page where a pilgrim picks a day and an exact time?"
- "Give me the iOS constants for the Nusuk MD button, with its padding and icon size."
- "Build a prototype of the Nusuk AI chat answer for picking a hotel, using the DL components."

What it does with that: it reads `SKILL.md` first, then only the module or reference the task needs (see the table in `SKILL.md`), takes values from the tokens, never from memory, and says when something is Proposed or not in Figma yet.

## Keep it current

With the plugin there is nothing to do: each release updates it. Every DL release also rebuilds this zip. Download it again from the DL guide (Design system tab › **Download everything**) and upload it over the old one: Customize › Skills › the skill's ⋯ menu › replace, or delete the old one and upload the new one. The version and date are on line 3 of `DESIGN.md`.

## Links

- Design system: https://claude.ai/artifact/6BJrx3hWU6GVwBYby9xGAr
- DL guide: https://claude.ai/artifact/JiezHP45Sx6J8cqXp3iYpw
- Anthropic help: https://support.claude.com/en/articles/12512180-use-skills-in-claude
