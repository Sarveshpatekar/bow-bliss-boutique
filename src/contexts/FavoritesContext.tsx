
import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface FavoritesState {
  favoriteItems: string[];
}

type FavoritesAction = 
  | { type: 'TOGGLE_FAVORITE'; payload: string };

const FavoritesContext = createContext<{
  state: FavoritesState;
  dispatch: React.Dispatch<FavoritesAction>;
} | undefined>(undefined);

const favoritesReducer = (state: FavoritesState, action: FavoritesAction): FavoritesState => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const productId = action.payload;
      const isFavorite = state.favoriteItems.includes(productId);
      
      return {
        ...state,
        favoriteItems: isFavorite
          ? state.favoriteItems.filter(id => id !== productId)
          : [...state.favoriteItems, productId]
      };
    default:
      return state;
  }
};

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(favoritesReducer, {
    favoriteItems: []
  });

  return (
    <FavoritesContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
