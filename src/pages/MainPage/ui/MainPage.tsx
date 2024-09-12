import s from './MainPage.module.scss'
import HeroSection from "../../../widgets/HeroSection"
import CatalogSection from "../../../widgets/CatalogSection"
import QuestionsSection from "../../../widgets/QuestionsSection"

export const MainPage = () => {
  return (
    <div className={s.mainPage}>
      <HeroSection />
      <CatalogSection />
      <QuestionsSection />
    </div>
  )
}
