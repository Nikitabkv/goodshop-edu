import s from './MainPage.module.scss'
import {Helmet} from "react-helmet"
import HeroSection from "../../../widgets/HeroSection"
import CatalogSection from "../../../widgets/CatalogSection"
import QuestionsSection from "../../../widgets/QuestionsSection"

export const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>Catalog | Goods4you</title>
      </Helmet>
      <div className={s.mainPage}>
        <HeroSection/>
        <CatalogSection/>
        <QuestionsSection/>
      </div>
    </>
  )
}
