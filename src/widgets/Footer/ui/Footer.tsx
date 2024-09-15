import s from './Footer.module.scss'
import {Link} from "react-router-dom"
import {Container} from "../../../shared/ui-kit/Container/ui/Container.tsx"
import NavLink from "../../NavLink"

export const Footer = () => (
  <footer className={s.footer}>
    <Container>
      <div className={s.container}>
        <Link to={'/'}>
          <span className={s.logo}>
            Goods4you
          </span>
        </Link>

        <nav className={s.nav}>
          <NavLink to={"/#catalog"} >Catalog</NavLink>
          <NavLink to={"/#faq"}>FAQ</NavLink>
        </nav>
      </div>
    </Container>
  </footer>
)
