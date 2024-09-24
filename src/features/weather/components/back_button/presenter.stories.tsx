import { Meta, StoryObj } from "@storybook/react"

import { Presenter } from "./presenter"

const meta = {
  title: "Features/Weather/BackButton/Presenter",
  tags: ["autodocs"],
  component: Presenter,
  args: {
    children: "戻る",
  },
} satisfies Meta<typeof Presenter>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
