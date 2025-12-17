import React, { useState, useEffect } from 'react'
import { Cart } from './components/Cart'
import { ProductCard } from './components/ProductCard'
import { ProductDetail } from './components/ProductDetail'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { AdminPanel } from './components/AdminPanel'
import { CartProvider } from './contexts/CartContext'
import { Product, supabase } from './lib/supabase'

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isAdminOpen, setIsAdminOpen] = useState(false)
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 })

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (error) throw error
      setProducts(data || [])
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }

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

  const handleOpenAdmin = () => {
    setIsAdminOpen(true)
  }

  const handleCloseAdmin = () => {
    setIsAdminOpen(false)
    fetchProducts() // Refresh products when admin closes
  }

  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))]
  
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max
    
    return matchesSearch && matchesCategory && matchesPrice
  })

  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Header */}
        <header className="bg-white/90 backdrop-blur-sm shadow-lg sticky top-0 z-40 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  StyleHub
                </div>
                <div className="ml-4 text-sm text-gray-600 hidden md:block">
                  Premium Fashion Collection
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <nav className="hidden md:flex space-x-8">
                  <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                    Products
                  </a>
                  <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                    Contact
                  </a>
                </nav>
                <button
                  onClick={handleOpenAdmin}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2.5 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <span>⚙️</span>
                  <span className="hidden sm:inline">Admin</span>
                </button>
                <button
                  onClick={handleOpenCart}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <span>🛒</span>
                  <span className="hidden sm:inline">Cart</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-6xl font-bold mb-6 leading-tight">
              Discover Your
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Perfect Style
              </span>
            </h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-blue-100">
              Explore our curated collection of premium fashion items. From casual wear to formal attire, 
              find the perfect pieces that express your unique style and personality.
            </p>
            <button
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-10 py-4 rounded-full font-bold hover:from-yellow-300 hover:to-orange-300 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-2xl text-lg"
            >
              Shop Collection
            </button>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-white/80 backdrop-blur-sm border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/90 backdrop-blur-sm shadow-sm"
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    🔍
                  </div>
                </div>
              </div>
              
              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <span className="text-gray-700 font-medium whitespace-nowrap">Category:</span>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-500 bg-white/90 backdrop-blur-sm shadow-sm"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Price Range */}
              <div className="flex items-center gap-2">
                <span className="text-gray-700 font-medium whitespace-nowrap">Price:</span>
                <select
                  onChange={(e) => {
                    const [min, max] = e.target.value.split('-').map(Number)
                    setPriceRange({ min, max })
                  }}
                  className="px-4 py-2 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-500 bg-white/90 backdrop-blur-sm shadow-sm"
                >
                  <option value="0-1000">All Prices</option>
                  <option value="0-50">Under $50</option>
                  <option value="50-100">$50 - $100</option>
                  <option value="100-200">$100 - $200</option>
                  <option value="200-1000">$200+</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Our
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Collection</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover handpicked fashion items that combine style, comfort, and quality. 
                Each piece is carefully selected to help you express your unique personality.
              </p>
            </div>
            
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">😔</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your filters or search terms</p>
              </div>
            ) : (
              <>
                <div className="mb-6 text-center">
                  <p className="text-gray-600">
                    Showing {filteredProducts.length} of {products.length} products
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onViewProduct={handleViewProduct}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose StyleHub?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <span className="text-white text-2xl">🚚</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
                <p className="text-gray-600">Free delivery on orders over $75</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <span className="text-white text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
                <p className="text-gray-600">100% secure payment processing</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <span className="text-white text-2xl">↩️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
                <p className="text-gray-600">30-day hassle-free returns</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <Contact />
        
        {/* Footer */}
        <Footer />

        {/* Modals */}
        {selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            onClose={handleCloseProductDetail}
          />
        )}

        <Cart isOpen={isCartOpen} onClose={handleCloseCart} />
        
        {isAdminOpen && (
          <AdminPanel onClose={handleCloseAdmin} />
        )}
      </div>
    </CartProvider>
  )
}

export default App