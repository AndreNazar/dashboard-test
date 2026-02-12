import type { Meta, StoryObj } from "@storybook/react-vite"
import { Container } from "./Container"
import "@styles/index.scss"

const meta = {
  title: "shared/Container",
  component: Container,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Заголовок контейнера",
    },
    feature: {
      control: "text",
      description: "Фича справа от заголовка",
    },
  },
} satisfies Meta<typeof Container>

export default meta

type Story = StoryObj<typeof meta>

export const Visual: Story = {
  args: {
    title: "Title",
  },
}
