import { isSameDay } from "date-fns"

import * as LocationTitle from "@/features/weather/components/location_title"
import * as WeatherInfo from "@/features/weather/components/weather_info"
import * as WeatherInfoDetail from "@/features/weather/components/weather_info_detail"
import { Day } from "@/features/weather/const/range"
import { useQueryWeatherForecast, useWeatherParams } from "@/features/weather/hooks"
import { transformWeatherInfoForSpecificDay, validateDayRange } from "@/features/weather/utils"

import { Presenter, PresenterProps } from "./presenter"

export const Container = () => {
  const { location, date } = useWeatherParams({})
  const dateRange = validateDayRange(Day + 1)
  const { data } = useQueryWeatherForecast(location, dateRange)

  const locationTitleProps = { location: data.location } satisfies LocationTitle.ContainerProps

  const weatherDayData = data.forecast.forecastday.filter((d) =>
    isSameDay(new Date(d.date), date),
  )[0].day

  const weatherInfoDetailProps = {
    weatherInfo: transformWeatherInfoForSpecificDay(weatherDayData),
  } satisfies WeatherInfoDetail.ContainerProps

  const weatherInfoProps = {
    condition: weatherDayData.condition,
    children: <WeatherInfoDetail.Container {...weatherInfoDetailProps} />,
  } satisfies WeatherInfo.ContainerProps

  const presenterProps = {
    locationTitleNode: <LocationTitle.Container {...locationTitleProps} />,
    weatherInfoNode: <WeatherInfo.Container {...weatherInfoProps} />,
  } satisfies PresenterProps
  return <Presenter {...presenterProps} />
}
