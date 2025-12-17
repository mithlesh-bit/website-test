// Supabase configuration and types
// Note: This is a mock implementation since we don't have actual Supabase credentials

export interface Product {
  id: string
  name: string
  description: string
  price: number
  image_url: string
  category: string
  color: string
  size: string
  stock: number
  created_at: string
  updated_at: string
}

export interface Order {
  id: string
  total: number
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled'
  customer_name: string
  customer_email: string
  customer_address: string
  created_at: string
  updated_at: string
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

// Mock Supabase client
class MockSupabaseClient {
  from(table: string) {
    return {
      insert: (data: any) => ({
        select: () => ({
          single: () => Promise.resolve({ 
            data: { ...data, id: Math.random().toString(36).substr(2, 9) }, 
            error: null 
          })
        })
      }),
      update: (data: any) => ({
        eq: (column: string, value: any) => Promise.resolve({ data: null, error: null })
      })
    }
  }
}

// Export mock supabase client
export const supabase = new MockSupabaseClient()

// In a real implementation, you would use:
// import { createClient } from '@supabase/supabase-js'
// const supabaseUrl = 'your-supabase-url'
// const supabaseKey = 'your-supabase-anon-key'
// export const supabase = createClient(supabaseUrl, supabaseKey)