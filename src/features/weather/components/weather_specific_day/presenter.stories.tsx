import { Meta, StoryObj } from "@storybook/react"

import * as LocationTitle from "@/features/weather/components/location_title"
import * as WeatherInfo from "@/features/weather/components/weather_info"
import * as WeatherInfoDetail from "@/features/weather/components/weather_info_detail"
import { mock } from "@/features/weather/services/forecast/mock"
import { transformWeatherInfoForSpecificDay } from "@/features/weather/utils"

import { Presenter } from "./presenter"

const meta = {
  title: "Features/Weather/WeatherSpecificDay/Presenter",
  component: Presenter,
  args: {
    locationTitleNode: <LocationTitle.Container location={mock.location} />,
    weatherInfoNode: (
      <WeatherInfo.Container
        condition={mock.current.condition}
        children={
          <WeatherInfoDetail.Container
            weatherInfo={transformWeatherInfoForSpecificDay(mock.forecast.forecastday[0].day)}
          />
        }
      />
    ),
  },
} satisfies Meta<typeof Presenter>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
