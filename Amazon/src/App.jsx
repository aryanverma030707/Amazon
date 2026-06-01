import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductSlider from './components/ProductSlider'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const products = [
    {
      id: 1,
      title: 'Wireless Bluetooth Headphones',
      price: 59.99,
      originalPrice: 99.99,
      rating: 4.5,
      reviews: 1234,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
      category: 'Electronics',
      description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life.'
    },
    {
      id: 2,
      title: 'USB-C Fast Charging Cable',
      price: 12.99,
      originalPrice: 19.99,
      rating: 4.8,
      reviews: 5621,
      image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500',
      category: 'Cables',
      description: '6ft USB-C fast charging cable compatible with most devices.'
    },
    {
      id: 3,
      title: 'Portable Phone Stand',
      price: 15.99,
      originalPrice: 24.99,
      rating: 4.6,
      reviews: 3421,
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500',
      category: 'Accessories',
      description: 'Adjustable phone stand for desk, compatible with all smartphones.'
    },
    {
      id: 4,
      title: 'Wireless Mouse',
      price: 24.99,
      originalPrice: 39.99,
      rating: 4.4,
      reviews: 2145,
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500',
      category: 'Peripherals',
      description: 'Precision wireless mouse with 18-month battery life.'
    },
    {
      id: 5,
      title: 'Mechanical Keyboard',
      price: 79.99,
      originalPrice: 129.99,
      rating: 4.7,
      reviews: 4532,
      image: 'https://images.unsplash.com/photo-1587829191301-efd2e0961b01?w=500',
      category: 'Peripherals',
      description: 'RGB mechanical keyboard with cherry switches.'
    },
    {
      id: 6,
      title: '4K Webcam',
      price: 89.99,
      originalPrice: 149.99,
      rating: 4.5,
      reviews: 1876,
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500',
      category: 'Electronics',
      description: 'Crystal clear 4K webcam with auto-focus and built-in microphone.'
    },
    {
      id: 7,
      title: 'Laptop Cooling Pad',
      price: 34.99,
      originalPrice: 54.99,
      rating: 4.3,
      reviews: 876,
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500',
      category: 'Accessories',
      description: 'Dual fan laptop cooling pad for better performance.'
    },
    {
      id: 8,
      title: 'Power Bank 20000mAh',
      price: 29.99,
      originalPrice: 49.99,
      rating: 4.6,
      reviews: 3421,
      image: 'https://images.unsplash.com/photo-1609042231979-ab81ecbf159e?w=500',
      category: 'Electronics',
      description: 'Fast charging power bank with dual USB ports.'
    },
    {
      id: 9,
      title: 'Monitor Stand with USB Hub',
      price: 44.99,
      originalPrice: 74.99,
      rating: 4.5,
      reviews: 2143,
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500',
      category: 'Accessories',
      description: 'Adjustable monitor stand with integrated 4-port USB hub.'
    },
    {
      id: 10,
      title: 'Wireless Charger Pad',
      price: 19.99,
      originalPrice: 34.99,
      rating: 4.4,
      reviews: 1562,
      image: 'https://images.unsplash.com/photo-1609042231979-ab81ecbf159e?w=500',
      category: 'Accessories',
      description: 'Fast wireless charging pad for all Qi-enabled devices.'
    },
    {
      id: 11,
      title: 'USB Hub 7-in-1',
      price: 39.99,
      originalPrice: 59.99,
      rating: 4.7,
      reviews: 2876,
      image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500',
      category: 'Cables',
      description: '7-in-1 USB hub with high-speed data transfer.'
    },
    {
      id: 12,
      title: 'Desk Lamp LED',
      price: 25.99,
      originalPrice: 42.99,
      rating: 4.6,
      reviews: 1234,
      image: 'https://images.unsplash.com/photo-1578321272176-fc0151fc9f34?w=500',
      category: 'Lighting',
      description: 'Dimmable LED desk lamp with USB charging port.'
    },
    {
      id: 13,
      title: 'Bluetooth Speaker',
      price: 45.99,
      originalPrice: 79.99,
      rating: 4.6,
      reviews: 2341,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500',
      category: 'Audio',
      description: 'Portable wireless speaker with 360-degree sound.'
    },
    {
      id: 14,
      title: 'Phone Case Armor',
      price: 14.99,
      originalPrice: 24.99,
      rating: 4.7,
      reviews: 4521,
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500',
      category: 'Phone Accessories',
      description: 'Military-grade protective phone case.'
    },
    {
      id: 15,
      title: 'Screen Protector Glass',
      price: 9.99,
      originalPrice: 16.99,
      rating: 4.5,
      reviews: 3456,
      image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500',
      category: 'Phone Accessories',
      description: 'Tempered glass screen protector for all phones.'
    },
    {
      id: 16,
      title: 'USB Type-C Hub',
      price: 35.99,
      originalPrice: 59.99,
      rating: 4.4,
      reviews: 1876,
      image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500',
      category: 'Cables',
      description: 'All-in-one USB-C hub with multiple ports.'
    },
    {
      id: 17,
      title: 'Portable SSD 1TB',
      price: 89.99,
      originalPrice: 149.99,
      rating: 4.8,
      reviews: 5432,
      image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500',
      category: 'Storage',
      description: '1TB portable SSD with ultra-fast speeds.'
    },
    {
      id: 18,
      title: 'Wireless Keyboard',
      price: 49.99,
      originalPrice: 79.99,
      rating: 4.5,
      reviews: 2134,
      image: 'https://images.unsplash.com/photo-1587829191301-efd2e0961b01?w=500',
      category: 'Peripherals',
      description: 'Slim wireless keyboard with long battery life.'
    },
    {
      id: 19,
      title: 'Laptop Stand',
      price: 29.99,
      originalPrice: 49.99,
      rating: 4.6,
      reviews: 1987,
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500',
      category: 'Accessories',
      description: 'Adjustable aluminum laptop stand for better ergonomics.'
    },
    {
      id: 20,
      title: 'USB Flash Drive 128GB',
      price: 19.99,
      originalPrice: 34.99,
      rating: 4.5,
      reviews: 2876,
      image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500',
      category: 'Storage',
      description: 'Fast 128GB USB flash drive.'
    },
    {
      id: 21,
      title: 'Wireless Mouse Pad',
      price: 22.99,
      originalPrice: 39.99,
      rating: 4.4,
      reviews: 1654,
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500',
      category: 'Accessories',
      description: 'Large wireless charging mouse pad.'
    },
    {
      id: 22,
      title: 'Monitor Light Bar',
      price: 59.99,
      originalPrice: 99.99,
      rating: 4.7,
      reviews: 3210,
      image: 'https://images.unsplash.com/photo-1578321272176-fc0151fc9f34?w=500',
      category: 'Lighting',
      description: 'USB-powered monitor light bar reduces eye strain.'
    },
    {
      id: 23,
      title: 'Cable Organizer',
      price: 12.99,
      originalPrice: 19.99,
      rating: 4.3,
      reviews: 987,
      image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500',
      category: 'Accessories',
      description: 'Cable management organizer set.'
    },
    {
      id: 24,
      title: 'Phone Ring Stand',
      price: 8.99,
      originalPrice: 14.99,
      rating: 4.6,
      reviews: 4321,
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500',
      category: 'Phone Accessories',
      description: 'Universal phone ring stand holder.'
    }
  ]

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSearch = (term) => {
    setSearchTerm(term)
    setSelectedProduct(null)
  }

  const handleProductClick = (product) => {
    setSelectedProduct(product)
  }

  const handleBack = () => {
    setSelectedProduct(null)
  }

  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      
      {selectedProduct ? (
        <ProductDetail product={selectedProduct} onBack={handleBack} />
      ) : (
        <>
          <Hero />
          <ProductSlider products={products} onProductClick={handleProductClick} />
          <Products
            products={filteredProducts}
            onProductClick={handleProductClick}
          />
        </>
      )}
    </div>
  )
}

export default App
