import { ForecastWeatherData } from "@/features/weather/models"

export const mock = {
  location: {
    name: "Tokyo",
    region: "Tokyo",
    country: "Japan",
    lat: 35.69,
    lon: 139.69,
    tz_id: "Asia/Tokyo",
    localtime_epoch: 1726101181,
    localtime: "2024-09-30 09:33",
  },
  current: {
    last_updated_epoch: 1726101000,
    last_updated: "2024-09-30 09:30",
    temp_c: 31.4,
    temp_f: 88.5,
    is_day: 1,
    condition: {
      text: "Partly cloudy",
      icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
      code: 1003,
    },
    wind_mph: 2.2,
    wind_kph: 3.6,
    wind_degree: 196,
    wind_dir: "SSW",
    pressure_mb: 1016,
    pressure_in: 30,
    precip_mm: 0,
    precip_in: 0,
    humidity: 71,
    cloud: 50,
    feelslike_c: 36.9,
    feelslike_f: 98.5,
    windchill_c: 30.4,
    windchill_f: 86.6,
    heatindex_c: 34.6,
    heatindex_f: 94.3,
    dewpoint_c: 22.9,
    dewpoint_f: 73.1,
    vis_km: 10,
    vis_miles: 6,
    uv: 8,
    gust_mph: 2.4,
    gust_kph: 3.9,
  },
  forecast: {
    forecastday: [
      {
        date: "2024-10-01",
        date_epoch: 1726099200,
        day: {
          maxtemp_c: 32.5,
          maxtemp_f: 90.4,
          mintemp_c: 28.3,
          mintemp_f: 82.9,
          avgtemp_c: 30,
          avgtemp_f: 85.9,
          maxwind_mph: 16.6,
          maxwind_kph: 26.6,
          totalprecip_mm: 0.24,
          totalprecip_in: 0.01,
          avgvis_km: 10,
          avgvis_miles: 6,
          avghumidity: 67,
          daily_will_it_rain: 1,
          daily_chance_of_rain: 86,
          daily_will_it_snow: 0,
          daily_chance_of_snow: 0,
          condition: {
            text: "Patchy rain nearby",
            icon: "//cdn.weatherapi.com/weather/64x64/day/176.png",
            code: 1063,
          },
          uv: 7,
        },
        astro: {
          sunrise: "05:22 AM",
          sunset: "05:53 PM",
          moonrise: "01:53 PM",
          moonset: "11:09 PM",
          moon_phase: "Waxing Gibbous",
          moon_illumination: 58,
          is_moon_up: 0,
          is_sun_up: 1,
        },
        hour: [
          {
            time_epoch: 1726074000,
            time: "2024-09-30 02:00",
            temp_c: 28.7,
            temp_f: 83.6,
            is_day: 0,
            condition: {
              text: "Clear ",
              icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
              code: 1000,
            },
            wind_mph: 9.8,
            wind_kph: 15.8,
            wind_degree: 191,
            wind_dir: "SSW",
            pressure_mb: 1016,
            pressure_in: 29.99,
            precip_mm: 0,
            precip_in: 0,
            snow_cm: 0,
            humidity: 74,
            cloud: 17,
            feelslike_c: 32.9,
            feelslike_f: 91.1,
            windchill_c: 28.7,
            windchill_f: 83.6,
            heatindex_c: 32.9,
            heatindex_f: 91.1,
            dewpoint_c: 23.7,
            dewpoint_f: 74.6,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10,
            vis_miles: 6,
            gust_mph: 13.3,
            gust_kph: 21.3,
            uv: 0,
          },
        ],
      },
      {
        date: "2024-10-02",
        date_epoch: 1726099200,
        day: {
          maxtemp_c: 32.5,
          maxtemp_f: 90.4,
          mintemp_c: 28.3,
          mintemp_f: 82.9,
          avgtemp_c: 30,
          avgtemp_f: 85.9,
          maxwind_mph: 16.6,
          maxwind_kph: 26.6,
          totalprecip_mm: 0.24,
          totalprecip_in: 0.01,
          avgvis_km: 10,
          avgvis_miles: 6,
          avghumidity: 67,
          daily_will_it_rain: 1,
          daily_chance_of_rain: 86,
          daily_will_it_snow: 0,
          daily_chance_of_snow: 0,
          condition: {
            text: "Patchy rain nearby",
            icon: "//cdn.weatherapi.com/weather/64x64/day/176.png",
            code: 1063,
          },
          uv: 7,
        },
        astro: {
          sunrise: "05:22 AM",
          sunset: "05:53 PM",
          moonrise: "01:53 PM",
          moonset: "11:09 PM",
          moon_phase: "Waxing Gibbous",
          moon_illumination: 58,
          is_moon_up: 0,
          is_sun_up: 1,
        },
        hour: [
          {
            time_epoch: 1726074000,
            time: "2024-09-30 02:00",
            temp_c: 28.7,
            temp_f: 83.6,
            is_day: 0,
            condition: {
              text: "Clear ",
              icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
              code: 1000,
            },
            wind_mph: 9.8,
            wind_kph: 15.8,
            wind_degree: 191,
            wind_dir: "SSW",
            pressure_mb: 1016,
            pressure_in: 29.99,
            precip_mm: 0,
            precip_in: 0,
            snow_cm: 0,
            humidity: 74,
            cloud: 17,
            feelslike_c: 32.9,
            feelslike_f: 91.1,
            windchill_c: 28.7,
            windchill_f: 83.6,
            heatindex_c: 32.9,
            heatindex_f: 91.1,
            dewpoint_c: 23.7,
            dewpoint_f: 74.6,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10,
            vis_miles: 6,
            gust_mph: 13.3,
            gust_kph: 21.3,
            uv: 0,
          },
        ],
      },
      {
        date: "2024-10-03",
        date_epoch: 1726099200,
        day: {
          maxtemp_c: 32.5,
          maxtemp_f: 90.4,
          mintemp_c: 28.3,
          mintemp_f: 82.9,
          avgtemp_c: 30,
          avgtemp_f: 85.9,
          maxwind_mph: 16.6,
          maxwind_kph: 26.6,
          totalprecip_mm: 0.24,
          totalprecip_in: 0.01,
          avgvis_km: 10,
          avgvis_miles: 6,
          avghumidity: 67,
          daily_will_it_rain: 1,
          daily_chance_of_rain: 86,
          daily_will_it_snow: 0,
          daily_chance_of_snow: 0,
          condition: {
            text: "Patchy rain nearby",
            icon: "//cdn.weatherapi.com/weather/64x64/day/176.png",
            code: 1063,
          },
          uv: 7,
        },
        astro: {
          sunrise: "05:22 AM",
          sunset: "05:53 PM",
          moonrise: "01:53 PM",
          moonset: "11:09 PM",
          moon_phase: "Waxing Gibbous",
          moon_illumination: 58,
          is_moon_up: 0,
          is_sun_up: 1,
        },
        hour: [
          {
            time_epoch: 1726074000,
            time: "2024-09-30 02:00",
            temp_c: 28.7,
            temp_f: 83.6,
            is_day: 0,
            condition: {
              text: "Clear ",
              icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
              code: 1000,
            },
            wind_mph: 9.8,
            wind_kph: 15.8,
            wind_degree: 191,
            wind_dir: "SSW",
            pressure_mb: 1016,
            pressure_in: 29.99,
            precip_mm: 0,
            precip_in: 0,
            snow_cm: 0,
            humidity: 74,
            cloud: 17,
            feelslike_c: 32.9,
            feelslike_f: 91.1,
            windchill_c: 28.7,
            windchill_f: 83.6,
            heatindex_c: 32.9,
            heatindex_f: 91.1,
            dewpoint_c: 23.7,
            dewpoint_f: 74.6,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10,
            vis_miles: 6,
            gust_mph: 13.3,
            gust_kph: 21.3,
            uv: 0,
          },
        ],
      },
      {
        date: "2024-10-04",
        date_epoch: 1726099200,
        day: {
          maxtemp_c: 32.5,
          maxtemp_f: 90.4,
          mintemp_c: 28.3,
          mintemp_f: 82.9,
          avgtemp_c: 30,
          avgtemp_f: 85.9,
          maxwind_mph: 16.6,
          maxwind_kph: 26.6,
          totalprecip_mm: 0.24,
          totalprecip_in: 0.01,
          avgvis_km: 10,
          avgvis_miles: 6,
          avghumidity: 67,
          daily_will_it_rain: 1,
          daily_chance_of_rain: 86,
          daily_will_it_snow: 0,
          daily_chance_of_snow: 0,
          condition: {
            text: "Patchy rain nearby",
            icon: "//cdn.weatherapi.com/weather/64x64/day/176.png",
            code: 1063,
          },
          uv: 7,
        },
        astro: {
          sunrise: "05:22 AM",
          sunset: "05:53 PM",
          moonrise: "01:53 PM",
          moonset: "11:09 PM",
          moon_phase: "Waxing Gibbous",
          moon_illumination: 58,
          is_moon_up: 0,
          is_sun_up: 1,
        },
        hour: [
          {
            time_epoch: 1726074000,
            time: "2024-09-30 02:00",
            temp_c: 28.7,
            temp_f: 83.6,
            is_day: 0,
            condition: {
              text: "Clear ",
              icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
              code: 1000,
            },
            wind_mph: 9.8,
            wind_kph: 15.8,
            wind_degree: 191,
            wind_dir: "SSW",
            pressure_mb: 1016,
            pressure_in: 29.99,
            precip_mm: 0,
            precip_in: 0,
            snow_cm: 0,
            humidity: 74,
            cloud: 17,
            feelslike_c: 32.9,
            feelslike_f: 91.1,
            windchill_c: 28.7,
            windchill_f: 83.6,
            heatindex_c: 32.9,
            heatindex_f: 91.1,
            dewpoint_c: 23.7,
            dewpoint_f: 74.6,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10,
            vis_miles: 6,
            gust_mph: 13.3,
            gust_kph: 21.3,
            uv: 0,
          },
        ],
      },
      {
        date: "2024-10-05",
        date_epoch: 1726099200,
        day: {
          maxtemp_c: 32.5,
          maxtemp_f: 90.4,
          mintemp_c: 28.3,
          mintemp_f: 82.9,
          avgtemp_c: 30,
          avgtemp_f: 85.9,
          maxwind_mph: 16.6,
          maxwind_kph: 26.6,
          totalprecip_mm: 0.24,
          totalprecip_in: 0.01,
          avgvis_km: 10,
          avgvis_miles: 6,
          avghumidity: 67,
          daily_will_it_rain: 1,
          daily_chance_of_rain: 86,
          daily_will_it_snow: 0,
          daily_chance_of_snow: 0,
          condition: {
            text: "Patchy rain nearby",
            icon: "//cdn.weatherapi.com/weather/64x64/day/176.png",
            code: 1063,
          },
          uv: 7,
        },
        astro: {
          sunrise: "05:22 AM",
          sunset: "05:53 PM",
          moonrise: "01:53 PM",
          moonset: "11:09 PM",
          moon_phase: "Waxing Gibbous",
          moon_illumination: 58,
          is_moon_up: 0,
          is_sun_up: 1,
        },
        hour: [
          {
            time_epoch: 1726074000,
            time: "2024-09-30 02:00",
            temp_c: 28.7,
            temp_f: 83.6,
            is_day: 0,
            condition: {
              text: "Clear ",
              icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
              code: 1000,
            },
            wind_mph: 9.8,
            wind_kph: 15.8,
            wind_degree: 191,
            wind_dir: "SSW",
            pressure_mb: 1016,
            pressure_in: 29.99,
            precip_mm: 0,
            precip_in: 0,
            snow_cm: 0,
            humidity: 74,
            cloud: 17,
            feelslike_c: 32.9,
            feelslike_f: 91.1,
            windchill_c: 28.7,
            windchill_f: 83.6,
            heatindex_c: 32.9,
            heatindex_f: 91.1,
            dewpoint_c: 23.7,
            dewpoint_f: 74.6,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10,
            vis_miles: 6,
            gust_mph: 13.3,
            gust_kph: 21.3,
            uv: 0,
          },
        ],
      },
      {
        date: "2024-10-06",
        date_epoch: 1726099200,
        day: {
          maxtemp_c: 32.5,
          maxtemp_f: 90.4,
          mintemp_c: 28.3,
          mintemp_f: 82.9,
          avgtemp_c: 30,
          avgtemp_f: 85.9,
          maxwind_mph: 16.6,
          maxwind_kph: 26.6,
          totalprecip_mm: 0.24,
          totalprecip_in: 0.01,
          avgvis_km: 10,
          avgvis_miles: 6,
          avghumidity: 67,
          daily_will_it_rain: 1,
          daily_chance_of_rain: 86,
          daily_will_it_snow: 0,
          daily_chance_of_snow: 0,
          condition: {
            text: "Patchy rain nearby",
            icon: "//cdn.weatherapi.com/weather/64x64/day/176.png",
            code: 1063,
          },
          uv: 7,
        },
        astro: {
          sunrise: "05:22 AM",
          sunset: "05:53 PM",
          moonrise: "01:53 PM",
          moonset: "11:09 PM",
          moon_phase: "Waxing Gibbous",
          moon_illumination: 58,
          is_moon_up: 0,
          is_sun_up: 1,
        },
        hour: [
          {
            time_epoch: 1726074000,
            time: "2024-09-30 02:00",
            temp_c: 28.7,
            temp_f: 83.6,
            is_day: 0,
            condition: {
              text: "Clear ",
              icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
              code: 1000,
            },
            wind_mph: 9.8,
            wind_kph: 15.8,
            wind_degree: 191,
            wind_dir: "SSW",
            pressure_mb: 1016,
            pressure_in: 29.99,
            precip_mm: 0,
            precip_in: 0,
            snow_cm: 0,
            humidity: 74,
            cloud: 17,
            feelslike_c: 32.9,
            feelslike_f: 91.1,
            windchill_c: 28.7,
            windchill_f: 83.6,
            heatindex_c: 32.9,
            heatindex_f: 91.1,
            dewpoint_c: 23.7,
            dewpoint_f: 74.6,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10,
            vis_miles: 6,
            gust_mph: 13.3,
            gust_kph: 21.3,
            uv: 0,
          },
        ],
      },
      {
        date: "2024-10-07",
        date_epoch: 1726099200,
        day: {
          maxtemp_c: 32.5,
          maxtemp_f: 90.4,
          mintemp_c: 28.3,
          mintemp_f: 82.9,
          avgtemp_c: 30,
          avgtemp_f: 85.9,
          maxwind_mph: 16.6,
          maxwind_kph: 26.6,
          totalprecip_mm: 0.24,
          totalprecip_in: 0.01,
          avgvis_km: 10,
          avgvis_miles: 6,
          avghumidity: 67,
          daily_will_it_rain: 1,
          daily_chance_of_rain: 86,
          daily_will_it_snow: 0,
          daily_chance_of_snow: 0,
          condition: {
            text: "Patchy rain nearby",
            icon: "//cdn.weatherapi.com/weather/64x64/day/176.png",
            code: 1063,
          },
          uv: 7,
        },
        astro: {
          sunrise: "05:22 AM",
          sunset: "05:53 PM",
          moonrise: "01:53 PM",
          moonset: "11:09 PM",
          moon_phase: "Waxing Gibbous",
          moon_illumination: 58,
          is_moon_up: 0,
          is_sun_up: 1,
        },
        hour: [
          {
            time_epoch: 1726074000,
            time: "2024-09-30 02:00",
            temp_c: 28.7,
            temp_f: 83.6,
            is_day: 0,
            condition: {
              text: "Clear ",
              icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
              code: 1000,
            },
            wind_mph: 9.8,
            wind_kph: 15.8,
            wind_degree: 191,
            wind_dir: "SSW",
            pressure_mb: 1016,
            pressure_in: 29.99,
            precip_mm: 0,
            precip_in: 0,
            snow_cm: 0,
            humidity: 74,
            cloud: 17,
            feelslike_c: 32.9,
            feelslike_f: 91.1,
            windchill_c: 28.7,
            windchill_f: 83.6,
            heatindex_c: 32.9,
            heatindex_f: 91.1,
            dewpoint_c: 23.7,
            dewpoint_f: 74.6,
            will_it_rain: 0,
            chance_of_rain: 0,
            will_it_snow: 0,
            chance_of_snow: 0,
            vis_km: 10,
            vis_miles: 6,
            gust_mph: 13.3,
            gust_kph: 21.3,
            uv: 0,
          },
        ],
      },
    ],
  },
} satisfies ForecastWeatherData
