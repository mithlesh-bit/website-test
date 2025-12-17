import React from 'react'
import { Product } from '../lib/supabase'
import { useCart } from '../hooks/useCart'

interface ProductDetailProps {
  product: Product
  onClose: () => void
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onClose }) => {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        <div className="flex flex-col md:flex-row">
          {/* Product Image */}
          <div className="md:w-1/2">
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-64 md:h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 p-8 overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-sm font-medium text-purple-600 uppercase tracking-wide">
                  {product.category}
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-2">{product.name}</h1>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <span className="text-2xl text-gray-500">×</span>
              </button>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-1 text-yellow-400 mb-2">
                {'★'.repeat(5)}
                <span className="text-sm text-gray-600 ml-2">(4.8 • 124 reviews)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                <span className="text-lg text-gray-500 line-through">${(product.price * 1.2).toFixed(2)}</span>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-semibold">
                  Save 20%
                </span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Product Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Color:</span>
                  <div className="flex items-center gap-2 mt-1">
                    <div 
                      className="w-4 h-4 rounded-full border border-gray-300" 
                      style={{ backgroundColor: product.color.toLowerCase() }}
                    ></div>
                    <span className="font-medium">{product.color}</span>
                  </div>
                </div>
                <div>
                  <span className="text-gray-500">Size:</span>
                  <p className="font-medium">{product.size}</p>
                </div>
                <div>
                  <span className="text-gray-500">Stock:</span>
                  <p className={`font-medium ${
                    product.stock > 10 ? 'text-green-600' : 
                    product.stock > 0 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {product.stock > 0 ? `${product.stock} available` : 'Out of stock'}
                  </p>
                </div>
                <div>
                  <span className="text-gray-500">Category:</span>
                  <p className="font-medium capitalize">{product.category}</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">Features</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Premium quality materials
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Comfortable fit
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Easy care instructions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  30-day return policy
                </li>
              </ul>
            </div>

            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
              >
                Continue Shopping
              </button>
              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  product.stock === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 hover:shadow-lg transform hover:scale-105'
                }`}
              >
                {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}