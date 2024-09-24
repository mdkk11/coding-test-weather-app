import { globalStyle, style } from "@vanilla-extract/css"

import { vars } from "@/styles/vars.css"

export const table = style({
  captionSide: "top",
  borderCollapse: "collapse",
  width: "100%",
  borderRadius: vars.rounded.md,
})

globalStyle(`${table} td`, {
  padding: "1rem",
  borderTop: "solid 2px #FFFF",
})

globalStyle(`${table} th`, {
  padding: "1rem",
})

globalStyle(`${table} tbody tr:nth-of-type(odd)`, {
  backgroundColor: "#F5F5F5",
})

globalStyle(`${table} thead > tr`, {
  backgroundColor: "#9FA9B7",
  padding: "0.5rem",
})
