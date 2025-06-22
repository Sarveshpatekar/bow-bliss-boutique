
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Camera, Upload, QrCode } from 'lucide-react';

interface CheckoutFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
}

interface CheckoutFormProps {
  cartTotal: number;
  onSubmit: (data: CheckoutFormData & { paymentScreenshot?: File }) => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ cartTotal, onSubmit }) => {
  const [paymentScreenshot, setPaymentScreenshot] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');

  const form = useForm<CheckoutFormData>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      pincode: ''
    }
  });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPaymentScreenshot(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = (data: CheckoutFormData) => {
    onSubmit({ ...data, paymentScreenshot: paymentScreenshot || undefined });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Complete Your Order
        </h2>
        <p className="text-gray-600">
          Fill in your details and complete the payment to place your order
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Customer Details Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-900">
              Delivery Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter your full address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input placeholder="City" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="pincode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pincode</FormLabel>
                        <FormControl>
                          <Input placeholder="Pincode" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Payment Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-900">
              Payment Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Order Total */}
            <div className="bg-rose-50 p-4 rounded-lg">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total Amount:</span>
                <span className="text-rose-600">₹{cartTotal}</span>
              </div>
            </div>

            {/* QR Code Section */}
            <div className="text-center space-y-4">
              <div className="bg-white p-6 rounded-lg border-2 border-dashed border-gray-300 inline-block">
                <QrCode className="h-32 w-32 mx-auto text-gray-400 mb-4" />
                <p className="text-sm text-gray-600">
                  Scan QR code to pay ₹{cartTotal}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  UPI ID: minimuze@paytm
                </p>
              </div>
            </div>

            {/* Payment Screenshot Upload */}
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Upload Payment Screenshot
              </label>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="payment-screenshot"
                />
                <label 
                  htmlFor="payment-screenshot"
                  className="cursor-pointer flex flex-col items-center space-y-2"
                >
                  {previewUrl ? (
                    <img 
                      src={previewUrl} 
                      alt="Payment screenshot"
                      className="h-32 w-32 object-cover rounded-lg"
                    />
                  ) : (
                    <>
                      <Camera className="h-12 w-12 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        Click to upload payment screenshot
                      </span>
                    </>
                  )}
                </label>
              </div>

              {paymentScreenshot && (
                <p className="text-sm text-green-600 flex items-center gap-2">
                  <Upload className="h-4 w-4" />
                  {paymentScreenshot.name} uploaded successfully
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button 
              onClick={form.handleSubmit(handleSubmit)}
              className="w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-semibold py-3 rounded-lg"
              disabled={!paymentScreenshot}
            >
              Place Order
            </Button>

            <p className="text-xs text-gray-500 text-center">
              Your order will be confirmed after payment verification
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CheckoutForm;
