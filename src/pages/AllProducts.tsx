import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import ProductFilters from '../components/ProductFilters';
import { supabase } from '../lib/supabase';

const AllProducts = () => {
  const [supabaseProducts, setSupabaseProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Your static hardcoded products
  const localProducts = [
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
      id: 'b3',
      name: 'Satin Ribbon Bow - Elegant White',
      price: 179,
      image: 'https://images.unsplash.com/photo-1595341595072-4c86c722451b?w=400&h=400&fit=crop&crop=center',
      category: 'bow' as const,
      colors: ['#FFFFFF', '#F8F8FF', '#FFFAF0'],
      isNew: false,
      isFavorite: false,
      size: 'Small'
    }
  ];

  // Fetch Supabase products
  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Supabase fetch error:', error.message);
      } else {
        const mapped = data.map((item) => ({
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
        setSupabaseProducts(mapped);
      }
    };

    fetchProducts();
  }, []);

  const allProducts = [...supabaseProducts, ...localProducts];

  // ✅ Automatically apply full product list to filteredProducts on first load
  useEffect(() => {
    setFilteredProducts(allProducts);
  }, [supabaseProducts]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-4">
            All Products
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our complete collection of beautiful hair accessories. 
            From elegant scrunchies to adorable bows, find your perfect style.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <ProductFilters 
              products={allProducts}
              onFilterChange={setFilteredProducts}
            />
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                {(filteredProducts.length || allProducts.length)} products found
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {(filteredProducts.length > 0 ? filteredProducts : allProducts).map((product) => (
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

export default AllProducts;
