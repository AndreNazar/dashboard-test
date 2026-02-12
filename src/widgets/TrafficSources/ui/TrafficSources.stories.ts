import "@styles/index.scss"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { TrafficSources } from "./TrafficSources"

const meta = {
  title: "widgets/TrafficSources",
  component: TrafficSources,
  argTypes: {},
} satisfies Meta<typeof TrafficSources>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
