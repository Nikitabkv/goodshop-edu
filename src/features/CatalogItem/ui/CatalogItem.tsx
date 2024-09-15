import s from "./CatalogItem.module.scss"
import catalogImg from "../../../shared/mockFiles/catalogImg.png"
import ButtonWithChild from "../../../shared/ui-kit/ButtonWithChild"
import {CartIcon, MinusIcon, PlusIcon} from "../../../shared/icons";
import {FC, MouseEvent, useState} from "react";
import {Link} from "react-router-dom";

interface CatalogItemProps {
  item: {
    id: number
    name: string
    price: number
    count: number
  }
}
// Essence Mascara Lash Princess
export const CatalogItem:FC<CatalogItemProps> = ({item}) => {
  const {id, name, price, count} = item
  const [countValue, setCountValue] = useState(count)

  const clickHandler = (e: MouseEvent, foo: () => void) => {
    e.preventDefault();
    foo()
  }

  return (
    <Link to={`/product/${id}`}>
      <div className={s.catalogItem}>
        <img src={catalogImg} alt={'Essence Mascara Lash Princess'}/>
        <div className={s.manageItems}>
          <div className={s.info}>
            <span title={name} className={s.name}>{name}</span>
            <span className={s.price}>${price}</span>
          </div>
          <div className={s.buttons}>
            {countValue === 0 ? (
              <ButtonWithChild
                ariaLabel={'Add to cart'}
                className={s.button}
                clickHandler={(e: MouseEvent<HTMLButtonElement>) => clickHandler(e, () => setCountValue(1))}
              >
                <CartIcon aria-hidden="true" width={18} height={18}/>
              </ButtonWithChild>
            ) : (
              <>
                <ButtonWithChild
                  ariaLabel={'Reduce the number of items'}
                  className={s.button}
                  clickHandler={(e: MouseEvent<HTMLButtonElement>) => clickHandler(e, () => setCountValue(countValue - 1))}
                >
                  <MinusIcon aria-hidden="true" />
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
                  className={s.button}
                  clickHandler={(e: MouseEvent<HTMLButtonElement>) => clickHandler(e, () => setCountValue(countValue + 1))}
                >
                  <PlusIcon aria-hidden="true" />
                </ButtonWithChild>
              </>
            )
            }
          </div>
        </div>
      </div>
    </Link>
  )
}
