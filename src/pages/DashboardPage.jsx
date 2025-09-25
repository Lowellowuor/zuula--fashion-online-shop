// src/pages/DashboardPage.jsx
import { useState } from "react";
import { 
  FaBell, FaEnvelope, FaChartLine, FaMoneyBillWave, 
  FaCalendarAlt, FaUserCheck, FaStar, FaPlus, 
  FaEdit, FaTimes, FaCheck, FaClock, FaShoppingBag,
  FaFileUpload, FaShieldAlt, FaCog, FaSignOutAlt
} from "react-icons/fa";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [showAddListing, setShowAddListing] = useState(false);
  const [notifications, setNotifications] = useState(3); // Mock notification count

  // Sample data
  const overviewStats = [
    { title: "Total Rentals", value: 12, icon: <FaShoppingBag className="text-emerald-600" />, change: "+20%", trend: "up" },
    { title: "Total Sales", value: 5, icon: <FaMoneyBillWave className="text-blue-600" />, change: "+5%", trend: "up" },
    { title: "Total Earnings", value: "UGX 450,000", icon: <FaChartLine className="text-amber-600" />, change: "+15%", trend: "up" },
    { title: "Pending Actions", value: 3, icon: <FaClock className="text-red-600" />, change: "-2", trend: "down" },
  ];

  const activeBookings = [
    { id: 1, item: "Red Dress", renter: "Jane Doe", date: "2025-09-20", status: "Pending", amount: 25000, deposit: 5000 },
    { id: 2, item: "Blue Suit", renter: "John Smith", date: "2025-09-22", status: "Active", amount: 35000, deposit: 7000 },
    { id: 3, item: "Gold Gown", renter: "Alice Kim", date: "2025-09-25", status: "Pending", amount: 45000, deposit: 9000 },
  ];

  const listings = [
    { id: 1, title: "Red Dress", price: 50000, available: true, views: 124, bookings: 5 },
    { id: 2, title: "Blue Suit", price: 70000, available: false, views: 89, bookings: 3 },
    { id: 3, title: "Gold Gown", price: 120000, available: true, views: 215, bookings: 8 },
  ];

  const recentTransactions = [
    { id: 1, type: "Rental", item: "Red Dress", amount: 25000, date: "2025-09-15", status: "Completed" },
    { id: 2, type: "Sale", item: "Blue Suit", amount: 70000, date: "2025-09-10", status: "Completed" },
    { id: 3, type: "Rental", item: "Gold Gown", amount: 45000, date: "2025-09-05", status: "Processing" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 flex flex-col space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-emerald-600">Zuula Dashboard</h2>
          <div className="relative">
            <FaBell className="text-gray-600 cursor-pointer" />
            {notifications > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {notifications}
              </span>
            )}
          </div>
        </div>
        
        <nav className="flex flex-col space-y-2 flex-1">
          <button
            className={`flex items-center gap-3 text-left py-2 px-4 rounded hover:bg-emerald-50 ${
              activeTab === "overview" ? "bg-emerald-100 font-semibold text-emerald-700" : "text-gray-700"
            }`}
            onClick={() => setActiveTab("overview")}
          >
            <FaChartLine /> Overview
          </button>
          <button
            className={`flex items-center gap-3 text-left py-2 px-4 rounded hover:bg-emerald-50 ${
              activeTab === "listings" ? "bg-emerald-100 font-semibold text-emerald-700" : "text-gray-700"
            }`}
            onClick={() => setActiveTab("listings")}
          >
            <FaShoppingBag /> My Listings
          </button>
          <button
            className={`flex items-center gap-3 text-left py-2 px-4 rounded hover:bg-emerald-50 ${
              activeTab === "bookings" ? "bg-emerald-100 font-semibold text-emerald-700" : "text-gray-700"
            }`}
            onClick={() => setActiveTab("bookings")}
          >
            <FaCalendarAlt /> Bookings
          </button>
          <button
            className={`flex items-center gap-3 text-left py-2 px-4 rounded hover:bg-emerald-50 ${
              activeTab === "messages" ? "bg-emerald-100 font-semibold text-emerald-700" : "text-gray-700"
            }`}
            onClick={() => setActiveTab("messages")}
          >
            <FaEnvelope /> Messages
          </button>
          <button
            className={`flex items-center gap-3 text-left py-2 px-4 rounded hover:bg-emerald-50 ${
              activeTab === "earnings" ? "bg-emerald-100 font-semibold text-emerald-700" : "text-gray-700"
            }`}
            onClick={() => setActiveTab("earnings")}
          >
            <FaMoneyBillWave /> Earnings
          </button>
          <button
            className={`flex items-center gap-3 text-left py-2 px-4 rounded hover:bg-emerald-50 ${
              activeTab === "profile" ? "bg-emerald-100 font-semibold text-emerald-700" : "text-gray-700"
            }`}
            onClick={() => setActiveTab("profile")}
          >
            <FaUserCheck /> Profile
          </button>
          
          <div className="mt-auto pt-4 border-t border-gray-200">
            <button className="flex items-center gap-3 text-left py-2 px-4 rounded hover:bg-gray-100 text-gray-700">
              <FaCog /> Settings
            </button>
            <button className="flex items-center gap-3 text-left py-2 px-4 rounded hover:bg-gray-100 text-gray-700">
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 capitalize">
            {activeTab === "overview" ? "Dashboard Overview" : activeTab}
          </h1>
          <div className="flex items-center gap-4">
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 flex items-center gap-2">
              <FaPlus /> New Listing
            </button>
          </div>
        </div>

        {/* Overview */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {overviewStats.map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-md">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-gray-100 rounded-lg">{stat.icon}</div>
                    <span className={`text-sm font-medium ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="text-gray-600 text-sm">{stat.title}</h3>
                  <p className="mt-1 text-2xl font-bold text-gray-800">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Bookings */}
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <FaCalendarAlt /> Recent Bookings
                </h3>
                <div className="space-y-3">
                  {activeBookings.slice(0, 3).map((booking) => (
                    <div key={booking.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{booking.item}</p>
                        <p className="text-sm text-gray-600">{booking.renter}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        booking.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
                        booking.status === "Active" ? "bg-green-100 text-green-800" :
                        "bg-gray-100 text-gray-800"
                      }`}>
                        {booking.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Transactions */}
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <FaMoneyBillWave /> Recent Transactions
                </h3>
                <div className="space-y-3">
                  {recentTransactions.map((transaction) => (
                    <div key={transaction.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{transaction.item}</p>
                        <p className="text-sm text-gray-600">{transaction.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">UGX {transaction.amount.toLocaleString()}</p>
                        <p className="text-sm text-gray-600">{transaction.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* My Listings */}
        {activeTab === "listings" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Your Listings</h2>
              <button 
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 flex items-center gap-2"
                onClick={() => setShowAddListing(true)}
              >
                <FaPlus /> Add New Item
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-emerald-50">
                  <tr>
                    <th className="p-4 text-left">Item</th>
                    <th className="p-4 text-left">Price (UGX/day)</th>
                    <th className="p-4 text-left">Views</th>
                    <th className="p-4 text-left">Bookings</th>
                    <th className="p-4 text-left">Status</th>
                    <th className="p-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {listings.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-gray-50">
                      <td className="p-4 font-medium">{item.title}</td>
                      <td className="p-4">{item.price.toLocaleString()}</td>
                      <td className="p-4">{item.views}</td>
                      <td className="p-4">{item.bookings}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          item.available ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}>
                          {item.available ? "Available" : "Unavailable"}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex justify-center gap-2">
                          <button className="p-2 text-emerald-600 hover:bg-emerald-100 rounded-lg">
                            <FaEdit />
                          </button>
                          <button className="p-2 text-red-600 hover:bg-red-100 rounded-lg">
                            <FaTimes />
                          </button>
                          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                            <FaChartLine />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Add Listing Modal */}
            {showAddListing && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-2xl p-6 w-full max-w-2xl">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">Add New Listing</h3>
                    <button onClick={() => setShowAddListing(false)} className="text-gray-500 hover:text-gray-700">
                      <FaTimes />
                    </button>
                  </div>
                  <form className="space-y-4">
                    <div>
                      <label className="block font-medium mb-1">Item Title</label>
                      <input type="text" className="w-full border p-3 rounded-lg" placeholder="e.g., Designer Wedding Gown" />
                    </div>
                    <div>
                      <label className="block font-medium mb-1">Description</label>
                      <textarea className="w-full border p-3 rounded-lg" rows={3} placeholder="Describe your item..."></textarea>
                    </div>
                    <div>
                      <label className="block font-medium mb-1">Upload Photos</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <FaFileUpload className="text-gray-400 text-2xl mx-auto mb-2" />
                        <p className="text-gray-600">Drag & drop photos or click to browse</p>
                        <p className="text-sm text-gray-500">Maximum 5 photos</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block font-medium mb-1">Price per day (UGX)</label>
                        <input type="number" className="w-full border p-3 rounded-lg" placeholder="50000" />
                      </div>
                      <div>
                        <label className="block font-medium mb-1">Deposit (UGX)</label>
                        <input type="number" className="w-full border p-3 rounded-lg" placeholder="10000" />
                      </div>
                    </div>
                    <div className="flex gap-3 pt-4">
                      <button type="button" onClick={() => setShowAddListing(false)} className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50">
                        Cancel
                      </button>
                      <button type="submit" className="flex-1 bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700">
                        Create Listing
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Other tabs would be implemented similarly */}
        {activeTab === "bookings" && (
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Bookings Management</h2>
            </div>
            {/* Booking management content would go here */}
          </div>
        )}

        {activeTab === "messages" && (
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Messages</h2>
            </div>
            {/* Messages content would go here */}
          </div>
        )}

        {activeTab === "earnings" && (
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Earnings & Analytics</h2>
            </div>
            {/* Earnings content would go here */}
          </div>
        )}

        {activeTab === "profile" && (
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Profile & Verification</h2>
            </div>
            {/* Profile content would go here */}
          </div>
        )}
      </main>
    </div>
  );
}