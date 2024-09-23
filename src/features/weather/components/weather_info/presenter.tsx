import clsx from "clsx"
import { ReactNode } from "react"

import { WeatherCategoryType } from "@/features/weather/const"

import * as styles from "./presenter.css"

export type PresenterProps = {
  weatherCategory: WeatherCategoryType
  weatherText: string
  weatherIcon: ReactNode
  weatherInfoDetailNode: ReactNode
}

export const Presenter = ({ ...props }: PresenterProps) => {
  return (
    <div
      data-testid="weather-container"
      className={clsx(styles.module, styles.weatherBgStyle({ weather: props.weatherCategory }))}
    >
      <div className={styles.container}>
        <div>{props.weatherIcon}</div>
        <div className={styles.divider} />
        <p className={styles.text}>{props.weatherText}</p>
      </div>
      {props.weatherInfoDetailNode}
    </div>
  )
}
