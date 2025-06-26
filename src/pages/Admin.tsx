import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, ShoppingBag, Upload, Users, BarChart3 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { supabase, type Order } from '../lib/supabase';
import CustomersTab from '../admin-app/components/CustomersTab.jsx';
import AnalyticsTab from '../admin-app/components/AnalyticsTab.jsx';
import DashboardTab from '../admin-app/components/DashboardTab.jsx';

const Admin = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('orders');
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);

  const adminTabs = [
    { id: 'products', label: 'Product Management', icon: Package },
    { id: 'orders', label: 'Orders', icon: ShoppingBag },
    { id: 'uploads', label: 'Payment Screenshots', icon: Upload },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
  ];

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        navigate('/admin-login');
      }
    };
    checkSession();
  }, [navigate]);

  useEffect(() => {
    if (activeTab === 'orders' || activeTab === 'uploads') {
      const fetchOrders = async () => {
        setLoading(true);
        const { data, error } = await supabase
          .from('orders')
          .select('*')
          .order('created_at', { ascending: false });
        if (error) {
          console.error('Error fetching orders:', error.message);
        } else {
          setOrders(data || []);
        }
        setLoading(false);
      };
      fetchOrders();
    }
  }, [activeTab]);

  const handleApprove = async (orderId: string) => {
    const { error } = await supabase
      .from('orders')
      .update({ status: 'verified' })
      .eq('id', orderId);
    if (error) {
      alert('Approval failed');
    } else {
      setOrders(prev =>
        prev.map(o => (o.id === orderId ? { ...o, status: 'verified' } : o))
      );
      alert('Order Approved!');
    }
  };

  const handleReject = async (orderId: string) => {
    const { error } = await supabase
      .from('orders')
      .update({ status: 'cancelled' })
      .eq('id', orderId);
    if (error) {
      alert('Rejection failed');
    } else {
      setOrders(prev =>
        prev.map(o => (o.id === orderId ? { ...o, status: 'cancelled' } : o))
      );
      alert('Order Rejected!');
    }
  };

  const handleView = (order: Order) => {
    alert(`Order ID: ${order.id}\nCustomer: ${order.customer_name}\nTotal: ₹${order.total_amount}`);
  };

  const handleUpdateStatus = async (orderId: string) => {
    const { error } = await supabase
      .from('orders')
      .update({ status: 'confirmed' })
      .eq('id', orderId);
    if (error) {
      alert('Update failed');
    } else {
      setOrders(prev =>
        prev.map(o => (o.id === orderId ? { ...o, status: 'confirmed' } : o))
      );
      alert('Order status updated to confirmed.');
    }
  };

  const renderTabContent = () => {
    if (loading) {
      return <p className="text-center text-gray-500">Loading...</p>;
    }

    switch (activeTab) {
      case 'products':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Product Management</h2>
            <form
              className="bg-white p-6 rounded shadow-md space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);
                const imageFile = formData.get('image') as File;

                if (!imageFile || imageFile.size === 0) {
                  alert('Please select an image');
                  return;
                }

                const fileName = `${Date.now()}-${imageFile.name}`;

                const { error: uploadError } = await supabase
                  .storage
                  .from('product-images')
                  .upload(`public/${fileName}`, imageFile, {

                    cacheControl: '3600',
                    upsert: true
                  });

                if (uploadError) {
                  alert('Image upload failed: ' + uploadError.message);
                  return;
                }

                const imageUrl = supabase
                  .storage
                  .from('product-images')
                  .getPublicUrl(`public/${fileName}`).data.publicUrl;

                const newProduct = {
                  name: formData.get('name') as string,
                  category: formData.get('category') as string,
                  price: parseFloat(formData.get('price') as string),
                  colors: formData.get('colors') as string,
                  size: formData.get('size') as string,
                  image_url: imageUrl,
                };

                const { error } = await supabase.from('products').insert([newProduct]);
                if (error) {
                  alert('Error adding product: ' + error.message);
                } else {
                  alert('Product added successfully!');
                  form.reset();
                }
              }}
            >
              <div className="grid grid-cols-2 gap-4">
                <input name="name" placeholder="Product Name" required className="border p-2 rounded" />
                

               <select name="category" required className="border p-2 rounded">
                <option value="">Select Category</option>
                  <option value="scrunchie">Scrunchie</option>
                    <option value="bow">Bow</option>
                      </select>

                <input name="price" type="number" placeholder="Price" required className="border p-2 rounded" />
                <input name="colors" placeholder="Colors (comma separated)" className="border p-2 rounded" />
                <input name="size" placeholder="Size" className="border p-2 rounded" />
                <input name="image" type="file" accept="image/*" required className="border p-2 rounded" />
              </div>
              <button type="submit" className="mt-4 bg-rose-600 text-white px-4 py-2 rounded hover:bg-rose-700">
                Add Product
              </button>
            </form>
          </div>
        );

      case 'orders':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Order Management</h2>
            <div className="bg-white rounded-lg shadow overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Address</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Items</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {orders.map(order => (
                    <tr key={order.id}>
                      <td className="px-6 py-4 text-sm text-gray-900">{order.id}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{order.customer_name}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{order.customer_email}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{order.customer_phone}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {order.customer_address}, {order.customer_city} - {order.customer_pincode}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {order.order_items?.map(item => item.product_name).join(', ')}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">₹{order.total_amount}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          order.status === 'verified' ? 'bg-green-100 text-green-800' :
                          order.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {new Date(order.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-sm space-x-2">
                        <button onClick={() => handleView(order)} className="text-rose-600 hover:text-rose-900">View</button>
                        <button onClick={() => handleUpdateStatus(order.id)} className="text-blue-600 hover:text-blue-900">Update</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'uploads':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Payment Screenshot Verification</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {orders.filter(o => o.payment_screenshot_url).map(order => (
                <div key={order.id} className="bg-white rounded-lg shadow p-4">
                  <img
                    src={order.payment_screenshot_url}
                    alt={`Payment for ${order.id}`}
                    className="w-full h-64 object-contain border mb-4"
                  />
                  <p className="text-gray-700 font-medium mb-1">Order #{order.id}</p>
                  <p className="text-sm text-gray-500 mb-2">Status: {order.status}</p>
                  <div className="space-x-2">
                    <button
                      onClick={() => handleApprove(order.id)}
                      className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject(order.id)}
                      className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'customers':
        return <CustomersTab />;

      case 'analytics':
        return <AnalyticsTab />;

      case 'dashboard':
        return <DashboardTab />;

      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h2>
            <p className="text-gray-600">This section is under development.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="flex-1 flex">
        <div className="w-64 bg-white shadow-sm">
          <div className="p-6">
            <h1 className="text-xl font-bold text-gray-900 mb-6">Admin Panel</h1>
            <nav className="space-y-2">
              {adminTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeTab === tab.id
                      ? 'bg-rose-100 text-rose-700'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <tab.icon className="h-5 w-5 mr-3" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
        <div className="flex-1 p-8">{renderTabContent()}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
