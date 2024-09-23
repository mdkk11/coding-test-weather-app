import { style } from "@vanilla-extract/css"

import { responsiveStyle } from "./responsive.css"

export const layout = style([
  {
    display: "grid",
    gap: "1rem",
  },
  responsiveStyle({
    md: {
      gap: "2.5rem",
    },
  }),
])

export const relative = style({
  position: "relative",
})
