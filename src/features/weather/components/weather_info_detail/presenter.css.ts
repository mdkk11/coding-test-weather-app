import { style } from "@vanilla-extract/css"

import { responsiveStyle } from "@/styles/utils"
import { vars } from "@/styles/vars.css"

export const module = style([
  {
    display: "grid",
    gap: "0.5rem",
    color: vars.colors.text.inverse,
  },
  responsiveStyle({
    md: {
      gap: "1rem",
    },
  }),
])

export const divider = style({
  height: "0.1rem",
  width: "100%",
  background: vars.colors.background.primary,
})

export const heading = style([
  { fontSize: vars.font.size["2xl"], fontWeight: "bold" },
  responsiveStyle({
    md: { fontSize: vars.font.size["3xl"] },
  }),
])

export const key = style([
  { fontSize: vars.font.size.base, fontWeight: "700" },
  responsiveStyle({
    md: { fontSize: vars.font.size.lg },
  }),
])

export const list = style([
  {
    display: "grid",
    gridTemplateColumns: "repeat(1, minMax(0, 1fr))",
    gap: "0.5rem",
  },
  responsiveStyle({
    md: {
      gridTemplateColumns: "repeat(2, minMax(0, 1fr))",
      gap: "0.75rem",
    },
    lg: {
      gridTemplateColumns: "repeat(3, minMax(0, 1fr))",
    },
    xl: {
      gridTemplateColumns: "repeat(4, minMax(0, 1fr))",
    },
  }),
])

export const listItem = style({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
})
