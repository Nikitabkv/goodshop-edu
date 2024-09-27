import s from "./ManageButtonGroup.module.scss"
import ButtonWithChild from "../../../shared/ui-kit/ButtonWithChild"
import {FC, MouseEvent} from "react"
import {CartIcon, MinusIcon, PlusIcon, BigMinusIcon, BigPlusIcon} from "../../../shared/icons"
import {updateProduct} from "../../../pages/Cart/model/cartAsyncThunk.ts";
import {useAppDispatch, useAppSelector} from "../../../App/store/hooks.ts";

interface ManageButtonGroupProps {
  countValue: number
  cartButtonClassName?: string
  buttonClassName?: string
  iconSize?: string
  itemId: number
}

const icons = {
  s: {
    minus: MinusIcon,
    plus: PlusIcon
  },
  l: {
    minus: BigMinusIcon,
    plus: BigPlusIcon
  }
}


export const ManageButtonGroup:FC<ManageButtonGroupProps> = ({countValue, itemId, buttonClassName, cartButtonClassName, iconSize = 's'}) => {
  const SizedMinusIcon = icons[iconSize as keyof typeof icons].minus
  const SizedPlusIcon = icons[iconSize as keyof typeof icons].plus
  const products = useAppSelector(state => state.cart.cartData.products)
  const isUpdating = useAppSelector((state) => state.cart.isUpdating)
  const cartId = useAppSelector(state => state.cart.cartData.id)
  const dispatch = useAppDispatch()

  const updateItemHandler = (evt: MouseEvent, newQuantity: number) => {
    evt.preventDefault();
    if (!isUpdating)  {
      dispatch(updateProduct({
        cartId,
        products: [{id: itemId, quantity: newQuantity}, ...products.filter(el => el.id !== itemId)]
      }))
    }
  }

  return (
    <div className={s.buttons}>
      {countValue === 0 ? (
        <ButtonWithChild
          ariaLabel={'Add to cart'}
          className={s.button + (cartButtonClassName ? ' ' + cartButtonClassName : '')}
          clickHandler={(evt) => updateItemHandler(evt, countValue + 1)}
        >
          {iconSize === 's' ? <CartIcon aria-hidden="true" width={18} height={18}/> : 'Add to cart'}
        </ButtonWithChild>
      ) : (
        <>
          <ButtonWithChild
            ariaLabel={'Reduce the number of items'}
            className={s.button + (buttonClassName ? ' ' + buttonClassName : '')}
            clickHandler={(evt) => updateItemHandler(evt, countValue - 1)}
          >
            <SizedMinusIcon aria-hidden="true"/>
          </ButtonWithChild>
          <span
            aria-label={`${countValue} item${countValue > 1 ? 's' : ''}`}
            tabIndex={0}
            className={s.itemsCount}
          >
                  {countValue} item{countValue > 1 ? 's' : ''}
                </span>
          <ButtonWithChild
            ariaLabel={'Increase the number of items'}
            className={s.button + (buttonClassName ? ' ' + buttonClassName : '')}
            clickHandler={(evt) => updateItemHandler(evt, countValue + 1)}
          >
            <SizedPlusIcon aria-hidden="true"/>
          </ButtonWithChild>
        </>
      )
      }
    </div>
  )
}
