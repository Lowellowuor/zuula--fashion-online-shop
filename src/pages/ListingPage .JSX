import React, { useState } from "react";
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
  FaClock,
  FaBox,
  FaCopy,
  FaTrash,
  FaSort,
  FaTh,
  FaList,
  FaUpload,
  FaQrcode
} from "react-icons/fa";

export default function ListingPage() {
  const [activeTab, setActiveTab] = useState("active");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedListings, setSelectedListings] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  // Mock listings data
  const listings = [
    {
      id: 1,
      title: "Designer Emerald Evening Gown",
      images: [
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop",
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop"
      ],
      price: 75000,
      category: "Evening Gowns",
      brand: "Designer Collection",
      size: "M",
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
      conversionRate: 4.9
    },
    {
      id: 2,
      title: "Classic Blue Business Suit",
      images: [
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop"
      ],
      price: 85000,
      category: "Suits",
      brand: "Premium Tailors",
      size: "L",
      condition: "Like New",
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
      conversionRate: 4.2
    },
    {
      id: 3,
      title: "Vintage Black Cocktail Dress",
      images: [
        "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&h=500&fit=crop"
      ],
      price: 45000,
      category: "Cocktail Dresses",
      brand: "Vintage Finds",
      size: "S",
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
      conversionRate: 0
    },
    {
      id: 4,
      title: "Designer Leather Handbag",
      images: [
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop"
      ],
      price: 35000,
      category: "Accessories",
      brand: "Luxury Brands",
      size: "One Size",
      condition: "Excellent",
      status: "rented",
      rentalCount: 5,
      totalEarnings: 87500,
      rating: 4.7,
      reviewCount: 5,
      location: "Jinja",
      availability: ["2025-10-30"],
      createdAt: "2025-03-20",
      lastRented: "2025-10-05",
      views: 167,
      conversionRate: 3.0
    },
    {
      id: 5,
      title: "Gold Sequin Party Dress",
      images: [
        "https://images.unsplash.com/photo-1566479179816-d53e6dbb8f2d?w=400&h=500&fit=crop"
      ],
      price: 65000,
      category: "Party Dresses",
      brand: "Glamour Collection",
      size: "M",
      condition: "New",
      status: "active",
      rentalCount: 3,
      totalEarnings: 97500,
      rating: 5.0,
      reviewCount: 3,
      location: "Kampala",
      availability: ["2025-10-18", "2025-10-22"],
      createdAt: "2025-08-15",
      lastRented: "2025-10-01",
      views: 134,
      conversionRate: 2.2
    },
    {
      id: 6,
      title: "Traditional Gomesi",
      images: [
        "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=400&h=500&fit=crop"
      ],
      price: 55000,
      category: "Traditional",
      brand: "Cultural Wear",
      size: "L",
      condition: "Excellent",
      status: "pending",
      rentalCount: 0,
      totalEarnings: 0,
      rating: 0,
      reviewCount: 0,
      location: "Kampala",
      availability: [],
      createdAt: "2025-10-10",
      lastRented: null,
      views: 45,
      conversionRate: 0
    }
  ];

  // Filter listings based on active tab and search
  const filteredListings = listings.filter(listing => {
    const matchesTab = listing.status === activeTab || (activeTab === "all" && listing.status !== "archived");
    const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         listing.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || listing.category === selectedCategory;
    
    return matchesTab && matchesSearch && matchesCategory;
  });

  // Sort listings
  const sortedListings = [...filteredListings].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return new Date(b.createdAt) - new Date(a.createdAt);
      case "earnings":
        return b.totalEarnings - a.totalEarnings;
      case "popularity":
        return b.rentalCount - a.rentalCount;
      case "price_high":
        return b.price - a.price;
      case "price_low":
        return a.price - b.price;
      default:
        return 0;
    }
  });

  // Statistics
  const stats = {
    total: listings.length,
    active: listings.filter(l => l.status === "active").length,
    rented: listings.filter(l => l.status === "rented").length,
    draft: listings.filter(l => l.status === "draft").length,
    pending: listings.filter(l => l.status === "pending").length,
    totalEarnings: listings.reduce((sum, l) => sum + l.totalEarnings, 0),
    totalRentals: listings.reduce((sum, l) => sum + l.rentalCount, 0)
  };

  // Categories for filter
  const categories = ["all", "Evening Gowns", "Suits", "Cocktail Dresses", "Party Dresses", "Traditional", "Accessories"];

  const getStatusBadge = (status) => {
    const statusConfig = {
      active: { class: "bg-primary-100 text-primary-800", label: "Active" },
      rented: { class: "bg-accent-100 text-accent-800", label: "Rented Out" },
      draft: { class: "bg-gray-100 text-gray-800", label: "Draft" },
      pending: { class: "bg-yellow-100 text-yellow-800", label: "Pending" },
      archived: { class: "bg-red-100 text-red-800", label: "Archived" }
    };
    
    const config = statusConfig[status] || statusConfig.draft;
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${config.class}`}>
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

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-primary-800">My Listings</h1>
          <p className="text-text-muted mt-1">Manage your fashion items and track rental performance</p>
        </div>
        <button 
          onClick={() => setShowCreateModal(true)}
          className="btn-primary px-6 py-3 rounded-xl font-semibold flex items-center gap-2"
        >
          <FaPlus className="w-5 h-5" />
          Add New Listing
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div className="premium-card !p-4 text-center">
          <p className="text-2xl font-bold text-primary-700">{stats.total}</p>
          <p className="text-sm text-text-muted">Total Items</p>
        </div>
        <div className="premium-card !p-4 text-center">
          <p className="text-2xl font-bold text-primary-700">{stats.active}</p>
          <p className="text-sm text-text-muted">Active</p>
        </div>
        <div className="premium-card !p-4 text-center">
          <p className="text-2xl font-bold text-accent-700">{stats.rented}</p>
          <p className="text-sm text-text-muted">Rented Out</p>
        </div>
        <div className="premium-card !p-4 text-center">
          <p className="text-2xl font-bold text-primary-700">{stats.totalRentals}</p>
          <p className="text-sm text-text-muted">Total Rentals</p>
        </div>
        <div className="premium-card !p-4 text-center">
          <p className="text-2xl font-bold text-primary-700">{formatCurrency(stats.totalEarnings)}</p>
          <p className="text-sm text-text-muted">Total Earnings</p>
        </div>
        <div className="premium-card !p-4 text-center">
          <p className="text-2xl font-bold text-yellow-600">{stats.pending}</p>
          <p className="text-sm text-text-muted">Pending</p>
        </div>
      </div>

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

        {/* Search and Filter Row */}
        <div className="flex flex-col lg:flex-row gap-4 mt-4">
          <div className="flex-1 flex gap-3">
            {/* Search */}
            <div className="flex-1 relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-muted w-4 h-4" />
              <input
                type="text"
                placeholder="Search listings..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-background-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-background-300 rounded-xl bg-white text-sm"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-background-300 rounded-xl bg-white text-sm"
            >
              <option value="newest">Newest First</option>
              <option value="earnings">Highest Earnings</option>
              <option value="popularity">Most Popular</option>
              <option value="price_high">Price: High to Low</option>
              <option value="price_low">Price: Low to High</option>
            </select>
          </div>

          {/* Bulk Actions */}
          {selectedListings.length > 0 && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-text-muted">
                {selectedListings.length} selected
              </span>
              <select className="px-3 py-2 border border-background-300 rounded-xl bg-white text-sm">
                <option>Bulk Actions</option>
                <option>Activate</option>
                <option>Archive</option>
                <option>Delete</option>
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Listings Grid/List */}
      <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-4"}>
        {sortedListings.map((listing) => (
          <ListingCard 
            key={listing.id} 
            listing={listing} 
            viewMode={viewMode}
            isSelected={selectedListings.includes(listing.id)}
            onSelect={handleSelectListing}
          />
        ))}
      </div>

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
    </div>
  );
}

// Individual Listing Card Component
function ListingCard({ listing, viewMode, isSelected, onSelect }) {
  const [showActions, setShowActions] = useState(false);

  const formatCurrency = (amount) => {
    return `UGX ${amount.toLocaleString()}`;
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      active: { class: "bg-primary-100 text-primary-800", label: "Active" },
      rented: { class: "bg-accent-100 text-accent-800", label: "Rented Out" },
      draft: { class: "bg-gray-100 text-gray-800", label: "Draft" },
      pending: { class: "bg-yellow-100 text-yellow-800", label: "Pending" }
    };
    
    const config = statusConfig[status] || statusConfig.draft;
    return (
      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${config.class}`}>
        {config.label}
      </span>
    );
  };

  if (viewMode === "list") {
    return (
      <div className="premium-card hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => onSelect(listing.id)}
            className="mt-4"
          />
          <img
            src={listing.images[0]}
            alt={listing.title}
            className="w-20 h-24 rounded-lg object-cover"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold text-primary-700 truncate">{listing.title}</h3>
                <p className="text-sm text-text-muted">{listing.brand} • {listing.category}</p>
              </div>
              <div className="flex items-center gap-2">
                {getStatusBadge(listing.status)}
                <div className="relative">
                  <button
                    onClick={() => setShowActions(!showActions)}
                    className="p-2 hover:bg-background-100 rounded-lg"
                  >
                    <FaEllipsisV className="w-4 h-4 text-text-secondary" />
                  </button>
                  {showActions && <ListingActionsMenu listing={listing} onClose={() => setShowActions(false)} />}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="text-text-muted">Price:</span>
                <p className="font-semibold text-primary-700">{formatCurrency(listing.price)}</p>
              </div>
              <div>
                <span className="text-text-muted">Earnings:</span>
                <p className="font-semibold text-accent-700">{formatCurrency(listing.totalEarnings)}</p>
              </div>
              <div>
                <span className="text-text-muted">Rentals:</span>
                <p className="font-semibold">{listing.rentalCount}</p>
              </div>
              <div>
                <span className="text-text-muted">Rating:</span>
                <p className="font-semibold flex items-center gap-1">
                  <FaStar className="w-3 h-3 text-yellow-400" />
                  {listing.rating || "No ratings"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Grid View
  return (
    <div className="premium-card hover:shadow-lg transition-shadow group">
      <div className="relative">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onSelect(listing.id)}
          className="absolute top-3 left-3 z-10"
        />
        <div className="relative h-48 overflow-hidden rounded-t-xl">
          <img
            src={listing.images[0]}
            alt={listing.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3">
            {getStatusBadge(listing.status)}
          </div>
          <div className="absolute bottom-3 left-3">
            <p className="text-xl font-bold text-white drop-shadow-lg">
              {formatCurrency(listing.price)}
            </p>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-primary-700 line-clamp-1 flex-1">{listing.title}</h3>
            <div className="relative">
              <button
                onClick={() => setShowActions(!showActions)}
                className="p-1 hover:bg-background-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <FaEllipsisV className="w-4 h-4 text-text-secondary" />
              </button>
              {showActions && <ListingActionsMenu listing={listing} onClose={() => setShowActions(false)} />}
            </div>
          </div>
          
          <p className="text-sm text-text-muted mb-3">{listing.brand} • {listing.size}</p>
          
          <div className="grid grid-cols-2 gap-3 text-sm mb-3">
            <div className="flex items-center gap-1 text-text-muted">
              <FaChartLine className="w-3 h-3" />
              <span>{listing.rentalCount} rentals</span>
            </div>
            <div className="flex items-center gap-1 text-text-muted">
              <FaMoneyBillWave className="w-3 h-3" />
              <span>{formatCurrency(listing.totalEarnings)}</span>
            </div>
            <div className="flex items-center gap-1 text-text-muted">
              <FaEye className="w-3 h-3" />
              <span>{listing.views} views</span>
            </div>
            <div className="flex items-center gap-1 text-text-muted">
              <FaStar className="w-3 h-3 text-yellow-400" />
              <span>{listing.rating || "No ratings"}</span>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button className="flex-1 py-2 bg-primary-50 text-primary-700 rounded-lg font-medium hover:bg-primary-100 transition-colors">
              <FaEdit className="w-3 h-3 inline mr-1" />
              Edit
            </button>
            <button className="flex-1 py-2 bg-background-100 text-text-secondary rounded-lg font-medium hover:bg-background-200 transition-colors">
              <FaEye className="w-3 h-3 inline mr-1" />
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Listing Actions Menu Component
function ListingActionsMenu({ listing, onClose }) {
  return (
    <div className="absolute right-0 top-full mt-1 bg-white rounded-xl shadow-lg border border-background-200 py-2 z-20 min-w-48">
      <button className="w-full text-left px-4 py-2 hover:bg-background-100 flex items-center gap-2">
        <FaEdit className="w-4 h-4 text-text-secondary" />
        Edit Listing
      </button>
      <button className="w-full text-left px-4 py-2 hover:bg-background-100 flex items-center gap-2">
        <FaEye className="w-4 h-4 text-text-secondary" />
        View Details
      </button>
      <button className="w-full text-left px-4 py-2 hover:bg-background-100 flex items-center gap-2">
        <FaCopy className="w-4 h-4 text-text-secondary" />
        Duplicate
      </button>
      <button className="w-full text-left px-4 py-2 hover:bg-background-100 flex items-center gap-2">
        <FaCalendarAlt className="w-4 h-4 text-text-secondary" />
        Manage Availability
      </button>
      <button className="w-full text-left px-4 py-2 hover:bg-background-100 flex items-center gap-2">
        <FaQrcode className="w-4 h-4 text-text-secondary" />
        Generate QR Code
      </button>
      <hr className="my-2" />
      <button className="w-full text-left px-4 py-2 hover:bg-red-50 text-red-600 flex items-center gap-2">
        <FaArchive className="w-4 h-4" />
        Archive Listing
      </button>
    </div>
  );
}

// Create Listing Modal Component
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
          {[1, 2, 3, 4].map(step => (
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
              {step < 4 && (
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
              {/* Form fields for basic info */}
            </div>
          )}
          
          {currentStep === 2 && (
            <div>
              <h3 className="text-xl font-semibold text-primary-700 mb-4">Pricing & Availability</h3>
              {/* Form fields for pricing */}
            </div>
          )}
          
          {currentStep === 3 && (
            <div>
              <h3 className="text-xl font-semibold text-primary-700 mb-4">Photos & Media</h3>
              {/* Photo upload component */}
            </div>
          )}
          
          {currentStep === 4 && (
            <div>
              <h3 className="text-xl font-semibold text-primary-700 mb-4">Review & Publish</h3>
              {/* Review and publish */}
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
            onClick={() => currentStep < 4 ? setCurrentStep(currentStep + 1) : onClose()}
            className="btn-primary px-6 py-2 rounded-xl font-medium"
          >
            {currentStep === 4 ? "Publish Listing" : "Next Step"}
          </button>
        </div>
      </div>
    </div>
  );
}