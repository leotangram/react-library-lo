import { createContext } from 'react'
import { useProduct } from '../hooks/useProduct'
import styles from '../styles/styles.module.css'
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces'

export const ProductsContext = createContext({} as ProductContextProps)
const { Provider } = ProductsContext

const ProductCard = ({
  children,
  className,
  initialValues,
  onChange,
  product,
  style,
  value
}: ProductCardProps) => {
  const { counter, increaseBy, isMaxCountReached, maxCount, reset } =
    useProduct({
      initialValues,
      onChange,
      product,
      value
    })

  return (
    <Provider value={{ counter, increaseBy, maxCount, product }}>
      <div
        className={`${styles.productCard} ${className ? className : ''}`}
        style={style}
      >
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,

          increaseBy,
          reset
        })}
      </div>
    </Provider>
  )
}

export default ProductCard
