import type { Meta, StoryObj } from "@storybook/react-vite"
import "@styles/index.scss"
import { PercentValue } from "./PercentValue"
import type { PercentValueProps } from "../types"

const meta = {
  title: "shared/PercentValue",
  component: PercentValue,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "number",
      description: "Значение процента",
    },
    position: {
      control: "radio",
      options: ["left", "right"],
      description: "Позиция иконки треугольника",
    },
    size: {
      control: "radio",
      options: ["small", "medium"],
      description: "Размер текста и иконки",
    },
    status: {
      control: "radio",
      options: ["up", "down"],
      description: "Направление треугольника",
    },
  },
} satisfies Meta<PercentValueProps>

export default meta

type Story = StoryObj<typeof meta>

export const Visual: Story = {
  args: {
    value: 5.5,
  },
}
