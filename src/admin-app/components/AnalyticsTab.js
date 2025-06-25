
const AnalyticsTab = ({ analyticsData }) => {
  return React.createElement('div', { className: 'space-y-6' }, [
    React.createElement('h2', { className: 'text-2xl font-bold text-gray-900', key: 'header' }, 'Analytics Dashboard'),
    // Overview Cards
    React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-4 gap-6', key: 'overview' }, [
      React.createElement('div', { className: 'bg-white rounded-lg shadow p-6 border-l-4 border-rose-500' }, [
        React.createElement('div', { className: 'text-3xl font-bold text-gray-900' }, `₹${analyticsData.overview.totalRevenue.toLocaleString()}`),
        React.createElement('p', { className: 'text-sm text-gray-600 mt-1' }, 'Total Revenue'),
        React.createElement('div', { className: 'text-sm text-green-600 mt-2' }, '↗ +12% from last month')
      ]),
      React.createElement('div', { className: 'bg-white rounded-lg shadow p-6 border-l-4 border-blue-500' }, [
        React.createElement('div', { className: 'text-3xl font-bold text-gray-900' }, analyticsData.overview.totalOrders),
        React.createElement('p', { className: 'text-sm text-gray-600 mt-1' }, 'Total Orders'),
        React.createElement('div', { className: 'text-sm text-green-600 mt-2' }, '↗ +8% from last month')
      ]),
      React.createElement('div', { className: 'bg-white rounded-lg shadow p-6 border-l-4 border-green-500' }, [
        React.createElement('div', { className: 'text-3xl font-bold text-gray-900' }, analyticsData.overview.totalCustomers),
        React.createElement('p', { className: 'text-sm text-gray-600 mt-1' }, 'Total Customers'),
        React.createElement('div', { className: 'text-sm text-green-600 mt-2' }, '↗ +15% from last month')
      ]),
      React.createElement('div', { className: 'bg-white rounded-lg shadow p-6 border-l-4 border-purple-500' }, [
        React.createElement('div', { className: 'text-3xl font-bold text-gray-900' }, `₹${analyticsData.overview.averageOrderValue}`),
        React.createElement('p', { className: 'text-sm text-gray-600 mt-1' }, 'Avg. Order Value'),
        React.createElement('div', { className: 'text-sm text-green-600 mt-2' }, '↗ +5% from last month')
      ])
    ]),
    // Charts Row
    React.createElement('div', { className: 'grid grid-cols-1 lg:grid-cols-2 gap-6', key: 'charts' }, [
      // Monthly Revenue Chart
      React.createElement('div', { className: 'bg-white rounded-lg shadow p-6' }, [
        React.createElement('h3', { className: 'text-lg font-semibold mb-4' }, 'Monthly Revenue Trend'),
        React.createElement('div', { className: 'h-64 flex items-end justify-between space-x-2' },
          analyticsData.monthlyData.map((data, index) =>
            React.createElement('div', { key: data.month, className: 'flex flex-col items-center flex-1' }, [
              React.createElement('div', { 
                className: 'bg-rose-500 rounded-t w-full mb-2',
                style: { height: `${(data.revenue / 5000) * 200}px` }
              }),
              React.createElement('div', { className: 'text-xs text-gray-600' }, data.month),
              React.createElement('div', { className: 'text-xs font-medium' }, `₹${data.revenue}`)
            ])
          )
        )
      ]),
      // Top Products
      React.createElement('div', { className: 'bg-white rounded-lg shadow p-6' }, [
        React.createElement('h3', { className: 'text-lg font-semibold mb-4' }, 'Top Selling Products'),
        React.createElement('div', { className: 'space-y-4' },
          analyticsData.topProducts.map((product, index) =>
            React.createElement('div', { key: product.name, className: 'flex items-center justify-between' }, [
              React.createElement('div', { className: 'flex items-center' }, [
                React.createElement('div', { className: `w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                  index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : 'bg-orange-500'
                }` }, index + 1),
                React.createElement('div', { className: 'ml-3' }, [
                  React.createElement('div', { className: 'text-sm font-medium' }, product.name),
                  React.createElement('div', { className: 'text-xs text-gray-500' }, `${product.sales} units sold`)
                ])
              ]),
              React.createElement('div', { className: 'text-sm font-semibold' }, `₹${product.revenue}`)
            ])
          )
        )
      ])
    ]),
    // Recent Activity
    React.createElement('div', { className: 'bg-white rounded-lg shadow p-6', key: 'activity' }, [
      React.createElement('h3', { className: 'text-lg font-semibold mb-4' }, 'Recent Activity'),
      React.createElement('div', { className: 'space-y-3' }, [
        React.createElement('div', { className: 'flex items-center text-sm' }, [
          React.createElement('div', { className: 'w-2 h-2 bg-green-500 rounded-full mr-3' }),
          React.createElement('span', { className: 'text-gray-600' }, 'New order #ORD-001 received from Sarah Johnson'),
          React.createElement('span', { className: 'text-gray-400 ml-auto' }, '2 hours ago')
        ]),
        React.createElement('div', { className: 'flex items-center text-sm' }, [
          React.createElement('div', { className: 'w-2 h-2 bg-blue-500 rounded-full mr-3' }),
          React.createElement('span', { className: 'text-gray-600' }, 'Payment verified for order #ORD-002'),
          React.createElement('span', { className: 'text-gray-400 ml-auto' }, '4 hours ago')
        ]),
        React.createElement('div', { className: 'flex items-center text-sm' }, [
          React.createElement('div', { className: 'w-2 h-2 bg-purple-500 rounded-full mr-3' }),
          React.createElement('span', { className: 'text-gray-600' }, 'New customer Emma Davis registered'),
          React.createElement('span', { className: 'text-gray-400 ml-auto' }, '6 hours ago')
        ])
      ])
    ])
  ]);
};
