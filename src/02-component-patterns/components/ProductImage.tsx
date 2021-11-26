import { useContext } from 'react'
import { ProductsContext } from './ProductCard'
import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'
import { ProductImageProps } from '../interfaces/interfaces'

export const ProductImage = ({ className, img, style }: ProductImageProps) => {
  const { product } = useContext(ProductsContext)

  let imgToShow: string

  if (img) {
    imgToShow = img
  } else if (product.img) {
    imgToShow = product.img
  } else {
    imgToShow = noImage
  }

  return (
    <img
      alt="Product"
      className={`${styles.productImg} ${className ? className : ''}`}
      src={imgToShow}
      style={style}
    />
  )
}
