import { useContext } from 'react'
import { ProductsContext } from './ProductCard'
import styles from '../styles/styles.module.css'
import { ProductTitleProps } from '../interfaces/interfaces'

export const ProductTitle = ({
  className,
  style,
  title
}: ProductTitleProps) => {
  const { product } = useContext(ProductsContext)

  return (
    <span
      className={`${styles.productDescription} ${className ? className : ''}`}
      style={style}
    >
      {title ? title : product.title}
    </span>
  )
}
