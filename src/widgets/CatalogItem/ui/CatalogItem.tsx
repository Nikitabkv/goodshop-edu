import s from "./CatalogItem.module.scss"
import catalogImg from "../../../shared/mockFiles/catalogImg.png"
import ButtonWithChild from "../../../shared/ui-kit/ButtonWithChild"
import {CartIcon, MinusIcon, PlusIcon} from "../../../shared/icons";

export const CatalogItem = () => {
  return (
    <div className={s.catalogItem}>
      <img src={catalogImg} alt={'Essence Mascara Lash Princess'}/>
      <div className={s.manageItems}>
        <div className={s.info}>
          <span className={s.name}>Essence Mascara Lash Princess</span>
          <span className={s.price}>$110</span>
        </div>
        <div className={s.buttons}>
          {Math.random() > 0.5 ? (
            <ButtonWithChild className={s.button}>
              <CartIcon width={18} height={18}/>
            </ButtonWithChild>
          ) : (
            <>
              <ButtonWithChild className={s.button}>
                <MinusIcon />
              </ButtonWithChild>
              <span className={s.itemsCount}>1 item</span>
              <ButtonWithChild className={s.button}>
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