import s from './Product.module.scss'
import Container from "../../../shared/ui-kit/Container"
import bigImg from "../../../shared/mockFiles/bigImg.png"
import ProductGallery from "../../../widgets/ProductGallery"
import ProductInfo from "../../../widgets/ProductInfo"
import {Helmet} from "react-helmet";


const item = {
  id: 1,
  name: 'Essence Mascara Lash Princess',
  itemImgs: [bigImg, bigImg, bigImg, bigImg, bigImg, bigImg,
    // bigImg
  ],
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

  return (
    <>
      <Helmet>
        <title>{item.name} | Goods4you</title>
        <meta name='description' content='Any products from famous brands with worldwide delivery'/>
      </Helmet>
      <main className={s.product}>
        <Container>
          <div className={s.productRow}>
          <ProductGallery imgs={item.itemImgs} name={item.name} />
            <ProductInfo item={item} />
          </div>
        </Container>
      </main>
    </>
  )
}
