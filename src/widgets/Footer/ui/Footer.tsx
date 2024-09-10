import s from './Footer.module.scss'
import {Link} from "react-router-dom"
import {Container} from "../../../shared/ui-kit/Container/ui/Container.tsx";

export const Footer = () => (
  <header className={s.footer}>
    <Container>
      <div className={s.container}>
        <span className={s.logo}>
          Goods4you
        </span>

        <nav className={s.nav}>
          <Link className={s.navLink} to={"/catalog"}>Catalog</Link>
          <Link className={s.navLink} to={"/faq"}>FAQ</Link>
        </nav>
      </div>
    </Container>
  </header>
)
