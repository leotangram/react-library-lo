import { useContext } from 'react'
import { ProductsContext } from './ProductCard'
import styles from '../styles/styles.module.css'
import { ProductButtonsProps } from '../interfaces/interfaces'

export const ProductButtons = ({ className, style }: ProductButtonsProps) => {
  const { counter, increaseBy } = useContext(ProductsContext)

  return (
    <div
      className={`${styles.buttonsContainer} ${className ? className : ''}`}
      style={style}
    >
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
