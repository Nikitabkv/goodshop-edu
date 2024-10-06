import s from "./CartItem.module.scss"
import {FC, useEffect, useState} from "react"
import {Link} from "react-router-dom"
import {Title} from "../../../shared/ui-kit/Title/ui/Title.tsx"
import ManageButtonGroup from "../../ManageButtonGroup"
import {updateProduct} from "../../../pages/Cart/model/cartAsyncThunk.ts"
import {useAppDispatch, useAppSelector} from "../../../App/store/hooks.ts"
import {addRemovedProduct} from "../../../pages/Cart/model/cart.slice.ts";

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
  const products = useAppSelector(state => state.cart.cartData.products)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (quantity === 0) setIsDeletedValue(true)
    if (quantity > 0) setIsDeletedValue(false)
  }, [quantity]);

  const updateItemHandler = (newQuantity: number) => {
    if (!isUpdating)  {
      const removedProduct = newQuantity === 0 && products.find(el => el.id === item.id)
      if (removedProduct) {
        dispatch(addRemovedProduct(removedProduct))
      }
      dispatch(updateProduct({
        cartId,
        products: products.map(el => {
          if (el.id === item.id) {
            return {...el, quantity: newQuantity}
          } else {
            return el
          }
        }).filter(el => el.quantity != 0),
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
