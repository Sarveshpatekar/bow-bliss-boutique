import React, { useEffect, useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { supabase } from '../../lib/supabase';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

const ResponsiveGridLayout = WidthProvider(Responsive);

const DashboardTab = () => {
  const [orders, setOrders] = useState([]);
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data, error } = await supabase.from('orders').select('*');
      if (error) return console.error(error);
      setOrders(data);

      const rev = data.reduce((s, o) => s + o.total_amount, 0);
      const totalO = data.length;
      const customers = new Set(data.map(o => o.customer_email)).size;
      const avgOrder = totalO ? Math.round(rev / totalO) : 0;

      const byDate = {};
      data.forEach(o => {
        const d = new Date(o.created_at).toLocaleDateString();
        byDate[d] = (byDate[d] || 0) + o.total_amount;
      });
      const daily = Object.entries(byDate).map(([name, value]) => ({ name, value }));

      setAnalytics({ rev, totalO, customers, avgOrder, daily });
    };
    fetchOrders();
  }, []);

  if (!analytics) return <p className="text-center text-gray-500">Loading dashboard...</p>;

  const layout = [
    { i: 'stats', x: 0, y: 0, w: 6, h: 2 },
    { i: 'line', x: 0, y: 2, w: 4, h: 4 },
    { i: 'pie', x: 4, y: 2, w: 2, h: 4 },
  ];

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={{ lg: layout }}
      breakpoints={{ lg: 1200 }}
      cols={{ lg: 6 }}
      rowHeight={80}
      width={1200}
    >
      <div key="stats" className="space-x-6 flex">
        <StatCard title="Total Revenue" value={`₹${analytics.rev.toLocaleString()}`} />
        <StatCard title="Total Orders" value={analytics.totalO} />
        <StatCard title="Customers" value={analytics.customers} />
        <StatCard title="Avg Order" value={`₹${analytics.avgOrder}`} />
      </div>

      <div key="line" className="bg-white rounded-lg shadow p-4">
        <h3 className="font-semibold mb-2">Daily Revenue</h3>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={analytics.daily}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div key="pie" className="bg-white rounded-lg shadow p-4">
        <h3 className="font-semibold mb-2">Order Share (by Date)</h3>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={analytics.daily} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
              {analytics.daily.map((_, idx) => (
                <Cell fill={COLORS[idx % COLORS.length]} key={idx} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </ResponsiveGridLayout>
  );
};

// ✅ Converted this to JS
const StatCard = ({ title, value }) => (
  <div className="bg-white rounded-lg shadow p-4 flex-1">
    <p className="text-sm text-gray-500">{title}</p>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

export default DashboardTab;
