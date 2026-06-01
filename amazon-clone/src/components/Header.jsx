import './Header.css'

function Header({ onSearch }) {
  const handleSearchChange = (e) => {
    onSearch(e.target.value)
  }

  return (
    <header className="header">
      <div className="header-top">
        <div className="header-left">
          <div className="logo">
            <span className="logo-text">amazon</span>
            <span className="logo-com">.com</span>
          </div>
        </div>

        <div className="header-search">
          <input
            type="text"
            placeholder="Search Amazon..."
            className="search-input"
            onChange={handleSearchChange}
          />
          <button className="search-btn">
            <svg className="search-icon" viewBox="0 0 24 24">
              <path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"/>
            </svg>
          </button>
        </div>

        <div className="header-right">
          <div className="header-nav">
            <div className="nav-item">
              <span className="nav-label">Hello, Sign in</span>
              <span className="nav-title">Account & Lists</span>
            </div>
            <div className="nav-item">
              <span className="nav-label">Returns</span>
              <span className="nav-title">& Orders</span>
            </div>
          </div>
          <div className="cart-icon">
            <svg viewBox="0 0 24 24">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
            <span className="cart-count">0</span>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="nav-menu">
          <span className="menu-item">All</span>
          <span className="menu-item">Today's Deals</span>
          <span className="menu-item">Customer Service</span>
          <span className="menu-item">Best Sellers</span>
          <span className="menu-item">Gift Cards</span>
        </div>
      </div>
    </header>
  )
}

export default Header
