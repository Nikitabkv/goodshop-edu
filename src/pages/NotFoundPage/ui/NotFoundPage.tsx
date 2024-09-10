import s from './NotFoundPage.module.scss'

export const NotFoundPage = () => {
  return (
    <div className={s.notFound}>
      <div className={s.wrapper}>
        <h1>404</h1>
        Извините, такой страницы не существует :c
      </div>
    </div>
  )
}