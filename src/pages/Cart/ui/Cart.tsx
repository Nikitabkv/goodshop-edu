import s from './Cart.module.scss'
import Container from "../../../shared/ui-kit/Container"
import CartItem from "../../../widgets/CartItem"

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
        <h1>My cart</h1>
        <div className={s.cartRow}>
          <div className={s.itemsWrapper}>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className={s.itemsPrice}>
            <div className={s.itemsCount}>
              <span>
                Total count
              </span>
              <span className={s.info}>
                3 items
              </span>
            </div>
            <div className={s.totalPrice}>
              <span>
                Price without discount
              </span>
              <span className={s.info}>
                $700
              </span>
            </div>
            <hr/>
            <div className={s.totalPriceWithDiscount}>
              <span>
                Total price
              </span>
              <span className={s.info}>
                $590
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
