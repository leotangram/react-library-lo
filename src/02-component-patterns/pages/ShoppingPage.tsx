import { ProductButtons } from '../components/ProductButtons'
import ProductCard, { ProductImage, ProductTitle } from '../components/'
import '../styles/custom-styles.css'
import { products } from '../data/products'

const product = products[0]

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        className="bg-dark text-white"
        initialValues={{
          count: 4,
          maxCount: 10
        }}
        key={product.id}
        product={product}
      >
        {({ count, increaseBy, isMaxCountReached, maxCount, reset }) => (
          <>
            <ProductImage
              className="custom-image"
              img={product.img}
              style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)' }}
            />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
            <button onClick={reset}>Reset</button>
            <button onClick={() => increaseBy(-2)}> -2 </button>
            {!isMaxCountReached && (
              <button onClick={() => increaseBy(+2)}> +2 </button>
            )}
            <span>
              {count} - {maxCount}
            </span>
          </>
        )}
      </ProductCard>
    </div>
  )
}

export default ShoppingPage
