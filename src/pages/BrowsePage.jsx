import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaSearch, FaHeart, FaRegHeart, FaFilter, FaStar, FaTimes, FaChevronLeft, FaChevronRight, FaCalendarAlt, FaUser, FaTags, FaArrowRight } from "react-icons/fa";

const sampleOutfits = [
  {
    id: 1,
    title: "Elegant Red Gomesi",
    category: "Wedding",
    size: "M",
    color: "Red",
    price: 100000,
    deposit: 20000,
    rent: true,
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    seller: "Fashionista01",
    verified: true,
    location: "Kampala",
    condition: "Excellent",
    rating: 4.8,
    reviews: 24,
    available: true,
    tags: ["#traditional", "#wedding", "#ugandaculture"],
    dateAdded: "Sept 20, 2025",
    description: "Beautiful traditional Gomesi perfect for wedding ceremonies and cultural events. Made with high-quality fabric and excellent craftsmanship."
  },
  {
    id: 2,
    title: "Floral Party Dress",
    category: "Party",
    size: "S",
    color: "Floral",
    price: 50000,
    deposit: 10000,
    rent: true,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    seller: "Trendsetter",
    verified: false,
    location: "Entebbe",
    condition: "Good",
    rating: 4.2,
    reviews: 12,
    available: true,
    tags: ["#party", "#floral", "#trending"],
    dateAdded: "Sept 18, 2025",
    description: "Elegant floral dress perfect for parties and special occasions. Lightweight and comfortable with a flattering fit."
  },
  // ... (keep the rest of your sampleOutfits array the same)
];

export default function BrowsePage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    size: "",
    color: "",
    priceRange: [0, 200000],
    rentOnly: false,
    condition: "",
    location: "",
    verifiedOnly: false
  });
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const [wishlist, setWishlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [email, setEmail] = useState("");
  const itemsPerPage = 8;

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [actionType, setActionType] = useState("");
  const [rentalDays, setRentalDays] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
    setCurrentPage(1);
  };

  const filteredOutfits = sampleOutfits.filter((item) => {
    return (
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (filters.category ? item.category === filters.category : true) &&
      (filters.size ? item.size === filters.size : true) &&
      (filters.color ? item.color === filters.color : true) &&
      (filters.condition ? item.condition === filters.condition : true) &&
      (filters.location ? item.location === filters.location : true) &&
      (filters.rentOnly ? item.rent === true : true) &&
      (filters.verifiedOnly ? item.verified === true : true) &&
      item.price >= filters.priceRange[0] &&
      item.price <= filters.priceRange[1]
    );
  });

  const sortedOutfits = [...filteredOutfits].sort((a, b) => {
    if (sortBy === "priceLowHigh") return a.price - b.price;
    if (sortBy === "priceHighLow") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return new Date(b.dateAdded) - new Date(a.dateAdded);
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedOutfits.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedOutfits.length / itemsPerPage);

  const handleView = (id) => {
    navigate(`/item/${id}`);
  };

  const openModal = (item, type) => {
    setSelectedItem(item);
    setActionType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
    setActionType("");
    setRentalDays(1);
  };

  const handleConfirm = () => {
    alert(
      `${actionType === "rent" ? "Rental" : "Purchase"} confirmed for ${
        selectedItem.title
      }`
    );
    closeModal();
  };

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(itemId => itemId !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const clearFilters = () => {
    setFilters({
      category: "",
      size: "",
      color: "",
      priceRange: [0, 200000],
      rentOnly: false,
      condition: "",
      location: "",
      verifiedOnly: false
    });
    setSearch("");
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  const allTags = Array.from(new Set(sampleOutfits.flatMap(item => item.tags)));

  const SkeletonLoader = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[...Array(8)].map((_, index) => (
        <div key={index} className="bg-white shadow-lg rounded-2xl overflow-hidden animate-pulse">
          <div className="h-64 bg-gray-300"></div>
          <div className="p-4 space-y-3">
            <div className="h-6 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            <div className="h-10 bg-gray-300 rounded mt-4"></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 md:px-20 pt-24 pb-8 space-y-8">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-emerald-50 via-ivory to-champagne py-16 rounded-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-charcoal font-heading">
              Browse & <span className="text-emerald">Discover</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-slate-grey font-body leading-relaxed">
              Find the perfect outfit for any occasion from Uganda's fashion rental community
            </p>
          </div>
        </section>

        {/* Search & Filters Header */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex items-center space-x-4">
            <h2 className="text-3xl font-bold text-charcoal font-heading">Browse Outfits</h2>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setViewMode("grid")} 
                className={`p-3 rounded-lg transition-all ${
                  viewMode === "grid" 
                    ? "bg-emerald text-white shadow-lg" 
                    : "bg-background-300 text-slate-grey hover:bg-background-400"
                }`}
              >
                <i className="fas fa-th"></i>
              </button>
              <button 
                onClick={() => setViewMode("feed")} 
                className={`p-3 rounded-lg transition-all ${
                  viewMode === "feed" 
                    ? "bg-emerald text-white shadow-lg" 
                    : "bg-background-300 text-slate-grey hover:bg-background-400"
                }`}
              >
                <i className="fas fa-list"></i>
              </button>
            </div>
          </div>
          
          <div className="flex gap-3 items-center w-full md:w-auto">
            <div className="relative flex-1 md:flex-none">
              <input
                type="text"
                placeholder="Search for outfits..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full md:w-80 px-4 py-3 pl-12 border-2 border-background-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald focus:border-emerald font-body"
              />
              <FaSearch className="absolute left-4 top-3.5 text-slate-grey" />
            </div>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="px-6 py-3 bg-emerald text-white rounded-xl hover:bg-forest transition-all flex items-center gap-2 font-body font-semibold shadow-lg hover:shadow-xl"
            >
              <FaFilter /> 
              <span className="hidden md:inline">Filters</span>
            </button>
          </div>
        </div>

        {/* Mobile Filters */}
        {showFilters && (
          <div className="md:hidden bg-white p-6 rounded-2xl shadow-lg border border-background-300">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-charcoal font-heading text-lg">Filters</h3>
              <button onClick={clearFilters} className="text-sm text-emerald hover:underline font-body">
                Clear All
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-charcoal mb-3 font-body">Price Range (UGX)</h4>
                <div className="mb-2">
                  <span className="text-sm text-slate-grey font-body">
                    {filters.priceRange[0].toLocaleString()} - {filters.priceRange[1].toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="200000"
                  step="10000"
                  value={filters.priceRange[1]}
                  onChange={(e) => handleFilterChange("priceRange", [filters.priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-background-300 rounded-lg appearance-none cursor-pointer accent-emerald"
                />
              </div>
              
              <div>
                <h4 className="font-medium text-charcoal mb-2 font-body">Category</h4>
                <select
                  value={filters.category}
                  onChange={(e) => handleFilterChange("category", e.target.value)}
                  className="w-full px-4 py-2.5 border-2 border-background-300 rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald font-body"
                >
                  <option value="">All Categories</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Party">Party</option>
                  <option value="Graduation">Graduation</option>
                  <option value="Cultural">Cultural</option>
                  <option value="Formal">Formal</option>
                </select>
              </div>
              
              <div className="space-y-3">
                <label className="flex items-center gap-3 font-body">
                  <input
                    type="checkbox"
                    checked={filters.rentOnly}
                    onChange={(e) => handleFilterChange("rentOnly", e.target.checked)}
                    className="rounded text-emerald focus:ring-emerald h-5 w-5"
                  />
                  <span className="text-charcoal">Rent Only</span>
                </label>
                <label className="flex items-center gap-3 font-body">
                  <input
                    type="checkbox"
                    checked={filters.verifiedOnly}
                    onChange={(e) => handleFilterChange("verifiedOnly", e.target.checked)}
                    className="rounded text-emerald focus:ring-emerald h-5 w-5"
                  />
                  <span className="text-charcoal">Verified Sellers Only</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Tags Cloud */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-background-300">
          <h3 className="font-semibold text-charcoal mb-4 text-xl font-heading">Popular Tags</h3>
          <div className="flex flex-wrap gap-3">
            {allTags.slice(0, 12).map((tag, idx) => (
              <button
                key={idx}
                onClick={() => setSearch(tag.replace('#', ''))}
                className="text-sm bg-background-200 text-slate-grey px-4 py-2 rounded-full hover:bg-emerald hover:text-white transition-all duration-300 font-body"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar - Desktop */}
          <div className="hidden md:block w-full md:w-80 bg-white p-6 rounded-2xl shadow-lg border border-background-300 h-fit">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-charcoal text-xl font-heading">Filters</h3>
              <button onClick={clearFilters} className="text-sm text-emerald hover:underline font-body">
                Clear All
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-charcoal mb-3 font-body">Price Range (UGX)</h4>
                <div className="mb-2">
                  <span className="text-sm text-slate-grey font-body">
                    {filters.priceRange[0].toLocaleString()} - {filters.priceRange[1].toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="200000"
                  step="10000"
                  value={filters.priceRange[1]}
                  onChange={(e) => handleFilterChange("priceRange", [filters.priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-background-300 rounded-lg appearance-none cursor-pointer accent-emerald"
                />
              </div>
              
              <div>
                <h4 className="font-medium text-charcoal mb-2 font-body">Category</h4>
                <select
                  value={filters.category}
                  onChange={(e) => handleFilterChange("category", e.target.value)}
                  className="w-full px-4 py-2.5 border-2 border-background-300 rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald font-body"
                >
                  <option value="">All Categories</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Party">Party</option>
                  <option value="Graduation">Graduation</option>
                  <option value="Cultural">Cultural</option>
                  <option value="Formal">Formal</option>
                </select>
              </div>
              
              <div>
                <h4 className="font-medium text-charcoal mb-2 font-body">Size</h4>
                <select
                  value={filters.size}
                  onChange={(e) => handleFilterChange("size", e.target.value)}
                  className="w-full px-4 py-2.5 border-2 border-background-300 rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald font-body"
                >
                  <option value="">All Sizes</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
              </div>
              
              <div>
                <h4 className="font-medium text-charcoal mb-2 font-body">Color</h4>
                <select
                  value={filters.color}
                  onChange={(e) => handleFilterChange("color", e.target.value)}
                  className="w-full px-4 py-2.5 border-2 border-background-300 rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald font-body"
                >
                  <option value="">All Colors</option>
                  <option value="Red">Red</option>
                  <option value="Blue">Blue</option>
                  <option value="Floral">Floral</option>
                  <option value="Green">Green</option>
                  <option value="White">White</option>
                  <option value="Brown">Brown</option>
                </select>
              </div>
              
              <div className="space-y-3">
                <label className="flex items-center gap-3 font-body">
                  <input
                    type="checkbox"
                    checked={filters.rentOnly}
                    onChange={(e) => handleFilterChange("rentOnly", e.target.checked)}
                    className="rounded text-emerald focus:ring-emerald h-5 w-5"
                  />
                  <span className="text-charcoal">Rent Only</span>
                </label>
                <label className="flex items-center gap-3 font-body">
                  <input
                    type="checkbox"
                    checked={filters.verifiedOnly}
                    onChange={(e) => handleFilterChange("verifiedOnly", e.target.checked)}
                    className="rounded text-emerald focus:ring-emerald h-5 w-5"
                  />
                  <span className="text-charcoal">Verified Sellers Only</span>
                </label>
              </div>
            </div>
          </div>
          
          {/* Content Area */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <p className="text-slate-grey font-body">
                Showing {currentItems.length} of {filteredOutfits.length} items
              </p>
              
              <div className="flex items-center gap-4">
                <span className="text-slate-grey text-sm font-body">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2.5 border-2 border-background-300 rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald text-sm font-body"
                >
                  <option value="newest">Newest First</option>
                  <option value="priceLowHigh">Price: Low to High</option>
                  <option value="priceHighLow">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
            
            {isLoading ? (
              <SkeletonLoader />
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentItems.length > 0 ? (
                    currentItems.map((item) => (
                      <div
                        key={item.id}
                        className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-background-300"
                      >
                        <div className="relative">
                          <div className="h-72 bg-background-300 overflow-hidden">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                            />
                            {!item.available && (
                              <div className="absolute inset-0 bg-charcoal bg-opacity-70 flex items-center justify-center">
                                <span className="text-white font-bold bg-red-600 px-4 py-2 rounded-lg font-body">Not Available</span>
                              </div>
                            )}
                          </div>
                          <button 
                            onClick={() => toggleWishlist(item.id)}
                            className={`absolute top-4 right-4 p-3 rounded-full shadow-lg transition-all ${
                              wishlist.includes(item.id) 
                                ? 'bg-red-500 text-white' 
                                : 'bg-white text-slate-grey hover:bg-emerald hover:text-white'
                            }`}
                          >
                            {wishlist.includes(item.id) ? <FaHeart /> : <FaRegHeart />}
                          </button>
                          {item.verified && (
                            <div className="absolute top-4 left-4 bg-emerald text-white text-xs px-3 py-1.5 rounded-full font-body font-semibold shadow-lg">
                              Verified
                            </div>
                          )}
                        </div>
                        <div className="p-5 space-y-3">
                          <h3 className="font-semibold text-xl text-charcoal font-heading">{item.title}</h3>
                          <div className="flex items-center text-sm text-slate-grey font-body">
                            <span>{item.category}</span>
                            <span className="mx-2">•</span>
                            <span>{item.location}</span>
                          </div>
                          <div className="flex items-center">
                            <div className="flex text-accent">
                              {[...Array(5)].map((_, i) => (
                                <FaStar 
                                  key={i} 
                                  className={i < Math.floor(item.rating) ? 'text-accent' : 'text-background-400'} 
                                />
                              ))}
                            </div>
                            <span className="ml-2 text-sm text-slate-grey font-body">({item.reviews})</span>
                          </div>
                          <p className="font-bold text-emerald text-xl font-body">
                            UGX {item.price.toLocaleString()} {item.rent && "/day"}
                          </p>
                          {item.rent && (
                            <p className="text-slate-grey text-sm font-body">
                              Deposit: UGX {item.deposit.toLocaleString()}
                            </p>
                          )}
                          
                          <div className="flex flex-wrap gap-2">
                            {item.tags.slice(0, 3).map((tag, idx) => (
                              <span key={idx} className="text-xs bg-background-200 text-slate-grey px-3 py-1.5 rounded-full font-body">
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex gap-3 mt-4">
                            <button
                              onClick={() => handleView(item.id)}
                              className="flex-1 bg-background-200 text-charcoal py-3 rounded-xl hover:bg-background-300 transition-all font-body font-semibold"
                            >
                              View Details
                            </button>
                            {item.rent && (
                              <button
                                onClick={() => openModal(item, "rent")}
                                disabled={!item.available}
                                className={`flex-1 py-3 rounded-xl text-sm font-body font-semibold transition-all ${
                                  item.available 
                                    ? 'bg-emerald text-white hover:bg-forest shadow-lg hover:shadow-xl' 
                                    : 'bg-background-300 text-slate-grey cursor-not-allowed'
                                }`}
                              >
                                Rent
                              </button>
                            )}
                            <button
                              onClick={() => openModal(item, "buy")}
                              disabled={!item.available}
                              className={`flex-1 py-3 rounded-xl text-sm font-body font-semibold transition-all ${
                                item.available 
                                  ? 'bg-accent text-charcoal hover:bg-accent-600 shadow-lg hover:shadow-xl' 
                                  : 'bg-background-300 text-slate-grey cursor-not-allowed'
                              }`}
                            >
                              Buy
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-full text-center py-16">
                      <FaSearch className="text-6xl text-background-400 mb-6 mx-auto" />
                      <h3 className="text-2xl font-semibold text-charcoal font-heading mb-3">No outfits found</h3>
                      <p className="text-slate-grey font-body mb-6">Try adjusting your filters or search terms</p>
                      <button 
                        onClick={clearFilters}
                        className="px-8 py-3 bg-emerald text-white rounded-xl hover:bg-forest transition-all font-body font-semibold shadow-lg hover:shadow-xl"
                      >
                        Clear All Filters
                      </button>
                    </div>
                  )}
                </div>
                
                {totalPages > 1 && (
                  <div className="flex justify-center mt-12">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 rounded-xl border-2 border-background-300 disabled:opacity-50 hover:bg-background-200 transition-all font-body"
                      >
                        <FaChevronLeft />
                      </button>
                      
                      {[...Array(totalPages)].map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentPage(index + 1)}
                          className={`w-12 h-12 rounded-xl font-body font-semibold transition-all ${
                            currentPage === index + 1 
                              ? 'bg-emerald text-white shadow-lg' 
                              : 'border-2 border-background-300 hover:bg-background-200'
                          }`}
                        >
                          {index + 1}
                        </button>
                      ))}
                      
                      <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 rounded-xl border-2 border-background-300 disabled:opacity-50 hover:bg-background-200 transition-all font-body"
                      >
                        <FaChevronRight />
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-r from-emerald to-forest py-16 px-4 md:px-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">Never Miss a Style Update</h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg font-body leading-relaxed">
            Subscribe to our newsletter for the latest fashion trends and exclusive rental deals
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-4 rounded-xl text-charcoal focus:outline-none focus:ring-2 focus:ring-accent font-body"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-accent text-charcoal font-semibold rounded-xl hover:bg-accent-600 transition-all flex items-center justify-center gap-3 font-body shadow-lg hover:shadow-xl"
            >
              Subscribe <FaArrowRight />
            </button>
          </form>
        </div>
      </section>

      {/* Rental/Buy Modal */}
      {modalOpen && selectedItem && (
        <div className="fixed inset-0 bg-charcoal bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-charcoal font-heading">
                  {actionType === "rent" ? "Rent Outfit" : "Purchase Outfit"}
                </h3>
                <button onClick={closeModal} className="text-slate-grey hover:text-charcoal transition-colors">
                  <FaTimes size={20} />
                </button>
              </div>
              
              <div className="flex gap-6 mb-8">
                <div className="w-28 h-28 bg-background-300 rounded-xl overflow-hidden shadow-lg">
                  <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg text-charcoal font-heading mb-2">{selectedItem.title}</h4>
                  <p className="text-emerald font-bold text-xl font-body">UGX {selectedItem.price.toLocaleString()}</p>
                  {actionType === "rent" && (
                    <p className="text-sm text-slate-grey font-body">Deposit: UGX {selectedItem.deposit.toLocaleString()}</p>
                  )}
                </div>
              </div>
              
              {actionType === "rent" && (
                <div className="mb-8">
                  <label className="block text-sm font-medium text-charcoal mb-3 font-body">Rental Period (Days)</label>
                  <div className="flex items-center">
                    <button 
                      onClick={() => setRentalDays(prev => Math.max(1, prev - 1))}
                      className="w-12 h-12 bg-background-200 rounded-l-xl flex items-center justify-center hover:bg-background-300 transition-colors"
                    >
                      <FaChevronLeft size={14} />
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={rentalDays}
                      onChange={(e) => setRentalDays(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-20 h-12 border-y-2 border-background-300 text-center font-body font-semibold"
                    />
                    <button 
                      onClick={() => setRentalDays(prev => prev + 1)}
                      className="w-12 h-12 bg-background-200 rounded-r-xl flex items-center justify-center hover:bg-background-300 transition-colors"
                    >
                      <FaChevronRight size={14} />
                    </button>
                  </div>
                  <p className="text-sm text-slate-grey mt-3 font-body">
                    Total: UGX {(selectedItem.price * rentalDays).toLocaleString()}
                  </p>
                </div>
              )}
              
              <div className="bg-background-100 p-6 rounded-xl mb-8">
                <h4 className="font-medium text-charcoal mb-4 font-heading">Summary</h4>
                <div className="space-y-3 text-sm font-body">
                  <div className="flex justify-between">
                    <span className="text-slate-grey">{actionType === "rent" ? "Rental Cost" : "Item Price"}</span>
                    <span className="text-charcoal font-semibold">UGX {actionType === "rent" ? (selectedItem.price * rentalDays).toLocaleString() : selectedItem.price.toLocaleString()}</span>
                  </div>
                  {actionType === "rent" && (
                    <div className="flex justify-between">
                      <span className="text-slate-grey">Refundable Deposit</span>
                      <span className="text-charcoal font-semibold">UGX {selectedItem.deposit.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="border-t border-background-300 pt-3 mt-3 font-medium flex justify-between">
                    <span className="text-charcoal">Total Amount</span>
                    <span className="text-emerald font-bold">UGX {actionType === "rent" 
                      ? (selectedItem.price * rentalDays + selectedItem.deposit).toLocaleString() 
                      : selectedItem.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={handleConfirm}
                className="w-full bg-emerald text-white py-4 rounded-xl font-semibold hover:bg-forest transition-all shadow-lg hover:shadow-xl font-body text-lg"
              >
                Confirm {actionType === "rent" ? "Rental" : "Purchase"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}