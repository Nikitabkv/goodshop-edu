import s from "./CatalogItem.module.scss"
import {FC, useEffect} from "react"
import {Link} from "react-router-dom"
import {useAppSelector} from "../../../App/store/hooks.ts"
import ManageButtonGroup from "../../ManageButtonGroup";

interface CatalogItemProps {
  item: {
    id: number
    title: string
    price: number
    thumbnail: string
  }
}
interface Product {
  id: number,
  quantity: number
}
interface ProductState  {
  cart: {
    cartData: {
      products: Product[]
    }
  }
}

export const CatalogItem:FC<CatalogItemProps> = ({item}) => {
  const {id, title, price, thumbnail} = item
  const products = useAppSelector((state: ProductState) => state.cart.cartData.products)

  useEffect(() => {
    console.log(products)
  }, [products]);

  return (
    <Link to={`/product/${id}`}>
      <div className={s.catalogItem}>
        <img src={thumbnail} alt={'Essence Mascara Lash Princess'}/>
        <div className={s.manageItems}>
          <div className={s.info}>
            <span title={title} className={s.name}>{title}</span>
            <span className={s.price}>${price}</span>
          </div>
          <div className={s.buttons}>
            <ManageButtonGroup countValue={products.find((product) => product.id === id)?.quantity || 0} itemId={id} />
          </div>
        </div>
      </div>
    </Link>
  )
}
