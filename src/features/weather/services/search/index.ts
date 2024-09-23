import { LocationData } from "@/features/weather/models"

import { fetchWrapper } from "../helper"

/**
 * マッチした市区町村を Location オブジェクトの配列として返す
 * @see https://app.swaggerhub.com/apis-docs/WeatherAPI.com/WeatherAPI/1.0.2#/APIs/search-autocomplete-weather
 * @param q - 郵便番号(アメリカ、イギリス、カナダのみ)、IPアドレス、緯度経度（10進法）、都市名
 */
export const fetchMatchedLocation = (q: string) => {
  const params = new URLSearchParams({
    q,
  })

  return fetchWrapper<LocationData>(`/api/search?${params}`)
}
