
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, Clock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const OrderSuccess = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-2xl mx-auto py-16 px-4 text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
        
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">
          Order Placed Successfully!
        </h1>
        
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. Your order has been received and is being processed.
        </p>

        <div className="bg-rose-50 rounded-lg p-6 mb-8">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Clock className="h-5 w-5 text-rose-600" />
              <span className="text-gray-700">Order Status: Pending Verification</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Package className="h-5 w-5 text-rose-600" />
              <span className="text-gray-700">Estimated Processing: 1-2 business days</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">What happens next?</h3>
          <div className="text-left space-y-2 max-w-md mx-auto">
            <p className="text-gray-600">✓ We'll verify your payment screenshot</p>
            <p className="text-gray-600">✓ Your order will be confirmed</p>
            <p className="text-gray-600">✓ We'll prepare your items for shipping</p>
            <p className="text-gray-600">✓ You'll receive tracking information</p>
          </div>
        </div>

        <div className="mt-8 space-x-4">
          <Link
            to="/all-products"
            className="inline-block bg-rose-600 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition-colors"
          >
            Continue Shopping
          </Link>
          <Link
            to="/"
            className="inline-block border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderSuccess;
