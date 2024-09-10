import s from './ButtonWithChild.module.scss'
import {FC, ReactNode} from "react"

interface ButtonWithChildProps {
  children: ReactNode
  className?: string
  clickHandler?: () => void
}

export const ButtonWithChild:FC<ButtonWithChildProps> = ({children, className, clickHandler}) => {
  return (
    <button className={s.button + ' ' + className} onClick={clickHandler}>
      {children}
    </button>
  )
}