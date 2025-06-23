
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CheckoutForm from '../components/CheckoutForm';
import { useCart } from '../contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

interface CheckoutFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
  paymentScreenshot?: File;
}

const Checkout = () => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOrderSubmit = async (data: CheckoutFormData) => {
    setIsSubmitting(true);
    try {
      // TODO: Replace with actual Supabase integration
      console.log('Order data:', {
        customerInfo: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          address: data.address,
          city: data.city,
          pincode: data.pincode
        },
        orderItems: state.items,
        total: state.total,
        paymentScreenshot: data.paymentScreenshot
      });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast({
        title: "Order Placed Successfully!",
        description: "Your order has been submitted and is pending verification.",
      });

      dispatch({ type: 'CLEAR_CART' });
      navigate('/order-success');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to place order. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-2xl mx-auto py-16 px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">Add some items to your cart before checking out.</p>
          <button
            onClick={() => navigate('/all-products')}
            className="bg-rose-600 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <CheckoutForm
        cartTotal={state.total}
        onSubmit={handleOrderSubmit}
      />
      <Footer />
    </div>
  );
};

export default Checkout;
