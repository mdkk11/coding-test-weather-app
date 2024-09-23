import type { Meta, StoryObj } from "@storybook/react"

import { Heading } from "."

const meta = {
  title: "UI/Heading",
  component: Heading,
  tags: ["autodocs"],
  args: { level: "h1", children: "見出し".repeat(3) },
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Small: Story = {
  args: { size: "sm" },
}

export const Medium: Story = {
  args: { size: "md" },
}

export const Large: Story = {
  args: { size: "lg" },
}

export const XLarge: Story = {
  args: { size: "xl" },
}

export const XXLarge: Story = {
  args: { size: "2xl" },
}

export const XXXLarge: Story = {
  args: { size: "3xl" },
}
