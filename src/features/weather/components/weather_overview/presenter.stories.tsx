import { Meta, StoryObj } from "@storybook/react"
import { BrowserRouter } from "react-router-dom"

import * as LocationTitle from "@/features/weather/components/location_title"
import * as WeatherForecast from "@/features/weather/components/weather_forecast"
import * as WeatherInfo from "@/features/weather/components/weather_info"
import * as WeatherInfoDetail from "@/features/weather/components/weather_info_detail"
import { mock } from "@/features/weather/services/forecast/mock"
import { transformWeatherInfoForCurrent } from "@/features/weather/utils"

import { Presenter } from "./presenter"

const meta = {
  title: "Features/Weather/WeatherOverview/Presenter",
  component: Presenter,
  args: {
    locationTitleNode: <LocationTitle.Container location={mock.location} />,
    weatherInfoNode: (
      <WeatherInfo.Container
        condition={mock.current.condition}
        children={
          <WeatherInfoDetail.Container weatherInfo={transformWeatherInfoForCurrent(mock.current)} />
        }
      />
    ),
    weatherForecastNode: <WeatherForecast.Container forecast={mock.forecast} />,
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

export const Default: Story = {}
