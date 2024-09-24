import type { Meta, StoryObj } from "@storybook/react"

import { Table, TBody, Td, Th, THead, Tr } from "."

const meta = {
  title: "UI/Table",
  component: Table,
  tags: ["autodocs"],
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Table>
      <THead>
        <Tr>
          <Th>Header 1</Th>
          <Th>Header 2</Th>
          <Th>Header 3</Th>
          <Th>Header 4</Th>
          <Th>Header 5</Th>
          <Th>Header 6</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Td>Row 1</Td>
          <Td>Row 2</Td>
          <Td>Row 3</Td>
          <Td>Row 4</Td>
          <Td>Row 5</Td>
          <Td>Row 6</Td>
        </Tr>
        <Tr>
          <Td>Row 1</Td>
          <Td>Row 2</Td>
          <Td>Row 3</Td>
          <Td>Row 4</Td>
          <Td>Row 5</Td>
          <Td>Row 6</Td>
        </Tr>
        <Tr>
          <Td>Row 1</Td>
          <Td>Row 2</Td>
          <Td>Row 3</Td>
          <Td>Row 4</Td>
          <Td>Row 5</Td>
          <Td>Row 6</Td>
        </Tr>
        <Tr>
          <Td>Row 1</Td>
          <Td>Row 2</Td>
          <Td>Row 3</Td>
          <Td>Row 4</Td>
          <Td>Row 5</Td>
          <Td>Row 6</Td>
        </Tr>
        <Tr>
          <Td>Row 1</Td>
          <Td>Row 2</Td>
          <Td>Row 3</Td>
          <Td>Row 4</Td>
          <Td>Row 5</Td>
          <Td>Row 6</Td>
        </Tr>
        <Tr>
          <Td>Row 1</Td>
          <Td>Row 2</Td>
          <Td>Row 3</Td>
          <Td>Row 4</Td>
          <Td>Row 5</Td>
          <Td>Row 6</Td>
        </Tr>
      </TBody>
    </Table>
  ),
}
