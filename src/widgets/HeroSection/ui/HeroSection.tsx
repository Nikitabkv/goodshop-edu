import s from "./HeroSection.module.scss"
import ButtonWithChild from "../../../shared/ui-kit/ButtonWithChild"
import Container from "../../../shared/ui-kit/Container"

export const HeroSection = () => {
  return (
    <Container wrapperClassName={s.hero}>
      <div className={s.heroContent}>
        <p className={s.heroBigText}>Any products from famous brands
          with worldwide delivery</p>
        <p className={s.heroSmallText}>We sell smartphones, laptops, clothes, shoes
          {/*<br/>*/}
          and many other products at low prices</p>
        <ButtonWithChild className={s.heroButton}>
          Go to shopping
        </ButtonWithChild>
      </div>
    </Container>
  )
}