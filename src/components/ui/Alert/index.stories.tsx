import type { Meta, StoryObj } from "@storybook/react"

import { Alert } from "."

const meta = {
  title: "UI/Alert",
  component: Alert,
  tags: ["autodocs"],
  args: {
    children: <pre>Something Error</pre>,
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
