import s from './Cart.module.scss'
import {Helmet} from "react-helmet"
import {useSelector} from "react-redux"
import Container from "../../../shared/ui-kit/Container"
import CartItem from "../../../features/CartItem"
import Title from "../../../shared/ui-kit/Title"
import CartPrices from "../../../features/CartPrices"
import {RootState} from "../../../App/store"

interface ItemProps {
  id: number
  price: number
  title: string
  thumbnail: string
  quantity: number
  isDeleted: boolean
}

export const Cart = () => {
  const products = useSelector((state: RootState) => state.cart.cartData.products)

  return (
    <>
      <Helmet>
        <title>My cart | Goods4you</title>
        <meta name='description' content='Any products from famous brands with worldwide delivery'/>
      </Helmet>
      <main className={s.cart}>
        <Container containerClassName={s.cartContainer}>
          <Title tag={'h2'}>My cart</Title>
          {products.length === 0
            ? <Title tag={'h3'}>Cart is empty</Title> :
            (
              <div className={s.cartRow}>
                <div className={s.itemsWrapper}>
                  {products.length > 0 && products.map((item: ItemProps) => (
                    <CartItem key={item.id} item={item}/>
                  ))}
                </div>
                <div className={s.itemsPrice}>
                  <CartPrices/>
                </div>
              </div>
            )}
        </Container>
      </main>
    </>
  )
}
