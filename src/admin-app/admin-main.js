
// Standalone Admin Panel Application
const AdminApp = () => {
  const [activeTab, setActiveTab] = React.useState('products');

  const adminTabs = [
    { id: 'products', label: 'Product Management', icon: '📦' },
    { id: 'orders', label: 'Orders', icon: '🛍️' },
    { id: 'uploads', label: 'Payment Screenshots', icon: '📤' },
    { id: 'customers', label: 'Customers', icon: '👥' },
    { id: 'analytics', label: 'Analytics', icon: '📊' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  const sampleOrders = [
    {
      id: 'ORD-001',
      customer: 'Sarah Johnson',
      items: ['Silk Scrunchie Set - Blush', 'Velvet Hair Bow - Royal Blue'],
      total: 498,
      status: 'Payment Pending',
      date: '2024-01-15',
    },
    {
      id: 'ORD-002',
      customer: 'Emma Davis',
      items: ['Satin Scrunchie - Neutral Tones'],
      total: 249,
      status: 'Payment Verified',
      date: '2024-01-14',
    },
  ];

  const sampleProducts = [
    {
      id: 'PROD-001',
      name: 'Silk Scrunchie Set - Blush Collection',
      category: 'Scrunchie',
      price: 299,
      stock: 15,
      status: 'Active',
    },
    {
      id: 'PROD-002',
      name: 'Velvet Hair Bow - Royal Blue',
      category: 'Bow',
      price: 199,
      stock: 8,
      status: 'Active',
    },
  ];

  const sampleCustomers = [
    {
      id: 'CUST-001',
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      phone: '+91 98765 43210',
      orders: 3,
      totalSpent: 1247,
      lastOrder: '2024-01-15',
      status: 'Active'
    },
    {
      id: 'CUST-002',
      name: 'Emma Davis',
      email: 'emma.davis@email.com',
      phone: '+91 87654 32109',
      orders: 1,
      totalSpent: 249,
      lastOrder: '2024-01-14',
      status: 'Active'
    },
    {
      id: 'CUST-003',
      name: 'Priya Sharma',
      email: 'priya.s@email.com',
      phone: '+91 76543 21098',
      orders: 5,
      totalSpent: 2150,
      lastOrder: '2024-01-12',
      status: 'VIP'
    },
  ];

  const analyticsData = {
    overview: {
      totalRevenue: 15420,
      totalOrders: 47,
      totalCustomers: 32,
      averageOrderValue: 328
    },
    monthlyData: [
      { month: 'Jan', revenue: 3200, orders: 12 },
      { month: 'Feb', revenue: 4100, orders: 15 },
      { month: 'Mar', revenue: 3800, orders: 11 },
      { month: 'Apr', revenue: 4320, orders: 9 }
    ],
    topProducts: [
      { name: 'Silk Scrunchie Set', sales: 23, revenue: 6877 },
      { name: 'Velvet Hair Bow', sales: 18, revenue: 3582 },
      { name: 'Satin Hair Ties', sales: 15, revenue: 2985 }
    ]
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'products':
        return React.createElement('div', { className: 'space-y-6' }, [
          React.createElement('div', { className: 'flex justify-between items-center', key: 'header' }, [
            React.createElement('h2', { className: 'text-2xl font-bold text-gray-900' }, 'Product Management'),
            React.createElement('button', { 
              className: 'bg-rose-600 text-white px-4 py-2 rounded-md hover:bg-rose-700 transition-colors' 
            }, 'Add New Product')
          ]),
          React.createElement('div', { className: 'bg-white rounded-lg shadow overflow-hidden', key: 'table' }, [
            React.createElement('table', { className: 'min-w-full divide-y divide-gray-200' }, [
              React.createElement('thead', { className: 'bg-gray-50' }, [
                React.createElement('tr', {}, [
                  React.createElement('th', { className: 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider' }, 'Product'),
                  React.createElement('th', { className: 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider' }, 'Category'),
                  React.createElement('th', { className: 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider' }, 'Price'),
                  React.createElement('th', { className: 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider' }, 'Stock'),
                  React.createElement('th', { className: 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider' }, 'Status'),
                  React.createElement('th', { className: 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider' }, 'Actions'),
                ])
              ]),
              React.createElement('tbody', { className: 'bg-white divide-y divide-gray-200' },
                sampleProducts.map((product) =>
                  React.createElement('tr', { key: product.id }, [
                    React.createElement('td', { className: 'px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900' }, product.name),
                    React.createElement('td', { className: 'px-6 py-4 whitespace-nowrap text-sm text-gray-500' }, product.category),
                    React.createElement('td', { className: 'px-6 py-4 whitespace-nowrap text-sm text-gray-500' }, `₹${product.price}`),
                    React.createElement('td', { className: 'px-6 py-4 whitespace-nowrap text-sm text-gray-500' }, product.stock),
                    React.createElement('td', { className: 'px-6 py-4 whitespace-nowrap' }, [
                      React.createElement('span', { className: 'inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800' }, product.status)
                    ]),
                    React.createElement('td', { className: 'px-6 py-4 whitespace-nowrap text-sm font-medium' }, [
                      React.createElement('button', { className: 'text-rose-600 hover:text-rose-900 mr-4' }, 'Edit'),
                      React.createElement('button', { className: 'text-red-600 hover:text-red-900' }, 'Delete')
                    ])
                  ])
                )
              )
            ])
          ])
        ]);

      case 'orders':
        return React.createElement('div', { className: 'space-y-6' }, [
          React.createElement('h2', { className: 'text-2xl font-bold text-gray-900' }, 'Order Management'),
          React.createElement('div', { className: 'bg-white rounded-lg shadow overflow-hidden' }, [
            React.createElement('table', { className: 'min-w-full divide-y divide-gray-200' }, [
              React.createElement('thead', { className: 'bg-gray-50' }, [
                React.createElement('tr', {}, [
                  React.createElement('th', { className: 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider' }, 'Order ID'),
                  React.createElement('th', { className: 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider' }, 'Customer'),
                  React.createElement('th', { className: 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider' }, 'Items'),
                  React.createElement('th', { className: 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider' }, 'Total'),
                  React.createElement('th', { className: 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider' }, 'Status'),
                  React.createElement('th', { className: 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider' }, 'Date'),
                  React.createElement('th', { className: 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider' }, 'Actions'),
                ])
              ]),
              React.createElement('tbody', { className: 'bg-white divide-y divide-gray-200' },
                sampleOrders.map((order) =>
                  React.createElement('tr', { key: order.id }, [
                    React.createElement('td', { className: 'px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900' }, order.id),
                    React.createElement('td', { className: 'px-6 py-4 whitespace-nowrap text-sm text-gray-500' }, order.customer),
                    React.createElement('td', { className: 'px-6 py-4 text-sm text-gray-500' }, order.items.join(', ')),
                    React.createElement('td', { className: 'px-6 py-4 whitespace-nowrap text-sm text-gray-500' }, `₹${order.total}`),
                    React.createElement('td', { className: 'px-6 py-4 whitespace-nowrap' }, [
                      React.createElement('span', { 
                        className: `inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          order.status === 'Payment Verified' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }` 
                      }, order.status)
                    ]),
                    React.createElement('td', { className: 'px-6 py-4 whitespace-nowrap text-sm text-gray-500' }, order.date),
                    React.createElement('td', { className: 'px-6 py-4 whitespace-nowrap text-sm font-medium' }, [
                      React.createElement('button', { className: 'text-rose-600 hover:text-rose-900 mr-4' }, 'View Details'),
                      React.createElement('button', { className: 'text-blue-600 hover:text-blue-900' }, 'Update Status')
                    ])
                  ])
                )
              )
            ])
          ])
        ]);

      case 'uploads':
        return React.createElement('div', { className: 'space-y-6' }, [
          React.createElement('h2', { className: 'text-2xl font-bold text-gray-900' }, 'Payment Screenshot Verification'),
          React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' }, [
            React.createElement('div', { className: 'bg-white rounded-lg shadow p-6' }, [
              React.createElement('div', { className: 'border-2 border-dashed border-gray-300 rounded-lg p-8 text-center' }, [
                React.createElement('div', { className: 'text-4xl mb-4' }, '📤'),
                React.createElement('p', { className: 'text-gray-500' }, 'Order #ORD-001 Payment Screenshot'),
                React.createElement('p', { className: 'text-sm text-gray-400 mt-2' }, 'Awaiting verification'),
                React.createElement('div', { className: 'mt-4 space-x-2' }, [
                  React.createElement('button', { className: 'bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700' }, 'Approve'),
                  React.createElement('button', { className: 'bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700' }, 'Reject')
                ])
              ])
            ])
          ])
        ]);

      case 'customers':
        return React.createElement('div', { className: 'space-y-6' }, [
          React.createElement('div', { className: 'flex justify-between items-center', key: 'header' }, [
            React.createElement('h2', { className: 'text-2xl font-bold text-gray-900' }, 'Customer Management'),
            React.createElement('div', { className: 'flex space-x-3' }, [
              React.createElement('input', { 
                type: 'text',
                placeholder: 'Search customers...',
                className: 'px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500'
              }),
              React.createElement('button', { 
                className: 'bg-rose-600 text-white px-4 py-2 rounded-md hover:bg-rose-700 transition-colors'
              }, 'Export List')
            ])
          ]),
          // Customer Stats Cards
          React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-4 gap-6', key: 'stats' }, [
            React.createElement('div', { className: 'bg-white rounded-lg shadow p-6' }, [
              React.createElement('div', { className: 'text-2xl font-bold text-gray-900' }, sampleCustomers.length),
              React.createElement('p', { className: 'text-sm text-gray-600' }, 'Total Customers')
            ]),
            React.createElement('div', { className: 'bg-white rounded-lg shadow p-6' }, [
              React.createElement('div', { className: 'text-2xl font-bold text-gray-900' }, sampleCustomers.filter(c => c.status === 'VIP').length),
              React.createElement('p', { className: 'text-sm text-gray-600' }, 'VIP Customers')
            ]),
            React.createElement('div', { className: 'bg-white rounded-lg shadow p-6' }, [
              React.createElement('div', { className: 'text-2xl font-bold text-gray-900' }, '₹' + Math.round(sampleCustomers.reduce((sum, c) => sum + c.totalSpent, 0) / sampleCustomers.length)),
              React.createElement('p', { className: 'text-sm text-gray-600' }, 'Avg. Customer Value')
            ]),
            React.createElement('div', { className: 'bg-white rounded-lg shadow p-6' }, [
              React.createElement('div', { className: 'text-2xl font-bold text-gray-900' }, Math.round(sampleCustomers.reduce((sum, c) => sum + c.orders, 0) / sampleCustomers.length)),
              React.createElement('p', { className: 'text-sm text-gray-600' }, 'Avg. Orders per Customer')
            ])
          ]),
          // Customer Table
          React.createElement('div', { className: 'bg-white rounded-lg shadow overflow-hidden', key: 'table' }, [
            React.createElement('table', { className: 'min-w-full divide-y divide-gray-200' }, [
              React.createElement('thead', { className: 'bg-gray-50' }, [
                React.createElement('tr', {}, [
                  React.createElement('th', { className: 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider' }, 'Customer'),
                  React.createElement('th', { className: 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider' }, 'Contact'),
                  React.createElement('th', { className: 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider' }, 'Orders'),
                  React.createElement('th', { className: 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider' }, 'Total Spent'),
                  React.createElement('th', { className: 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider' }, 'Last Order'),
                  React.createElement('th', { className: 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider' }, 'Status'),
                  React.createElement('th', { className: 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider' }, 'Actions'),
                ])
              ]),
              React.createElement('tbody', { className: 'bg-white divide-y divide-gray-200' },
                sampleCustomers.map((customer) =>
                  React.createElement('tr', { key: customer.id }, [
                    React.createElement('td', { className: 'px-6 py-4 whitespace-nowrap' }, [
                      React.createElement('div', { className: 'text-sm font-medium text-gray-900' }, customer.name),
                      React.createElement('div', { className: 'text-sm text-gray-500' }, customer.email)
                    ]),
                    React.createElement('td', { className: 'px-6 py-4 whitespace-nowrap text-sm text-gray-500' }, customer.phone),
                    React.createElement('td', { className: 'px-6 py-4 whitespace-nowrap text-sm text-gray-500' }, customer.orders),
                    React.createElement('td', { className: 'px-6 py-4 whitespace-nowrap text-sm text-gray-500' }, `₹${customer.totalSpent}`),
                    React.createElement('td', { className: 'px-6 py-4 whitespace-nowrap text-sm text-gray-500' }, customer.lastOrder),
                    React.createElement('td', { className: 'px-6 py-4 whitespace-nowrap' }, [
                      React.createElement('span', { 
                        className: `inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          customer.status === 'VIP' 
                            ? 'bg-purple-100 text-purple-800' 
                            : 'bg-green-100 text-green-800'
                        }` 
                      }, customer.status)
                    ]),
                    React.createElement('td', { className: 'px-6 py-4 whitespace-nowrap text-sm font-medium' }, [
                      React.createElement('button', { className: 'text-rose-600 hover:text-rose-900 mr-4' }, 'View Details'),
                      React.createElement('button', { className: 'text-blue-600 hover:text-blue-900' }, 'Send Message')
                    ])
                  ])
                )
              )
            ])
          ])
        ]);

      case 'analytics':
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

      case 'settings':
        return React.createElement('div', { className: 'space-y-6' }, [
          React.createElement('h2', { className: 'text-2xl font-bold text-gray-900', key: 'header' }, 'Settings'),
          React.createElement('div', { className: 'grid grid-cols-1 lg:grid-cols-2 gap-6', key: 'settings-grid' }, [
            // Store Settings
            React.createElement('div', { className: 'bg-white rounded-lg shadow p-6' }, [
              React.createElement('h3', { className: 'text-lg font-semibold mb-4' }, 'Store Settings'),
              React.createElement('div', { className: 'space-y-4' }, [
                React.createElement('div', {}, [
                  React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-1' }, 'Store Name'),
                  React.createElement('input', { 
                    type: 'text',
                    defaultValue: 'Minimuze',
                    className: 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500'
                  })
                ]),
                React.createElement('div', {}, [
                  React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-1' }, 'Store Description'),
                  React.createElement('textarea', { 
                    defaultValue: 'Premium hair accessories for the modern woman',
                    rows: 3,
                    className: 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500'
                  })
                ]),
                React.createElement('div', {}, [
                  React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-1' }, 'Contact Email'),
                  React.createElement('input', { 
                    type: 'email',
                    defaultValue: 'hello@minimuze.com',
                    className: 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500'
                  })
                ]),
                React.createElement('div', {}, [
                  React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-1' }, 'Phone Number'),
                  React.createElement('input', { 
                    type: 'tel',
                    defaultValue: '+91 98765 43210',
                    className: 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500'
                  })
                ])
              ])
            ]),
            // Payment Settings
            React.createElement('div', { className: 'bg-white rounded-lg shadow p-6' }, [
              React.createElement('h3', { className: 'text-lg font-semibold mb-4' }, 'Payment Settings'),
              React.createElement('div', { className: 'space-y-4' }, [
                React.createElement('div', {}, [
                  React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-1' }, 'UPI ID'),
                  React.createElement('input', { 
                    type: 'text',
                    defaultValue: 'minimuze@paytm',
                    className: 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500'
                  })
                ]),
                React.createElement('div', {}, [
                  React.createElement('label', { className: 'block text-sm font-medium text-gray-700 mb-1' }, 'Bank Account'),
                  React.createElement('input', { 
                    type: 'text',
                    defaultValue: 'XXXX-XXXX-XXXX-1234',
                    className: 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500'
                  })
                ]),
                React.createElement('div', { className: 'flex items-center' }, [
                  React.createElement('input', { 
                    type: 'checkbox',
                    id: 'auto-verify',
                    defaultChecked: false,
                    className: 'h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300 rounded'
                  }),
                  React.createElement('label', { htmlFor: 'auto-verify', className: 'ml-2 text-sm text-gray-700' }, 'Auto-verify payments')
                ])
              ])
            ]),
            // Notification Settings
            React.createElement('div', { className: 'bg-white rounded-lg shadow p-6' }, [
              React.createElement('h3', { className: 'text-lg font-semibold mb-4' }, 'Notification Settings'),
              React.createElement('div', { className: 'space-y-4' }, [
                React.createElement('div', { className: 'flex items-center justify-between' }, [
                  React.createElement('span', { className: 'text-sm text-gray-700' }, 'Email notifications for new orders'),
                  React.createElement('input', { 
                    type: 'checkbox',
                    defaultChecked: true,
                    className: 'h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300 rounded'
                  })
                ]),
                React.createElement('div', { className: 'flex items-center justify-between' }, [
                  React.createElement('span', { className: 'text-sm text-gray-700' }, 'SMS notifications for payments'),
                  React.createElement('input', { 
                    type: 'checkbox',
                    defaultChecked: true,
                    className: 'h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300 rounded'
                  })
                ]),
                React.createElement('div', { className: 'flex items-center justify-between' }, [
                  React.createElement('span', { className: 'text-sm text-gray-700' }, 'Weekly sales reports'),
                  React.createElement('input', { 
                    type: 'checkbox',
                    defaultChecked: false,
                    className: 'h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300 rounded'
                  })
                ])
              ])
            ]),
            // Security Settings
            React.createElement('div', { className: 'bg-white rounded-lg shadow p-6' }, [
              React.createElement('h3', { className: 'text-lg font-semibold mb-4' }, 'Security Settings'),
              React.createElement('div', { className: 'space-y-4' }, [
                React.createElement('button', { 
                  className: 'w-full bg-rose-600 text-white py-2 px-4 rounded-md hover:bg-rose-700 transition-colors'
                }, 'Change Password'),
                React.createElement('button', { 
                  className: 'w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors'
                }, 'Enable Two-Factor Authentication'),
                React.createElement('button', { 
                  className: 'w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors'
                }, 'Download Activity Log')
              ])
            ])
          ]),
          // Save Button
          React.createElement('div', { className: 'flex justify-end', key: 'save' }, [
            React.createElement('button', { 
              className: 'bg-rose-600 text-white px-6 py-2 rounded-md hover:bg-rose-700 transition-colors'
            }, 'Save All Changes')
          ])
        ]);

      default:
        return React.createElement('div', { className: 'text-center py-12' }, [
          React.createElement('h2', { className: 'text-2xl font-bold text-gray-900 mb-4' }, 'Coming Soon'),
          React.createElement('p', { className: 'text-gray-600' }, 'This section is under development.')
        ]);
    }
  };

  return React.createElement('div', { className: 'min-h-screen bg-gray-50 flex flex-col' }, [
    // Header
    React.createElement('header', { className: 'bg-white shadow-sm border-b', key: 'header' }, [
      React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' }, [
        React.createElement('div', { className: 'flex justify-between items-center h-16' }, [
          React.createElement('h1', { className: 'text-xl font-bold text-transparent bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text' }, 'Minimuze Admin Panel'),
          React.createElement('a', { 
            href: '/', 
            className: 'text-rose-600 hover:text-rose-700 font-medium'
          }, 'Back to Store')
        ])
      ])
    ]),
    
    React.createElement('div', { className: 'flex-1 flex', key: 'main' }, [
      // Sidebar
      React.createElement('div', { className: 'w-64 bg-white shadow-sm' }, [
        React.createElement('div', { className: 'p-6' }, [
          React.createElement('nav', { className: 'space-y-2' },
            adminTabs.map((tab) =>
              React.createElement('button', {
                key: tab.id,
                onClick: () => setActiveTab(tab.id),
                className: `w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === tab.id
                    ? 'bg-rose-100 text-rose-700'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`
              }, [
                React.createElement('span', { className: 'text-lg mr-3' }, tab.icon),
                tab.label
              ])
            )
          )
        ])
      ]),

      // Main Content
      React.createElement('div', { className: 'flex-1 p-8' }, renderTabContent())
    ])
  ]);
};

// Initialize the admin app
const container = document.getElementById('admin-root');
const root = ReactDOM.createRoot(container);

// Load React and ReactDOM from CDN
const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.onload = () => {
  const script2 = document.createElement('script');
  script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
  script2.onload = () => {
    const root = ReactDOM.createRoot(container);
    root.render(React.createElement(AdminApp));
  };
  document.head.appendChild(script2);
};
document.head.appendChild(script1);
