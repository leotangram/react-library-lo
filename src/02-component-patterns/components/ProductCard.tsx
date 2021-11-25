import { useProduct } from '../hooks/useProduct'
import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

const ProductCard = () => {
  const { counter, increaseBy } = useProduct()

  return (
    <div className={styles.productCard}>
      <img
        alt="Coffe mug"
        className={styles.productImg}
        src="./coffee-mug.png"
      />
      {/* <img alt="No image" className={styles.productImg} src={noImage} /> */}
      <span className={styles.productDescription}>Coffe Mug</span>
      <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
          -
        </button>
        <div className={styles.countLabel}>{counter}</div>
        <button className={styles.buttonAdd} onClick={() => increaseBy(+1)}>
          +
        </button>
      </div>
    </div>
  )
}

export default ProductCard