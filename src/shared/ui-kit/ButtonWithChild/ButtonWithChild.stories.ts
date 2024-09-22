import {Meta, StoryObj} from "@storybook/react"
import {ButtonWithChild} from "./ui/ButtonWithChild.tsx"

const meta: Meta<typeof ButtonWithChild> = {
  title: "Atoms/ButtonWithChild",
  component: ButtonWithChild,
  tags: ["autodocs"],
}

export const Primary: StoryObj<typeof ButtonWithChild> = {
  args: {
    children: "Button",
  }
}
export default meta
