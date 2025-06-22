
import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: 'scrunchie' | 'bow';
  colors: string[];
  size?: string;
  isNew?: boolean;
}

interface ProductFiltersProps {
  products: Product[];
  onFilterChange: (filteredProducts: Product[]) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({ products, onFilterChange }) => {
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    size: '',
    sortBy: ''
  });

  const [expandedSections, setExpandedSections] = useState({
    category: true,
    price: true,
    size: true,
    sort: true
  });

  useEffect(() => {
    let filtered = [...products];

    // Category filter
    if (filters.category) {
      filtered = filtered.filter(product => product.category === filters.category);
    }

    // Price range filter
    if (filters.priceRange) {
      switch (filters.priceRange) {
        case 'under-200':
          filtered = filtered.filter(product => product.price < 200);
          break;
        case '200-300':
          filtered = filtered.filter(product => product.price >= 200 && product.price <= 300);
          break;
        case 'over-300':
          filtered = filtered.filter(product => product.price > 300);
          break;
      }
    }

    // Size filter
    if (filters.size) {
      filtered = filtered.filter(product => product.size === filters.size);
    }

    // Sort filter
    if (filters.sortBy) {
      switch (filters.sortBy) {
        case 'price-low':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'newest':
          filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
          break;
        case 'name':
          filtered.sort((a, b) => a.name.localeCompare(b.name));
          break;
      }
    }

    onFilterChange(filtered);
  }, [filters, products, onFilterChange]);

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType as keyof typeof prev] === value ? '' : value
    }));
  };

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      category: '',
      priceRange: '',
      size: '',
      sortBy: ''
    });
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        <button
          onClick={clearAllFilters}
          className="text-sm text-rose-600 hover:text-rose-700 font-medium"
        >
          Clear All
        </button>
      </div>

      {/* Category Filter */}
      <div className="mb-6 border-b border-gray-100 pb-4">
        <button
          onClick={() => toggleSection('category')}
          className="flex justify-between items-center w-full text-left"
        >
          <h4 className="font-medium text-gray-900">Category</h4>
          <ChevronDown 
            className={`h-4 w-4 transition-transform ${expandedSections.category ? 'rotate-180' : ''}`} 
          />
        </button>
        {expandedSections.category && (
          <div className="mt-3 space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="category"
                checked={filters.category === 'scrunchie'}
                onChange={() => handleFilterChange('category', 'scrunchie')}
                className="text-rose-600 focus:ring-rose-600"
              />
              <span className="ml-2 text-sm text-gray-700">Scrunchies</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="category"
                checked={filters.category === 'bow'}
                onChange={() => handleFilterChange('category', 'bow')}
                className="text-rose-600 focus:ring-rose-600"
              />
              <span className="ml-2 text-sm text-gray-700">Bows</span>
            </label>
          </div>
        )}
      </div>

      {/* Price Range Filter */}
      <div className="mb-6 border-b border-gray-100 pb-4">
        <button
          onClick={() => toggleSection('price')}
          className="flex justify-between items-center w-full text-left"
        >
          <h4 className="font-medium text-gray-900">Price Range</h4>
          <ChevronDown 
            className={`h-4 w-4 transition-transform ${expandedSections.price ? 'rotate-180' : ''}`} 
          />
        </button>
        {expandedSections.price && (
          <div className="mt-3 space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="priceRange"
                checked={filters.priceRange === 'under-200'}
                onChange={() => handleFilterChange('priceRange', 'under-200')}
                className="text-rose-600 focus:ring-rose-600"
              />
              <span className="ml-2 text-sm text-gray-700">Under ₹200</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="priceRange"
                checked={filters.priceRange === '200-300'}
                onChange={() => handleFilterChange('priceRange', '200-300')}
                className="text-rose-600 focus:ring-rose-600"
              />
              <span className="ml-2 text-sm text-gray-700">₹200 - ₹300</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="priceRange"
                checked={filters.priceRange === 'over-300'}
                onChange={() => handleFilterChange('priceRange', 'over-300')}
                className="text-rose-600 focus:ring-rose-600"
              />
              <span className="ml-2 text-sm text-gray-700">Over ₹300</span>
            </label>
          </div>
        )}
      </div>

      {/* Size Filter */}
      <div className="mb-6 border-b border-gray-100 pb-4">
        <button
          onClick={() => toggleSection('size')}
          className="flex justify-between items-center w-full text-left"
        >
          <h4 className="font-medium text-gray-900">Size</h4>
          <ChevronDown 
            className={`h-4 w-4 transition-transform ${expandedSections.size ? 'rotate-180' : ''}`} 
          />
        </button>
        {expandedSections.size && (
          <div className="mt-3 space-y-2">
            {['Mini', 'Small', 'Regular', 'Medium', 'Large'].map(size => (
              <label key={size} className="flex items-center">
                <input
                  type="radio"
                  name="size"
                  checked={filters.size === size}
                  onChange={() => handleFilterChange('size', size)}
                  className="text-rose-600 focus:ring-rose-600"
                />
                <span className="ml-2 text-sm text-gray-700">{size}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Sort Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('sort')}
          className="flex justify-between items-center w-full text-left"
        >
          <h4 className="font-medium text-gray-900">Sort By</h4>
          <ChevronDown 
            className={`h-4 w-4 transition-transform ${expandedSections.sort ? 'rotate-180' : ''}`} 
          />
        </button>
        {expandedSections.sort && (
          <div className="mt-3 space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="sortBy"
                checked={filters.sortBy === 'newest'}
                onChange={() => handleFilterChange('sortBy', 'newest')}
                className="text-rose-600 focus:ring-rose-600"
              />
              <span className="ml-2 text-sm text-gray-700">Newest First</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="sortBy"
                checked={filters.sortBy === 'price-low'}
                onChange={() => handleFilterChange('sortBy', 'price-low')}
                className="text-rose-600 focus:ring-rose-600"
              />
              <span className="ml-2 text-sm text-gray-700">Price: Low to High</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="sortBy"
                checked={filters.sortBy === 'price-high'}
                onChange={() => handleFilterChange('sortBy', 'price-high')}
                className="text-rose-600 focus:ring-rose-600"
              />
              <span className="ml-2 text-sm text-gray-700">Price: High to Low</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="sortBy"
                checked={filters.sortBy === 'name'}
                onChange={() => handleFilterChange('sortBy', 'name')}
                className="text-rose-600 focus:ring-rose-600"
              />
              <span className="ml-2 text-sm text-gray-700">Name A-Z</span>
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductFilters;
