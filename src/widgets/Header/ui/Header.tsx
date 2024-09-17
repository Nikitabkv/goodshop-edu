import s from './Header.module.scss'
import {Link} from "react-router-dom"
import Container from "../../../shared/ui-kit/Container"
import {CartIcon} from "../../../shared/icons"
import NavLink from "../../../features/NavLink"
import {useAppSelector} from "../../../App/store/hooks.ts"

export const Header = () => {
  const cartCount = useAppSelector(state => state.cart.cartData.totalQuantity)

  return (
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
              {cartCount > 0 ? <span className={s.counter}>{cartCount}</span> : ''}
            </NavLink>
            <NavLink to={"#"}>Johnson Smith</NavLink>
          </nav>
        </div>
      </Container>
    </header>
  )

}
