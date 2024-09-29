import s from "./CatalogSection.module.scss"
import Container from "../../../shared/ui-kit/Container"
import Title from "../../../shared/ui-kit/Title"
import ButtonWithChild from "../../../shared/ui-kit/ButtonWithChild"
import CatalogItem from "../../../features/CatalogItem"
import {useGetCatalogQuery} from "../../../features/Products/model/api.ts"
import {useEffect, useState, ChangeEvent} from "react"
import useDebounce from "../../../hooks/useDebounce.ts"

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
  const [inputValue, setInputValue] = useState('')
  const [showMoreClicked, setShowMoreClicked] = useState(false)
  const debouncedValue = useDebounce(inputValue, 750)
  const {data, error, isFetching} = useGetCatalogQuery({
    text: debouncedValue,
    limit: LIMIT,
    skip: skip,
  })

  useEffect(() => {
    if (data) {
      if (showMoreClicked) {
        setProducts(products.concat(data.products))
        setShowMoreClicked(false)
      } else {
        setProducts(data.products)
      }
    } else if (error) {
      console.log(error)
    }
  }, [data, error])

  const showMoreHandler = () => {
    setShowMoreClicked(true)
    setSkip(skip + LIMIT)
  }

  const onSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSkip(0)
    setInputValue(e.target.value)
  }

  return (
    <Container Tag={'section'} wrapperClassName={s.catalog}>
      <div id={'catalog'} className={s.col}>
        <Title tag={'h2'}>
          Catalog
        </Title>
        <input className={s.searchByTitle} type={'text'} placeholder={'Search by title'} value={inputValue} onChange={(e) => onSearchHandler(e)}/>
        <div className={s.catalogItems}>
          {isFetching && products.length === 0 && 'Loading...'}
          {error && 'Unable to load data, please try again later'}
          {products.map(item => <CatalogItem key={item.id} item={item}/>)}
        </div>
        {
          data && (skip + LIMIT) < data.total &&
          <ButtonWithChild ariaLabel={'show more'} className={s.showMore} clickHandler={() => showMoreHandler()}>
            {isFetching ? 'Loading...' : 'Show more'}
          </ButtonWithChild>
        }
      </div>
    </Container>
  )
}
