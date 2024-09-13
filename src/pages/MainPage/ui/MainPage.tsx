import s from './MainPage.module.scss'
import {Helmet} from "react-helmet"
import HeroSection from "../../../widgets/HeroSection"
import CatalogSection from "../../../widgets/CatalogSection"
import QuestionsSection from "../../../widgets/QuestionsSection"
import {useLocation} from "react-router-dom";
import {useEffect} from "react";

export const MainPage = () => {
  //TODO: Поискать варианты без ререндеров
  const {hash, key} = useLocation()
  useEffect(()=>{
    if(hash){
      const targetElement = document.getElementById(hash.substring(1))
      targetElement?.scrollIntoView({behavior: 'smooth'})
    }
  }, [key, hash])

  return (
    <>
      <Helmet>
        <title>Catalog | Goods4you</title>
      </Helmet>
      <main className={s.mainPage}>
        <HeroSection/>
        <CatalogSection/>
        <QuestionsSection/>
      </main>
    </>
  )
}
