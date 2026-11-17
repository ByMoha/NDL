# FileUploader

Upload a document: an empty field with the upload button, a loading field, the uploaded file with view and delete, and a view-only file.

**Figma source:** [⌨️ Inputs › File Uploader](https://www.figma.com/design/DATayAnynnSQqdJQLAi7DR) (Type × Status, 8 variants on `_Uploader_Master`), Multiple File Uploader, File Uploader Sheet. Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

**16 November 2026 (read from Figma):** the field is 78 high, radius 18 (`radius-md`), padding 20 / 18, `inputs-surface-default` with a 1 px `surface-03-pearl` line (was a dashed Mist line, radius 12). The label is 16 (`body-2-regular`), the file-types line is a Hint under the field. The actions are Secondary XS icon buttons: `upload-04` (new icon), `view`, and `delete-03` in the Fate colour. Loading shows «جاري رفع الملفات» with the `loading-03` spinner. New `status`: **Error** turns the label, line and text to the error colours and adds an Error hint; **Disabled** uses `inputs-surface-disabled`, a Mist line and `inputs-text-disabled`, and hides delete. Defaults are Arabic. Figma spells the values `Defualt` and `Dissabled`; code accepts both spellings.

## Props

| Prop | Type | Notes |
|---|---|---|
| `type` | `'default' \| 'loading' \| 'uploaded' \| 'view'` | Figma Type |
| `status` | `'default' \| 'error' \| 'disabled'` | Figma Status (16 Nov 2026) |
| `label` | `string` | Above the field |
| `placeholder` | `string` | Default «رفع الملف» |
| `loadingLabel` | `string` | Default «جاري رفع الملفات» |
| `fileName` | `string` | `uploaded`, `view` |
| `fileSize` | `string` | Kept left to right («200.3 KB») |
| `progress` | `number` | 0–100, read out on the spinner |
| `hint` | `string \| false` | File types and size. `false` hides it |
| `hintText` | `string` | Alias of `hint` |
| `error` | `string` | Error hint when `status="error"` |
| `errorText` | `string` | Alias of `error` |
| `viewLabel` | `string` | Accessible name of the view button. Default «عرض الملف» |
| `removeLabel` | `string` | Accessible name of the delete button. Default «حذف الملف» |
| `onUpload` | `() => void` | |
| `onView` | `() => void` | |
| `onRemove` | `() => void` | |

## Use

- State the accepted formats and size before upload (the Hint).
- Show the loading state for anything over a second.
- Write the error as what to do next («ارفع ملفًا بصيغة PDF أو JPEG»).

## Don't

- Do not hide delete once a file is uploaded; only Disabled and View have no delete.
- Do not use red without the Error hint text.

## You provide

The content (labels, values, file names) and the container. Colour, type, radius and spacing come from the tokens and are not props.
