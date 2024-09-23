import { Meta, StoryObj } from "@storybook/react"

import * as Autocomplete from "@/features/weather/components/autocomplete"
import { mock } from "@/features/weather/services/search/mock"

import { Presenter } from "./presenter"

const meta = {
  title: "Features/Weather/LocationInput/Presenter",
  tags: ["autodocs"],
  component: Presenter,
  args: {
    inputLocation: "Something location",
    isFocused: false,
    setInputLocation: () => {},
    handleFocus: () => {},
    isShowAutocomplete: true,
    autocompleteNode: <Autocomplete.Presenter locationList={mock} onClickHandler={() => {}} />,
  },
} satisfies Meta<typeof Presenter>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isFocused: true,
  },
}

export const NoMatchedLocation: Story = {
  args: {
    autocompleteNode: <Autocomplete.Presenter locationList={[]} onClickHandler={() => {}} />,
  },
}
