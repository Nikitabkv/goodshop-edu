import s from "./CatalogItem.module.scss"
import catalogImg from "../../../shared/mockFiles/catalogImg.png"
import ButtonWithChild from "../../../shared/ui-kit/ButtonWithChild"
import {CartIcon, MinusIcon, PlusIcon} from "../../../shared/icons";
import {FC, useState} from "react";

interface CatalogItemProps {
  item: {
    name: string
    price: number
    count: number
  }
}
// Essence Mascara Lash Princess
export const CatalogItem:FC<CatalogItemProps> = ({item}) => {
  const {name, price, count} = item
  const [countValue, setCountValue] = useState(count)

  return (
    <div className={s.catalogItem}>
      <img src={catalogImg} alt={'Essence Mascara Lash Princess'}/>
      <div className={s.manageItems}>
        <div className={s.info}>
          <span className={s.name}>{name}</span>
          <span className={s.price}>${price}</span>
        </div>
        <div className={s.buttons}>
          {countValue === 0 ? (
            <ButtonWithChild className={s.button} clickHandler={() => setCountValue(countValue + 1)}>
              <CartIcon width={18} height={18}/>
            </ButtonWithChild>
          ) : (
            <>
              <ButtonWithChild className={s.button} clickHandler={() => setCountValue(countValue - 1)}>
                <MinusIcon />
              </ButtonWithChild>
              <span className={s.itemsCount}>{countValue} item{countValue > 1 ? 's' : ''}</span>
              <ButtonWithChild className={s.button} clickHandler={() => setCountValue(countValue + 1)}>
                <PlusIcon />
              </ButtonWithChild>
            </>
          )
          }
        </div>
      </div>
    </div>
  )
}