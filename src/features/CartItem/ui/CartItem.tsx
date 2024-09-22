import s from "./CartItem.module.scss"
import ButtonWithChild from "../../../shared/ui-kit/ButtonWithChild"
import {FC, useEffect, useState} from "react"
import {Link} from "react-router-dom"
import {Title} from "../../../shared/ui-kit/Title/ui/Title.tsx"
import {CartIcon} from "../../../shared/icons"
import ManageButtonGroup from "../../ManageButtonGroup"

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
  const [isDeletedFlag, setIsDeletedValue] = useState(isDeleted)

  const deleteClickHandler = () => {
    setIsDeletedValue(true)
    setQuantityValue(0)
  }

  useEffect(() => {
    if (quantityValue === 0) setIsDeletedValue(true)
  }, [quantityValue]);

  return (
    <div className={s.item + ' ' + (isDeletedFlag ? s.removed : '')}>
      <div className={s.itemInfo + ' ' + (isDeletedFlag ? s.removed : '')}>
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
        {!isDeletedFlag ? (
          <>
            <div className={s.addRemoveButtons}>
              <ManageButtonGroup countValue={quantityValue} setCountValue={(quantityValue) => setQuantityValue(quantityValue)}/>
            </div>
            <button className={s.deleteButton} onClick={() => deleteClickHandler()}>Delete</button>
          </>
        ) : (
          <div className={s.restoreButtonWrapper}>
            <ButtonWithChild
              className={s.restoreButton}
              clickHandler={() => {
                setIsDeletedValue(false)
                setQuantityValue(1)
              }}
              ariaLabel={'Return item to cart'}>
              <CartIcon aria-hidden="true" />
            </ButtonWithChild>
          </div>
        )}
      </div>
    </div>
  )
}
