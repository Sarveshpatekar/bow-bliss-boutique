
const SettingsTab = () => {
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
};
