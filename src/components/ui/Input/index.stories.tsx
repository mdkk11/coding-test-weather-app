import type { Meta, StoryObj } from "@storybook/react"
import { expect, fn, userEvent, within } from "@storybook/test"

import { Input } from "."

const meta = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    defaultValue: "",
    onChange: fn(),
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

const testInput: Story["play"] = async ({ args, canvasElement, step }) => {
  const canvas = within(canvasElement)
  const input = await canvas.findByRole("textbox")

  await step("テキストボックスに文字を入力できること", async () => {
    await userEvent.type(input, "Hello, World!")
    await expect(input).toHaveValue("Hello, World!")
    await expect(args.onChange).toHaveBeenCalled()
  })

  await step("テキストボックスがフォーカスできること", async () => {
    input.focus()
    await expect(input).toHaveFocus()
    await userEvent.tab({ shift: true })
    await expect(input).not.toHaveFocus()
    await userEvent.tab()
    await expect(input).toHaveFocus()
    input.blur()
  })

  await step("テキストボックスがキーボードで操作できること", async () => {
    input.focus()
    await userEvent.keyboard("Hello")
    await expect(input).toHaveValue("Hello")
    await expect(args.onChange).toHaveBeenCalled()
    input.blur()
  })
}

const testDisabledInput: Story["play"] = async ({ args, canvasElement, step }) => {
  const canvas = within(canvasElement)
  const input = await canvas.findByRole("textbox")

  await step("テキストボックスが入力できないこと", async () => {
    await userEvent.type(input, "Hello, World!")
    await expect(input).toHaveValue("")
    await expect(args.onChange).not.toHaveBeenCalled()
  })

  await step("テキストボックスがフォーカスできないこと", async () => {
    input.focus()
    await expect(input).not.toHaveFocus()
  })

  await step("テキストボックスがキーボードで操作できないこと", async () => {
    input.focus()
    await userEvent.keyboard("Hello")
    await expect(input).toHaveValue("")
    await expect(args.onChange).not.toHaveBeenCalled()
  })
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  play: testDisabledInput,
}

export const Required: Story = {
  args: {
    defaultValue: "",
    required: true,
  },
  play: testInput,
}
