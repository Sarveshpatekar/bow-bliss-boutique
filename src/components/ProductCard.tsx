
import React from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useFavorites } from '../contexts/FavoritesContext';
import ProductImageCarousel from './ProductImageCarousel';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: 'scrunchie' | 'bow';
  colors: string[];
  isNew?: boolean;
  isFavorite?: boolean;
  size?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useCart();
  const { state: favoritesState, dispatch: favoritesDispatch } = useFavorites();
  
  const isFavorite = favoritesState.favoriteItems.includes(product.id);

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  const handleToggleFavorite = () => {
    favoritesDispatch({ type: 'TOGGLE_FAVORITE', payload: product.id });
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  // Use multiple images if available, otherwise fallback to single image
  const productImages = product.images && product.images.length > 0 
    ? product.images 
    : [product.image];

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-rose-200">
      {/* Product Image Carousel */}
      <div className="relative">
        <ProductImageCarousel images={productImages} productName={product.name} />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
          {product.isNew && (
            <span className="bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
              New
            </span>
          )}
          {product.originalPrice && (
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
              -{discountPercentage}%
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={handleToggleFavorite}
          className="absolute top-3 right-3 p-2.5 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 shadow-lg z-10"
        >
          <Heart 
            className={`h-5 w-5 transition-colors duration-200 ${
              isFavorite 
                ? 'fill-rose-500 text-rose-500' 
                : 'text-gray-400 hover:text-rose-500'
            }`} 
          />
        </button>

        {/* Quick Add to Cart */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-rose-600 to-pink-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 hover:from-rose-700 hover:to-pink-700 shadow-lg hover:shadow-xl hover:scale-105 z-10"
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </button>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-lg group-hover:text-rose-600 transition-colors">
          {product.name}
        </h3>
        <span className="inline-block mb-2 text-xs font-medium text-rose-600 bg-rose-50 px-2 py-1 rounded-full capitalize">
          {product.category}
        </span>

        
        {/* Colors */}
        <div className="flex gap-1.5 mb-3">
          {product.colors.slice(0, 4).map((color, index) => (
            <div
              key={index}
              className="w-5 h-5 rounded-full border-2 border-white shadow-md ring-1 ring-gray-200 hover:scale-110 transition-transform cursor-pointer"
              style={{ backgroundColor: color }}
            />
          ))}
          {product.colors.length > 4 && (
            <span className="text-xs text-gray-500 ml-2 font-medium">
              +{product.colors.length - 4} more
            </span>
          )}
        </div>

        {/* Size & Rating */}
        <div className="flex items-center justify-between mb-3">
          {product.size && (
            <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full font-medium">
              {product.size}
            </span>
          )}
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
            <span className="text-xs text-gray-600 font-medium">4.8</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="font-bold text-xl text-gray-900">
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
