import s from './NotFoundPage.module.scss'
import {Helmet} from "react-helmet";
import {Link, useLocation} from "react-router-dom";

export const NotFoundPage = () => {
  const {state} = useLocation()
  console.log(state)

  return (
    <>
      <Helmet>
        <title>404 | Goods4you</title>
        <meta name='description' content='404 not found'/>
      </Helmet>
      <main className={s.notFound}>
        <div className={s.wrapper}>
          <h1>404</h1>
          Извините, такой страницы не существует :c
          {state && state.data.message && <p>{state.data.message}</p>}
          <div className={s.link}>
            <Link to={'/'}> {'<'} Вернуться на главную {'>'}</Link>
          </div>
        </div>
      </main>
    </>
  )
}
