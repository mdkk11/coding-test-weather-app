export const Breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const

export type BreakpointKey = keyof typeof Breakpoints

export const mediaQueries = Object.fromEntries(
  Object.entries(Breakpoints).map(([key, value]) => [key, `screen and (min-width: ${value}px)`]),
) as Record<BreakpointKey, string>

type StyleObject = Partial<Record<BreakpointKey, Record<string, unknown>>>

export const responsiveStyle = (styleObj: StyleObject) => {
  return Object.fromEntries(
    Object.entries(styleObj).map(([key, value]) => [
      `@media ${mediaQueries[key as BreakpointKey]}`,
      value,
    ]),
  )
}
