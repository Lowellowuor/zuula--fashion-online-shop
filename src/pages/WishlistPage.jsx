import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaHeart, FaRegHeart, FaTh, FaList, FaTimes, FaSearch, FaFilter, FaChevronLeft, FaChevronRight, FaCalendarAlt, FaUser, FaTags, FaArrowRight } from "react-icons/fa";

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
  {
    id: 3,
    title: "Graduation Gown",
    category: "Graduation",
    size: "L",
    color: "Blue",
    price: 75000,
    deposit: 15000,
    rent: false,
    image: "https://images.unsplash.com/photo-1606760227093-89928ed6078d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    seller: "ClassyCloset",
    verified: true,
    location: "Kampala",
    condition: "New",
    rating: 4.9,
    reviews: 31,
    available: true,
    tags: ["#graduation", "#formal", "#academic"],
    dateAdded: "Sept 15, 2025",
    description: "Elegant graduation gown perfect for your special day. High-quality fabric with a traditional design."
  },
  {
    id: 4,
    title: "Designer Kanzu",
    category: "Formal",
    size: "XL",
    color: "White",
    price: 120000,
    deposit: 30000,
    rent: true,
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    seller: "LuxuryWardrobe",
    verified: true,
    location: "Kampala",
    condition: "Excellent",
    rating: 4.7,
    reviews: 18,
    available: false,
    tags: ["#traditional", "#formal", "#designer"],
    dateAdded: "Sept 10, 2025",
    description: "Designer Kanzu made with premium fabric. Perfect for formal events and ceremonies."
  },
  {
    id: 5,
    title: "Cultural Bark Cloth Outfit",
    category: "Cultural",
    size: "M",
    color: "Brown",
    price: 85000,
    deposit: 25000,
    rent: true,
    image: "https://images.unsplash.com/photo-1581252584894-2f5be56f3878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    seller: "HeritageStyles",
    verified: true,
    location: "Jinja",
    condition: "Good",
    rating: 4.5,
    reviews: 15,
    available: true,
    tags: ["#cultural", "#traditional", "#ugandaculture"],
    dateAdded: "Sept 8, 2025",
    description: "Authentic bark cloth outfit showcasing Uganda's cultural heritage. Unique and eye-catching design."
  },
  {
    id: 6,
    title: "Evening Gown with Kitenge",
    category: "Party",
    size: "L",
    color: "Green",
    price: 95000,
    deposit: 35000,
    rent: true,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
    seller: "AfroChic",
    verified: false,
    location: "Kampala",
    condition: "Excellent",
    rating: 4.3,
    reviews: 9,
    available: true,
    tags: ["#evening", "#kitenge", "#africanprint"],
    dateAdded: "Sept 5, 2025",
    description: "Stunning evening gown featuring beautiful Kitenge patterns. Perfect for special occasions and events."
  },
  {
    id: 7,
    title: "Modern Gomesi with Embroidery",
    category: "Wedding",
    size: "M",
    color: "Purple",
    price: 110000,
    deposit: 25000,
    rent: true,
    image: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    seller: "ModernTradition",
    verified: true,
    location: "Kampala",
    condition: "Excellent",
    rating: 4.6,
    reviews: 17,
    available: true,
    tags: ["#modern", "#traditional", "#embroidery"],
    dateAdded: "Sept 3, 2025",
    description: "Modern take on the traditional Gomesi with intricate embroidery. A perfect blend of contemporary and traditional styles."
  },
  {
    id: 8,
    title: "Executive Office Suit",
    category: "Formal",
    size: "L",
    color: "Navy",
    price: 90000,
    deposit: 20000,
    rent: true,
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    seller: "ProfessionalWear",
    verified: true,
    location: "Kampala",
    condition: "New",
    rating: 4.4,
    reviews: 11,
    available: true,
    tags: ["#office", "#professional", "#executive"],
    dateAdded: "Aug 28, 2025",
    description: "Elegant executive suit perfect for office wear and professional events. Tailored for a perfect fit."
  }
];

export default function WishlistPage() {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("newest");
  const [filters, setFilters] = useState({
    category: "",
    size: "",
    color: "",
    priceRange: [0, 200000],
    rentOnly: false,
    condition: "",
    location: "",
    verifiedOnly: false,
    availabilityOnly: false
  });
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const itemsPerPage = 8;

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [actionType, setActionType] = useState("");
  const [rentalDays, setRentalDays] = useState(1);

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(saved.length > 0 ? saved : [1, 2, 5]);
  }, []);

  // Sync with localStorage
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Derived wishlist items
  const wishlistItems = sampleOutfits.filter((item) =>
    wishlist.includes(item.id)
  );

  // Filtering
  const filteredItems = wishlistItems.filter((item) => {
    return (
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (filters.category ? item.category === filters.category : true) &&
      (filters.size ? item.size === filters.size : true) &&
      (filters.color ? item.color === filters.color : true) &&
      (filters.condition ? item.condition === filters.condition : true) &&
      (filters.location ? item.location === filters.location : true) &&
      (filters.rentOnly ? item.rent === true : true) &&
      (filters.verifiedOnly ? item.verified === true : true) &&
      (filters.availabilityOnly ? item.available === true : true) &&
      item.price >= filters.priceRange[0] &&
      item.price <= filters.priceRange[1]
    );
  });

  // Sorting
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === "priceLowHigh") return a.price - b.price;
    if (sortBy === "priceHighLow") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return wishlist.indexOf(a.id) - wishlist.indexOf(b.id);
  });

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedItems.length / itemsPerPage);

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
    setCurrentPage(1);
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
      verifiedOnly: false,
      availabilityOnly: false
    });
    setSearch("");
  };

  // Remove single item
  const removeItem = (id) => {
    setWishlist(wishlist.filter((itemId) => itemId !== id));
  };

  // Bulk remove
  const clearWishlist = () => {
    setWishlist([]);
  };

  // Modal functions
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
    console.log(
      `${actionType === "rent" ? "Rental" : "Purchase"} confirmed for ${
        selectedItem.title
      }`
    );
    closeModal();
  };

  // Navigation functions - SAME AS BROWSER PAGE
  const handleView = (item) => {
    navigate(`/item/${item.id}`, { state: { item } });
  };

  const handleRent = (item) => {
    if (item.rent) {
      navigate(`/rent/${item.id}`, { state: { item } });
    }
  };

  const handleBuy = (item) => {
    navigate(`/buy/${item.id}`, { state: { item } });
  };

  // Get all unique tags
  const allTags = Array.from(new Set(sampleOutfits.flatMap(item => item.tags)));

  return (
    <div className="min-h-screen bg-background px-4 md:px-20 py-10">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-100 via-background to-accent-100 py-16 rounded-2xl overflow-hidden mb-8 premium-card">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-primary">
            My <span className="text-gold">Wishlist</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-text-secondary font-light">
            Your favorite outfits saved for later. Rent or buy when you're ready!
          </p>
        </div>
      </section>

      {wishlistItems.length === 0 ? (
        <div className="text-center py-20 premium-card">
          <FaRegHeart className="text-6xl text-primary-300 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-text-secondary">
            Your wishlist is empty
          </h2>
          <p className="text-text-muted mt-2">
            Browse outfits and add your favorites to wishlist.
          </p>
          <button
            onClick={() => navigate("/browse")}
            className="mt-4 px-6 py-3 btn-primary rounded-lg"
          >
            Browse Outfits
          </button>
        </div>
      ) : (
        <>
          {/* Search & Filters Header */}
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-bold text-text-primary">
                Wishlist Items ({wishlistItems.length})
              </h2>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => setViewMode("grid")} 
                  className={`p-3 rounded-lg transition-all ${
                    viewMode === "grid" 
                      ? "bg-primary-100 text-primary-600 shadow-md" 
                      : "bg-background-300 text-text-muted hover:bg-background-400"
                  }`}
                >
                  <FaTh />
                </button>
                <button 
                  onClick={() => setViewMode("list")} 
                  className={`p-3 rounded-lg transition-all ${
                    viewMode === "list" 
                      ? "bg-primary-100 text-primary-600 shadow-md" 
                      : "bg-background-300 text-text-muted hover:bg-background-400"
                  }`}
                >
                  <FaList />
                </button>
              </div>
            </div>
            
            <div className="flex gap-2 items-center w-full md:w-auto">
              <div className="relative flex-1 md:flex-none">
                <input
                  type="text"
                  placeholder="Search in wishlist..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full md:w-64 px-4 py-3 pl-12 border border-background-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-background-50"
                />
                <FaSearch className="absolute left-4 top-3.5 text-text-muted" />
              </div>
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="px-4 py-3 btn-gold rounded-xl flex items-center gap-2"
              >
                <FaFilter /> 
                <span className="hidden md:inline">Filters</span>
              </button>
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="md:hidden premium-card p-6 mb-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-text-primary">Filters</h3>
                <button onClick={clearFilters} className="text-sm text-primary-600 hover:underline">
                  Clear All
                </button>
              </div>
              
              <div className="space-y-6">
                {/* Price Range Filter */}
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Price Range (UGX)</h4>
                  <div className="mb-2">
                    <span className="text-sm text-text-secondary">
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
                    className="w-full h-2 bg-background-300 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                </div>
                
                {/* Category Filter */}
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Category</h4>
                  <select
                    value={filters.category}
                    onChange={(e) => handleFilterChange("category", e.target.value)}
                    className="w-full px-3 py-2 border border-background-300 rounded-lg bg-background-50 focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">All Categories</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Party">Party</option>
                    <option value="Graduation">Graduation</option>
                    <option value="Cultural">Cultural</option>
                    <option value="Formal">Formal</option>
                  </select>
                </div>
                
                {/* Checkbox Filters */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={filters.rentOnly}
                      onChange={(e) => handleFilterChange("rentOnly", e.target.checked)}
                      className="rounded text-primary-600 focus:ring-primary-600"
                    />
                    <span className="text-sm text-text-primary">Rent Only</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={filters.verifiedOnly}
                      onChange={(e) => handleFilterChange("verifiedOnly", e.target.checked)}
                      className="rounded text-primary-600 focus:ring-primary-600"
                    />
                    <span className="text-sm text-text-primary">Verified Sellers Only</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={filters.availabilityOnly}
                      onChange={(e) => handleFilterChange("availabilityOnly", e.target.checked)}
                      className="rounded text-primary-600 focus:ring-primary-600"
                    />
                    <span className="text-sm text-text-primary">Available Only</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Tags Cloud */}
          <div className="premium-card p-6 mb-6">
            <h3 className="font-semibold text-text-primary mb-4 text-lg">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              {allTags.slice(0, 12).map((tag, idx) => (
                <button
                  key={idx}
                  onClick={() => setSearch(tag.replace('#', ''))}
                  className="text-xs bg-background-300 text-text-secondary px-3 py-1.5 rounded-full hover:bg-primary-100 hover:text-primary-600 transition-all"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar - Desktop */}
            <div className="hidden md:block w-full md:w-64 premium-card h-fit">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-text-primary">Filters</h3>
                <button onClick={clearFilters} className="text-sm text-primary-600 hover:underline">
                  Clear All
                </button>
              </div>
              
              <div className="space-y-6">
                {/* Price Range Filter */}
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Price Range (UGX)</h4>
                  <div className="mb-2">
                    <span className="text-sm text-text-secondary">
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
                    className="w-full h-2 bg-background-300 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                </div>
                
                {/* Category Filter */}
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Category</h4>
                  <select
                    value={filters.category}
                    onChange={(e) => handleFilterChange("category", e.target.value)}
                    className="w-full px-3 py-2 border border-background-300 rounded-lg bg-background-50 focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">All Categories</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Party">Party</option>
                    <option value="Graduation">Graduation</option>
                    <option value="Cultural">Cultural</option>
                    <option value="Formal">Formal</option>
                  </select>
                </div>
                
                {/* Size Filter */}
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Size</h4>
                  <select
                    value={filters.size}
                    onChange={(e) => handleFilterChange("size", e.target.value)}
                    className="w-full px-3 py-2 border border-background-300 rounded-lg bg-background-50 focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">All Sizes</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </select>
                </div>
                
                {/* Color Filter */}
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Color</h4>
                  <select
                    value={filters.color}
                    onChange={(e) => handleFilterChange("color", e.target.value)}
                    className="w-full px-3 py-2 border border-background-300 rounded-lg bg-background-50 focus:ring-2 focus:ring-primary-500"
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
                
                {/* Checkbox Filters */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={filters.rentOnly}
                      onChange={(e) => handleFilterChange("rentOnly", e.target.checked)}
                      className="rounded text-primary-600 focus:ring-primary-600"
                    />
                    <span className="text-sm text-text-primary">Rent Only</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={filters.verifiedOnly}
                      onChange={(e) => handleFilterChange("verifiedOnly", e.target.checked)}
                      className="rounded text-primary-600 focus:ring-primary-600"
                    />
                    <span className="text-sm text-text-primary">Verified Sellers Only</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={filters.availabilityOnly}
                      onChange={(e) => handleFilterChange("availabilityOnly", e.target.checked)}
                      className="rounded text-primary-600 focus:ring-primary-600"
                    />
                    <span className="text-sm text-text-primary">Available Only</span>
                  </label>
                </div>
              </div>
            </div>
            
            {/* Content Area */}
            <div className="flex-1">
              {/* Sort & Results Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <p className="text-text-secondary">
                  Showing {currentItems.length} of {filteredItems.length} items
                </p>
                
                <div className="flex items-center gap-4">
                  <span className="text-text-secondary text-sm">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border border-background-300 rounded-lg text-sm bg-background-50 focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="newest">Newest Added</option>
                    <option value="priceLowHigh">Price: Low to High</option>
                    <option value="priceHighLow">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                  
                  <button
                    onClick={clearWishlist}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm transition-all"
                  >
                    Clear All
                  </button>
                </div>
              </div>
              
              {/* Items Grid/List */}
              <div className={
                viewMode === "grid" 
                  ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "flex flex-col gap-6"
              }>
                {currentItems.length > 0 ? (
                  currentItems.map((item) => (
                    <div
                      key={item.id}
                      className={`premium-card hover:shadow-xl transition-all ${
                        viewMode === "list" ? "flex flex-col md:flex-row" : ""
                      }`}
                    >
                      {/* Image */}
                      <div className={`relative overflow-hidden ${viewMode === "list" ? "w-full md:w-48 h-64 md:h-auto" : "w-full h-64"}`}>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                        {!item.available && (
                          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <span className="text-white font-bold bg-red-600 px-3 py-1 rounded-lg">Not Available</span>
                          </div>
                        )}
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="absolute top-3 right-3 p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors shadow-lg"
                        >
                          <FaHeart />
                        </button>
                        {item.verified && (
                          <div className="absolute top-3 left-3 bg-primary-600 text-white text-xs px-2 py-1 rounded shadow-md">
                            Verified
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-semibold text-lg text-text-primary mb-1">{item.title}</h3>
                          <div className="flex items-center text-sm text-text-muted mb-2">
                            <span>{item.category}</span>
                            <span className="mx-2">•</span>
                            <span>{item.location}</span>
                          </div>
                          <div className="flex items-center mb-2">
                            <div className="flex text-amber-500">
                              {[...Array(5)].map((_, i) => (
                                <FaStar 
                                  key={i} 
                                  className={i < Math.floor(item.rating) ? 'text-amber-500' : 'text-gray-300'} 
                                />
                              ))}
                            </div>
                            <span className="ml-2 text-sm text-text-secondary">({item.reviews})</span>
                          </div>
                          <p className="font-bold text-primary-600 text-lg">
                            UGX {item.price.toLocaleString()} {item.rent && "/day"}
                          </p>
                          {item.rent && (
                            <p className="text-text-muted text-sm">
                              Deposit: UGX {item.deposit.toLocaleString()}
                            </p>
                          )}
                          
                          {/* Tags */}
                          <div className="flex flex-wrap gap-1 mt-2">
                            {item.tags.slice(0, 3).map((tag, idx) => (
                              <span key={idx} className="text-xs bg-background-300 text-text-secondary px-2 py-1 rounded-full">{tag}</span>
                            ))}
                          </div>
                        </div>

                        {/* Actions - UPDATED TO MATCH BROWSER PAGE */}
                        <div className="flex gap-2 mt-3">
                          <button
                            onClick={() => handleView(item)}
                            className="flex-1 bg-background-300 text-text-secondary py-2 rounded-xl hover:bg-background-400 transition-colors text-sm font-medium"
                          >
                            View Details
                          </button>
                          {item.available && item.rent && (
                            <button
                              onClick={() => handleRent(item)}
                              className="flex-1 btn-primary py-2 rounded-xl text-sm font-medium"
                            >
                              Rent
                            </button>
                          )}
                          {item.available && (
                            <button
                              onClick={() => handleBuy(item)}
                              className="flex-1 bg-primary-700 text-white py-2 rounded-xl hover:bg-primary-800 transition-colors text-sm font-medium"
                            >
                              Buy
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12 premium-card">
                    <FaSearch className="text-4xl text-primary-300 mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold text-text-secondary">No items found in wishlist</h3>
                    <p className="text-text-muted mt-2">Try adjusting your filters or search terms</p>
                    <button 
                      onClick={clearFilters}
                      className="mt-4 px-4 py-2 btn-primary rounded-lg"
                    >
                      Clear All Filters
                    </button>
                  </div>
                )}
              </div>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center space-x-2 mt-8">
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="p-3 rounded-full bg-background-300 text-text-secondary hover:bg-background-400 disabled:opacity-50 transition-all"
                  >
                    <FaChevronLeft />
                  </button>
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                        currentPage === index + 1
                          ? "bg-primary-600 text-white shadow-md"
                          : "bg-background-300 text-text-secondary hover:bg-background-400"
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="p-3 rounded-full bg-background-300 text-text-secondary hover:bg-background-400 disabled:opacity-50 transition-all"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}

            {/* Modal */}
      {modalOpen && selectedItem && (
        <div className="fixed inset-0 bg-charcoal bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-fade-in">
            {/* Modal Header */}
            <div className="relative p-6 border-b border-background-300">
              <h3 className="text-2xl font-bold text-text-primary">
                {actionType === "rent" ? "Rent" : "Buy"} Outfit
              </h3>
              <button onClick={closeModal} className="absolute top-4 right-4 text-text-muted hover:text-text-primary transition-colors">
                <FaTimes size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              <div className="flex items-center space-x-4">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-24 h-24 object-cover rounded-lg shadow-md"
                />
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-text-primary">
                    {selectedItem.title}
                  </h4>
                  <p className="text-text-secondary">{selectedItem.category}</p>
                  <p className="text-lg font-bold text-primary-600 mt-1">
                    UGX {selectedItem.price.toLocaleString()}
                  </p>
                </div>
              </div>

              {actionType === "rent" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Rental Days
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="30"
                      value={rentalDays}
                      onChange={(e) => setRentalDays(parseInt(e.target.value) || 1)}
                      className="w-full px-3 py-2 border border-background-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  
                  <div className="bg-background-100 p-4 rounded-lg">
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">Rental cost:</span>
                      <span className="font-semibold">UGX {(selectedItem.price * rentalDays).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm mt-1">
                      <span className="text-text-secondary">Deposit:</span>
                      <span className="font-semibold">UGX {selectedItem.deposit.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold mt-2 pt-2 border-t border-background-300">
                      <span>Total:</span>
                      <span className="text-primary-600">
                        UGX {((selectedItem.price * rentalDays) + selectedItem.deposit).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {actionType === "buy" && (
                <div className="bg-background-100 p-4 rounded-lg">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Amount:</span>
                    <span className="text-primary-600">UGX {selectedItem.price.toLocaleString()}</span>
                  </div>
                </div>
              )}

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <FaUser className="text-blue-600 text-sm" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-blue-900 text-sm">Seller Information</h5>
                    <p className="text-blue-700 text-sm mt-1">
                      {selectedItem.seller} {selectedItem.verified && "(Verified)"}
                    </p>
                    <p className="text-blue-600 text-xs mt-1 flex items-center gap-1">
                      <FaTags className="inline" />
                      Located in {selectedItem.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-background-300 bg-background-100 flex flex-col sm:flex-row gap-3">
              <button
                onClick={closeModal}
                className="flex-1 px-4 py-3 border border-background-300 text-text-secondary rounded-xl hover:bg-background-200 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="flex-1 px-4 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors font-medium flex items-center justify-center gap-2"
              >
                Confirm {actionType === "rent" ? "Rental" : "Purchase"}
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}