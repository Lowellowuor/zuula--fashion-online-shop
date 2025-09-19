import React from 'react';
import '../../styles/Admin.css';
const QuickActions = () => {
  const actions = [
    {
      id: 1,
      title: 'Verify Users',
      description: 'Review new user verification requests',
      icon: '✅',
      color: '#2E7D5B',
      path: '/admin/verifications'
    },
    {
      id: 2,
      title: 'Manage Listings',
      description: 'Approve or remove clothing listings',
      icon: '👗',
      color: '#FF6F61',
      path: '/admin/listings'
    },
    {
      id: 3,
      title: 'View Transactions',
      description: 'Monitor recent rental transactions',
      icon: '💰',
      color: '#FFD166',
      path: '/admin/transactions'
    },
    {
      id: 4,
      title: 'Generate Report',
      description: 'Create performance analytics report',
      icon: '📊',
      color: '#9C27B0',
      path: '/admin/reports'
    },
    {
      id: 5,
      title: 'Send Notification',
      description: 'Send message to all users',
      icon: '✉️',
      color: '#2196F3',
      path: '/admin/notifications'
    },
    {
      id: 6,
      title: 'Manage Categories',
      description: 'Add or edit clothing categories',
      icon: '📁',
      color: '#607D8B',
      path: '/admin/categories'
    }
  ];

  const handleActionClick = (path) => {
    // In a real app, you would navigate to the path
    console.log(`Navigating to: ${path}`);
    // For demo purposes, we'll show an alert
    alert(`Action clicked! Would navigate to: ${path}`);
  };

  return (
    <div className="quick-actions">
      <div className="quick-actions-header">
        <h2>Quick Actions</h2>
        <p>Frequently used admin tasks</p>
      </div>

      <div className="actions-grid">
        {actions.map(action => (
          <div 
            key={action.id} 
            className="action-card"
            onClick={() => handleActionClick(action.path)}
            style={{ '--accent-color': action.color }}
          >
            <div className="action-icon" style={{ backgroundColor: `${action.color}15` }}>
              {action.icon}
            </div>
            <div className="action-content">
              <h3>{action.title}</h3>
              <p>{action.description}</p>
            </div>
            <div className="action-arrow">
              <span>→</span>
            </div>
          </div>
        ))}
      </div>

      <div className="quick-actions-footer">
        <button className="btn-customize">
          Customize Quick Actions
        </button>
      </div>
    </div>
  );
};

export default QuickActions;