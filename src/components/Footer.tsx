
import React from 'react';
import { Heart, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-rose-600 mb-4">
              Belle Bows
            </h3>
            <p className="text-gray-600 mb-4 max-w-md">
              Creating beautiful, high-quality hair accessories that add elegance 
              to your everyday style. Each piece is crafted with love and attention to detail.
            </p>
            <div className="flex space-x-4">
              <button className="p-2 text-gray-400 hover:text-rose-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-rose-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-rose-600 transition-colors">
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">
                  Scrunchies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">
                  Bows
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">
                  New Arrivals
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Customer Care</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">
                  Care Instructions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-rose-600 transition-colors">
                  Returns & Exchanges
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © 2024 Belle Bows. All rights reserved.
            </p>
            <div className="flex items-center mt-4 sm:mt-0">
              <span className="text-gray-600 text-sm mr-2">Made with</span>
              <Heart className="h-4 w-4 text-rose-600" />
              <span className="text-gray-600 text-sm ml-2">in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
