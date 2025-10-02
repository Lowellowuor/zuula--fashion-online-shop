import React, { useState } from "react";
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
  FaExclamationTriangle
} from "react-icons/fa";

export default function BookingsPage() {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

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
      specialRequests: "Need by 2 PM for evening event"
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
      specialRequests: "Prefer morning pickup"
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
      specialRequests: "Cancelled due to schedule conflict"
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
      specialRequests: "Urgent booking for interview"
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
      specialRequests: "Weekend accessory for wedding"
    }
  ];

  // Filter bookings based on status
  const filteredBookings = bookings.filter(booking => 
    selectedStatus === "all" || booking.status === selectedStatus
  );

  // Status counts for filter badges
  const statusCounts = {
    all: bookings.length,
    confirmed: bookings.filter(b => b.status === "confirmed").length,
    pending: bookings.filter(b => b.status === "pending").length,
    cancelled: bookings.filter(b => b.status === "cancelled").length
  };

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

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-primary-800">Booking Management</h1>
          <p className="text-text-muted mt-1">Manage your rental bookings and customer requests</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-background-300 rounded-xl hover:border-primary-400 text-text-secondary">
            <FaFilter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-background-300 rounded-xl hover:border-primary-400 text-text-secondary">
            <FaCalendarAlt className="w-4 h-4" />
            Calendar View
          </button>
        </div>
      </div>

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
                <FaTimesCircle className="w-5 h-5" />
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
  );
}