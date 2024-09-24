import { ComponentProps } from "react"

import { Button } from "@/components/ui/Button"

import * as styles from "./presenter.css"

export type PresenterProps = ComponentProps<typeof Button>

export const Presenter = ({ ...props }: PresenterProps) => {
  return <Button className={styles.module} {...props} />
}
