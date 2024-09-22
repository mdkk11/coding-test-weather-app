import { style } from "@vanilla-extract/css"

export const module = style({
  display: "flex",
  flexDirection: "column",
  minHeight: "100%",
  width: "100%",
})

export const layout = style({
  display: "flex",
  flexDirection: "column",
  flex: "1 1 0%",
  padding: "2.5rem 1.5rem",
  rowGap: "2rem",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
})
