import { Meta, StoryObj } from "@storybook/react"

import { mock } from "@/features/weather/services/search/mock"

import { Presenter } from "./presenter"

const meta = {
  title: "Features/Weather/Autocomplete/Presenter",
  tags: ["autodocs"],
  component: Presenter,
  args: {
    locationList: mock,
    onClickHandler: () => {},
  },
} satisfies Meta<typeof Presenter>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const NoLocationList: Story = {
  args: {
    locationList: [],
  },
}
