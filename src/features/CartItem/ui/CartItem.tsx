import s from "./CartItem.module.scss"
import img from "../../../shared/mockFiles/img.png"
import ButtonWithChild from "../../../shared/ui-kit/ButtonWithChild"
import {FC, useState} from "react"
import {Link} from "react-router-dom"
import {Title} from "../../../shared/ui-kit/Title/ui/Title.tsx"
import {CartIcon, MinusIcon, PlusIcon} from "../../../shared/icons"

interface CartItemProps {
  item: {
    id: number
    name: string
    price: number
    count: number
    isDeleted: boolean
  }
}

export const CartItem:FC<CartItemProps> = ({item}) => {
  const {name, price, count, isDeleted} = item
  const [countValue, setCountValue] = useState(count)

  return (
    <div className={s.item + ' ' + (isDeleted ? s.removed : '')}>
      <div className={s.itemInfo + ' ' + (isDeleted ? s.removed : '')}>
        <img src={img} alt="Essence Mascara Lash Princess" width={100} height={100} />
        <div className={s.itemPriceCol}>
          <Title tag={'h3'} tabIndex={-1}>
            <Link to={`/product/${item.id}`}>
              {name}
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
                disabled={countValue <= 0}
                clickHandler={() => setCountValue(countValue - 1)}>
                <MinusIcon aria-hidden="true" />
              </ButtonWithChild>
              <span tabIndex={0} aria-label={`${countValue} ${countValue > 1 ? 'items' : 'item'}`}>
                {countValue} {countValue > 1 ? 'items' : 'item'}
              </span>
              <ButtonWithChild
                ariaLabel={'Increase the number of items'}
                className={s.button}
                clickHandler={() => setCountValue(countValue + 1)}>
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
