import { ForecastWeatherData } from "@/features/weather/models"

import { fetchWrapper } from "../helper"

export type DayRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14

/**
 * 最大14日間の天気予報と天気アラートを取得する
 * @see https://app.swaggerhub.com/apis-docs/WeatherAPI.com/WeatherAPI/1.0.2#/APIs/forecast-weather
 * @param q - 郵便番号(アメリカ、イギリス、カナダのみ)、IPアドレス、緯度経度（10進法）、都市名
 * @param days - 天気予報の日数。1～14
 */
export const fetchForecastWeather = (q: string, days: DayRange) => {
  const params = new URLSearchParams({
    q,
    days: days.toString(),
  })
  return fetchWrapper<ForecastWeatherData>(`/api/forecast?${params}`)
}
