import './Products.css'

function Products({ products, onProductClick }) {
  const renderStars = (rating) => {
    return (
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < Math.floor(rating) ? 'star filled' : 'star'}>
            ★
          </span>
        ))}
      </div>
    )
  }

  return (
    <section className="products">
      <h2>Featured Products</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-container" onClick={() => onProductClick(product)}>
              <img src={product.image} alt={product.title} className="product-image" />
              <span className="product-badge">
                {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
              </span>
            </div>

            <div className="product-info">
              <h3 onClick={() => onProductClick(product)} className="product-title">
                {product.title}
              </h3>

              <div className="product-rating">
                {renderStars(product.rating)}
                <span className="rating-text">({product.reviews})</span>
              </div>

              <div className="product-price">
                <span className="price">${product.price}</span>
                <span className="original-price">${product.originalPrice}</span>
              </div>

              <div className="product-shipping">
                <span className="shipping-badge">FREE delivery</span>
              </div>

              <button
                className="view-details-btn"
                onClick={() => onProductClick(product)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Products
