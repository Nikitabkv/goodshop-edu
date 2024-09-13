import s from './NotFoundPage.module.scss'
import {Helmet} from "react-helmet";

export const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404 | Goods4you</title>
      </Helmet>
      <main className={s.notFound}>
        <div className={s.wrapper}>
          <h1>404</h1>
          Извините, такой страницы не существует :c
        </div>
      </main>
    </>
  )
}
