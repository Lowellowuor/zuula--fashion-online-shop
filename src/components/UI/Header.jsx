import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/Header.css';


const Header = ({ 
  title, 
  showDateFilter = true, 
  showExportButton = true,
  additionalActions = null,
  userName = "Admin User",
  userRole = "Administrator",
  notificationCount = 3
}) => {
  const [timeRange, setTimeRange] = useState('30days');
  const location = useLocation();
  
  // Determine page title based on route if not provided
  const getPageTitle = () => {
    if (title) return title;
    
    switch(location.pathname) {
      case '/analytics':
        return 'Analytics Dashboard';
      case '/dashboard':
      default:
        return 'Dashboard Overview';
    }
  };

  return (
    <div className="dashboard-header">
      <div className="header-content">
        <div className="header-title">
          <h1>{getPageTitle()}</h1>
          <p>Welcome back! Here's what's happening with your store today.</p>
        </div>
        
        <div className="header-actions">
          {showDateFilter && (
            <div className="date-filter">
              <i className="fas fa-calendar-alt"></i>
              <select 
                value={timeRange} 
                onChange={(e) => setTimeRange(e.target.value)}
              >
                <option value="7days">Last 7 days</option>
                <option value="30days">Last 30 days</option>
                <option value="90days">Last 90 days</option>
                <option value="custom">Custom Range</option>
              </select>
            </div>
          )}
          
          {showExportButton && (
            <button className="btn-report">
              <i className="fas fa-download"></i>
              <span>Export Report</span>
            </button>
          )}
          
          {additionalActions}
          
          <div className="user-profile">
            <div className="notification-bell">
              <i className="fas fa-bell"></i>
              {notificationCount > 0 && (
                <span className="notification-count">{notificationCount}</span>
              )}
            </div>
            <div className="user-avatar">
              <img src="/api/placeholder/40/40" alt="User" />
            </div>
            <div className="user-info">
              <span className="user-name">{userName}</span>
              <span className="user-role">{userRole}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;