import React from 'react'
import { Product } from '../lib/supabase'

interface ProductCardProps {
  product: Product
  onViewProduct: (product: Product) => void
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewProduct }) => {
  const discountPercentage = Math.floor(Math.random() * 30) + 10 // Random discount for demo
  const originalPrice = product.price * 1.2

  return (
    <div className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-72 object-cover cursor-pointer group-hover:scale-110 transition-transform duration-700"
          onClick={() => onViewProduct(product)}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        
        {/* Quick View Button */}
        <button
          onClick={() => onViewProduct(product)}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <span className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold shadow-lg transform scale-95 group-hover:scale-100 transition-transform duration-300">
            Quick View
          </span>
        </button>
        
        {/* Discount Badge */}
        <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          -{discountPercentage}%
        </div>
        
        {/* Stock Badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
          product.stock > 10 
            ? 'bg-green-100 text-green-800' 
            : product.stock > 0 
            ? 'bg-yellow-100 text-yellow-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {product.stock > 0 ? `${product.stock} left` : 'Out of Stock'}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <div className="text-xs font-medium text-purple-600 uppercase tracking-wide mb-2">
          {product.category}
        </div>
        
        {/* Name */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300">
          {product.name}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        {/* Product Details */}
        <div className="flex items-center gap-3 mb-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: product.color.toLowerCase() }}></div>
            {product.color}
          </span>
          <span>•</span>
          <span>Size {product.size}</span>
        </div>
        
        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
            <span className="text-sm text-gray-500 line-through">${originalPrice.toFixed(2)}</span>
          </div>
          <div className="flex items-center gap-1 text-yellow-400">
            {'★'.repeat(5)}
            <span className="text-sm text-gray-600 ml-1">(4.8)</span>
          </div>
        </div>
        
        {/* Action Button */}
        <button
          onClick={() => onViewProduct(product)}
          disabled={product.stock === 0}
          className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform ${
            product.stock === 0
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 hover:shadow-lg hover:scale-105 active:scale-95'
          }`}
        >
          {product.stock === 0 ? 'Out of Stock' : 'View Details'}
        </button>
      </div>
    </div>
  )
}