
# Minimuze E-commerce Setup Guide

## Complete Setup Instructions for Supabase + Vercel Deployment

### 1. Supabase Setup

#### A. Create Supabase Project
1. Go to [supabase.com](https://supabase.com) and create account
2. Click "New Project"
3. Choose organization, name your project
4. Set a strong database password
5. Select region closest to your users
6. Wait for project creation (2-3 minutes)

#### B. Get Environment Variables
1. Go to Project Settings → API
2. Copy these values:
   - Project URL (VITE_SUPABASE_URL)
   - Anon/Public Key (VITE_SUPABASE_ANON_KEY)

#### C. Create Database Tables
Go to SQL Editor in Supabase and run:

```sql
-- Create orders table
CREATE TABLE orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  customer_address TEXT NOT NULL,
  customer_city TEXT NOT NULL,
  customer_pincode TEXT NOT NULL,
  order_items JSONB NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL,
  payment_screenshot_url TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'verified', 'confirmed', 'shipped', 'delivered', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create storage bucket for payment screenshots
INSERT INTO storage.buckets (id, name, public) VALUES ('payment-screenshots', 'payment-screenshots', true);

-- Set up Row Level Security (RLS)
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Allow public inserts for new orders
CREATE POLICY "Allow public insert orders" ON orders FOR INSERT WITH CHECK (true);

-- Allow authenticated users to view all orders (for admin)
CREATE POLICY "Allow authenticated select orders" ON orders FOR SELECT USING (auth.role() = 'authenticated');

-- Allow authenticated users to update orders (for admin)
CREATE POLICY "Allow authenticated update orders" ON orders FOR UPDATE USING (auth.role() = 'authenticated');

-- Storage policies for payment screenshots
CREATE POLICY "Allow public upload" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'payment-screenshots');
CREATE POLICY "Allow public view" ON storage.objects FOR SELECT USING (bucket_id = 'payment-screenshots');
```

### 2. Vercel Deployment Setup

#### A. Connect GitHub Repository
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and login
3. Click "New Project"
4. Import your GitHub repository

#### B. Configure Environment Variables
In Vercel Project Settings → Environment Variables, add:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

#### C. Deploy
1. Click "Deploy" 
2. Vercel will automatically build and deploy
3. Your app will be live at `https://your-project-name.vercel.app`

### 3. Admin Panel Setup

#### A. Create Admin User in Supabase
Go to Authentication → Users → Create User:
- Email: admin@minimuze.com
- Password: (create strong password)
- Email Confirm: Skip (for testing)

#### B. Admin Panel Access
- Frontend: Access via `/admin` route with authentication
- Standalone: Use the separate admin panel in `src/admin-app/`

### 4. Testing the Complete Flow

#### A. Customer Flow
1. Browse products → Add to cart → Checkout
2. Fill customer details
3. Upload payment screenshot
4. Submit order
5. Receive confirmation

#### B. Admin Flow
1. Login to admin panel
2. View pending orders
3. Verify payment screenshots
4. Update order status
5. Track order fulfillment

### 5. Production Checklist

#### Security
- [ ] Enable RLS on all tables
- [ ] Set up proper authentication
- [ ] Configure CORS settings
- [ ] Use environment variables for secrets

#### Performance
- [ ] Enable caching on Vercel
- [ ] Optimize images
- [ ] Set up CDN for assets
- [ ] Monitor database performance

#### Monitoring
- [ ] Set up error tracking (Sentry)
- [ ] Monitor performance (Vercel Analytics)
- [ ] Set up uptime monitoring
- [ ] Configure log alerts

### 6. Optional Enhancements

#### Email Notifications
- Set up Supabase Edge Functions for email notifications
- Configure SMTP settings
- Send order confirmations and status updates

#### Payment Integration
- Integrate with Razorpay/Stripe for automated payments
- Replace manual QR code with payment gateway
- Set up webhook handling

#### Advanced Admin Features
- Order analytics and reporting
- Inventory management
- Customer management
- Automated status updates

## Support

For issues with setup:
1. Check Supabase logs for database errors
2. Check Vercel deployment logs for build issues
3. Use browser developer tools for frontend debugging
4. Contact support if needed

Your e-commerce platform is now ready for production! 🚀
```
