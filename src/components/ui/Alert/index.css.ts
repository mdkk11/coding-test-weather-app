import { style } from "@vanilla-extract/css"

import { vars } from "@/styles/vars.css"

export const module = style({
  padding: "1.5rem",
  borderRadius: vars.rounded.md,
  borderWidth: "1px",
  backgroundColor: vars.colors.background.error,
  color: vars.colors.text.error,
  fontSize: vars.font.size.base,
  lineHeight: vars.font.lineHeight.base,
})
