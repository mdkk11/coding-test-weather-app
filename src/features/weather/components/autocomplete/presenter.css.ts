import { style } from "@vanilla-extract/css"

import { vars } from "@/styles/vars.css"

const container = style({
  position: "absolute",
  border: `${vars.colors.border} solid 1px`,
  borderRadius: vars.rounded.md,
  width: "100%",
  fontSize: vars.font.size.sm,
  backgroundColor: vars.colors.background.primary,
  boxShadow: vars.shadow.md,
  overflow: "hidden",
})

export const noLocation = style([{ left: "0", top: "3rem", padding: "0.75rem 0.5rem" }, container])

export const list = style([
  {
    position: "absolute",
    left: 0,
    top: "3rem",
  },
  container,
])

export const listItem = style([
  {
    borderBottomWidth: "1px",
    borderColor: vars.colors.border,
    ":last-of-type": {
      border: "none",
    },
  },
])

export const listItemButton = style([
  {
    width: "100%",
    textAlign: "start",
    padding: "0.75rem 0.5rem",
    cursor: "pointer",
    ":hover": {
      opacity: ".7",
      background: "black",
      color: vars.colors.text.inverse,
    },
  },
])
