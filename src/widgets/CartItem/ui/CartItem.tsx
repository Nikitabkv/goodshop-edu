import s from "./CartItem.module.scss"
import img from "../../../shared/mockFiles/img.png"
import ButtonWithChild from "../../../shared/ui-kit/ButtonWithChild"
import {FC, useState} from "react";
import {Link} from "react-router-dom";
import {Title} from "../../../shared/ui-kit/Title/ui/Title.tsx";

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
          <Title tag={'h2'}>
            <Link to={'/'}>
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
              <ButtonWithChild className={s.button} disabled={countValue <= 1} clickHandler={() => setCountValue(countValue - 1)}>
                <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.5 3.50012L1.5 3.50012C0.671573 3.50012 0 2.82855 0 2.00012C0 1.17169 0.671573 0.500122 1.5 0.500122L16.5 0.500122C17.3284 0.500122 18 1.17169 18 2.00012C18 2.82855 17.3284 3.50012 16.5 3.50012Z"
                    fill="white"/>
                </svg>
              </ButtonWithChild>
              {countValue} {countValue > 1 ? 'items' : 'item'}
              <ButtonWithChild className={s.button} clickHandler={() => setCountValue(countValue + 1)}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17 10L1 10C0.447715 10 0 9.55228 0 9C0 8.44772 0.447716 8 1 8L17 8C17.5523 8 18 8.44772 18 9C18 9.55228 17.5523 10 17 10Z"
                    fill="white"/>
                  <path
                    d="M8 17L8 1C8 0.447715 8.44772 0 9 0C9.55228 0 10 0.447716 10 1L10 17C10 17.5523 9.55228 18 9 18C8.44772 18 8 17.5523 8 17Z"
                    fill="white"/>
                </svg>
              </ButtonWithChild>
            </div>
            <button className={s.deleteButton}>Delete</button>
          </>
        ) : (
          <div>
            <ButtonWithChild className={s.restoreButton}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 6.429H14.9434L11.7323 0.312439C11.573 0.00860184 11.2275 -0.0905997 10.9605 0.092092C10.6941 0.274784 10.6079 0.669642 10.7677 0.974128L13.6315 6.429H4.36849L7.23228 0.974085C7.39214 0.669599 7.3059 0.274741 7.03948 0.0920488C6.77196 -0.090643 6.42755 0.00855859 6.2677 0.312396L3.05655 6.42895H0V7.71468H1.22086L2.64989 16.4265C2.79929 17.3387 3.49692 18.0004 4.30884 18.0004H13.6912C14.503 18.0004 15.2007 17.3387 15.3495 16.4272L16.7791 7.71468H18C18 7.71468 18 6.429 18 6.429ZM14.2437 16.1905C14.1943 16.4944 13.9619 16.7147 13.6911 16.7147H4.30884C4.03803 16.7147 3.80569 16.4944 3.7557 16.1899L2.3651 7.71468H15.6349L14.2437 16.1905Z"
                  fill="white"/>
              </svg>
            </ButtonWithChild>
          </div>
        )}
      </div>
    </div>
  )
}
