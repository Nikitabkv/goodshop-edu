import s from './NavLink.module.scss'
import {Link} from "react-router-dom"
import {FC, ReactNode} from "react"

interface NavLinkProps {
  to: string
  children: ReactNode
}

export const NavLink:FC<NavLinkProps> = ({to, children}) => (
  <Link to={to} className={s.navLink}>
    {children}
  </Link>
)
