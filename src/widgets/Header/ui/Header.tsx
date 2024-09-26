import s from './Header.module.scss'
import {Link, useNavigate} from "react-router-dom"
import Container from "../../../shared/ui-kit/Container"
import {CartIcon} from "../../../shared/icons"
import NavLink from "../../../features/NavLink"
import {useAppDispatch, useAppSelector} from "../../../App/store/hooks.ts"
import {useEffect} from "react"
import {useGetUserInfoQuery} from "../../../pages/LoginPage/model/api.ts"
import {getCartByUser} from "../../../pages/Cart/model/cartAsyncThunk.ts"
// import {setUserId} from "../../../pages/Cart/model/cart.slice.ts";
// import {getCartByUser} from "../../../pages/Cart/model/cartAsyncThunk.ts"
// import {setUserId} from "../../../pages/Cart/model/cart.slice.ts"

export const Header = () => {
  const cartCount = useAppSelector(state => state.cart.cartData.totalQuantity)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {data, error, isFetching, isLoading} = useGetUserInfoQuery()

  useEffect(() => {
    if (!localStorage.getItem('TOKEN')) {
      navigate('/login')
    }
  }, [])

  useEffect(() => {
    console.log(data, error, isLoading)
  }, [isFetching]);

  useEffect(() => {
    console.log(data, error, isFetching)
    if (data && data.id) {
      dispatch(getCartByUser(data.id))
    }
    if (error) {
      navigate('/login')
    }
  }, [data, error, isFetching]);

  // dispatch(getCartByUser(
  //   // 14: Корзина пустая
  //   // 15: Корзина с 6 товарами
  //   // 14
  //   15
  // ))

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
