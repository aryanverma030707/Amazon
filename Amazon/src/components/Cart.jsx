import './Cart.css'

function Cart({ cartItems, onRemoveFromCart, onUpdateQuantity, onBack }) {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)
  }

  const calculateSavings = () => {
    return cartItems.reduce((savings, item) => savings + ((item.originalPrice - item.price) * item.quantity), 0).toFixed(2)
  }

  if (cartItems.length === 0) {
    return (
      <div className="cart">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <div className="empty-cart">
          <div className="empty-icon">🛒</div>
          <h2>Your Amazon Cart is empty</h2>
          <p>Continue shopping to find something you like!</p>
          <button className="continue-shopping-btn" onClick={onBack}>
            Continue Shopping
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="cart">
      <button className="back-btn" onClick={onBack}>← Back to Shopping</button>
      
      <div className="cart-container">
        <div className="cart-items-section">
          <h1>Shopping Cart ({cartItems.length} items)</h1>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="item-details">
                  <h3>{item.title}</h3>
                  <div className="item-price-info">
                    <span className="current-price">${item.price}</span>
                    <span className="original-price">${item.originalPrice}</span>
                    <span className="savings">Save ${(item.originalPrice - item.price).toFixed(2)}</span>
                  </div>
                  <div className="item-delivery">
                    <span className="delivery-icon">🚚</span>
                    <span>FREE Delivery</span>
                  </div>
                </div>

                <div className="item-quantity">
                  <label>Qty:</label>
                  <div className="quantity-selector">
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      className="qty-btn"
                    >
                      −
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="qty-btn"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="item-subtotal">
                  <span className="subtotal-label">Subtotal:</span>
                  <span className="subtotal-price">${(item.price * item.quantity).toFixed(2)}</span>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => onRemoveFromCart(item.id)}
                  title="Remove from cart"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="cart-summary">
          <div className="summary-card">
            <h3>Order Summary</h3>
            
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${calculateTotal()}</span>
            </div>

            <div className="summary-row">
              <span>Shipping:</span>
              <span className="free-shipping">FREE</span>
            </div>

            <div className="summary-row">
              <span>Total Savings:</span>
              <span className="savings-amount">${calculateSavings()}</span>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-row total">
              <span>Order Total:</span>
              <span>${calculateTotal()}</span>
            </div>

            <button className="checkout-btn">
              Proceed to Checkout
            </button>

            <button className="continue-shopping" onClick={onBack}>
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
