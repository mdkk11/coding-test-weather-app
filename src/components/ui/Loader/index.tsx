import { ComponentPropsWithoutRef } from "react"

import * as styles from "./index.css"

type Props = styles.LoaderVariants & ComponentPropsWithoutRef<"div">

export const Loader = ({ size, ...props }: Props) => (
  <div role="loader" className={styles.module} {...props}>
    <div className={styles.loader({ size })} />
  </div>
)
