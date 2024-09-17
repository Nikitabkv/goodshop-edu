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
        <img src={imgs[activeImg]} alt={name} height={'100%'}/>
      </div>
      <div className={s.slider}>
        {imgs.map((img, index) => (
          <div key={index} className={s.sliderImage + (activeImg === index ? ' ' + s.active : '')}>
            <img
              onClick={() => setActiveImg(index)}
              src={img}
              alt={name}
              height={70}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
