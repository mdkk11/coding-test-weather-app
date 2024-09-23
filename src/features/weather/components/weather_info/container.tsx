import { ReactNode, useMemo } from "react"

import * as WeatherIcon from "@/features/weather/components/common/weather_icon"
import { Condition } from "@/features/weather/models/common"
import { getWeatherCategory } from "@/features/weather/utils"

import { Presenter, PresenterProps } from "./presenter"

export type ContainerProps = {
  condition: Condition
  children: ReactNode
}

export const Container = ({ ...props }: ContainerProps) => {
  const weatherCategory = useMemo(() => getWeatherCategory(props.condition.code), [props])
  const Icon = useMemo(
    () => <WeatherIcon.Container weatherCategory={weatherCategory} />,
    [weatherCategory],
  )
  const weatherText = useMemo(() => props.condition.text, [props])

  const presenterProps = {
    weatherCategory,
    weatherText,
    weatherIcon: Icon,
    weatherInfoDetailNode: props.children,
  } satisfies PresenterProps

  return <Presenter {...presenterProps} />
}
