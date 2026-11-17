# StatusSheet

A bottom sheet that reports an outcome or asks for one decision: an error, a confirmation, a permission, a cancellation. One title, one line or two of description, at most two buttons.

**Figma source:** [‼️ Status Handlers › Bottom Sheet](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=68392-32059) (Status Default, Brand, Success, Information, Warning, Error, Image) and [General Bottom Sheet](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=68392-32076) (19 types), both on [`_General_Bottom_Sheet`](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=68392-32030) (booleans Show Chips, Show Icon, Description, Instruction, T&C Statement, Primary CTA, Ghost CTA, Prev. Step, and the Additional Content slot) over [Bottom Sheet BG](https://www.figma.com/design/9yOrGPTn04ZTx3uiDZ5d9o?node-id=69025-3308). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**17 November 2026: rebuilt to Figma.** The title is `headline-1-regular` (it was Headline 2) and the description `body-2-light` in `text-content`; the buttons are a Primary MD over a Ghost MD, each as wide as its label (code had two full-width LR buttons); Brand is the gold alert palette; the overlay is Overlay/Soft; the grabber sits over the top padding. New: `image`, `chip`, `instruction`, `children` (the slot), `terms`, `previous`, `fate`, `secondaryFate`, `topAction` and `template`, the General Bottom Sheet types with their copy.

## Figma

- The sheet: 8 from the screen edges, radius 42 at the top and 54 at the bottom, `glass-full` and Shadow/SM as drawn. Content: padding 32 18 48, gap 26, centred.
- Icon: a 72 circle (padding 8) in Alerts/Surface/<status> (Brand: Gold) holding a 38 glyph in Alerts/Icons/<status>: `alert-01`, `information-circle` for Information. Image: the artwork, 165 wide, instead.
- Text: title, then the description 12 below; Instruction (Settings Note) `notes-1-regular` after the Settings glyph.
- T&C Statement: `notes-2-regular` «بالمتابعة، فإنك توافق على» and the underlined «الشروط والأحكام», 12 above the buttons.
- Buttons: Primary MD, Ghost MD 4 below. Prev. Step: the previous sheet's title (`headline-2-regular`, `text-note`) on Mist, peeking above.

## Templates (General Bottom Sheet)

`template` fills status, icon, copy and buttons; every other prop overrides it. `subject` fills `{s}` (a name, a service).

| `template` | Figma type | Status · icon | Buttons |
|---|---|---|---|
| `error` | Something Went Wrong | error · alert-circle | Ghost «إغلاق» |
| `download-failed` | Download Incomplete | error · file-not-found | Primary «حاول مرة أخرى», Ghost «إغلاق» |
| `unsaved-changes` | Unsaved Changes | error · alert-01 | Primary «إكمال البيانات وحفظ التعديلات», Ghost + Fate «المتابعة دون حفظ» |
| `delete` | Delete Confirmation | error · alert-01 | Secondary + Fate «تأكيد الحذف», Ghost «إلغاء الأمر» |
| `location` | Location | brand · location-01 | Primary «تفعيل الوصول للموقع», Ghost «ذكّرني لاحقًا» |
| `location-settings` | Location 2nd time | brand · location-01 · Instruction | Primary «انتقل إلى الإعدادات» |
| `calendar` | calendar access | brand · calendar-04 | Primary «أضف الحجز للتقويم» |
| `calendar-settings` | calendar 2nd time | brand · calendar-04 · Instruction | Primary «انتقل إلى الإعدادات» |
| `notifications` | Enable Notification | brand · notification-square | Primary «تفعيل الإشعارات»; put the notification preview in `children` |
| `refund` | Refund | error · alert-01 · T&C | Secondary + Fate «إلغاء الحجز», Ghost «إغلاق»; put the two refund Select Cards in `children` |
| `wallet-refund` | Wallet Refund | error · alert-01 · T&C | Secondary + Fate «إلغاء الحجز», Ghost «إغلاق» |
| `priority` | Priority | brand · information-circle | Ghost «إغلاق» |
| `payment-failed` | Payment Failed | error · cancel-circle-half-dot | Primary «ادفع بطريقة أخرى» |
| `payment-expired` | Payment session expired | error · alert-01 | Primary «حجز جديد» |
| `update` | Force Update | brand · `image` (the app) | the store button in `children`, Ghost «ذكّرني لاحقًا»; `force` hides it |

No internet and Full Screen Error are `EmptyState` (full page) in a screen. Companion MGM and General Template are layouts: compose them in `children` (MemberCard rows, TextField counters).

Where the templates differ from Figma, and why (known issues F76–F78): Fate only where the action removes or cancels (Figma also puts it on retry, pay another way, new booking and the location permission); Location asks with the Brand palette, as Calendar and Notifications do (Figma uses Error); the copy follows the house rules («لم تُحفظ» for «لم يتم حفظها», «وسيُعاد المبلغ» for «وسيتم استرداد المبلغ», «نسك» for «نُسك»).

## Props

| Prop | Type | Notes |
|---|---|---|
| `status` | `'default' \| 'brand' \| 'success' \| 'information' \| 'warning' \| 'error' \| 'image'` | Default `default` |
| `template` | `string` | A General Bottom Sheet type (table above) |
| `subject` | `string` | Fills `{s}` in the template copy |
| `title` | `string` | What happened |
| `body` | `string` | Description: what it means and what to do |
| `iconName` | `string` | The 38 glyph; default `alert-01` (Information `information-circle`, Success `checkmark-circle-02`) |
| `icon` | `boolean` | Show Icon. Default true |
| `image`, `imageAlt`, `imageWidth` | `string`, `string`, `number` | The artwork in place of the icon (Status Image), 165 wide |
| `chip`, `chipIcon` | `string` | Show Chips: a Chip LR above the icon |
| `instruction` | `string` | Settings Note, for example «الإعدادات > التطبيقات > نسك > الموقع > دائمًا» |
| `children` | `node` | Additional Content (the slot) |
| `terms` | `boolean \| { lead, label, href, onClick }` | T&C Statement |
| `primary`, `onPrimary` | `string`, `() => void` | Primary MD |
| `primaryIcon` | `string \| false` | A glyph on the primary's end (Icon=Right) |
| `fate` | `boolean` | Secondary + Fate: only for an action that removes or cancels |
| `secondary`, `onSecondary` | `string`, `() => void` | Ghost MD |
| `secondaryFate` | `boolean` | Ghost + Fate, to discard |
| `previous` | `string` | Prev. Step: the previous sheet's title, peeking above |
| `force` | `boolean` | No dismissing button (a forced update) |
| `topAction`, `arrow`, `arrowLabel`, `onArrow` | see BottomSheet | Bottom Sheet BG › Top Action |

## Use

- Errors open with what happened and guide the next step: «تحقّق من بيانات بطاقتك، أو جرّب طريقة أخرى لإكمال الدفع.»
- Ask for a permission only after showing its value; when it was refused, use the `-settings` template with the path.
- Adverse outcomes are agentless and never use «تم»: «انتهت مهلة الدفع», «أُلغي حجزك».

## Don't

- Do not put a blessing on an error or payment message.
- Do not use Fate (red) for a retry or a permission; it says "this removes something".
- Do not use a sheet for a success that needs no action; use a NoticeBar.

## Accessibility

`role="alertdialog"`, `aria-modal`, named by the title. The icon is decorative. Focus the primary when the sheet opens and return focus to the trigger when it closes.

## You provide

The content (labels, values, images from Visual Assets) and the container. Colour, type, radius and spacing come from the tokens and are not props.
