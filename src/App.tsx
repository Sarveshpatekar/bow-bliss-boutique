
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import ErrorBoundary from "./components/ErrorBoundary";
import Index from "./pages/Index";
import About from "./pages/About";
import Scrunchies from "./pages/Scrunchies";
import Bows from "./pages/Bows";
import AllProducts from "./pages/AllProducts";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import NotFound from "./pages/NotFound";
import CartSidebar from "./components/CartSidebar";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      staleTime: 5 * 60 * 1000,
    },
  },
});

console.log('App component loading...');

const App = () => {
  console.log('App component rendering...');
  
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <FavoritesProvider>
            <CartProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <div className="min-h-screen bg-white">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/scrunchies" element={<Scrunchies />} />
                    <Route path="/bows" element={<Bows />} />
                    <Route path="/all-products" element={<AllProducts />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/order-success" element={<OrderSuccess />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                  <CartSidebar />
                </div>
              </BrowserRouter>
            </CartProvider>
          </FavoritesProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
