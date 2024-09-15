import s from './Cart.module.scss'
import {Helmet} from "react-helmet"
import Container from "../../../shared/ui-kit/Container"
import CartItem from "../../../features/CartItem"
import Title from "../../../shared/ui-kit/Title"
import CartPrices from "../../../features/CartPrices"

const cartItems = [
  {
    id: 1,
    name: 'Essence Mascara Lash Princess',
    price: 110,
    count: 1,
    isDeleted: false
  },
  {
    id: 2,
    name: 'Essence Mascara Lash Princess',
    price: 110,
    count: 1,
    isDeleted: false
  },
  {
    id: 3,
    name: 'Essence Mascara Lash Princess',
    price: 110,
    count: 5,
    isDeleted: false
  },
  {
    id: 4,
    name: 'Essence Mascara Lash Princess',
    price: 110,
    count: 1,
    isDeleted: true
  },
]

export const Cart = () => {
  return (
    <>
      <Helmet>
        <title>My cart | Goods4you</title>
        <meta name='description' content='Any products from famous brands with worldwide delivery'/>
      </Helmet>
      <main className={s.cart}>
        <Container containerClassName={s.cartContainer}>
          <Title tag={'h2'}>My cart</Title>
          <div className={s.cartRow}>
            <div className={s.itemsWrapper}>
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item}/>
              ))}
            </div>
            <div className={s.itemsPrice}>
              <CartPrices/>
            </div>
          </div>
        </Container>
      </main>
    </>
  )
}
