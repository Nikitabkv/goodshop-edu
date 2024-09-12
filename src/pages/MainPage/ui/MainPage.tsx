import s from './MainPage.module.scss'
import HeroSection from "../../../widgets/HeroSection"
import {CatalogSection} from "../../../widgets/CatalogSection/ui/CatalogSection.tsx";

export const MainPage = () => {
  return (
    <div className={s.mainPage}>
      <HeroSection />
      <CatalogSection />
    </div>
  )
}
