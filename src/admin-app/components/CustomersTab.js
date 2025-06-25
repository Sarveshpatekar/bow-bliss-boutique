
const CustomersTab = ({ sampleCustomers }) => {
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
};
