import s from './Footer.module.scss'
import {Link} from "react-router-dom"

export const Footer = () => (
  <header className={s.footer}>
    <div className={s.container}>
      <span className={s.logo}>
        Goods4you
      </span>

      <nav className={s.nav}>
        <Link className={s.navLink} to={"/catalog"}>Catalog</Link>
        <Link className={s.navLink} to={"/faq"}>FAQ</Link>
      </nav>
    </div>
  </header>
)
