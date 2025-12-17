import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Cart } from './components/Cart'
import { ProductCard } from './components/ProductCard'
import { ProductDetail } from './components/ProductDetail'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { AdminDashboard } from './components/AdminDashboard'
import { Header } from './components/Header'
import { About } from './components/About'
import { PrivacyPolicy } from './components/PrivacyPolicy'
import { CartProvider } from './contexts/CartContext'
import { Product, supabase } from './lib/supabase'

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 200])

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

  const categories = ['all', ...new Set(products.map(p => p.category))]

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    return matchesSearch && matchesCategory && matchesPrice
  })

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header 
            onOpenCart={handleOpenCart}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          <Routes>
            <Route path="/" element={
              <>
                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-24 overflow-hidden">
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
                      Fashion Forward
                    </h1>
                    <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-200">
                      Discover the latest trends in fashion with our curated collection of premium clothing.
                      Style that speaks, quality that lasts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button
                        onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-pink-600 hover:to-violet-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                      >
                        Shop Collection
                      </button>
                      <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                  <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                  <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
                </section>

                {/* Filters Section */}
                <section className="py-8 bg-white shadow-sm">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap gap-4 items-center justify-between">
                      <div className="flex flex-wrap gap-4">
                        <select
                          value={selectedCategory}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        >
                          {categories.map(category => (
                            <option key={category} value={category}>
                              {category === 'all' ? 'All Categories' : category}
                            </option>
                          ))}
                        </select>
                        
                        <div className="flex items-center gap-2">
                          <label className="text-sm font-medium text-gray-700">Price: $</label>
                          <input
                            type="range"
                            min="0"
                            max="200"
                            value={priceRange[1]}
                            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                            className="w-32"
                          />
                          <span className="text-sm text-gray-600">{priceRange[1]}</span>
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-600">
                        {filteredProducts.length} products found
                      </div>
                    </div>
                  </div>
                </section>

                {/* Products Section */}
                <section id="products" className="py-16">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Collection</span>
                      </h2>
                      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Carefully curated pieces that blend style, comfort, and quality
                      </p>
                    </div>
                    
                    {loading ? (
                      <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500"></div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredProducts.map((product) => (
                          <ProductCard
                            key={product.id}
                            product={product}
                            onViewProduct={handleViewProduct}
                          />
                        ))}
                      </div>
                    )}
                    
                    {!loading && filteredProducts.length === 0 && (
                      <div className="text-center py-20">
                        <div className="text-6xl mb-4">Ã°</div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">No products found</h3>
                        <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                      </div>
                    )}
                  </div>
                </section>

                <Contact />
                <Footer />
              </>
            } />
            
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

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
      </Router>
    </CartProvider>
  )
}

export default App