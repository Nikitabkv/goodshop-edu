import s from "./QuestionItem.module.scss"
import {FC, useState} from "react"

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
        <svg className={s.crossIcon + (isOpen ? ' ' + s.open : '')} width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.9509 12.387L25 12.387V13.637L12.9509 13.637L12.9509 25.5002H11.5731L11.5731 13.637H0L0 12.387H11.5731V0.500244H12.9509V12.387Z"
            fill="white"/>
        </svg>
      </div>
      <div className={s.answerLine + (isOpen ? ' ' + s.open : '')}>
        {answer}
      </div>
    </div>
  )
}