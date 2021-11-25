import ProductCard, {
  ProductButtons,
  ProductImage,
  ProductTitle
} from '../components/ProductCard'

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
          <ProductImage img={product.img} />
          <ProductTitle title={product.title} />
          <ProductButtons counter={counter} increaseBy={increaseBy} />
        </ProductCard>
      </div>
    </div>
  )
}

export default ShoppingPage
