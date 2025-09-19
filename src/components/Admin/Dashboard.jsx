// src/components/Admin/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import StatsCard from '../UI/StatsCard';
import ActivityFeed from '../UI/ActivityFeed';
import QuickActions from '../UI/QuickActions';
import Header from '../UI/Header';
import Button from '../UI/Button';
import Sidebar from '../UI/Sidebar'; 
import { useAdminData } from '../../hooks/useAdminData';
import { Link } from "react-router-dom";
import '../../styles/Admin.css';

const Dashboard = () => {
  const { stats, recentActivities } = useAdminData();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (stats && recentActivities) {
      const timer = setTimeout(() => setIsLoading(false), 800);
      return () => clearTimeout(timer);
    }
  }, [stats, recentActivities]);

  if (isLoading) {
    return (
      <div className="dashboard-loading">
        <div className="loading-spinner"></div>
        <p>Loading dashboard data...</p>
      </div>
    );
  }

  return (
    <div className="admin-layout">
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main content */}
      <div className="admin-main">
        <Header
          title="Dashboard Overview"
          showDateFilter={true}
          showExportButton={true}
          additionalActions={
            <Button
              variant="outline-primary"
              size="small"
              icon={<i className="fas fa-cog"></i>}
              onClick={() => console.log('Settings clicked')}
            >
              Settings
            </Button>
          }
        />

        {/* Navigation shortcuts */}
        <div className="nav-buttons">
          <Link to="/listings">
            <Button variant="primary" size="medium" icon={<i className="fas fa-list"></i>}>
              Go to Listings
            </Button>
          </Link>
          <Link to="/analytics">
            <Button variant="secondary" size="medium" icon={<i className="fas fa-chart-bar"></i>}>
              Go to Analytics
            </Button>
          </Link>
        </div>

        {/* Stats cards */}
        <div className="stats-grid">
          <StatsCard title="Total Users" value={stats.totalUsers} change={stats.userGrowth} icon="users" color="#2E7D5B" />
          <StatsCard title="Active Listings" value={stats.activeListings} change={stats.listingGrowth} icon="tshirt" color="#FF6F61" />
          <StatsCard title="Transactions" value={stats.totalTransactions} change={stats.transactionGrowth} icon="credit-card" color="#FFD166" />
          <StatsCard title="Revenue" value={`UGX ${stats.revenue.toLocaleString()}`} change={stats.revenueGrowth} icon="money-bill-wave" color="#9C27B0" />
        </div>

        {/* Content area */}
        <div className="dashboard-content">
          {/* Left column */}
          <div className="content-col main-content">
            <ActivityFeed activities={recentActivities} />

            {/* Performance Metrics */}
            <div className="metrics-card">
              <div className="metrics-header">
                <h2>Performance Metrics</h2>
                <Button variant="light" size="small" icon={<i className="fas fa-info-circle"></i>}>
                  Info
                </Button>
              </div>
              <div className="metrics-grid">
                <div className="metric"><span className="metric-value">78%</span><span className="metric-label">Booking Rate</span></div>
                <div className="metric"><span className="metric-value">4.8</span><span className="metric-label">Avg. Rating</span></div>
                <div className="metric"><span className="metric-value">24h</span><span className="metric-label">Avg. Response</span></div>
                <div className="metric"><span className="metric-value">2.3%</span><span className="metric-label">Cancellation Rate</span></div>
              </div>
              <div className="metrics-footer">
                <Button variant="primary" size="small" fullWidth>
                  View Full Report
                </Button>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="content-col sidebar">
            <QuickActions />
            <div className="upcoming-events">
              <div className="events-header"><h2>Upcoming Events</h2></div>
              <div className="event-item">
                <div className="event-date"><span className="event-day">15</span><span className="event-month">SEP</span></div>
                <div className="event-details"><h3>Kampala Fashion Week</h3><p>Expected high rental demand</p></div>
              </div>
              <div className="event-item">
                <div className="event-date"><span className="event-day">22</span><span className="event-month">SEP</span></div>
                <div className="event-details"><h3>Wedding Season Peak</h3><p>Prepare inventory</p></div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Action Button */}
        <div className="floating-action">
          <Button variant="primary" size="large" icon={<i className="fas fa-plus"></i>}>
            Create New
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
