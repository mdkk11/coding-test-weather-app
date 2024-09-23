import { ReactNode } from "react"

import { Heading } from "@/components/ui/Heading"

import * as styles from "./presenter.css"

export type PresenterProps = {
  weatherInfo: Record<string, string | number>
}

export const Presenter = ({ ...props }: PresenterProps) => {
  return (
    <div className={styles.module}>
      <Heading level="h3" size="3xl" className={styles.heading}>
        Weather Information
      </Heading>
      <div className={styles.divider} />
      <WeatherInfoList>
        {Object.entries(props.weatherInfo).map(([key, value]) => (
          <WeatherInfoListItem key={key}>
            <span className={styles.key}>{key} :</span>
            <span>{value.toString()}</span>
          </WeatherInfoListItem>
        ))}
      </WeatherInfoList>
    </div>
  )
}

const WeatherInfoList = ({ children }: { children: ReactNode }) => {
  return <ul className={styles.list}>{children}</ul>
}

const WeatherInfoListItem = ({ children }: { children: ReactNode }) => {
  return <li className={styles.listItem}>{children}</li>
}
