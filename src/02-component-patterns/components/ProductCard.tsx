import { FC, ReactElement } from 'react'
import { useProduct } from '../hooks/useProduct'
import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

interface Product {
  id: string
  img?: string
  title: string
}

interface ProductCardProps {
  children?: ReactElement | ReactElement[]
  product: Product
}

interface ProductButtonsProps {
  counter: number
  increaseBy: (value: number) => void
}

export const ProductImage = ({ img = '' }) => {
  return (
    <img
      alt="Product"
      className={styles.productImg}
      src={img ? img : noImage}
    />
  )
}

export const ProductTitle = ({ title }: { title: string }) => {
  return <span className={styles.productDescription}>{title}</span>
}

export const ProductButtons: FC<ProductButtonsProps> = ({
  counter,
  increaseBy
}) => {
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
        +
      </button>
    </div>
  )
}

const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct()

  return <div className={styles.productCard}>{children}</div>
}

ProductCard.Image = ProductImage
ProductCard.Title = ProductTitle
ProductCard.Buttons = ProductButtons

export default ProductCard
