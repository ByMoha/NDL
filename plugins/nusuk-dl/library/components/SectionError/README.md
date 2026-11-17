# SectionError

A block inside a page that failed to load, with a retry. The page around it keeps working.

**Figma source:** [‼️ Status Handlers › Section Error](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=68545-4963) (published). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Figma

A white card, radius 18, padding 18, Shadow/SM as drawn: a 20 `alert-circle` over the message (`notes-1-regular`, Alerts/Text/Default), 12 apart, then a Secondary XS «إعادة المحاولة» 18 below.

## Props

| Prop | Type | Notes |
|---|---|---|
| `children` | `node` | The message; default «تعذّر تحميل هذا القسم.» |
| `message` | `string` | Same as `children` |
| `iconName` | `string` | Default `alert-circle` |
| `action` | `string \| false` | The button; default «إعادة المحاولة»; false hides it |
| `onRetry` | `() => void` | |

## Use

- Name what failed: «تعذّر تحميل أوقات الصلاة.»
- Use it for one section; when the whole page fails, use EmptyState full page.

## Don't

- Do not blame the person or show an error code.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
