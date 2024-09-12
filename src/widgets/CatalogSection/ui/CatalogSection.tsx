import s from "./CatalogSection.module.scss"
import Container from "../../../shared/ui-kit/Container"
import Title from "../../../shared/ui-kit/Title"
import ButtonWithChild from "../../../shared/ui-kit/ButtonWithChild"
import CatalogItem from "../../CatalogItem"


export const CatalogSection = () => {
  return (
    <Container wrapperClassName={s.catalog}>
      <div className={s.col}>
        <Title tag={'h2'}>
          Catalog
        </Title>
        <input className={s.searchByTitle} type={'text'} placeholder={'Search by title'}/>
        <div className={s.catalogItems}>
          {Array.from({length: 12}).map(() => <CatalogItem />)}
        </div>
        <ButtonWithChild className={s.showMore}>
          Show more
        </ButtonWithChild>
      </div>
    </Container>
  )
}