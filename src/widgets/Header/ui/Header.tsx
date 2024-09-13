import s from './Header.module.scss'
import {Link} from "react-router-dom"
import Container from "../../../shared/ui-kit/Container"
import {CartIcon} from "../../../shared/icons"

export const Header = () => (
  <header className={s.header}>
    <Container>
      <div className={s.container}>
        <Link to={'/'}>
          <span className={s.logo}>
            Goods4you
          </span>
        </Link>

        <nav className={s.nav}>
          <Link className={s.navLink} to={"/catalog"}>Catalog</Link>
          <Link className={s.navLink} to={"/faq"}>FAQ</Link>
          <Link className={s.navLink} to={"/cart"}>
            Cart
            <CartIcon />
            <span className={s.counter}>99+</span>
          </Link>
          <Link className={s.navLink} to={"/Johnson-Smith"}>Johnson Smith</Link>
        </nav>
      </div>
    </Container>
  </header>
)
