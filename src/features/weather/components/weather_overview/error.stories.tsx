import type { Meta, StoryObj } from "@storybook/react"

import { Error } from "./error"

const meta = {
  title: "Features/Weather/WeatherOverview/Error",
  tags: ["autodocs"],
  component: Error,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Error>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    error: {
      message: "Internal Server Error",
    },
    resetErrorBoundary: () => {},
  },
}
