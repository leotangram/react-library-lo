import { ProductButtons } from '../components/ProductButtons'
import ProductCard, { ProductImage, ProductTitle } from '../components/'
import { products } from '../data/products'

const product = products[0]

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        initialValues={{
          count: 4,
          maxCount: 10
        }}
        key={product.id}
        product={product}
      >
        {({ count, increaseBy, isMaxCountReached, maxCount, reset }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </div>
  )
}

export default ShoppingPage
