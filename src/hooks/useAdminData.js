import { useState, useEffect } from 'react';

export const useAdminData = () => {
  const [stats, setStats] = useState({
    totalUsers: 1243,
    userGrowth: 12,
    activeListings: 567,
    listingGrowth: 8,
    totalTransactions: 892,
    transactionGrowth: 15,
    revenue: 12560000,
    revenueGrowth: 18
  });

  const [recentActivities] = useState([
    { 
      icon: '👗', 
      description: 'New listing "Evening Gown" added by Sarah K.', 
      time: '2 hours ago' 
    },
    { 
      icon: '✅', 
      description: 'James M. verification completed', 
      time: '5 hours ago' 
    },
    { 
      icon: '💰', 
      description: 'Transaction #4567 completed successfully', 
      time: 'Yesterday' 
    },
    { 
      icon: '⚠️', 
      description: 'Listing #234 reported for review', 
      time: '2 days ago' 
    }
  ]);

  // In a real app, you would fetch this data from an API
  useEffect(() => {
    // Simulate data fetching
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        totalUsers: prev.totalUsers + Math.floor(Math.random() * 5),
        activeListings: prev.activeListings + Math.floor(Math.random() * 3)
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return { stats, recentActivities };
};