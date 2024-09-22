import clsx from "clsx"
import * as React from "react"

import * as styles from "./index.css"
type InputProps = React.ComponentPropsWithoutRef<"input">

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, className, ...props }, ref) => {
    return <input type={type} className={clsx(styles.module, className)} ref={ref} {...props} />
  },
)
