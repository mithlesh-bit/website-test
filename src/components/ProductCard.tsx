import React from 'react'
import { Product } from '../lib/supabase'

interface ProductCardProps {
  product: Product
  onViewProduct: (product: Product) => void
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewProduct }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={product.image_url}
        alt={product.name}
        className="w-full h-64 object-cover cursor-pointer"
        onClick={() => onViewProduct(product)}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.category}</p>
        <div className="flex justify-between items-center mb-2">
          <span className="text-xl font-bold text-blue-600">${product.price}</span>
          <span className="text-sm text-gray-500">{product.color} • {product.size}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className={`text-sm ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
          </span>
          <button
            onClick={() => onViewProduct(product)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}