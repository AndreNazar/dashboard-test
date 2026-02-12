import type { Meta, StoryObj } from "@storybook/react-vite"
import { Geography } from "./Geography"
import "@styles/index.scss"

const meta = {
  title: "widgets/Geography",
  component: Geography,
  tags: ["autodocs"],
} satisfies Meta<typeof Geography>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
