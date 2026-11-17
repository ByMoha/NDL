# QRCodeStatus

A QR code with default, used, expired, blurred, cancelled and error states.

**Figma source:** 🏖️ Travel › QR Code Status, QR Code (Normal, Priority, Child, Premium). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**15 November 2026, evening:** follows QR Code Status (200 × 200, radius 14; unpublished edits in 🏖️ Travel). Default shows the Nusuk logo in the centre. Every other state blurs the whole code (layer blur 22): Blurred nothing else; Used a Success MD chip «مستخدمة» with tick-double-02; Expired a Default MD chip «انتهت» with calendar-remove-02; Cancelled an Error MD chip «مُلغاة»; Error a Primary SM button «تحديث» with exchange-01 (`onRetry`). The old overlay text and alert icon are gone.

**17 November 2026:** the code art now follows Figma: a 25-module dot code (round modules), solid rounded finder squares top right and bottom left, a dot top left, and the Nusuk mark in a clear centre. The art is decorative; pass `src` with a real code image for production.

## Props

| Prop | Type | Notes |
|---|---|---|
| `status` | `'default' \| 'used' \| 'expired' \| 'blurred' \| 'cancelled' \| 'error'` |  |
| `label` | `string` |  |
| `ariaLabel` | `string` |  |
| `retryLabel, onRetry` | `string, fn` | Error: the refresh button |
| `logo` | `boolean` | Default: the Nusuk logo in the centre |
| `src` | `string` | A real code image in place of the art |

## Use

- Blur until the person taps, in public places.

## Don't

- Do not show a usable code on an expired permit.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
