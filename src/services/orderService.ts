
import { supabase } from '../lib/supabase';
import type { Order } from '../lib/supabase';

export const createOrder = async (orderData: {
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  customer_address: string;
  customer_city: string;
  customer_pincode: string;
  order_items: any[];
  total_amount: number;
  payment_screenshot?: File;
}) => {
  try {
    let payment_screenshot_url = null;

    // Upload payment screenshot if provided
    if (orderData.payment_screenshot) {
      const fileExt = orderData.payment_screenshot.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      
      const { error: uploadError } = await supabase.storage
        .from('payment-screenshots')
        .upload(fileName, orderData.payment_screenshot);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('payment-screenshots')
        .getPublicUrl(fileName);

      payment_screenshot_url = publicUrl;
    }

    // Create order in database
    const { data, error } = await supabase
      .from('orders')
      .insert([
        {
          customer_name: orderData.customer_name,
          customer_email: orderData.customer_email,
          customer_phone: orderData.customer_phone,
          customer_address: orderData.customer_address,
          customer_city: orderData.customer_city,
          customer_pincode: orderData.customer_pincode,
          order_items: orderData.order_items,
          total_amount: orderData.total_amount,
          payment_screenshot_url,
          status: 'pending'
        }
      ])
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

export const getOrders = async (): Promise<Order[]> => {
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
};

export const updateOrderStatus = async (orderId: string, status: Order['status']) => {
  const { data, error } = await supabase
    .from('orders')
    .update({ status, updated_at: new Date().toISOString() })
    .eq('id', orderId)
    .select()
    .single();

  if (error) throw error;
  return data;
};
