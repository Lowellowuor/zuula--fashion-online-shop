import React, { useState, useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area,
} from "recharts";
import { 
  FaDownload, 
  FaFilter, 
  FaCalendarAlt, 
  FaMoneyBillWave, 
  FaSync, 
  FaExclamationTriangle, 
  FaCheckCircle, 
  FaClock, 
  FaArrowUp, 
  FaArrowDown,
  FaFileExport,
  FaChartBar,
  FaReceipt,
  FaWallet,
  FaPercentage,
  FaUsers,
  FaStar,
  FaTimes,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";

// Enhanced mock data
const earningsData = [
  { month: "Jan", earnings: 120000, bookings: 8, revenue: 150000, expenses: 30000 },
  { month: "Feb", earnings: 200000, bookings: 12, revenue: 240000, expenses: 40000 },
  { month: "Mar", earnings: 150000, bookings: 10, revenue: 180000, expenses: 30000 },
  { month: "Apr", earnings: 300000, bookings: 18, revenue: 360000, expenses: 60000 },
  { month: "May", earnings: 250000, bookings: 15, revenue: 300000, expenses: 50000 },
  { month: "Jun", earnings: 400000, bookings: 22, revenue: 480000, expenses: 80000 },
  { month: "Jul", earnings: 350000, bookings: 20, revenue: 420000, expenses: 70000 },
  { month: "Aug", earnings: 480000, bookings: 25, revenue: 576000, expenses: 96000 },
  { month: "Sep", earnings: 520000, bookings: 28, revenue: 624000, expenses: 104000 },
];

const transactions = [
  {
    id: 1,
    date: "2025-09-15",
    item: "Red Gown",
    buyer: "Sarah N.",
    status: "Completed",
    amount: 50000,
    commission: 5000,
    net: 45000,
    type: "rental",
    category: "Evening Gowns",
    duration: "3 days"
  },
  {
    id: 2,
    date: "2025-09-18",
    item: "Blue Suit",
    buyer: "John M.",
    status: "Pending",
    amount: 70000,
    commission: 7000,
    net: 63000,
    type: "rental",
    category: "Suits",
    duration: "2 days"
  },
  {
    id: 3,
    date: "2025-09-20",
    item: "Black Dress",
    buyer: "Linda A.",
    status: "Completed",
    amount: 100000,
    commission: 10000,
    net: 90000,
    type: "rental",
    category: "Cocktail Dresses",
    duration: "1 day"
  },
  {
    id: 4,
    date: "2025-09-22",
    item: "Designer Handbag",
    buyer: "Michele K.",
    status: "Completed",
    amount: 80000,
    commission: 8000,
    net: 72000,
    type: "accessory",
    category: "Accessories",
    duration: "5 days"
  },
  {
    id: 5,
    date: "2025-09-25",
    item: "Gold Gown",
    buyer: "Grace L.",
    status: "Processing",
    amount: 120000,
    commission: 12000,
    net: 108000,
    type: "rental",
    category: "Evening Gowns",
    duration: "4 days"
  },
  {
    id: 6,
    date: "2025-09-28",
    item: "Traditional Gomesi",
    buyer: "Mary W.",
    status: "Completed",
    amount: 60000,
    commission: 6000,
    net: 54000,
    type: "rental",
    category: "Traditional",
    duration: "2 days"
  },
];

const categoryData = [
  { name: "Evening Gowns", value: 45, earnings: 540000 },
  { name: "Suits", value: 25, earnings: 300000 },
  { name: "Casual Wear", value: 15, earnings: 180000 },
  { name: "Accessories", value: 10, earnings: 120000 },
  { name: "Traditional", value: 5, earnings: 60000 },
];

const COLORS = ['#046C4E', '#D4AF37', '#0B5137', '#00A86B', '#B5A642'];

export default function EarningsPage() {
  const [dateRange, setDateRange] = useState("3months");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [showPayoutModal, setShowPayoutModal] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [payoutAmount, setPayoutAmount] = useState("");
  const [chartType, setChartType] = useState("bar");
  const [expandedSections, setExpandedSections] = useState({
    transactions: true,
    analytics: true,
    payout: true
  });

  // Enhanced statistics
  const stats = useMemo(() => {
    const totalEarnings = 1200000;
    const thisMonthEarnings = 520000;
    const pendingPayouts = 171000;
    const completedRentals = 28;
    const availableBalance = 949000;
    const growthRate = 24.5;
    const avgTransactionValue = 75000;
    const customerSatisfaction = 94;
    const repeatCustomerRate = 35;

    return {
      totalEarnings,
      thisMonthEarnings,
      pendingPayouts,
      completedRentals,
      availableBalance,
      growthRate,
      avgTransactionValue,
      customerSatisfaction,
      repeatCustomerRate
    };
  }, []);

  const formatCurrency = (amount) => {
    return `UGX ${amount.toLocaleString()}`;
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      Completed: { class: "bg-primary-100 text-primary-800", icon: FaCheckCircle },
      Pending: { class: "bg-accent-100 text-accent-800", icon: FaClock },
      Processing: { class: "bg-yellow-100 text-yellow-800", icon: FaSync },
    };
    
    const config = statusConfig[status] || statusConfig.Pending;
    const IconComponent = config.icon;
    
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${config.class}`}>
        <IconComponent className="w-3 h-3" />
        {status}
      </span>
    );
  };

  const handlePayoutRequest = () => {
    if (!payoutAmount || payoutAmount > stats.availableBalance) return;
    
    // Simulate payout request
    alert(`Payout request of ${formatCurrency(parseInt(payoutAmount))} submitted successfully!`);
    setShowPayoutModal(false);
    setPayoutAmount("");
  };

  const handleExport = (format) => {
    // Simulate export functionality
    alert(`Exporting earnings data as ${format.toUpperCase()}`);
    setShowExportModal(false);
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const filteredTransactions = useMemo(() => {
    return transactions.filter(transaction => {
      const matchesCategory = selectedCategory === "all" || transaction.category === selectedCategory;
      const matchesStatus = selectedStatus === "all" || transaction.status === selectedStatus;
      return matchesCategory && matchesStatus;
    });
  }, [selectedCategory, selectedStatus]);

  const categories = ["all", "Evening Gowns", "Suits", "Cocktail Dresses", "Accessories", "Traditional"];
  const statuses = ["all", "Completed", "Pending", "Processing"];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-primary-800">Earnings Dashboard</h1>
              <p className="text-sm text-text-muted mt-1">Track your earnings, commissions, and payout history</p>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 border border-background-300 rounded-xl hover:border-primary-400 text-text-secondary"
              >
                <FaFilter className="w-4 h-4" />
                Filters
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-background-300 rounded-xl hover:border-primary-400 text-text-secondary">
                <FaCalendarAlt className="w-4 h-4" />
                {dateRange === "3months" ? "Last 3 Months" : "Custom Range"}
              </button>
              <button 
                onClick={() => setShowExportModal(true)}
                className="flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-xl hover:bg-primary-200 font-medium"
              >
                <FaFileExport className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="premium-card !p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Category</label>
                  <select 
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-background-300 rounded-xl bg-white text-sm"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Status</label>
                  <select 
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="w-full px-3 py-2 border border-background-300 rounded-xl bg-white text-sm"
                  >
                    {statuses.map(status => (
                      <option key={status} value={status}>
                        {status === "all" ? "All Statuses" : status}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Chart Type</label>
                  <select 
                    value={chartType}
                    onChange={(e) => setChartType(e.target.value)}
                    className="w-full px-3 py-2 border border-background-300 rounded-xl bg-white text-sm"
                  >
                    <option value="bar">Bar Chart</option>
                    <option value="line">Line Chart</option>
                    <option value="area">Area Chart</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Top Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="premium-card !p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <FaMoneyBillWave className="w-5 h-5 text-primary-600" />
                <p className="text-sm text-text-muted">Total Earnings</p>
              </div>
              <h2 className="text-2xl font-bold text-primary-700">{formatCurrency(stats.totalEarnings)}</h2>
              <div className="flex items-center justify-center gap-1 mt-2 text-sm text-green-600">
                <FaArrowUp className="w-3 h-3" />
                <span>{stats.growthRate}% growth</span>
              </div>
            </div>
            
            <div className="premium-card !p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <FaCalendarAlt className="w-5 h-5 text-accent-600" />
                <p className="text-sm text-text-muted">This Month</p>
              </div>
              <h2 className="text-2xl font-bold text-accent-700">{formatCurrency(stats.thisMonthEarnings)}</h2>
              <p className="text-xs text-text-muted mt-2">{stats.completedRentals} bookings</p>
            </div>
            
            <div className="premium-card !p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <FaClock className="w-5 h-5 text-yellow-600" />
                <p className="text-sm text-text-muted">Pending Payouts</p>
              </div>
              <h2 className="text-2xl font-bold text-yellow-700">{formatCurrency(stats.pendingPayouts)}</h2>
              <p className="text-xs text-text-muted mt-2">3 transactions</p>
            </div>
            
            <div className="premium-card !p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <FaWallet className="w-5 h-5 text-primary-600" />
                <p className="text-sm text-text-muted">Available Balance</p>
              </div>
              <h2 className="text-2xl font-bold text-primary-700">{formatCurrency(stats.availableBalance)}</h2>
              <p className="text-xs text-text-muted mt-2">Ready for payout</p>
            </div>
            
            <div className="premium-card !p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <FaUsers className="w-5 h-5 text-primary-600" />
                <p className="text-sm text-text-muted">Repeat Customers</p>
              </div>
              <h2 className="text-2xl font-bold text-primary-700">{stats.repeatCustomerRate}%</h2>
              <p className="text-xs text-text-muted mt-2">Loyal clients</p>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Earnings Chart */}
            <div className="premium-card lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-primary-700">Earnings Overview</h3>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setDateRange("3months")} 
                    className={`px-3 py-1 rounded-lg text-sm ${dateRange === "3months" ? "btn-primary !py-1 !px-3" : "bg-background-100"}`}
                  >
                    3M
                  </button>
                  <button 
                    onClick={() => setDateRange("6months")} 
                    className={`px-3 py-1 rounded-lg text-sm ${dateRange === "6months" ? "btn-primary !py-1 !px-3" : "bg-background-100"}`}
                  >
                    6M
                  </button>
                  <button 
                    onClick={() => setDateRange("1year")} 
                    className={`px-3 py-1 rounded-lg text-sm ${dateRange === "1year" ? "btn-primary !py-1 !px-3" : "bg-background-100"}`}
                  >
                    1Y
                  </button>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                {chartType === "bar" ? (
                  <BarChart data={earningsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" stroke="#4A5568" />
                    <YAxis stroke="#4A5568" />
                    <Tooltip 
                      formatter={(value) => [`UGX ${value.toLocaleString()}`, "Earnings"]}
                      labelStyle={{ color: '#046C4E' }}
                    />
                    <Bar 
                      dataKey="earnings" 
                      fill="#046C4E" 
                      radius={[8, 8, 0, 0]}
                      name="Earnings"
                    />
                  </BarChart>
                ) : chartType === "line" ? (
                  <LineChart data={earningsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" stroke="#4A5568" />
                    <YAxis stroke="#4A5568" />
                    <Tooltip formatter={(value) => [`UGX ${value.toLocaleString()}`, "Earnings"]} />
                    <Line type="monotone" dataKey="earnings" stroke="#046C4E" strokeWidth={2} dot={{ fill: '#046C4E' }} />
                  </LineChart>
                ) : (
                  <AreaChart data={earningsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" stroke="#4A5568" />
                    <YAxis stroke="#4A5568" />
                    <Tooltip formatter={(value) => [`UGX ${value.toLocaleString()}`, "Earnings"]} />
                    <Area type="monotone" dataKey="earnings" stroke="#046C4E" fill="#046C4E" fillOpacity={0.3} />
                  </AreaChart>
                )}
              </ResponsiveContainer>
            </div>

            {/* Category Distribution */}
            <div className="premium-card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-primary-700">Earnings by Category</h3>
                <button className="text-text-muted hover:text-primary-600">
                  <FaChartBar className="w-4 h-4" />
                </button>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value, name) => [`${value}%`, name]} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Transactions & Analytics Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Transactions Table */}
            <div className="premium-card lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => toggleSection('transactions')}
                    className="text-text-muted hover:text-primary-600"
                  >
                    {expandedSections.transactions ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  <h3 className="text-xl font-semibold text-primary-700">Transaction History</h3>
                </div>
                <div className="flex items-center gap-3">
                  <select 
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-3 py-2 border border-background-300 rounded-lg bg-white text-sm"
                  >
                    <option value="all">All Categories</option>
                    {categories.filter(cat => cat !== "all").map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  <select 
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="px-3 py-2 border border-background-300 rounded-lg bg-white text-sm"
                  >
                    <option value="all">All Statuses</option>
                    {statuses.filter(status => status !== "all").map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              {expandedSections.transactions && (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-background-100 text-text-secondary text-sm uppercase">
                      <tr>
                        <th className="p-4 text-left font-semibold">Date</th>
                        <th className="p-4 text-left font-semibold">Item</th>
                        <th className="p-4 text-left font-semibold">Buyer</th>
                        <th className="p-4 text-left font-semibold">Category</th>
                        <th className="p-4 text-left font-semibold">Status</th>
                        <th className="p-4 text-left font-semibold">Amount</th>
                        <th className="p-4 text-left font-semibold">Commission</th>
                        <th className="p-4 text-left font-semibold">Net</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm text-text-primary divide-y divide-background-200">
                      {filteredTransactions.map((t) => (
                        <tr key={t.id} className="hover:bg-background-50 transition-colors">
                          <td className="p-4">{t.date}</td>
                          <td className="p-4 font-medium">{t.item}</td>
                          <td className="p-4">{t.buyer}</td>
                          <td className="p-4">
                            <span className="bg-background-100 text-text-secondary px-2 py-1 rounded text-xs">
                              {t.category}
                            </span>
                          </td>
                          <td className="p-4">{getStatusBadge(t.status)}</td>
                          <td className="p-4 font-semibold text-primary-700">{formatCurrency(t.amount)}</td>
                          <td className="p-4 text-text-muted">{formatCurrency(t.commission)}</td>
                          <td className="p-4 font-bold text-primary-800">{formatCurrency(t.net)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Analytics & Quick Stats */}
            <div className="space-y-6">
              {/* Performance Metrics */}
              <div className="premium-card">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => toggleSection('analytics')}
                      className="text-text-muted hover:text-primary-600"
                    >
                      {expandedSections.analytics ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                    <h3 className="text-xl font-semibold text-primary-700">Performance Metrics</h3>
                  </div>
                </div>
                
                {expandedSections.analytics && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-text-muted">Avg. Transaction Value</span>
                      <span className="font-semibold text-primary-700">{formatCurrency(stats.avgTransactionValue)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-muted">Customer Satisfaction</span>
                      <span className="font-semibold text-primary-700 flex items-center gap-1">
                        <FaStar className="text-yellow-400" />
                        {stats.customerSatisfaction}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-muted">Repeat Customer Rate</span>
                      <span className="font-semibold text-primary-700">{stats.repeatCustomerRate}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-text-muted">Avg. Commission Rate</span>
                      <span className="font-semibold text-primary-700">10%</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Pending Payouts */}
              <div className="premium-card">
                <h3 className="text-xl font-semibold text-primary-700 mb-4">Pending Payouts</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-accent-50 rounded-xl border border-accent-200">
                    <div>
                      <p className="font-semibold text-accent-800">Blue Suit</p>
                      <p className="text-sm text-text-muted">John M.</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-accent-700">{formatCurrency(70000)}</p>
                      <p className="text-xs text-text-muted">2 days</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-xl border border-yellow-200">
                    <div>
                      <p className="font-semibold text-yellow-800">Gold Gown</p>
                      <p className="text-sm text-text-muted">Grace L.</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-yellow-700">{formatCurrency(120000)}</p>
                      <p className="text-xs text-text-muted">Processing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payout Section */}
          <div className="premium-card">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-primary-700 mb-2">Ready for Payout</h3>
                <p className="text-text-muted">
                  You have <span className="font-bold text-primary-700">{formatCurrency(stats.availableBalance)}</span> available for immediate withdrawal. 
                  Payouts are processed within 2-3 business days.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm text-text-muted">Available Balance</p>
                  <p className="text-2xl font-bold text-primary-700">{formatCurrency(stats.availableBalance)}</p>
                </div>
                <button 
                  onClick={() => setShowPayoutModal(true)}
                  className="btn-gold px-6 py-3 rounded-xl font-semibold flex items-center gap-2"
                >
                  <FaMoneyBillWave className="w-5 h-5" />
                  Request Payout
                </button>
              </div>
            </div>
          </div>

          {/* Payout Modal */}
          {showPayoutModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="premium-card max-w-md w-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-primary-700">Request Payout</h3>
                  <button 
                    onClick={() => setShowPayoutModal(false)}
                    className="text-text-muted hover:text-primary-600"
                  >
                    <FaTimes className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Payout Amount
                    </label>
                    <input
                      type="number"
                      value={payoutAmount}
                      onChange={(e) => setPayoutAmount(e.target.value)}
                      placeholder={`Max: ${formatCurrency(stats.availableBalance)}`}
                      className="w-full px-3 py-2 border border-background-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      max={stats.availableBalance}
                    />
                    <p className="text-xs text-text-muted mt-2">
                      Available: {formatCurrency(stats.availableBalance)}
                    </p>
                  </div>
                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={() => setShowPayoutModal(false)}
                      className="flex-1 py-2 px-4 border border-background-300 rounded-xl hover:border-primary-400"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handlePayoutRequest}
                      disabled={!payoutAmount || payoutAmount > stats.availableBalance}
                      className="flex-1 btn-primary py-2 px-4 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Confirm Payout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Export Modal */}
          {showExportModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="premium-card max-w-md w-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-primary-700">Export Earnings Data</h3>
                  <button 
                    onClick={() => setShowExportModal(false)}
                    className="text-text-muted hover:text-primary-600"
                  >
                    <FaTimes className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Export Format
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => handleExport('csv')}
                        className="p-3 border border-background-300 rounded-xl hover:border-primary-400 text-center"
                      >
                        <div className="font-medium text-text-primary">CSV</div>
                        <div className="text-xs text-text-muted">Spreadsheet</div>
                      </button>
                      <button
                        onClick={() => handleExport('pdf')}
                        className="p-3 border border-background-300 rounded-xl hover:border-primary-400 text-center"
                      >
                        <div className="font-medium text-text-primary">PDF</div>
                        <div className="text-xs text-text-muted">Document</div>
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={() => setShowExportModal(false)}
                      className="flex-1 py-2 px-4 border border-background-300 rounded-xl hover:border-primary-400"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleExport('csv')}
                      className="flex-1 btn-primary py-2 px-4 rounded-xl"
                    >
                      Export Data
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}