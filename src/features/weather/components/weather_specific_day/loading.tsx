import * as LocationTitle from "@/features/weather/components/location_title"
import * as WeatherInfo from "@/features/weather/components/weather_info"

import * as styles from "./loading.css"
export const Loading = () => {
  return (
    <div className={styles.module}>
      <LocationTitle.Loading />
      <WeatherInfo.Loading />
    </div>
  )
}
