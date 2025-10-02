// src/pages/DashboardLayout.jsx
import React, { useState, useMemo } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  FaChartLine,
  FaShoppingBag,
  FaCalendarAlt,
  FaEnvelope,
  FaMoneyBillWave,
  FaUserCheck,
  FaPlus,
  FaBell,
  FaShareAlt,
  FaStar,
  FaCog,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/**
 * DashboardLayout.jsx
 * Drop into /dashboard route as layout shell. The <Outlet /> will render child pages
 * For a single-file demo we render the Overview inside the shell — replace Overview with <Outlet /> when using nested routes.
 */

export default function DashboardLayout() {
  const navigate = useNavigate();

  // ---- Mock data (replace with API data) ----
  const user = {
    id: 1,
    name: "Lowell Owuor",
    email: "lowell@example.com",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    verified: true,
    premium: false,
    profileCompletion: 78,
  };

  const kpis = {
    activeListings: 12,
    bookingsThisMonth: 8,
    earningsThisMonth: 450000,
    profileViews: 1240,
    unreadMessages: 3,
  };

  const recentBookings = [
    { id: 1, item: "Red Dress", renter: "Jane Doe", date: "2025-10-03", status: "Pending", amount: 25000 },
    { id: 2, item: "Blue Suit", renter: "John Smith", date: "2025-10-06", status: "Active", amount: 35000 },
    { id: 3, item: "Gold Gown", renter: "Alice Kim", date: "2025-10-09", status: "Upcoming", amount: 45000 },
  ];

  const upcomingBookings = [
    { id: 3, item: "Gold Gown", renter: "Alice Kim", date: "2025-10-09", status: "Upcoming", amount: 45000 },
    { id: 4, item: "Emerald Dress", renter: "Lina", date: "2025-10-12", status: "Upcoming", amount: 60000 },
  ];

  const messages = [
    { id: 1, sender: "Jane Doe", content: "Is the red dress available next weekend?", time: "2h ago" },
    { id: 2, sender: "John Smith", content: "Can you extend the rental for Blue Suit?", time: "5h ago" },
  ];

  const earningsData = [
    { name: "Week 1", earnings: 120000 },
    { name: "Week 2", earnings: 80000 },
    { name: "Week 3", earnings: 180000 },
    { name: "Week 4", earnings: 90000 },
  ];

  // ---- Local state for small interactions ----
  const [range, setRange] = useState("month"); // month | week
  const [notifCount, setNotifCount] = useState(3);

  const formattedEarnings = useMemo(() => {
    // convert to formatted string
    return kpis.earningsThisMonth.toLocaleString();
  }, [kpis.earningsThisMonth]);

  // ---- Handlers ----
  const goTo = (path) => navigate(path);
  const handleAddListing = () => goTo("/dashboard/listings/new");
  const handleViewAllListings = () => goTo("listings");
  const handleViewBookings = () => goTo("bookings");
  const handleViewMessages = () => goTo("messages");
  const handleViewEarnings = () => goTo("earnings");
  const handleProfile = () => goTo("profile");

  // ---- Small UI components inside the file for clarity ----
  const KPI = ({ title, value, subtitle, icon }) => (
    <div className="premium-card !p-4 !mb-0 border-t-4 border-accent">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary-100 rounded-lg text-primary-600">{icon}</div>
          <div>
            <p className="text-xs text-text-muted">{title}</p>
            <p className="text-xl font-bold text-primary-700">{value}</p>
          </div>
        </div>
        {subtitle && <span className="text-sm text-text-muted">{subtitle}</span>}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* SIDEBAR */}
          <aside className="side-panel !relative !w-72 !min-h-0 !shadow-lg !p-6 h-fit sticky top-6 self-start">
            <div className="flex items-center gap-3 mb-6">
              <img src={user.avatar} alt="Avatar" className="w-12 h-12 rounded-full border-2 border-accent" />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-background-100">{user.name}</h3>
                  {user.verified && <span className="text-sm text-accent-300 flex items-center gap-1"><FaUserCheck /> Verified</span>}
                </div>
                <p className="text-xs text-primary-200">{user.email}</p>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-xs text-primary-200 mb-2">Profile completion</p>
              <div className="w-full bg-primary-700 rounded-full h-3 overflow-hidden">
                <div style={{ width: `${user.profileCompletion}%` }} className="h-3 bg-accent rounded-full" />
              </div>
              <p className="text-xs text-primary-200 mt-2">{user.profileCompletion}% complete</p>
            </div>

            <div className="grid gap-2 mt-4">
              <button onClick={() => goTo("/dashboard")} className="nav-link !px-3 !py-2">
                <FaChartLine className="inline mr-3" /> Overview
              </button>
              <button onClick={() => goTo("/dashboard/listings")} className="nav-link !px-3 !py-2">
                <FaShoppingBag className="inline mr-3" /> My Listings
              </button>
              <button onClick={() => goTo("/dashboard/bookings")} className="nav-link !px-3 !py-2">
                <FaCalendarAlt className="inline mr-3" /> Bookings
              </button>
              <button onClick={() => goTo("/dashboard/messages")} className="nav-link !px-3 !py-2">
                <FaEnvelope className="inline mr-3" /> Messages
              </button>
              <button onClick={() => goTo("/dashboard/earnings")} className="nav-link !px-3 !py-2">
                <FaMoneyBillWave className="inline mr-3" /> Earnings
              </button>
              <button onClick={() => goTo("/dashboard/profile")} className="nav-link !px-3 !py-2">
                <FaUserCheck className="inline mr-3" /> Profile
              </button>
            </div>

            <div className="mt-6">
              <button onClick={handleAddListing} className="btn-primary w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2">
                <FaPlus /> Add Listing
              </button>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs text-primary-200">
              <div className="flex items-center gap-2">
                <FaBell /> <span>{notifCount} notifications</span>
              </div>
              <button onClick={() => setNotifCount(0)} className="text-primary-300 hover:text-accent-300">Clear</button>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <main className="flex-1 main-content !ml-0 !p-0">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <h1 className="text-4xl font-bold text-primary-800">Dashboard</h1>
                <p className="text-sm text-text-muted mt-1">Welcome back — manage your listings, bookings and earnings here.</p>
              </div>

              <div className="flex items-center gap-3">
                <button onClick={() => goTo("/dashboard/notifications")} className="p-3 rounded-lg hover:bg-background-200 text-text-secondary">
                  <FaBell />
                </button>
                <button onClick={() => goTo("/settings")} className="p-3 rounded-lg hover:bg-background-200 text-text-secondary">
                  <FaCog />
                </button>
                <button onClick={() => goTo("/dashboard/profile")} className="btn-primary !py-2 !px-4">Profile</button>
              </div>
            </div>

            {/* Overview Content */}
            <section className="space-y-6">
              {/* KPI Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <KPI title="Active Listings" value={kpis.activeListings} subtitle="live" icon={<FaShoppingBag />} />
                <KPI title="Bookings (this month)" value={kpis.bookingsThisMonth} subtitle="this month" icon={<FaCalendarAlt />} />
                <KPI title="Earnings (UGX)" value={`UGX ${formattedEarnings}`} subtitle="this month" icon={<FaMoneyBillWave />} />
                <KPI title="Profile Views" value={kpis.profileViews.toLocaleString()} subtitle="visits" icon={<FaChartLine />} />
                <KPI title="Unread Messages" value={kpis.unreadMessages} subtitle="messages" icon={<FaEnvelope />} />
              </div>

              {/* Quick Actions */}
              <div className="premium-card !p-4 !flex !flex-wrap !gap-3">
                <button onClick={handleAddListing} className="btn-primary py-2 px-4 rounded-xl flex items-center gap-2">
                  <FaPlus /> Add New Listing
                </button>
                <button onClick={handleViewAllListings} className="py-2 px-4 rounded-xl border border-background-300 hover:border-primary-400">View My Closet</button>
                <button onClick={handleViewBookings} className="py-2 px-4 rounded-xl border border-background-300 hover:border-primary-400">Manage Bookings</button>
                <button onClick={handleViewMessages} className="py-2 px-4 rounded-xl border border-background-300 hover:border-primary-400">Open Messages</button>
                <button onClick={handleViewEarnings} className="py-2 px-4 rounded-xl border border-background-300 hover:border-primary-400">Withdraw / Earnings</button>
                <button onClick={() => alert("Share your profile")} className="py-2 px-4 rounded-xl border border-background-300 hover:border-primary-400 flex items-center gap-2"><FaShareAlt /> Share Profile</button>
              </div>

              {/* Two-column grid: Activity & Earnings */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Activity & Bookings */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="premium-card !p-4">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-semibold text-primary-700">Recent Activity</h3>
                      <button onClick={() => goTo("/dashboard/activity")} className="text-sm text-text-muted hover:text-primary-600">View all</button>
                    </div>
                    <div className="space-y-3">
                      {recentBookings.map((b) => (
                        <div key={b.id} className="flex justify-between items-center p-3 rounded-xl bg-background-100 border border-background-200">
                          <div>
                            <p className="font-medium text-text-primary">{b.item}</p>
                            <p className="text-xs text-text-muted">Booked by {b.renter} • {b.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-primary-700">UGX {b.amount.toLocaleString()}</p>
                            <span className={`text-xs px-2 py-1 rounded-full ${b.status === "Pending" ? "bg-accent-100 text-accent-800" : "bg-primary-100 text-primary-800"}`}>{b.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="premium-card !p-4">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-semibold text-primary-700">Upcoming Bookings</h3>
                      <button onClick={() => goTo("/dashboard/bookings")} className="text-sm text-text-muted hover:text-primary-600">Manage</button>
                    </div>
                    <div className="space-y-3">
                      {upcomingBookings.map((b) => (
                        <div key={b.id} className="flex items-center justify-between p-3 rounded-xl bg-background-100 border border-background-200">
                          <div>
                            <p className="font-medium text-text-primary">{b.item}</p>
                            <p className="text-xs text-text-muted">For {b.renter} • {b.date}</p>
                          </div>
                          <div>
                            <p className="font-semibold text-primary-700">UGX {b.amount.toLocaleString()}</p>
                          </div>
                        </div>
                      ))}
                      {upcomingBookings.length === 0 && <p className="text-sm text-text-muted">No upcoming bookings</p>}
                    </div>
                  </div>
                </div>

                {/* Earnings & Messages */}
                <div className="space-y-4">
                  <div className="premium-card !p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-primary-700">Earnings Snapshot</h3>
                      <div className="flex items-center gap-2">
                        <button onClick={() => setRange("week")} className={`px-2 py-1 rounded ${range === "week" ? "btn-primary !py-1 !px-2" : "bg-background-100"}`}>Week</button>
                        <button onClick={() => setRange("month")} className={`px-2 py-1 rounded ${range === "month" ? "btn-primary !py-1 !px-2" : "bg-background-100"}`}>Month</button>
                      </div>
                    </div>
                    <div style={{ height: 180 }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={earningsData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                          <XAxis dataKey="name" stroke="#4A5568" />
                          <YAxis stroke="#4A5568" />
                          <Tooltip />
                          <Line type="monotone" dataKey="earnings" stroke="#046C4E" strokeWidth={2} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-sm text-text-muted">
                      <div>UGX {formattedEarnings} this month</div>
                      <div><button onClick={() => goTo("/dashboard/earnings")} className="text-primary-600 font-semibold hover:text-primary-700">View full report</button></div>
                    </div>
                  </div>

                  <div className="premium-card !p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-primary-700">Messages</h3>
                      <button onClick={() => goTo("/dashboard/messages")} className="text-sm text-text-muted hover:text-primary-600">Open</button>
                    </div>
                    <div className="space-y-3">
                      {messages.map((m) => (
                        <div key={m.id} className="p-3 rounded-xl bg-background-100 border border-background-200 flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-background-300 flex items-center justify-center text-text-muted font-semibold"> {m.sender[0]} </div>
                          <div className="flex-1">
                            <p className="font-medium text-text-primary">{m.sender}</p>
                            <p className="text-sm text-text-muted">{m.content}</p>
                          </div>
                          <div className="text-xs text-text-muted">{m.time}</div>
                        </div>
                      ))}
                      {messages.length === 0 && <p className="text-sm text-text-muted">No messages yet</p>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom row: Trust, Promo */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="premium-card !p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-primary-700">Trust & Reputation</h4>
                      <p className="text-sm text-text-muted">Average rating <span className="font-bold">4.8</span> • 128 reviews</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaStar className="text-accent" />
                      <FaUserCheck className="text-primary-500" />
                    </div>
                  </div>
                  <div className="mt-3">
                    <button onClick={() => goTo("/dashboard/profile/verification")} className="btn-primary w-full py-2 rounded-xl">Complete Verification</button>
                    <button onClick={() => goTo("/dashboard/reviews")} className="w-full mt-2 py-2 rounded-xl border border-background-300 hover:border-primary-400">View reviews</button>
                  </div>
                </div>

                <div className="premium-card !p-4 md:col-span-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-primary-700">Upgrade to Premium</h4>
                      <p className="text-sm text-text-muted">Get gold badge, priority placement & higher conversion.</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-accent">Gold</p>
                      <p className="text-xs text-text-muted">Special offer for first 100 creators</p>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-3">
                    <button onClick={() => goTo("/pricing")} className="btn-gold py-2 px-4 rounded-xl font-semibold">Upgrade</button>
                    <button onClick={() => goTo("/how-it-works")} className="py-2 px-4 rounded-xl border border-background-300 hover:border-primary-400">Learn more</button>
                  </div>
                </div>
              </div>
            </section>

            {/* If you are using nested routes, replace the Overview below with <Outlet /> */}
            {/* <div className="mt-8"><Outlet /></div> */}
          </main>
        </div>
      </div>
    </div>
  );
}