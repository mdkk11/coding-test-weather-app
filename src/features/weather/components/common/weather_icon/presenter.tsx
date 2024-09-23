import { type LucideIcon } from "lucide-react"
import { ComponentPropsWithoutRef } from "react"

import * as styles from "./index.css"
export type PresenterProps = {
  Icon: LucideIcon
} & styles.IconVariants &
  Omit<ComponentPropsWithoutRef<"svg">, "ref">

export const Presenter = ({ Icon, size, ...props }: PresenterProps) => {
  return <Icon className={styles.icon({ size })} {...props} />
}
