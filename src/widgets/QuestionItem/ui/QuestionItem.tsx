import s from "./QuestionItem.module.scss"
import {FC, useState} from "react"
import {CrossIcon} from "../../../shared/icons"

interface QuestionProps {
  question: string
  answer: string
}

export const QuestionItem:FC<QuestionProps> = ({question, answer}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={s.wrapper + (isOpen ? ' ' + s.open : '')}>
      <div className={s.questionLine} onClick={() => setIsOpen(!isOpen)}>
        <span className={s.question}>{question}</span>
        <span className={s.crossIconWrapper + (isOpen ? ' ' + s.open : '')}>
          <CrossIcon />
        </span>
      </div>
      <div className={s.answerLine + (isOpen ? ' ' + s.open : '')}>
        {answer}
      </div>
    </div>
  )
}

//className={s.crossIcon + (isOpen ? ' ' + s.open : '')}