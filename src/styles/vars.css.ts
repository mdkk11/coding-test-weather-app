import { createGlobalTheme } from "@vanilla-extract/css"

export const vars = createGlobalTheme(":root", {
  font: {
    size: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem;",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
    },
    lineHeight: {
      xs: "1rem;",
      sm: "1.25rem;",
      base: "1.5rem",
      lg: "1.75rem",
      xl: "1.75rem;",
      "2xl": "2rem",
      "3xl": "2.25rem",
    },
  },
  rounded: {
    sm: "0.125rem",
    md: "0.375rem",
    lg: "0.5rem",
  },
  shadow: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  },
  colors: {
    border: "#e2e8f0",
    focus: "#e2e8f0",
    ring: "#94a3b8",
    background: {
      primary: "#FFFFFF",
      error: "#FFE4E1",
      loading: "#D1D5DB",
    },
    text: {
      primary: "#1A1A1A",
      inverse: "#FFFFFF",
      error: "#8B0000",
    },
  },
})
