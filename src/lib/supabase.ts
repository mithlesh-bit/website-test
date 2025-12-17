// Supabase configuration and types
// Note: This is a mock implementation for demo purposes
// In a real project, you would configure actual Supabase client

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
  created_at?: string
}

export interface CartItem {
  id: string
  product: Product
  size: string
  quantity: number
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

// Mock Supabase client for demo purposes
// Replace with actual Supabase configuration in production
class MockSupabase {
  from(table: string) {
    return {
      select: (columns = '*') => ({
        order: (column: string, options?: { ascending: boolean }) => ({
          then: (callback: (result: { data: any[], error: null }) => void) => {
            // Mock data for demo
            const mockProducts: Product[] = [
              {
                id: '1',
                name: 'Premium Cotton T-Shirt',
                description: 'Soft and comfortable cotton t-shirt perfect for everyday wear.',
                price: 29.99,
                category: 'T-Shirts',
                image_url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
                stock: 15,
                color: 'Blue',
                size: 'M',
                created_at: new Date().toISOString()
              },
              {
                id: '2',
                name: 'Elegant Summer Dress',
                description: 'Beautiful floral dress perfect for summer occasions.',
                price: 79.99,
                category: 'Dresses',
                image_url: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400',
                stock: 8,
                color: 'Floral',
                size: 'S',
                created_at: new Date().toISOString()
              },
              {
                id: '3',
                name: 'Classic Denim Jeans',
                description: 'High-quality denim jeans with a comfortable fit.',
                price: 89.99,
                category: 'Jeans',
                image_url: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400',
                stock: 12,
                color: 'Blue',
                size: 'L',
                created_at: new Date().toISOString()
              }
            ]
            
            const mockOrders: Order[] = [
              {
                id: '1',
                total: 109.98,
                status: 'pending',
                customer_name: 'John Doe',
                customer_email: 'john@example.com',
                customer_address: '123 Main St, City, State 12345',
                created_at: new Date().toISOString()
              }
            ]
            
            setTimeout(() => {
              callback({
                data: table === 'products' ? mockProducts : mockOrders,
                error: null
              })
            }, 100)
          }
        }),
        then: (callback: (result: { data: any[], error: null }) => void) => {
          callback({ data: [], error: null })
        }
      }),
      insert: (data: any) => ({
        select: () => ({
          single: () => ({
            then: (callback: (result: { data: any, error: null }) => void) => {
              setTimeout(() => {
                callback({
                  data: { id: Date.now().toString(), ...data },
                  error: null
                })
              }, 100)
            }
          }),
          then: (callback: (result: { error: null }) => void) => {
            setTimeout(() => {
              callback({ error: null })
            }, 100)
          }
        }),
        then: (callback: (result: { error: null }) => void) => {
          setTimeout(() => {
            callback({ error: null })
          }, 100)
        }
      }),
      update: (data: any) => ({
        eq: (column: string, value: any) => ({
          then: (callback: (result: { error: null }) => void) => {
            setTimeout(() => {
              callback({ error: null })
            }, 100)
          }
        })
      }),
      delete: () => ({
        eq: (column: string, value: any) => ({
          then: (callback: (result: { error: null }) => void) => {
            setTimeout(() => {
              callback({ error: null })
            }, 100)
          }
        })
      })
    }
  }
}

export const supabase = new MockSupabase()