# OptionCard

A choice or setting in a list: with an action, a counter, an icon on top, or a requirement.

**Figma source:** 🃏 Cards › Option Cards (13 types) on `_Master Card` (Mode Default / Transparent / Gray).

**17 November 2026, revised cards:** the preview now follows the Figma order and names. Figma's names are accepted as `type`: `default` (title + description, no icon, no action), `with-icon` (lead icon, no action), `simple-list`, `with-action` (no icon), `icon-with-action`, `2-actions`, `2-actions-on`, `counter`, `lr-icon-with-action`, `lr-icon`, `top-icon` / `icon-top`, `requirement-item`, `product`. 2 Actions, 2 Actions On and Counter no longer draw a lead icon (Figma has none; pass `iconName` to add one). The LR flag tile is Ivory, as in Figma (was Shade 5).

**15 November 2026, evening:** 13 types. New: `simple-list`, `lr-icon` (the flag tile without an action — **use `lr-icon-with-action` for the one with the button**) and `2-actions-on` (the card slides to reveal a Secondary action (star) and a Fate action (delete-03), each the full card height; `open` on `2-actions` does the same). `_Master Card` is published with modes Default (white, radius 18, shadow), Transparent (Ivory line) and Gray (Ivory fill, radius 14).

**10 November 2026:** new type `product` (picture, name, quantity).

## Props

| Prop | Type | Notes |
|---|---|---|
| `type` | `'default' \| 'with-icon' \| 'simple-list' \| 'with-action' \| 'icon-with-action' \| '2-actions' \| '2-actions-on' \| 'counter' \| 'lr-icon-with-action' \| 'lr-icon' \| 'icon-top' \| 'requirement-item' \| 'product'` | Figma Type; older names (`action-only`, `without-action`, `text-only`) still work |
| `open, actions, onMore` | `boolean, {icon,label,fate,onClick}[], fn` | `2-actions`: reveal the swipe actions |
| `title, description` | `string` | `notes-1-light` over `body-2-regular` (Counter swaps them) |
| `status` | `string` | Error chip under the text |
| `iconName` | `string` | Lead icon (24) or tile icon |
| `flag` | `node` | Tile content for LR Icon (flag) |
| `count` | `number` | Counter start value; minus is 40% at 0 |
| `action, actionIcon` | `string` | Secondary XS icon-only button |
| `decreaseLabel` | `string` |  |
| `image` | `string` |  |
| `increaseLabel` | `string` |  |
| `moreLabel` | `string` |  |
| `quantity` | `string` |  |

## Use

- Card: radius 18, padding 18, gap 12 (Requirement: 12 / 18).

## Don't

- Do not use for navigation lists; use DropdownItem.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
