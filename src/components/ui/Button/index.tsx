import clsx from "clsx"
import type { ComponentPropsWithoutRef } from "react"
import { forwardRef } from "react"

import * as styles from "./index.css"

type ButtonProps = ComponentPropsWithoutRef<"button"> & styles.ButtonVariants

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function ButtonBase(
  { color, size, className, ...props },
  ref,
) {
  return <button className={clsx(styles.button({ color, size }), className)} ref={ref} {...props} />
})
