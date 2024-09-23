import { style } from "@vanilla-extract/css"

import { responsiveStyle } from "@/styles/utils"
import { vars } from "@/styles/vars.css"

export const module = style([
  { display: "flex", alignItems: "center", gap: "0.5rem" },
  responsiveStyle({
    md: {
      gap: "1rem",
    },
  }),
])

export const name = style([
  { fontSize: vars.font.size["2xl"], fontWeight: "bold" },
  responsiveStyle({
    md: {
      fontSize: vars.font.size["3xl"],
    },
  }),
])

export const region = style([
  {
    fontSize: vars.font.size["base"],
  },
  responsiveStyle({
    md: {
      fontSize: vars.font.size["2xl"],
    },
  }),
])

export const country = style([
  {
    fontSize: vars.font.size["base"],
  },
  responsiveStyle({
    md: {
      fontSize: vars.font.size["2xl"],
    },
  }),
])
