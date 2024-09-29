import s from './ButtonWithChild.module.scss'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React, {FC, MouseEvent, ReactNode} from "react"

interface ButtonWithChildProps {
  children: ReactNode
  className?: string
  clickHandler: (e: MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  ariaLabel?: string
}

export const ButtonWithChild:FC<ButtonWithChildProps> = ({children, className, clickHandler, disabled, ariaLabel}) => {
  return (
    <button aria-label={ariaLabel} className={s.button + ' ' + className} onClick={clickHandler} disabled={disabled}>
      {children}
    </button>
  )
}
