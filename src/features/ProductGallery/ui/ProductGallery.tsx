import s from "./ProductGallery.module.scss"
import {FC, useState} from "react"

interface ProductGalleryProps {
  imgs: Array<string>
  name: string
}

export const ProductGallery:FC<ProductGalleryProps> = ({imgs, name}) => {
  const [activeImg, setActiveImg] = useState(0)

  return (
    <div className={s.gallery}>
      <div className={s.galleryImg}>
        <img src={imgs[activeImg]} alt={name} width={'100%'} height={'100%'}/>
      </div>
      <div className={s.slider}>
        {imgs.map((img, index) => (
          <img
            onClick={() => setActiveImg(index)}
            key={index}
            src={img}
            alt={name}
            className={s.sliderImage + (activeImg === index ? ' ' + s.active : '')}
            width={70}
          />
        ))}
      </div>
    </div>
  )
}