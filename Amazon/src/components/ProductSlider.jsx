import { useState } from 'react'
import './ProductSlider.css'

function ProductSlider({ products, onProductClick }) {
  const [scrollPosition, setScrollPosition] = useState(0)

  const renderStars = (rating) => {
    return (
      <div className="slider-stars">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < Math.floor(rating) ? 'slider-star filled' : 'slider-star'}>
            ★
          </span>
        ))}
      </div>
    )
  }

  const scroll = (direction) => {
    const container = document.querySelector('.slider-container')
    if (container) {
      const scrollAmount = 400
      const newPosition = direction === 'left' ? scrollPosition - scrollAmount : scrollPosition + scrollAmount
      container.scrollLeft = newPosition
      setScrollPosition(newPosition)
    }
  }

  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollLeft)
  }

  const canScrollLeft = scrollPosition > 0
  const canScrollRight = true

  return (
    <section className="product-slider-section">
      <h2 className="slider-title">Best Deals Today</h2>
      
      <div className="slider-wrapper">
        <button
          className={`slider-arrow slider-arrow-left ${!canScrollLeft ? 'disabled' : ''}`}
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
        >
          ❮
        </button>

        <div className="slider-container" onScroll={handleScroll}>
          {products.map(product => (
            <div key={product.id} className="slider-product-card">
              <div className="slider-product-image-container" onClick={() => onProductClick(product)}>
                <img src={product.image} alt={product.title} className="slider-product-image" />
                <span className="slider-badge">
                  {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                </span>
              </div>

              <div className="slider-product-info">
                <h3 onClick={() => onProductClick(product)} className="slider-product-title">
                  {product.title}
                </h3>

                <div className="slider-rating">
                  {renderStars(product.rating)}
                  <span className="slider-rating-text">({product.reviews})</span>
                </div>

                <div className="slider-price">
                  <span className="slider-current-price">${product.price}</span>
                  <span className="slider-original-price">${product.originalPrice}</span>
                </div>

                <div className="slider-shipping">
                  <span className="slider-free-delivery">FREE delivery</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="slider-arrow slider-arrow-right"
          onClick={() => scroll('right')}
        >
          ❯
        </button>
      </div>
    </section>
  )
}

export default ProductSlider
