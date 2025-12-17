import React, { createContext, useState, ReactNode } from 'react'
import { Product, CartItem } from '../lib/supabase'

// Simple UUID v4 generator function to replace external dependency
const generateUUID = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0
    const v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (product: Product, size: string, quantity: number) => void
  removeFromCart: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
  getTotal: () => number
}

export const CartContext = createContext<CartContextType | undefined>(undefined)

interface CartProviderProps {
  children: ReactNode
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (product: Product, size: string, quantity: number) => {
    const existingItem = cart.find(
      item => item.product.id === product.id && item.size === size
    )

    if (existingItem) {
      updateQuantity(existingItem.id, existingItem.quantity + quantity)
    } else {
      const newItem: CartItem = {
        id: generateUUID(),
        product,
        size,
        quantity
      }
      setCart(prev => [...prev, newItem])
    }
  }

  const removeFromCart = (itemId: string) => {
    setCart(prev => prev.filter(item => item.id !== itemId))
  }

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId)
      return
    }
    
    setCart(prev =>
      prev.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const getTotal = () => {
    return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0)
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotal
    }}>
      {children}
    </CartContext.Provider>
  )
}