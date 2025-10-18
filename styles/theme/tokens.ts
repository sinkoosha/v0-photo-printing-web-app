export type TypographyToken = {
  size: string
  lineHeight: string
  weight?: string
  letterSpacing?: string
}

export type ThemeScale = {
  colors: Record<string, string>
  radii: Record<string, string>
  spacing: Record<string, string>
  shadows: Record<string, string>
  typography: Record<string, TypographyToken>
  container: {
    max: string
    gutter: string
  }
  fonts: {
    sans: string
  }
}

export type ThemeName = "light" | "dark" | "campaign-harvest"

const baseSpacing: Record<string, string> = {
  "0": "0px",
  px: "1px",
  "0.5": "0.125rem",
  "1": "0.25rem",
  "1.5": "0.375rem",
  "2": "0.5rem",
  "2.5": "0.625rem",
  "3": "0.75rem",
  "3.5": "0.875rem",
  "4": "1rem",
  "5": "1.25rem",
  "6": "1.5rem",
  "7": "1.75rem",
  "8": "2rem",
  "9": "2.25rem",
  "10": "2.5rem",
  "11": "2.75rem",
  "12": "3rem",
  "14": "3.5rem",
  "16": "4rem",
  "20": "5rem",
  "24": "6rem",
  "28": "7rem",
  "32": "8rem",
  "36": "9rem",
  "40": "10rem",
  "48": "12rem",
  "56": "14rem",
  "64": "16rem",
}

const baseTypography: Record<string, TypographyToken> = {
  xs: { size: "0.75rem", lineHeight: "1.25rem" },
  sm: { size: "0.875rem", lineHeight: "1.5rem" },
  base: { size: "1rem", lineHeight: "1.75rem" },
  lg: { size: "1.125rem", lineHeight: "1.85rem" },
  xl: { size: "1.5rem", lineHeight: "2.1rem", weight: "600" },
  "2xl": { size: "1.75rem", lineHeight: "2.4rem", weight: "600" },
  "3xl": { size: "2.25rem", lineHeight: "2.75rem", weight: "700" },
  "4xl": { size: "3rem", lineHeight: "3.5rem", weight: "700", letterSpacing: "-0.02em" },
  "5xl": { size: "3.75rem", lineHeight: "4.25rem", weight: "700", letterSpacing: "-0.03em" },
}

const baseRadii: Record<string, string> = {
  none: "0px",
  xs: "0.375rem",
  sm: "0.5rem",
  DEFAULT: "0.75rem",
  md: "1rem",
  lg: "1.25rem",
  xl: "1.75rem",
  "2xl": "2rem",
  "3xl": "2.5rem",
  full: "9999px",
}

const baseShadows: Record<string, string> = {
  sm: "0 6px 18px -12px rgb(41 29 25 / 0.18)",
  DEFAULT: "0 12px 32px -18px rgb(41 29 25 / 0.22)",
  md: "0 18px 40px -18px rgb(41 29 25 / 0.26)",
  lg: "0 24px 50px -24px rgb(41 29 25 / 0.3)",
  xl: "0 30px 60px -26px rgb(41 29 25 / 0.32)",
  glow: "0 20px 45px -25px rgb(90 74 64 / 0.45)",
  inner: "inset 0 3px 6px 0 rgb(41 29 25 / 0.1)",
}

const baseColors: Record<string, string> = {
  background: "28 42% 94%",
  surface: "0 0% 100%",
  "surface-muted": "30 50% 95%",
  "surface-soft": "30 52% 90%",
  overlay: "30 48% 89%",
  "overlay-muted": "28 41% 85%",
  border: "28 25% 88%",
  ring: "25 50% 56%",
  accent: "25 50% 56%",
  "accent-strong": "25 45% 50%",
  "accent-soft": "29 43% 72%",
  "accent-muted": "29 20% 74%",
  "accent-contrast": "0 0% 100%",
  "accent-shadow": "24 45% 50%",
  foreground: "18 17% 20%",
  "foreground-muted": "23 17% 30%",
  "foreground-soft": "27 13% 55%",
  "foreground-subtle": "22 25% 45%",
  "foreground-deep": "19 21% 15%",
  "tone-sand": "28 69% 85%",
  "tone-amber": "21 51% 75%",
  destructive: "12 43% 51%",
  "destructive-contrast": "0 0% 100%",
  success: "144 30% 40%",
  "success-contrast": "0 0% 100%",
  warning: "33 85% 58%",
  "warning-contrast": "24 30% 24%",
  "brand-100": "30 45% 92%",
  "brand-200": "29 48% 86%",
  "brand-300": "27 45% 74%",
  "brand-400": "25 45% 56%",
  "brand-500": "24 58% 46%",
}

const darkColors: Record<string, string> = {
  background: "25 25% 10%",
  surface: "25 24% 14%",
  "surface-muted": "25 22% 18%",
  "surface-soft": "25 20% 22%",
  overlay: "25 28% 24%",
  "overlay-muted": "25 24% 20%",
  border: "25 18% 32%",
  ring: "25 45% 60%",
  accent: "27 62% 66%",
  "accent-strong": "27 70% 72%",
  "accent-soft": "27 48% 38%",
  "accent-muted": "27 38% 32%",
  "accent-contrast": "25 26% 12%",
  "accent-shadow": "27 55% 48%",
  foreground: "27 42% 94%",
  "foreground-muted": "27 28% 76%",
  "foreground-soft": "27 22% 64%",
  "foreground-subtle": "27 20% 58%",
  "foreground-deep": "27 52% 96%",
  "tone-sand": "28 34% 32%",
  "tone-amber": "30 42% 38%",
  destructive: "12 60% 48%",
  "destructive-contrast": "25 26% 12%",
  success: "142 36% 52%",
  "success-contrast": "25 26% 12%",
  warning: "35 82% 52%",
  "warning-contrast": "25 26% 12%",
  "brand-100": "27 22% 18%",
  "brand-200": "27 24% 22%",
  "brand-300": "27 28% 28%",
  "brand-400": "27 42% 48%",
  "brand-500": "27 55% 62%",
}

const campaignColors: Record<string, string> = {
  ...baseColors,
  accent: "35 74% 56%",
  "accent-strong": "35 82% 48%",
  "accent-soft": "35 70% 72%",
  "accent-muted": "32 48% 78%",
  ring: "35 74% 56%",
  "tone-sand": "40 62% 88%",
  "tone-amber": "32 70% 66%",
}

const baseTheme: ThemeScale = {
  colors: baseColors,
  radii: baseRadii,
  spacing: baseSpacing,
  shadows: baseShadows,
  typography: baseTypography,
  container: {
    max: "1200px",
    gutter: "1rem",
  },
  fonts: {
    sans: "var(--font-vazirmatn)",
  },
}

const darkTheme: ThemeScale = {
  ...baseTheme,
  colors: { ...baseTheme.colors, ...darkColors },
}

const campaignTheme: ThemeScale = {
  ...baseTheme,
  colors: campaignColors,
}

export const themes: Record<ThemeName, ThemeScale> = {
  light: baseTheme,
  dark: darkTheme,
  "campaign-harvest": campaignTheme,
}

const themeSelectors: Record<ThemeName, string> = {
  light: ":root",
  dark: ".dark",
  "campaign-harvest": ".campaign-harvest",
}

export function getThemeSelectors() {
  return themeSelectors
}

const sanitizeKey = (key: string) => key.replace(/\./g, "-")

export function tokensToCssVariables(theme: ThemeScale): Record<string, string> {
  const entries: Record<string, string> = {}

  for (const [key, value] of Object.entries(theme.colors)) {
    entries[`--color-${sanitizeKey(key)}`] = value
  }

  for (const [key, value] of Object.entries(theme.radii)) {
    entries[`--radius-${sanitizeKey(key)}`] = value
  }

  for (const [key, value] of Object.entries(theme.spacing)) {
    entries[`--space-${sanitizeKey(key)}`] = value
  }

  for (const [key, value] of Object.entries(theme.shadows)) {
    entries[`--shadow-${sanitizeKey(key)}`] = value
  }

  for (const [key, value] of Object.entries(theme.typography)) {
    entries[`--font-size-${sanitizeKey(key)}`] = value.size
    entries[`--line-height-${sanitizeKey(key)}`] = value.lineHeight
    if (value.weight) {
      entries[`--font-weight-${sanitizeKey(key)}`] = value.weight
    }
    if (value.letterSpacing) {
      entries[`--letter-spacing-${sanitizeKey(key)}`] = value.letterSpacing
    }
  }

  entries["--container-max"] = theme.container.max
  entries["--container-gutter"] = theme.container.gutter
  entries["--font-family-sans"] = theme.fonts.sans

  return entries
}

export const baseThemeTokens = themes.light

export const colorKeys = Object.keys(baseThemeTokens.colors)
export const radiusKeys = Object.keys(baseThemeTokens.radii)
export const spacingKeys = Object.keys(baseThemeTokens.spacing)
export const shadowKeys = Object.keys(baseThemeTokens.shadows)
export const typographyKeys = Object.keys(baseThemeTokens.typography)

export const fontSizeMap = Object.fromEntries(
  typographyKeys.map((key) => {
    const sanitized = sanitizeKey(key)
    const token = baseThemeTokens.typography[key]
    return [
      key,
      [
        `var(--font-size-${sanitized})`,
        {
          lineHeight: `var(--line-height-${sanitized})`,
          ...(token.weight ? { fontWeight: `var(--font-weight-${sanitized})` } : {}),
          ...(token.letterSpacing ? { letterSpacing: `var(--letter-spacing-${sanitized})` } : {}),
        },
      ],
    ]
  }),
) as Record<string, [string, { lineHeight: string; fontWeight?: string; letterSpacing?: string }]>

export const spacingMap = Object.fromEntries(
  spacingKeys.map((key) => [key, `var(--space-${sanitizeKey(key)})`]),
) as Record<string, string>

export const radiusMap = Object.fromEntries(
  radiusKeys.map((key) => [key, `var(--radius-${sanitizeKey(key)})`]),
) as Record<string, string>

export const shadowMap = Object.fromEntries(
  shadowKeys.map((key) => [key, `var(--shadow-${sanitizeKey(key)})`]),
) as Record<string, string>

export const colorMap = Object.fromEntries(
  colorKeys.map((key) => [key, `hsl(var(--color-${sanitizeKey(key)}) / <alpha-value>)`]),
) as Record<string, string>

export const themeClassNames = Object.keys(themes) as ThemeName[]
