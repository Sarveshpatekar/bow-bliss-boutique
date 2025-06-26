import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';

const CustomersTab = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomers = async () => {
      const { data, error } = await supabase.from('orders').select('*');

      if (error) {
        console.error('Error fetching customers:', error.message);
      } else {
        // Group by unique customer_email
        const uniqueMap = new Map();
        data.forEach((order) => {
          if (!uniqueMap.has(order.customer_email)) {
            uniqueMap.set(order.customer_email, {
              id: order.id,
              name: order.customer_name,
              email: order.customer_email,
              phone: order.customer_phone,
              orders: 1,
              totalSpent: order.total_amount,
              lastOrder: new Date(order.created_at).toLocaleDateString(),
              status: 'Regular',
            });
          } else {
            const existing = uniqueMap.get(order.customer_email);
            existing.orders += 1;
            existing.totalSpent += order.total_amount;
            existing.lastOrder = new Date(order.created_at).toLocaleDateString();
            if (existing.totalSpent > 1000) {
              existing.status = 'VIP';
            }
          }
        });

        setCustomers(Array.from(uniqueMap.values()));
      }

      setLoading(false);
    };

    fetchCustomers();
  }, []);

  const handleExportCustomersCSV = () => {
    if (!customers.length) {
      alert('No customer data to export');
      return;
    }

    const headers = [
      'Name', 'Email', 'Phone', 'Orders', 'Total Spent', 'Last Order', 'Status'
    ];

    const rows = customers.map(c => [
      c.name,
      c.email,
      c.phone,
      c.orders,
      c.totalSpent,
      c.lastOrder,
      c.status
    ]);

    const csvContent = [headers, ...rows].map(e => e.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `customers-${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading customers...</p>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Customer Management</h2>
        <div className="flex space-x-3">
          <input
            type="text"
            placeholder="Search customers..."
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
          <button
            onClick={handleExportCustomersCSV}
            className="bg-rose-600 text-white px-4 py-2 rounded-md hover:bg-rose-700 transition-colors"
          >
            Export List
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-2xl font-bold text-gray-900">{customers.length}</div>
          <p className="text-sm text-gray-600">Total Customers</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-2xl font-bold text-gray-900">
            {customers.filter((c) => c.status === 'VIP').length}
          </div>
          <p className="text-sm text-gray-600">VIP Customers</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-2xl font-bold text-gray-900">
            ₹
            {Math.round(
              customers.reduce((sum, c) => sum + c.totalSpent, 0) / customers.length || 0
            )}
          </div>
          <p className="text-sm text-gray-600">Avg. Customer Value</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="text-2xl font-bold text-gray-900">
            {Math.round(
              customers.reduce((sum, c) => sum + c.orders, 0) / customers.length || 0
            )}
          </div>
          <p className="text-sm text-gray-600">Avg. Orders per Customer</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Orders</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Spent</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last Order</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {customers.map((customer) => (
              <tr key={customer.email}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                  <div className="text-sm text-gray-500">{customer.email}</div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{customer.phone}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{customer.orders}</td>
                <td className="px-6 py-4 text-sm text-gray-500">₹{customer.totalSpent}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{customer.lastOrder}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      customer.status === 'VIP'
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {customer.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-medium">
                  <button className="text-rose-600 hover:text-rose-900 mr-4">View Details</button>
                  <button className="text-blue-600 hover:text-blue-900">Send Message</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomersTab;
