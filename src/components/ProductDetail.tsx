import React, { useState } from 'react'
import { Product } from '../lib/supabase'
import { useCart } from '../hooks/useCart'

interface ProductDetailProps {
  product: Product
  onClose: () => void
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onClose }) => {
  const [selectedSize, setSelectedSize] = useState(product.size)
  const [quantity, setQuantity] = useState(1)
  const [showSuccess, setShowSuccess] = useState(false)
  const { addToCart } = useCart()

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity)
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 2000)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold">Product Details</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>
        
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="mb-4">
              <span className="text-3xl font-bold text-blue-600">${product.price}</span>
            </div>
            
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">Category: {product.category}</p>
              <p className="text-sm text-gray-600 mb-2">Color: {product.color}</p>
              <p className={`text-sm mb-2 ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
              </p>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Size:</label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              >
                {sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Quantity:</label>
              <input
                type="number"
                min="1"
                max={product.stock}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                className="w-20 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className={`w-full py-3 px-6 rounded-lg font-semibold ${
                product.stock === 0
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              } transition-colors duration-200`}
            >
              {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </button>
            
            {showSuccess && (
              <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                Added to cart successfully!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}