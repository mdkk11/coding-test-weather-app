import { recipe, RecipeVariants } from "@vanilla-extract/recipes"

import { vars } from "@/styles/vars.css"

export const button = recipe({
  base: {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: vars.rounded.md,
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontWeight: 500,
    whiteSpace: "nowrap",
    color: vars.colors.button.text,
    cursor: "pointer",
    ":hover": {
      opacity: ".7",
    },
  },
  variants: {
    color: {
      primary: { background: vars.colors.button.primary },
    },
    size: {
      sm: { padding: "0 0.75rem", height: "2.25rem" },
      md: { padding: "0 1rem", height: "2.5rem" },
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
  },
})

export type ButtonVariants = RecipeVariants<typeof button>
