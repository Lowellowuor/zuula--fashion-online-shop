// src/pages/ProfilePage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCheckCircle,
  FaEdit,
  FaUpload,
  FaEnvelope,
  FaStar,
  FaCog,
  FaSignOutAlt,
  FaHeart,
  FaShoppingBag,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaShieldAlt,
  FaShare,
  FaLink,
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaCopy,
  FaTimes
} from "react-icons/fa";

export default function ProfilePage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("closet");
  const [user, setUser] = useState({
    name: "Susan Kamya",
    username: "@susankamya_fashion",
    isVerified: true,
    isPremium: false,
    listingsCount: 12,
    followers: 450,
    following: 200,
    bio: "Fashion enthusiast. Renting & selling trendy outfits for every occasion.",
    rating: 4.8,
    joinDate: "January 2024",
    location: "Kampala, Uganda"
  });

  // Share modal state
  const [showShareModal, setShowShareModal] = useState(false);
  const [currentShareItem, setCurrentShareItem] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);

  const listings = [
    { 
      id: 1, 
      title: "Designer Wedding Gown", 
      price: 50000, 
      deposit: 15000,
      buyPrice: 250000,
      rent: true,
      buy: true,
      img: "https://images.unsplash.com/photo-1596466500176-aff9f0b2a4a5?w=300&h=400&fit=crop", 
      likes: 24, 
      saves: 12, 
      tags: ["Wedding", "Luxury", "White"], 
      description: "Beautiful designer wedding gown perfect for your special day.",
      category: "Wedding",
      size: "M",
      color: "White",
      condition: "Excellent",
      location: "Kampala",
      available: true,
      verified: true
    },
    { 
      id: 2, 
      title: "Elegant Party Dress", 
      price: 30000, 
      deposit: 10000,
      buyPrice: 120000,
      rent: true,
      buy: true,
      img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop", 
      likes: 18, 
      saves: 8, 
      tags: ["Party", "Cocktail", "Red"], 
      description: "Stunning red cocktail dress for parties and special events.",
      category: "Party",
      size: "S",
      color: "Red",
      condition: "Excellent",
      location: "Kampala",
      available: true,
      verified: true
    },
    { 
      id: 3, 
      title: "Graduation Outfit", 
      price: 40000, 
      deposit: 12000,
      buyPrice: 180000,
      rent: true,
      buy: true,
      img: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=300&h=400&fit=crop", 
      likes: 32, 
      saves: 15, 
      tags: ["Graduation", "Formal", "Blue"], 
      description: "Elegant blue outfit perfect for graduation ceremonies.",
      category: "Graduation",
      size: "L",
      color: "Blue",
      condition: "Very Good",
      location: "Kampala",
      available: true,
      verified: true
    },
    { 
      id: 4, 
      title: "Traditional Gomesi", 
      price: 45000, 
      deposit: 15000,
      buyPrice: 200000,
      rent: true,
      buy: true,
      img: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=300&h=400&fit=crop", 
      likes: 41, 
      saves: 22, 
      tags: ["Traditional", "Cultural", "Multi-color"], 
      description: "Authentic Ugandan Gomesi for cultural events and ceremonies.",
      category: "Cultural",
      size: "M",
      color: "Multi-color",
      condition: "Good",
      location: "Kampala",
      available: true,
      verified: true
    },
    { 
      id: 5, 
      title: "Evening Gown", 
      price: 35000, 
      deposit: 10000,
      buyPrice: 150000,
      rent: true,
      buy: true,
      img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=300&h=400&fit=crop", 
      likes: 27, 
      saves: 14, 
      tags: ["Evening", "Formal", "Black"], 
      description: "Classic black evening gown for formal events.",
      category: "Formal",
      size: "M",
      color: "Black",
      condition: "Excellent",
      location: "Kampala",
      available: true,
      verified: true
    },
    { 
      id: 6, 
      title: "Cocktail Dress", 
      price: 25000, 
      deposit: 8000,
      buyPrice: 100000,
      rent: true,
      buy: true,
      img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&h=400&fit=crop", 
      likes: 19, 
      saves: 9, 
      tags: ["Cocktail", "Party", "Green"], 
      description: "Beautiful green cocktail dress for parties and gatherings.",
      category: "Party",
      size: "S",
      color: "Green",
      condition: "Good",
      location: "Kampala",
      available: true,
      verified: true
    },
  ];

  const transactions = [
    { id: 1, item: "Evening Gown", type: "Rented", date: "2025-09-15", status: "Completed", amount: 35000, deposit: 10000, seller: "Mary Okello" },
    { id: 2, item: "Cocktail Dress", type: "Bought", date: "2025-09-10", status: "Completed", amount: 25000, deposit: 0, seller: "Sarah Mukasa" },
    { id: 3, item: "Designer Wedding Gown", type: "Rented", date: "2025-09-25", status: "Upcoming", amount: 50000, deposit: 15000, seller: "Lisa Adongo" },
  ];

  const reviews = [
    { id: 1, reviewer: "Alice", rating: 5, comment: "Great outfit and smooth transaction! The dress was exactly as described.", date: "2025-09-16" },
    { id: 2, reviewer: "Bob", rating: 4, comment: "Good quality, but shipping was a bit slow. Otherwise good experience.", date: "2025-09-12" },
    { id: 3, reviewer: "Claire", rating: 5, comment: "Perfect fit and excellent condition. Will definitely rent again!", date: "2025-09-05" },
  ];

  const stats = [
    { label: "Items Rented", value: 23 },
    { label: "Items Listed", value: 12 },
    { label: "Total Earnings", value: "UGX 850,000" },
    { label: "Response Rate", value: "98%" },
  ];

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

  // Edit function - navigate to edit page
  const handleEdit = (item) => {
    navigate(`/edit-listing/${item.id}`, { state: { item } });
  };

  // View function - navigate to item detail page
  const handleView = (item) => {
    navigate(`/item/${item.id}`, { state: { item } });
  };

  // Upload new item function
  const handleUploadNewItem = () => {
    navigate('/upload');
  };

  return (
    <div className="bg-ivory min-h-screen">
      {/* Header */}
      <header className="bg-forest shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gold">Zuula</h1>
          <div className="flex items-center gap-4">
            <button className="p-2 text-ivory hover:text-gold transition">
              <FaCog size={18} />
            </button>
            <button className="p-2 text-ivory hover:text-gold transition">
              <FaSignOutAlt size={18} />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-ivory rounded-xl shadow-sm p-6 mb-6 border border-background-300">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
              alt="Profile"
              className="w-36 h-36 rounded-full object-cover border-4 border-forest"
            />
            {user.isVerified && (
              <div className="absolute bottom-2 right-2 bg-forest rounded-full p-1">
                <FaCheckCircle className="text-ivory" size={16} />
              </div>
            )}
          </div>

          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
              <h2 className="text-3xl font-bold text-forest">{user.name}</h2>
              <div className="flex items-center gap-2">
                {user.isVerified && (
                  <span className="bg-emerald-100 text-forest text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <FaShieldAlt size={10} /> ID Verified
                  </span>
                )}
                {user.isPremium ? (
                  <span className="bg-gold text-forest text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <FaStar size={10} /> Premium
                  </span>
                ) : (
                  <button className="bg-background-100 text-forest text-xs px-2 py-1 rounded-full hover:bg-gold hover:text-ivory transition">
                    Upgrade to Premium
                  </button>
                )}
              </div>
            </div>

            <p className="text-slate-grey mb-2">{user.username}</p>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-gold">★</span>
              <span className="font-semibold">{user.rating}</span>
              <span className="text-slate-grey">({reviews.length} reviews)</span>
              <span className="text-background-500">•</span>
              <span className="text-slate-grey">{user.location}</span>
              <span className="text-background-500">•</span>
              <span className="text-slate-grey">Joined {user.joinDate}</span>
            </div>

            <div className="flex gap-6 mb-4">
              <div className="text-center">
                <span className="font-bold block">{user.listingsCount}</span>
                <span className="text-slate-grey text-sm">Listings</span>
              </div>
              <div className="text-center">
                <span className="font-bold block">{user.followers}</span>
                <span className="text-slate-grey text-sm">Followers</span>
              </div>
              <div className="text-center">
                <span className="font-bold block">{user.following}</span>
                <span className="text-slate-grey text-sm">Following</span>
              </div>
            </div>

            <p className="mb-4 text-slate-grey">{user.bio}</p>

            <div className="flex flex-wrap gap-2">
              <button className="btn-primary flex items-center gap-2">
                <FaEdit size={14} /> Edit Profile
              </button>
              <button className="btn-gold flex items-center gap-2">
                <FaEnvelope size={14} /> Message
              </button>
              <button className="border border-background-300 text-forest rounded-lg px-4 py-2 flex items-center gap-2 hover:bg-background-100 transition">
                <FaHeart size={14} /> Follow
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="premium-card text-center">
              <div className="text-2xl font-bold text-forest">{stat.value}</div>
              <div className="text-slate-grey text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-ivory rounded-xl shadow-sm overflow-hidden mb-6 border border-background-300">
          <div className="border-b border-background-300">
            <div className="flex overflow-x-auto">
              <button
                className={`px-6 py-4 font-medium flex items-center gap-2 ${
                  activeTab === "closet" ? "text-forest border-b-2 border-gold" : "text-slate-grey"
                }`}
                onClick={() => setActiveTab("closet")}
              >
                <FaShoppingBag /> My Closet
              </button>
              <button
                className={`px-6 py-4 font-medium flex items-center gap-2 ${
                  activeTab === "transactions" ? "text-forest border-b-2 border-gold" : "text-slate-grey"
                }`}
                onClick={() => setActiveTab("transactions")}
              >
                <FaMoneyBillWave /> Transactions
              </button>
              <button
                className={`px-6 py-4 font-medium flex items-center gap-2 ${
                  activeTab === "reviews" ? "text-forest border-b-2 border-gold" : "text-slate-grey"
                }`}
                onClick={() => setActiveTab("reviews")}
              >
                <FaStar /> Reviews
              </button>
              <button
                className={`px-6 py-4 font-medium flex items-center gap-2 ${
                  activeTab === "calendar" ? "text-forest border-b-2 border-gold" : "text-slate-grey"
                }`}
                onClick={() => setActiveTab("calendar")}
              >
                <FaCalendarAlt /> Calendar
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "closet" && (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-semibold text-forest">My Listings</h3>
                  <button 
                    onClick={handleUploadNewItem}
                    className="btn-primary flex items-center gap-2"
                  >
                    <FaUpload /> Upload New Item
                  </button>
                </div>

                {listings.length === 0 ? (
                  <div className="text-center py-12 text-slate-grey">
                    <div className="mb-4">Your closet is empty</div>
                    <button 
                      onClick={handleUploadNewItem}
                      className="btn-primary"
                    >
                      Upload Your First Item
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {listings.map((item) => (
                      <div key={item.id} className="bg-ivory rounded-xl overflow-hidden shadow-sm border border-background-300 hover:scale-[1.02] transition-transform">
                        <div className="relative">
                          <img src={item.img} alt={item.title} className="w-full h-60 object-cover" />
                          <div className="absolute top-3 right-3 bg-ivory rounded-full p-2 shadow-sm">
                            <FaHeart className="text-background-500 hover:text-gold cursor-pointer" />
                          </div>
                          <div className="absolute bottom-3 left-3 flex gap-2">
                            {item.rent && (
                              <span className="bg-emerald text-white text-xs px-2 py-1 rounded">Rent</span>
                            )}
                            {item.buy && (
                              <span className="bg-gold text-forest text-xs px-2 py-1 rounded">Buy</span>
                            )}
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-forest mb-1">{item.title}</h4>
                          <div className="flex flex-wrap gap-1 mb-3">
                            {item.tags.map((tag, index) => (
                              <span key={index} className="bg-background-100 text-forest text-xs px-2 py-1 rounded">{tag}</span>
                            ))}
                          </div>
                          <div className="space-y-1 mb-3">
                            {item.rent && (
                              <p className="font-bold text-emerald text-sm">
                                Rent: UGX {item.price.toLocaleString()}/day
                              </p>
                            )}
                            {item.buy && (
                              <p className="font-bold text-gold text-sm">
                                Buy: UGX {item.buyPrice.toLocaleString()}
                              </p>
                            )}
                          </div>
                          <div className="flex justify-between items-center text-sm text-slate-grey">
                            <div className="flex items-center gap-1">
                              <FaHeart className="text-gold" /> {item.likes}
                            </div>
                            <div className="flex items-center gap-1">
                              <FaStar className="text-forest" /> {item.saves} saves
                            </div>
                          </div>
                          <div className="flex gap-2 mt-3">
                            <button 
                              onClick={() => handleEdit(item)}
                              className="flex-1 py-2 btn-primary text-sm flex items-center justify-center gap-2"
                            >
                              <FaEdit size={12} /> Edit
                            </button>
                            <button 
                              onClick={() => handleView(item)}
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
                )}
              </>
            )}

            {activeTab === "transactions" && (
              <div className="overflow-hidden rounded-lg border border-background-300">
                {transactions.length === 0 ? (
                  <div className="text-center py-12 text-slate-grey">
                    <div className="mb-4">No transactions yet</div>
                    <button 
                      onClick={() => navigate('/browse')}
                      className="btn-primary"
                    >
                      Browse Items
                    </button>
                  </div>
                ) : (
                  <table className="w-full">
                    <thead className="bg-background-100">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-grey uppercase">Item</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-grey uppercase">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-grey uppercase">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-grey uppercase">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-grey uppercase">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-background-300">
                      {transactions.map((t) => (
                        <tr key={t.id} className="hover:bg-background-50">
                          <td className="px-6 py-4">
                            <div className="font-medium text-forest">{t.item}</div>
                            <div className="text-sm text-slate-grey">From {t.seller}</div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${t.type === 'Rented' ? 'bg-background-200 text-forest' : 'bg-background-200 text-gold'}`}>
                              {t.type}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-forest">UGX {t.amount.toLocaleString()}</div>
                            {t.deposit > 0 && <div className="text-sm text-slate-grey">Deposit: UGX {t.deposit.toLocaleString()}</div>}
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${t.status === 'Completed' ? 'bg-background-200 text-forest' : 'bg-background-200 text-gold'}`}>
                              {t.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-grey">{t.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-6">
                {reviews.length === 0 ? (
                  <div className="text-center py-12 text-slate-grey">No reviews yet</div>
                ) : (
                  reviews.map((r) => (
                    <div key={r.id} className="bg-ivory rounded-xl p-6 shadow-sm border border-background-300">
                      <div className="flex justify-between items-center mb-2">
                        <div className="font-semibold text-forest">{r.reviewer}</div>
                        <div className="flex items-center text-gold gap-1">
                          {Array.from({ length: r.rating }).map((_, i) => (
                            <FaStar key={i} size={14} />
                          ))}
                        </div>
                      </div>
                      <p className="text-slate-grey text-sm mb-2">{r.comment}</p>
                      <div className="text-xs text-background-500">{r.date}</div>
                    </div>
                  ))
                )}
              </div>
            )}

            {activeTab === "calendar" && (
              <div className="text-center py-12 text-slate-grey">
                <p>Calendar integration coming soon!</p>
              </div>
            )}
          </div>
        </div>
      </main>

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
                  <div className="space-y-1">
                    {currentShareItem.rent && (
                      <p className="text-emerald font-bold text-lg font-body">
                        Rent: UGX {currentShareItem.price.toLocaleString()}/day
                      </p>
                    )}
                    {currentShareItem.buy && (
                      <p className="text-gold font-bold text-lg font-body">
                        Buy: UGX {currentShareItem.buyPrice.toLocaleString()}
                      </p>
                    )}
                  </div>
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
    </div>
  );
}