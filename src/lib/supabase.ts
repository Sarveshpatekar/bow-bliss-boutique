
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qgeetcuboxcmfdgimoat.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnZWV0Y3Vib3hjbWZkZ2ltb2F0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3MDE4MzIsImV4cCI6MjA2NjI3NzgzMn0._qw-Xc0VdVvw6Dg-s-3-hqSB1vds64qJ4Ttmfw4nRr8';

console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Key exists:', !!supabaseAnonKey);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface Order {
  id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  customer_address: string;
  customer_city: string;
  customer_pincode: string;
  order_items: any[];
  total_amount: number;
  payment_screenshot_url?: string;
  status: 'pending' | 'verified' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  created_at: string;
  updated_at: string;
}

export interface OrderItem {
  id: string;
  product_id: string;
  product_name: string;
  product_price: number;
  quantity: number;
  product_image: string;
}
