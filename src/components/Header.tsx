
import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useFavorites } from '../contexts/FavoritesContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state, dispatch } = useCart();
  const { state: favoritesState } = useFavorites();

  const openCart = () => {
    dispatch({ type: 'OPEN_CART' });
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <h1 className="text-2xl font-serif text-transparent bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text font-bold group-hover:from-rose-700 group-hover:to-pink-700 transition-all duration-300">
              Minimuze
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-rose-600 transition-colors font-medium relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/scrunchies" className="text-gray-700 hover:text-rose-600 transition-colors font-medium relative group">
              Scrunchies
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/bows" className="text-gray-700 hover:text-rose-600 transition-colors font-medium relative group">
              Bows
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/all-products" className="text-gray-700 hover:text-rose-600 transition-colors font-medium relative group">
              All Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-rose-600 transition-colors font-medium relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-3">
            <button className="relative p-2.5 text-gray-700 hover:text-rose-600 transition-all duration-300 hover:bg-rose-50 rounded-full group">
              <Heart className="h-6 w-6 group-hover:scale-110 transition-transform" />
              {favoritesState.favoriteItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold shadow-lg">
                  {favoritesState.favoriteItems.length}
                </span>
              )}
            </button>
            <button 
              onClick={openCart}
              className="relative p-2.5 text-gray-700 hover:text-rose-600 transition-all duration-300 hover:bg-rose-50 rounded-full group"
            >
              <ShoppingCart className="h-6 w-6 group-hover:scale-110 transition-transform" />
              {state.items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold shadow-lg animate-pulse">
                  {state.items.length}
                </span>
              )}
            </button>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2.5 text-gray-700 hover:text-rose-600 transition-all duration-300 hover:bg-rose-50 rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-rose-100 rounded-b-lg">
            <div className="py-4 space-y-1">
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
