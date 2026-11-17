# Governance and contribution

DL is the official, shared design library for Nusuk. One library, every team, the same Nusuk. You borrow from the library; you never change it.

## Who owns what

| Layer | Who | What they do |
|---|---|---|
| DL Manager | **Sara** | Owns and maintains the library, aligns with DGA and secures its approval, runs reviews and releases. Nobody else edits DL. |
| DL Advisor | **Mohamed Auf** | Advises on direction and standards, and reviews contributions. |
| Product teams | Every designer | Use DL as designed. Change content only. |
| DL champion | One named person per team | First reviewer, requester, and the link to the DL team. |

## The five rules

1. **DL first.** Search the library before you draw anything.
2. **Never detach.** Reset overrides, swap the variant, re-insert, or ask.
3. **Content only.** Change words, icons from the DL set and images. Not the styling.
4. **Never edit the library.** Only the DL Manager and Advisory Team change DL.
5. **Ask, don't improvise.** Need something new? Build it locally and submit it.

## What you may change: four zones

| Zone | Examples | Allowed? |
|---|---|---|
| Content | Labels, headlines, numbers, an icon from the DL set, an image in an image slot | Yes |
| Configuration | Variant menus, on/off switches, icon swaps the component offers | Yes |
| Composition | Arranging components, DL spacing, fill or hug width | Yes |
| Customisation | Colour, type, radius, shadow, stroke, inner padding, hiding or resizing inner layers | **No** |

Worked cases: changing a button label to Arabic is content (yes). Switching Size from MD to LR is configuration (yes). Turning the icon off with the component's switch is configuration (yes). Stretching a component to fill the width is composition (yes). Rounder corners for a campaign, detaching a card to add a line, shrinking a font so a title fits, or recolouring a card for a promotion are customisation (no).

## Daily path

1. **Enable** the library in your file (Assets → Libraries). You have view access; your file is yours.
2. **Find** it in the Assets panel. Read the component's description first.
3. **Insert** by dragging from Assets. Never copy and paste from another team's file.
4. **Configure** in the right-hand panel: variant, switches, icon swap.
5. **Edit content:** double-click text, swap icons from the DL set, fill image slots.
6. **Arrange** with auto layout and DL spacing. Width may stretch; inner layers may not.

When something looks wrong: undo, reset overrides, try another variant, delete and re-insert, then ask on the DL Teams channel. **Never detach to escape a problem.** When the library update banner appears, review the changes and accept them; report anything that breaks on the channel.

## When DL doesn't have what you need

A **gap** is a user need the library can't meet (a multi-step permit status component that doesn't exist yet). A **preference** is a different look for a need DL already meets (a rounder card for a campaign). Preferences aren't requests.

Walk the four honest options in order:

1. Does a DL component already do this through a variant or property? → **Configure it.**
2. Can you compose it from existing components and spacing? → **Compose it.**
3. Is there a DL pattern or template for it? → **Use the pattern.**
4. Is it a real user need, not a different look? If yes and it is already in the backlog → **add your use case**. If it is new → **start a contribution**. If no → it's a preference; use the existing component.

## Contributing a new component

| # | Who | Step |
|---|---|---|
| 1 | Your team | **Check the need.** A gap, not a preference. Search the backlog first. |
| 2 | Your team | **Build locally** in your own file, with DL tokens only, every state, labelled *Proposed*. |
| 3 | Your team | **Submit** with justification, intended use cases and requirements. |
| 4 | DL team | **Review:** need, uniqueness, tokens, accessibility, Arabic and English, naming. |
| 5 | DL team | **Outcome:** approved, changes requested, merged with an existing component, or declined with a reason. |
| 6 | Your team | **Iterate.** You make every fix and resubmit. Several rounds are normal. |
| 7 | DL team | **Add to DL** and announce it on the Teams channel. |
| 8 | Your team | **Swap in** the official one, then delete the local copy. |

The loop is yours. The DL team gives feedback but doesn't make the changes for you.

### Request template

```
Component name:
One-line description:
The need (what user or task problem it solves, and why existing components can't):
Evidence of reuse (screens or flows from more than one team):
Intended use cases:
Where it must not be used:
Requirements (states, content limits, behaviour, Arabic and English):
Accessibility notes:
Link to the local build:
Tokens used:
Requester / team / DL champion:
Needed by:
```

## Staying compliant

Every element on a screen is one of three things: an official DL component used as designed, a labelled proposal, or a logged exception (with an owner and an expiry date).

**Two-minute self-check before review**

- [ ] Every element is a DL instance, or labelled Proposed or Exception
- [ ] Nothing is detached
- [ ] No type, colour, shadow, radius or stroke changed on any instance
- [ ] No hard-coded values; spacing uses DL steps
- [ ] Text edited as content only; long copy shortened, not shrunk
- [ ] Arabic and English both fit without changing styles
- [ ] No component copied from another file
- [ ] Library update banner reviewed
- [ ] Exceptions are logged and not expired

| Violation | How visible it is |
|---|---|
| Detached component | Easy to spot |
| Overridden style on a linked component (type, colour, shadow) | The most common, and the hardest to see |
| Hard-coded value instead of a token | Hidden until the theme or language changes |
| Copied or forked library | Drifts silently |
| Unlabelled local component | Looks official but isn't |

## Red flags

| Red flag | Why it hurts | Instead |
|---|---|---|
| Detaching | The component turns into plain shapes and stops receiving updates | Reset overrides, swap the variant, re-insert, or ask |
| Restyling | Font size, colour, radius or shadow changed on a linked component | Change content only. Need a new look? Request it |
| Editing or copying the library | A private copy, or a component taken from another team's file | Insert from the official library only |
| Improvising | A new component used as if it were official | Build locally, label it Proposed, submit it |
| Unlogged exceptions | A workaround "just for this release" that nobody recorded | Log it with an owner and an expiry date |
| Restyling to fit copy | Smaller type because the Arabic or English text is long | Shorten the copy. The component stays as designed |

## Support and rhythm

- **DL Teams channel:** questions, releases and deprecations. The single source for updates. None of the 31 files is deprecated today; a deprecated file stays readable but must not be used in new work.
- **How to ask well:** link the file, attach a screenshot, and say what you already tried.
- **Your first week:** enable the library, build one screen from DL components only using the self-check, join the channel and name your team's champion, then pass the 10-question certification (80% to pass, retakes allowed).

## Glossary

| Term | Meaning |
|---|---|
| DL | Nusuk's Design Language: the official, governed set of components, tokens and rules |
| Library | The official files that hold DL. You use them; you never edit them |
| Instance | A linked copy of a component in your file |
| Detach | Cutting the link between an instance and the library |
| Override | A change made on an instance. Allowed for content, not for style |
| Token | A named design value, such as a colour or a spacing step |
| Theme | A colour mode: Quranic Illumination, Dome of the Prophet or Court Fabrics |
| Fork | A private edited copy of the library |
| Exception | A logged, time-limited departure from the rules |
| Proposed | A component built locally and waiting for DL review |
