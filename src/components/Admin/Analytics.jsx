import React, { useState, useEffect } from 'react';
import StatsCard from '../UI/StatsCard';
import ActivityFeed from '../UI/ActivityFeed';
import QuickActions from '../UI/QuickActions';
import { useAdminData } from '../../hooks/useAdminData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import '../../styles/Analytics.css';

const Analytics = () => {
  const { stats, recentActivities } = useAdminData();
  const [isLoading, setIsLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('30days');
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for charts
  const [analyticsData, setAnalyticsData] = useState({
    rentalTrends: [
      { name: 'Jan', rentals: 45, revenue: 1200000 },
      { name: 'Feb', rentals: 52, revenue: 1450000 },
      { name: 'Mar', rentals: 48, revenue: 1350000 },
      { name: 'Apr', rentals: 78, revenue: 2100000 },
      { name: 'May', rentals: 65, revenue: 1850000 },
      { name: 'Jun', rentals: 90, revenue: 2500000 }
    ],
    categoryData: [
      { name: 'Wedding', value: 45 },
      { name: 'Party', value: 30 },
      { name: 'Formal', value: 15 },
      { name: 'Casual', value: 10 }
    ],
    userDemographics: [
      { name: '18-24', users: 120 },
      { name: '25-34', users: 450 },
      { name: '35-44', users: 300 },
      { name: '45+', users: 150 }
    ],
    topItems: [
      { name: 'Red Evening Gown', rentals: 28, revenue: 560000 },
      { name: 'Designer Handbag', rentals: 25, revenue: 375000 },
      { name: 'Silk Blouse', rentals: 22, revenue: 330000 },
      { name: 'Suit Rental', rentals: 19, revenue: 475000 },
      { name: 'Traditional Dress', rentals: 17, revenue: 425000 }
    ]
  });

  const COLORS = ['#2E7D5B', '#FF6F61', '#FFD166', '#9C27B0', '#2196F3'];

  useEffect(() => {
    // Simulate data loading
    if (stats && recentActivities) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [stats, recentActivities]);

  if (isLoading) {
    return (
      <div className="analytics-loading">
        <div className="loading-spinner"></div>
        <p>Loading analytics data...</p>
      </div>
    );
  }

  return (
    <div className="analytics">
      <div className="analytics-header">
        <h1>Analytics Dashboard</h1>
        <div className="header-actions">
          <div className="tabs">
            <button 
              className={activeTab === 'overview' ? 'tab active' : 'tab'}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={activeTab === 'users' ? 'tab active' : 'tab'}
              onClick={() => setActiveTab('users')}
            >
              Users
            </button>
            <button 
              className={activeTab === 'revenue' ? 'tab active' : 'tab'}
              onClick={() => setActiveTab('revenue')}
            >
              Revenue
            </button>
            <button 
              className={activeTab === 'items' ? 'tab active' : 'tab'}
              onClick={() => setActiveTab('items')}
            >
              Items
            </button>
          </div>
          <div className="filter-group">
            <div className="date-filter">
              <select value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
                <option value="7days">Last 7 days</option>
                <option value="30days">Last 30 days</option>
                <option value="90days">Last 90 days</option>
              </select>
            </div>
            <button className="btn-report">
              <i className="fas fa-download"></i>
              Export Report
            </button>
          </div>
        </div>
      </div>
      
      <div className="stats-grid">
        <StatsCard 
          title="Total Users" 
          value={stats.totalUsers} 
          change={stats.userGrowth} 
          icon="users" 
          color="#2E7D5B"
        />
        <StatsCard 
          title="Active Listings" 
          value={stats.activeListings} 
          change={stats.listingGrowth} 
          icon="tshirt"
          color="#FF6F61"
        />
        <StatsCard 
          title="Transactions" 
          value={stats.totalTransactions} 
          change={stats.transactionGrowth} 
          icon="credit-card"
          color="#FFD166"
        />
        <StatsCard 
          title="Revenue" 
          value={`UGX ${stats.revenue.toLocaleString()}`} 
          change={stats.revenueGrowth} 
          icon="money-bill-wave"
          color="#9C27B0"
        />
      </div>
      
      <div className="charts-section">
        <div className="chart-card full-width">
          <h2>Rental Trends & Revenue</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={analyticsData.rentalTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip 
                formatter={(value, name) => {
                  if (name === 'revenue') return [`UGX ${value.toLocaleString()}`, 'Revenue'];
                  return [value, 'Rentals'];
                }}
              />
              <Legend />
              <Bar yAxisId="left" dataKey="rentals" fill="#2E7D5B" name="Rentals" />
              <Bar yAxisId="right" dataKey="revenue" fill="#FFD166" name="Revenue" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="chart-card">
          <h2>Rental Categories</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={analyticsData.categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {analyticsData.categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="chart-card">
          <h2>User Demographics</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={analyticsData.userDemographics}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#2196F3" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="analytics-content">
        <div className="content-col main-content">
          <div className="data-table-card">
            <h2>Top Performing Items</h2>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>Rentals</th>
                    <th>Revenue</th>
                    <th>Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {analyticsData.topItems.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.rentals}</td>
                      <td>UGX {item.revenue.toLocaleString()}</td>
                      <td>
                        <div className="rating">
                          <span className="stars">★★★★☆</span>
                          <span className="rating-value">4.5</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="metrics-card">
            <h2>Performance Metrics</h2>
            <div className="metrics-grid">
              <div className="metric">
                <span className="metric-value">78%</span>
                <span className="metric-label">Booking Rate</span>
              </div>
              <div className="metric">
                <span className="metric-value">4.8</span>
                <span className="metric-label">Avg. Rating</span>
              </div>
              <div className="metric">
                <span className="metric-value">24h</span>
                <span className="metric-label">Avg. Response</span>
              </div>
              <div className="metric">
                <span className="metric-value">2.3%</span>
                <span className="metric-label">Cancellation Rate</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="content-col sidebar">
          <QuickActions />
          
          <ActivityFeed activities={recentActivities} />
          
          <div className="upcoming-events">
            <h2>Upcoming Events</h2>
            <div className="event-item">
              <div className="event-date">
                <span className="event-day">15</span>
                <span className="event-month">SEP</span>
              </div>
              <div className="event-details">
                <h3>Kampala Fashion Week</h3>
                <p>Expected high rental demand</p>
              </div>
            </div>
            <div className="event-item">
              <div className="event-date">
                <span className="event-day">22</span>
                <span className="event-month">SEP</span>
              </div>
              <div className="event-details">
                <h3>Wedding Season Peak</h3>
                <p>Prepare inventory</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;