import { Button } from "./Button"
import "@styles/index.scss"

const meta = {
  title: "shared/Button",
  component: Button,
  //   argTypes: {
  //     backgroundColor: {
  //       control: "select",
  //       options: ["red", "green", "blue"],
  //     },
  //   },
}

export default meta

export const Visual = {
  args: {
    children: "Button",
  },
}
