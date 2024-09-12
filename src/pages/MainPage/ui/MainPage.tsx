import s from './MainPage.module.scss'
import HeroSection from "../../../widgets/HeroSection"

export const MainPage = () => {
  return (
    <div className={s.mainPage}>
      <HeroSection />
    </div>
  )
}
