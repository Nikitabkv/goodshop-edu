import s from './ProductInfo.module.scss'
import Title from "../../../shared/ui-kit/Title"
import {FC} from "react"
import {useAppSelector} from "../../../App/store/hooks.ts"
import {ManageButtonGroup} from "../../ManageButtonGroup/ui/ManageButtonGroup.tsx"

interface ProductInfoProps {
  item: {
    title: string
    rating: number
    description: string
    warrantyInformation: string
    shippingInformation: string
    price: number
    discountPercentage: number
    stock: number
    tags: string[]
  }
  id: number
}

export const ProductInfo:FC<ProductInfoProps> = ({item, id}) => {
  const {
    title,
    rating,
    description,
    warrantyInformation,
    shippingInformation,
    price,
    discountPercentage,
    stock,
    tags,
  } = item
  const discountedPrice = (price - (discountPercentage * price) / 100).toFixed(2)
  const products = useAppSelector((state) => state.cart.cartData.products)

  return (
    <div className={s.itemInfo}>
      <div>
        <Title tag={'h2'} fontWeight={600} className={s.title}>{title}</Title>
        <div className={s.ratingTypes}>
        <span className={s.stars} aria-label={`${Math.round(rating)} stars rating`} tabIndex={0}>
          {Array.from({length: 5}).map((_, index) => (
            <svg aria-hidden="true" width="20" height="20" viewBox="-2 -2 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" key={index}>
              <path d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"
                fill={index < Math.round(rating) ? '#F14F4F' : '#D5D5D5'}/>
            </svg>
          ))}
        </span>
          <span tabIndex={0} className={s.types} aria-label={`Item types: ${tags.join(', ')}`}>
          {tags.join(', ')}
        </span>
        </div>
      </div>
      <div className={s.stock} tabIndex={0}>
        In Stock - Only {stock} left!
      </div>
      <p className={s.description} tabIndex={0}>
        {description}
      </p>
      <div className={s.shipsWarranty} tabIndex={0}>
        <span>{warrantyInformation}</span>
        <span>{shippingInformation}</span>
      </div>
      <div className={s.cartGroup}>
        <div className={s.priceWrapper}>
          <div className={s.price}>
            <span aria-label={`Price: ${discountedPrice}`} tabIndex={0}>${discountedPrice}</span>
            <span>${price}</span>
          </div>
          <hr className={s.hr}/>
          <div className={s.discount}>
            <span>Your discount:</span>
            <span className={s.percent}>{discountPercentage}%</span>
          </div>
        </div>
        <ManageButtonGroup
          itemId={id}
          countValue={products.find(el => el.id === id)?.quantity || 0}
          buttonClassName={s.buttonClassName}
          cartButtonClassName={s.cartButton}
          iconSize={'l'}
        />
      </div>
    </div>
  )
}
