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
