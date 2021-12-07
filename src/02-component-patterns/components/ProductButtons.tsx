import { useCallback, useContext } from 'react'
import { ProductsContext } from './ProductCard'
import styles from '../styles/styles.module.css'
import { ProductButtonsProps } from '../interfaces/interfaces'

export const ProductButtons = ({ className, style }: ProductButtonsProps) => {
  const { counter, increaseBy, maxCount } = useContext(ProductsContext)

  const isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount]
  )

  return (
    <div
      className={`${styles.buttonsContainer} ${className ? className : ''}`}
      style={style}
    >
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        className={`${styles.buttonAdd} ${
          isMaxReached() ? styles.disabled : ''
        } `}
        onClick={() => increaseBy(+1)}
      >
        +
      </button>
    </div>
  )
}
