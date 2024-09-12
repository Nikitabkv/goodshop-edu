import {FC, ReactNode} from "react"
import s from "./Container.module.scss"

interface ContainerProps {
  children: ReactNode
  className?: string
}

export const Container:FC<ContainerProps> = ({ children, className}) => (
  <div className={s.wrapper  + (className ? ' ' + className : '')}>
    <div className={s.container}>
      {children}
    </div>
  </div>
)