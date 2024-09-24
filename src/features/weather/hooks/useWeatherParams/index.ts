import { format } from "date-fns"
import { type SetURLSearchParams, useSearchParams } from "react-router-dom"

type WeatherAPiParams = {
  location: string
  date: string
  setSearchParams: SetURLSearchParams
}

export function useWeatherParams({
  defaultLocation = "Tokyo",
}: {
  defaultLocation?: string
}): WeatherAPiParams {
  const [searchParams, setSearchParams] = useSearchParams()

  const location = searchParams.get("location") || defaultLocation
  const dateParam = searchParams.get("date")

  const date = dateParam
    ? format(new Date(dateParam), "yyyy-MM-dd")
    : format(new Date(), "yyyy-MM-dd")

  return {
    location,
    date,
    setSearchParams,
  }
}
