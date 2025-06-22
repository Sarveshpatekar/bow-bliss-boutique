
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  // Sample product data with multiple images for carousel
  const featuredProducts = [
    {
      id: '1',
      name: 'Silk Scrunchie Set - Blush Collection',
      price: 299,
      originalPrice: 399,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&crop=center',
      images: [
        'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1544376664-80b17f09d399?w=400&h=400&fit=crop&crop=center'
      ],
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
      images: [
        'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1595341595072-4c86c722451b?w=400&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1596207628958-b6a7bdcd0e38?w=400&h=400&fit=crop&crop=center'
      ],
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
      images: [
        'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop&crop=center'
      ],
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
      images: [
        'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=400&h=400&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center'
      ],
      category: 'bow' as const,
      colors: ['#FFB347', '#FF69B4', '#98FB98', '#DDA0DD'],
      isNew: true,
      isFavorite: false,
      size: 'Large'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Featured Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked favorites from Minimuze that our customers love. Each piece combines style, 
            comfort, and quality for the perfect accessory.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link 
            to="/all-products"
            className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-rose-700 hover:to-pink-700 transition-all duration-300 inline-block shadow-lg hover:shadow-xl hover:scale-105"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
