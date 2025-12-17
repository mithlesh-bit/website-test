import React, { useState } from 'react'
import { Cart } from './components/Cart'
import { ProductCard } from './components/ProductCard'
import { ProductDetail } from './components/ProductDetail'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { CartProvider } from './contexts/CartContext'
import { Product } from './lib/supabase'

// Mock product data for demonstration
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium T-Shirt',
    description: 'High-quality cotton t-shirt with comfortable fit',
    price: 29.99,
    image_url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
    category: 'Apparel',
    color: 'Blue',
    size: 'M',
    stock: 15,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Classic Jeans',
    description: 'Comfortable denim jeans with modern fit',
    price: 79.99,
    image_url: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
    category: 'Apparel',
    color: 'Dark Blue',
    size: 'L',
    stock: 8,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '3',
    name: 'Running Shoes',
    description: 'Lightweight running shoes for optimal performance',
    price: 119.99,
    image_url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    category: 'Footwear',
    color: 'White',
    size: '10',
    stock: 12,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '4',
    name: 'Casual Hoodie',
    description: 'Cozy hoodie perfect for casual wear',
    price: 59.99,
    image_url: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400',
    category: 'Apparel',
    color: 'Gray',
    size: 'L',
    stock: 6,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
]

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [products] = useState<Product[]>(mockProducts)

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product)
  }

  const handleCloseProductDetail = () => {
    setSelectedProduct(null)
  }

  const handleOpenCart = () => {
    setIsCartOpen(true)
  }

  const handleCloseCart = () => {
    setIsCartOpen(false)
  }

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-white shadow-md sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-gray-800">BusinessPro</h1>
              </div>
              <div className="flex items-center space-x-4">
                <nav className="hidden md:flex space-x-8">
                  <a href="#products" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Products
                  </a>
                  <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Contact
                  </a>
                </nav>
                <button
                  onClick={handleOpenCart}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
                >
                  <span>🛒</span>
                  Cart
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl font-bold mb-6">Welcome to BusinessPro</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Discover our premium collection of products designed for the modern professional.
              Quality, style, and comfort in every item.
            </p>
            <button
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-200"
            >
              Shop Now
            </button>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
              <p className="text-xl text-gray-600">
                Explore our carefully curated collection of premium products
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewProduct={handleViewProduct}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <Contact />
        
        {/* Footer */}
        <Footer />

        {/* Product Detail Modal */}
        {selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            onClose={handleCloseProductDetail}
          />
        )}

        {/* Cart Modal */}
        <Cart isOpen={isCartOpen} onClose={handleCloseCart} />
      </div>
    </CartProvider>
  )
}

export default App