import React, { createContext, useContext, useReducer, ReactNode } from 'react'
import { Product } from '../lib/supabase'

export interface CartItem {
  id: string
  product: Product
  size: string
  quantity: number
}

interface CartState {
  items: CartItem[]
}

type CartAction =
  | { type: 'ADD_TO_CART'; payload: { product: Product; size: string; quantity: number } }
  | { type: 'REMOVE_FROM_CART'; payload: { id: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }

interface CartContextType {
  cart: CartItem[]
  addToCart: (product: Product, size: string, quantity: number) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  getTotal: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product, size, quantity } = action.payload
      const existingItemIndex = state.items.findIndex(
        item => item.product.id === product.id && item.size === size
      )
      
      if (existingItemIndex >= 0) {
        const updatedItems = [...state.items]
        updatedItems[existingItemIndex].quantity += quantity
        return { ...state, items: updatedItems }
      } else {
        const newItem: CartItem = {
          id: `${product.id}-${size}-${Date.now()}`,
          product,
          size,
          quantity
        }
        return { ...state, items: [...state.items, newItem] }
      }
    }
    
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id)
      }
    
    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(item => item.id !== id)
        }
      }
      return {
        ...state,
        items: state.items.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      }
    }
    
    case 'CLEAR_CART':
      return { ...state, items: [] }
    
    default:
      return state
  }
}

interface CartProviderProps {
  children: ReactNode
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] })

  const addToCart = (product: Product, size: string, quantity: number) => {
    dispatch({ type: 'ADD_TO_CART', payload: { product, size, quantity } })
  }

  const removeFromCart = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } })
  }

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const getTotal = () => {
    return state.items.reduce((total, item) => total + (item.product.price * item.quantity), 0)
  }

  const value: CartContextType = {
    cart: state.items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotal
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}