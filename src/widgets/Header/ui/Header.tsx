import s from './Header.module.scss'
import {Link} from "react-router-dom"
import Container from "../../../shared/ui-kit/Container"
import {CartIcon} from "../../../shared/icons"
import NavLink from "../../../features/NavLink"

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
          <NavLink to={"/#catalog"}>Catalog</NavLink>
          <NavLink to={"/#faq"}>FAQ</NavLink>
          <NavLink to={"/cart"}>
            Cart
            <CartIcon aria-hidden="true" />
            <span className={s.counter}>99+</span>
          </NavLink>
          <NavLink to={"#"}>Johnson Smith</NavLink>
        </nav>
      </div>
    </Container>
  </header>
)
