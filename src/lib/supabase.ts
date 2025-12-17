import { createClient } from '@supabase/supabase-js'

// For demo purposes, using placeholder values
// In a real app, these would be environment variables
const supabaseUrl = 'https://your-project.supabase.co'
const supabaseKey = 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseKey)

export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  image_url: string
  stock: number
  color: string
  size: string
  created_at: string
}

export interface Order {
  id: string
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  customer_name: string
  customer_email: string
  customer_address: string
  created_at: string
}

export interface OrderItem {
  id: string
  order_id: string
  product_id: string
  quantity: number
  price: number
  size: string
  created_at: string
}

// Mock data for demo purposes since we don't have real Supabase setup
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Cotton T-Shirt',
    description: 'Comfortable and stylish cotton t-shirt perfect for everyday wear.',
    price: 29.99,
    category: 'T-Shirts',
    image_url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stock: 15,
    color: 'Blue',
    size: 'M',
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Designer Jeans',
    description: 'High-quality denim jeans with a modern fit and classic style.',
    price: 79.99,
    category: 'Jeans',
    image_url: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stock: 8,
    color: 'Dark Blue',
    size: 'L',
    created_at: new Date().toISOString()
  },
  {
    id: '3',
    name: 'Summer Dress',
    description: 'Light and airy summer dress perfect for warm weather.',
    price: 59.99,
    category: 'Dresses',
    image_url: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stock: 12,
    color: 'Yellow',
    size: 'S',
    created_at: new Date().toISOString()
  },
  {
    id: '4',
    name: 'Casual Hoodie',
    description: 'Warm and comfortable hoodie for casual wear.',
    price: 49.99,
    category: 'Hoodies',
    image_url: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stock: 20,
    color: 'Gray',
    size: 'L',
    created_at: new Date().toISOString()
  },
  {
    id: '5',
    name: 'Formal Shirt',
    description: 'Professional formal shirt suitable for business occasions.',
    price: 39.99,
    category: 'Shirts',
    image_url: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stock: 10,
    color: 'White',
    size: 'M',
    created_at: new Date().toISOString()
  },
  {
    id: '6',
    name: 'Leather Jacket',
    description: 'Stylish leather jacket for a bold fashion statement.',
    price: 199.99,
    category: 'Jackets',
    image_url: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    stock: 5,
    color: 'Black',
    size: 'L',
    created_at: new Date().toISOString()
  }
]

// Mock Supabase client for demo purposes
class MockSupabaseClient {
  from(table: string) {
    return {
      select: (columns: string = '*') => ({
        order: (column: string, options: any = {}) => ({
          then: (callback: (result: any) => void) => {
            if (table === 'products') {
              callback({ data: mockProducts, error: null })
            } else {
              callback({ data: [], error: null })
            }
          }
        }),
        then: (callback: (result: any) => void) => {
          if (table === 'products') {
            callback({ data: mockProducts, error: null })
          } else {
            callback({ data: [], error: null })
          }
        }
      }),
      insert: (data: any) => ({
        select: () => ({
          single: () => ({
            then: (callback: (result: any) => void) => {
              const newItem = { ...data, id: Date.now().toString(), created_at: new Date().toISOString() }
              callback({ data: newItem, error: null })
            }
          }),
          then: (callback: (result: any) => void) => {
            callback({ data: null, error: null })
          }
        }),
        then: (callback: (result: any) => void) => {
          callback({ data: null, error: null })
        }
      }),
      delete: () => ({
        eq: (column: string, value: any) => ({
          then: (callback: (result: any) => void) => {
            callback({ data: null, error: null })
          }
        })
      }),
      update: (data: any) => ({
        eq: (column: string, value: any) => ({
          then: (callback: (result: any) => void) => {
            callback({ data: null, error: null })
          }
        })
      })
    }
  }
}

// Use mock client for demo
export const mockSupabase = new MockSupabaseClient()

// Override the supabase export with mock for demo
// In production, you would use the real supabase client
export { mockSupabase as supabase }