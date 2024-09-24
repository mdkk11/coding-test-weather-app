import { useMemo } from "react"

import * as WeatherIcon from "@/features/weather/components/common/weather_icon"
import { useWeatherParams } from "@/features/weather/hooks"
import { Forecast } from "@/features/weather/models"
import { getWeatherCategory } from "@/features/weather/utils"
import { useLinkProps } from "@/hooks"
import { format } from "@/utils"

import { Presenter, PresenterProps } from "./presenter"

export type ContainerProps = {
  forecast: Forecast
}

export const Container = ({ ...props }: ContainerProps) => {
  const { generateLinkProps } = useLinkProps()
  const { location } = useWeatherParams({})
  const tableHead = useMemo(
    () => props.forecast.forecastday.filter((d) => isNotToday(d.date)).map((d) => d.date),
    [props.forecast.forecastday],
  )

  const tableBody = useMemo(
    () =>
      props.forecast.forecastday
        .filter((d) => isNotToday(d.date))
        .map((d) => ({
          code: d.day.condition.code,
          icon: (
            <WeatherIcon.Container weatherCategory={getWeatherCategory(d.day.condition.code)} />
          ),
        })),
    [props.forecast.forecastday],
  )

  const presenterProps = {
    tableHead,
    tableBody,
    linkProps: (date: string) =>
      generateLinkProps({ pathname: "/specific_day", newParams: { location, date } }),
  } satisfies PresenterProps

  return <Presenter {...presenterProps} />
}

function isNotToday(dateString: string): boolean {
  const today = format(new Date(), "yyyy-MM-dd")
  return dateString !== today
}
