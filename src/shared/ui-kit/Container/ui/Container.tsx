import {FC, ReactNode} from "react"
import s from "./Container.module.scss"
import IntrinsicElements = React.JSX.IntrinsicElements;

interface ContainerProps {
  children: ReactNode
  wrapperClassName?: string
  containerClassName?: string
  Tag?: keyof IntrinsicElements;
}

export const Container:FC<ContainerProps> = ({children, wrapperClassName, containerClassName, Tag = 'div'}) => (
  <div className={s.wrapper + (wrapperClassName ? ' ' + wrapperClassName : '')}>
    <Tag className={s.container + (containerClassName ? ' ' + containerClassName : '')}>
      {children}
    </Tag>
  </div>
)
