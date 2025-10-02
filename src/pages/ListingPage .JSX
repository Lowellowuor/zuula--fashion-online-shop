// src/pages/ListingPage.jsx
import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaPlus,
  FaFilter,
  FaSearch,
  FaEdit,
  FaArchive,
  FaChartLine,
  FaEye,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaStar,
  FaShoppingBag,
  FaEllipsisV,
  FaTimes,
  FaCheckCircle,
  FaTh,
  FaList,
  FaUpload,
  FaHeart,
  FaShare,
  FaCopy,
  FaTrash,
  FaQrcode,
  FaSync,
  FaExclamationTriangle,
  FaSort,
  FaSortUp,
  FaSortDown,
  FaCalendar,
  FaMapMarkerAlt,
  FaTag,
  FaBox,
  FaShippingFast,
  FaCheck,
  FaClock
} from "react-icons/fa";

// Inline data instead of import
const sharedListings = [
  {
    id: 1,
    title: "Designer Wedding Gown",
    images: [
      "https://images.unsplash.com/photo-1596466500176-aff9f0b2a4a5?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop"
    ],
    price: 50000,
    deposit: 15000,
    buyPrice: 250000,
    rent: true,
    buy: true,
    category: "Wedding Dresses",
    brand: "Designer Collection",
    size: "M",
    color: "White",
    condition: "Excellent",
    status: "active",
    rentalCount: 12,
    totalEarnings: 450000,
    rating: 4.8,
    reviewCount: 15,
    location: "Kampala",
    availability: ["2025-10-15", "2025-10-20", "2025-10-25"],
    createdAt: "2025-01-15",
    lastRented: "2025-09-20",
    views: 245,
    conversionRate: 4.9,
    likes: 24,
    saves: 12,
    tags: ["Wedding", "Luxury", "White"],
    description: "Beautiful designer wedding gown perfect for your special day.",
    verified: true
  },
  {
    id: 2,
    title: "Elegant Party Dress",
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop"
    ],
    price: 30000,
    deposit: 10000,
    buyPrice: 120000,
    rent: true,
    buy: true,
    category: "Party Dresses",
    brand: "Glamour Collection",
    size: "S",
    color: "Red",
    condition: "Excellent",
    status: "active",
    rentalCount: 8,
    totalEarnings: 320000,
    rating: 4.9,
    reviewCount: 8,
    location: "Entebbe",
    availability: ["2025-10-16", "2025-10-23"],
    createdAt: "2025-02-10",
    lastRented: "2025-09-25",
    views: 189,
    conversionRate: 4.2,
    likes: 18,
    saves: 8,
    tags: ["Party", "Cocktail", "Red"],
    description: "Stunning red cocktail dress for parties and special events.",
    verified: true
  },
  {
    id: 3,
    title: "Classic Blue Business Suit",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop"
    ],
    price: 85000,
    deposit: 20000,
    buyPrice: 350000,
    rent: true,
    buy: false,
    category: "Suits",
    brand: "Premium Tailors",
    size: "L",
    color: "Blue",
    condition: "Like New",
    status: "rented",
    rentalCount: 8,
    totalEarnings: 320000,
    rating: 4.9,
    reviewCount: 8,
    location: "Kampala",
    availability: ["2025-10-30"],
    createdAt: "2025-02-10",
    lastRented: "2025-10-05",
    views: 167,
    conversionRate: 3.0,
    likes: 15,
    saves: 7,
    tags: ["Business", "Formal", "Blue"],
    description: "Professional business suit for important meetings and events.",
    verified: true
  },
  {
    id: 4,
    title: "Traditional Gomesi",
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop"
    ],
    price: 45000,
    deposit: 15000,
    buyPrice: 200000,
    rent: true,
    buy: true,
    category: "Traditional",
    brand: "Cultural Wear",
    size: "M",
    color: "Multi-color",
    condition: "Good",
    status: "active",
    rentalCount: 5,
    totalEarnings: 87500,
    rating: 4.7,
    reviewCount: 5,
    location: "Kampala",
    availability: ["2025-10-18", "2025-10-22"],
    createdAt: "2025-03-20",
    lastRented: "2025-10-01",
    views: 134,
    conversionRate: 2.2,
    likes: 41,
    saves: 22,
    tags: ["Traditional", "Cultural", "Multi-color"],
    description: "Authentic Ugandan Gomesi for cultural events and ceremonies.",
    verified: true
  },
  {
    id: 5,
    title: "Vintage Black Cocktail Dress",
    images: [
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&h=500&fit=crop"
    ],
    price: 45000,
    deposit: 12000,
    buyPrice: 180000,
    rent: true,
    buy: true,
    category: "Cocktail Dresses",
    brand: "Vintage Finds",
    size: "S",
    color: "Black",
    condition: "Good",
    status: "draft",
    rentalCount: 0,
    totalEarnings: 0,
    rating: 0,
    reviewCount: 0,
    location: "Kampala",
    availability: [],
    createdAt: "2025-09-28",
    lastRented: null,
    views: 0,
    conversionRate: 0,
    likes: 0,
    saves: 0,
    tags: ["Vintage", "Cocktail", "Black"],
    description: "Elegant vintage black dress for special occasions.",
    verified: false
  },
  {
    id: 6,
    title: "Designer Leather Handbag",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop"
    ],
    price: 35000,
    deposit: 10000,
    buyPrice: 150000,
    rent: true,
    buy: true,
    category: "Accessories",
    brand: "Luxury Brands",
    size: "One Size",
    color: "Brown",
    condition: "Excellent",
    status: "pending",
    rentalCount: 0,
    totalEarnings: 0,
    rating: 0,
    reviewCount: 0,
    location: "Jinja",
    availability: [],
    createdAt: "2025-10-10",
    lastRented: null,
    views: 45,
    conversionRate: 0,
    likes: 12,
    saves: 5,
    tags: ["Designer", "Leather", "Handbag"],
    description: "Luxury designer handbag for special occasions.",
    verified: false
  }
];

const categories = [
  "Wedding Dresses",
  "Party Dresses",
  "Suits",
  "Traditional",
  "Cocktail Dresses",
  "Accessories",
  "Shoes",
  "Formal Wear",
  "Casual Wear"
];

const sizes = [
  "XS", "S", "M", "L", "XL", "XXL", "One Size"
];

const conditions = [
  "New",
  "Excellent",
  "Very Good",
  "Good",
  "Fair"
];

export default function ListingPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedListings, setSelectedListings] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");
  const [selectedCondition, setSelectedCondition] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [sortBy, setSortBy] = useState("newest");
  const [sortOrder, setSortOrder] = useState("desc");
  const [showFilters, setShowFilters] = useState(false);
  const [showBulkActions, setShowBulkActions] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [currentShareItem, setCurrentShareItem] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);

  // Use shared listings data
  const listings = sharedListings;

  // Filter listings based on active tab, search, and filters
  const filteredListings = useMemo(() => {
    return listings.filter(listing => {
      const matchesTab = activeTab === "all" || listing.status === activeTab;
      const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          listing.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          listing.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "all" || listing.category === selectedCategory;
      const matchesSize = selectedSize === "all" || listing.size === selectedSize;
      const matchesCondition = selectedCondition === "all" || listing.condition === selectedCondition;
      const matchesPrice = listing.price >= priceRange[0] && listing.price <= priceRange[1];
      
      return matchesTab && matchesSearch && matchesCategory && matchesSize && matchesCondition && matchesPrice;
    });
  }, [listings, activeTab, searchQuery, selectedCategory, selectedSize, selectedCondition, priceRange]);

  // Sort listings
  const sortedListings = useMemo(() => {
    const sorted = [...filteredListings].sort((a, b) => {
      let aValue, bValue;
      
      switch (sortBy) {
        case "newest":
          aValue = new Date(a.createdAt);
          bValue = new Date(b.createdAt);
          break;
        case "earnings":
          aValue = a.totalEarnings;
          bValue = b.totalEarnings;
          break;
        case "popularity":
          aValue = a.rentalCount;
          bValue = b.rentalCount;
          break;
        case "price":
          aValue = a.price;
          bValue = b.price;
          break;
        case "views":
          aValue = a.views;
          bValue = b.views;
          break;
        case "likes":
          aValue = a.likes;
          bValue = b.likes;
          break;
        case "title":
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
          break;
        default:
          return 0;
      }
      
      if (sortOrder === "desc") {
        return aValue < bValue ? 1 : -1;
      } else {
        return aValue > bValue ? 1 : -1;
      }
    });
    
    return sorted;
  }, [filteredListings, sortBy, sortOrder]);

  // Statistics
  const stats = useMemo(() => {
    const activeListings = listings.filter(l => l.status === "active");
    const totalEarnings = listings.reduce((sum, l) => sum + l.totalEarnings, 0);
    const totalRentals = listings.reduce((sum, l) => sum + l.rentalCount, 0);
    const avgRating = listings.reduce((sum, l) => sum + l.rating, 0) / listings.filter(l => l.rating > 0).length;
    const popularItem = listings.reduce((prev, current) => (prev.rentalCount > current.rentalCount) ? prev : current);
    
    return {
      total: listings.length,
      active: activeListings.length,
      rented: listings.filter(l => l.status === "rented").length,
      draft: listings.filter(l => l.status === "draft").length,
      pending: listings.filter(l => l.status === "pending").length,
      totalEarnings,
      totalRentals,
      avgRating: avgRating || 0,
      popularItem: popularItem.title,
      conversionRate: ((totalRentals / listings.reduce((sum, l) => sum + l.views, 1)) * 100).toFixed(1)
    };
  }, [listings]);

  const getStatusBadge = (status) => {
    const statusConfig = {
      active: { class: "bg-primary-100 text-primary-800 border-primary-200", icon: FaCheckCircle, label: "Active" },
      rented: { class: "bg-accent-100 text-accent-800 border-accent-200", icon: FaCalendar, label: "Rented Out" },
      draft: { class: "bg-gray-100 text-gray-800 border-gray-200", icon: FaClock, label: "Draft" },
      pending: { class: "bg-yellow-100 text-yellow-800 border-yellow-200", icon: FaExclamationTriangle, label: "Pending" },
      archived: { class: "bg-red-100 text-red-800 border-red-200", icon: FaArchive, label: "Archived" }
    };
    
    const config = statusConfig[status] || statusConfig.draft;
    const IconComponent = config.icon;
    
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${config.class}`}>
        <IconComponent className="w-3 h-3" />
        {config.label}
      </span>
    );
  };

  const formatCurrency = (amount) => {
    return `UGX ${amount.toLocaleString()}`;
  };

  const handleSelectListing = (listingId) => {
    setSelectedListings(prev =>
      prev.includes(listingId)
        ? prev.filter(id => id !== listingId)
        : [...prev, listingId]
    );
  };

  const handleSelectAll = () => {
    setSelectedListings(
      selectedListings.length === sortedListings.length
        ? []
        : sortedListings.map(l => l.id)
    );
  };

  const handleEditItem = (item) => {
    navigate(`/edit/item/${item.id}`, { state: { item } });
  };

  const handleViewItem = (item) => {
    navigate(`/item/${item.id}`, { state: { item } });
  };

  const handleShareItem = (item) => {
    setCurrentShareItem(item);
    setShowShareModal(true);
    setCopySuccess(false);
  };

  const handleBulkAction = (action) => {
    // Implement bulk actions
    console.log(`Performing ${action} on ${selectedListings.length} items`);
    setSelectedListings([]);
    setShowBulkActions(false);
  };

  const copyToClipboard = () => {
    const shareUrl = `${window.location.origin}/item/${currentShareItem?.id}`;
    navigator.clipboard.writeText(shareUrl);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const toggleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("desc");
    }
  };

  const getSortIcon = (field) => {
    if (sortBy !== field) return FaSort;
    return sortOrder === "asc" ? FaSortUp : FaSortDown;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-primary-800">My Listings</h1>
              <p className="text-sm text-text-muted mt-1">Manage your fashion items and track rental performance</p>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setShowCreateModal(true)}
                className="btn-primary px-6 py-3 rounded-xl font-semibold flex items-center gap-2"
              >
                <FaPlus className="w-5 h-5" />
                Add New Listing
              </button>
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="px-4 py-3 border border-background-300 rounded-xl hover:border-primary-400 text-text-secondary flex items-center gap-2"
              >
                <FaFilter className="w-4 h-4" />
                Filters
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <div className="premium-card !p-4 text-center">
              <p className="text-2xl font-bold text-primary-700">{stats.total}</p>
              <p className="text-sm text-text-muted">Total Items</p>
            </div>
            <div className="premium-card !p-4 text-center">
              <p className="text-2xl font-bold text-primary-700">{stats.active}</p>
              <p className="text-sm text-text-muted">Active</p>
            </div>
            <div className="premium-card !p-4 text-center">
              <p className="text-2xl font-bold text-accent-700">{formatCurrency(stats.totalEarnings)}</p>
              <p className="text-sm text-text-muted">Total Earnings</p>
            </div>
            <div className="premium-card !p-4 text-center">
              <p className="text-2xl font-bold text-primary-700">{stats.avgRating.toFixed(1)}</p>
              <p className="text-sm text-text-muted">Avg Rating</p>
            </div>
            <div className="premium-card !p-4 text-center">
              <p className="text-2xl font-bold text-primary-700">{stats.conversionRate}%</p>
              <p className="text-sm text-text-muted">Conversion Rate</p>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="premium-card !p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Price Range</label>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="200000"
                      step="5000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-text-muted">
                      <span>{formatCurrency(priceRange[0])}</span>
                      <span>{formatCurrency(priceRange[1])}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-background-300 rounded-xl bg-white text-sm"
                  >
                    <option value="all">All Categories</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Size</label>
                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-full px-3 py-2 border border-background-300 rounded-xl bg-white text-sm"
                  >
                    <option value="all">All Sizes</option>
                    {sizes.map(size => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">Condition</label>
                  <select
                    value={selectedCondition}
                    onChange={(e) => setSelectedCondition(e.target.value)}
                    className="w-full px-3 py-2 border border-background-300 rounded-xl bg-white text-sm"
                  >
                    <option value="all">All Conditions</option>
                    {conditions.map(condition => (
                      <option key={condition} value={condition}>{condition}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Controls Bar */}
          <div className="premium-card !p-4">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              {/* Tabs */}
              <div className="flex flex-wrap gap-2">
                {[
                  { key: "all", label: "All Items", count: stats.total },
                  { key: "active", label: "Active", count: stats.active },
                  { key: "rented", label: "Rented", count: stats.rented },
                  { key: "draft", label: "Drafts", count: stats.draft },
                  { key: "pending", label: "Pending", count: stats.pending }
                ].map(({ key, label, count }) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                      activeTab === key
                        ? "btn-primary"
                        : "bg-background-100 text-text-secondary hover:bg-background-200"
                    }`}
                  >
                    <span>{label}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      activeTab === key ? "bg-white text-primary-600" : "bg-background-300"
                    }`}>
                      {count}
                    </span>
                  </button>
                ))}
              </div>

              {/* View Controls */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-background-100 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-lg ${
                      viewMode === "grid" ? "bg-white text-primary-600 shadow-sm" : "text-text-secondary"
                    }`}
                  >
                    <FaTh className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-lg ${
                      viewMode === "list" ? "bg-white text-primary-600 shadow-sm" : "text-text-secondary"
                    }`}
                  >
                    <FaList className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Search and Sort Row */}
            <div className="flex flex-col lg:flex-row gap-4 mt-4">
              <div className="flex-1 flex gap-3">
                {/* Search */}
                <div className="flex-1 relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search by title, brand, or description..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-background-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                {/* Sort Dropdown */}
                <select
                  value={`${sortBy}-${sortOrder}`}
                  onChange={(e) => {
                    const [field, order] = e.target.value.split('-');
                    setSortBy(field);
                    setSortOrder(order);
                  }}
                  className="px-3 py-2 border border-background-300 rounded-xl bg-white text-sm"
                >
                  <option value="newest-desc">Newest First</option>
                  <option value="newest-asc">Oldest First</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="popularity-desc">Most Popular</option>
                  <option value="earnings-desc">Highest Earnings</option>
                  <option value="views-desc">Most Views</option>
                  <option value="likes-desc">Most Likes</option>
                </select>
              </div>

              {/* Bulk Actions */}
              {selectedListings.length > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-text-muted">
                    {selectedListings.length} selected
                  </span>
                  <select 
                    onChange={(e) => handleBulkAction(e.target.value)}
                    className="px-3 py-2 border border-background-300 rounded-xl bg-white text-sm"
                  >
                    <option value="">Bulk Actions</option>
                    <option value="activate">Activate</option>
                    <option value="archive">Archive</option>
                    <option value="delete">Delete</option>
                    <option value="update-price">Update Price</option>
                  </select>
                </div>
              )}
            </div>
          </div>

          {/* Listings Display */}
          {viewMode === "grid" ? (
            // Grid View
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedListings.map((item) => (
                <ListingCard 
                  key={item.id} 
                  item={item}
                  viewMode={viewMode}
                  isSelected={selectedListings.includes(item.id)}
                  onSelect={handleSelectListing}
                  onEdit={handleEditItem}
                  onView={handleViewItem}
                  onShare={handleShareItem}
                  formatCurrency={formatCurrency}
                  getStatusBadge={getStatusBadge}
                />
              ))}
            </div>
          ) : (
            // List View
            <div className="premium-card">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-background-100 text-text-secondary text-sm uppercase">
                      <th className="p-4 text-left font-semibold rounded-tl-xl">
                        <input
                          type="checkbox"
                          checked={selectedListings.length === sortedListings.length && sortedListings.length > 0}
                          onChange={handleSelectAll}
                          className="rounded"
                        />
                      </th>
                      <th className="p-4 text-left font-semibold">Item</th>
                      <th className="p-4 text-left font-semibold">Category</th>
                      <th className="p-4 text-left font-semibold">
                        <button onClick={() => toggleSort('price')} className="flex items-center gap-1">
                          Price
                          {React.createElement(getSortIcon('price'), { className: "w-3 h-3" })}
                        </button>
                      </th>
                      <th className="p-4 text-left font-semibold">
                        <button onClick={() => toggleSort('rentalCount')} className="flex items-center gap-1">
                          Rentals
                          {React.createElement(getSortIcon('popularity'), { className: "w-3 h-3" })}
                        </button>
                      </th>
                      <th className="p-4 text-left font-semibold">
                        <button onClick={() => toggleSort('views')} className="flex items-center gap-1">
                          Views
                          {React.createElement(getSortIcon('views'), { className: "w-3 h-3" })}
                        </button>
                      </th>
                      <th className="p-4 text-left font-semibold">Status</th>
                      <th className="p-4 text-left font-semibold rounded-tr-xl">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-text-primary divide-y divide-background-200">
                    {sortedListings.map((item) => (
                      <tr key={item.id} className="hover:bg-background-50 transition-colors">
                        <td className="p-4">
                          <input
                            type="checkbox"
                            checked={selectedListings.includes(item.id)}
                            onChange={() => handleSelectListing(item.id)}
                            className="rounded"
                          />
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={item.images[0]}
                              alt={item.title}
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div>
                              <div className="font-semibold text-primary-700">{item.title}</div>
                              <div className="text-xs text-text-muted">{item.brand}</div>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="bg-background-100 text-text-secondary px-2 py-1 rounded text-xs">
                            {item.category}
                          </span>
                        </td>
                        <td className="p-4">
                          <div className="font-semibold text-primary-700">{formatCurrency(item.price)}</div>
                          {item.buy && (
                            <div className="text-xs text-text-muted">Buy: {formatCurrency(item.buyPrice)}</div>
                          )}
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-1">
                            <FaChartLine className="w-3 h-3 text-text-muted" />
                            <span>{item.rentalCount}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-1">
                            <FaEye className="w-3 h-3 text-text-muted" />
                            <span>{item.views}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          {getStatusBadge(item.status)}
                        </td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleEditItem(item)}
                              className="p-2 hover:bg-background-100 rounded-lg text-text-secondary hover:text-primary-600"
                              title="Edit"
                            >
                              <FaEdit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleViewItem(item)}
                              className="p-2 hover:bg-background-100 rounded-lg text-text-secondary hover:text-primary-600"
                              title="View"
                            >
                              <FaEye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleShareItem(item)}
                              className="p-2 hover:bg-background-100 rounded-lg text-text-secondary hover:text-primary-600"
                              title="Share"
                            >
                              <FaShare className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Empty State */}
          {sortedListings.length === 0 && (
            <div className="premium-card text-center py-16">
              <FaShoppingBag className="w-16 h-16 text-background-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-text-primary mb-2">No listings found</h3>
              <p className="text-text-muted mb-6">Try adjusting your filters or create a new listing</p>
              <button 
                onClick={() => setShowCreateModal(true)}
                className="btn-primary px-6 py-3 rounded-xl font-semibold"
              >
                Create Your First Listing
              </button>
            </div>
          )}

          {/* Create Listing Modal */}
          {showCreateModal && (
            <CreateListingModal onClose={() => setShowCreateModal(false)} />
          )}

          {/* Share Modal */}
          {showShareModal && currentShareItem && (
            <ShareModal 
              item={currentShareItem}
              onClose={() => setShowShareModal(false)}
              copySuccess={copySuccess}
              onCopy={copyToClipboard}
              formatCurrency={formatCurrency}
            />
          )}
        </div>
      </div>
    </div>
  );
}

// Listing Card Component for Grid View
function ListingCard({ item, isSelected, onSelect, onEdit, onView, onShare, formatCurrency, getStatusBadge }) {
  return (
    <div className="bg-ivory rounded-xl overflow-hidden shadow-sm border border-background-300 hover:scale-[1.02] transition-transform group">
      <div className="relative">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onSelect(item.id)}
          className="absolute top-3 left-3 z-10 w-5 h-5 rounded border-background-300 text-primary-600 focus:ring-primary-500"
        />
        <img
          src={item.images[0]}
          alt={item.title}
          className="w-full h-60 object-cover"
        />
        <div className="absolute top-3 right-3 bg-ivory rounded-full p-2 shadow-sm">
          <FaHeart className="text-background-500 hover:text-gold cursor-pointer" />
        </div>
        <div className="absolute bottom-3 left-3 flex gap-2">
          {item.rent && (
            <span className="bg-emerald text-white text-xs px-2 py-1 rounded font-medium">Rent</span>
          )}
          {item.buy && (
            <span className="bg-gold text-forest text-xs px-2 py-1 rounded font-medium">Buy</span>
          )}
        </div>
        <div className="absolute top-3 left-12">
          {getStatusBadge(item.status)}
        </div>
      </div>
      
      <div className="p-4">
        <h4 className="font-semibold text-forest mb-1 line-clamp-1">{item.title}</h4>
        
        <div className="flex items-center gap-2 text-sm text-text-muted mb-2">
          <FaMapMarkerAlt className="w-3 h-3" />
          <span>{item.location}</span>
          <span>•</span>
          <FaTag className="w-3 h-3" />
          <span>{item.category}</span>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {item.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="bg-background-100 text-forest text-xs px-2 py-1 rounded">{tag}</span>
          ))}
        </div>
        
        <div className="space-y-2 mb-3">
          {item.rent && (
            <p className="font-bold text-emerald text-sm">
              Rent: {formatCurrency(item.price)}/day
            </p>
          )}
          {item.buy && (
            <p className="font-bold text-gold text-sm">
              Buy: {formatCurrency(item.buyPrice)}
            </p>
          )}
        </div>
        
        <div className="flex justify-between items-center text-sm text-slate-grey mb-3">
          <div className="flex items-center gap-1">
            <FaHeart className="text-gold" /> 
            <span>{item.likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaEye className="text-forest" /> 
            <span>{item.views} views</span>
          </div>
          <div className="flex items-center gap-1">
            <FaChartLine className="text-primary-600" /> 
            <span>{item.rentalCount} rentals</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={() => onEdit(item)}
            className="flex-1 py-2 btn-primary text-sm flex items-center justify-center gap-2"
          >
            <FaEdit size={12} /> Edit
          </button>
          <button 
            onClick={() => onView(item)}
            className="flex-1 py-2 bg-background-100 text-forest rounded-lg hover:bg-background-200 transition-all duration-300 text-sm flex items-center justify-center gap-2"
          >
            <FaEye size={12} /> View
          </button>
          <button 
            onClick={() => onShare(item)}
            className="px-3 py-2 border border-background-300 text-forest rounded-lg hover:bg-background-100 transition text-sm flex items-center gap-1"
          >
            <FaShare size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}

// Share Modal Component
function ShareModal({ item, onClose, copySuccess, onCopy, formatCurrency }) {
  return (
    <div className="fixed inset-0 bg-charcoal bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-forest">Share Outfit</h3>
            <button onClick={onClose} className="text-slate-grey hover:text-charcoal transition-colors">
              <FaTimes size={20} />
            </button>
          </div>
          
          <div className="flex gap-4 mb-6">
            <div className="w-20 h-20 bg-background-300 rounded-xl overflow-hidden shadow-lg">
              <img src={item.images[0]} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-lg text-forest mb-2">{item.title}</h4>
              <div className="space-y-1">
                {item.rent && (
                  <p className="text-emerald font-bold text-lg">
                    Rent: {formatCurrency(item.price)}/day
                  </p>
                )}
                {item.buy && (
                  <p className="text-gold font-bold text-lg">
                    Buy: {formatCurrency(item.buyPrice)}
                  </p>
                )}
              </div>
            </div>
          </div>
          
          <div className="border-t border-background-300 pt-4">
            <div className="flex gap-2">
              <input
                type="text"
                readOnly
                value={`${window.location.origin}/item/${item.id}`}
                className="flex-1 px-4 py-3 border-2 border-background-300 rounded-xl text-sm"
              />
              <button
                onClick={onCopy}
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
  );
}

// Create Listing Modal Component (Simplified)
function CreateListingModal({ onClose }) {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="premium-card max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-primary-800">Create New Listing</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-background-100 rounded-lg text-text-secondary"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between mb-8">
          {[1, 2, 3, 4, 5].map(step => (
            <div key={step} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step === currentStep 
                  ? "bg-primary-600 text-white" 
                  : step < currentStep 
                  ? "bg-primary-100 text-primary-600" 
                  : "bg-background-200 text-text-muted"
              }`}>
                {step < currentStep ? <FaCheckCircle /> : step}
              </div>
              {step < 5 && (
                <div className={`w-16 h-1 mx-2 ${
                  step < currentStep ? "bg-primary-600" : "bg-background-200"
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="space-y-6">
          {currentStep === 1 && (
            <div>
              <h3 className="text-xl font-semibold text-primary-700 mb-4">Basic Information</h3>
              <p className="text-text-muted">Item details and description</p>
            </div>
          )}
          
          {currentStep === 2 && (
            <div>
              <h3 className="text-xl font-semibold text-primary-700 mb-4">Pricing & Rental Options</h3>
              <p className="text-text-muted">Set your rental and purchase prices</p>
            </div>
          )}
          
          {currentStep === 3 && (
            <div>
              <h3 className="text-xl font-semibold text-primary-700 mb-4">Photos & Media</h3>
              <p className="text-text-muted">Upload images and videos</p>
            </div>
          )}
          
          {currentStep === 4 && (
            <div>
              <h3 className="text-xl font-semibold text-primary-700 mb-4">Availability & Logistics</h3>
              <p className="text-text-muted">Set availability and delivery options</p>
            </div>
          )}
          
          {currentStep === 5 && (
            <div>
              <h3 className="text-xl font-semibold text-primary-700 mb-4">Review & Publish</h3>
              <p className="text-text-muted">Preview and publish your listing</p>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6 border-t border-background-200">
          <button
            onClick={() => currentStep > 1 && setCurrentStep(currentStep - 1)}
            className={`px-6 py-2 rounded-xl font-medium ${
              currentStep > 1 
                ? "border border-background-300 hover:border-primary-400" 
                : "invisible"
            }`}
          >
            Previous
          </button>
          
          <button
            onClick={() => currentStep < 5 ? setCurrentStep(currentStep + 1) : onClose()}
            className="btn-primary px-6 py-2 rounded-xl font-medium"
          >
            {currentStep === 5 ? "Publish Listing" : "Next Step"}
          </button>
        </div>
      </div>
    </div>
  );
}