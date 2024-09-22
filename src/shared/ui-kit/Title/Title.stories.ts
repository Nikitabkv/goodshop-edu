import {Meta, StoryObj} from "@storybook/react"
import {Title} from "./ui/Title.tsx"

const meta: Meta<typeof Title> = {
  title: "Atoms/Title",
  component: Title,
  tags: ["autodocs"],
}

export const Primary: StoryObj<typeof Title> = {
  args: {
    children: "Title",
  }
}
export default meta
