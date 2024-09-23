import { Meta, StoryObj } from "@storybook/react"

import * as WeatherIcon from "@/features/weather/components/common/weather_icon"
import * as WeatherInfoDetail from "@/features/weather/components/weather_info_detail"
import { mock } from "@/features/weather/services/forecast/mock"
import { getWeatherCategory, transformWeatherInfoForCurrent } from "@/features/weather/utils"

import { Presenter } from "./presenter"

const mockedCategory = getWeatherCategory(mock.current.condition.code)

const meta = {
  title: "Features/Weather/WeatherInfo/Presenter",
  component: Presenter,
  args: {
    weatherCategory: mockedCategory,
    weatherText: mock.current.condition.text,
    weatherIcon: <WeatherIcon.Container weatherCategory={mockedCategory} />,
  },
} satisfies Meta<typeof Presenter>
export default meta

type Story = StoryObj<typeof meta>

export const Sunny: Story = {
  args: {
    weatherCategory: "sunny",
    weatherText: "Sunny",
    weatherIcon: <WeatherIcon.Container weatherCategory={"sunny"} />,
    weatherInfoDetailNode: (
      <WeatherInfoDetail.Container weatherInfo={transformWeatherInfoForCurrent(mock.current)} />
    ),
  },
}

export const Cloudy: Story = {
  args: {
    weatherCategory: "cloudy",
    weatherText: "Cloudy",
    weatherIcon: <WeatherIcon.Container weatherCategory={"cloudy"} />,
    weatherInfoDetailNode: (
      <WeatherInfoDetail.Container weatherInfo={transformWeatherInfoForCurrent(mock.current)} />
    ),
  },
}
export const Rainy: Story = {
  args: {
    weatherCategory: "rainy",
    weatherText: "Rainy",
    weatherIcon: <WeatherIcon.Container weatherCategory={"rainy"} />,
    weatherInfoDetailNode: (
      <WeatherInfoDetail.Container weatherInfo={transformWeatherInfoForCurrent(mock.current)} />
    ),
  },
}

export const Snowy: Story = {
  args: {
    weatherCategory: "snowy",
    weatherText: "Snowy",
    weatherIcon: <WeatherIcon.Container weatherCategory={"snowy"} />,
    weatherInfoDetailNode: (
      <WeatherInfoDetail.Container weatherInfo={transformWeatherInfoForCurrent(mock.current)} />
    ),
  },
}
