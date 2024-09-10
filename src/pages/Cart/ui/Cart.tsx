import s from './Cart.module.scss'
import Container from "../../../shared/ui-kit/Container"
import CartItem from "../../../widgets/CartItem"
import Title from "../../../shared/ui-kit/Title"
import CartPrices from "../../../widgets/CartPrices"

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
    <div className={s.cart}>
      <Container>
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
    </div>
)
}
