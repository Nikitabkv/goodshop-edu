import {FC, ReactNode} from "react"
import s from "./Container.module.scss"

interface ContainerProps {
  children: ReactNode
  wrapperClassName?: string
  containerClassName?: string
}

export const Container:FC<ContainerProps> = ({ children, wrapperClassName, containerClassName}) => (
  <div className={s.wrapper + (wrapperClassName ? ' ' + wrapperClassName : '')}>
    <div className={s.container + (containerClassName ? ' ' + containerClassName : '')}>
      {children}
    </div>
  </div>
)