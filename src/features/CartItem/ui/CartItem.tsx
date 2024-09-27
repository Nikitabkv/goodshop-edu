import s from "./CartItem.module.scss"
import {FC, useEffect, useState} from "react"
import {Link} from "react-router-dom"
import {Title} from "../../../shared/ui-kit/Title/ui/Title.tsx"
import ManageButtonGroup from "../../ManageButtonGroup"
import {updateProduct} from "../../../pages/Cart/model/cartAsyncThunk.ts"
import {useAppDispatch, useAppSelector} from "../../../App/store/hooks.ts"

interface CartItemProps {
  item: {
    id: number
    price: number
    title: string
    thumbnail: string
    quantity: number
  }
}

export const CartItem:FC<CartItemProps> = ({item}) => {
  const {title, thumbnail, quantity, price} = item
  const [isDeletedFlag, setIsDeletedValue] = useState(false)
  const isUpdating = useAppSelector((state) => state.cart.isUpdating)
  const cartId = useAppSelector(state => state.cart.cartData.id)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (quantity === 0) setIsDeletedValue(true)
    if (quantity > 0) setIsDeletedValue(false)
  }, [quantity]);

  const updateItemHandler = (newQuantity: number) => {
    if (!isUpdating)  {
      dispatch(updateProduct({
        cartId,
        products: [{id: item.id, quantity: newQuantity}],
      }))
    }
  }

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
        <div className={s.addRemoveButtons}>
          <ManageButtonGroup countValue={quantity} itemId={item.id}/>
        </div>
        {!isDeletedFlag && <button className={s.deleteButton} onClick={() => {
          updateItemHandler(0)
        }}>Delete</button>}
      </div>
    </div>
  )
}
