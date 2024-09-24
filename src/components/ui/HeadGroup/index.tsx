import clsx from "clsx"
import React from "react"

import * as styles from "./index.css"

type Props = {
  children: React.ReactNode
  className?: string
}

export const HeadGroup = ({ children, className }: Props) => {
  return <header className={clsx(styles.module, className)}>{children}</header>
}
