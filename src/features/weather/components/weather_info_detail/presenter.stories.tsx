import { Meta, StoryObj } from "@storybook/react"

import { mock } from "@/features/weather/services/forecast/mock"
import { transformWeatherInfoForCurrent } from "@/features/weather/utils"

import { Presenter } from "./presenter"
import * as styles from "./story.css"

const meta = {
  title: "Features/Weather/WeatherInfoDetail/Presenter",
  component: Presenter,
  args: {},
  decorators: [
    (Story) => (
      <div className={styles.module}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Presenter>
export default meta

type Story = StoryObj<typeof meta>

export const Current: Story = {
  args: {
    weatherInfo: transformWeatherInfoForCurrent(mock.current),
  },
}
