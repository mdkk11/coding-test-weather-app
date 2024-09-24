import { style } from "@vanilla-extract/css"

import { responsiveStyle } from "@/styles/utils"
import { vars } from "@/styles/vars.css"

export const module = style([
  {
    fontWeight: "bold",
    fontSize: vars.font.size["xl"],
    lineHeight: vars.font.lineHeight["xl"],
  },
  responsiveStyle({
    md: {
      fontSize: vars.font.size["3xl"],
      lineHeight: vars.font.lineHeight["3xl"],
    },
  }),
])
