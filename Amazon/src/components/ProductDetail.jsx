import './ProductDetail.css'

function ProductDetail({ product, onBack }) {
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
    <div className="product-detail">
      <button className="back-btn" onClick={onBack}>← Back to Products</button>

      <div className="detail-container">
        <div className="detail-image">
          <img src={product.image} alt={product.title} />
          <span className="badge">
            {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
          </span>
        </div>

        <div className="detail-info">
          <h1>{product.title}</h1>

          <div className="detail-rating">
            {renderStars(product.rating)}
            <span className="rating-value">{product.rating} out of 5</span>
            <span className="rating-count">{product.reviews} customer reviews</span>
          </div>

          <div className="detail-price">
            <span className="current-price">${product.price}</span>
            <span className="original-price">${product.originalPrice}</span>
            <span className="discount">
              You save ${(product.originalPrice - product.price).toFixed(2)}
            </span>
          </div>

          <div className="detail-shipping">
            <div className="shipping-item">
              <span className="shipping-icon">🚚</span>
              <span>FREE Delivery</span>
            </div>
            <div className="shipping-item">
              <span className="shipping-icon">↩️</span>
              <span>30-day Returns</span>
            </div>
            <div className="shipping-item">
              <span className="shipping-icon">🛡️</span>
              <span>Secure Transaction</span>
            </div>
          </div>

          <div className="detail-description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>

          <div className="detail-specs">
            <h3>Product Information</h3>
            <table>
              <tbody>
                <tr>
                  <td>Category</td>
                  <td>{product.category}</td>
                </tr>
                <tr>
                  <td>Rating</td>
                  <td>{product.rating} stars</td>
                </tr>
                <tr>
                  <td>Customer Reviews</td>
                  <td>{product.reviews}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
