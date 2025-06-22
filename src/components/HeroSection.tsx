
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight">
              Elegant Hair
              <span className="text-rose-600 block">Accessories</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl">
              Discover our carefully curated collection of premium scrunchies and bows. 
              Each piece is crafted with love to add a touch of elegance to your everyday style.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-rose-600 text-white px-8 py-4 rounded-full font-medium hover:bg-rose-700 transition-colors flex items-center justify-center gap-2 group">
                Shop Collection
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-rose-600 text-rose-600 px-8 py-4 rounded-full font-medium hover:bg-rose-600 hover:text-white transition-colors">
                View Lookbook
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square bg-white rounded-full shadow-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=500&h=500&fit=crop&crop=center"
                alt="Beautiful hair accessories"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-rose-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-200 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-rose-100 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-r from-purple-100 to-transparent opacity-30"></div>
    </div>
  );
};

export default HeroSection;
