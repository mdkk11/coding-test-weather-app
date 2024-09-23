import { style } from "@vanilla-extract/css"

import { responsiveStyle } from "@/styles/utils/responsive.css"

export const module = style([
  {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    gap: "2rem",
  },
  responsiveStyle({
    sm: {
      maxWidth: "640px",
    },
    md: {
      maxWidth: "768px",
    },
    lg: {
      maxWidth: "1280px",
    },
    xl: {
      maxWidth: "1536px",
    },
  }),
])
