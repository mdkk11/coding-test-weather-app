import clsx from "clsx"
import * as React from "react"

import * as styles from "./index.css"
type SectionProps = React.ComponentPropsWithoutRef<"section">

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, ...props }, ref) => {
    return <section className={clsx(styles.module, className)} ref={ref} {...props} />
  },
)
