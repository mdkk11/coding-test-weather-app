import { WeatherCategories, WeatherCategoryType } from "@/features/weather/const"

export const getWeatherCategory = (code: number): WeatherCategoryType => {
  switch (true) {
    case WeatherCategories.sunny.includes(code):
      return "sunny"
    case WeatherCategories.cloudy.includes(code):
      return "cloudy"
    case WeatherCategories.rainy.includes(code):
      return "rainy"
    case WeatherCategories.snowy.includes(code):
      return "snowy"
    default:
      return "cloudy"
  }
}
