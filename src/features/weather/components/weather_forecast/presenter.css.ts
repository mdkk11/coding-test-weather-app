import { style } from "@vanilla-extract/css"

import { vars } from "@/styles/vars.css"

export const module = style({
  width: "100%",
  borderRadius: vars.rounded.md,
  overflowX: "auto",
  color: vars.colors.text.inverse,
  border: `1px solid ${vars.colors.border}`,
})

export const link = style({
  padding: "1rem",
  fontSize: vars.font.size.base,
  lineHeight: vars.font.lineHeight.base,

  ":hover": { opacity: ".7" },
})

export const icon = style({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  color: vars.colors.text.primary,
})
