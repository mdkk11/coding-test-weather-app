import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "../Button"
import { Heading } from "../Heading"
import { HeadGroup } from "."

const meta = {
  title: "UI/HeadGroup",
  component: HeadGroup,
  tags: ["autodocs"],
  args: {
    children: (
      <>
        <Heading className="grow" level={"h1"}>
          見出し見出し
        </Heading>
        <Button size="sm">詳細へ</Button>
      </>
    ),
  },
} satisfies Meta<typeof HeadGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
