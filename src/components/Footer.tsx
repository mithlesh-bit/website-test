import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">BaksheeshTech</h3>
            <p className="text-gray-300 mb-4">
              Delivering innovative technology solutions that empower businesses 
              to thrive in the digital landscape.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <button 
                onClick={() => scrollToSection('home')} 
                className="block text-gray-300 hover:text-blue-400 transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="block text-gray-300 hover:text-blue-400 transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="block text-gray-300 hover:text-blue-400 transition-colors text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')} 
                className="block text-gray-300 hover:text-blue-400 transition-colors text-left"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block text-gray-300 hover:text-blue-400 transition-colors text-left"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Web Development</li>
              <li className="text-gray-300">Mobile Development</li>
              <li className="text-gray-300">Digital Marketing</li>
              <li className="text-gray-300">Backend Development</li>
              <li className="text-gray-300">Cloud Solutions</li>
              <li className="text-gray-300">Cybersecurity</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="text-blue-400 mr-3" size={16} />
                <span className="text-gray-300 text-sm">hello@baksheeshtech.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-blue-400 mr-3" size={16} />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start">
                <MapPin className="text-blue-400 mr-3 mt-0.5" size={16} />
                <div className="text-gray-300 text-sm">
                  <p>123 Tech Street</p>
                  <p>Silicon Valley, CA 94000</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} BaksheeshTech. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;