import type { Meta, StoryObj } from "@storybook/react"

import { Loading } from "./loading"

const meta = {
  title: "Features/Weather/WeatherOverview/Loading",
  tags: ["autodocs"],
  component: Loading,
} satisfies Meta<typeof Loading>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
