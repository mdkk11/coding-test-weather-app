import type { Meta, StoryObj } from "@storybook/react"

import { Section } from "."

const meta = {
  title: "UI/Section",
  component: Section,
  tags: ["autodocs"],
  args: {
    children: <div style={{ width: "100%", minHeight: "100vh", background: "gray" }}></div>,
  },
} satisfies Meta<typeof Section>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
