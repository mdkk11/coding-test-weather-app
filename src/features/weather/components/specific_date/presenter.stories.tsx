import { Meta, StoryObj } from "@storybook/react"

import { format } from "@/utils"

import { Presenter } from "./presenter"

const date = "2024-10-01"

const meta = {
  title: "Features/Weather/SpecificDate/Presenter",
  tags: ["autodocs"],
  component: Presenter,
  args: {
    date: format(new Date(date), "yyyy-MM-dd"),
  },
} satisfies Meta<typeof Presenter>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
