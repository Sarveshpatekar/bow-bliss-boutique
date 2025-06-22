import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import ProductFilters from '../components/ProductFilters';

const Scrunchies = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  // Sample scrunchie products data
  const scrunchieProducts = [
    {
      id: 's1',
      name: 'Silk Scrunchie Set - Blush Collection',
      price: 299,
      originalPrice: 399,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&crop=center',
      category: 'scrunchie' as const,
      colors: ['#FFB6C1', '#FFC0CB', '#DDA0DD', '#F0E68C'],
      isNew: true,
      isFavorite: false,
      size: 'Regular'
    },
    {
      id: 's2',
      name: 'Satin Scrunchie - Neutral Tones',
      price: 249,
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop&crop=center',
      category: 'scrunchie' as const,
      colors: ['#F5F5DC', '#D2B48C', '#DEB887', '#BC8F8F'],
      isNew: false,
      isFavorite: false,
      size: 'Regular'
    },
    {
      id: 's3',
      name: 'Velvet Scrunchie Set - Jewel Tones',
      price: 349,
      originalPrice: 449,
      image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&h=400&fit=crop&crop=center',
      category: 'scrunchie' as const,
      colors: ['#8B0000', '#4B0082', '#008B8B', '#DAA520'],
      isNew: false,
      isFavorite: true,
      size: 'Large'
    },
    {
      id: 's4',
      name: 'Cotton Scrunchie - Pastel Dreams',
      price: 199,
      image: 'https://images.unsplash.com/photo-1544376664-80b17f09d399?w=400&h=400&fit=crop&crop=center',
      category: 'scrunchie' as const,
      colors: ['#E6E6FA', '#F0E68C', '#FFB6C1', '#98FB98'],
      isNew: true,
      isFavorite: false,
      size: 'Mini'
    },
    {
      id: 's5',
      name: 'Luxury Silk Scrunchie - Rose Gold',
      price: 399,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop&crop=center',
      category: 'scrunchie' as const,
      colors: ['#E8B4B8', '#D4AF37', '#F4C2C2'],
      isNew: false,
      isFavorite: false,
      size: 'Regular'
    },
    {
      id: 's6',
      name: 'Floral Print Scrunchie Collection',
      price: 279,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop&crop=center',
      category: 'scrunchie' as const,
      colors: ['#FFB347', '#FF69B4', '#98FB98', '#DDA0DD'],
      isNew: true,
      isFavorite: true,
      size: 'Regular'
    }
  ];

  const handleToggleFavorite = (productId: string) => {
    console.log('Toggle favorite:', productId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Scrunchies Collection
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our enchanting collection of premium scrunchies. From silky smooth textures 
            to adorable patterns, each piece is designed to make you feel absolutely divine.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <ProductFilters 
              products={scrunchieProducts}
              onFilterChange={setFilteredProducts}
            />
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                {(filteredProducts.length || scrunchieProducts.length)} products found
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {(filteredProducts.length > 0 ? filteredProducts : scrunchieProducts).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Scrunchies;
