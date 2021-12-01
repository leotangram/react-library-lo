import { createContext } from 'react'
import { useProduct } from '../hooks/useProduct'
import styles from '../styles/styles.module.css'
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces'

export const ProductsContext = createContext({} as ProductContextProps)
const { Provider } = ProductsContext

const ProductCard = ({
  children,
  className,
  onChange,
  product,
  style,
  value
}: ProductCardProps) => {
  const { counter, increaseBy } = useProduct({ onChange, product, value })

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div
        className={`${styles.productCard} ${className ? className : ''}`}
        style={style}
      >
        {children}
      </div>
    </Provider>
  )
}

export default ProductCard
