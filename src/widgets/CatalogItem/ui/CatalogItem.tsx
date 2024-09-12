import s from "./CatalogItem.module.scss"
import img from "../../../shared/mockFiles/img.png"
import ButtonWithChild from "../../../shared/ui-kit/ButtonWithChild"

export const CatalogItem = () => {
  return (
    <div className={s.catalogItem}>
      <img src={img} alt={'Essence Mascara Lash Princess'}/>
      <div className={s.manageItems}>
        <div className={s.info}>
          <span className={s.name}>Essence Mascara Lash Princess</span>
          <span className={s.price}>$110</span>
        </div>
        <div className={s.buttons}>
          {Math.random() > 0.5 ? (
            <ButtonWithChild className={s.button}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 6.42857H14.9434L11.7323 0.312012C11.573 0.0081746 11.2275 -0.0910269 10.9605 0.0916648C10.6941 0.274357 10.6079 0.669215 10.7677 0.973701L13.6315 6.42857H4.36849L7.23228 0.973658C7.39214 0.669172 7.3059 0.274313 7.03948 0.0916215C6.77196 -0.0910702 6.42755 0.00813134 6.2677 0.311968L3.05655 6.42853H0V7.71425H1.22086L2.64989 16.4261C2.79929 17.3383 3.49692 18 4.30884 18H13.6912C14.503 18 15.2007 17.3383 15.3495 16.4268L16.7791 7.71425H18C18 7.71425 18 6.42857 18 6.42857ZM14.2437 16.1901C14.1943 16.4939 13.9619 16.7143 13.6911 16.7143H4.30884C4.03803 16.7143 3.80569 16.494 3.7557 16.1895L2.3651 7.71425H15.6349L14.2437 16.1901Z"
                  fill="white"/>
              </svg>
            </ButtonWithChild>
          ) : (
            <>
              <ButtonWithChild className={s.button}>
                <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.5 3.50011L1.5 3.50011C0.671573 3.50011 0 2.82853 0 2.00011C0 1.17168 0.671573 0.500107 1.5 0.500107L16.5 0.500107C17.3284 0.500107 18 1.17168 18 2.00011C18 2.82853 17.3284 3.50011 16.5 3.50011Z"
                    fill="white"/>
                </svg>
              </ButtonWithChild>
              <span className={s.itemsCount}>1 item</span>
              <ButtonWithChild className={s.button}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17 10L1 10C0.447715 10 0 9.55228 0 9C0 8.44772 0.447716 8 1 8L17 8C17.5523 8 18 8.44772 18 9C18 9.55228 17.5523 10 17 10Z"
                    fill="white"/>
                  <path
                    d="M8 17L8 1C8 0.447715 8.44772 0 9 0C9.55228 0 10 0.447716 10 1L10 17C10 17.5523 9.55228 18 9 18C8.44772 18 8 17.5523 8 17Z"
                    fill="white"/>
                </svg>
              </ButtonWithChild>
            </>
          )
          }
        </div>
      </div>
    </div>
  )
}