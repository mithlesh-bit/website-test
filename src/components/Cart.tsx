import React, { useState } from 'react'
import { useCart } from '../hooks/useCart'
import { supabase } from '../lib/supabase'

interface CartProps {
  isOpen: boolean
  onClose: () => void
}

export const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotal } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    address: ''
  })
  const [orderSuccess, setOrderSuccess] = useState(false)

  const handleCheckout = async () => {
    if (!customerInfo.name || !customerInfo.email || !customerInfo.address) {
      alert('Please fill in all customer information')
      return
    }

    setIsCheckingOut(true)
    try {
      // Create order
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert({
          total: getTotal(),
          status: 'pending',
          customer_name: customerInfo.name,
          customer_email: customerInfo.email,
          customer_address: customerInfo.address
        })
        .select()
        .single()

      if (orderError) throw orderError

      // Create order items
      const orderItems = cart.map(item => ({
        order_id: order.id,
        product_id: item.product.id,
        quantity: item.quantity,
        price: item.product.price,
        size: item.size
      }))

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems)

      if (itemsError) throw itemsError

      // Update product stock
      for (const item of cart) {
        const { error: stockError } = await supabase
          .from('products')
          .update({ stock: item.product.stock - item.quantity })
          .eq('id', item.product.id)

        if (stockError) throw stockError
      }

      clearCart()
      setOrderSuccess(true)
      setShowCheckout(false)
      setTimeout(() => {
        setOrderSuccess(false)
        onClose()
      }, 3000)
    } catch (error) {
      console.error('Checkout error:', error)
      alert('Error processing order. Please try again.')
    } finally {
      setIsCheckingOut(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        {orderSuccess && (
          <div className="p-6 bg-green-100 border border-green-400 text-green-700">
            <h3 className="font-bold mb-2">Order Placed Successfully!</h3>
            <p>Thank you for your purchase. You will receive a confirmation email shortly.</p>
          </div>
        )}

        <div className="p-6">
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center py-8">Your cart is empty</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-4 py-4 border-b">
                  <img
                    src={item.product.image_url}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.product.name}</h3>
                    <p className="text-gray-600 text-sm">Size: {item.size}</p>
                    <p className="text-blue-600 font-bold">${item.product.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800 ml-4"
                  >
                    Remove
                  </button>
                </div>
              ))}

              <div className="mt-6 pt-6 border-t">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-bold">Total: ${getTotal().toFixed(2)}</span>
                </div>

                {!showCheckout ? (
                  <button
                    onClick={() => setShowCheckout(true)}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                  >
                    Proceed to Checkout
                  </button>
                ) : (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Customer Information</h3>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                      placeholder="Delivery Address"
                      value={customerInfo.address}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 h-24"
                    />
                    <div className="flex gap-4">
                      <button
                        onClick={() => setShowCheckout(false)}
                        className="flex-1 bg-gray-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-600 transition-colors duration-200"
                      >
                        Back
                      </button>
                      <button
                        onClick={handleCheckout}
                        disabled={isCheckingOut}
                        className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 disabled:bg-gray-400"
                      >
                        {isCheckingOut ? 'Processing...' : 'Place Order'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}