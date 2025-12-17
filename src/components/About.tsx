import React from 'react'
import { useNavigate } from 'react-router-dom'

export const About: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-purple-200 hover:text-white font-medium mb-8 transition-colors"
          >
            ← Back to Home
          </button>
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
              About FashionHub
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Your destination for premium fashion that combines style, quality, and affordability
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Story</span>
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2020, FashionHub began with a simple mission: to make high-quality, 
                  trendy fashion accessible to everyone. We believe that great style shouldn't come 
                  with a hefty price tag, and everyone deserves to feel confident in what they wear.
                </p>
                <p>
                  What started as a small online boutique has grown into a trusted fashion destination, 
                  serving thousands of satisfied customers worldwide. Our carefully curated collection 
                  features the latest trends while maintaining our commitment to quality and affordability.
                </p>
                <p>
                  Every piece in our collection is handpicked by our fashion experts who understand 
                  the pulse of contemporary style. We work directly with manufacturers to ensure 
                  the best quality at competitive prices.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Fashion store interior"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl text-white">✨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality First</h3>
              <p className="text-gray-600 leading-relaxed">
                We never compromise on quality. Every item is carefully inspected to ensure 
                it meets our high standards before reaching your wardrobe.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl text-white">💎</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Affordable Luxury</h3>
              <p className="text-gray-600 leading-relaxed">
                Luxury shouldn't be exclusive. We make premium fashion accessible by working 
                directly with manufacturers and cutting out the middleman.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl text-white">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sustainability</h3>
              <p className="text-gray-600 leading-relaxed">
                We're committed to sustainable fashion practices, working with eco-friendly 
                materials and ethical manufacturers whenever possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate people behind FashionHub
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative inline-block mb-6">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt="Sarah Johnson"
                  className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Johnson</h3>
              <p className="text-purple-600 font-medium mb-3">Founder & CEO</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Fashion industry veteran with 15+ years of experience in retail and design. 
                Passionate about making quality fashion accessible to everyone.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="relative inline-block mb-6">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt="Michael Chen"
                  className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Michael Chen</h3>
              <p className="text-purple-600 font-medium mb-3">Head of Design</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Award-winning designer with a keen eye for trends and quality. 
                Leads our product curation and ensures every piece meets our standards.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="relative inline-block mb-6">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Emma Rodriguez"
                  className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Emma Rodriguez</h3>
              <p className="text-purple-600 font-medium mb-3">Customer Experience Director</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Dedicated to ensuring every customer has an amazing experience. 
                Oversees our customer service and satisfaction initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
                50K+
              </div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
                1000+
              </div>
              <div className="text-gray-300">Products</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
                98%
              </div>
              <div className="text-gray-300">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
                4.9★
              </div>
              <div className="text-gray-300">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Discover Your Style?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of fashion-forward individuals who trust FashionHub for their style needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Shop Now
            </button>
            <button
              onClick={() => {
                navigate('/')
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }, 100)
              }}
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}