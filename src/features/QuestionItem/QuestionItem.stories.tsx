import {Meta, StoryObj} from "@storybook/react"
import {QuestionItem} from "./ui/QuestionItem.tsx"

const meta: Meta<typeof QuestionItem> = {
  title: "Molecules/QuestionItem",
  component: QuestionItem,
  tags: ["autodocs"],
}

export const ClosedQuestion: StoryObj<typeof QuestionItem> = {
  args: {
    question: 'Question',
    answer: 'Answer',
    isOpen: false
  },
  decorators: [
    (Story) => (
      <div style={{background: '#484283', padding: 30, color: "white"}}>
        {Story()}
      </div>
    )
  ]
}

export const OpenedQuestion: StoryObj<typeof QuestionItem> = {
  args: {
    question: 'Question',
    answer: 'Answer',
    isOpen: true
  },
  decorators: [
    (Story) => (
      <div style={{background: '#484283', padding: 30, color: "white"}}>
        {Story()}
      </div>
    )
  ]
}

export default meta
