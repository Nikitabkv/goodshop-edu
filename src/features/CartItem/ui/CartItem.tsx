import s from "./CartItem.module.scss"
import ButtonWithChild from "../../../shared/ui-kit/ButtonWithChild"
import {FC, useState} from "react"
import {Link} from "react-router-dom"
import {Title} from "../../../shared/ui-kit/Title/ui/Title.tsx"
import {CartIcon, MinusIcon, PlusIcon} from "../../../shared/icons"

interface CartItemProps {
  item: {
    id: number
    price: number
    title: string
    thumbnail: string
    quantity: number
    isDeleted: boolean
  }
}

export const CartItem:FC<CartItemProps> = ({item}) => {
  const {title, thumbnail, quantity, price, isDeleted} = item
  const [quantityValue, setQuantityValue] = useState(quantity)

  return (
    <div className={s.item + ' ' + (isDeleted ? s.removed : '')}>
      <div className={s.itemInfo + ' ' + (isDeleted ? s.removed : '')}>
        <img src={thumbnail} alt="Essence Mascara Lash Princess" width={100} height={100} />
        <div className={s.itemPriceCol}>
          <Title tag={'h3'} tabIndex={-1}>
            <Link to={`/product/${item.id}`}>
              {title}
            </Link>
          </Title>
          <span className={s.price}>
            ${price}
          </span>
        </div>
      </div>

      <div className={s.manageItem}>
        {!isDeleted ? (
          <>
            <div className={s.addRemoveButtons}>
              <ButtonWithChild
                ariaLabel={'Reduce the number of items'}
                className={s.button}
                disabled={quantityValue <= 0}
                clickHandler={() => setQuantityValue(quantityValue - 1)}>
                <MinusIcon aria-hidden="true" />
              </ButtonWithChild>
              <span tabIndex={0} aria-label={`${quantityValue} ${quantityValue > 1 ? 'items' : 'item'}`}>
                {quantityValue} {quantityValue > 1 ? 'items' : 'item'}
              </span>
              <ButtonWithChild
                ariaLabel={'Increase the number of items'}
                className={s.button}
                clickHandler={() => setQuantityValue(quantityValue + 1)}>
                <PlusIcon aria-hidden="true" />
              </ButtonWithChild>
            </div>
            <button className={s.deleteButton}>Delete</button>
          </>
        ) : (
          <div className={s.restoreButtonWrapper}>
            <ButtonWithChild
              className={s.restoreButton}
              clickHandler={() => console.log('Добавить в корзину')}
              ariaLabel={'Return item to cart'}>
              <CartIcon aria-hidden="true" />
            </ButtonWithChild>
          </div>
        )}
      </div>
    </div>
  )
}
