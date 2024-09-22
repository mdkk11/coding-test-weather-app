import { keyframes, style } from "@vanilla-extract/css"
import { recipe, RecipeVariants } from "@vanilla-extract/recipes"

export const module = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})

const spin = keyframes({
  "100%": {
    transform: "rotate(360deg)",
  },

  "0%": {
    transform: "rotate(0deg)",
  },
})

export const loader = recipe({
  base: {
    animation: `${spin} 1s linear infinite`,
    background: "transparent",
    width: "2rem",
    height: "2rem",
    borderRadius: "50%",
  },
  variants: {
    size: {
      sm: {
        borderTop: "3px solid grey",
        borderRight: "3px solid grey",
        borderBottom: "3px solid grey",
        borderLeft: "3px solid black",
        width: "1.5rem",
        height: "1.5rem",
      },
      md: {
        borderTop: "4px solid grey",
        borderRight: "4px solid grey",
        borderBottom: "4px solid grey",
        borderLeft: "4px solid black",
        width: "2rem",
        height: "2rem",
      },
      lg: {
        borderTop: "5px solid grey",
        borderRight: "5px solid grey",
        borderBottom: "5px solid grey",
        borderLeft: "5px solid black",
        width: "4rem",
        height: "4rem",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
})

export type LoaderVariants = RecipeVariants<typeof loader>
