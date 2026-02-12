import type { Meta, StoryObj } from "@storybook/react-vite"
import { TotalVisits } from "./TotalVisits"
import "@styles/index.scss"

const meta = {
  title: "widgets/TotalVisits",
  component: TotalVisits,
  argTypes: {},
} satisfies Meta<typeof TotalVisits>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
