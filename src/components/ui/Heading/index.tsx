import clsx from "clsx"
import { ComponentPropsWithRef, createElement } from "react"

import * as styles from "./index.css"
type Level = "h1" | "h2" | "h3" | "h4"

type Props<T extends Level> = styles.HeadingVariants & ComponentPropsWithRef<T> & { level: T }

export function Heading<T extends Level>({ level, size, className, children, ...props }: Props<T>) {
  return createElement(
    level,
    {
      className: clsx(styles.heading({ size }), className),
      ...props,
    },
    children,
  )
}
