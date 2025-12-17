import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://your-project.supabase.co'
const supabaseAnonKey = 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

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
  customer_name: string
  customer_email: string
  customer_phone: string
  total: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  items: OrderItem[]
  created_at: string
}

export interface OrderItem {
  id: string
  order_id: string
  product_id: string
  quantity: number
  price: number
  created_at: string
}