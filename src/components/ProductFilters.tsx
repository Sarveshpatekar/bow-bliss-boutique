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

    // NOTE: Category filter removed

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

    // NOTE: Sort filter removed

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

      {/* Removed Category Filter */}

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

      {/* Removed Sort Filter */}
    </div>
  );
};

export default ProductFilters;
