import type { Meta, StoryObj } from "@storybook/react-vite"
import { TotalSocialBlock } from "./TotalSocialBlock"
import "@styles/index.scss"

const meta = {
  title: "widgets/TotalSocialBlock",
  component: TotalSocialBlock,
  tags: ["autodocs"],
  argTypes: {
    social: {
      control: "select",
    },
  },
} satisfies Meta<typeof TotalSocialBlock>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    social: "telegram",
  },
}
