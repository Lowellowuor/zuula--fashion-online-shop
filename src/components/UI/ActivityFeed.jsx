import React, { useState } from 'react';
import '../../styles/Admin.css';

const ActivityFeed = ({ activities }) => {
  const [filter, setFilter] = useState('all');
  
  // Filter activities based on selection
  const filteredActivities = filter === 'all' 
    ? activities 
    : activities.filter(activity => activity.type === filter);

  // Get activity icon based on type
  const getActivityIcon = (type) => {
    switch(type) {
      case 'user': return '👥';
      case 'listing': return '👗';
      case 'transaction': return '💰';
      case 'verification': return '✅';
      case 'alert': return '⚠️';
      default: return '📋';
    }
  };

  // Get activity type label
  const getActivityTypeLabel = (type) => {
    switch(type) {
      case 'user': return 'User Activity';
      case 'listing': return 'Listing Update';
      case 'transaction': return 'Transaction';
      case 'verification': return 'Verification';
      case 'alert': return 'Alert';
      default: return 'General';
    }
  };

  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h2>Recent Activity</h2>
        <div className="activity-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'user' ? 'active' : ''}`}
            onClick={() => setFilter('user')}
          >
            Users
          </button>
          <button 
            className={`filter-btn ${filter === 'listing' ? 'active' : ''}`}
            onClick={() => setFilter('listing')}
          >
            Listings
          </button>
        </div>
      </div>

      <div className="activity-list">
        {filteredActivities.length > 0 ? (
          filteredActivities.map((activity, index) => (
            <div key={index} className="activity-item">
              <div className="activity-icon" data-type={activity.type}>
                {getActivityIcon(activity.type)}
              </div>
              
              <div className="activity-content">
                <div className="activity-details">
                  <p className="activity-description">{activity.description}</p>
                  <div className="activity-meta">
                    <span className="activity-type">{getActivityTypeLabel(activity.type)}</span>
                    <span className="activity-time">{activity.time}</span>
                  </div>
                </div>
                
                <div className="activity-actions">
                  <button className="btn-view">View Details</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-state">
            <div className="empty-icon">📋</div>
            <p>No activities found</p>
            <small>Try selecting a different filter</small>
          </div>
        )}
      </div>

      <div className="activity-footer">
        <button className="btn-view-all">
          View All Activities
          <span className="icon-arrow">→</span>
        </button>
      </div>
    </div>
  );
};

// Default props in case none are passed
ActivityFeed.defaultProps = {
  activities: [
    { 
      type: 'user', 
      description: 'New user Sarah K. registered as a Closet Owner', 
      time: '2 hours ago' 
    },
    { 
      type: 'listing', 
      description: 'Evening Gown listing was added by Sarah K.', 
      time: '3 hours ago' 
    },
    { 
      type: 'verification', 
      description: 'James M. verification completed successfully', 
      time: '5 hours ago' 
    },
    { 
      type: 'transaction', 
      description: 'Transaction #4567 completed successfully', 
      time: 'Yesterday' 
    },
    { 
      type: 'alert', 
      description: 'Listing #234 reported for review', 
      time: '2 days ago' 
    }
  ]
};

export default ActivityFeed;