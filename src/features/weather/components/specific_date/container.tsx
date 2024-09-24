import { useWeatherParams } from "@/features/weather/hooks"

import { Presenter, PresenterProps } from "./presenter"

export const Container = () => {
  const { date } = useWeatherParams({})
  const presenterProps = {
    date,
  } satisfies PresenterProps

  return <Presenter {...presenterProps} />
}
