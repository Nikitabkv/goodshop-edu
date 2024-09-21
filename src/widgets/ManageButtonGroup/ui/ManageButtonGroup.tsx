import s from "./ManageButtonGroup.module.scss";
import ButtonWithChild from "../../../shared/ui-kit/ButtonWithChild";
import {FC, MouseEvent} from "react";
import {CartIcon, MinusIcon, PlusIcon} from "../../../shared/icons";

interface ManageButtonGroupProps {
  countValue: number
  setCountValue: (value: number) => void
}

const clickHandler = (e: MouseEvent, foo: () => void) => {
  e.preventDefault();
  foo()
}


export const ManageButtonGroup:FC<ManageButtonGroupProps> = ({countValue, setCountValue}) => {
  return (
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
            <MinusIcon aria-hidden="true"/>
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
            <PlusIcon aria-hidden="true"/>
          </ButtonWithChild>
        </>
      )
      }
    </div>
  )
}
