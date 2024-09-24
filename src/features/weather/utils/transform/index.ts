import { Day } from "@/features/weather/models"
import { Current } from "@/features/weather/models/common"

export const transformWeatherInfoForCurrent = (current: Current) => {
  return {
    "Last Updated": current.last_updated,
    "Temperature (°C)": current.temp_c,
    "Temperature (°F)": current.temp_f,
    "Wind Speed (mph)": current.wind_mph,
    "Wind Speed (kph)": current.wind_kph,
    "Wind Direction": `${current.wind_dir} ${current.wind_degree}°`,
    "Pressure (mb)": current.pressure_mb,
    "Pressure (in)": current.pressure_in,
    "Precipitation (mm)": current.precip_mm,
    "Precipitation (in)": current.precip_in,
    "Humidity (%)": current.humidity,
    "Cloud Cover (%)": current.cloud,
    "Feels Like (°C)": current.feelslike_c,
    "Feels Like (°F)": current.feelslike_f,
    "Visibility (km)": current.vis_km,
    "Visibility (miles)": current.vis_miles,
    "UV Index": current.uv,
    "Gusts (mph)": current.gust_mph,
    "Gusts (kph)": current.gust_kph,
  }
}

export const transformWeatherInfoForSpecificDay = (day: Day) => {
  return {
    "Max Temperature (°C)": day.maxtemp_c,
    "Max Temperature (°F)": day.maxtemp_f,
    "Min Temperature (°C)": day.mintemp_c,
    "Min Temperature (°F)": day.mintemp_f,
    "Average Temperature (°C)": day.avgtemp_c,
    "Average Temperature (°F)": day.avgtemp_f,
    "Max Wind Speed (mph)": day.maxwind_mph,
    "Max Wind Speed (kph)": day.maxwind_kph,
    "Total Precipitation (mm)": day.totalprecip_mm,
    "Total Precipitation (in)": day.totalprecip_in,
    "Average Visibility (km)": day.avgvis_km,
    "Average Visibility (miles)": day.avgvis_miles,
    "Average Humidity (%)": day.avghumidity,
    "Chance of Rain (%)": day.daily_chance_of_rain,
    "Chance of Snow (%)": day.daily_chance_of_snow,
    "UV Index": day.uv,
  }
}
