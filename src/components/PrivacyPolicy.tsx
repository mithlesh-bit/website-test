import React from 'react'
import { useNavigate } from 'react-router-dom'

export const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-purple-200 hover:text-white font-medium mb-8 transition-colors"
          >
            â Back to Home
          </button>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-200">
              Your privacy is important to us
            </p>
            <p className="text-sm text-gray-300 mt-2">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  Welcome to FashionHub. We respect your privacy and are committed to protecting your personal data. 
                  This privacy policy will inform you about how we look after your personal data when you visit our 
                  website and tell you about your privacy rights and how the law protects you.
                </p>
              </div>

              {/* Data We Collect */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Information</h3>
                    <p className="leading-relaxed">
                      We may collect personal information that you provide to us, including:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Name and contact information (email, phone number, address)</li>
                      <li>Account credentials (username, password)</li>
                      <li>Payment information (credit card details, billing address)</li>
                      <li>Order history and preferences</li>
                      <li>Communications with our customer service team</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Automatic Information</h3>
                    <p className="leading-relaxed">
                      When you use our website, we automatically collect certain information:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Device information (browser type, operating system)</li>
                      <li>Usage data (pages visited, time spent, click patterns)</li>
                      <li>IP address and location data</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Data */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <div className="text-gray-700">
                  <p className="leading-relaxed mb-4">
                    We use the information we collect for various purposes, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Processing and fulfilling your orders</li>
                    <li>Providing customer support and responding to inquiries</li>
                    <li>Personalizing your shopping experience</li>
                    <li>Sending promotional emails and marketing communications (with your consent)</li>
                    <li>Improving our website and services</li>
                    <li>Preventing fraud and ensuring security</li>
                    <li>Complying with legal obligations</li>
                  </ul>
                </div>
              </div>

              {/* Data Sharing */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Share Your Information</h2>
                <div className="text-gray-700 space-y-4">
                  <p className="leading-relaxed">
                    We do not sell, trade, or rent your personal information to third parties. We may share your 
                    information in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Service Providers:</strong> With trusted third-party service providers who help us operate our business</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                    <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
                  </ul>
                </div>
              </div>

              {/* Data Security */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <div className="text-gray-700 space-y-4">
                  <p className="leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your personal 
                    data against unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Encryption of sensitive data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication measures</li>
                    <li>Employee training on data protection</li>
                  </ul>
                </div>
              </div>

              {/* Your Rights */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <div className="text-gray-700 space-y-4">
                  <p className="leading-relaxed">
                    You have certain rights regarding your personal data:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Access:</strong> Request copies of your personal data</li>
                    <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
                    <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                    <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                    <li><strong>Objection:</strong> Object to processing of your personal data</li>
                    <li><strong>Restriction:</strong> Request restriction of processing</li>
                  </ul>
                </div>
              </div>

              {/* Cookies */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
                <div className="text-gray-700">
                  <p className="leading-relaxed mb-4">
                    We use cookies and similar tracking technologies to enhance your browsing experience. 
                    Cookies help us:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Remember your preferences and settings</li>
                    <li>Keep you logged into your account</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Provide personalized content and advertisements</li>
                  </ul>
                  <p className="leading-relaxed mt-4">
                    You can control cookies through your browser settings, but some features may not work properly 
                    if you disable cookies.
                  </p>
                </div>
              </div>

              {/* Third-Party Links */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
                <div className="text-gray-700">
                  <p className="leading-relaxed">
                    Our website may contain links to third-party websites. We are not responsible for the privacy 
                    practices of these external sites. We encourage you to review the privacy policies of any 
                    third-party websites you visit.
                  </p>
                </div>
              </div>

              {/* Children's Privacy */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
                <div className="text-gray-700">
                  <p className="leading-relaxed">
                    Our services are not directed to children under 13 years of age. We do not knowingly collect 
                    personal information from children under 13. If you are a parent or guardian and believe your 
                    child has provided us with personal information, please contact us.
                  </p>
                </div>
              </div>

              {/* Data Retention */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
                <div className="text-gray-700">
                  <p className="leading-relaxed">
                    We retain your personal data only for as long as necessary to fulfill the purposes outlined 
                    in this privacy policy, unless a longer retention period is required by law. When we no longer 
                    need your personal data, we will securely delete or anonymize it.
                  </p>
                </div>
              </div>

              {/* International Transfers */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
                <div className="text-gray-700">
                  <p className="leading-relaxed">
                    Your personal data may be transferred to and processed in countries other than your country of 
                    residence. We ensure that such transfers are protected by appropriate safeguards, including 
                    standard contractual clauses approved by regulatory authorities.
                  </p>
                </div>
              </div>

              {/* Changes to Privacy Policy */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
                <div className="text-gray-700">
                  <p className="leading-relaxed">
                    We may update this privacy policy from time to time. We will notify you of any changes by 
                    posting the new privacy policy on this page and updating the "Last updated" date. We encourage 
                    you to review this privacy policy periodically.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <div className="text-gray-700">
                  <p className="leading-relaxed mb-4">
                    If you have any questions about this privacy policy or our data practices, please contact us:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="space-y-2">
                      <p><strong>Email:</strong> privacy@fashionhub.com</p>
                      <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                      <p><strong>Address:</strong> 123 Fashion Avenue, Suite 100, New York, NY 10001</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consent */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Consent</h3>
                <p className="text-gray-700 leading-relaxed">
                  By using our website, you consent to the collection and use of your personal data as described 
                  in this privacy policy. If you do not agree with our privacy practices, please do not use our website.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Questions About Privacy?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We're here to help. Contact us if you have any questions about how we handle your data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                navigate('/')
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }, 100)
              }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Contact Us
            </button>
            <button
              onClick={() => navigate('/')}
              className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              Back to Shopping
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}