import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';

const AnalyticsTab = () => {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      const { data: orders, error } = await supabase.from('orders').select('*');

      if (error) {
        console.error('Error fetching analytics data:', error.message);
        setAnalytics(null);
        setLoading(false);
        return;
      }

      const totalRevenue = orders.reduce((sum, o) => sum + o.total_amount, 0);
      const totalOrders = orders.length;
      const customersMap = new Map();
      orders.forEach((o) => {
        if (o.customer_email) customersMap.set(o.customer_email, true);
      });

      const totalCustomers = customersMap.size;
      const averageOrderValue = totalOrders > 0 ? Math.round(totalRevenue / totalOrders) : 0;

      setAnalytics({
        overview: {
          totalRevenue,
          totalOrders,
          totalCustomers,
          averageOrderValue,
        },
      });

      setLoading(false);
    };

    fetchAnalytics();
  }, []);

  if (loading || !analytics) {
    return <p className="text-center text-gray-500">Loading analytics...</p>;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-rose-500">
          <div className="text-3xl font-bold text-gray-900">₹{analytics.overview.totalRevenue.toLocaleString()}</div>
          <p className="text-sm text-gray-600 mt-1">Total Revenue</p>
          <div className="text-sm text-green-600 mt-2">↗ +12% from last month</div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
          <div className="text-3xl font-bold text-gray-900">{analytics.overview.totalOrders}</div>
          <p className="text-sm text-gray-600 mt-1">Total Orders</p>
          <div className="text-sm text-green-600 mt-2">↗ +8% from last month</div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
          <div className="text-3xl font-bold text-gray-900">{analytics.overview.totalCustomers}</div>
          <p className="text-sm text-gray-600 mt-1">Total Customers</p>
          <div className="text-sm text-green-600 mt-2">↗ +15% from last month</div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border-l-4 border-purple-500">
          <div className="text-3xl font-bold text-gray-900">₹{analytics.overview.averageOrderValue}</div>
          <p className="text-sm text-gray-600 mt-1">Avg. Order Value</p>
          <div className="text-sm text-green-600 mt-2">↗ +5% from last month</div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsTab;
