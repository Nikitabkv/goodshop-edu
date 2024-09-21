import s from "./CatalogSection.module.scss"
import Container from "../../../shared/ui-kit/Container"
import Title from "../../../shared/ui-kit/Title"
import ButtonWithChild from "../../../shared/ui-kit/ButtonWithChild"
import CatalogItem from "../../../features/CatalogItem"
import {useGetCatalogQuery} from "../../../features/Products/model/api.ts"
import {useEffect, useState} from "react"

interface ProductItem {
  id: number
  title: string
  price: number
  thumbnail: string
}

const LIMIT = 12

export const CatalogSection = () => {
  const [products, setProducts] = useState([] as ProductItem[])
  const [skip, setSkip] = useState(0)
  const {data, error, isFetching} = useGetCatalogQuery({
    text: '',
    limit: LIMIT,
    skip: skip,
  })

  useEffect(() => {
    console.log(data)
    if (data) {
      setProducts(products.concat(data.products))
    } else if (error) {
      console.log(error)
    }
  }, [data])

  return (
    <Container Tag={'section'} wrapperClassName={s.catalog}>
      <div id={'catalog'} className={s.col}>
        <Title tag={'h2'}>
          Catalog
        </Title>
        <input className={s.searchByTitle} type={'text'} placeholder={'Search by title'}/>
        <div className={s.catalogItems}>
          {error && 'Unable to load data, please try again later'}
          {products.map(item => <CatalogItem key={item.id} item={item}/>)}
        </div>
        {
          data && (skip + LIMIT) < data.total &&
          <ButtonWithChild ariaLabel={'show more'} className={s.showMore} clickHandler={() => setSkip(skip + LIMIT)}>
            {isFetching ? 'Loading...' : 'Show more'}
          </ButtonWithChild>
        }
      </div>
    </Container>
  )
}
