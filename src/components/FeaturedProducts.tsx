
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  // Sample product data
  const featuredProducts = [
    {
      id: '1',
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
      id: '2',
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
      id: '3',
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
      id: '4',
      name: 'Floral Print Bow Collection',
      price: 349,
      originalPrice: 449,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop&crop=center',
      category: 'bow' as const,
      colors: ['#FFB347', '#FF69B4', '#98FB98', '#DDA0DD'],
      isNew: true,
      isFavorite: false,
      size: 'Large'
    }
  ];

  const handleToggleFavorite = (productId: string) => {
    console.log('Toggle favorite:', productId);
    // TODO: Implement favorites functionality
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
            Featured Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked favorites that our customers love. Each piece combines style, 
            comfort, and quality for the perfect accessory.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            to="/all-products"
            className="bg-rose-600 text-white px-8 py-3 rounded-full font-medium hover:bg-rose-700 transition-colors inline-block"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
