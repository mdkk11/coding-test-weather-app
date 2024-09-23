import * as React from "react"

import * as styles from "./index.css"
type AlertProps = React.ComponentPropsWithoutRef<"div">

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(({ children, ...props }, ref) => {
  return (
    <div className={styles.module} role="alert" ref={ref} {...props}>
      {children}
    </div>
  )
})
