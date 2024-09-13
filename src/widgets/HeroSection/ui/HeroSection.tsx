import s from "./HeroSection.module.scss"
import ButtonWithChild from "../../../shared/ui-kit/ButtonWithChild"
import Container from "../../../shared/ui-kit/Container"
import {useNavigate} from 'react-router-dom';

export const HeroSection = () => {
  const navigate = useNavigate()

  const toShoppingHandler = () => {
    navigate('/#catalog')
  }

  return (
    <Container Tag={'section'} wrapperClassName={s.hero}>
      <div className={s.heroContent}>
        <p className={s.heroBigText}>Any products from famous brands with worldwide delivery</p>
        <p className={s.heroSmallText}>We sell smartphones, laptops, clothes, shoes and many other products at low prices</p>
        <ButtonWithChild className={s.heroButton} clickHandler={toShoppingHandler}>
          Go to shopping
        </ButtonWithChild>
      </div>
    </Container>
  )
}
