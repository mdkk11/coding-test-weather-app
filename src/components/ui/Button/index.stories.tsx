import type { Meta, StoryObj } from "@storybook/react"
import { expect, fn, userEvent, within } from "@storybook/test"

import { Button } from "."

const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: { children: "button", onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

const testButton: Story["play"] = async ({ args, canvasElement, step }) => {
  const canvas = within(canvasElement)
  const button = await canvas.findByRole("button")

  await step("ボタンをクリックできること", async () => {
    await userEvent.click(button)
    await expect(args.onClick).toHaveBeenCalled()
  })
}

const testDisabledButton: Story["play"] = async ({ args, canvasElement, step }) => {
  const canvas = within(canvasElement)
  const button = await canvas.findByRole("button")

  await step("ボタンがクリックできないこと", async () => {
    await userEvent.click(button, { pointerEventsCheck: 0 })
    await expect(args.onClick).not.toHaveBeenCalled()
  })
}

export const Default: Story = {
  play: testButton,
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  play: testDisabledButton,
}

export const Small: Story = {
  args: { size: "sm" },
}

export const Medium: Story = {
  args: { size: "md" },
}
