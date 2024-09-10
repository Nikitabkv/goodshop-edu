import s from "./CartPrices.module.scss"

export const CartPrices = () => {
  return (
    <>
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
      <hr className={s.hr}/>
      <div className={s.totalPriceWithDiscount}>
        <span>
          Total price
        </span>
        <span className={s.info}>
          $590
        </span>
      </div>
    </>
  )
}
