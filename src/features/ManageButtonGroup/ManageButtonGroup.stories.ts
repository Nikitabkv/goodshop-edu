import {Meta, StoryObj} from "@storybook/react"
import {ManageButtonGroup} from "./ui/ManageButtonGroup.tsx"

const meta: Meta<typeof ManageButtonGroup> = {
  title: "Molecules/ManageButtonGroup",
  component: ManageButtonGroup,
  tags: ["autodocs"],
}

export const ZeroCount: StoryObj<typeof ManageButtonGroup> = {
  args: {
    countValue: 0,
  }
}

export const WithCount: StoryObj<typeof ManageButtonGroup> = {
  args: {
    countValue: 5,
  }
}

export const ZeroCountWithBigIcons: StoryObj<typeof ManageButtonGroup> = {
  args: {
    countValue: 0,
    iconSize: 'l'
  }
}

export const WithBigIcons: StoryObj<typeof ManageButtonGroup> = {
  args: {
    countValue: 5,
    iconSize: 'l'
  }
}
export default meta
