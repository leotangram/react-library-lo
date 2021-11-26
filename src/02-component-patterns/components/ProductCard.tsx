import { createContext, ReactElement, useContext } from 'react'
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

interface ProductContextProps {
  counter: number
  increaseBy: (value: number) => void
  product: Product
}

const ProductsContext = createContext({} as ProductContextProps)
const { Provider } = ProductsContext

export const ProductImage = ({ img = '' }) => {
  const { product } = useContext(ProductsContext)

  let imgToShow: string

  if (img) {
    imgToShow = img
  } else if (product.img) {
    imgToShow = product.img
  } else {
    imgToShow = noImage
  }

  return <img alt="Product" className={styles.productImg} src={imgToShow} />
}

export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductsContext)

  return (
    <span className={styles.productDescription}>
      {title ? title : product.title}
    </span>
  )
}

export const ProductButtons = () => {
  const { counter, increaseBy } = useContext(ProductsContext)

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

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  )
}

ProductCard.Image = ProductImage
ProductCard.Title = ProductTitle
ProductCard.Buttons = ProductButtons

export default ProductCard
