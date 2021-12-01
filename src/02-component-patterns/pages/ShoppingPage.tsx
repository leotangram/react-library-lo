import { ProductButtons } from '../components/ProductButtons'
import ProductCard, { ProductImage, ProductTitle } from '../components/'
import '../styles/custom-styles.css'
import { useShoppingCart } from '../hooks/useShoppingCart'
import { products } from '../data/products'

const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart()

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {products.map(product => (
          <ProductCard
            className="bg-dark text-white"
            key={product.id}
            onChange={onProductCountChange}
            product={product}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage
              className="custom-image"
              img={product.img}
              style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)' }}
            />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, productInCart]) => (
          <ProductCard
            className="bg-dark text-white"
            key={key}
            onChange={onProductCountChange}
            product={productInCart}
            style={{ width: '100px' }}
            value={productInCart.count}
          >
            <ProductImage
              className="custom-image"
              img={productInCart.img}
              style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)' }}
            />
            <ProductButtons
              className="custom-buttons"
              style={{ display: 'flex', justifyContent: 'center' }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  )
}

export default ShoppingPage
