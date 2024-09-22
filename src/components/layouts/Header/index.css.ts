import { style } from "@vanilla-extract/css"

import { responsiveStyle } from "@/styles/utils"
import { vars } from "@/styles/vars.css"

export const header = style([
  {
    display: "flex",
    gap: "0.5rem",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 1rem",
    borderColor: vars.colors.border,
    borderBottomWidth: "1px",
    width: "100%",
    height: "4rem",
  },
  responsiveStyle({
    md: {
      height: "5rem",
      padding: "0 1.5rem",
    },
  }),
])

export const link = style([
  {
    fontSize: vars.font.size.lg,
    lineHeight: vars.font.size.lg,
    fontWeight: "bold",
    ":hover": {
      opacity: ".7",
    },
  },
  responsiveStyle({
    md: {
      fontSize: vars.font.size["xl"],
      lineHeight: vars.font.size["xl"],
    },
  }),
])
