import { Location } from "@/features/weather/models/common"

import * as styles from "./presenter.css"

export type PresenterProps = Pick<Location, "name" | "region" | "country">

export const Presenter = ({ ...props }: PresenterProps) => {
  return (
    <h2 className={styles.module}>
      <span className={styles.name}>{props.name} Weather Forecast</span>
      <span className={styles.region}>{props.region},</span>
      <span className={styles.country}>{props.country}</span>
    </h2>
  )
}
