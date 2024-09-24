import { ReactNode } from "react"

import * as styles from "./presenter.css"

export type PresenterProps = {
  locationTitleNode: ReactNode
  weatherInfoNode: ReactNode
  weatherForecastNode: ReactNode
}

export const Presenter = ({ ...props }: PresenterProps) => {
  return (
    <div className={styles.module}>
      {props.locationTitleNode}
      {props.weatherInfoNode}
      {props.weatherForecastNode}
    </div>
  )
}
