import s from './Product.module.scss'
import Container from "../../../shared/ui-kit/Container"
import ProductGallery from "../../../features/ProductGallery"
import ProductInfo from "../../../features/ProductInfo"
import {Helmet} from "react-helmet"
import {useGetProductQuery} from "../../../features/Products/model/api.ts"
import {Navigate, useParams} from "react-router-dom"

export const Product = () => {
  const params = useParams()
  const {data, error, isFetching} = useGetProductQuery(params.id)

  return (
    <>
      <Helmet>
        <title>{data ? data.title : 'Product'} | Goods4you</title>
        <meta name='description' content='Any products from famous brands with worldwide delivery'/>
      </Helmet>
      <main className={s.product}>
        <Container>
          {error && 'Unable to load data, please try again later'}
          {isFetching && 'Loading...'}
          {/*404 редирект*/}
          {error && 'status' in error && error.status === 404 && <Navigate to={'/404'} state={error}/>}
          {data && (
            <div className={s.productRow}>
              <ProductGallery imgs={data.images} name={data.title}/>
              <ProductInfo item={data} id={Number(params.id)}/>
            </div>
          )}
        </Container>
      </main>
    </>
  )
}
