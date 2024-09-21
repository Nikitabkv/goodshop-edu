import s from "./ManageButtonGroup.module.scss"
import ButtonWithChild from "../../../shared/ui-kit/ButtonWithChild"
import {FC, MouseEvent} from "react"
import {CartIcon, MinusIcon, PlusIcon, BigMinusIcon, BigPlusIcon} from "../../../shared/icons"

interface ManageButtonGroupProps {
  countValue: number
  setCountValue: (value: number) => void
  cartButtonClassName?: string
  buttonClassName?: string
  iconSize?: string
}

const clickHandler = (e: MouseEvent, foo: () => void) => {
  e.preventDefault();
  foo()
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


export const ManageButtonGroup:FC<ManageButtonGroupProps> = ({countValue, setCountValue, buttonClassName, cartButtonClassName, iconSize = 's'}) => {
  const SizedMinusIcon = icons[iconSize as keyof typeof icons].minus
  const SizedPlusIcon = icons[iconSize as keyof typeof icons].plus

  return (
    <div className={s.buttons}>
      {countValue === 0 ? (
        <ButtonWithChild
          ariaLabel={'Add to cart'}
          className={s.button + (cartButtonClassName ? ' ' + cartButtonClassName : '')}
          clickHandler={(e: MouseEvent<HTMLButtonElement>) => clickHandler(e, () => setCountValue(1))}
        >
          {iconSize === 's' ? <CartIcon aria-hidden="true" width={18} height={18}/> : 'Add to cart'}
        </ButtonWithChild>
      ) : (
        <>
          <ButtonWithChild
            ariaLabel={'Reduce the number of items'}
            className={s.button + (buttonClassName ? ' ' + buttonClassName : '')}
            clickHandler={(e: MouseEvent<HTMLButtonElement>) => clickHandler(e, () => setCountValue(countValue - 1))}
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
            clickHandler={(e: MouseEvent<HTMLButtonElement>) => clickHandler(e, () => setCountValue(countValue + 1))}
          >
            <SizedPlusIcon aria-hidden="true"/>
          </ButtonWithChild>
        </>
      )
      }
    </div>
  )
}
