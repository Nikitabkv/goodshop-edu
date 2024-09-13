import s from './Footer.module.scss'
import {Link} from "react-router-dom"
import {Container} from "../../../shared/ui-kit/Container/ui/Container.tsx";

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
          <Link className={s.navLink} to={"/#catalog"}>Catalog</Link>
          <Link className={s.navLink} to={"/#faq"}>FAQ</Link>
        </nav>
      </div>
    </Container>
  </footer>
)
