import { Meta, StoryObj } from "@storybook/react"
import { BrowserRouter } from "react-router-dom"

import * as WeatherIcon from "@/features/weather/components/common/weather_icon"
import { mock } from "@/features/weather/services/forecast/mock"
import { getWeatherCategory } from "@/features/weather/utils"

import { Presenter } from "./presenter"

const tableHead = mock.forecast.forecastday.map((d) => d.date)
const tableBody = mock.forecast.forecastday.map((d) => {
  const code = d.day.condition.code
  return {
    code,
    icon: <WeatherIcon.Container weatherCategory={getWeatherCategory(code)} />,
  }
})

const meta = {
  title: "Features/Weather/WeatherForecast/Presenter",
  tags: ["autodocs"],
  component: Presenter,
  args: {
    tableHead,
    tableBody,
    linkProps: (date: string) => ({
      to: { pathname: `/specific_date`, search: `?location=${mock.location.region}&date=${date}` },
    }),
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof Presenter>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
