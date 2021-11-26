import { ProductButtons } from '../components/ProductButtons'
import ProductCard, { ProductImage, ProductTitle } from '../components/'

const product = {
  id: '1',
  img: './coffee-mug.png',
  title: 'Coffee Mug - Card'
}

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title="Holi" />
          <ProductCard.Buttons />
        </ProductCard>
        <ProductCard product={product}>
          <ProductImage img={product.img} />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  )
}

export default ShoppingPage
