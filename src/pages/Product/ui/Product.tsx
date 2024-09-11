import s from './Product.module.scss'
import Container from "../../../shared/ui-kit/Container"
import bigImg from "../../../shared/mockFiles/bigImg.png"
import {useState} from "react"
import Title from "../../../shared/ui-kit/Title";
import ButtonWithChild from "../../../shared/ui-kit/ButtonWithChild";

const item = {
  id: 1,
  name: 'Essence Mascara Lash Princess',
  itemImgs: [bigImg, bigImg, bigImg, bigImg, bigImg, bigImg],
  rating: 4,
  types: ['electronics', 'selfie accessories'],
  description: 'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.',
  warranty: '1 month',
  ships: '1 month',
  price: 9.99,
  discountedPrice: 7.17,
  discount: 14.5,
  count: 5,
}

export const Product = () => {
  const [activeImg, setActiveImg] = useState(0)

  return (
    <div className={s.product}>
      <Container>
        <div className={s.productRow}>
          <div className={s.gallery}>
            <div className={s.galleryImg}>
              <img src={item.itemImgs[activeImg]} alt={item.name} width={'100%'} height={'100%'}/>
            </div>
            <div className={s.slider}>
              {item.itemImgs.map((img, index) => (
                <img
                  onClick={() => setActiveImg(index)}
                  key={index}
                  src={img}
                  alt={item.name}
                  className={s.sliderImage + (activeImg === index ? ' ' + s.active : '')}
                  width={70}
                />
              ))}
            </div>
          </div>
          <div className={s.itemInfo}>
            <div>
              <Title tag={'h2'} fontWeight={600}>{item.name}</Title>
              <div className={s.ratingTypes}>
              <span className={s.stars}>
                {Array.from({length: 5}).map((_, index) => (
                  <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z"
                      fill={index < item.rating ? '#F14F4F' : '#D5D5D5'}/>
                  </svg>
                ))}
              </span>
                <span className={s.types}>
                {item.types.join(', ')}
              </span>
              </div>
            </div>
            <div className={s.stock}>
              In stock - Only {item.count} left!
            </div>
            <p className={s.description}>
              {item.description}
            </p>
            <div className={s.shipsWarranty}>
              <span>{item.warranty} warranty</span>
              <span>Ships in {item.ships}</span>
            </div>
            <div className={s.cartGroup}>
              <div className={s.priceWrapper}>
                <div className={s.price}>
                  <span>${item.discountedPrice}</span>
                  <span>${item.price}</span>
                </div>
                <hr className={s.hr}/>
                <div className={s.discount}>
                  <span>Your discount:</span>
                  <span className={s.percent}>${item.discount}%</span>
                </div>
              </div>

              <ButtonWithChild className={s.addToCartButton}>
                Add to cart
              </ButtonWithChild>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}