import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import ProductFilters from '../components/ProductFilters';
import { supabase } from '../lib/supabase';

const Bows = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [supabaseBows, setSupabaseBows] = useState([]);

  // Local hardcoded bow products
  const localBowProducts = [
    {
      id: 'b1',
      name: 'Velvet Hair Bow - Royal Blue',
      price: 199,
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop&crop=center',
      category: 'bow',
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
      category: 'bow',
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
      category: 'bow',
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
      category: 'bow',
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
      category: 'bow',
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
      category: 'bow',
      colors: ['#F7E7CE', '#DDD6C7', '#E8DCC6'],
      isNew: true,
      isFavorite: false,
      size: 'Medium'
    }
  ];

  // Fetch bows from Supabase
  useEffect(() => {
    const fetchBows = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('category', 'bow')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching bows from Supabase:', error.message);
      } else {
        const mapped = data.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image_url,
          images: [item.image_url],
          category: item.category,
          colors: item.colors ? item.colors.split(',') : [],
          size: item.size || '',
          isNew: true,
          isFavorite: false,
        }));
        setSupabaseBows(mapped);
      }
    };

    fetchBows();
  }, []);

  const allBowProducts = [...supabaseBows, ...localBowProducts];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Bows Collection
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Embrace your feminine elegance with our exquisite bow collection. 
            Each bow is crafted with love to add that perfect touch of grace to your look.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <div className="lg:w-1/4">
            <ProductFilters 
              products={allBowProducts}
              onFilterChange={setFilteredProducts}
            />
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                {(filteredProducts.length || allBowProducts.length)} products found
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {(filteredProducts.length > 0 ? filteredProducts : allBowProducts).map((product) => (
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

export default Bows;
