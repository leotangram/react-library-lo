import { ProductButtons } from '../components/ProductButtons'
import ProductCard, { ProductImage, ProductTitle } from '../components/'
import '../styles/custom-styles.css'

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
        <ProductCard className="bg-dark text-white" product={product}>
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>
        <ProductCard className="bg-dark text-white" product={product}>
          <ProductImage
            className="custom-image"
            img={product.img}
            style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)' }}
          />
          <ProductTitle className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
        <ProductCard style={{ backgroundColor: '#70d1f8' }} product={product}>
          <ProductImage
            img={product.img}
            style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)' }}
          />
          <ProductTitle />
          <ProductButtons
            style={{ display: 'flex', justifyContent: 'flex-end' }}
          />
        </ProductCard>
      </div>
    </div>
  )
}

export default ShoppingPage
