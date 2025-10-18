import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

import {
  colorMap,
  fontSizeMap,
  getThemeSelectors,
  radiusMap,
  shadowMap,
  spacingMap,
  themes,
  themeClassNames,
  tokensToCssVariables,
} from "./styles/theme/tokens"

const config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.svg",
  ],
  theme: {
    container: {
      center: true,
      padding: "var(--container-gutter)",
    },
    extend: {
      maxWidth: {
        container: "var(--container-max)",
      },
      colors: colorMap,
      borderRadius: radiusMap,
      boxShadow: shadowMap,
      spacing: spacingMap,
      fontSize: fontSizeMap,
      fontFamily: {
        sans: ["var(--font-family-sans)", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      const selectors = getThemeSelectors()

      const themeEntries = themeClassNames.map((name) => {
        const selector = selectors[name]
        const variables = tokensToCssVariables(themes[name])
        if (name === "dark") {
          return [selector, { ...variables, "color-scheme": "dark" }] as const
        }
        return [selector, { ...variables, "color-scheme": "light" }] as const
      })

      addBase(Object.fromEntries(themeEntries))
      addBase({
        "*": {
          borderColor: "hsl(var(--color-border) / 1)",
        },
        body: {
          backgroundColor: "hsl(var(--color-background) / 1)",
          color: "hsl(var(--color-foreground) / 1)",
          fontFamily: "var(--font-family-sans)",
        },
      })
    }),
  ],
} satisfies Config

export default config
