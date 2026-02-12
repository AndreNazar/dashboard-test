import type { Meta, StoryObj } from "@storybook/react-vite"
import "@styles/index.scss"
import { SocialLogo } from "./SocialLogo"
import { logos } from "../constants/logos"

const meta = {
  title: "shared/SocialLogo",
  component: SocialLogo,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: Object.keys(logos),
      description: "Тип логотипа",
    },
  },
} satisfies Meta<typeof SocialLogo>

export default meta

type Story = StoryObj<typeof meta>

export const Visual: Story = {
  args: {
    type: "telegram",
  },
}
