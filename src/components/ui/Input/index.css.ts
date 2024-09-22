import { style } from "@vanilla-extract/css"

import { vars } from "@/styles/vars.css"

export const module = style({
  display: "flex",
  padding: "0.5rem 0.75rem",
  borderRadius: vars.rounded.md,
  borderWidth: "1px",
  width: "100%",
  height: "2.5rem",
  lineHeight: "1.5rem",
  fontSize: vars.font.size.sm,
  borderStyle: "solid",
  borderColor: vars.colors.border,

  ":focus": {
    outline: "none",
    borderColor: vars.colors.focus,
    boxShadow: `0 0 0 2px ${vars.colors.ring}`,
  },

  ":disabled": {
    cursor: "not-allowed",
    opacity: 0.5,
  },
})
