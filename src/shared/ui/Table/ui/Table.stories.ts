import type { Meta, StoryObj } from "@storybook/react-vite"
import { Table } from "./Table"

const meta = {
  title: "shared/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {
    data: {
      control: "object",
      description: "Данные таблицы",
    },
  },
} satisfies Meta<typeof Table>

export default meta

type Story = StoryObj<typeof meta>

export const Visual: Story = {
  args: {
    data: {
      headers: ["Header 1", "Header 2", "Header 3"],
      items: [
        ["Item 1", "Item 2", "Item 3"],
        ["Item 4", "Item 5", "Item 6"],
        ["Item 7", "Item 8", "Item 9"],
      ],
    },
  },
}
