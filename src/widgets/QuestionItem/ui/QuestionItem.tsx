import s from "./QuestionItem.module.scss"
import {FC, useState} from "react"
import {CrossIcon} from "../../../shared/icons"

interface QuestionProps {
  question: string
  answer: string
  isOpen?: boolean
}

export const QuestionItem:FC<QuestionProps> = ({question, answer, isOpen = false}) => {
  const [questionIsOpen, setQuestionIsOpen] = useState(isOpen)

  return (
    <div className={s.wrapper + (questionIsOpen ? ' ' + s.open : '')}>
      <div className={s.questionLine} onClick={() => setQuestionIsOpen(!questionIsOpen)}>
        <span className={s.question}>{question}</span>
        <span className={s.crossIconWrapper + (questionIsOpen ? ' ' + s.open : '')}>
          <CrossIcon />
        </span>
      </div>
      <div className={s.answerLine + (questionIsOpen ? ' ' + s.open : '')}>
        {answer}
      </div>
    </div>
  )
}
