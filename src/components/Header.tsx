import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useCart } from '../hooks/useCart'

interface HeaderProps {
  onOpenCart: () => void
  searchQuery: string
  onSearchChange: (query: string) => void
}

export const Header: React.FC<HeaderProps> = ({ onOpenCart, searchQuery, onSearchChange }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { cart } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0)
  const isHomePage = location.pathname === '/'
  const isAdminPage = location.pathname === '/admin'

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">👗</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              FashionHub
            </h1>
          </div>

          {/* Search Bar - Only on home page */}
          {isHomePage && (
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-50 focus:bg-white transition-all duration-300"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-400">🔍</span>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center space-x-6">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => navigate('/')}
                className={`transition-colors duration-300 font-medium ${
                  isHomePage ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                Shop
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-gray-600 hover:text-purple-600 transition-colors duration-300 font-medium"
              >
                Contact
              </button>
              <button
                onClick={() => navigate('/admin')}
                className={`transition-colors duration-300 font-medium ${
                  isAdminPage ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                Admin
              </button>
            </nav>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span className="text-lg">🛒</span>
              <span className="hidden sm:inline font-medium">Cart</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {/* Mobile Search */}
            {isHomePage && (
              <div className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-50 focus:bg-white transition-all duration-300"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-400">🔍</span>
                  </div>
                </div>
              </div>
            )}
            
            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => {
                  navigate('/')
                  setIsMenuOpen(false)
                }}
                className={`text-left px-4 py-2 rounded-lg transition-colors duration-300 font-medium ${
                  isHomePage ? 'text-purple-600 bg-purple-50' : 'text-gray-600 hover:text-purple-600 hover:bg-gray-50'
                }`}
              >
                Shop
              </button>
              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  setIsMenuOpen(false)
                }}
                className="text-left px-4 py-2 rounded-lg text-gray-600 hover:text-purple-600 hover:bg-gray-50 transition-colors duration-300 font-medium"
              >
                Contact
              </button>
              <button
                onClick={() => {
                  navigate('/admin')
                  setIsMenuOpen(false)
                }}
                className={`text-left px-4 py-2 rounded-lg transition-colors duration-300 font-medium ${
                  isAdminPage ? 'text-purple-600 bg-purple-50' : 'text-gray-600 hover:text-purple-600 hover:bg-gray-50'
                }`}
              >
                Admin
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}