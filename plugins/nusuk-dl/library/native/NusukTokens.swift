// NusukTokens.swift
// Generated from tokens.json 3.11. Do not edit: change Figma, then the tokens, then run the release.
// Units: 1 Figma px = 1 pt. Lay out with leading and trailing, never left and right.
// Shadows and Glass BG: DESIGN.md, module M8. Fonts: IBM Plex Sans Arabic, Light and Regular.

import SwiftUI

public enum NusukBrandTheme: String, CaseIterable, Sendable {
    case gold, green, lavender
}

public enum NusukSpace {
    public static let xxs: CGFloat = 4  // space-xxs
    public static let xs: CGFloat = 8  // space-xs
    public static let sm: CGFloat = 12  // space-sm
    public static let nr: CGFloat = 18  // space-nr
    public static let md: CGFloat = 20  // space-md
    public static let lr: CGFloat = 26  // space-lr
    public static let xl: CGFloat = 32  // space-xl
    public static let xxl: CGFloat = 48  // space-xxl
}

public enum NusukDimension {
    public static let xxs: CGFloat = 8  // dimension-xxs
    public static let xs: CGFloat = 12  // dimension-xs
    public static let sm: CGFloat = 16  // dimension-sm
    public static let nr: CGFloat = 20  // dimension-nr
    public static let md: CGFloat = 24  // dimension-md
    public static let lr: CGFloat = 38  // dimension-lr
    public static let xl: CGFloat = 54  // dimension-xl
}

public enum NusukButton {
    public static let heightXs: CGFloat = 30  // button-height-xs
    public static let heightSm: CGFloat = 38  // button-height-sm
    public static let heightMd: CGFloat = 44  // button-height-md
    public static let heightLr: CGFloat = 48  // button-height-lr
    public static let paddingXs: CGFloat = 14  // button-padding-xs
    public static let paddingSm: CGFloat = 18  // button-padding-sm
    public static let paddingMd: CGFloat = 22  // button-padding-md
    public static let paddingLr: CGFloat = 28  // button-padding-lr
    public static let paddingIconXs: CGFloat = 12  // button-padding-icon-xs
    public static let paddingIconSm: CGFloat = 16  // button-padding-icon-sm
    public static let paddingIconMd: CGFloat = 20  // button-padding-icon-md
    public static let paddingIconLr: CGFloat = 24  // button-padding-icon-lr
    public static let gapXs: CGFloat = 4  // button-gap-xs
    public static let gap: CGFloat = 8  // button-gap
    public static let iconXs: CGFloat = 16  // button-icon-xs
    public static let iconSm: CGFloat = 18  // button-icon-sm
    public static let iconMd: CGFloat = 20  // button-icon-md
    public static let iconOnlyXs: CGFloat = 18  // button-icon-only-xs
    public static let iconOnlySm: CGFloat = 24  // button-icon-only-sm
    public static let iconOnlyMd: CGFloat = 26  // button-icon-only-md
}

public enum NusukTag {
    public static let heightSm: CGFloat = 24  // tag-height-sm
    public static let heightLr: CGFloat = 32  // tag-height-lr
}

public enum NusukChip {
    public static let heightXs: CGFloat = 18  // chip-height-xs
    public static let heightSm: CGFloat = 20  // chip-height-sm
    public static let heightMd: CGFloat = 24  // chip-height-md
    public static let heightLr: CGFloat = 28  // chip-height-lr
    public static let paddingXs: CGFloat = 8  // chip-padding-xs
    public static let paddingSm: CGFloat = 10  // chip-padding-sm
    public static let paddingMd: CGFloat = 12  // chip-padding-md
    public static let paddingLr: CGFloat = 14  // chip-padding-lr
    public static let paddingIconXs: CGFloat = 6  // chip-padding-icon-xs
    public static let paddingIconSm: CGFloat = 8  // chip-padding-icon-sm
    public static let paddingIconMd: CGFloat = 10  // chip-padding-icon-md
    public static let paddingIconLr: CGFloat = 12  // chip-padding-icon-lr
    public static let iconXs: CGFloat = 12  // chip-icon-xs
    public static let iconSm: CGFloat = 14  // chip-icon-sm
    public static let iconMd: CGFloat = 14  // chip-icon-md
    public static let iconLr: CGFloat = 16  // chip-icon-lr
    public static let gapXs: CGFloat = 4  // chip-gap-xs
    public static let gapSm: CGFloat = 4  // chip-gap-sm
    public static let gapMd: CGFloat = 4  // chip-gap-md
    public static let gapLr: CGFloat = 6  // chip-gap-lr
    public static let fontXs: CGFloat = 10  // chip-font-xs
    public static let fontSm: CGFloat = 12  // chip-font-sm
    public static let fontMd: CGFloat = 12  // chip-font-md
    public static let fontLr: CGFloat = 14  // chip-font-lr
}

public enum NusukControl {
    public static let iconSm: CGFloat = 12  // control-icon-sm
    public static let iconMd: CGFloat = 12  // control-icon-md
    public static let iconLr: CGFloat = 18  // control-icon-lr
    public static let checkboxSm: CGFloat = 18  // control-checkbox-sm
    public static let checkboxMd: CGFloat = 18  // control-checkbox-md
    public static let checkboxLr: CGFloat = 24  // control-checkbox-lr
    public static let radioSm: CGFloat = 18  // control-radio-sm
    public static let radioMd: CGFloat = 18  // control-radio-md
    public static let radioLr: CGFloat = 24  // control-radio-lr
    public static let toggleSm: CGFloat = 32  // control-toggle-sm
    public static let toggleMd: CGFloat = 42  // control-toggle-md
    public static let toggleLr: CGFloat = 54  // control-toggle-lr
    public static let toggleIconSm: CGFloat = 16  // control-toggle-icon-sm
    public static let toggleIconMd: CGFloat = 24  // control-toggle-icon-md
    public static let toggleIconLr: CGFloat = 32  // control-toggle-icon-lr
    public static let gapSm: CGFloat = 8  // control-gap-sm
    public static let gapMd: CGFloat = 12  // control-gap-md
    public static let gapLr: CGFloat = 12  // control-gap-lr
    public static let textSm: CGFloat = 14  // control-text-sm
    public static let textMd: CGFloat = 16  // control-text-md
    public static let textLr: CGFloat = 18  // control-text-lr
}

public enum NusukRadius {
    public static let xxs: CGFloat = 4  // radius-xxs
    public static let xs: CGFloat = 8  // radius-xs
    public static let s: CGFloat = 14  // radius-s
    public static let md: CGFloat = 18  // radius-md
    public static let xl: CGFloat = 22  // radius-xl
    public static let xxl: CGFloat = 42  // radius-xxl
    public static let ios: CGFloat = 54  // radius-ios
    public static let full: CGFloat = 1000  // radius-full. A capsule: use Capsule(), not this number
}

public enum NusukBorder {
    public static let thin: CGFloat = 1  // border-thin
    public static let medium: CGFloat = 1.5  // border-medium
    public static let thick: CGFloat = 2  // border-thick
    public static let none: CGFloat = 0  // border-none
}

public enum NusukBlur {
    public static let sm: CGFloat = 2  // blur-sm
    public static let md: CGFloat = 10  // blur-md
    public static let lr: CGFloat = 20  // blur-lr
    public static let frost: CGFloat = 6  // blur-frost
}

public enum NusukScale {
    public static let s02: CGFloat = 2  // scale-02
    public static let s04: CGFloat = 4  // scale-04
    public static let s06: CGFloat = 6  // scale-06
    public static let s08: CGFloat = 8  // scale-08
    public static let s10: CGFloat = 10  // scale-10
    public static let s12: CGFloat = 12  // scale-12
    public static let s14: CGFloat = 14  // scale-14
    public static let s16: CGFloat = 16  // scale-16
    public static let s18: CGFloat = 18  // scale-18
    public static let s20: CGFloat = 20  // scale-20
    public static let s22: CGFloat = 22  // scale-22
    public static let s24: CGFloat = 24  // scale-24
    public static let s26: CGFloat = 26  // scale-26
    public static let s28: CGFloat = 28  // scale-28
    public static let s30: CGFloat = 30  // scale-30
    public static let s32: CGFloat = 32  // scale-32
    public static let s34: CGFloat = 34  // scale-34
    public static let s36: CGFloat = 36  // scale-36
    public static let s38: CGFloat = 38  // scale-38
    public static let s42: CGFloat = 42  // scale-42
    public static let s44: CGFloat = 44  // scale-44
    public static let s46: CGFloat = 46  // scale-46
    public static let s48: CGFloat = 48  // scale-48
    public static let s50: CGFloat = 50  // scale-50
    public static let s54: CGFloat = 54  // scale-54
    public static let s64: CGFloat = 64  // scale-64
    public static let s96: CGFloat = 96  // scale-96
    public static let s112: CGFloat = 112  // scale-112
    public static let s128: CGFloat = 128  // scale-128
    public static let s160: CGFloat = 160  // scale-160
}

public enum NusukOpacity {
    public static let subtle: Double = 0.04  // opacity-subtle
    public static let hover: Double = 0.08  // opacity-hover
    public static let focus: Double = 0.12  // opacity-focus
    public static let disabled: Double = 0.38  // opacity-disabled
    public static let medium: Double = 0.5  // opacity-medium
    public static let strong: Double = 0.9  // opacity-strong
    public static let none: Double = 0  // opacity-none
}

/// Values that change with the layout mode (Figma: Foundation > Layout). iOS uses phone and tablet
/// (tablet when the horizontal size class is regular); wide is for the web and large Android windows.
public struct NusukLayout: Sendable {
    public let spaceXxs: CGFloat  // space-xxs
    public let spaceSm: CGFloat  // space-sm
    public let spaceNr: CGFloat  // space-nr
    public let spaceMd: CGFloat  // space-md
    public let spaceLr: CGFloat  // space-lr
    public let spaceXl: CGFloat  // space-xl
    public let spaceXxl: CGFloat  // space-xxl
    public let dimensionXxs: CGFloat  // dimension-xxs
    public let buttonHeightXs: CGFloat  // button-height-xs
    public let buttonHeightMd: CGFloat  // button-height-md
    public let buttonHeightLr: CGFloat  // button-height-lr
    public static let phone = NusukLayout(spaceXxs: 4, spaceSm: 12, spaceNr: 18, spaceMd: 20, spaceLr: 26, spaceXl: 32, spaceXxl: 48, dimensionXxs: 8, buttonHeightXs: 30, buttonHeightMd: 44, buttonHeightLr: 48)
    public static let tablet = NusukLayout(spaceXxs: 8, spaceSm: 16, spaceNr: 20, spaceMd: 24, spaceLr: 32, spaceXl: 48, spaceXxl: 48, dimensionXxs: 12, buttonHeightXs: 30, buttonHeightMd: 44, buttonHeightLr: 48)
    public static let wide = NusukLayout(spaceXxs: 8, spaceSm: 16, spaceNr: 20, spaceMd: 24, spaceLr: 32, spaceXl: 48, spaceXxl: 64, dimensionXxs: 12, buttonHeightXs: 26, buttonHeightMd: 48, buttonHeightLr: 54)
}

public enum NusukFontWeight: Sendable {
    case light, regular
    public var font: Font.Weight { self == .light ? .light : .regular }
}

public struct NusukTextStyle: Sendable {
    public let size: CGFloat
    public let lineHeight: CGFloat
    public let weight: NusukFontWeight
}

public enum NusukType {
    public static let heroLight = NusukTextStyle(size: 48, lineHeight: 61.44, weight: .light)  // hero-light
    public static let heroRegular = NusukTextStyle(size: 48, lineHeight: 61.44, weight: .regular)  // hero-regular
    public static let display1Light = NusukTextStyle(size: 32, lineHeight: 40.96, weight: .light)  // display-1-light
    public static let display1Regular = NusukTextStyle(size: 32, lineHeight: 40.96, weight: .regular)  // display-1-regular
    public static let display2Light = NusukTextStyle(size: 28, lineHeight: 35.84, weight: .light)  // display-2-light
    public static let display2Regular = NusukTextStyle(size: 28, lineHeight: 35.84, weight: .regular)  // display-2-regular
    public static let headline1Light = NusukTextStyle(size: 24, lineHeight: 30.72, weight: .light)  // headline-1-light
    public static let headline1Regular = NusukTextStyle(size: 24, lineHeight: 30.72, weight: .regular)  // headline-1-regular
    public static let headline2Light = NusukTextStyle(size: 20, lineHeight: 25.6, weight: .light)  // headline-2-light
    public static let headline2Regular = NusukTextStyle(size: 20, lineHeight: 25.6, weight: .regular)  // headline-2-regular
    public static let body1Light = NusukTextStyle(size: 18, lineHeight: 23.04, weight: .light)  // body-1-light
    public static let body1Regular = NusukTextStyle(size: 18, lineHeight: 23.04, weight: .regular)  // body-1-regular
    public static let body2Light = NusukTextStyle(size: 16, lineHeight: 20.48, weight: .light)  // body-2-light
    public static let body2Regular = NusukTextStyle(size: 16, lineHeight: 20.48, weight: .regular)  // body-2-regular
    public static let notes1Light = NusukTextStyle(size: 14, lineHeight: 17.92, weight: .light)  // notes-1-light
    public static let notes1Regular = NusukTextStyle(size: 14, lineHeight: 17.92, weight: .regular)  // notes-1-regular
    public static let notes2Light = NusukTextStyle(size: 12, lineHeight: 15.36, weight: .light)  // notes-2-light
    public static let notes2Regular = NusukTextStyle(size: 12, lineHeight: 15.36, weight: .regular)  // notes-2-regular
}

public struct NusukColors: Sendable {
    public struct NeutralColors: Sendable {
        public var ink10 = Color.clear  // neutral-10-ink
        public var graphite09 = Color.clear  // neutral-09-graphite
        public var charcoal08 = Color.clear  // neutral-08-charcoal
        public var slate07 = Color.clear  // neutral-07-slate
        public var ash06 = Color.clear  // neutral-06-ash
        public var smoke05 = Color.clear  // neutral-05-smoke
        public var mist04 = Color.clear  // neutral-04-mist
        public var pearl03 = Color.clear  // neutral-03-pearl
        public var ivory02 = Color.clear  // neutral-02-ivory
        public var white01 = Color.clear  // neutral-01-white
        public init() {}
    }
    public struct TextColors: Sendable {
        public var heading = Color.clear  // text-heading
        public var content = Color.clear  // text-content
        public var subtle = Color.clear  // text-subtle
        public var note = Color.clear  // text-note
        public var link = Color.clear  // text-link
        public var inverse = Color.clear  // text-inverse
        public init() {}
    }
    public struct SurfaceColors: Sendable {
        public var illumination = Color.clear  // surface-illumination
        public var longing = Color.clear  // surface-longing
        public var shade1 = Color.clear  // surface-shade-1
        public var shade2 = Color.clear  // surface-shade-2
        public var shade3 = Color.clear  // surface-shade-3
        public var shade4 = Color.clear  // surface-shade-4
        public var shade5 = Color.clear  // surface-shade-5
        public var shade6 = Color.clear  // surface-shade-6
        public var screenBk = Color.clear  // surface-screen-bk
        public var ink10 = Color.clear  // surface-10-ink
        public var graphite09 = Color.clear  // surface-09-graphite
        public var charcoal08 = Color.clear  // surface-08-charcoal
        public var slate07 = Color.clear  // surface-07-slate
        public var ash06 = Color.clear  // surface-06-ash
        public var smoke05 = Color.clear  // surface-05-smoke
        public var mist04 = Color.clear  // surface-04-mist
        public var pearl03 = Color.clear  // surface-03-pearl
        public var ivory02 = Color.clear  // surface-02-ivory
        public var white01 = Color.clear  // surface-01-white
        public var whiteShine = Color.clear  // surface-white-shine
        public var lightShine = Color.clear  // surface-light-shine
        public init() {}
    }
    public struct IconsColors: Sendable {
        public var illumination = Color.clear  // icons-illumination
        public var longing = Color.clear  // icons-longing
        public var white = Color.clear  // icons-white
        public var black = Color.clear  // icons-black
        public var gray = Color.clear  // icons-gray
        public var background = Color.clear  // icons-background
        public init() {}
    }
    public struct AlertsColors: Sendable {
        public var surfaceInfo = Color.clear  // alerts-surface-info
        public var surfaceSuccess = Color.clear  // alerts-surface-success
        public var surfaceWarning = Color.clear  // alerts-surface-warning
        public var surfaceError = Color.clear  // alerts-surface-error
        public var surfaceDefault = Color.clear  // alerts-surface-default
        public var surfaceGold = Color.clear  // alerts-surface-gold
        public var surfaceSolidInfo = Color.clear  // alerts-surface-solid-info
        public var surfaceSolidSuccess = Color.clear  // alerts-surface-solid-success
        public var surfaceSolidWarning = Color.clear  // alerts-surface-solid-warning
        public var surfaceSolidError = Color.clear  // alerts-surface-solid-error
        public var surfaceSolidDefault = Color.clear  // alerts-surface-solid-default
        public var iconsDefault = Color.clear  // alerts-icons-default
        public var iconsWhite = Color.clear  // alerts-icons-white
        public var iconsGold = Color.clear  // alerts-icons-gold
        public var surfaceSolidGold = Color.clear  // alerts-surface-solid-gold
        public var surfaceSolidWhite = Color.clear  // alerts-surface-solid-white
        public var iconsInfo = Color.clear  // alerts-icons-info
        public var iconsSuccess = Color.clear  // alerts-icons-success
        public var textDefault = Color.clear  // alerts-text-default
        public var textWhite = Color.clear  // alerts-text-white
        public var iconsWarning = Color.clear  // alerts-icons-warning
        public var textGold = Color.clear  // alerts-text-gold
        public var iconsError = Color.clear  // alerts-icons-error
        public var iconsReject = Color.clear  // alerts-icons-reject
        public var textInfo = Color.clear  // alerts-text-info
        public var textSuccess = Color.clear  // alerts-text-success
        public var textWarning = Color.clear  // alerts-text-warning
        public var textError = Color.clear  // alerts-text-error
        public var textReject = Color.clear  // alerts-text-reject
        public init() {}
    }
    public struct InputsColors: Sendable {
        public var surfaceDefault = Color.clear  // inputs-surface-default
        public var surfaceDisabled = Color.clear  // inputs-surface-disabled
        public var surfaceSuccess = Color.clear  // inputs-surface-success
        public var surfaceError = Color.clear  // inputs-surface-error
        public var iconsDefault = Color.clear  // inputs-icons-default
        public var iconsDisabled = Color.clear  // inputs-icons-disabled
        public var iconsSuccess = Color.clear  // inputs-icons-success
        public var iconsError = Color.clear  // inputs-icons-error
        public var textDefault = Color.clear  // inputs-text-default
        public var textPlaceholder = Color.clear  // inputs-text-placeholder
        public var textDisabled = Color.clear  // inputs-text-disabled
        public var textSuccess = Color.clear  // inputs-text-success
        public var textError = Color.clear  // inputs-text-error
        public init() {}
    }
    public struct QuranColors: Sendable {
        public var background = Color.clear  // quran-background
        public var emerald = Color.clear  // quran-emerald
        public var emeraldShade = Color.clear  // quran-emerald-shade
        public var crimson = Color.clear  // quran-crimson
        public var crimsonShade = Color.clear  // quran-crimson-shade
        public var saffron = Color.clear  // quran-saffron
        public var saffronShade = Color.clear  // quran-saffron-shade
        public var amethyst = Color.clear  // quran-amethyst
        public var amethystShade = Color.clear  // quran-amethyst-shade
        public var olive = Color.clear  // quran-olive
        public var oliveShade = Color.clear  // quran-olive-shade
        public var teal = Color.clear  // quran-teal
        public var tealShade = Color.clear  // quran-teal-shade
        public var umber = Color.clear  // quran-umber
        public var umberShade = Color.clear  // quran-umber-shade
        public var lavender = Color.clear  // quran-lavender
        public var citrine = Color.clear  // quran-citrine
        public var sky = Color.clear  // quran-sky
        public var mint = Color.clear  // quran-mint
        public var peach = Color.clear  // quran-peach
        public var rose = Color.clear  // quran-rose
        public var sand = Color.clear  // quran-sand
        public var orchid = Color.clear  // quran-orchid
        public var fog = Color.clear  // quran-fog
        public var stroke = Color.clear  // quran-stroke
        public init() {}
    }
    public struct ButtonColors: Sendable {
        public var primarySurface = Color.clear  // button-primary-surface
        public var primaryContent = Color.clear  // button-primary-content
        public var secondarySurface = Color.clear  // button-secondary-surface
        public var secondaryContent = Color.clear  // button-secondary-content
        public var ghostSurface = Color.clear  // button-ghost-surface
        public var ghostContent = Color.clear  // button-ghost-content
        public var fateSurface = Color.clear  // button-fate-surface
        public var fateContent = Color.clear  // button-fate-content
        public var primarySurfaceOnDark = Color.clear  // button-primary-surface-on-dark
        public var primaryContentOnDark = Color.clear  // button-primary-content-on-dark
        public var secondarySurfaceOnDark = Color.clear  // button-secondary-surface-on-dark
        public var secondaryContentOnDark = Color.clear  // button-secondary-content-on-dark
        public var ghostContentOnDark = Color.clear  // button-ghost-content-on-dark
        public var fateSurfaceOnDark = Color.clear  // button-fate-surface-on-dark
        public var fateContentOnDark = Color.clear  // button-fate-content-on-dark
        public var greenSurface = Color.clear  // button-green-surface
        public var greenContent = Color.clear  // button-green-content
        public var greenSecondarySurface = Color.clear  // button-green-secondary-surface
        public var greenSecondaryContent = Color.clear  // button-green-secondary-content
        public var greenGhostContent = Color.clear  // button-green-ghost-content
        public init() {}
    }
    public struct OverlayColors: Sendable {
        public var backdrop = Color.clear  // overlay-backdrop
        public var soft = Color.clear  // overlay-soft
        public init() {}
    }
    public struct BrandColors: Sendable {
        public var quranicIllumination = Color.clear  // brand-quranic-illumination
        public var kiswahReverence = Color.clear  // brand-kiswah-reverence
        public var domeOfProphet = Color.clear  // brand-dome-of-prophet
        public var sereneLight = Color.clear  // brand-serene-light
        public var deepBlue = Color.clear  // brand-deep-blue
        public var sacredTeal = Color.clear  // brand-sacred-teal
        public var sunsetLilac = Color.clear  // brand-sunset-lilac
        public var desertRose = Color.clear  // brand-desert-rose
        public var stoneSand = Color.clear  // brand-stone-sand
        public var earthTerracotta = Color.clear  // brand-earth-terracotta
        public init() {}
    }
    public var neutral = NeutralColors()
    public var text = TextColors()
    public var surface = SurfaceColors()
    public var icons = IconsColors()
    public var alerts = AlertsColors()
    public var inputs = InputsColors()
    public var quran = QuranColors()
    public var button = ButtonColors()
    public var overlay = OverlayColors()
    public var brand = BrandColors()
    public init() {}

    public static func resolve(_ theme: NusukBrandTheme, dark: Bool) -> NusukColors {
        switch theme {
        case .gold: return dark ? goldDark : goldLight
        case .green: return dark ? greenDark : greenLight
        case .lavender: return dark ? lavenderDark : lavenderLight
        }
    }

    public static let goldLight: NusukColors = {
        var c = NusukColors()
        c.neutral.ink10 = nusukHex(0x070808FF)
        c.neutral.graphite09 = nusukHex(0x0B0D0EFF)
        c.neutral.charcoal08 = nusukHex(0x171A1CFF)
        c.neutral.slate07 = nusukHex(0x303336FF)
        c.neutral.ash06 = nusukHex(0x636669FF)
        c.neutral.smoke05 = nusukHex(0x97999BFF)
        c.neutral.mist04 = nusukHex(0xCBCCCDFF)
        c.neutral.pearl03 = nusukHex(0xE5E5E6FF)
        c.neutral.ivory02 = nusukHex(0xF5F5F5FF)
        c.neutral.white01 = nusukHex(0xFFFFFFFF)
        c.text.heading = nusukHex(0x070808FF)
        c.text.content = nusukHex(0x070808FF)
        c.text.subtle = nusukHex(0x303336FF)
        c.text.note = nusukHex(0x636669FF)
        c.text.link = nusukHex(0xD99726FF)
        c.text.inverse = nusukHex(0xFFFFFFFF)
        c.surface.illumination = nusukHex(0xD99726FF)
        c.surface.longing = nusukHex(0xF5B13DFF)
        c.surface.shade1 = nusukHex(0xF7C56EFF)
        c.surface.shade2 = nusukHex(0xFAD89EFF)
        c.surface.shade3 = nusukHex(0xEBD4ADFF)
        c.surface.shade4 = nusukHex(0xFAEBD1FF)
        c.surface.shade5 = nusukHex(0xFBF5E9FF)
        c.surface.shade6 = nusukHex(0xFDFBF6FF)
        c.surface.screenBk = nusukHex(0xF1F3F4FF)
        c.surface.ink10 = nusukHex(0x070808FF)
        c.surface.graphite09 = nusukHex(0x0B0D0EFF)
        c.surface.charcoal08 = nusukHex(0x171A1CFF)
        c.surface.slate07 = nusukHex(0x303336FF)
        c.surface.ash06 = nusukHex(0x636669FF)
        c.surface.smoke05 = nusukHex(0x97999BFF)
        c.surface.mist04 = nusukHex(0xCBCCCDFF)
        c.surface.pearl03 = nusukHex(0xE5E5E6FF)
        c.surface.ivory02 = nusukHex(0xF5F5F5FF)
        c.surface.white01 = nusukHex(0xFFFFFFFF)
        c.surface.whiteShine = nusukHex(0xFFFFFFFF)
        c.surface.lightShine = nusukHex(0xFCFCFDFF)
        c.icons.illumination = nusukHex(0xD99726FF)
        c.icons.longing = nusukHex(0xF5B13DFF)
        c.icons.white = nusukHex(0xFFFFFFFF)
        c.icons.black = nusukHex(0x070808FF)
        c.icons.gray = nusukHex(0x636669FF)
        c.icons.background = nusukHex(0xFBF5E9FF)
        c.alerts.surfaceInfo = nusukHex(0xE4F1F8FF)
        c.alerts.surfaceSuccess = nusukHex(0xF0FFF5FF)
        c.alerts.surfaceWarning = nusukHex(0xFFF1E4FF)
        c.alerts.surfaceError = nusukHex(0xFFF2F1FF)
        c.alerts.surfaceDefault = nusukHex(0xF5F5F5FF)
        c.alerts.surfaceGold = nusukHex(0xFBF5E9FF)
        c.alerts.surfaceSolidInfo = nusukHex(0x118CE4FF)
        c.alerts.surfaceSolidSuccess = nusukHex(0x5DB364FF)
        c.alerts.surfaceSolidWarning = nusukHex(0xFF6D01FF)
        c.alerts.surfaceSolidError = nusukHex(0xFF4136FF)
        c.alerts.surfaceSolidDefault = nusukHex(0x303336FF)
        c.alerts.iconsDefault = nusukHex(0x303336FF)
        c.alerts.iconsWhite = nusukHex(0xFFFFFFFF)
        c.alerts.iconsGold = nusukHex(0xD99726FF)
        c.alerts.surfaceSolidGold = nusukHex(0xD99726FF)
        c.alerts.surfaceSolidWhite = nusukHex(0xFFFFFFFF)
        c.alerts.iconsInfo = nusukHex(0x118CE4FF)
        c.alerts.iconsSuccess = nusukHex(0x5DB364FF)
        c.alerts.textDefault = nusukHex(0x303336FF)
        c.alerts.textWhite = nusukHex(0xFFFFFFFF)
        c.alerts.iconsWarning = nusukHex(0xFF6D01FF)
        c.alerts.textGold = nusukHex(0xD99726FF)
        c.alerts.iconsError = nusukHex(0xFF4136FF)
        c.alerts.iconsReject = nusukHex(0x171A1CFF)
        c.alerts.textInfo = nusukHex(0x118CE4FF)
        c.alerts.textSuccess = nusukHex(0x5DB364FF)
        c.alerts.textWarning = nusukHex(0xFF6D01FF)
        c.alerts.textError = nusukHex(0xFF4136FF)
        c.alerts.textReject = nusukHex(0x171A1CFF)
        c.inputs.surfaceDefault = nusukHex(0xFFFFFFFF)
        c.inputs.surfaceDisabled = nusukHex(0xE5E5E6FF)
        c.inputs.surfaceSuccess = nusukHex(0xF0FFF5FF)
        c.inputs.surfaceError = nusukHex(0xFFF2F1FF)
        c.inputs.iconsDefault = nusukHex(0x171A1CFF)
        c.inputs.iconsDisabled = nusukHex(0x97999BFF)
        c.inputs.iconsSuccess = nusukHex(0x5DB364FF)
        c.inputs.iconsError = nusukHex(0xFF4136FF)
        c.inputs.textDefault = nusukHex(0x070808FF)
        c.inputs.textPlaceholder = nusukHex(0x636669FF)
        c.inputs.textDisabled = nusukHex(0x636669FF)
        c.inputs.textSuccess = nusukHex(0x5DB364FF)
        c.inputs.textError = nusukHex(0xFF4136FF)
        c.quran.background = nusukHex(0xFFFBF7FF)
        c.quran.emerald = nusukHex(0x1C664BFF)
        c.quran.emeraldShade = nusukHex(0xE4FBEAFF)
        c.quran.crimson = nusukHex(0xD50B3AFF)
        c.quran.crimsonShade = nusukHex(0xFCE4E9FF)
        c.quran.saffron = nusukHex(0xD99726FF)
        c.quran.saffronShade = nusukHex(0xFAF3E5FF)
        c.quran.amethyst = nusukHex(0x7F26D9FF)
        c.quran.amethystShade = nusukHex(0xF0E5FAFF)
        c.quran.olive = nusukHex(0x8B8714FF)
        c.quran.oliveShade = nusukHex(0xF5F5EAFF)
        c.quran.teal = nusukHex(0x1C424AFF)
        c.quran.tealShade = nusukHex(0xE9F4F7FF)
        c.quran.umber = nusukHex(0x573D1CFF)
        c.quran.umberShade = nusukHex(0xF8F1E7FF)
        c.quran.lavender = nusukHex(0xC3B6D7FF)
        c.quran.citrine = nusukHex(0xD2CF84FF)
        c.quran.sky = nusukHex(0xABC2D7FF)
        c.quran.mint = nusukHex(0xB2D4B6FF)
        c.quran.peach = nusukHex(0xF2A577FF)
        c.quran.rose = nusukHex(0xDDA8A5FF)
        c.quran.sand = nusukHex(0xDEB899FF)
        c.quran.orchid = nusukHex(0xDCB3CAFF)
        c.quran.fog = nusukHex(0xB5C0CDFF)
        c.quran.stroke = nusukHex(0x07080826)
        c.button.primarySurface = nusukHex(0x070808FF)
        c.button.primaryContent = nusukHex(0xFFFFFFFF)
        c.button.secondarySurface = nusukHex(0xF5F5F5B3)
        c.button.secondaryContent = nusukHex(0x070808FF)
        c.button.ghostSurface = nusukHex(0xFFFFFF00)
        c.button.ghostContent = nusukHex(0x070808FF)
        c.button.fateSurface = nusukHex(0xFF41361A)
        c.button.fateContent = nusukHex(0xFF4136FF)
        c.button.primarySurfaceOnDark = nusukHex(0xFFFFFFFF)
        c.button.primaryContentOnDark = nusukHex(0x070808FF)
        c.button.secondarySurfaceOnDark = nusukHex(0x303336B3)
        c.button.secondaryContentOnDark = nusukHex(0xFFFFFFFF)
        c.button.ghostContentOnDark = nusukHex(0xFFFFFFFF)
        c.button.fateSurfaceOnDark = nusukHex(0xFF4136FF)
        c.button.fateContentOnDark = nusukHex(0xFFF2F1FF)
        c.button.greenSurface = nusukHex(0x5DB364FF)
        c.button.greenContent = nusukHex(0xFFFFFFFF)
        c.button.greenSecondarySurface = nusukHex(0xF0FFF5FF)
        c.button.greenSecondaryContent = nusukHex(0x5DB364FF)
        c.button.greenGhostContent = nusukHex(0x5DB364FF)
        c.overlay.backdrop = nusukHex(0x00000080)
        c.overlay.soft = nusukHex(0x0000001F)
        c.brand.quranicIllumination = nusukHex(0xEAB355FF)
        c.brand.kiswahReverence = nusukHex(0x070808FF)
        c.brand.domeOfProphet = nusukHex(0x47874AFF)
        c.brand.sereneLight = nusukHex(0xFFFFFFFF)
        c.brand.deepBlue = nusukHex(0x16125FFF)
        c.brand.sacredTeal = nusukHex(0x3B8C87FF)
        c.brand.sunsetLilac = nusukHex(0x9C7BC9FF)
        c.brand.desertRose = nusukHex(0xC97B84FF)
        c.brand.stoneSand = nusukHex(0xB8AA96FF)
        c.brand.earthTerracotta = nusukHex(0xC1624CFF)
        return c
    }()

    public static let goldDark: NusukColors = {
        var c = NusukColors()
        c.neutral.ink10 = nusukHex(0xFFFFFFFF)
        c.neutral.graphite09 = nusukHex(0xF5F5F5FF)
        c.neutral.charcoal08 = nusukHex(0xE5E5E6FF)
        c.neutral.slate07 = nusukHex(0xCBCCCDFF)
        c.neutral.ash06 = nusukHex(0x97999BFF)
        c.neutral.smoke05 = nusukHex(0x636669FF)
        c.neutral.mist04 = nusukHex(0x303336FF)
        c.neutral.pearl03 = nusukHex(0x171A1CFF)
        c.neutral.ivory02 = nusukHex(0x111315FF)
        c.neutral.white01 = nusukHex(0x111315FF)
        c.text.heading = nusukHex(0xFFFFFFFF)
        c.text.content = nusukHex(0xFFFFFFFF)
        c.text.subtle = nusukHex(0xCBCCCDFF)
        c.text.note = nusukHex(0x97999BFF)
        c.text.link = nusukHex(0xF5B13DFF)
        c.text.inverse = nusukHex(0xFFFFFFFF)
        c.surface.illumination = nusukHex(0xF5B13DFF)
        c.surface.longing = nusukHex(0xD99726FF)
        c.surface.shade1 = nusukHex(0x925F07FF)
        c.surface.shade2 = nusukHex(0x613F05FF)
        c.surface.shade3 = nusukHex(0x523B14FF)
        c.surface.shade4 = nusukHex(0x5C3E0AFF)
        c.surface.shade5 = nusukHex(0x412D0BFF)
        c.surface.shade6 = nusukHex(0x342409FF)
        c.surface.screenBk = nusukHex(0x070808FF)
        c.surface.ink10 = nusukHex(0xFFFFFFFF)
        c.surface.graphite09 = nusukHex(0xF5F5F5FF)
        c.surface.charcoal08 = nusukHex(0xE5E5E6FF)
        c.surface.slate07 = nusukHex(0xCBCCCDFF)
        c.surface.ash06 = nusukHex(0x97999BFF)
        c.surface.smoke05 = nusukHex(0x636669FF)
        c.surface.mist04 = nusukHex(0x303336FF)
        c.surface.pearl03 = nusukHex(0x171A1CFF)
        c.surface.ivory02 = nusukHex(0x111315FF)
        c.surface.white01 = nusukHex(0x111315FF)
        c.surface.whiteShine = nusukHex(0x2B2E31FF)
        c.surface.lightShine = nusukHex(0x3E4247FF)
        c.icons.illumination = nusukHex(0xF5B13DFF)
        c.icons.longing = nusukHex(0xD99726FF)
        c.icons.white = nusukHex(0xFFFFFFFF)
        c.icons.black = nusukHex(0xFFFFFFFF)
        c.icons.gray = nusukHex(0x97999BFF)
        c.icons.background = nusukHex(0x412D0BFF)
        c.alerts.surfaceInfo = nusukHex(0x0C273BFF)
        c.alerts.surfaceSuccess = nusukHex(0x0C3B10FF)
        c.alerts.surfaceWarning = nusukHex(0x3A2208FF)
        c.alerts.surfaceError = nusukHex(0x992720FF)
        c.alerts.surfaceDefault = nusukHex(0x111315FF)
        c.alerts.surfaceGold = nusukHex(0x412D0BFF)
        c.alerts.surfaceSolidInfo = nusukHex(0xE4F1F8FF)
        c.alerts.surfaceSolidSuccess = nusukHex(0xECFDF3FF)
        c.alerts.surfaceSolidWarning = nusukHex(0xF79009FF)
        c.alerts.surfaceSolidError = nusukHex(0xFEF3F2FF)
        c.alerts.surfaceSolidDefault = nusukHex(0xCBCCCDFF)
        c.alerts.iconsDefault = nusukHex(0xCBCCCDFF)
        c.alerts.iconsWhite = nusukHex(0x111315FF)
        c.alerts.iconsGold = nusukHex(0xF5B13DFF)
        c.alerts.surfaceSolidGold = nusukHex(0xF5B13DFF)
        c.alerts.surfaceSolidWhite = nusukHex(0x111315FF)
        c.alerts.iconsInfo = nusukHex(0xE4F1F8FF)
        c.alerts.iconsSuccess = nusukHex(0xECFDF3FF)
        c.alerts.textDefault = nusukHex(0xCBCCCDFF)
        c.alerts.textWhite = nusukHex(0xFFFFFFFF)
        c.alerts.iconsWarning = nusukHex(0xF79009FF)
        c.alerts.textGold = nusukHex(0xF5B13DFF)
        c.alerts.iconsError = nusukHex(0xFEF3F2FF)
        c.alerts.iconsReject = nusukHex(0xE5E5E6FF)
        c.alerts.textInfo = nusukHex(0xE4F1F8FF)
        c.alerts.textSuccess = nusukHex(0xECFDF3FF)
        c.alerts.textWarning = nusukHex(0xF79009FF)
        c.alerts.textError = nusukHex(0xFEF3F2FF)
        c.alerts.textReject = nusukHex(0xE5E5E6FF)
        c.inputs.surfaceDefault = nusukHex(0x111315FF)
        c.inputs.surfaceDisabled = nusukHex(0x171A1CFF)
        c.inputs.surfaceSuccess = nusukHex(0x0C3B10FF)
        c.inputs.surfaceError = nusukHex(0x992720FF)
        c.inputs.iconsDefault = nusukHex(0xE5E5E6FF)
        c.inputs.iconsDisabled = nusukHex(0x636669FF)
        c.inputs.iconsSuccess = nusukHex(0xECFDF3FF)
        c.inputs.iconsError = nusukHex(0xFEF3F2FF)
        c.inputs.textDefault = nusukHex(0xFFFFFFFF)
        c.inputs.textPlaceholder = nusukHex(0x97999BFF)
        c.inputs.textDisabled = nusukHex(0x97999BFF)
        c.inputs.textSuccess = nusukHex(0xECFDF3FF)
        c.inputs.textError = nusukHex(0xFEF3F2FF)
        c.quran.background = nusukHex(0xFFFBF7FF)
        c.quran.emerald = nusukHex(0x1C664BFF)
        c.quran.emeraldShade = nusukHex(0xE4FBEAFF)
        c.quran.crimson = nusukHex(0xD50B3AFF)
        c.quran.crimsonShade = nusukHex(0xFCE4E9FF)
        c.quran.saffron = nusukHex(0xD99726FF)
        c.quran.saffronShade = nusukHex(0xFAF3E5FF)
        c.quran.amethyst = nusukHex(0x7F26D9FF)
        c.quran.amethystShade = nusukHex(0xF0E5FAFF)
        c.quran.olive = nusukHex(0x8B8714FF)
        c.quran.oliveShade = nusukHex(0xF5F5EAFF)
        c.quran.teal = nusukHex(0x1C424AFF)
        c.quran.tealShade = nusukHex(0xE9F4F7FF)
        c.quran.umber = nusukHex(0x573D1CFF)
        c.quran.umberShade = nusukHex(0xF8F1E7FF)
        c.quran.lavender = nusukHex(0xC3B6D7FF)
        c.quran.citrine = nusukHex(0xD2CF84FF)
        c.quran.sky = nusukHex(0xABC2D7FF)
        c.quran.mint = nusukHex(0xB2D4B6FF)
        c.quran.peach = nusukHex(0xF2A577FF)
        c.quran.rose = nusukHex(0xDDA8A5FF)
        c.quran.sand = nusukHex(0xDEB899FF)
        c.quran.orchid = nusukHex(0xDCB3CAFF)
        c.quran.fog = nusukHex(0xB5C0CDFF)
        c.quran.stroke = nusukHex(0x07080826)
        c.button.primarySurface = nusukHex(0xFFFFFFFF)
        c.button.primaryContent = nusukHex(0xFFFFFFFF)
        c.button.secondarySurface = nusukHex(0x111315B3)
        c.button.secondaryContent = nusukHex(0xFFFFFFFF)
        c.button.ghostSurface = nusukHex(0xFFFFFF00)
        c.button.ghostContent = nusukHex(0xFFFFFFFF)
        c.button.fateSurface = nusukHex(0xFEF3F21A)
        c.button.fateContent = nusukHex(0xFEF3F2FF)
        c.button.primarySurfaceOnDark = nusukHex(0x111315FF)
        c.button.primaryContentOnDark = nusukHex(0xFFFFFFFF)
        c.button.secondarySurfaceOnDark = nusukHex(0xCBCCCDB3)
        c.button.secondaryContentOnDark = nusukHex(0xFFFFFFFF)
        c.button.ghostContentOnDark = nusukHex(0xFFFFFFFF)
        c.button.fateSurfaceOnDark = nusukHex(0xFEF3F2FF)
        c.button.fateContentOnDark = nusukHex(0x992720FF)
        c.button.greenSurface = nusukHex(0xECFDF3FF)
        c.button.greenContent = nusukHex(0xFFFFFFFF)
        c.button.greenSecondarySurface = nusukHex(0x0C3B10FF)
        c.button.greenSecondaryContent = nusukHex(0xECFDF3FF)
        c.button.greenGhostContent = nusukHex(0xECFDF3FF)
        c.overlay.backdrop = nusukHex(0x00000080)
        c.overlay.soft = nusukHex(0x0000001F)
        c.brand.quranicIllumination = nusukHex(0xEAB355FF)
        c.brand.kiswahReverence = nusukHex(0x070808FF)
        c.brand.domeOfProphet = nusukHex(0x47874AFF)
        c.brand.sereneLight = nusukHex(0xFFFFFFFF)
        c.brand.deepBlue = nusukHex(0x16125FFF)
        c.brand.sacredTeal = nusukHex(0x3B8C87FF)
        c.brand.sunsetLilac = nusukHex(0x9C7BC9FF)
        c.brand.desertRose = nusukHex(0xC97B84FF)
        c.brand.stoneSand = nusukHex(0xB8AA96FF)
        c.brand.earthTerracotta = nusukHex(0xC1624CFF)
        return c
    }()

    public static let greenLight: NusukColors = {
        var c = NusukColors()
        c.neutral.ink10 = nusukHex(0x070808FF)
        c.neutral.graphite09 = nusukHex(0x0B0D0EFF)
        c.neutral.charcoal08 = nusukHex(0x171A1CFF)
        c.neutral.slate07 = nusukHex(0x303336FF)
        c.neutral.ash06 = nusukHex(0x636669FF)
        c.neutral.smoke05 = nusukHex(0x97999BFF)
        c.neutral.mist04 = nusukHex(0xCBCCCDFF)
        c.neutral.pearl03 = nusukHex(0xE5E5E6FF)
        c.neutral.ivory02 = nusukHex(0xF5F5F5FF)
        c.neutral.white01 = nusukHex(0xFFFFFFFF)
        c.text.heading = nusukHex(0x070808FF)
        c.text.content = nusukHex(0x070808FF)
        c.text.subtle = nusukHex(0x303336FF)
        c.text.note = nusukHex(0x636669FF)
        c.text.link = nusukHex(0x1A4C27FF)
        c.text.inverse = nusukHex(0xFFFFFFFF)
        c.surface.illumination = nusukHex(0x1A4C27FF)
        c.surface.longing = nusukHex(0x288A42FF)
        c.surface.shade1 = nusukHex(0x61D17DFF)
        c.surface.shade2 = nusukHex(0x88DD9DFF)
        c.surface.shade3 = nusukHex(0x8CD99FFF)
        c.surface.shade4 = nusukHex(0x99E5ADFF)
        c.surface.shade5 = nusukHex(0xE4FBEAFF)
        c.surface.shade6 = nusukHex(0xF6FEFAFF)
        c.surface.screenBk = nusukHex(0xF1F3F4FF)
        c.surface.ink10 = nusukHex(0x070808FF)
        c.surface.graphite09 = nusukHex(0x0B0D0EFF)
        c.surface.charcoal08 = nusukHex(0x171A1CFF)
        c.surface.slate07 = nusukHex(0x303336FF)
        c.surface.ash06 = nusukHex(0x636669FF)
        c.surface.smoke05 = nusukHex(0x97999BFF)
        c.surface.mist04 = nusukHex(0xCBCCCDFF)
        c.surface.pearl03 = nusukHex(0xE5E5E6FF)
        c.surface.ivory02 = nusukHex(0xF5F5F5FF)
        c.surface.white01 = nusukHex(0xFFFFFFFF)
        c.surface.whiteShine = nusukHex(0xFFFFFFFF)
        c.surface.lightShine = nusukHex(0xFCFCFDFF)
        c.icons.illumination = nusukHex(0x1A4C27FF)
        c.icons.longing = nusukHex(0x288A42FF)
        c.icons.white = nusukHex(0xFFFFFFFF)
        c.icons.black = nusukHex(0x070808FF)
        c.icons.gray = nusukHex(0x636669FF)
        c.icons.background = nusukHex(0xE4FBEAFF)
        c.alerts.surfaceInfo = nusukHex(0xE4F1F8FF)
        c.alerts.surfaceSuccess = nusukHex(0xF0FFF5FF)
        c.alerts.surfaceWarning = nusukHex(0xFFF1E4FF)
        c.alerts.surfaceError = nusukHex(0xFFF2F1FF)
        c.alerts.surfaceDefault = nusukHex(0xF5F5F5FF)
        c.alerts.surfaceGold = nusukHex(0xE4FBEAFF)
        c.alerts.surfaceSolidInfo = nusukHex(0x118CE4FF)
        c.alerts.surfaceSolidSuccess = nusukHex(0x5DB364FF)
        c.alerts.surfaceSolidWarning = nusukHex(0xFF6D01FF)
        c.alerts.surfaceSolidError = nusukHex(0xFF4136FF)
        c.alerts.surfaceSolidDefault = nusukHex(0x303336FF)
        c.alerts.iconsDefault = nusukHex(0x303336FF)
        c.alerts.iconsWhite = nusukHex(0xFFFFFFFF)
        c.alerts.iconsGold = nusukHex(0x1A4C27FF)
        c.alerts.surfaceSolidGold = nusukHex(0x1A4C27FF)
        c.alerts.surfaceSolidWhite = nusukHex(0xFFFFFFFF)
        c.alerts.iconsInfo = nusukHex(0x118CE4FF)
        c.alerts.iconsSuccess = nusukHex(0x5DB364FF)
        c.alerts.textDefault = nusukHex(0x303336FF)
        c.alerts.textWhite = nusukHex(0xFFFFFFFF)
        c.alerts.iconsWarning = nusukHex(0xFF6D01FF)
        c.alerts.textGold = nusukHex(0x1A4C27FF)
        c.alerts.iconsError = nusukHex(0xFF4136FF)
        c.alerts.iconsReject = nusukHex(0x171A1CFF)
        c.alerts.textInfo = nusukHex(0x118CE4FF)
        c.alerts.textSuccess = nusukHex(0x5DB364FF)
        c.alerts.textWarning = nusukHex(0xFF6D01FF)
        c.alerts.textError = nusukHex(0xFF4136FF)
        c.alerts.textReject = nusukHex(0x171A1CFF)
        c.inputs.surfaceDefault = nusukHex(0xFFFFFFFF)
        c.inputs.surfaceDisabled = nusukHex(0xE5E5E6FF)
        c.inputs.surfaceSuccess = nusukHex(0xF0FFF5FF)
        c.inputs.surfaceError = nusukHex(0xFFF2F1FF)
        c.inputs.iconsDefault = nusukHex(0x171A1CFF)
        c.inputs.iconsDisabled = nusukHex(0x97999BFF)
        c.inputs.iconsSuccess = nusukHex(0x5DB364FF)
        c.inputs.iconsError = nusukHex(0xFF4136FF)
        c.inputs.textDefault = nusukHex(0x070808FF)
        c.inputs.textPlaceholder = nusukHex(0x636669FF)
        c.inputs.textDisabled = nusukHex(0x636669FF)
        c.inputs.textSuccess = nusukHex(0x5DB364FF)
        c.inputs.textError = nusukHex(0xFF4136FF)
        c.quran.background = nusukHex(0xFFFBF7FF)
        c.quran.emerald = nusukHex(0x1C664BFF)
        c.quran.emeraldShade = nusukHex(0xE4FBEAFF)
        c.quran.crimson = nusukHex(0xD50B3AFF)
        c.quran.crimsonShade = nusukHex(0xFCE4E9FF)
        c.quran.saffron = nusukHex(0xD99726FF)
        c.quran.saffronShade = nusukHex(0xFAF3E5FF)
        c.quran.amethyst = nusukHex(0x7F26D9FF)
        c.quran.amethystShade = nusukHex(0xF0E5FAFF)
        c.quran.olive = nusukHex(0x8B8714FF)
        c.quran.oliveShade = nusukHex(0xF5F5EAFF)
        c.quran.teal = nusukHex(0x1C424AFF)
        c.quran.tealShade = nusukHex(0xE9F4F7FF)
        c.quran.umber = nusukHex(0x573D1CFF)
        c.quran.umberShade = nusukHex(0xF8F1E7FF)
        c.quran.lavender = nusukHex(0xC3B6D7FF)
        c.quran.citrine = nusukHex(0xD2CF84FF)
        c.quran.sky = nusukHex(0xABC2D7FF)
        c.quran.mint = nusukHex(0xB2D4B6FF)
        c.quran.peach = nusukHex(0xF2A577FF)
        c.quran.rose = nusukHex(0xDDA8A5FF)
        c.quran.sand = nusukHex(0xDEB899FF)
        c.quran.orchid = nusukHex(0xDCB3CAFF)
        c.quran.fog = nusukHex(0xB5C0CDFF)
        c.quran.stroke = nusukHex(0x07080826)
        c.button.primarySurface = nusukHex(0x070808FF)
        c.button.primaryContent = nusukHex(0xFFFFFFFF)
        c.button.secondarySurface = nusukHex(0xF5F5F5B3)
        c.button.secondaryContent = nusukHex(0x070808FF)
        c.button.ghostSurface = nusukHex(0xFFFFFF00)
        c.button.ghostContent = nusukHex(0x070808FF)
        c.button.fateSurface = nusukHex(0xFF41361A)
        c.button.fateContent = nusukHex(0xFF4136FF)
        c.button.primarySurfaceOnDark = nusukHex(0xFFFFFFFF)
        c.button.primaryContentOnDark = nusukHex(0x070808FF)
        c.button.secondarySurfaceOnDark = nusukHex(0x303336B3)
        c.button.secondaryContentOnDark = nusukHex(0xFFFFFFFF)
        c.button.ghostContentOnDark = nusukHex(0xFFFFFFFF)
        c.button.fateSurfaceOnDark = nusukHex(0xFF4136FF)
        c.button.fateContentOnDark = nusukHex(0xFFF2F1FF)
        c.button.greenSurface = nusukHex(0x5DB364FF)
        c.button.greenContent = nusukHex(0xFFFFFFFF)
        c.button.greenSecondarySurface = nusukHex(0xF0FFF5FF)
        c.button.greenSecondaryContent = nusukHex(0x5DB364FF)
        c.button.greenGhostContent = nusukHex(0x5DB364FF)
        c.overlay.backdrop = nusukHex(0x00000080)
        c.overlay.soft = nusukHex(0x0000001F)
        c.brand.quranicIllumination = nusukHex(0xEAB355FF)
        c.brand.kiswahReverence = nusukHex(0x070808FF)
        c.brand.domeOfProphet = nusukHex(0x47874AFF)
        c.brand.sereneLight = nusukHex(0xFFFFFFFF)
        c.brand.deepBlue = nusukHex(0x16125FFF)
        c.brand.sacredTeal = nusukHex(0x3B8C87FF)
        c.brand.sunsetLilac = nusukHex(0x9C7BC9FF)
        c.brand.desertRose = nusukHex(0xC97B84FF)
        c.brand.stoneSand = nusukHex(0xB8AA96FF)
        c.brand.earthTerracotta = nusukHex(0xC1624CFF)
        return c
    }()

    public static let greenDark: NusukColors = {
        var c = NusukColors()
        c.neutral.ink10 = nusukHex(0xFFFFFFFF)
        c.neutral.graphite09 = nusukHex(0xF5F5F5FF)
        c.neutral.charcoal08 = nusukHex(0xE5E5E6FF)
        c.neutral.slate07 = nusukHex(0xCBCCCDFF)
        c.neutral.ash06 = nusukHex(0x97999BFF)
        c.neutral.smoke05 = nusukHex(0x636669FF)
        c.neutral.mist04 = nusukHex(0x303336FF)
        c.neutral.pearl03 = nusukHex(0x171A1CFF)
        c.neutral.ivory02 = nusukHex(0x111315FF)
        c.neutral.white01 = nusukHex(0x070808FF)
        c.text.heading = nusukHex(0xFFFFFFFF)
        c.text.content = nusukHex(0xFFFFFFFF)
        c.text.subtle = nusukHex(0xCBCCCDFF)
        c.text.note = nusukHex(0x97999BFF)
        c.text.link = nusukHex(0x61D17DFF)
        c.text.inverse = nusukHex(0xFFFFFFFF)
        c.surface.illumination = nusukHex(0x61D17DFF)
        c.surface.longing = nusukHex(0x1A4C27FF)
        c.surface.shade1 = nusukHex(0x2E9E4AFF)
        c.surface.shade2 = nusukHex(0x0A5C1FFF)
        c.surface.shade3 = nusukHex(0x125422FF)
        c.surface.shade4 = nusukHex(0x1A4D26FF)
        c.surface.shade5 = nusukHex(0x0D3F1AFF)
        c.surface.shade6 = nusukHex(0x083613FF)
        c.surface.screenBk = nusukHex(0x070808FF)
        c.surface.ink10 = nusukHex(0xFFFFFFFF)
        c.surface.graphite09 = nusukHex(0xF5F5F5FF)
        c.surface.charcoal08 = nusukHex(0xE5E5E6FF)
        c.surface.slate07 = nusukHex(0xCBCCCDFF)
        c.surface.ash06 = nusukHex(0x97999BFF)
        c.surface.smoke05 = nusukHex(0x636669FF)
        c.surface.mist04 = nusukHex(0x303336FF)
        c.surface.pearl03 = nusukHex(0x171A1CFF)
        c.surface.ivory02 = nusukHex(0x111315FF)
        c.surface.white01 = nusukHex(0x070808FF)
        c.surface.whiteShine = nusukHex(0x2B2E31FF)
        c.surface.lightShine = nusukHex(0x3E4247FF)
        c.icons.illumination = nusukHex(0x61D17DFF)
        c.icons.longing = nusukHex(0x1A4C27FF)
        c.icons.white = nusukHex(0xFFFFFFFF)
        c.icons.black = nusukHex(0xFFFFFFFF)
        c.icons.gray = nusukHex(0x97999BFF)
        c.icons.background = nusukHex(0x0D3F1AFF)
        c.alerts.surfaceInfo = nusukHex(0x1F6699FF)
        c.alerts.surfaceSuccess = nusukHex(0x198022FF)
        c.alerts.surfaceWarning = nusukHex(0x3A2208FF)
        c.alerts.surfaceError = nusukHex(0x992720FF)
        c.alerts.surfaceDefault = nusukHex(0x111315FF)
        c.alerts.surfaceGold = nusukHex(0x61D17DFF)
        c.alerts.surfaceSolidInfo = nusukHex(0xE4F1F8FF)
        c.alerts.surfaceSolidSuccess = nusukHex(0xECFDF3FF)
        c.alerts.surfaceSolidWarning = nusukHex(0xF79009FF)
        c.alerts.surfaceSolidError = nusukHex(0xFEF3F2FF)
        c.alerts.surfaceSolidDefault = nusukHex(0xCBCCCDFF)
        c.alerts.iconsDefault = nusukHex(0xCBCCCDFF)
        c.alerts.iconsWhite = nusukHex(0x070808FF)
        c.alerts.iconsGold = nusukHex(0x0D3F1AFF)
        c.alerts.surfaceSolidGold = nusukHex(0x0D3F1AFF)
        c.alerts.surfaceSolidWhite = nusukHex(0x070808FF)
        c.alerts.iconsInfo = nusukHex(0xE4F1F8FF)
        c.alerts.iconsSuccess = nusukHex(0xECFDF3FF)
        c.alerts.textDefault = nusukHex(0xCBCCCDFF)
        c.alerts.textWhite = nusukHex(0xFFFFFFFF)
        c.alerts.iconsWarning = nusukHex(0xF79009FF)
        c.alerts.textGold = nusukHex(0x0D3F1AFF)
        c.alerts.iconsError = nusukHex(0xFEF3F2FF)
        c.alerts.iconsReject = nusukHex(0xE5E5E6FF)
        c.alerts.textInfo = nusukHex(0xE4F1F8FF)
        c.alerts.textSuccess = nusukHex(0xECFDF3FF)
        c.alerts.textWarning = nusukHex(0xF79009FF)
        c.alerts.textError = nusukHex(0xFEF3F2FF)
        c.alerts.textReject = nusukHex(0xE5E5E6FF)
        c.inputs.surfaceDefault = nusukHex(0x070808FF)
        c.inputs.surfaceDisabled = nusukHex(0x171A1CFF)
        c.inputs.surfaceSuccess = nusukHex(0x198022FF)
        c.inputs.surfaceError = nusukHex(0x992720FF)
        c.inputs.iconsDefault = nusukHex(0xE5E5E6FF)
        c.inputs.iconsDisabled = nusukHex(0x636669FF)
        c.inputs.iconsSuccess = nusukHex(0xECFDF3FF)
        c.inputs.iconsError = nusukHex(0xFEF3F2FF)
        c.inputs.textDefault = nusukHex(0xFFFFFFFF)
        c.inputs.textPlaceholder = nusukHex(0x97999BFF)
        c.inputs.textDisabled = nusukHex(0x97999BFF)
        c.inputs.textSuccess = nusukHex(0xECFDF3FF)
        c.inputs.textError = nusukHex(0xFEF3F2FF)
        c.quran.background = nusukHex(0xFFFBF7FF)
        c.quran.emerald = nusukHex(0x1C664BFF)
        c.quran.emeraldShade = nusukHex(0xE4FBEAFF)
        c.quran.crimson = nusukHex(0xD50B3AFF)
        c.quran.crimsonShade = nusukHex(0xFCE4E9FF)
        c.quran.saffron = nusukHex(0xD99726FF)
        c.quran.saffronShade = nusukHex(0xFAF3E5FF)
        c.quran.amethyst = nusukHex(0x7F26D9FF)
        c.quran.amethystShade = nusukHex(0xF0E5FAFF)
        c.quran.olive = nusukHex(0x8B8714FF)
        c.quran.oliveShade = nusukHex(0xF5F5EAFF)
        c.quran.teal = nusukHex(0x1C424AFF)
        c.quran.tealShade = nusukHex(0xE9F4F7FF)
        c.quran.umber = nusukHex(0x573D1CFF)
        c.quran.umberShade = nusukHex(0xF8F1E7FF)
        c.quran.lavender = nusukHex(0xC3B6D7FF)
        c.quran.citrine = nusukHex(0xD2CF84FF)
        c.quran.sky = nusukHex(0xABC2D7FF)
        c.quran.mint = nusukHex(0xB2D4B6FF)
        c.quran.peach = nusukHex(0xF2A577FF)
        c.quran.rose = nusukHex(0xDDA8A5FF)
        c.quran.sand = nusukHex(0xDEB899FF)
        c.quran.orchid = nusukHex(0xDCB3CAFF)
        c.quran.fog = nusukHex(0xB5C0CDFF)
        c.quran.stroke = nusukHex(0x07080826)
        c.button.primarySurface = nusukHex(0xFFFFFFFF)
        c.button.primaryContent = nusukHex(0xFFFFFFFF)
        c.button.secondarySurface = nusukHex(0x111315B3)
        c.button.secondaryContent = nusukHex(0xFFFFFFFF)
        c.button.ghostSurface = nusukHex(0xFFFFFF00)
        c.button.ghostContent = nusukHex(0xFFFFFFFF)
        c.button.fateSurface = nusukHex(0xFEF3F21A)
        c.button.fateContent = nusukHex(0xFEF3F2FF)
        c.button.primarySurfaceOnDark = nusukHex(0x070808FF)
        c.button.primaryContentOnDark = nusukHex(0xFFFFFFFF)
        c.button.secondarySurfaceOnDark = nusukHex(0xCBCCCDB3)
        c.button.secondaryContentOnDark = nusukHex(0xFFFFFFFF)
        c.button.ghostContentOnDark = nusukHex(0xFFFFFFFF)
        c.button.fateSurfaceOnDark = nusukHex(0xFEF3F2FF)
        c.button.fateContentOnDark = nusukHex(0x992720FF)
        c.button.greenSurface = nusukHex(0xECFDF3FF)
        c.button.greenContent = nusukHex(0xFFFFFFFF)
        c.button.greenSecondarySurface = nusukHex(0x198022FF)
        c.button.greenSecondaryContent = nusukHex(0xECFDF3FF)
        c.button.greenGhostContent = nusukHex(0xECFDF3FF)
        c.overlay.backdrop = nusukHex(0x00000080)
        c.overlay.soft = nusukHex(0x0000001F)
        c.brand.quranicIllumination = nusukHex(0xEAB355FF)
        c.brand.kiswahReverence = nusukHex(0x070808FF)
        c.brand.domeOfProphet = nusukHex(0x47874AFF)
        c.brand.sereneLight = nusukHex(0xFFFFFFFF)
        c.brand.deepBlue = nusukHex(0x16125FFF)
        c.brand.sacredTeal = nusukHex(0x3B8C87FF)
        c.brand.sunsetLilac = nusukHex(0x9C7BC9FF)
        c.brand.desertRose = nusukHex(0xC97B84FF)
        c.brand.stoneSand = nusukHex(0xB8AA96FF)
        c.brand.earthTerracotta = nusukHex(0xC1624CFF)
        return c
    }()

    public static let lavenderLight: NusukColors = {
        var c = NusukColors()
        c.neutral.ink10 = nusukHex(0x070808FF)
        c.neutral.graphite09 = nusukHex(0x0B0D0EFF)
        c.neutral.charcoal08 = nusukHex(0x171A1CFF)
        c.neutral.slate07 = nusukHex(0x303336FF)
        c.neutral.ash06 = nusukHex(0x636669FF)
        c.neutral.smoke05 = nusukHex(0x97999BFF)
        c.neutral.mist04 = nusukHex(0xCBCCCDFF)
        c.neutral.pearl03 = nusukHex(0xE5E5E6FF)
        c.neutral.ivory02 = nusukHex(0xF5F5F5FF)
        c.neutral.white01 = nusukHex(0xFFFFFFFF)
        c.text.heading = nusukHex(0x070808FF)
        c.text.content = nusukHex(0x070808FF)
        c.text.subtle = nusukHex(0x303336FF)
        c.text.note = nusukHex(0x636669FF)
        c.text.link = nusukHex(0x7F26D9FF)
        c.text.inverse = nusukHex(0xFFFFFFFF)
        c.surface.illumination = nusukHex(0x7F26D9FF)
        c.surface.longing = nusukHex(0x993DF5FF)
        c.surface.shade1 = nusukHex(0xB26DF8FF)
        c.surface.shade2 = nusukHex(0xCC9EFAFF)
        c.surface.shade3 = nusukHex(0xCCADEBFF)
        c.surface.shade4 = nusukHex(0xE5D1FAFF)
        c.surface.shade5 = nusukHex(0xF2E9FBFF)
        c.surface.shade6 = nusukHex(0xFAF6FDFF)
        c.surface.screenBk = nusukHex(0xF1F3F4FF)
        c.surface.ink10 = nusukHex(0x070808FF)
        c.surface.graphite09 = nusukHex(0x0B0D0EFF)
        c.surface.charcoal08 = nusukHex(0x171A1CFF)
        c.surface.slate07 = nusukHex(0x303336FF)
        c.surface.ash06 = nusukHex(0x636669FF)
        c.surface.smoke05 = nusukHex(0x97999BFF)
        c.surface.mist04 = nusukHex(0xCBCCCDFF)
        c.surface.pearl03 = nusukHex(0xE5E5E6FF)
        c.surface.ivory02 = nusukHex(0xF5F5F5FF)
        c.surface.white01 = nusukHex(0xFFFFFFFF)
        c.surface.whiteShine = nusukHex(0xFFFFFFFF)
        c.surface.lightShine = nusukHex(0xFCFCFDFF)
        c.icons.illumination = nusukHex(0x7F26D9FF)
        c.icons.longing = nusukHex(0x993DF5FF)
        c.icons.white = nusukHex(0xFFFFFFFF)
        c.icons.black = nusukHex(0x070808FF)
        c.icons.gray = nusukHex(0x636669FF)
        c.icons.background = nusukHex(0xF2E9FBFF)
        c.alerts.surfaceInfo = nusukHex(0xE4F1F8FF)
        c.alerts.surfaceSuccess = nusukHex(0xF0FFF5FF)
        c.alerts.surfaceWarning = nusukHex(0xFFF1E4FF)
        c.alerts.surfaceError = nusukHex(0xFFF2F1FF)
        c.alerts.surfaceDefault = nusukHex(0xF5F5F5FF)
        c.alerts.surfaceGold = nusukHex(0xF2E9FBFF)
        c.alerts.surfaceSolidInfo = nusukHex(0x118CE4FF)
        c.alerts.surfaceSolidSuccess = nusukHex(0x5DB364FF)
        c.alerts.surfaceSolidWarning = nusukHex(0xFF6D01FF)
        c.alerts.surfaceSolidError = nusukHex(0xFF4136FF)
        c.alerts.surfaceSolidDefault = nusukHex(0x303336FF)
        c.alerts.iconsDefault = nusukHex(0x303336FF)
        c.alerts.iconsWhite = nusukHex(0xFFFFFFFF)
        c.alerts.iconsGold = nusukHex(0x7F26D9FF)
        c.alerts.surfaceSolidGold = nusukHex(0x7F26D9FF)
        c.alerts.surfaceSolidWhite = nusukHex(0xFFFFFFFF)
        c.alerts.iconsInfo = nusukHex(0x118CE4FF)
        c.alerts.iconsSuccess = nusukHex(0x5DB364FF)
        c.alerts.textDefault = nusukHex(0x303336FF)
        c.alerts.textWhite = nusukHex(0xFFFFFFFF)
        c.alerts.iconsWarning = nusukHex(0xFF6D01FF)
        c.alerts.textGold = nusukHex(0x7F26D9FF)
        c.alerts.iconsError = nusukHex(0xFF4136FF)
        c.alerts.iconsReject = nusukHex(0x171A1CFF)
        c.alerts.textInfo = nusukHex(0x118CE4FF)
        c.alerts.textSuccess = nusukHex(0x5DB364FF)
        c.alerts.textWarning = nusukHex(0xFF6D01FF)
        c.alerts.textError = nusukHex(0xFF4136FF)
        c.alerts.textReject = nusukHex(0x171A1CFF)
        c.inputs.surfaceDefault = nusukHex(0xFFFFFFFF)
        c.inputs.surfaceDisabled = nusukHex(0xCBCCCDFF)
        c.inputs.surfaceSuccess = nusukHex(0xF0FFF5FF)
        c.inputs.surfaceError = nusukHex(0xFFF2F1FF)
        c.inputs.iconsDefault = nusukHex(0x171A1CFF)
        c.inputs.iconsDisabled = nusukHex(0x97999BFF)
        c.inputs.iconsSuccess = nusukHex(0x5DB364FF)
        c.inputs.iconsError = nusukHex(0xFF4136FF)
        c.inputs.textDefault = nusukHex(0x070808FF)
        c.inputs.textPlaceholder = nusukHex(0x636669FF)
        c.inputs.textDisabled = nusukHex(0x636669FF)
        c.inputs.textSuccess = nusukHex(0x5DB364FF)
        c.inputs.textError = nusukHex(0xFF4136FF)
        c.quran.background = nusukHex(0xFFFBF7FF)
        c.quran.emerald = nusukHex(0x1C664BFF)
        c.quran.emeraldShade = nusukHex(0xE4FBEAFF)
        c.quran.crimson = nusukHex(0xD50B3AFF)
        c.quran.crimsonShade = nusukHex(0xFCE4E9FF)
        c.quran.saffron = nusukHex(0xD99726FF)
        c.quran.saffronShade = nusukHex(0xFAF3E5FF)
        c.quran.amethyst = nusukHex(0x7F26D9FF)
        c.quran.amethystShade = nusukHex(0xF0E5FAFF)
        c.quran.olive = nusukHex(0x8B8714FF)
        c.quran.oliveShade = nusukHex(0xF5F5EAFF)
        c.quran.teal = nusukHex(0x1C424AFF)
        c.quran.tealShade = nusukHex(0xE9F4F7FF)
        c.quran.umber = nusukHex(0x573D1CFF)
        c.quran.umberShade = nusukHex(0xF8F1E7FF)
        c.quran.lavender = nusukHex(0xC3B6D7FF)
        c.quran.citrine = nusukHex(0xD2CF84FF)
        c.quran.sky = nusukHex(0xABC2D7FF)
        c.quran.mint = nusukHex(0xB2D4B6FF)
        c.quran.peach = nusukHex(0xF2A577FF)
        c.quran.rose = nusukHex(0xDDA8A5FF)
        c.quran.sand = nusukHex(0xDEB899FF)
        c.quran.orchid = nusukHex(0xDCB3CAFF)
        c.quran.fog = nusukHex(0xB5C0CDFF)
        c.quran.stroke = nusukHex(0x07080826)
        c.button.primarySurface = nusukHex(0x070808FF)
        c.button.primaryContent = nusukHex(0xFFFFFFFF)
        c.button.secondarySurface = nusukHex(0xF5F5F5B3)
        c.button.secondaryContent = nusukHex(0x070808FF)
        c.button.ghostSurface = nusukHex(0xFFFFFF00)
        c.button.ghostContent = nusukHex(0x070808FF)
        c.button.fateSurface = nusukHex(0xFF41361A)
        c.button.fateContent = nusukHex(0xFF4136FF)
        c.button.primarySurfaceOnDark = nusukHex(0xFFFFFFFF)
        c.button.primaryContentOnDark = nusukHex(0x070808FF)
        c.button.secondarySurfaceOnDark = nusukHex(0x303336B3)
        c.button.secondaryContentOnDark = nusukHex(0xFFFFFFFF)
        c.button.ghostContentOnDark = nusukHex(0xFFFFFFFF)
        c.button.fateSurfaceOnDark = nusukHex(0xFF4136FF)
        c.button.fateContentOnDark = nusukHex(0xFFF2F1FF)
        c.button.greenSurface = nusukHex(0x5DB364FF)
        c.button.greenContent = nusukHex(0xFFFFFFFF)
        c.button.greenSecondarySurface = nusukHex(0xF0FFF5FF)
        c.button.greenSecondaryContent = nusukHex(0x5DB364FF)
        c.button.greenGhostContent = nusukHex(0x5DB364FF)
        c.overlay.backdrop = nusukHex(0x00000080)
        c.overlay.soft = nusukHex(0x0000001F)
        c.brand.quranicIllumination = nusukHex(0xEAB355FF)
        c.brand.kiswahReverence = nusukHex(0x070808FF)
        c.brand.domeOfProphet = nusukHex(0x47874AFF)
        c.brand.sereneLight = nusukHex(0xFFFFFFFF)
        c.brand.deepBlue = nusukHex(0x16125FFF)
        c.brand.sacredTeal = nusukHex(0x3B8C87FF)
        c.brand.sunsetLilac = nusukHex(0x9C7BC9FF)
        c.brand.desertRose = nusukHex(0xC97B84FF)
        c.brand.stoneSand = nusukHex(0xB8AA96FF)
        c.brand.earthTerracotta = nusukHex(0xC1624CFF)
        return c
    }()

    public static let lavenderDark: NusukColors = {
        var c = NusukColors()
        c.neutral.ink10 = nusukHex(0xFFFFFFFF)
        c.neutral.graphite09 = nusukHex(0xF5F5F5FF)
        c.neutral.charcoal08 = nusukHex(0xE5E5E6FF)
        c.neutral.slate07 = nusukHex(0xCBCCCDFF)
        c.neutral.ash06 = nusukHex(0x97999BFF)
        c.neutral.smoke05 = nusukHex(0x636669FF)
        c.neutral.mist04 = nusukHex(0x303336FF)
        c.neutral.pearl03 = nusukHex(0x171A1CFF)
        c.neutral.ivory02 = nusukHex(0x111315FF)
        c.neutral.white01 = nusukHex(0x070808FF)
        c.text.heading = nusukHex(0xFFFFFFFF)
        c.text.content = nusukHex(0xFFFFFFFF)
        c.text.subtle = nusukHex(0xCBCCCDFF)
        c.text.note = nusukHex(0x97999BFF)
        c.text.link = nusukHex(0xB26DF8FF)
        c.text.inverse = nusukHex(0xFFFFFFFF)
        c.surface.illumination = nusukHex(0xB26DF8FF)
        c.surface.longing = nusukHex(0x7F26D9FF)
        c.surface.shade1 = nusukHex(0x4D0792FF)
        c.surface.shade2 = nusukHex(0x330561FF)
        c.surface.shade3 = nusukHex(0x331452FF)
        c.surface.shade4 = nusukHex(0x330A5CFF)
        c.surface.shade5 = nusukHex(0x260B41FF)
        c.surface.shade6 = nusukHex(0x1F0934FF)
        c.surface.screenBk = nusukHex(0x070808FF)
        c.surface.ink10 = nusukHex(0xFFFFFFFF)
        c.surface.graphite09 = nusukHex(0xF5F5F5FF)
        c.surface.charcoal08 = nusukHex(0xE5E5E6FF)
        c.surface.slate07 = nusukHex(0xCBCCCDFF)
        c.surface.ash06 = nusukHex(0x97999BFF)
        c.surface.smoke05 = nusukHex(0x636669FF)
        c.surface.mist04 = nusukHex(0x303336FF)
        c.surface.pearl03 = nusukHex(0x171A1CFF)
        c.surface.ivory02 = nusukHex(0x111315FF)
        c.surface.white01 = nusukHex(0x070808FF)
        c.surface.whiteShine = nusukHex(0x2B2E31FF)
        c.surface.lightShine = nusukHex(0x3E4247FF)
        c.icons.illumination = nusukHex(0xB26DF8FF)
        c.icons.longing = nusukHex(0x7F26D9FF)
        c.icons.white = nusukHex(0xFFFFFFFF)
        c.icons.black = nusukHex(0xFFFFFFFF)
        c.icons.gray = nusukHex(0x97999BFF)
        c.icons.background = nusukHex(0x260B41FF)
        c.alerts.surfaceInfo = nusukHex(0x1F6699FF)
        c.alerts.surfaceSuccess = nusukHex(0x198022FF)
        c.alerts.surfaceWarning = nusukHex(0x3A2208FF)
        c.alerts.surfaceError = nusukHex(0x992720FF)
        c.alerts.surfaceDefault = nusukHex(0x111315FF)
        c.alerts.surfaceGold = nusukHex(0xB26DF8FF)
        c.alerts.surfaceSolidInfo = nusukHex(0xE4F1F8FF)
        c.alerts.surfaceSolidSuccess = nusukHex(0xECFDF3FF)
        c.alerts.surfaceSolidWarning = nusukHex(0xF79009FF)
        c.alerts.surfaceSolidError = nusukHex(0xFEF3F2FF)
        c.alerts.surfaceSolidDefault = nusukHex(0xCBCCCDFF)
        c.alerts.iconsDefault = nusukHex(0xCBCCCDFF)
        c.alerts.iconsWhite = nusukHex(0x070808FF)
        c.alerts.iconsGold = nusukHex(0x260B41FF)
        c.alerts.surfaceSolidGold = nusukHex(0x260B41FF)
        c.alerts.surfaceSolidWhite = nusukHex(0x070808FF)
        c.alerts.iconsInfo = nusukHex(0xE4F1F8FF)
        c.alerts.iconsSuccess = nusukHex(0xECFDF3FF)
        c.alerts.textDefault = nusukHex(0xCBCCCDFF)
        c.alerts.textWhite = nusukHex(0xFFFFFFFF)
        c.alerts.iconsWarning = nusukHex(0xF79009FF)
        c.alerts.textGold = nusukHex(0x260B41FF)
        c.alerts.iconsError = nusukHex(0xFEF3F2FF)
        c.alerts.iconsReject = nusukHex(0xE5E5E6FF)
        c.alerts.textInfo = nusukHex(0xE4F1F8FF)
        c.alerts.textSuccess = nusukHex(0xECFDF3FF)
        c.alerts.textWarning = nusukHex(0xF79009FF)
        c.alerts.textError = nusukHex(0xFEF3F2FF)
        c.alerts.textReject = nusukHex(0xE5E5E6FF)
        c.inputs.surfaceDefault = nusukHex(0x070808FF)
        c.inputs.surfaceDisabled = nusukHex(0x303336FF)
        c.inputs.surfaceSuccess = nusukHex(0x198022FF)
        c.inputs.surfaceError = nusukHex(0x992720FF)
        c.inputs.iconsDefault = nusukHex(0xE5E5E6FF)
        c.inputs.iconsDisabled = nusukHex(0x636669FF)
        c.inputs.iconsSuccess = nusukHex(0xECFDF3FF)
        c.inputs.iconsError = nusukHex(0xFEF3F2FF)
        c.inputs.textDefault = nusukHex(0xFFFFFFFF)
        c.inputs.textPlaceholder = nusukHex(0x97999BFF)
        c.inputs.textDisabled = nusukHex(0x97999BFF)
        c.inputs.textSuccess = nusukHex(0xECFDF3FF)
        c.inputs.textError = nusukHex(0xFEF3F2FF)
        c.quran.background = nusukHex(0xFFFBF7FF)
        c.quran.emerald = nusukHex(0x1C664BFF)
        c.quran.emeraldShade = nusukHex(0xE4FBEAFF)
        c.quran.crimson = nusukHex(0xD50B3AFF)
        c.quran.crimsonShade = nusukHex(0xFCE4E9FF)
        c.quran.saffron = nusukHex(0xD99726FF)
        c.quran.saffronShade = nusukHex(0xFAF3E5FF)
        c.quran.amethyst = nusukHex(0x7F26D9FF)
        c.quran.amethystShade = nusukHex(0xF0E5FAFF)
        c.quran.olive = nusukHex(0x8B8714FF)
        c.quran.oliveShade = nusukHex(0xF5F5EAFF)
        c.quran.teal = nusukHex(0x1C424AFF)
        c.quran.tealShade = nusukHex(0xE9F4F7FF)
        c.quran.umber = nusukHex(0x573D1CFF)
        c.quran.umberShade = nusukHex(0xF8F1E7FF)
        c.quran.lavender = nusukHex(0xC3B6D7FF)
        c.quran.citrine = nusukHex(0xD2CF84FF)
        c.quran.sky = nusukHex(0xABC2D7FF)
        c.quran.mint = nusukHex(0xB2D4B6FF)
        c.quran.peach = nusukHex(0xF2A577FF)
        c.quran.rose = nusukHex(0xDDA8A5FF)
        c.quran.sand = nusukHex(0xDEB899FF)
        c.quran.orchid = nusukHex(0xDCB3CAFF)
        c.quran.fog = nusukHex(0xB5C0CDFF)
        c.quran.stroke = nusukHex(0x07080826)
        c.button.primarySurface = nusukHex(0xFFFFFFFF)
        c.button.primaryContent = nusukHex(0xFFFFFFFF)
        c.button.secondarySurface = nusukHex(0x111315B3)
        c.button.secondaryContent = nusukHex(0xFFFFFFFF)
        c.button.ghostSurface = nusukHex(0xFFFFFF00)
        c.button.ghostContent = nusukHex(0xFFFFFFFF)
        c.button.fateSurface = nusukHex(0xFEF3F21A)
        c.button.fateContent = nusukHex(0xFEF3F2FF)
        c.button.primarySurfaceOnDark = nusukHex(0x070808FF)
        c.button.primaryContentOnDark = nusukHex(0xFFFFFFFF)
        c.button.secondarySurfaceOnDark = nusukHex(0xCBCCCDB3)
        c.button.secondaryContentOnDark = nusukHex(0xFFFFFFFF)
        c.button.ghostContentOnDark = nusukHex(0xFFFFFFFF)
        c.button.fateSurfaceOnDark = nusukHex(0xFEF3F2FF)
        c.button.fateContentOnDark = nusukHex(0x992720FF)
        c.button.greenSurface = nusukHex(0xECFDF3FF)
        c.button.greenContent = nusukHex(0xFFFFFFFF)
        c.button.greenSecondarySurface = nusukHex(0x198022FF)
        c.button.greenSecondaryContent = nusukHex(0xECFDF3FF)
        c.button.greenGhostContent = nusukHex(0xECFDF3FF)
        c.overlay.backdrop = nusukHex(0x00000080)
        c.overlay.soft = nusukHex(0x0000001F)
        c.brand.quranicIllumination = nusukHex(0xEAB355FF)
        c.brand.kiswahReverence = nusukHex(0x070808FF)
        c.brand.domeOfProphet = nusukHex(0x47874AFF)
        c.brand.sereneLight = nusukHex(0xFFFFFFFF)
        c.brand.deepBlue = nusukHex(0x16125FFF)
        c.brand.sacredTeal = nusukHex(0x3B8C87FF)
        c.brand.sunsetLilac = nusukHex(0x9C7BC9FF)
        c.brand.desertRose = nusukHex(0xC97B84FF)
        c.brand.stoneSand = nusukHex(0xB8AA96FF)
        c.brand.earthTerracotta = nusukHex(0xC1624CFF)
        return c
    }()
}

/// 0xRRGGBBAA in sRGB.
private func nusukHex(_ rgba: UInt32) -> Color {
    Color(.sRGB,
          red: Double((rgba >> 24) & 0xFF) / 255,
          green: Double((rgba >> 16) & 0xFF) / 255,
          blue: Double((rgba >> 8) & 0xFF) / 255,
          opacity: Double(rgba & 0xFF) / 255)
}
