import s from './ButtonWithChild.module.scss'
import {FC, MouseEvent, ReactNode} from "react"

interface ButtonWithChildProps {
  children: ReactNode
  className?: string
  clickHandler: (e: MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
}

export const ButtonWithChild:FC<ButtonWithChildProps> = ({children, className, clickHandler, disabled}) => {
  return (
    <button className={s.button + ' ' + className} onClick={clickHandler} disabled={disabled}>
      {children}
    </button>
  )
}
