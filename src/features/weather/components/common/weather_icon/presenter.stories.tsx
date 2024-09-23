import { Meta, StoryObj } from "@storybook/react"
import { Cloud, CloudRain, Snowflake, Sun } from "lucide-react"

import { Presenter } from "./presenter"

const meta = {
  title: "Features/Weather/Common/WeatherIcon/Presenter",
  tags: ["autodocs"],
  component: Presenter,
  args: {
    className: "text-black",
  },
} satisfies Meta<typeof Presenter>
export default meta

type Story = StoryObj<typeof meta>

export const Sunny: Story = {
  args: {
    Icon: Sun,
  },
}
export const Cloudy: Story = {
  args: {
    Icon: Cloud,
  },
}
export const Rainy: Story = {
  args: {
    Icon: CloudRain,
  },
}
export const Snowy: Story = {
  args: {
    Icon: Snowflake,
  },
}
