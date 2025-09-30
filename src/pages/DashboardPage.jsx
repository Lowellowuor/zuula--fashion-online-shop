// src/pages/DashboardPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FaBell, FaEnvelope, FaChartLine, FaMoneyBillWave, 
  FaCalendarAlt, FaUserCheck, FaShoppingBag,
  FaPlus, FaEdit, FaTimes, FaCheck, FaClock, 
  FaFileUpload, FaCog, FaSignOutAlt, FaHeart,
  FaEye, FaShare, FaLink, FaWhatsapp, FaFacebook, FaTwitter, FaCopy
} from "react-icons/fa";

export default function DashboardPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const [showAddListing, setShowAddListing] = useState(false);
  const [notifications, setNotifications] = useState(3);
  
  // Share modal state
  const [showShareModal, setShowShareModal] = useState(false);
  const [currentShareItem, setCurrentShareItem] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);

  // Edit modal states
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const [showEditListingModal, setShowEditListingModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  // Form states
  const [profileForm, setProfileForm] = useState({
    name: "Lowell Owuor",
    email: "lowell@example.com",
    phone: "+254 700 123 456",
    bio: "Fashion enthusiast. Renting & selling premium outfits.",
    location: "Kampala, Uganda"
  });

  const [listingForm, setListingForm] = useState({
    title: "",
    price: "",
    deposit: "",
    description: "",
    tags: ""
  });

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
    { 
      id: 1, 
      title: "Red Dress", 
      price: 50000, 
      available: true, 
      views: 124, 
      bookings: 5,
      img: "https://images.unsplash.com/photo-1596466500176-aff9f0b2a4a5?w=300&h=400&fit=crop",
      tags: ["Party", "Evening", "Red"],
      likes: 24,
      description: "Beautiful red dress perfect for evening parties and special occasions."
    },
    { 
      id: 2, 
      title: "Blue Suit", 
      price: 70000, 
      available: false, 
      views: 89, 
      bookings: 3,
      img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop",
      tags: ["Formal", "Business", "Blue"],
      likes: 18,
      description: "Elegant blue suit for business meetings and formal events."
    },
    { 
      id: 3, 
      title: "Gold Gown", 
      price: 120000, 
      available: true, 
      views: 215, 
      bookings: 8,
      img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=300&h=400&fit=crop",
      tags: ["Wedding", "Luxury", "Gold"],
      likes: 32,
      description: "Stunning gold gown for weddings and luxury events."
    },
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
    location: "Kampala, Uganda"
  };

  // Share functions
  const handleShare = (item) => {
    setCurrentShareItem(item);
    setShowShareModal(true);
    setCopySuccess(false);
  };

  const closeShareModal = () => {
    setShowShareModal(false);
    setCurrentShareItem(null);
    setCopySuccess(false);
  };

  const copyToClipboard = () => {
    const shareUrl = `${window.location.origin}/item/${currentShareItem?.id}`;
    navigator.clipboard.writeText(shareUrl);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const shareOnPlatform = (platform) => {
    const shareUrl = `${window.location.origin}/item/${currentShareItem?.id}`;
    const text = `Check out this amazing outfit: ${currentShareItem?.title}`;
    
    const urls = {
      whatsapp: `https://wa.me/?text=${encodeURIComponent(text + ' ' + shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`
    };

    window.open(urls[platform], '_blank', 'width=600,height=400');
  };

  // Edit profile functions
  const handleEditProfile = () => {
    setProfileForm({
      name: profile.name,
      email: profile.email,
      phone: profile.phone,
      bio: profile.bio,
      location: profile.location
    });
    setShowEditProfileModal(true);
  };

  const closeEditProfileModal = () => {
    setShowEditProfileModal(false);
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    // Here you would typically update the profile in your database
    console.log('Updating profile:', profileForm);
    closeEditProfileModal();
    alert('Profile updated successfully!');
  };

  // Edit listing functions
  const handleEditListing = (item) => {
    setEditingItem(item);
    setListingForm({
      title: item.title,
      price: item.price,
      deposit: "10000", // Default deposit
      description: item.description,
      tags: item.tags.join(', ')
    });
    setShowEditListingModal(true);
  };

  const closeEditListingModal = () => {
    setShowEditListingModal(false);
    setEditingItem(null);
    setListingForm({ title: "", price: "", deposit: "", description: "", tags: "" });
  };

  const handleListingSubmit = (e) => {
    e.preventDefault();
    // Here you would typically update the listing in your database
    console.log('Updating listing:', editingItem?.id, listingForm);
    closeEditListingModal();
    alert('Listing updated successfully!');
  };

  // View function
  const handleView = (itemId) => {
    navigate(`/item/${itemId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 bg-white rounded-2xl shadow-lg border border-background-300 p-6 h-fit">
            <h2 className="text-2xl font-bold text-forest mb-6 font-heading">Dashboard</h2>
            
            <nav className="space-y-2">
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
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                    activeTab === tab.id 
                      ? "bg-emerald text-white shadow-lg" 
                      : "text-slate-grey hover:bg-background-200 hover:text-forest"
                  } font-body`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <h1 className="text-3xl font-bold text-forest font-heading capitalize">
                {activeTab === "overview" ? "Dashboard Overview" : activeTab.replace(/([A-Z])/g, ' $1').trim()}
              </h1>
              {activeTab === "listings" && (
                <button 
                  onClick={() => setShowAddListing(true)}
                  className="btn-primary flex items-center gap-2 px-6 py-3"
                >
                  <FaPlus /> New Listing
                </button>
              )}
            </div>

            {/* Overview */}
            {activeTab === "overview" && (
              <div className="space-y-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {overviewStats.map((stat, i) => (
                    <div key={i} className="bg-white rounded-2xl shadow-lg border border-background-300 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-background-200 rounded-lg">{stat.icon}</div>
                        <span className={`text-sm font-medium ${stat.trend === "up" ? "text-emerald" : "text-red-600"}`}>
                          {stat.change}
                        </span>
                      </div>
                      <h3 className="text-slate-grey text-sm font-body mb-1">{stat.title}</h3>
                      <p className="text-2xl font-bold text-forest font-heading">{stat.value}</p>
                    </div>
                  ))}
                </div>

                {/* Activity Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Recent Bookings */}
                  <div className="bg-white rounded-2xl shadow-lg border border-background-300 p-6">
                    <h3 className="text-lg font-semibold text-forest mb-4 flex items-center gap-2 font-heading">
                      <FaCalendarAlt className="text-emerald" /> Recent Bookings
                    </h3>
                    <div className="space-y-4">
                      {activeBookings.map((booking) => (
                        <div key={booking.id} className="flex justify-between items-center p-4 bg-background-100 rounded-xl">
                          <div>
                            <p className="font-semibold text-forest font-body">{booking.item}</p>
                            <p className="text-sm text-slate-grey font-body">Booked by {booking.renter}</p>
                          </div>
                          <div className="text-right">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              booking.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
                              booking.status === "Active" ? "bg-emerald-100 text-emerald-800" :
                              "bg-background-300 text-slate-grey"
                            } font-body`}>
                              {booking.status}
                            </span>
                            <p className="text-sm font-semibold text-forest mt-1 font-body">UGX {booking.amount.toLocaleString()}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recent Transactions */}
                  <div className="bg-white rounded-2xl shadow-lg border border-background-300 p-6">
                    <h3 className="text-lg font-semibold text-forest mb-4 flex items-center gap-2 font-heading">
                      <FaMoneyBillWave className="text-emerald" /> Recent Transactions
                    </h3>
                    <div className="space-y-4">
                      {recentTransactions.map((t) => (
                        <div key={t.id} className="flex justify-between items-center p-4 bg-background-100 rounded-xl">
                          <div>
                            <p className="font-semibold text-forest font-body">{t.item}</p>
                            <p className="text-sm text-slate-grey font-body">{t.type}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-forest font-body">UGX {t.amount.toLocaleString()}</p>
                            <p className="text-sm text-slate-grey font-body">{t.date}</p>
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {listings.map((item) => (
                    <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-background-300 hover:shadow-xl transition-all">
                      <div className="relative">
                        <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                        {!item.available && (
                          <div className="absolute inset-0 bg-charcoal bg-opacity-70 flex items-center justify-center">
                            <span className="text-white font-bold bg-red-600 px-3 py-1 rounded-lg font-body">Not Available</span>
                          </div>
                        )}
                        <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-lg">
                          <FaHeart className="text-background-500 hover:text-gold cursor-pointer" />
                        </div>
                        <div className="absolute bottom-3 left-3">
                          <span className="bg-forest text-white text-xs px-2 py-1 rounded font-body">UGX {item.price.toLocaleString()}/day</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-forest mb-2 font-heading">{item.title}</h4>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {item.tags.map((tag, index) => (
                            <span key={index} className="bg-background-100 text-forest text-xs px-2 py-1 rounded font-body">{tag}</span>
                          ))}
                        </div>
                        <div className="flex justify-between items-center text-sm text-slate-grey mb-4">
                          <div className="flex items-center gap-1">
                            <FaEye className="text-emerald" /> {item.views} views
                          </div>
                          <div className="flex items-center gap-1">
                            <FaCalendarAlt className="text-emerald" /> {item.bookings} bookings
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button 
                            onClick={() => handleEditListing(item)}
                            className="flex-1 py-2 btn-primary text-sm flex items-center justify-center gap-2"
                          >
                            <FaEdit size={12} /> Edit
                          </button>
                          <button 
                            onClick={() => handleView(item.id)}
                            className="flex-1 py-2 border border-background-300 text-forest rounded-lg hover:bg-background-100 transition text-sm"
                          >
                            View
                          </button>
                          <button 
                            onClick={() => handleShare(item)}
                            className="px-3 py-2 border border-background-300 text-forest rounded-lg hover:bg-background-100 transition text-sm flex items-center gap-1"
                          >
                            <FaShare size={12} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add Listing Modal */}
                {showAddListing && (
                  <div className="fixed inset-0 bg-charcoal bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                      <div className="p-6">
                        <div className="flex justify-between items-center mb-6">
                          <h3 className="text-2xl font-bold text-forest font-heading">Add New Listing</h3>
                          <button onClick={() => setShowAddListing(false)} className="text-slate-grey hover:text-charcoal transition-colors">
                            <FaTimes size={20} />
                          </button>
                        </div>
                        <form className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-forest mb-2 font-body">Item Title</label>
                            <input 
                              type="text" 
                              className="w-full px-4 py-3 border-2 border-background-300 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald font-body"
                              placeholder="e.g., Designer Wedding Gown" 
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-forest mb-2 font-body">Description</label>
                            <textarea 
                              className="w-full px-4 py-3 border-2 border-background-300 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald font-body"
                              rows={3} 
                              placeholder="Describe your item..."
                            ></textarea>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-forest mb-2 font-body">Upload Photos</label>
                            <div className="border-2 border-dashed border-background-300 rounded-xl p-8 text-center hover:bg-background-100 transition-colors cursor-pointer">
                              <FaFileUpload className="text-background-400 text-3xl mx-auto mb-3" />
                              <p className="text-slate-grey font-body">Drag & drop photos or click to browse</p>
                              <p className="text-sm text-background-500 mt-1 font-body">JPEG, PNG up to 10MB</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-forest mb-2 font-body">Price per day (UGX)</label>
                              <input 
                                type="number" 
                                className="w-full px-4 py-3 border-2 border-background-300 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald font-body"
                                placeholder="50000" 
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-forest mb-2 font-body">Deposit (UGX)</label>
                              <input 
                                type="number" 
                                className="w-full px-4 py-3 border-2 border-background-300 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald font-body"
                                placeholder="10000" 
                              />
                            </div>
                          </div>
                          <div className="flex gap-3 pt-4">
                            <button 
                              type="button" 
                              onClick={() => setShowAddListing(false)} 
                              className="flex-1 border-2 border-background-300 text-slate-grey py-3 rounded-xl hover:bg-background-100 transition-all font-body font-semibold"
                            >
                              Cancel
                            </button>
                            <button 
                              type="submit" 
                              className="flex-1 bg-emerald text-white py-3 rounded-xl hover:bg-forest transition-all font-body font-semibold shadow-lg hover:shadow-xl"
                            >
                              Create Listing
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Bookings */}
            {activeTab === "bookings" && (
              <div className="bg-white rounded-2xl shadow-lg border border-background-300 p-6">
                <h2 className="text-2xl font-semibold text-forest mb-6 font-heading">Your Bookings</h2>
                <div className="space-y-4">
                  {activeBookings.map((b) => (
                    <div key={b.id} className="flex justify-between items-center p-4 bg-background-100 rounded-xl">
                      <div>
                        <p className="font-semibold text-forest font-body">{b.item}</p>
                        <p className="text-sm text-slate-grey font-body">Booked by {b.renter} • {b.date}</p>
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          b.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
                          b.status === "Active" ? "bg-emerald-100 text-emerald-800" :
                          "bg-background-300 text-slate-grey"
                        } font-body`}>
                          {b.status}
                        </span>
                        <p className="text-sm font-semibold text-forest mt-1 font-body">UGX {b.amount.toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Messages */}
            {activeTab === "messages" && (
              <div className="bg-white rounded-2xl shadow-lg border border-background-300 p-6">
                <h2 className="text-2xl font-semibold text-forest mb-6 font-heading">Messages</h2>
                <div className="space-y-4">
                  {messages.map((m) => (
                    <div key={m.id} className="p-4 bg-background-100 rounded-xl hover:bg-background-200 transition-colors cursor-pointer">
                      <p className="font-semibold text-forest font-body">{m.sender}</p>
                      <p className="text-slate-grey font-body mt-1">{m.content}</p>
                      <span className="text-xs text-background-500 font-body">{m.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Earnings */}
            {activeTab === "earnings" && (
              <div className="bg-white rounded-2xl shadow-lg border border-background-300 overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-forest mb-6 font-heading">Earnings</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-background-200">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-grey uppercase tracking-wider font-body">Source</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-grey uppercase tracking-wider font-body">Amount (UGX)</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-grey uppercase tracking-wider font-body">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-background-300">
                      {earnings.map((e) => (
                        <tr key={e.id} className="hover:bg-background-100 transition-colors">
                          <td className="px-6 py-4 font-medium text-forest font-body">{e.source}</td>
                          <td className="px-6 py-4 font-semibold text-forest font-body">{e.amount.toLocaleString()}</td>
                          <td className="px-6 py-4 text-slate-grey font-body">{e.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Profile */}
            {activeTab === "profile" && (
              <div className="bg-white rounded-2xl shadow-lg border border-background-300 p-6">
                <h2 className="text-2xl font-semibold text-forest mb-6 font-heading">Profile</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                      alt="Profile"
                      className="w-20 h-20 rounded-full object-cover border-4 border-emerald"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-forest font-heading">{profile.name}</h3>
                      <p className="text-slate-grey font-body">{profile.bio}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-grey font-body">Email</label>
                      <p className="text-forest font-semibold font-body">{profile.email}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-grey font-body">Phone</label>
                      <p className="text-forest font-semibold font-body">{profile.phone}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-grey font-body">Location</label>
                      <p className="text-forest font-semibold font-body">{profile.location}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-grey font-body">Joined</label>
                      <p className="text-forest font-semibold font-body">{profile.joined}</p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <button 
                      onClick={handleEditProfile}
                      className="btn-primary flex items-center gap-2"
                    >
                      <FaEdit /> Edit Profile
                    </button>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && currentShareItem && (
        <div className="fixed inset-0 bg-charcoal bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-forest font-heading">Share Outfit</h3>
                <button onClick={closeShareModal} className="text-slate-grey hover:text-charcoal transition-colors">
                  <FaTimes size={20} />
                </button>
              </div>
              
              <div className="flex gap-4 mb-6">
                <div className="w-20 h-20 bg-background-300 rounded-xl overflow-hidden shadow-lg">
                  <img src={currentShareItem.img} alt={currentShareItem.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg text-forest font-heading mb-2">{currentShareItem.title}</h4>
                  <p className="text-emerald font-bold text-lg font-body">UGX {currentShareItem.price.toLocaleString()}/day</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-3 justify-center">
                  <button 
                    onClick={() => shareOnPlatform('whatsapp')}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-green-50 text-green-600 hover:bg-green-100 transition-all"
                  >
                    <FaWhatsapp size={24} />
                    <span className="text-sm font-medium">WhatsApp</span>
                  </button>
                  
                  <button 
                    onClick={() => shareOnPlatform('facebook')}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all"
                  >
                    <FaFacebook size={24} />
                    <span className="text-sm font-medium">Facebook</span>
                  </button>
                  
                  <button 
                    onClick={() => shareOnPlatform('twitter')}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-blue-50 text-blue-400 hover:bg-blue-100 transition-all"
                  >
                    <FaTwitter size={24} />
                    <span className="text-sm font-medium">Twitter</span>
                  </button>
                </div>
                
                <div className="border-t border-background-300 pt-4">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      readOnly
                      value={`${window.location.origin}/item/${currentShareItem.id}`}
                      className="flex-1 px-4 py-3 border-2 border-background-300 rounded-xl text-sm font-body"
                    />
                    <button
                      onClick={copyToClipboard}
                      className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                        copySuccess 
                          ? 'bg-emerald text-white' 
                          : 'bg-background-200 text-forest hover:bg-background-300'
                      }`}
                    >
                      <FaCopy size={16} />
                      {copySuccess ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Profile Modal */}
      {showEditProfileModal && (
        <div className="fixed inset-0 bg-charcoal bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-forest font-heading">Edit Profile</h3>
                <button onClick={closeEditProfileModal} className="text-slate-grey hover:text-charcoal transition-colors">
                  <FaTimes size={20} />
                </button>
              </div>
              
              <form onSubmit={handleProfileSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-forest mb-2 font-body">Full Name</label>
                  <input
                    type="text"
                    value={profileForm.name}
                    onChange={(e) => setProfileForm({...profileForm, name: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-background-300 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald font-body"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-forest mb-2 font-body">Email</label>
                  <input
                    type="email"
                    value={profileForm.email}
                    onChange={(e) => setProfileForm({...profileForm, email: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-background-300 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald font-body"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-forest mb-2 font-body">Phone</label>
                  <input
                    type="tel"
                    value={profileForm.phone}
                    onChange={(e) => setProfileForm({...profileForm, phone: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-background-300 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald font-body"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-forest mb-2 font-body">Location</label>
                  <input
                    type="text"
                    value={profileForm.location}
                    onChange={(e) => setProfileForm({...profileForm, location: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-background-300 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald font-body"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-forest mb-2 font-body">Bio</label>
                  <textarea
                    value={profileForm.bio}
                    onChange={(e) => setProfileForm({...profileForm, bio: e.target.value})}
                    rows="3"
                    className="w-full px-4 py-3 border-2 border-background-300 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald font-body"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-emerald text-white py-4 rounded-xl font-semibold hover:bg-forest transition-all shadow-lg hover:shadow-xl font-body text-lg"
                >
                  Update Profile
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Edit Listing Modal */}
      {showEditListingModal && editingItem && (
        <div className="fixed inset-0 bg-charcoal bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-forest font-heading">Edit Listing</h3>
                <button onClick={closeEditListingModal} className="text-slate-grey hover:text-charcoal transition-colors">
                  <FaTimes size={20} />
                </button>
              </div>
              
              <form onSubmit={handleListingSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-forest mb-2 font-body">Item Title</label>
                  <input
                    type="text"
                    value={listingForm.title}
                    onChange={(e) => setListingForm({...listingForm, title: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-background-300 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald font-body"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-forest mb-2 font-body">Description</label>
                  <textarea
                    value={listingForm.description}
                    onChange={(e) => setListingForm({...listingForm, description: e.target.value})}
                    rows="3"
                    className="w-full px-4 py-3 border-2 border-background-300 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald font-body"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-forest mb-2 font-body">Price per day (UGX)</label>
                    <input
                      type="number"
                      value={listingForm.price}
                      onChange={(e) => setListingForm({...listingForm, price: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-background-300 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald font-body"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-forest mb-2 font-body">Deposit (UGX)</label>
                    <input
                      type="number"
                      value={listingForm.deposit}
                      onChange={(e) => setListingForm({...listingForm, deposit: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-background-300 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald font-body"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-forest mb-2 font-body">Tags (comma separated)</label>
                  <input
                    type="text"
                    value={listingForm.tags}
                    onChange={(e) => setListingForm({...listingForm, tags: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-background-300 rounded-xl focus:ring-2 focus:ring-emerald focus:border-emerald font-body"
                    placeholder="Wedding, Luxury, Gold"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-forest mb-2 font-body">Upload New Photos</label>
                  <div className="border-2 border-dashed border-background-300 rounded-xl p-8 text-center hover:bg-background-100 transition-colors cursor-pointer">
                    <FaFileUpload className="text-background-400 text-3xl mx-auto mb-3" />
                    <p className="text-slate-grey font-body">Drag & drop photos or click to browse</p>
                    <p className="text-sm text-background-500 mt-1 font-body">JPEG, PNG up to 10MB</p>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-emerald text-white py-4 rounded-xl font-semibold hover:bg-forest transition-all shadow-lg hover:shadow-xl font-body text-lg"
                >
                  Update Listing
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}