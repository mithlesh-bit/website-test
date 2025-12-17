import React, { useState } from 'react'
import { Product } from '../lib/supabase'

interface ProductCardProps {
  product: Product
  onViewProduct: (product: Product) => void
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewProduct }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  const handleImageError = () => {
    setImageError(true)
    setImageLoaded(true)
  }

  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      <div className="relative overflow-hidden">
        {!imageLoaded && (
          <div className="w-full h-72 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse flex items-center justify-center">
            <div className="text-gray-400 text-4xl">👕</div>
          </div>
        )}
        {imageError ? (
          <div className="w-full h-72 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            <div className="text-gray-400 text-6xl">📷</div>
          </div>
        ) : (
          <img
            src={product.image_url}
            alt={product.name}
            className={`w-full h-72 object-cover cursor-pointer transition-all duration-500 group-hover:scale-110 ${
              imageLoaded ? 'opacity-100' : 'opacity-0 absolute'
            }`}
            onClick={() => onViewProduct(product)}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        )}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick view button */}
        <button
          onClick={() => onViewProduct(product)}
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 shadow-lg"
        >
          👁️
        </button>
        
        {/* Stock badge */}
        {product.stock <= 5 && product.stock > 0 && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-400 to-red-400 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
            Only {product.stock} left!
          </div>
        )}
        
        {product.stock === 0 && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
            Out of Stock
          </div>
        )}
        
        {/* New badge for recent products */}
        {new Date(product.created_at).getTime() > Date.now() - 7 * 24 * 60 * 60 * 1000 && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-green-400 to-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
            New
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="mb-3">
          <span className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200 line-clamp-1">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ${product.price}
            </span>
            <span className="text-xs text-gray-500">
              {product.color} • {product.size}
            </span>
          </div>
          <div className="text-right">
            <div className={`text-sm font-medium ${
              product.stock > 10 ? 'text-green-600' : 
              product.stock > 0 ? 'text-orange-600' : 'text-red-600'
            }`}>
              {product.stock > 0 ? (
                <div className="flex items-center gap-1">
                  <div className={`w-2 h-2 rounded-full ${
                    product.stock > 10 ? 'bg-green-500' : 'bg-orange-500'
                  }`} />
                  <span>{product.stock} in stock</span>
                </div>
              ) : (
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <span>Out of stock</span>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <button
          onClick={() => onViewProduct(product)}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        >
          <span>View Details</span>
          <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
        </button>
      </div>
    </div>
  )
}