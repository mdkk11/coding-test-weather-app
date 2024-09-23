import { style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"

import { responsiveStyle } from "@/styles/utils/responsive.css"
import { vars } from "@/styles/vars.css"

export const module = style([
  {
    display: "grid",
    padding: "2rem",
    gap: " 2rem",
    borderRadius: vars.rounded.md,
    color: vars.colors.text.inverse,
  },
  responsiveStyle({
    md: {
      padding: "2rem",
    },
  }),
])

export const weatherBgStyle = recipe({
  variants: {
    weather: {
      sunny: { background: vars.colors.weather.sunny.background },
      cloudy: { background: vars.colors.weather.cloudy.background },
      rainy: { background: vars.colors.weather.rainy.background },
      snowy: { background: vars.colors.weather.snowy.background },
    },
  },
  defaultVariants: {
    weather: "cloudy",
  },
})
export const container = style({ display: "flex", gap: "2rem", alignItems: "center" })

export const divider = style([
  {
    width: "0.125rem",
    height: "2rem",
    backgroundColor: vars.colors.background.primary,
  },
  responsiveStyle({
    md: {
      height: "3.5rem",
    },
  }),
])

export const text = style([
  { fontSize: vars.font.size["lg"], fontWeight: "bold" },
  responsiveStyle({
    md: {
      fontSize: vars.font.size["2xl"],
    },
  }),
])
