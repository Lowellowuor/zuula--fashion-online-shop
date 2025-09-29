// src/pages/DashboardPage.jsx
import { useState } from "react";
import { 
  FaBell, FaEnvelope, FaChartLine, FaMoneyBillWave, 
  FaCalendarAlt, FaUserCheck, FaShoppingBag,
  FaPlus, FaEdit, FaTimes, FaCheck, FaClock, 
  FaFileUpload, FaCog, FaSignOutAlt
} from "react-icons/fa";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [showAddListing, setShowAddListing] = useState(false);
  const [notifications, setNotifications] = useState(3);

  // Sample data
  const overviewStats = [
    { title: "Total Rentals", value: 12, icon: <FaShoppingBag className="text-emerald" />, change: "+20%", trend: "up" },
    { title: "Total Sales", value: 5, icon: <FaMoneyBillWave className="text-gold" />, change: "+5%", trend: "up" },
    { title: "Total Earnings", value: "UGX 450,000", icon: <FaChartLine className="text-emerald" />, change: "+15%", trend: "up" },
    { title: "Pending Actions", value: 3, icon: <FaClock className="text-red-500" />, change: "-2", trend: "down" },
  ];

  const activeBookings = [
    { id: 1, item: "Red Dress", renter: "Jane Doe", date: "2025-09-20", status: "Pending", amount: 25000 },
    { id: 2, item: "Blue Suit", renter: "John Smith", date: "2025-09-22", status: "Active", amount: 35000 },
    { id: 3, item: "Gold Gown", renter: "Alice Kim", date: "2025-09-25", status: "Pending", amount: 45000 },
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

  const messages = [
    { id: 1, sender: "Jane Doe", content: "Hi! Is the red dress available next weekend?", time: "2h ago" },
    { id: 2, sender: "John Smith", content: "Can you extend the rental period for the blue suit?", time: "5h ago" },
  ];

  const earnings = [
    { id: 1, source: "Rental - Red Dress", amount: 25000, date: "2025-09-15" },
    { id: 2, source: "Sale - Blue Suit", amount: 70000, date: "2025-09-10" },
    { id: 3, source: "Rental - Gold Gown", amount: 45000, date: "2025-09-05" },
  ];

  const profile = {
    name: "Lowell Owuor",
    email: "lowell@example.com",
    joined: "March 2024",
    phone: "+254 700 123 456",
    bio: "Fashion enthusiast. Renting & selling premium outfits.",
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="side-panel">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-accent">Zuula Dashboard</h2>
          <div className="relative">
            <FaBell className="text-white cursor-pointer" />
            {notifications > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {notifications}
              </span>
            )}
          </div>
        </div>
        
        <nav className="flex flex-col space-y-2 flex-1">
          {[
            { id: "overview", label: "Overview", icon: <FaChartLine /> },
            { id: "listings", label: "My Listings", icon: <FaShoppingBag /> },
            { id: "bookings", label: "Bookings", icon: <FaCalendarAlt /> },
            { id: "messages", label: "Messages", icon: <FaEnvelope /> },
            { id: "earnings", label: "Earnings", icon: <FaMoneyBillWave /> },
            { id: "profile", label: "Profile", icon: <FaUserCheck /> },
          ].map(tab => (
            <button
              key={tab.id}
              className={`nav-link ${activeTab === tab.id ? "bg-accent-200 text-emerald font-semibold" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon} {tab.label}
            </button>
          ))}

          <div className="mt-auto pt-4 border-t border-accent-200">
            <button className="nav-link hover:bg-accent-100"><FaCog /> Settings</button>
            <button className="nav-link hover:bg-accent-100"><FaSignOutAlt /> Logout</button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content overflow-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold capitalize">
            {activeTab === "overview" ? "Dashboard Overview" : activeTab}
          </h1>
          <button className="btn-gold flex items-center gap-2"><FaPlus /> New Listing</button>
        </div>

        {/* Overview */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {overviewStats.map((stat, i) => (
                <div key={i} className="premium-card">
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-background-200 rounded-lg">{stat.icon}</div>
                    <span className={`text-sm font-medium ${stat.trend === "up" ? "text-emerald" : "text-red-600"}`}>
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="text-gray-600 text-sm">{stat.title}</h3>
                  <p className="mt-1 text-2xl font-bold text-text-primary">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Bookings */}
              <div className="premium-card">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><FaCalendarAlt /> Recent Bookings</h3>
                <div className="space-y-3">
                  {activeBookings.map((booking) => (
                    <div key={booking.id} className="flex justify-between items-center p-3 bg-background-100 rounded-lg">
                      <div>
                        <p className="font-medium">{booking.item}</p>
                        <p className="text-sm text-text-secondary">{booking.renter}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        booking.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
                        booking.status === "Active" ? "bg-emerald-100 text-emerald-800" :
                        "bg-gray-100 text-gray-800"
                      }`}>
                        {booking.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transactions */}
              <div className="premium-card">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><FaMoneyBillWave /> Recent Transactions</h3>
                <div className="space-y-3">
                  {recentTransactions.map((t) => (
                    <div key={t.id} className="flex justify-between items-center p-3 bg-background-100 rounded-lg">
                      <div>
                        <p className="font-medium">{t.item}</p>
                        <p className="text-sm text-text-secondary">{t.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-text-primary">UGX {t.amount.toLocaleString()}</p>
                        <p className="text-sm text-text-muted">{t.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Listings */}
        {activeTab === "listings" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Your Listings</h2>
              <button className="btn-primary flex items-center gap-2" onClick={() => setShowAddListing(true)}>
                <FaPlus /> Add New Item
              </button>
            </div>

            <div className="premium-card overflow-hidden">
              <table className="w-full">
                <thead className="bg-emerald-100">
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
                    <tr key={item.id} className="border-b hover:bg-background-200">
                      <td className="p-4 font-medium">{item.title}</td>
                      <td className="p-4">{item.price.toLocaleString()}</td>
                      <td className="p-4">{item.views}</td>
                      <td className="p-4">{item.bookings}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          item.available ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
                        }`}>
                          {item.available ? "Available" : "Unavailable"}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex justify-center gap-2">
                          <button className="p-2 text-emerald hover:bg-emerald-100 rounded-lg"><FaEdit /></button>
                          <button className="p-2 text-red-600 hover:bg-red-100 rounded-lg"><FaTimes /></button>
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
                <div className="premium-card w-full max-w-2xl">
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
                      <button type="submit" className="flex-1 btn-primary">
                        Create Listing
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Bookings */}
        {activeTab === "bookings" && (
          <div className="premium-card space-y-4">
            <h2 className="text-xl font-semibold mb-4">Your Bookings</h2>
            {activeBookings.map((b) => (
              <div key={b.id} className="flex justify-between items-center p-3 bg-background-100 rounded-lg">
                <div>
                  <p className="font-medium">{b.item}</p>
                  <p className="text-sm text-text-secondary">Booked by {b.renter} • {b.date}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  b.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
                  b.status === "Active" ? "bg-emerald-100 text-emerald-800" :
                  "bg-gray-100 text-gray-800"
                }`}>
                  {b.status}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Messages */}
        {activeTab === "messages" && (
          <div className="premium-card space-y-4">
            <h2 className="text-xl font-semibold mb-4">Messages</h2>
            {messages.map((m) => (
              <div key={m.id} className="p-3 bg-background-100 rounded-lg">
                <p className="font-medium">{m.sender}</p>
                <p className="text-sm text-text-secondary">{m.content}</p>
                <span className="text-xs text-text-muted">{m.time}</span>
              </div>
            ))}
          </div>
        )}

        {/* Earnings */}
        {activeTab === "earnings" && (
          <div className="premium-card">
            <h2 className="text-xl font-semibold mb-4">Earnings</h2>
            <table className="w-full">
              <thead className="bg-emerald-100">
                <tr>
                  <th className="p-4 text-left">Source</th>
                  <th className="p-4 text-left">Amount (UGX)</th>
                  <th className="p-4 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {earnings.map((e) => (
                  <tr key={e.id} className="border-b hover:bg-background-200">
                    <td className="p-4">{e.source}</td>
                    <td className="p-4">{e.amount.toLocaleString()}</td>
                    <td className="p-4">{e.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Profile */}
        {activeTab === "profile" && (
          <div className="premium-card space-y-4">
            <h2 className="text-xl font-semibold mb-4">Profile</h2>
            <p><span className="font-medium">Name:</span> {profile.name}</p>
            <p><span className="font-medium">Email:</span> {profile.email}</p>
            <p><span className="font-medium">Phone:</span> {profile.phone}</p>
            <p><span className="font-medium">Joined:</span> {profile.joined}</p>
            <p><span className="font-medium">Bio:</span> {profile.bio}</p>
          </div>
        )}
      </main>
    </div>
  );
}
