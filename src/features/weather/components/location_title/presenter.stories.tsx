import { Meta, StoryObj } from "@storybook/react"

import { Presenter } from "./presenter"

const meta = {
  title: "Features/Weather/LocationTitle/Presenter",
  tags: ["autodocs"],
  component: Presenter,
  args: {
    name: "Tokyo",
    region: "Tokyo",
    country: "Japan",
  },
} satisfies Meta<typeof Presenter>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
