
import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'scrunchie' | 'bow';
  colors: string[];
  isNew?: boolean;
  isFavorite?: boolean;
  size?: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onToggleFavorite?: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onToggleFavorite 
}) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-rose-600 text-white text-xs px-2 py-1 rounded-full font-medium">
              New
            </span>
          )}
          {product.originalPrice && (
            <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full font-medium">
              Sale
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={() => onToggleFavorite?.(product.id)}
          className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
        >
          <Heart 
            className={`h-4 w-4 ${product.isFavorite ? 'fill-rose-600 text-rose-600' : 'text-gray-600'}`} 
          />
        </button>

        {/* Quick Add to Cart */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-rose-600 text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 hover:bg-rose-700"
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-1 line-clamp-2">
          {product.name}
        </h3>
        
        {/* Colors */}
        <div className="flex gap-1 mb-2">
          {product.colors.slice(0, 4).map((color, index) => (
            <div
              key={index}
              className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
              style={{ backgroundColor: color }}
            />
          ))}
          {product.colors.length > 4 && (
            <span className="text-xs text-gray-500 ml-1">
              +{product.colors.length - 4}
            </span>
          )}
        </div>

        {/* Size */}
        {product.size && (
          <p className="text-xs text-gray-500 mb-2">Size: {product.size}</p>
        )}

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg text-gray-900">
            ₹{product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ₹{product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
