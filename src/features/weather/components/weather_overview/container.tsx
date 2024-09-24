import * as LocationTitle from "@/features/weather/components/location_title"
import * as WeatherForecast from "@/features/weather/components/weather_forecast"
import * as WeatherInfo from "@/features/weather/components/weather_info"
import * as WeatherInfoDetail from "@/features/weather/components/weather_info_detail"
import { Day } from "@/features/weather/const"
import { useQueryWeatherForecast, useWeatherParams } from "@/features/weather/hooks"
import { useLocationContext } from "@/features/weather/providers/location/useLocationContext"
import { validateDayRange } from "@/features/weather/utils"
import { transformWeatherInfoForCurrent } from "@/features/weather/utils/transform"

import { Presenter, PresenterProps } from "./presenter"

export const Container = () => {
  const { location } = useLocationContext()
  const { location: param } = useWeatherParams({})

  const dateRange = validateDayRange(Day + 1)
  const { data } = useQueryWeatherForecast(param ?? location, dateRange)

  const locationTitleProps = { location: data.location } satisfies LocationTitle.ContainerProps

  const weatherInfoCurrentProps = {
    weatherInfo: transformWeatherInfoForCurrent(data.current),
  } satisfies WeatherInfoDetail.ContainerProps

  const weatherInfoProps = {
    condition: data.current.condition,
    children: <WeatherInfoDetail.Container {...weatherInfoCurrentProps} />,
  } satisfies WeatherInfo.ContainerProps

  const weatherForecastProps = {
    forecast: data.forecast,
  } satisfies WeatherForecast.ContainerProps

  const presenterProps = {
    locationTitleNode: <LocationTitle.Container {...locationTitleProps} />,
    weatherInfoNode: <WeatherInfo.Container {...weatherInfoProps} />,
    weatherForecastNode: <WeatherForecast.Container {...weatherForecastProps} />,
  } satisfies PresenterProps
  return <Presenter {...presenterProps} />
}
