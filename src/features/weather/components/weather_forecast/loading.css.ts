import { style } from "@vanilla-extract/css"

import { pulseAnimation } from "@/styles/utils"
import { vars } from "@/styles/vars.css"

export const module = style([
  {
    width: "100%",
    height: "9rem",
    background: vars.colors.background.loading,
    borderRadius: vars.rounded.md,
  },
  pulseAnimation,
])
