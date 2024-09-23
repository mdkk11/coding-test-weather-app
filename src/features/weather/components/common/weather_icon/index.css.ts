import { recipe, RecipeVariants } from "@vanilla-extract/recipes"

export const icon = recipe({
  base: {
    color: "#fffff",
  },
  variants: {
    size: {
      sm: { width: "2.5rem", height: "2.5rem" },
      md: { width: "3rem", height: "3rem" },
    },
  },
  defaultVariants: {
    size: "md",
  },
})

export type IconVariants = RecipeVariants<typeof icon>
