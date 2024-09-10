import s from './Title.module.scss'
import {createElement, FC, ReactNode} from "react";

interface TitleProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  className?: string
  children: ReactNode
  fontWeight?: number
}

export const Title:FC<TitleProps> = ({tag = 'h1', className, children, fontWeight}) => {
  return (
    createElement(
      tag,
      {
        className: s.title + ' ' + (className ? className : ''),
        style: {fontWeight: fontWeight}
      },
      children
    )
  )
}
