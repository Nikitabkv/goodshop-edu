import s from "./CatalogSection.module.scss"
import Container from "../../../shared/ui-kit/Container"
import Title from "../../../shared/ui-kit/Title"
import ButtonWithChild from "../../../shared/ui-kit/ButtonWithChild"
import CatalogItem from "../../CatalogItem"

const mockCatalogItems = [
  {
    id: 1,
    name: 'Essence Mascara Lash Princess',
    price: 110,
    count: 0
  },
  {
    id: 2,
    name: 'Essence Mascara Lash Princess',
    price: 110,
    count: 0
  },
  {
    id: 3,
    name: 'Essence Mascara Lash Princess',
    price: 110,
    count: 0
  },
  {
    id: 4,
    name: 'Essence Mascara Lash Princess',
    price: 110,
    count: 1
  },
  {
    id: 5,
    name: 'Essence Mascara Lash Princess',
    price: 110,
    count: 0
  },
  {
    id: 6,
    name: 'Essence Mascara Lash Princess',
    price: 110,
    count: 0
  },
  {
    id: 7,
    name: 'Essence Mascara Lash Princess',
    price: 110,
    count: 0
  },
  {
    id: 8,
    name: 'Essence Mascara Lash Princess',
    price: 110,
    count: 0
  },
  {
    id: 9,
    name: 'Essence Mascara Lash Princess',
    price: 110,
    count: 0
  },
  {
    id: 10,
    name: 'Essence Mascara Lash Princess',
    price: 110,
    count: 0
  },
  {
    id: 11,
    name: 'Essence Mascara Lash Princess',
    price: 110,
    count: 0
  },
  {
    id: 12,
    name: 'Essence Mascara Lash Princess',
    price: 110,
    count: 0
  }
]

export const CatalogSection = () => {

  return (
    <Container wrapperClassName={s.catalog}>
      <div className={s.col}>
        <Title tag={'h2'}>
          Catalog
        </Title>
        <input className={s.searchByTitle} type={'text'} placeholder={'Search by title'}/>
        <div className={s.catalogItems}>
          {mockCatalogItems.map(item => <CatalogItem key={item.id} item={item} />)}
        </div>
        <ButtonWithChild className={s.showMore}>
          Show more
        </ButtonWithChild>
      </div>
    </Container>
  )
}