import type { Meta, StoryObj } from "@storybook/react"

import { Loader } from "."

const meta = {
  title: "UI/Loader",
  component: Loader,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Small: Story = {
  args: {
    size: "sm",
  },
}

export const Medium: Story = {
  args: {
    size: "md",
  },
}

export const Large: Story = {
  args: {
    size: "lg",
  },
}
