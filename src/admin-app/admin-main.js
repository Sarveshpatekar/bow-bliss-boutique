
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
