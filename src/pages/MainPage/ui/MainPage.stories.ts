import type { Meta, StoryObj } from "@storybook/react-vite"
import { MainPage } from "./MainPage"

const meta = {
  title: "pages/MainPage",
  component: MainPage,
  argTypes: {},
} satisfies Meta<typeof MainPage>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
