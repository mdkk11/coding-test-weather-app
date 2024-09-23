import { recipe, RecipeVariants } from "@vanilla-extract/recipes"

import { vars } from "@/styles/vars.css"

export const heading = recipe({
  variants: {
    size: {
      xs: { fontSize: vars.font.size.xs, lineHeight: vars.font.lineHeight.xs },
      sm: { fontSize: vars.font.size.sm, lineHeight: vars.font.lineHeight.sm },
      md: { fontSize: vars.font.size.base, lineHeight: vars.font.lineHeight.base },
      lg: { fontSize: vars.font.size.lg, lineHeight: vars.font.lineHeight.lg },
      xl: { fontSize: vars.font.size["xl"], lineHeight: vars.font.lineHeight.xl },
      "2xl": { fontSize: vars.font.size["2xl"], lineHeight: vars.font.lineHeight["2xl"] },
      "3xl": { fontSize: vars.font.size["3xl"], lineHeight: vars.font.lineHeight["3xl"] },
    },
  },
  defaultVariants: {
    size: "md",
  },
})

export type HeadingVariants = RecipeVariants<typeof heading>
