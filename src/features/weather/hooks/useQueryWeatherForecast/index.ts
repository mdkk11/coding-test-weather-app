import { useSuspenseQuery } from "@tanstack/react-query"

import { fetchForecastWeather } from "@/features/weather/services/forecast"

type Props = Parameters<typeof fetchForecastWeather>

export const useQueryWeatherForecast = (...props: Props) => {
  const [q] = props
  return useSuspenseQuery({
    queryKey: ["forecast", q],
    queryFn: () => fetchForecastWeather(...props).then((data) => data),
  })
}
