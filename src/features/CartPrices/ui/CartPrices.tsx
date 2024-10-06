import s from "./CartPrices.module.scss"
import {useAppSelector} from "../../../App/store/hooks.ts";

export const CartPrices = () => {
  const cartData = useAppSelector((state) => state.cart.cartData)

  return (
    <>
      <div className={s.itemsCount}>
        <span>
          Total count
        </span>
        <span className={s.count}>
          {cartData.totalQuantity} {cartData.totalQuantity > 1 ? "items" : "item"}
        </span>
      </div>
      <div className={s.totalPrice}>
        <span>
          Price without discount
        </span>
        <span className={s.infoPrice}>
          ${cartData.total.toFixed(2)}
        </span>
      </div>
      <hr className={s.hr}/>
      <div className={s.totalPriceWithDiscount}>
        <span>
          Total price
        </span>
        <span className={s.infoPrice}>
          ${cartData.discountedTotal.toFixed(2)}
        </span>
      </div>
    </>
  )
}
