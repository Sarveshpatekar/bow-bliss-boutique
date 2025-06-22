
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import ProductFilters from '../components/ProductFilters';

const Bows = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  // Sample bow products data
  const bowProducts = [
    {
      id: 'b1',
      name: 'Velvet Hair Bow - Royal Blue',
      price: 199,
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop&crop=center',
      category: 'bow' as const,
      colors: ['#4169E1', '#191970', '#6495ED'],
      isNew: false,
      isFavorite: true,
      size: 'Medium'
    },
    {
      id: 'b2',
      name: 'Floral Print Bow Collection',
      price: 349,
      originalPrice: 449,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop&crop=center',
      category: 'bow' as const,
      colors: ['#FFB347', '#FF69B4', '#98FB98', '#DDA0DD'],
      isNew: true,
      isFavorite: false,
      size: 'Large'
    },
    {
      id: 'b3',
      name: 'Satin Ribbon Bow - Elegant White',
      price: 179,
      image: 'https://images.unsplash.com/photo-1595341595072-4c86c722451b?w=400&h=400&fit=crop&crop=center',
      category: 'bow' as const,
      colors: ['#FFFFFF', '#F8F8FF', '#FFFAF0'],
      isNew: false,
      isFavorite: false,
      size: 'Small'
    },
    {
      id: 'b4',
      name: 'Lace Detail Bow - Romantic Pink',
      price: 229,
      image: 'https://images.unsplash.com/photo-1596207628958-b6a7bdcd0e38?w=400&h=400&fit=crop&crop=center',
      category: 'bow' as const,
      colors: ['#FFB6C1', '#FFC0CB', '#DDA0DD'],
      isNew: true,
      isFavorite: true,
      size: 'Medium'
    },
    {
      id: 'b5',
      name: 'Vintage Style Bow - Burgundy',
      price: 259,
      originalPrice: 319,
      image: 'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=400&h=400&fit=crop&crop=center',
      category: 'bow' as const,
      colors: ['#800020', '#8B0000', '#A0522D'],
      isNew: false,
      isFavorite: false,
      size: 'Large'
    },
    {
      id: 'b6',
      name: 'Pearl Accent Bow - Champagne',
      price: 299,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center',
      category: 'bow' as const,
      colors: ['#F7E7CE', '#DDD6C7', '#E8DCC6'],
      isNew: true,
      isFavorite: false,
      size: 'Medium'
    }
  ];

  const handleToggleFavorite = (productId: string) => {
    console.log('Toggle favorite:', productId);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-4">
            Bows Collection
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Embrace your feminine elegance with our exquisite bow collection. 
            Each bow is crafted with love to add that perfect touch of grace to your look.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <ProductFilters 
              products={bowProducts}
              onFilterChange={setFilteredProducts}
            />
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                {(filteredProducts.length || bowProducts.length)} products found
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(filteredProducts.length > 0 ? filteredProducts : bowProducts).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onToggleFavorite={handleToggleFavorite}
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

export default Bows;
