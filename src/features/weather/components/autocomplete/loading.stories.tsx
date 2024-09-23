import type { Meta, StoryObj } from "@storybook/react"

import { Loading } from "./loading"

const meta = {
  title: "Features/Weather/Autocomplete/Loading",
  tags: ["autodocs"],
  component: Loading,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Loading>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
