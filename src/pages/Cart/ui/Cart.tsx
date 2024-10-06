import s from './Cart.module.scss'
import {Helmet} from "react-helmet"
import {useSelector} from "react-redux"
import Container from "../../../shared/ui-kit/Container"
import CartItem from "../../../features/CartItem"
import Title from "../../../shared/ui-kit/Title"
import CartPrices from "../../../features/CartPrices"
import {RootState} from "../../../App/store"
import {useAppSelector} from "../../../App/store/hooks.ts"

export const Cart = () => {
  const products = useSelector((state: RootState) => state.cart.cartData.products)
  const removedProducts = useAppSelector((state) => state.cart.cartData.removedProducts)
  const isFetching = useAppSelector((state) => state.cart.isFetching)

  return (
    <>
      <Helmet>
        <title>My cart | Goods4you</title>
        <meta name='description' content='Any products from famous brands with worldwide delivery'/>
      </Helmet>
      <main className={s.cart}>
        <Container containerClassName={s.cartContainer}>
          <Title tag={'h2'}>My cart</Title>
          {isFetching && <div className={s.loading}>Loading...</div>}
          {!isFetching &&
            <>
              {products.concat(removedProducts).length > 0
                ? (
                  <div className={s.cartRow}>
                    <div className={s.itemsWrapper}>
                      {products.map((item) => (
                        <CartItem key={item.id} item={item}/>
                      ))}
                      {removedProducts.map((item) => (
                        <CartItem key={item.id} item={item}/>
                      ))}
                    </div>
                    <div className={s.itemsPrice}>
                      <CartPrices/>
                    </div>
                  </div>
                ) :
                <div className={s.noItems}>No items</div>
              }
            </>
          }
        </Container>
      </main>
    </>
  )
}
