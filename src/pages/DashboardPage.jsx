// src/pages/DashboardPage.jsx
import { useState } from "react";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const overviewStats = [
    { title: "Total Rentals", value: 12 },
    { title: "Total Sales", value: 5 },
    { title: "Total Earnings (UGX)", value: 450000 },
    { title: "Pending Bookings", value: 3 },
  ];

  const activeBookings = [
    { id: 1, item: "Red Dress", renter: "Jane Doe", date: "2025-09-20", status: "Pending" },
    { id: 2, item: "Blue Suit", renter: "John Smith", date: "2025-09-22", status: "Active" },
    { id: 3, item: "Gold Gown", renter: "Alice Kim", date: "2025-09-25", status: "Pending" },
  ];

  const listings = [
    { id: 1, title: "Red Dress", price: 50000, available: true },
    { id: 2, title: "Blue Suit", price: 70000, available: false },
    { id: 3, title: "Gold Gown", price: 120000, available: true },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 flex flex-col space-y-6">
        <h2 className="text-2xl font-bold text-emerald-600">Dashboard</h2>
        <nav className="flex flex-col space-y-2">
          <button
            className={`text-left py-2 px-4 rounded hover:bg-emerald-50 ${
              activeTab === "overview" ? "bg-emerald-100 font-semibold" : ""
            }`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`text-left py-2 px-4 rounded hover:bg-emerald-50 ${
              activeTab === "listings" ? "bg-emerald-100 font-semibold" : ""
            }`}
            onClick={() => setActiveTab("listings")}
          >
            My Listings
          </button>
          <button
            className={`text-left py-2 px-4 rounded hover:bg-emerald-50 ${
              activeTab === "bookings" ? "bg-emerald-100 font-semibold" : ""
            }`}
            onClick={() => setActiveTab("bookings")}
          >
            Bookings
          </button>
          <button
            className={`text-left py-2 px-4 rounded hover:bg-emerald-50 ${
              activeTab === "profile" ? "bg-emerald-100 font-semibold" : ""
            }`}
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Overview */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold mb-4">Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {overviewStats.map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-md text-center">
                  <h3 className="text-xl font-semibold">{stat.title}</h3>
                  <p className="mt-2 text-2xl font-bold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* My Listings */}
        {activeTab === "listings" && (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold mb-4">My Listings</h1>
            <table className="w-full bg-white rounded-2xl shadow-md overflow-hidden">
              <thead className="bg-emerald-100">
                <tr>
                  <th className="p-4 text-left">Item</th>
                  <th className="p-4 text-left">Price (UGX/day)</th>
                  <th className="p-4 text-left">Availability</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {listings.map((item) => (
                  <tr key={item.id} className="border-b last:border-0">
                    <td className="p-4">{item.title}</td>
                    <td className="p-4">{item.price.toLocaleString()}</td>
                    <td className="p-4">
                      {item.available ? (
                        <span className="text-green-600 font-semibold">Available</span>
                      ) : (
                        <span className="text-red-600 font-semibold">Unavailable</span>
                      )}
                    </td>
                    <td className="p-4 space-x-2">
                      <button className="bg-emerald-600 text-white px-3 py-1 rounded hover:bg-emerald-700">
                        Edit
                      </button>
                      <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="mt-4 bg-emerald-600 text-white px-6 py-3 rounded-2xl hover:bg-emerald-700">
              Add New Item
            </button>
          </div>
        )}

        {/* Bookings */}
        {activeTab === "bookings" && (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold mb-4">Bookings</h1>
            <table className="w-full bg-white rounded-2xl shadow-md overflow-hidden">
              <thead className="bg-emerald-100">
                <tr>
                  <th className="p-4 text-left">Item</th>
                  <th className="p-4 text-left">Renter</th>
                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {activeBookings.map((booking) => (
                  <tr key={booking.id} className="border-b last:border-0">
                    <td className="p-4">{booking.item}</td>
                    <td className="p-4">{booking.renter}</td>
                    <td className="p-4">{booking.date}</td>
                    <td className="p-4">{booking.status}</td>
                    <td className="p-4 space-x-2">
                      {booking.status === "Pending" && (
                        <>
                          <button className="bg-emerald-600 text-white px-3 py-1 rounded hover:bg-emerald-700">
                            Approve
                          </button>
                          <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                            Reject
                          </button>
                        </>
                      )}
                      {booking.status === "Active" && (
                        <button className="bg-gray-600 text-white px-3 py-1 rounded" disabled>
                          In Progress
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Profile */}
        {activeTab === "profile" && (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold mb-4">Profile</h1>
            <form className="bg-white p-6 rounded-2xl shadow-md space-y-4 max-w-xl">
              <div>
                <label className="block font-semibold mb-1">Name</label>
                <input type="text" className="w-full border p-2 rounded" placeholder="Your Name" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Email</label>
                <input type="email" className="w-full border p-2 rounded" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Phone</label>
                <input type="text" className="w-full border p-2 rounded" placeholder="+256 700 000000" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Upload ID Verification</label>
                <input type="file" className="w-full" />
              </div>
              <button className="bg-emerald-600 text-white px-6 py-3 rounded-2xl hover:bg-emerald-700">
                Save Profile
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
