# LoginForm

The standard sign-in card: email or mobile, the one-time code, and the password with its criteria. New in the DL on 24 November 2026.

**Figma source:** [⌨️ Inputs › ✨ Standered Forms › Login Form](https://www.figma.com/design/DATayAnynnSQqdJQLAi7DR/?node-id=69471-5284) (Type Email, Mobile, OTP, Password × Status Default, Filled, Error, Setup; 12 variants) on `Login Master Form` (Status Default, Error), with ResendTimer (Resend OTP Off, On). Insert the component from the library in Figma; this card mirrors it for concepts, decks and code.

## Anatomy

| Part | Spec | DL |
|---|---|---|
| Card | white, radius 22, padding 18, items 12 apart, soft shadow | `surface-01-white`, `space-nr` |
| Method tabs | Header Tabs SM, hugging, centred: «البريد الإلكتروني» · «رقم الجوال» | HeaderTabs `fill={false}` |
| Title | Body 2 (16), centred: «أدخل رمز التحقق», «أدخل كلمة المرور» | OTP and Password |
| Field | TextField input (email), mobile, otp or password with criteria | TextField |
| Continue | Primary MD, full width, «المتابعة» with `arrow-left-02`; disabled while empty or in error | Button |
| Help | Ghost LR «لديك مشكلة في الدخول لحسابك؟» | Button |
| Resend (OTP) | ResendTimer: `time-04` «يمكنك طلب رمز جديد بعد» 00:59, then `alert-02` «لم يصلك الرمز؟» «أعد الإرسال» | ResendTimer |

## Props

| Prop | Type | Notes |
|---|---|---|
| `type` | `'email' \| 'mobile' \| 'otp' \| 'password'` | |
| `status` | `'default' \| 'filled' \| 'error' \| 'setup'` | Setup = password creation with criteria in error |
| `value` / `placeholder` / `error` | `string` | Field content and error text (defaults from Figma) |
| `rules` | `(string \| { label, met })[]` | Password criteria |
| `tabs` | `boolean` | Show the method tabs. Default: Email and Mobile only |
| `canContinue` | `boolean` | Override the Continue state |
| `time` / `onResend` | `string` / `() => void` | OTP timer and resend |
| `onTab`, `onContinue`, `onHelp` | functions | |
| `title` | `string` | The form's title (OTP «أدخل رمز التحقق», Password «أدخل كلمة المرور») |
| `tabLabels` | `[string, string]` | The method tabs, default «البريد الإلكتروني» and «رقم الجوال» |
| `continueLabel` / `helpLabel` | `string` | The Continue button («المتابعة») and the help link («لديك مشكلة في الدخول لحسابك؟») |
| `ariaLabel` | `string` | Names the form, default «تسجيل الدخول» |

`ResendTimer` is exported too: `resend` (boolean), `time`, `label`, `prompt`, `resendLabel`, `onResend`.

## Use

- Keep Continue disabled until the field holds a valid value; say what is wrong under the field with an Error Messages Content text.
- Start the resend timer when the code is sent; offer «أعد الإرسال» only when it ends.

## Don't

- Do not add social sign-in or marketing to this card.
- Do not clear what the person typed when you show an error.

## Figma notes for the DL Manager

- The OTP error variant is named `Type=OTP, Status=Filled` (a duplicate name); it should be `Status=Error`.
- Mobile Default and Filled show the email tab as chosen; code chooses the mobile tab.
- The method tabs appear on the OTP Error and Password Setup variants but not their Default and Filled ones; code shows them for Email and Mobile only (`tabs` overrides).

## iOS and Android

A VStack / Column, spacing 12, padding 18, corner 22. The OTP field uses the system one-time-code content type (`.oneTimeCode`, `autofillHints = SMS_OTP_CODE`); the password field uses `.newPassword` in Setup.
