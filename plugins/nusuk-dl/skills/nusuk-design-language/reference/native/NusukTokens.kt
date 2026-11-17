// NusukTokens.kt
// Generated from tokens.json 3.10. Do not edit: change Figma, then the tokens, then run the release.
// Units: 1 Figma px = 1 dp; text sizes are sp. Lay out with start and end, never left and right.
// Shadows and Glass BG: DESIGN.md, module M8. Fonts: IBM Plex Sans Arabic, Light and Regular.

package sa.nusuk.designlanguage  // change to your module's package

import androidx.compose.runtime.Immutable
import androidx.compose.runtime.staticCompositionLocalOf
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

enum class NusukBrandTheme { Gold, Green, Lavender }

object NusukSpace {
    val Xxs = 4.dp  // space-xxs
    val Xs = 8.dp  // space-xs
    val Sm = 12.dp  // space-sm
    val Nr = 18.dp  // space-nr
    val Md = 20.dp  // space-md
    val Lr = 26.dp  // space-lr
    val Xl = 32.dp  // space-xl
    val Xxl = 48.dp  // space-xxl
}

object NusukDimension {
    val Xxs = 8.dp  // dimension-xxs
    val Xs = 12.dp  // dimension-xs
    val Sm = 16.dp  // dimension-sm
    val Nr = 20.dp  // dimension-nr
    val Md = 24.dp  // dimension-md
    val Lr = 38.dp  // dimension-lr
    val Xl = 54.dp  // dimension-xl
}

object NusukButton {
    val HeightXs = 30.dp  // button-height-xs
    val HeightSm = 38.dp  // button-height-sm
    val HeightMd = 44.dp  // button-height-md
    val HeightLr = 48.dp  // button-height-lr
    val PaddingXs = 14.dp  // button-padding-xs
    val PaddingSm = 18.dp  // button-padding-sm
    val PaddingMd = 22.dp  // button-padding-md
    val PaddingLr = 28.dp  // button-padding-lr
    val PaddingIconXs = 12.dp  // button-padding-icon-xs
    val PaddingIconSm = 16.dp  // button-padding-icon-sm
    val PaddingIconMd = 20.dp  // button-padding-icon-md
    val PaddingIconLr = 24.dp  // button-padding-icon-lr
    val GapXs = 4.dp  // button-gap-xs
    val Gap = 8.dp  // button-gap
    val IconXs = 16.dp  // button-icon-xs
    val IconSm = 18.dp  // button-icon-sm
    val IconMd = 20.dp  // button-icon-md
    val IconOnlyXs = 18.dp  // button-icon-only-xs
    val IconOnlySm = 24.dp  // button-icon-only-sm
    val IconOnlyMd = 26.dp  // button-icon-only-md
}

object NusukTag {
    val HeightSm = 24.dp  // tag-height-sm
    val HeightLr = 32.dp  // tag-height-lr
}

object NusukChip {
    val HeightXs = 18.dp  // chip-height-xs
    val HeightSm = 20.dp  // chip-height-sm
    val HeightMd = 24.dp  // chip-height-md
    val HeightLr = 28.dp  // chip-height-lr
    val PaddingXs = 8.dp  // chip-padding-xs
    val PaddingSm = 10.dp  // chip-padding-sm
    val PaddingMd = 12.dp  // chip-padding-md
    val PaddingLr = 14.dp  // chip-padding-lr
    val PaddingIconXs = 6.dp  // chip-padding-icon-xs
    val PaddingIconSm = 8.dp  // chip-padding-icon-sm
    val PaddingIconMd = 10.dp  // chip-padding-icon-md
    val PaddingIconLr = 12.dp  // chip-padding-icon-lr
    val IconXs = 12.dp  // chip-icon-xs
    val IconSm = 14.dp  // chip-icon-sm
    val IconMd = 14.dp  // chip-icon-md
    val IconLr = 16.dp  // chip-icon-lr
    val GapXs = 4.dp  // chip-gap-xs
    val GapSm = 4.dp  // chip-gap-sm
    val GapMd = 4.dp  // chip-gap-md
    val GapLr = 6.dp  // chip-gap-lr
    val FontXs = 10.dp  // chip-font-xs
    val FontSm = 12.dp  // chip-font-sm
    val FontMd = 12.dp  // chip-font-md
    val FontLr = 14.dp  // chip-font-lr
}

object NusukControl {
    val IconSm = 12.dp  // control-icon-sm
    val IconMd = 12.dp  // control-icon-md
    val IconLr = 18.dp  // control-icon-lr
    val CheckboxSm = 18.dp  // control-checkbox-sm
    val CheckboxMd = 18.dp  // control-checkbox-md
    val CheckboxLr = 24.dp  // control-checkbox-lr
    val RadioSm = 18.dp  // control-radio-sm
    val RadioMd = 18.dp  // control-radio-md
    val RadioLr = 24.dp  // control-radio-lr
    val ToggleSm = 32.dp  // control-toggle-sm
    val ToggleMd = 42.dp  // control-toggle-md
    val ToggleLr = 54.dp  // control-toggle-lr
    val ToggleIconSm = 16.dp  // control-toggle-icon-sm
    val ToggleIconMd = 24.dp  // control-toggle-icon-md
    val ToggleIconLr = 32.dp  // control-toggle-icon-lr
    val GapSm = 8.dp  // control-gap-sm
    val GapMd = 12.dp  // control-gap-md
    val GapLr = 12.dp  // control-gap-lr
    val TextSm = 14.dp  // control-text-sm
    val TextMd = 16.dp  // control-text-md
    val TextLr = 18.dp  // control-text-lr
}

object NusukRadius {
    val Xxs = 4.dp  // radius-xxs
    val Xs = 8.dp  // radius-xs
    val S = 14.dp  // radius-s
    val Md = 18.dp  // radius-md
    val Xl = 22.dp  // radius-xl
    val Xxl = 42.dp  // radius-xxl
    val Ios = 54.dp  // radius-ios
    val Full = 1000.dp  // radius-full. A capsule: use CircleShape, not this number
}

object NusukBorder {
    val Thin = 1.dp  // border-thin
    val Medium = 1.5.dp  // border-medium
    val Thick = 2.dp  // border-thick
    val None = 0.dp  // border-none
}

object NusukBlur {
    val Sm = 2.dp  // blur-sm
    val Md = 10.dp  // blur-md
    val Lr = 20.dp  // blur-lr
    val Frost = 6.dp  // blur-frost
}

object NusukScale {
    val S02 = 2.dp  // scale-02
    val S04 = 4.dp  // scale-04
    val S06 = 6.dp  // scale-06
    val S08 = 8.dp  // scale-08
    val S10 = 10.dp  // scale-10
    val S12 = 12.dp  // scale-12
    val S14 = 14.dp  // scale-14
    val S16 = 16.dp  // scale-16
    val S18 = 18.dp  // scale-18
    val S20 = 20.dp  // scale-20
    val S22 = 22.dp  // scale-22
    val S24 = 24.dp  // scale-24
    val S26 = 26.dp  // scale-26
    val S28 = 28.dp  // scale-28
    val S30 = 30.dp  // scale-30
    val S32 = 32.dp  // scale-32
    val S34 = 34.dp  // scale-34
    val S36 = 36.dp  // scale-36
    val S38 = 38.dp  // scale-38
    val S42 = 42.dp  // scale-42
    val S44 = 44.dp  // scale-44
    val S46 = 46.dp  // scale-46
    val S48 = 48.dp  // scale-48
    val S50 = 50.dp  // scale-50
    val S54 = 54.dp  // scale-54
    val S64 = 64.dp  // scale-64
    val S96 = 96.dp  // scale-96
    val S112 = 112.dp  // scale-112
    val S128 = 128.dp  // scale-128
    val S160 = 160.dp  // scale-160
}

object NusukOpacity {
    const val Subtle = 0.04f  // opacity-subtle
    const val Hover = 0.08f  // opacity-hover
    const val Focus = 0.12f  // opacity-focus
    const val Disabled = 0.38f  // opacity-disabled
    const val Medium = 0.5f  // opacity-medium
    const val Strong = 0.9f  // opacity-strong
    const val None = 0f  // opacity-none
}

/** Values that change with the layout mode (Figma: Foundation > Layout). Phone for now on Android; tablet and wide
 *  map to Medium and Expanded windows when size classes ship. */
@Immutable
data class NusukLayout(
    val spaceXxs: Dp,  // space-xxs
    val spaceSm: Dp,  // space-sm
    val spaceNr: Dp,  // space-nr
    val spaceMd: Dp,  // space-md
    val spaceLr: Dp,  // space-lr
    val spaceXl: Dp,  // space-xl
    val spaceXxl: Dp,  // space-xxl
    val dimensionXxs: Dp,  // dimension-xxs
    val buttonHeightXs: Dp,  // button-height-xs
    val buttonHeightMd: Dp,  // button-height-md
    val buttonHeightLr: Dp,  // button-height-lr
) {
    companion object {
        val Phone = NusukLayout(spaceXxs = 4.dp, spaceSm = 12.dp, spaceNr = 18.dp, spaceMd = 20.dp, spaceLr = 26.dp, spaceXl = 32.dp, spaceXxl = 48.dp, dimensionXxs = 8.dp, buttonHeightXs = 30.dp, buttonHeightMd = 44.dp, buttonHeightLr = 48.dp)
        val Tablet = NusukLayout(spaceXxs = 8.dp, spaceSm = 16.dp, spaceNr = 20.dp, spaceMd = 24.dp, spaceLr = 32.dp, spaceXl = 48.dp, spaceXxl = 48.dp, dimensionXxs = 12.dp, buttonHeightXs = 30.dp, buttonHeightMd = 44.dp, buttonHeightLr = 48.dp)
        val Wide = NusukLayout(spaceXxs = 8.dp, spaceSm = 16.dp, spaceNr = 20.dp, spaceMd = 24.dp, spaceLr = 32.dp, spaceXl = 48.dp, spaceXxl = 64.dp, dimensionXxs = 12.dp, buttonHeightXs = 26.dp, buttonHeightMd = 48.dp, buttonHeightLr = 54.dp)
    }
}

val LocalNusukLayout = staticCompositionLocalOf { NusukLayout.Phone }

object NusukType {
    val HeroLight = TextStyle(fontSize = 48.sp, lineHeight = 61.44.sp, fontWeight = FontWeight.Light)  // hero-light
    val HeroRegular = TextStyle(fontSize = 48.sp, lineHeight = 61.44.sp, fontWeight = FontWeight.Normal)  // hero-regular
    val Display1Light = TextStyle(fontSize = 32.sp, lineHeight = 40.96.sp, fontWeight = FontWeight.Light)  // display-1-light
    val Display1Regular = TextStyle(fontSize = 32.sp, lineHeight = 40.96.sp, fontWeight = FontWeight.Normal)  // display-1-regular
    val Display2Light = TextStyle(fontSize = 28.sp, lineHeight = 35.84.sp, fontWeight = FontWeight.Light)  // display-2-light
    val Display2Regular = TextStyle(fontSize = 28.sp, lineHeight = 35.84.sp, fontWeight = FontWeight.Normal)  // display-2-regular
    val Headline1Light = TextStyle(fontSize = 24.sp, lineHeight = 30.72.sp, fontWeight = FontWeight.Light)  // headline-1-light
    val Headline1Regular = TextStyle(fontSize = 24.sp, lineHeight = 30.72.sp, fontWeight = FontWeight.Normal)  // headline-1-regular
    val Headline2Light = TextStyle(fontSize = 20.sp, lineHeight = 25.6.sp, fontWeight = FontWeight.Light)  // headline-2-light
    val Headline2Regular = TextStyle(fontSize = 20.sp, lineHeight = 25.6.sp, fontWeight = FontWeight.Normal)  // headline-2-regular
    val Body1Light = TextStyle(fontSize = 18.sp, lineHeight = 23.04.sp, fontWeight = FontWeight.Light)  // body-1-light
    val Body1Regular = TextStyle(fontSize = 18.sp, lineHeight = 23.04.sp, fontWeight = FontWeight.Normal)  // body-1-regular
    val Body2Light = TextStyle(fontSize = 16.sp, lineHeight = 20.48.sp, fontWeight = FontWeight.Light)  // body-2-light
    val Body2Regular = TextStyle(fontSize = 16.sp, lineHeight = 20.48.sp, fontWeight = FontWeight.Normal)  // body-2-regular
    val Notes1Light = TextStyle(fontSize = 14.sp, lineHeight = 17.92.sp, fontWeight = FontWeight.Light)  // notes-1-light
    val Notes1Regular = TextStyle(fontSize = 14.sp, lineHeight = 17.92.sp, fontWeight = FontWeight.Normal)  // notes-1-regular
    val Notes2Light = TextStyle(fontSize = 12.sp, lineHeight = 15.36.sp, fontWeight = FontWeight.Light)  // notes-2-light
    val Notes2Regular = TextStyle(fontSize = 12.sp, lineHeight = 15.36.sp, fontWeight = FontWeight.Normal)  // notes-2-regular
}

@Immutable
data class NusukNeutralColors(
    val ink10: Color,  // neutral-10-ink
    val graphite09: Color,  // neutral-09-graphite
    val charcoal08: Color,  // neutral-08-charcoal
    val slate07: Color,  // neutral-07-slate
    val ash06: Color,  // neutral-06-ash
    val smoke05: Color,  // neutral-05-smoke
    val mist04: Color,  // neutral-04-mist
    val pearl03: Color,  // neutral-03-pearl
    val ivory02: Color,  // neutral-02-ivory
    val white01: Color,  // neutral-01-white
)

@Immutable
data class NusukTextColors(
    val heading: Color,  // text-heading
    val content: Color,  // text-content
    val subtle: Color,  // text-subtle
    val note: Color,  // text-note
    val link: Color,  // text-link
    val inverse: Color,  // text-inverse
)

@Immutable
data class NusukSurfaceColors(
    val illumination: Color,  // surface-illumination
    val longing: Color,  // surface-longing
    val shade1: Color,  // surface-shade-1
    val shade2: Color,  // surface-shade-2
    val shade3: Color,  // surface-shade-3
    val shade4: Color,  // surface-shade-4
    val shade5: Color,  // surface-shade-5
    val shade6: Color,  // surface-shade-6
    val screenBk: Color,  // surface-screen-bk
    val ink10: Color,  // surface-10-ink
    val graphite09: Color,  // surface-09-graphite
    val charcoal08: Color,  // surface-08-charcoal
    val slate07: Color,  // surface-07-slate
    val ash06: Color,  // surface-06-ash
    val smoke05: Color,  // surface-05-smoke
    val mist04: Color,  // surface-04-mist
    val pearl03: Color,  // surface-03-pearl
    val ivory02: Color,  // surface-02-ivory
    val white01: Color,  // surface-01-white
    val whiteShine: Color,  // surface-white-shine
    val lightShine: Color,  // surface-light-shine
)

@Immutable
data class NusukIconsColors(
    val illumination: Color,  // icons-illumination
    val longing: Color,  // icons-longing
    val white: Color,  // icons-white
    val black: Color,  // icons-black
    val gray: Color,  // icons-gray
    val background: Color,  // icons-background
)

@Immutable
data class NusukAlertsColors(
    val surfaceInfo: Color,  // alerts-surface-info
    val surfaceSuccess: Color,  // alerts-surface-success
    val surfaceWarning: Color,  // alerts-surface-warning
    val surfaceError: Color,  // alerts-surface-error
    val surfaceDefault: Color,  // alerts-surface-default
    val surfaceGold: Color,  // alerts-surface-gold
    val surfaceSolidInfo: Color,  // alerts-surface-solid-info
    val surfaceSolidSuccess: Color,  // alerts-surface-solid-success
    val surfaceSolidWarning: Color,  // alerts-surface-solid-warning
    val surfaceSolidError: Color,  // alerts-surface-solid-error
    val surfaceSolidDefault: Color,  // alerts-surface-solid-default
    val iconsDefault: Color,  // alerts-icons-default
    val iconsWhite: Color,  // alerts-icons-white
    val iconsGold: Color,  // alerts-icons-gold
    val surfaceSolidGold: Color,  // alerts-surface-solid-gold
    val surfaceSolidWhite: Color,  // alerts-surface-solid-white
    val iconsInfo: Color,  // alerts-icons-info
    val iconsSuccess: Color,  // alerts-icons-success
    val textDefault: Color,  // alerts-text-default
    val textWhite: Color,  // alerts-text-white
    val iconsWarning: Color,  // alerts-icons-warning
    val textGold: Color,  // alerts-text-gold
    val iconsError: Color,  // alerts-icons-error
    val iconsReject: Color,  // alerts-icons-reject
    val textInfo: Color,  // alerts-text-info
    val textSuccess: Color,  // alerts-text-success
    val textWarning: Color,  // alerts-text-warning
    val textError: Color,  // alerts-text-error
    val textReject: Color,  // alerts-text-reject
)

@Immutable
data class NusukInputsColors(
    val surfaceDefault: Color,  // inputs-surface-default
    val surfaceDisabled: Color,  // inputs-surface-disabled
    val surfaceSuccess: Color,  // inputs-surface-success
    val surfaceError: Color,  // inputs-surface-error
    val iconsDefault: Color,  // inputs-icons-default
    val iconsDisabled: Color,  // inputs-icons-disabled
    val iconsSuccess: Color,  // inputs-icons-success
    val iconsError: Color,  // inputs-icons-error
    val textDefault: Color,  // inputs-text-default
    val textPlaceholder: Color,  // inputs-text-placeholder
    val textDisabled: Color,  // inputs-text-disabled
    val textSuccess: Color,  // inputs-text-success
    val textError: Color,  // inputs-text-error
)

@Immutable
data class NusukQuranColors(
    val background: Color,  // quran-background
    val emerald: Color,  // quran-emerald
    val emeraldShade: Color,  // quran-emerald-shade
    val crimson: Color,  // quran-crimson
    val crimsonShade: Color,  // quran-crimson-shade
    val saffron: Color,  // quran-saffron
    val saffronShade: Color,  // quran-saffron-shade
    val amethyst: Color,  // quran-amethyst
    val amethystShade: Color,  // quran-amethyst-shade
    val olive: Color,  // quran-olive
    val oliveShade: Color,  // quran-olive-shade
    val teal: Color,  // quran-teal
    val tealShade: Color,  // quran-teal-shade
    val umber: Color,  // quran-umber
    val umberShade: Color,  // quran-umber-shade
    val lavender: Color,  // quran-lavender
    val citrine: Color,  // quran-citrine
    val sky: Color,  // quran-sky
    val mint: Color,  // quran-mint
    val peach: Color,  // quran-peach
    val rose: Color,  // quran-rose
    val sand: Color,  // quran-sand
    val orchid: Color,  // quran-orchid
    val fog: Color,  // quran-fog
    val stroke: Color,  // quran-stroke
)

@Immutable
data class NusukButtonColors(
    val primarySurface: Color,  // button-primary-surface
    val primaryContent: Color,  // button-primary-content
    val secondarySurface: Color,  // button-secondary-surface
    val secondaryContent: Color,  // button-secondary-content
    val ghostSurface: Color,  // button-ghost-surface
    val ghostContent: Color,  // button-ghost-content
    val fateSurface: Color,  // button-fate-surface
    val fateContent: Color,  // button-fate-content
    val primarySurfaceOnDark: Color,  // button-primary-surface-on-dark
    val primaryContentOnDark: Color,  // button-primary-content-on-dark
    val secondarySurfaceOnDark: Color,  // button-secondary-surface-on-dark
    val secondaryContentOnDark: Color,  // button-secondary-content-on-dark
    val ghostContentOnDark: Color,  // button-ghost-content-on-dark
    val fateSurfaceOnDark: Color,  // button-fate-surface-on-dark
    val fateContentOnDark: Color,  // button-fate-content-on-dark
    val greenSurface: Color,  // button-green-surface
    val greenContent: Color,  // button-green-content
    val greenSecondarySurface: Color,  // button-green-secondary-surface
    val greenSecondaryContent: Color,  // button-green-secondary-content
    val greenGhostContent: Color,  // button-green-ghost-content
)

@Immutable
data class NusukOverlayColors(
    val backdrop: Color,  // overlay-backdrop
    val soft: Color,  // overlay-soft
)

@Immutable
data class NusukBrandColors(
    val quranicIllumination: Color,  // brand-quranic-illumination
    val kiswahReverence: Color,  // brand-kiswah-reverence
    val domeOfProphet: Color,  // brand-dome-of-prophet
    val sereneLight: Color,  // brand-serene-light
    val deepBlue: Color,  // brand-deep-blue
    val sacredTeal: Color,  // brand-sacred-teal
    val sunsetLilac: Color,  // brand-sunset-lilac
    val desertRose: Color,  // brand-desert-rose
    val stoneSand: Color,  // brand-stone-sand
    val earthTerracotta: Color,  // brand-earth-terracotta
)

@Immutable
data class NusukColors(
    val neutral: NusukNeutralColors,
    val text: NusukTextColors,
    val surface: NusukSurfaceColors,
    val icons: NusukIconsColors,
    val alerts: NusukAlertsColors,
    val inputs: NusukInputsColors,
    val quran: NusukQuranColors,
    val button: NusukButtonColors,
    val overlay: NusukOverlayColors,
    val brand: NusukBrandColors,
)

object NusukPalettes {
    val GoldLight = NusukColors(
        neutral = NusukNeutralColors(
            ink10 = Color(0xFF070808),
            graphite09 = Color(0xFF0B0D0E),
            charcoal08 = Color(0xFF171A1C),
            slate07 = Color(0xFF303336),
            ash06 = Color(0xFF636669),
            smoke05 = Color(0xFF97999B),
            mist04 = Color(0xFFCBCCCD),
            pearl03 = Color(0xFFE5E5E6),
            ivory02 = Color(0xFFF5F5F5),
            white01 = Color(0xFFFFFFFF),
        ),
        text = NusukTextColors(
            heading = Color(0xFF070808),
            content = Color(0xFF070808),
            subtle = Color(0xFF303336),
            note = Color(0xFF636669),
            link = Color(0xFFD99726),
            inverse = Color(0xFFFFFFFF),
        ),
        surface = NusukSurfaceColors(
            illumination = Color(0xFFD99726),
            longing = Color(0xFFF5B13D),
            shade1 = Color(0xFFF7C56E),
            shade2 = Color(0xFFFAD89E),
            shade3 = Color(0xFFEBD4AD),
            shade4 = Color(0xFFFAEBD1),
            shade5 = Color(0xFFFBF5E9),
            shade6 = Color(0xFFFDFBF6),
            screenBk = Color(0xFFF1F3F4),
            ink10 = Color(0xFF070808),
            graphite09 = Color(0xFF0B0D0E),
            charcoal08 = Color(0xFF171A1C),
            slate07 = Color(0xFF303336),
            ash06 = Color(0xFF636669),
            smoke05 = Color(0xFF97999B),
            mist04 = Color(0xFFCBCCCD),
            pearl03 = Color(0xFFE5E5E6),
            ivory02 = Color(0xFFF5F5F5),
            white01 = Color(0xFFFFFFFF),
            whiteShine = Color(0xFFFFFFFF),
            lightShine = Color(0xFFFCFCFD),
        ),
        icons = NusukIconsColors(
            illumination = Color(0xFFD99726),
            longing = Color(0xFFF5B13D),
            white = Color(0xFFFFFFFF),
            black = Color(0xFF070808),
            gray = Color(0xFF636669),
            background = Color(0xFFFBF5E9),
        ),
        alerts = NusukAlertsColors(
            surfaceInfo = Color(0xFFE4F1F8),
            surfaceSuccess = Color(0xFFF0FFF5),
            surfaceWarning = Color(0xFFFFF1E4),
            surfaceError = Color(0xFFFFF2F1),
            surfaceDefault = Color(0xFFF5F5F5),
            surfaceGold = Color(0xFFFBF5E9),
            surfaceSolidInfo = Color(0xFF118CE4),
            surfaceSolidSuccess = Color(0xFF5DB364),
            surfaceSolidWarning = Color(0xFFFF6D01),
            surfaceSolidError = Color(0xFFFF4136),
            surfaceSolidDefault = Color(0xFF303336),
            iconsDefault = Color(0xFF303336),
            iconsWhite = Color(0xFFFFFFFF),
            iconsGold = Color(0xFFD99726),
            surfaceSolidGold = Color(0xFFD99726),
            surfaceSolidWhite = Color(0xFFFFFFFF),
            iconsInfo = Color(0xFF118CE4),
            iconsSuccess = Color(0xFF5DB364),
            textDefault = Color(0xFF303336),
            textWhite = Color(0xFFFFFFFF),
            iconsWarning = Color(0xFFFF6D01),
            textGold = Color(0xFFD99726),
            iconsError = Color(0xFFFF4136),
            iconsReject = Color(0xFF171A1C),
            textInfo = Color(0xFF118CE4),
            textSuccess = Color(0xFF5DB364),
            textWarning = Color(0xFFFF6D01),
            textError = Color(0xFFFF4136),
            textReject = Color(0xFF171A1C),
        ),
        inputs = NusukInputsColors(
            surfaceDefault = Color(0xFFFFFFFF),
            surfaceDisabled = Color(0xFFE5E5E6),
            surfaceSuccess = Color(0xFFF0FFF5),
            surfaceError = Color(0xFFFFF2F1),
            iconsDefault = Color(0xFF171A1C),
            iconsDisabled = Color(0xFF97999B),
            iconsSuccess = Color(0xFF5DB364),
            iconsError = Color(0xFFFF4136),
            textDefault = Color(0xFF070808),
            textPlaceholder = Color(0xFF636669),
            textDisabled = Color(0xFF636669),
            textSuccess = Color(0xFF5DB364),
            textError = Color(0xFFFF4136),
        ),
        quran = NusukQuranColors(
            background = Color(0xFFFFFBF7),
            emerald = Color(0xFF1C664B),
            emeraldShade = Color(0xFFE4FBEA),
            crimson = Color(0xFFD50B3A),
            crimsonShade = Color(0xFFFCE4E9),
            saffron = Color(0xFFD99726),
            saffronShade = Color(0xFFFAF3E5),
            amethyst = Color(0xFF7F26D9),
            amethystShade = Color(0xFFF0E5FA),
            olive = Color(0xFF8B8714),
            oliveShade = Color(0xFFF5F5EA),
            teal = Color(0xFF1C424A),
            tealShade = Color(0xFFE9F4F7),
            umber = Color(0xFF573D1C),
            umberShade = Color(0xFFF8F1E7),
            lavender = Color(0xFFC3B6D7),
            citrine = Color(0xFFD2CF84),
            sky = Color(0xFFABC2D7),
            mint = Color(0xFFB2D4B6),
            peach = Color(0xFFF2A577),
            rose = Color(0xFFDDA8A5),
            sand = Color(0xFFDEB899),
            orchid = Color(0xFFDCB3CA),
            fog = Color(0xFFB5C0CD),
            stroke = Color(0x26070808),
        ),
        button = NusukButtonColors(
            primarySurface = Color(0xFF070808),
            primaryContent = Color(0xFFFFFFFF),
            secondarySurface = Color(0xB3F5F5F5),
            secondaryContent = Color(0xFF070808),
            ghostSurface = Color(0x00FFFFFF),
            ghostContent = Color(0xFF070808),
            fateSurface = Color(0x1AFF4136),
            fateContent = Color(0xFFFF4136),
            primarySurfaceOnDark = Color(0xFFFFFFFF),
            primaryContentOnDark = Color(0xFF070808),
            secondarySurfaceOnDark = Color(0xB3303336),
            secondaryContentOnDark = Color(0xFFFFFFFF),
            ghostContentOnDark = Color(0xFFFFFFFF),
            fateSurfaceOnDark = Color(0xFFFF4136),
            fateContentOnDark = Color(0xFFFFF2F1),
            greenSurface = Color(0xFF5DB364),
            greenContent = Color(0xFFFFFFFF),
            greenSecondarySurface = Color(0xFFF0FFF5),
            greenSecondaryContent = Color(0xFF5DB364),
            greenGhostContent = Color(0xFF5DB364),
        ),
        overlay = NusukOverlayColors(
            backdrop = Color(0x80000000),
            soft = Color(0x1F000000),
        ),
        brand = NusukBrandColors(
            quranicIllumination = Color(0xFFEAB355),
            kiswahReverence = Color(0xFF070808),
            domeOfProphet = Color(0xFF47874A),
            sereneLight = Color(0xFFFFFFFF),
            deepBlue = Color(0xFF16125F),
            sacredTeal = Color(0xFF3B8C87),
            sunsetLilac = Color(0xFF9C7BC9),
            desertRose = Color(0xFFC97B84),
            stoneSand = Color(0xFFB8AA96),
            earthTerracotta = Color(0xFFC1624C),
        ),
    )

    val GoldDark = NusukColors(
        neutral = NusukNeutralColors(
            ink10 = Color(0xFFFFFFFF),
            graphite09 = Color(0xFFF5F5F5),
            charcoal08 = Color(0xFFE5E5E6),
            slate07 = Color(0xFFCBCCCD),
            ash06 = Color(0xFF97999B),
            smoke05 = Color(0xFF636669),
            mist04 = Color(0xFF303336),
            pearl03 = Color(0xFF171A1C),
            ivory02 = Color(0xFF111315),
            white01 = Color(0xFF111315),
        ),
        text = NusukTextColors(
            heading = Color(0xFFFFFFFF),
            content = Color(0xFFFFFFFF),
            subtle = Color(0xFFCBCCCD),
            note = Color(0xFF97999B),
            link = Color(0xFFF5B13D),
            inverse = Color(0xFFFFFFFF),
        ),
        surface = NusukSurfaceColors(
            illumination = Color(0xFFF5B13D),
            longing = Color(0xFFD99726),
            shade1 = Color(0xFF925F07),
            shade2 = Color(0xFF613F05),
            shade3 = Color(0xFF523B14),
            shade4 = Color(0xFF5C3E0A),
            shade5 = Color(0xFF412D0B),
            shade6 = Color(0xFF342409),
            screenBk = Color(0xFF070808),
            ink10 = Color(0xFFFFFFFF),
            graphite09 = Color(0xFFF5F5F5),
            charcoal08 = Color(0xFFE5E5E6),
            slate07 = Color(0xFFCBCCCD),
            ash06 = Color(0xFF97999B),
            smoke05 = Color(0xFF636669),
            mist04 = Color(0xFF303336),
            pearl03 = Color(0xFF171A1C),
            ivory02 = Color(0xFF111315),
            white01 = Color(0xFF111315),
            whiteShine = Color(0xFF2B2E31),
            lightShine = Color(0xFF3E4247),
        ),
        icons = NusukIconsColors(
            illumination = Color(0xFFF5B13D),
            longing = Color(0xFFD99726),
            white = Color(0xFFFFFFFF),
            black = Color(0xFFFFFFFF),
            gray = Color(0xFF97999B),
            background = Color(0xFF412D0B),
        ),
        alerts = NusukAlertsColors(
            surfaceInfo = Color(0xFF0C273B),
            surfaceSuccess = Color(0xFF0C3B10),
            surfaceWarning = Color(0xFF3A2208),
            surfaceError = Color(0xFF992720),
            surfaceDefault = Color(0xFF111315),
            surfaceGold = Color(0xFF412D0B),
            surfaceSolidInfo = Color(0xFFE4F1F8),
            surfaceSolidSuccess = Color(0xFFECFDF3),
            surfaceSolidWarning = Color(0xFFF79009),
            surfaceSolidError = Color(0xFFFEF3F2),
            surfaceSolidDefault = Color(0xFFCBCCCD),
            iconsDefault = Color(0xFFCBCCCD),
            iconsWhite = Color(0xFF111315),
            iconsGold = Color(0xFFF5B13D),
            surfaceSolidGold = Color(0xFFF5B13D),
            surfaceSolidWhite = Color(0xFF111315),
            iconsInfo = Color(0xFFE4F1F8),
            iconsSuccess = Color(0xFFECFDF3),
            textDefault = Color(0xFFCBCCCD),
            textWhite = Color(0xFFFFFFFF),
            iconsWarning = Color(0xFFF79009),
            textGold = Color(0xFFF5B13D),
            iconsError = Color(0xFFFEF3F2),
            iconsReject = Color(0xFFE5E5E6),
            textInfo = Color(0xFFE4F1F8),
            textSuccess = Color(0xFFECFDF3),
            textWarning = Color(0xFFF79009),
            textError = Color(0xFFFEF3F2),
            textReject = Color(0xFFE5E5E6),
        ),
        inputs = NusukInputsColors(
            surfaceDefault = Color(0xFF111315),
            surfaceDisabled = Color(0xFF171A1C),
            surfaceSuccess = Color(0xFF0C3B10),
            surfaceError = Color(0xFF992720),
            iconsDefault = Color(0xFFE5E5E6),
            iconsDisabled = Color(0xFF636669),
            iconsSuccess = Color(0xFFECFDF3),
            iconsError = Color(0xFFFEF3F2),
            textDefault = Color(0xFFFFFFFF),
            textPlaceholder = Color(0xFF97999B),
            textDisabled = Color(0xFF97999B),
            textSuccess = Color(0xFFECFDF3),
            textError = Color(0xFFFEF3F2),
        ),
        quran = NusukQuranColors(
            background = Color(0xFFFFFBF7),
            emerald = Color(0xFF1C664B),
            emeraldShade = Color(0xFFE4FBEA),
            crimson = Color(0xFFD50B3A),
            crimsonShade = Color(0xFFFCE4E9),
            saffron = Color(0xFFD99726),
            saffronShade = Color(0xFFFAF3E5),
            amethyst = Color(0xFF7F26D9),
            amethystShade = Color(0xFFF0E5FA),
            olive = Color(0xFF8B8714),
            oliveShade = Color(0xFFF5F5EA),
            teal = Color(0xFF1C424A),
            tealShade = Color(0xFFE9F4F7),
            umber = Color(0xFF573D1C),
            umberShade = Color(0xFFF8F1E7),
            lavender = Color(0xFFC3B6D7),
            citrine = Color(0xFFD2CF84),
            sky = Color(0xFFABC2D7),
            mint = Color(0xFFB2D4B6),
            peach = Color(0xFFF2A577),
            rose = Color(0xFFDDA8A5),
            sand = Color(0xFFDEB899),
            orchid = Color(0xFFDCB3CA),
            fog = Color(0xFFB5C0CD),
            stroke = Color(0x26070808),
        ),
        button = NusukButtonColors(
            primarySurface = Color(0xFFFFFFFF),
            primaryContent = Color(0xFFFFFFFF),
            secondarySurface = Color(0xB3111315),
            secondaryContent = Color(0xFFFFFFFF),
            ghostSurface = Color(0x00FFFFFF),
            ghostContent = Color(0xFFFFFFFF),
            fateSurface = Color(0x1AFEF3F2),
            fateContent = Color(0xFFFEF3F2),
            primarySurfaceOnDark = Color(0xFF111315),
            primaryContentOnDark = Color(0xFFFFFFFF),
            secondarySurfaceOnDark = Color(0xB3CBCCCD),
            secondaryContentOnDark = Color(0xFFFFFFFF),
            ghostContentOnDark = Color(0xFFFFFFFF),
            fateSurfaceOnDark = Color(0xFFFEF3F2),
            fateContentOnDark = Color(0xFF992720),
            greenSurface = Color(0xFFECFDF3),
            greenContent = Color(0xFFFFFFFF),
            greenSecondarySurface = Color(0xFF0C3B10),
            greenSecondaryContent = Color(0xFFECFDF3),
            greenGhostContent = Color(0xFFECFDF3),
        ),
        overlay = NusukOverlayColors(
            backdrop = Color(0x80000000),
            soft = Color(0x1F000000),
        ),
        brand = NusukBrandColors(
            quranicIllumination = Color(0xFFEAB355),
            kiswahReverence = Color(0xFF070808),
            domeOfProphet = Color(0xFF47874A),
            sereneLight = Color(0xFFFFFFFF),
            deepBlue = Color(0xFF16125F),
            sacredTeal = Color(0xFF3B8C87),
            sunsetLilac = Color(0xFF9C7BC9),
            desertRose = Color(0xFFC97B84),
            stoneSand = Color(0xFFB8AA96),
            earthTerracotta = Color(0xFFC1624C),
        ),
    )

    val GreenLight = NusukColors(
        neutral = NusukNeutralColors(
            ink10 = Color(0xFF070808),
            graphite09 = Color(0xFF0B0D0E),
            charcoal08 = Color(0xFF171A1C),
            slate07 = Color(0xFF303336),
            ash06 = Color(0xFF636669),
            smoke05 = Color(0xFF97999B),
            mist04 = Color(0xFFCBCCCD),
            pearl03 = Color(0xFFE5E5E6),
            ivory02 = Color(0xFFF5F5F5),
            white01 = Color(0xFFFFFFFF),
        ),
        text = NusukTextColors(
            heading = Color(0xFF070808),
            content = Color(0xFF070808),
            subtle = Color(0xFF303336),
            note = Color(0xFF636669),
            link = Color(0xFF1A4C27),
            inverse = Color(0xFFFFFFFF),
        ),
        surface = NusukSurfaceColors(
            illumination = Color(0xFF1A4C27),
            longing = Color(0xFF288A42),
            shade1 = Color(0xFF61D17D),
            shade2 = Color(0xFF88DD9D),
            shade3 = Color(0xFF8CD99F),
            shade4 = Color(0xFF99E5AD),
            shade5 = Color(0xFFE4FBEA),
            shade6 = Color(0xFFF6FEFA),
            screenBk = Color(0xFFF1F3F4),
            ink10 = Color(0xFF070808),
            graphite09 = Color(0xFF0B0D0E),
            charcoal08 = Color(0xFF171A1C),
            slate07 = Color(0xFF303336),
            ash06 = Color(0xFF636669),
            smoke05 = Color(0xFF97999B),
            mist04 = Color(0xFFCBCCCD),
            pearl03 = Color(0xFFE5E5E6),
            ivory02 = Color(0xFFF5F5F5),
            white01 = Color(0xFFFFFFFF),
            whiteShine = Color(0xFFFFFFFF),
            lightShine = Color(0xFFFCFCFD),
        ),
        icons = NusukIconsColors(
            illumination = Color(0xFF1A4C27),
            longing = Color(0xFF288A42),
            white = Color(0xFFFFFFFF),
            black = Color(0xFF070808),
            gray = Color(0xFF636669),
            background = Color(0xFFE4FBEA),
        ),
        alerts = NusukAlertsColors(
            surfaceInfo = Color(0xFFE4F1F8),
            surfaceSuccess = Color(0xFFF0FFF5),
            surfaceWarning = Color(0xFFFFF1E4),
            surfaceError = Color(0xFFFFF2F1),
            surfaceDefault = Color(0xFFF5F5F5),
            surfaceGold = Color(0xFFE4FBEA),
            surfaceSolidInfo = Color(0xFF118CE4),
            surfaceSolidSuccess = Color(0xFF5DB364),
            surfaceSolidWarning = Color(0xFFFF6D01),
            surfaceSolidError = Color(0xFFFF4136),
            surfaceSolidDefault = Color(0xFF303336),
            iconsDefault = Color(0xFF303336),
            iconsWhite = Color(0xFFFFFFFF),
            iconsGold = Color(0xFF1A4C27),
            surfaceSolidGold = Color(0xFF1A4C27),
            surfaceSolidWhite = Color(0xFFFFFFFF),
            iconsInfo = Color(0xFF118CE4),
            iconsSuccess = Color(0xFF5DB364),
            textDefault = Color(0xFF303336),
            textWhite = Color(0xFFFFFFFF),
            iconsWarning = Color(0xFFFF6D01),
            textGold = Color(0xFF1A4C27),
            iconsError = Color(0xFFFF4136),
            iconsReject = Color(0xFF171A1C),
            textInfo = Color(0xFF118CE4),
            textSuccess = Color(0xFF5DB364),
            textWarning = Color(0xFFFF6D01),
            textError = Color(0xFFFF4136),
            textReject = Color(0xFF171A1C),
        ),
        inputs = NusukInputsColors(
            surfaceDefault = Color(0xFFFFFFFF),
            surfaceDisabled = Color(0xFFE5E5E6),
            surfaceSuccess = Color(0xFFF0FFF5),
            surfaceError = Color(0xFFFFF2F1),
            iconsDefault = Color(0xFF171A1C),
            iconsDisabled = Color(0xFF97999B),
            iconsSuccess = Color(0xFF5DB364),
            iconsError = Color(0xFFFF4136),
            textDefault = Color(0xFF070808),
            textPlaceholder = Color(0xFF636669),
            textDisabled = Color(0xFF636669),
            textSuccess = Color(0xFF5DB364),
            textError = Color(0xFFFF4136),
        ),
        quran = NusukQuranColors(
            background = Color(0xFFFFFBF7),
            emerald = Color(0xFF1C664B),
            emeraldShade = Color(0xFFE4FBEA),
            crimson = Color(0xFFD50B3A),
            crimsonShade = Color(0xFFFCE4E9),
            saffron = Color(0xFFD99726),
            saffronShade = Color(0xFFFAF3E5),
            amethyst = Color(0xFF7F26D9),
            amethystShade = Color(0xFFF0E5FA),
            olive = Color(0xFF8B8714),
            oliveShade = Color(0xFFF5F5EA),
            teal = Color(0xFF1C424A),
            tealShade = Color(0xFFE9F4F7),
            umber = Color(0xFF573D1C),
            umberShade = Color(0xFFF8F1E7),
            lavender = Color(0xFFC3B6D7),
            citrine = Color(0xFFD2CF84),
            sky = Color(0xFFABC2D7),
            mint = Color(0xFFB2D4B6),
            peach = Color(0xFFF2A577),
            rose = Color(0xFFDDA8A5),
            sand = Color(0xFFDEB899),
            orchid = Color(0xFFDCB3CA),
            fog = Color(0xFFB5C0CD),
            stroke = Color(0x26070808),
        ),
        button = NusukButtonColors(
            primarySurface = Color(0xFF070808),
            primaryContent = Color(0xFFFFFFFF),
            secondarySurface = Color(0xB3F5F5F5),
            secondaryContent = Color(0xFF070808),
            ghostSurface = Color(0x00FFFFFF),
            ghostContent = Color(0xFF070808),
            fateSurface = Color(0x1AFF4136),
            fateContent = Color(0xFFFF4136),
            primarySurfaceOnDark = Color(0xFFFFFFFF),
            primaryContentOnDark = Color(0xFF070808),
            secondarySurfaceOnDark = Color(0xB3303336),
            secondaryContentOnDark = Color(0xFFFFFFFF),
            ghostContentOnDark = Color(0xFFFFFFFF),
            fateSurfaceOnDark = Color(0xFFFF4136),
            fateContentOnDark = Color(0xFFFFF2F1),
            greenSurface = Color(0xFF5DB364),
            greenContent = Color(0xFFFFFFFF),
            greenSecondarySurface = Color(0xFFF0FFF5),
            greenSecondaryContent = Color(0xFF5DB364),
            greenGhostContent = Color(0xFF5DB364),
        ),
        overlay = NusukOverlayColors(
            backdrop = Color(0x80000000),
            soft = Color(0x1F000000),
        ),
        brand = NusukBrandColors(
            quranicIllumination = Color(0xFFEAB355),
            kiswahReverence = Color(0xFF070808),
            domeOfProphet = Color(0xFF47874A),
            sereneLight = Color(0xFFFFFFFF),
            deepBlue = Color(0xFF16125F),
            sacredTeal = Color(0xFF3B8C87),
            sunsetLilac = Color(0xFF9C7BC9),
            desertRose = Color(0xFFC97B84),
            stoneSand = Color(0xFFB8AA96),
            earthTerracotta = Color(0xFFC1624C),
        ),
    )

    val GreenDark = NusukColors(
        neutral = NusukNeutralColors(
            ink10 = Color(0xFFFFFFFF),
            graphite09 = Color(0xFFF5F5F5),
            charcoal08 = Color(0xFFE5E5E6),
            slate07 = Color(0xFFCBCCCD),
            ash06 = Color(0xFF97999B),
            smoke05 = Color(0xFF636669),
            mist04 = Color(0xFF303336),
            pearl03 = Color(0xFF171A1C),
            ivory02 = Color(0xFF111315),
            white01 = Color(0xFF070808),
        ),
        text = NusukTextColors(
            heading = Color(0xFFFFFFFF),
            content = Color(0xFFFFFFFF),
            subtle = Color(0xFFCBCCCD),
            note = Color(0xFF97999B),
            link = Color(0xFF61D17D),
            inverse = Color(0xFFFFFFFF),
        ),
        surface = NusukSurfaceColors(
            illumination = Color(0xFF61D17D),
            longing = Color(0xFF1A4C27),
            shade1 = Color(0xFF2E9E4A),
            shade2 = Color(0xFF0A5C1F),
            shade3 = Color(0xFF125422),
            shade4 = Color(0xFF1A4D26),
            shade5 = Color(0xFF0D3F1A),
            shade6 = Color(0xFF083613),
            screenBk = Color(0xFF070808),
            ink10 = Color(0xFFFFFFFF),
            graphite09 = Color(0xFFF5F5F5),
            charcoal08 = Color(0xFFE5E5E6),
            slate07 = Color(0xFFCBCCCD),
            ash06 = Color(0xFF97999B),
            smoke05 = Color(0xFF636669),
            mist04 = Color(0xFF303336),
            pearl03 = Color(0xFF171A1C),
            ivory02 = Color(0xFF111315),
            white01 = Color(0xFF070808),
            whiteShine = Color(0xFF2B2E31),
            lightShine = Color(0xFF3E4247),
        ),
        icons = NusukIconsColors(
            illumination = Color(0xFF61D17D),
            longing = Color(0xFF1A4C27),
            white = Color(0xFFFFFFFF),
            black = Color(0xFFFFFFFF),
            gray = Color(0xFF97999B),
            background = Color(0xFF0D3F1A),
        ),
        alerts = NusukAlertsColors(
            surfaceInfo = Color(0xFF1F6699),
            surfaceSuccess = Color(0xFF198022),
            surfaceWarning = Color(0xFF3A2208),
            surfaceError = Color(0xFF992720),
            surfaceDefault = Color(0xFF111315),
            surfaceGold = Color(0xFF61D17D),
            surfaceSolidInfo = Color(0xFFE4F1F8),
            surfaceSolidSuccess = Color(0xFFECFDF3),
            surfaceSolidWarning = Color(0xFFF79009),
            surfaceSolidError = Color(0xFFFEF3F2),
            surfaceSolidDefault = Color(0xFFCBCCCD),
            iconsDefault = Color(0xFFCBCCCD),
            iconsWhite = Color(0xFF070808),
            iconsGold = Color(0xFF0D3F1A),
            surfaceSolidGold = Color(0xFF0D3F1A),
            surfaceSolidWhite = Color(0xFF070808),
            iconsInfo = Color(0xFFE4F1F8),
            iconsSuccess = Color(0xFFECFDF3),
            textDefault = Color(0xFFCBCCCD),
            textWhite = Color(0xFFFFFFFF),
            iconsWarning = Color(0xFFF79009),
            textGold = Color(0xFF0D3F1A),
            iconsError = Color(0xFFFEF3F2),
            iconsReject = Color(0xFFE5E5E6),
            textInfo = Color(0xFFE4F1F8),
            textSuccess = Color(0xFFECFDF3),
            textWarning = Color(0xFFF79009),
            textError = Color(0xFFFEF3F2),
            textReject = Color(0xFFE5E5E6),
        ),
        inputs = NusukInputsColors(
            surfaceDefault = Color(0xFF070808),
            surfaceDisabled = Color(0xFF171A1C),
            surfaceSuccess = Color(0xFF198022),
            surfaceError = Color(0xFF992720),
            iconsDefault = Color(0xFFE5E5E6),
            iconsDisabled = Color(0xFF636669),
            iconsSuccess = Color(0xFFECFDF3),
            iconsError = Color(0xFFFEF3F2),
            textDefault = Color(0xFFFFFFFF),
            textPlaceholder = Color(0xFF97999B),
            textDisabled = Color(0xFF97999B),
            textSuccess = Color(0xFFECFDF3),
            textError = Color(0xFFFEF3F2),
        ),
        quran = NusukQuranColors(
            background = Color(0xFFFFFBF7),
            emerald = Color(0xFF1C664B),
            emeraldShade = Color(0xFFE4FBEA),
            crimson = Color(0xFFD50B3A),
            crimsonShade = Color(0xFFFCE4E9),
            saffron = Color(0xFFD99726),
            saffronShade = Color(0xFFFAF3E5),
            amethyst = Color(0xFF7F26D9),
            amethystShade = Color(0xFFF0E5FA),
            olive = Color(0xFF8B8714),
            oliveShade = Color(0xFFF5F5EA),
            teal = Color(0xFF1C424A),
            tealShade = Color(0xFFE9F4F7),
            umber = Color(0xFF573D1C),
            umberShade = Color(0xFFF8F1E7),
            lavender = Color(0xFFC3B6D7),
            citrine = Color(0xFFD2CF84),
            sky = Color(0xFFABC2D7),
            mint = Color(0xFFB2D4B6),
            peach = Color(0xFFF2A577),
            rose = Color(0xFFDDA8A5),
            sand = Color(0xFFDEB899),
            orchid = Color(0xFFDCB3CA),
            fog = Color(0xFFB5C0CD),
            stroke = Color(0x26070808),
        ),
        button = NusukButtonColors(
            primarySurface = Color(0xFFFFFFFF),
            primaryContent = Color(0xFFFFFFFF),
            secondarySurface = Color(0xB3111315),
            secondaryContent = Color(0xFFFFFFFF),
            ghostSurface = Color(0x00FFFFFF),
            ghostContent = Color(0xFFFFFFFF),
            fateSurface = Color(0x1AFEF3F2),
            fateContent = Color(0xFFFEF3F2),
            primarySurfaceOnDark = Color(0xFF070808),
            primaryContentOnDark = Color(0xFFFFFFFF),
            secondarySurfaceOnDark = Color(0xB3CBCCCD),
            secondaryContentOnDark = Color(0xFFFFFFFF),
            ghostContentOnDark = Color(0xFFFFFFFF),
            fateSurfaceOnDark = Color(0xFFFEF3F2),
            fateContentOnDark = Color(0xFF992720),
            greenSurface = Color(0xFFECFDF3),
            greenContent = Color(0xFFFFFFFF),
            greenSecondarySurface = Color(0xFF198022),
            greenSecondaryContent = Color(0xFFECFDF3),
            greenGhostContent = Color(0xFFECFDF3),
        ),
        overlay = NusukOverlayColors(
            backdrop = Color(0x80000000),
            soft = Color(0x1F000000),
        ),
        brand = NusukBrandColors(
            quranicIllumination = Color(0xFFEAB355),
            kiswahReverence = Color(0xFF070808),
            domeOfProphet = Color(0xFF47874A),
            sereneLight = Color(0xFFFFFFFF),
            deepBlue = Color(0xFF16125F),
            sacredTeal = Color(0xFF3B8C87),
            sunsetLilac = Color(0xFF9C7BC9),
            desertRose = Color(0xFFC97B84),
            stoneSand = Color(0xFFB8AA96),
            earthTerracotta = Color(0xFFC1624C),
        ),
    )

    val LavenderLight = NusukColors(
        neutral = NusukNeutralColors(
            ink10 = Color(0xFF070808),
            graphite09 = Color(0xFF0B0D0E),
            charcoal08 = Color(0xFF171A1C),
            slate07 = Color(0xFF303336),
            ash06 = Color(0xFF636669),
            smoke05 = Color(0xFF97999B),
            mist04 = Color(0xFFCBCCCD),
            pearl03 = Color(0xFFE5E5E6),
            ivory02 = Color(0xFFF5F5F5),
            white01 = Color(0xFFFFFFFF),
        ),
        text = NusukTextColors(
            heading = Color(0xFF070808),
            content = Color(0xFF070808),
            subtle = Color(0xFF303336),
            note = Color(0xFF636669),
            link = Color(0xFF7F26D9),
            inverse = Color(0xFFFFFFFF),
        ),
        surface = NusukSurfaceColors(
            illumination = Color(0xFF7F26D9),
            longing = Color(0xFF993DF5),
            shade1 = Color(0xFFB26DF8),
            shade2 = Color(0xFFCC9EFA),
            shade3 = Color(0xFFCCADEB),
            shade4 = Color(0xFFE5D1FA),
            shade5 = Color(0xFFF2E9FB),
            shade6 = Color(0xFFFAF6FD),
            screenBk = Color(0xFFF1F3F4),
            ink10 = Color(0xFF070808),
            graphite09 = Color(0xFF0B0D0E),
            charcoal08 = Color(0xFF171A1C),
            slate07 = Color(0xFF303336),
            ash06 = Color(0xFF636669),
            smoke05 = Color(0xFF97999B),
            mist04 = Color(0xFFCBCCCD),
            pearl03 = Color(0xFFE5E5E6),
            ivory02 = Color(0xFFF5F5F5),
            white01 = Color(0xFFFFFFFF),
            whiteShine = Color(0xFFFFFFFF),
            lightShine = Color(0xFFFCFCFD),
        ),
        icons = NusukIconsColors(
            illumination = Color(0xFF7F26D9),
            longing = Color(0xFF993DF5),
            white = Color(0xFFFFFFFF),
            black = Color(0xFF070808),
            gray = Color(0xFF636669),
            background = Color(0xFFF2E9FB),
        ),
        alerts = NusukAlertsColors(
            surfaceInfo = Color(0xFFE4F1F8),
            surfaceSuccess = Color(0xFFF0FFF5),
            surfaceWarning = Color(0xFFFFF1E4),
            surfaceError = Color(0xFFFFF2F1),
            surfaceDefault = Color(0xFFF5F5F5),
            surfaceGold = Color(0xFFF2E9FB),
            surfaceSolidInfo = Color(0xFF118CE4),
            surfaceSolidSuccess = Color(0xFF5DB364),
            surfaceSolidWarning = Color(0xFFFF6D01),
            surfaceSolidError = Color(0xFFFF4136),
            surfaceSolidDefault = Color(0xFF303336),
            iconsDefault = Color(0xFF303336),
            iconsWhite = Color(0xFFFFFFFF),
            iconsGold = Color(0xFF7F26D9),
            surfaceSolidGold = Color(0xFF7F26D9),
            surfaceSolidWhite = Color(0xFFFFFFFF),
            iconsInfo = Color(0xFF118CE4),
            iconsSuccess = Color(0xFF5DB364),
            textDefault = Color(0xFF303336),
            textWhite = Color(0xFFFFFFFF),
            iconsWarning = Color(0xFFFF6D01),
            textGold = Color(0xFF7F26D9),
            iconsError = Color(0xFFFF4136),
            iconsReject = Color(0xFF171A1C),
            textInfo = Color(0xFF118CE4),
            textSuccess = Color(0xFF5DB364),
            textWarning = Color(0xFFFF6D01),
            textError = Color(0xFFFF4136),
            textReject = Color(0xFF171A1C),
        ),
        inputs = NusukInputsColors(
            surfaceDefault = Color(0xFFFFFFFF),
            surfaceDisabled = Color(0xFFCBCCCD),
            surfaceSuccess = Color(0xFFF0FFF5),
            surfaceError = Color(0xFFFFF2F1),
            iconsDefault = Color(0xFF171A1C),
            iconsDisabled = Color(0xFF97999B),
            iconsSuccess = Color(0xFF5DB364),
            iconsError = Color(0xFFFF4136),
            textDefault = Color(0xFF070808),
            textPlaceholder = Color(0xFF636669),
            textDisabled = Color(0xFF636669),
            textSuccess = Color(0xFF5DB364),
            textError = Color(0xFFFF4136),
        ),
        quran = NusukQuranColors(
            background = Color(0xFFFFFBF7),
            emerald = Color(0xFF1C664B),
            emeraldShade = Color(0xFFE4FBEA),
            crimson = Color(0xFFD50B3A),
            crimsonShade = Color(0xFFFCE4E9),
            saffron = Color(0xFFD99726),
            saffronShade = Color(0xFFFAF3E5),
            amethyst = Color(0xFF7F26D9),
            amethystShade = Color(0xFFF0E5FA),
            olive = Color(0xFF8B8714),
            oliveShade = Color(0xFFF5F5EA),
            teal = Color(0xFF1C424A),
            tealShade = Color(0xFFE9F4F7),
            umber = Color(0xFF573D1C),
            umberShade = Color(0xFFF8F1E7),
            lavender = Color(0xFFC3B6D7),
            citrine = Color(0xFFD2CF84),
            sky = Color(0xFFABC2D7),
            mint = Color(0xFFB2D4B6),
            peach = Color(0xFFF2A577),
            rose = Color(0xFFDDA8A5),
            sand = Color(0xFFDEB899),
            orchid = Color(0xFFDCB3CA),
            fog = Color(0xFFB5C0CD),
            stroke = Color(0x26070808),
        ),
        button = NusukButtonColors(
            primarySurface = Color(0xFF070808),
            primaryContent = Color(0xFFFFFFFF),
            secondarySurface = Color(0xB3F5F5F5),
            secondaryContent = Color(0xFF070808),
            ghostSurface = Color(0x00FFFFFF),
            ghostContent = Color(0xFF070808),
            fateSurface = Color(0x1AFF4136),
            fateContent = Color(0xFFFF4136),
            primarySurfaceOnDark = Color(0xFFFFFFFF),
            primaryContentOnDark = Color(0xFF070808),
            secondarySurfaceOnDark = Color(0xB3303336),
            secondaryContentOnDark = Color(0xFFFFFFFF),
            ghostContentOnDark = Color(0xFFFFFFFF),
            fateSurfaceOnDark = Color(0xFFFF4136),
            fateContentOnDark = Color(0xFFFFF2F1),
            greenSurface = Color(0xFF5DB364),
            greenContent = Color(0xFFFFFFFF),
            greenSecondarySurface = Color(0xFFF0FFF5),
            greenSecondaryContent = Color(0xFF5DB364),
            greenGhostContent = Color(0xFF5DB364),
        ),
        overlay = NusukOverlayColors(
            backdrop = Color(0x80000000),
            soft = Color(0x1F000000),
        ),
        brand = NusukBrandColors(
            quranicIllumination = Color(0xFFEAB355),
            kiswahReverence = Color(0xFF070808),
            domeOfProphet = Color(0xFF47874A),
            sereneLight = Color(0xFFFFFFFF),
            deepBlue = Color(0xFF16125F),
            sacredTeal = Color(0xFF3B8C87),
            sunsetLilac = Color(0xFF9C7BC9),
            desertRose = Color(0xFFC97B84),
            stoneSand = Color(0xFFB8AA96),
            earthTerracotta = Color(0xFFC1624C),
        ),
    )

    val LavenderDark = NusukColors(
        neutral = NusukNeutralColors(
            ink10 = Color(0xFFFFFFFF),
            graphite09 = Color(0xFFF5F5F5),
            charcoal08 = Color(0xFFE5E5E6),
            slate07 = Color(0xFFCBCCCD),
            ash06 = Color(0xFF97999B),
            smoke05 = Color(0xFF636669),
            mist04 = Color(0xFF303336),
            pearl03 = Color(0xFF171A1C),
            ivory02 = Color(0xFF111315),
            white01 = Color(0xFF070808),
        ),
        text = NusukTextColors(
            heading = Color(0xFFFFFFFF),
            content = Color(0xFFFFFFFF),
            subtle = Color(0xFFCBCCCD),
            note = Color(0xFF97999B),
            link = Color(0xFFB26DF8),
            inverse = Color(0xFFFFFFFF),
        ),
        surface = NusukSurfaceColors(
            illumination = Color(0xFFB26DF8),
            longing = Color(0xFF7F26D9),
            shade1 = Color(0xFF4D0792),
            shade2 = Color(0xFF330561),
            shade3 = Color(0xFF331452),
            shade4 = Color(0xFF330A5C),
            shade5 = Color(0xFF260B41),
            shade6 = Color(0xFF1F0934),
            screenBk = Color(0xFF070808),
            ink10 = Color(0xFFFFFFFF),
            graphite09 = Color(0xFFF5F5F5),
            charcoal08 = Color(0xFFE5E5E6),
            slate07 = Color(0xFFCBCCCD),
            ash06 = Color(0xFF97999B),
            smoke05 = Color(0xFF636669),
            mist04 = Color(0xFF303336),
            pearl03 = Color(0xFF171A1C),
            ivory02 = Color(0xFF111315),
            white01 = Color(0xFF070808),
            whiteShine = Color(0xFF2B2E31),
            lightShine = Color(0xFF3E4247),
        ),
        icons = NusukIconsColors(
            illumination = Color(0xFFB26DF8),
            longing = Color(0xFF7F26D9),
            white = Color(0xFFFFFFFF),
            black = Color(0xFFFFFFFF),
            gray = Color(0xFF97999B),
            background = Color(0xFF260B41),
        ),
        alerts = NusukAlertsColors(
            surfaceInfo = Color(0xFF1F6699),
            surfaceSuccess = Color(0xFF198022),
            surfaceWarning = Color(0xFF3A2208),
            surfaceError = Color(0xFF992720),
            surfaceDefault = Color(0xFF111315),
            surfaceGold = Color(0xFFB26DF8),
            surfaceSolidInfo = Color(0xFFE4F1F8),
            surfaceSolidSuccess = Color(0xFFECFDF3),
            surfaceSolidWarning = Color(0xFFF79009),
            surfaceSolidError = Color(0xFFFEF3F2),
            surfaceSolidDefault = Color(0xFFCBCCCD),
            iconsDefault = Color(0xFFCBCCCD),
            iconsWhite = Color(0xFF070808),
            iconsGold = Color(0xFF260B41),
            surfaceSolidGold = Color(0xFF260B41),
            surfaceSolidWhite = Color(0xFF070808),
            iconsInfo = Color(0xFFE4F1F8),
            iconsSuccess = Color(0xFFECFDF3),
            textDefault = Color(0xFFCBCCCD),
            textWhite = Color(0xFFFFFFFF),
            iconsWarning = Color(0xFFF79009),
            textGold = Color(0xFF260B41),
            iconsError = Color(0xFFFEF3F2),
            iconsReject = Color(0xFFE5E5E6),
            textInfo = Color(0xFFE4F1F8),
            textSuccess = Color(0xFFECFDF3),
            textWarning = Color(0xFFF79009),
            textError = Color(0xFFFEF3F2),
            textReject = Color(0xFFE5E5E6),
        ),
        inputs = NusukInputsColors(
            surfaceDefault = Color(0xFF070808),
            surfaceDisabled = Color(0xFF303336),
            surfaceSuccess = Color(0xFF198022),
            surfaceError = Color(0xFF992720),
            iconsDefault = Color(0xFFE5E5E6),
            iconsDisabled = Color(0xFF636669),
            iconsSuccess = Color(0xFFECFDF3),
            iconsError = Color(0xFFFEF3F2),
            textDefault = Color(0xFFFFFFFF),
            textPlaceholder = Color(0xFF97999B),
            textDisabled = Color(0xFF97999B),
            textSuccess = Color(0xFFECFDF3),
            textError = Color(0xFFFEF3F2),
        ),
        quran = NusukQuranColors(
            background = Color(0xFFFFFBF7),
            emerald = Color(0xFF1C664B),
            emeraldShade = Color(0xFFE4FBEA),
            crimson = Color(0xFFD50B3A),
            crimsonShade = Color(0xFFFCE4E9),
            saffron = Color(0xFFD99726),
            saffronShade = Color(0xFFFAF3E5),
            amethyst = Color(0xFF7F26D9),
            amethystShade = Color(0xFFF0E5FA),
            olive = Color(0xFF8B8714),
            oliveShade = Color(0xFFF5F5EA),
            teal = Color(0xFF1C424A),
            tealShade = Color(0xFFE9F4F7),
            umber = Color(0xFF573D1C),
            umberShade = Color(0xFFF8F1E7),
            lavender = Color(0xFFC3B6D7),
            citrine = Color(0xFFD2CF84),
            sky = Color(0xFFABC2D7),
            mint = Color(0xFFB2D4B6),
            peach = Color(0xFFF2A577),
            rose = Color(0xFFDDA8A5),
            sand = Color(0xFFDEB899),
            orchid = Color(0xFFDCB3CA),
            fog = Color(0xFFB5C0CD),
            stroke = Color(0x26070808),
        ),
        button = NusukButtonColors(
            primarySurface = Color(0xFFFFFFFF),
            primaryContent = Color(0xFFFFFFFF),
            secondarySurface = Color(0xB3111315),
            secondaryContent = Color(0xFFFFFFFF),
            ghostSurface = Color(0x00FFFFFF),
            ghostContent = Color(0xFFFFFFFF),
            fateSurface = Color(0x1AFEF3F2),
            fateContent = Color(0xFFFEF3F2),
            primarySurfaceOnDark = Color(0xFF070808),
            primaryContentOnDark = Color(0xFFFFFFFF),
            secondarySurfaceOnDark = Color(0xB3CBCCCD),
            secondaryContentOnDark = Color(0xFFFFFFFF),
            ghostContentOnDark = Color(0xFFFFFFFF),
            fateSurfaceOnDark = Color(0xFFFEF3F2),
            fateContentOnDark = Color(0xFF992720),
            greenSurface = Color(0xFFECFDF3),
            greenContent = Color(0xFFFFFFFF),
            greenSecondarySurface = Color(0xFF198022),
            greenSecondaryContent = Color(0xFFECFDF3),
            greenGhostContent = Color(0xFFECFDF3),
        ),
        overlay = NusukOverlayColors(
            backdrop = Color(0x80000000),
            soft = Color(0x1F000000),
        ),
        brand = NusukBrandColors(
            quranicIllumination = Color(0xFFEAB355),
            kiswahReverence = Color(0xFF070808),
            domeOfProphet = Color(0xFF47874A),
            sereneLight = Color(0xFFFFFFFF),
            deepBlue = Color(0xFF16125F),
            sacredTeal = Color(0xFF3B8C87),
            sunsetLilac = Color(0xFF9C7BC9),
            desertRose = Color(0xFFC97B84),
            stoneSand = Color(0xFFB8AA96),
            earthTerracotta = Color(0xFFC1624C),
        ),
    )

    fun resolve(theme: NusukBrandTheme, dark: Boolean): NusukColors = when (theme) {
        NusukBrandTheme.Gold -> if (dark) GoldDark else GoldLight
        NusukBrandTheme.Green -> if (dark) GreenDark else GreenLight
        NusukBrandTheme.Lavender -> if (dark) LavenderDark else LavenderLight
    }
}

val LocalNusukColors = staticCompositionLocalOf { NusukPalettes.GoldLight }
