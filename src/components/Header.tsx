
import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state, dispatch } = useCart();

  const openCart = () => {
    dispatch({ type: 'OPEN_CART' });
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-serif text-rose-600 font-bold">
              Belle Bows
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
              Home
            </Link>
            <Link to="/scrunchies" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
              Scrunchies
            </Link>
            <Link to="/bows" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
              Bows
            </Link>
            <Link to="/all-products" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
              All Products
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-rose-600 transition-colors font-medium">
              About
            </Link>
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-700 hover:text-rose-600 transition-colors">
              <Heart className="h-6 w-6" />
            </button>
            <button 
              onClick={openCart}
              className="relative p-2 text-gray-700 hover:text-rose-600 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {state.items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.items.length}
                </span>
              )}
            </button>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-rose-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="py-4 space-y-2">
              <Link
                to="/"
                className="block px-4 py-2 text-gray-700 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/scrunchies"
                className="block px-4 py-2 text-gray-700 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Scrunchies
              </Link>
              <Link
                to="/bows"
                className="block px-4 py-2 text-gray-700 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Bows
              </Link>
              <Link
                to="/all-products"
                className="block px-4 py-2 text-gray-700 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                All Products
              </Link>
              <Link
                to="/about"
                className="block px-4 py-2 text-gray-700 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
