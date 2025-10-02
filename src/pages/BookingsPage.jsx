import React, { useState, useMemo } from "react";
import { 
  FaCheckCircle, 
  FaTimesCircle, 
  FaClock, 
  FaFilter,
  FaCalendarAlt,
  FaEye,
  FaEllipsisV,
  FaMapMarkerAlt,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaMoneyBillWave,
  FaExclamationTriangle,
  FaSearch,
  FaDownload,
  FaFileExport,
  FaChevronLeft,
  FaChevronRight,
  FaTimes
} from "react-icons/fa";

export default function BookingsPage() {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [dateRange, setDateRange] = useState("all");
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [currentDate, setCurrentDate] = useState(new Date());

  // Enhanced booking data
  const bookings = [
    {
      id: 1,
      title: "Emerald Evening Gown",
      date: "2025-10-10",
      duration: "3 days",
      status: "confirmed",
      customer: {
        name: "Sarah Johnson",
        email: "sarah@example.com",
        phone: "+256 712 345 678",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
      },
      amount: 75000,
      commission: 7500,
      netAmount: 67500,
      pickupDate: "2025-10-10",
      returnDate: "2025-10-13",
      location: "Kampala",
      specialRequests: "Need by 2 PM for evening event",
      category: "Evening Gowns"
    },
    {
      id: 2,
      title: "Designer Blue Suit",
      date: "2025-10-15",
      duration: "2 days",
      status: "pending",
      customer: {
        name: "Michael Chen",
        email: "michael@example.com",
        phone: "+256 701 234 567",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      amount: 85000,
      commission: 8500,
      netAmount: 76500,
      pickupDate: "2025-10-15",
      returnDate: "2025-10-17",
      location: "Entebbe",
      specialRequests: "Prefer morning pickup",
      category: "Suits"
    },
    {
      id: 3,
      title: "Vintage Gold Gown",
      date: "2025-10-20",
      duration: "4 days",
      status: "cancelled",
      customer: {
        name: "Grace Nalweyiso",
        email: "grace@example.com",
        phone: "+256 789 123 456",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      amount: 120000,
      commission: 12000,
      netAmount: 108000,
      pickupDate: "2025-10-20",
      returnDate: "2025-10-24",
      location: "Kampala",
      specialRequests: "Cancelled due to schedule conflict",
      category: "Evening Gowns"
    },
    {
      id: 4,
      title: "Classic Black Dress",
      date: "2025-10-25",
      duration: "1 day",
      status: "confirmed",
      customer: {
        name: "Lisa Park",
        email: "lisa@example.com",
        phone: "+256 765 432 189",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
      },
      amount: 45000,
      commission: 4500,
      netAmount: 40500,
      pickupDate: "2025-10-25",
      returnDate: "2025-10-26",
      location: "Kampala",
      specialRequests: "Urgent booking for interview",
      category: "Cocktail Dresses"
    },
    {
      id: 5,
      title: "Designer Handbag",
      date: "2025-10-28",
      duration: "5 days",
      status: "pending",
      customer: {
        name: "David Omondi",
        email: "david@example.com",
        phone: "+256 723 456 789",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      amount: 35000,
      commission: 3500,
      netAmount: 31500,
      pickupDate: "2025-10-28",
      returnDate: "2025-11-02",
      location: "Jinja",
      specialRequests: "Weekend accessory for wedding",
      category: "Accessories"
    }
  ];

  // Filter bookings based on status, search, and date range
  const filteredBookings = useMemo(() => {
    return bookings.filter(booking => {
      const matchesStatus = selectedStatus === "all" || booking.status === selectedStatus;
      const matchesSearch = booking.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          booking.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          booking.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Date range filtering
      const bookingDate = new Date(booking.pickupDate);
      let matchesDate = true;
      
      if (dateRange !== "all") {
        const today = new Date();
        const startDate = new Date();
        
        switch (dateRange) {
          case "today":
            startDate.setDate(today.getDate());
            break;
          case "week":
            startDate.setDate(today.getDate() - 7);
            break;
          case "month":
            startDate.setMonth(today.getMonth() - 1);
            break;
          case "upcoming":
            matchesDate = bookingDate >= today;
            break;
          default:
            matchesDate = true;
        }
        
        if (dateRange !== "upcoming") {
          matchesDate = bookingDate >= startDate && bookingDate <= today;
        }
      }
      
      return matchesStatus && matchesSearch && matchesDate;
    });
  }, [bookings, selectedStatus, searchQuery, dateRange]);

  // Calendar functions
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const generateCalendar = (year, month) => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const calendar = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      calendar.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const hasBooking = bookings.some(booking => {
        const bookingDate = new Date(booking.pickupDate);
        return bookingDate.toDateString() === date.toDateString();
      });
      
      calendar.push({
        day,
        date,
        hasBooking
      });
    }
    
    return calendar;
  };

  const calendar = generateCalendar(selectedYear, selectedMonth);

  // Status counts for filter badges
  const statusCounts = useMemo(() => {
    const allBookings = bookings.filter(booking => {
      const matchesSearch = booking.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          booking.customer.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
    
    return {
      all: allBookings.length,
      confirmed: allBookings.filter(b => b.status === "confirmed").length,
      pending: allBookings.filter(b => b.status === "pending").length,
      cancelled: allBookings.filter(b => b.status === "cancelled").length
    };
  }, [bookings, searchQuery]);

  // Status badge component
  const getStatusBadge = (status) => {
    const statusConfig = {
      confirmed: { 
        class: "bg-primary-100 text-primary-800 border-primary-200",
        icon: FaCheckCircle 
      },
      pending: { 
        class: "bg-accent-100 text-accent-800 border-accent-200",
        icon: FaClock 
      },
      cancelled: { 
        class: "bg-red-100 text-red-800 border-red-200",
        icon: FaTimesCircle 
      }
    };
    
    const config = statusConfig[status] || statusConfig.pending;
    const IconComponent = config.icon;
    
    return (
      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${config.class}`}>
        <IconComponent className="w-4 h-4" />
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  // Handle booking click
  const handleBookingClick = (booking) => {
    setSelectedBooking(booking);
    setShowBookingModal(true);
  };

  // Format currency
  const formatCurrency = (amount) => {
    return `UGX ${amount.toLocaleString()}`;
  };

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Calendar navigation
  const navigateMonth = (direction) => {
    setSelectedMonth(prev => {
      let newMonth = prev + direction;
      let newYear = selectedYear;
      
      if (newMonth < 0) {
        newMonth = 11;
        newYear--;
      } else if (newMonth > 11) {
        newMonth = 0;
        newYear++;
      }
      
      setSelectedYear(newYear);
      return newMonth;
    });
  };

  // Export bookings
  const handleExport = (format) => {
    const data = filteredBookings.map(booking => ({
      ID: booking.id,
      Item: booking.title,
      Customer: booking.customer.name,
      Status: booking.status,
      Amount: booking.amount,
      'Pickup Date': booking.pickupDate,
      'Return Date': booking.returnDate,
      Location: booking.location
    }));
    
    if (format === 'csv') {
      const headers = Object.keys(data[0]).join(',');
      const csv = [headers, ...data.map(row => Object.values(row).join(','))].join('\n');
      const blob = new Blob([csv], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `bookings-${new Date().toISOString().split('T')[0]}.csv`;
      a.click();
    }
    
    alert(`Bookings exported as ${format.toUpperCase()}`);
  };

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-primary-800">Booking Management</h1>
              <p className="text-sm text-text-muted mt-1">Manage your rental bookings and customer requests</p>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 border border-background-300 rounded-xl hover:border-primary-400 text-text-secondary"
              >
                <FaFilter className="w-4 h-4" />
                Filters
              </button>
              <button 
                onClick={() => setShowCalendar(!showCalendar)}
                className="flex items-center gap-2 px-4 py-2 border border-background-300 rounded-xl hover:border-primary-400 text-text-secondary"
              >
                <FaCalendarAlt className="w-4 h-4" />
                Calendar View
              </button>
              <button 
                onClick={() => handleExport('csv')}
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
                  <label className="block text-sm font-medium text-text-primary mb-2">Search</label>
                  <div className="relative">
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search bookings..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-background-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Date Range</label>
                  <select
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                    className="w-full px-3 py-2 border border-background-300 rounded-xl bg-white text-sm"
                  >
                    <option value="all">All Dates</option>
                    <option value="today">Today</option>
                    <option value="week">Last 7 Days</option>
                    <option value="month">Last 30 Days</option>
                    <option value="upcoming">Upcoming</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Category</label>
                  <select className="w-full px-3 py-2 border border-background-300 rounded-xl bg-white text-sm">
                    <option value="all">All Categories</option>
                    <option value="evening-gowns">Evening Gowns</option>
                    <option value="suits">Suits</option>
                    <option value="cocktail-dresses">Cocktail Dresses</option>
                    <option value="accessories">Accessories</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Calendar View */}
          {showCalendar && (
            <div className="premium-card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-primary-700">Booking Calendar</h3>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => navigateMonth(-1)}
                    className="p-2 hover:bg-background-100 rounded-lg"
                  >
                    <FaChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="font-semibold text-primary-700">
                    {months[selectedMonth]} {selectedYear}
                  </span>
                  <button 
                    onClick={() => navigateMonth(1)}
                    className="p-2 hover:bg-background-100 rounded-lg"
                  >
                    <FaChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-7 gap-1 mb-2">
                {daysOfWeek.map(day => (
                  <div key={day} className="text-center text-sm font-semibold text-text-muted py-2">
                    {day}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-1">
                {calendar.map((day, index) => (
                  <div
                    key={index}
                    className={`min-h-20 p-1 border border-background-200 rounded-lg ${
                      day ? 'bg-white hover:bg-background-50 cursor-pointer' : 'bg-background-100'
                    } ${
                      day?.hasBooking ? 'border-primary-300 bg-primary-50' : ''
                    }`}
                  >
                    {day && (
                      <>
                        <div className="text-sm font-medium text-text-primary mb-1">
                          {day.day}
                        </div>
                        {day.hasBooking && (
                          <div className="w-2 h-2 bg-primary-500 rounded-full mx-auto"></div>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Status Filter Tabs */}
          <div className="premium-card !p-4">
            <div className="flex flex-wrap gap-2">
              {[
                { key: "all", label: "All Bookings", count: statusCounts.all },
                { key: "confirmed", label: "Confirmed", count: statusCounts.confirmed },
                { key: "pending", label: "Pending", count: statusCounts.pending },
                { key: "cancelled", label: "Cancelled", count: statusCounts.cancelled }
              ].map(({ key, label, count }) => (
                <button
                  key={key}
                  onClick={() => setSelectedStatus(key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                    selectedStatus === key
                      ? "btn-primary"
                      : "bg-background-100 text-text-secondary hover:bg-background-200"
                  }`}
                >
                  <span>{label}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    selectedStatus === key ? "bg-white text-primary-600" : "bg-background-300"
                  }`}>
                    {count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Bookings Table */}
          <div className="premium-card">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-background-100 text-text-secondary text-sm uppercase">
                    <th className="p-4 text-left font-semibold rounded-tl-xl">Item & Customer</th>
                    <th className="p-4 text-left font-semibold">Dates</th>
                    <th className="p-4 text-left font-semibold">Amount</th>
                    <th className="p-4 text-left font-semibold">Status</th>
                    <th className="p-4 text-left font-semibold rounded-tr-xl">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-text-primary divide-y divide-background-200">
                  {filteredBookings.map((booking) => (
                    <tr 
                      key={booking.id} 
                      className="hover:bg-background-50 transition-colors cursor-pointer"
                      onClick={() => handleBookingClick(booking)}
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <img 
                            src={booking.customer.avatar} 
                            alt={booking.customer.name}
                            className="w-10 h-10 rounded-full border-2 border-background-200"
                          />
                          <div>
                            <p className="font-semibold text-primary-700">{booking.title}</p>
                            <p className="text-text-muted text-sm flex items-center gap-1">
                              <FaUser className="w-3 h-3" />
                              {booking.customer.name}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div>
                          <p className="font-medium">{formatDate(booking.pickupDate)}</p>
                          <p className="text-text-muted text-sm">{booking.duration}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="font-bold text-primary-700">{formatCurrency(booking.netAmount)}</p>
                        <p className="text-text-muted text-sm">Net amount</p>
                      </td>
                      <td className="p-4">
                        {getStatusBadge(booking.status)}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleBookingClick(booking);
                            }}
                            className="p-2 hover:bg-background-100 rounded-lg text-text-secondary hover:text-primary-600"
                          >
                            <FaEye className="w-4 h-4" />
                          </button>
                          <button className="p-2 hover:bg-background-100 rounded-lg text-text-secondary hover:text-primary-600">
                            <FaEllipsisV className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredBookings.length === 0 && (
              <div className="text-center py-12">
                <FaCalendarAlt className="w-16 h-16 text-background-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-text-primary mb-2">No bookings found</h3>
                <p className="text-text-muted">No bookings match your current filters.</p>
              </div>
            )}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="premium-card !p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <FaCheckCircle className="w-5 h-5 text-primary-600" />
                <p className="text-sm text-text-muted">Confirmed</p>
              </div>
              <h2 className="text-2xl font-bold text-primary-700">{statusCounts.confirmed}</h2>
              <p className="text-xs text-text-muted mt-2">Active bookings</p>
            </div>
            
            <div className="premium-card !p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <FaClock className="w-5 h-5 text-accent-600" />
                <p className="text-sm text-text-muted">Pending</p>
              </div>
              <h2 className="text-2xl font-bold text-accent-700">{statusCounts.pending}</h2>
              <p className="text-xs text-text-muted mt-2">Awaiting confirmation</p>
            </div>
            
            <div className="premium-card !p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <FaMoneyBillWave className="w-5 h-5 text-primary-600" />
                <p className="text-sm text-text-muted">Monthly Revenue</p>
              </div>
              <h2 className="text-2xl font-bold text-primary-700">UGX 450K</h2>
              <p className="text-xs text-text-muted mt-2">From bookings</p>
            </div>
            
            <div className="premium-card !p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <FaExclamationTriangle className="w-5 h-5 text-red-600" />
                <p className="text-sm text-text-muted">Cancelled</p>
              </div>
              <h2 className="text-2xl font-bold text-red-700">{statusCounts.cancelled}</h2>
              <p className="text-xs text-text-muted mt-2">This month</p>
            </div>
          </div>

          {/* Booking Detail Modal */}
          {showBookingModal && selectedBooking && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="premium-card max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-primary-800">Booking Details</h2>
                  <button 
                    onClick={() => setShowBookingModal(false)}
                    className="p-2 hover:bg-background-100 rounded-lg text-text-secondary"
                  >
                    <FaTimes className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Item and Status */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-primary-700">{selectedBooking.title}</h3>
                      <p className="text-text-muted">Booking #{selectedBooking.id}</p>
                    </div>
                    {getStatusBadge(selectedBooking.status)}
                  </div>

                  {/* Customer Information */}
                  <div className="bg-background-50 rounded-xl p-4">
                    <h4 className="font-semibold text-primary-700 mb-3">Customer Information</h4>
                    <div className="flex items-center gap-3 mb-3">
                      <img 
                        src={selectedBooking.customer.avatar} 
                        alt={selectedBooking.customer.name}
                        className="w-12 h-12 rounded-full border-2 border-background-200"
                      />
                      <div>
                        <p className="font-semibold">{selectedBooking.customer.name}</p>
                        <p className="text-text-muted text-sm">{selectedBooking.customer.email}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2 text-text-muted">
                        <FaPhone className="w-4 h-4" />
                        <span>{selectedBooking.customer.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-text-muted">
                        <FaMapMarkerAlt className="w-4 h-4" />
                        <span>{selectedBooking.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Booking Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-primary-700 mb-3">Booking Timeline</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-text-muted">Pickup Date:</span>
                          <span className="font-medium">{formatDate(selectedBooking.pickupDate)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-muted">Return Date:</span>
                          <span className="font-medium">{formatDate(selectedBooking.returnDate)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-muted">Duration:</span>
                          <span className="font-medium">{selectedBooking.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary-700 mb-3">Payment Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-text-muted">Rental Amount:</span>
                          <span className="font-medium">{formatCurrency(selectedBooking.amount)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-text-muted">Commission (10%):</span>
                          <span className="font-medium text-text-muted">{formatCurrency(selectedBooking.commission)}</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span className="font-semibold">Net Amount:</span>
                          <span className="font-bold text-primary-700">{formatCurrency(selectedBooking.netAmount)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Special Requests */}
                  {selectedBooking.specialRequests && (
                    <div>
                      <h4 className="font-semibold text-primary-700 mb-2">Special Requests</h4>
                      <p className="text-sm text-text-primary bg-background-50 rounded-lg p-3">
                        {selectedBooking.specialRequests}
                      </p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-background-200">
                    {selectedBooking.status === "pending" && (
                      <>
                        <button className="btn-primary flex-1 py-2">Confirm Booking</button>
                        <button className="flex-1 py-2 border border-red-300 text-red-600 rounded-xl hover:bg-red-50">
                          Decline
                        </button>
                      </>
                    )}
                    {selectedBooking.status === "confirmed" && (
                      <button className="btn-primary flex-1 py-2">Send Reminder</button>
                    )}
                    <button className="flex-1 py-2 border border-background-300 rounded-xl hover:bg-background-100">
                      Contact Customer
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