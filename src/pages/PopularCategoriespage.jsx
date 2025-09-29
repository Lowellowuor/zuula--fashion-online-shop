// src/pages/PopularCategoriesPage.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHeart, FaRegHeart, FaSearch, FaFilter, FaTh, FaList,
  FaChevronLeft, FaChevronRight, FaStar, FaArrowRight, FaTimes
} from "react-icons/fa";

export default function PopularCategoriesPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [sort, setSort] = useState("newest");
  const [wishlist, setWishlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: [0, 200],
    rentOnly: false,
    verifiedOnly: false,
    availabilityOnly: false
  });
  const itemsPerPage = 8;

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [actionType, setActionType] = useState("");
  const [rentalDays, setRentalDays] = useState(1);

  // Categories with images
  const categories = [
    { name: "Wedding", count: 28, image: "../assets/download(5).jpg" },
    { name: "Party", count: 42, image: "../assets/download(5).jpg" },
    { name: "Graduation", count: 15, image: "../assetts/download(5).jpg" },
    { name: "Cultural", count: 23, image: "../assets/download(5).jpg" },
    { name: "Formal", count: 35, image: "../assets/download(5).jpg" },
    { name: "Casual", count: 56, image: "../assets/download(5).jpg" },
    { name: "Traditional", count: 31, image: "../assets/download(5).jpg" },
    { name: "Evening", count: 19, image: "../assets/download(5).jpg" }
  ];

  // Outfits data
  const outfits = Array.from({ length: 40 }).map((_, i) => ({
    id: i + 1,
    title: `Designer Outfit ${i + 1}`,
    category: categories[i % categories.length].name,
    size: ["S", "M", "L", "XL"][i % 4],
    color: ["Red", "Blue", "Green", "Purple", "Black", "White"][i % 6],
    price: Math.floor(Math.random() * 100000) + 20000,
    deposit: Math.floor(Math.random() * 30000) + 10000,
    rent: Math.random() > 0.3,
    image: `https://source.unsplash.com/400x500/?fashion,clothing,${i}`,
    seller: `Seller${i + 1}`,
    verified: Math.random() > 0.4,
    location: ["Kampala", "Entebbe", "Jinja", "Mbale"][i % 4],
    condition: ["Excellent", "Good", "New"][i % 3],
    rating: (Math.random() * 0.7 + 4.2).toFixed(1),
    reviews: Math.floor(Math.random() * 50) + 5,
    available: Math.random() > 0.2,
    tags: ["#trending", "#popular", "#newarrival", "#bestseller"].slice(0, 2 + i % 2),
    dateAdded: "Sept " + (Math.floor(Math.random() * 30) + 1) + ", 2025",
    description: "Beautiful outfit perfect for various occasions."
  }));

  // Load wishlist from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (id) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(w => w !== id) : [...prev, id]);
  };

  // Filtering
  const filteredOutfits = outfits
    .filter(o => (activeCategory === "all" || o.category === activeCategory) &&
      o.title.toLowerCase().includes(search.toLowerCase()) &&
      o.price >= filters.priceRange[0] * 1000 &&
      o.price <= filters.priceRange[1] * 1000 &&
      (filters.rentOnly ? o.rent : true) &&
      (filters.verifiedOnly ? o.verified : true) &&
      (filters.availabilityOnly ? o.available : true))
    .sort((a, b) => {
      if (sort === "priceLowHigh") return a.price - b.price;
      if (sort === "priceHighLow") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      return b.id - a.id; // newest
    });

  const totalPages = Math.ceil(filteredOutfits.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedOutfits = filteredOutfits.slice(startIndex, startIndex + itemsPerPage);

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setFilters({ priceRange: [0, 200], rentOnly: false, verifiedOnly: false, availabilityOnly: false });
    setSearch("");
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
    console.log(`${actionType === "rent" ? "Rental" : "Purchase"} confirmed for ${selectedItem.title}`);
    closeModal();
  };

  return (
    <div className="min-h-screen bg-ivory px-4 md:px-20 py-10">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-forest/20 via-ivory to-accent/20 py-12 rounded-2xl overflow-hidden mb-8">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-forest rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gold rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-forest">
            Popular <span className="text-accent">Categories</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-charcoal font-light">
            Discover our most sought-after outfits for every occasion.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        <div
          className={`cursor-pointer rounded-2xl overflow-hidden shadow-card transition-transform transform hover:scale-105 ${
            activeCategory === "all" ? "ring-2 ring-accent" : "hover:shadow-xl"
          }`}
          onClick={() => { setActiveCategory("all"); setCurrentPage(1); }}
        >
          <div className="relative h-40 bg-gradient-to-br from-forest to-accent flex items-center justify-center">
            <div className="text-white text-center">
              <h3 className="text-xl font-bold">All Categories</h3>
              <p className="text-accent-100">{outfits.length} items</p>
            </div>
          </div>
        </div>

        {categories.map((cat, idx) => (
          <div
            key={idx}
            className={`cursor-pointer rounded-2xl overflow-hidden shadow-card transition-transform transform hover:scale-105 ${
              activeCategory === cat.name ? "ring-2 ring-accent" : "hover:shadow-xl"
            }`}
            onClick={() => { setActiveCategory(cat.name); setCurrentPage(1); }}
          >
            <div className="relative h-40">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-lg font-bold">{cat.name}</h3>
                  <p className="text-gray-200">{cat.count} items</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Search & Filters Header */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold text-forest">
            {activeCategory === "all" ? "All Outfits" : activeCategory} ({filteredOutfits.length})
          </h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg ${viewMode === "grid" ? "bg-accent/20 text-accent" : "bg-ivory text-charcoal"}`}
            >
              <FaTh />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg ${viewMode === "list" ? "bg-accent/20 text-accent" : "bg-ivory text-charcoal"}`}
            >
              <FaList />
            </button>
          </div>
        </div>
        <div className="flex gap-2 items-center w-full md:w-auto">
          <div className="relative flex-1 md:flex-none">
            <input
              type="text"
              placeholder="Search outfits..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-64 px-4 py-2 pl-10 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-2 bg-accent text-ivory rounded-lg hover:bg-accent-dark flex items-center gap-2"
          >
            <FaFilter />
            <span className="hidden md:inline">Filters</span>
          </button>
        </div>
      </div>

      {/* Mobile Filters */}
      {showFilters && (
        <div className="md:hidden bg-ivory p-6 rounded-2xl shadow-card mb-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-forest">Filters</h3>
            <button onClick={clearFilters} className="text-sm text-accent hover:underline">
              Clear All
            </button>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-forest mb-2">Price Range (UGX '000)</h4>
              <div className="mb-2">
                <span className="text-sm text-charcoal">{filters.priceRange[0]}K - {filters.priceRange[1]}K</span>
              </div>
              <input
                type="range"
                min="0"
                max="200"
                step="10"
                value={filters.priceRange[1]}
                onChange={(e) => handleFilterChange("priceRange", [filters.priceRange[0], parseInt(e.target.value)])}
                className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
              />
            </div>
            <div className="space-y-3">
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={filters.rentOnly} onChange={(e) => handleFilterChange("rentOnly", e.target.checked)} className="rounded text-accent focus:ring-accent" />
                <span className="text-sm text-forest">Rent Only</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={filters.verifiedOnly} onChange={(e) => handleFilterChange("verifiedOnly", e.target.checked)} className="rounded text-accent focus:ring-accent" />
                <span className="text-sm text-forest">Verified Sellers Only</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={filters.availabilityOnly} onChange={(e) => handleFilterChange("availabilityOnly", e.target.checked)} className="rounded text-accent focus:ring-accent" />
                <span className="text-sm text-forest">Available Only</span>
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="hidden md:block w-full md:w-64 bg-ivory p-6 rounded-2xl shadow-card h-fit">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-forest">Filters</h3>
            <button onClick={clearFilters} className="text-sm text-accent hover:underline">Clear All</button>
          </div>
          {/* Price + checkboxes same as mobile */}
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-forest mb-2">Price Range (UGX '000)</h4>
              <div className="mb-2">
                <span className="text-sm text-charcoal">{filters.priceRange[0]}K - {filters.priceRange[1]}K</span>
              </div>
              <input
                type="range"
                min="0"
                max="200"
                step="10"
                value={filters.priceRange[1]}
                onChange={(e) => handleFilterChange("priceRange", [filters.priceRange[0], parseInt(e.target.value)])}
                className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
              />
            </div>
            <div className="space-y-3">
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={filters.rentOnly} onChange={(e) => handleFilterChange("rentOnly", e.target.checked)} className="rounded text-accent focus:ring-accent" />
                <span className="text-sm text-forest">Rent Only</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={filters.verifiedOnly} onChange={(e) => handleFilterChange("verifiedOnly", e.target.checked)} className="rounded text-accent focus:ring-accent" />
                <span className="text-sm text-forest">Verified Sellers Only</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={filters.availabilityOnly} onChange={(e) => handleFilterChange("availabilityOnly", e.target.checked)} className="rounded text-accent focus:ring-accent" />
                <span className="text-sm text-forest">Available Only</span>
              </label>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <p className="text-charcoal">Showing {paginatedOutfits.length} of {filteredOutfits.length} items</p>
            <div className="flex items-center gap-4">
              <span className="text-charcoal text-sm">Sort by:</span>
              <select value={sort} onChange={(e) => setSort(e.target.value)} className="px-3 py-2 border rounded-lg text-sm">
                <option value="newest">Newest</option>
                <option value="priceLowHigh">Price: Low to High</option>
                <option value="priceHighLow">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Items Grid/List */}
          <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6" : "flex flex-col gap-6"}>
            {paginatedOutfits.length > 0 ? paginatedOutfits.map(item => (
              <div key={item.id} className={`bg-ivory shadow-card rounded-2xl overflow-hidden hover:shadow-xl transition-shadow ${viewMode === "list" ? "flex flex-col md:flex-row" : ""}`}>
                <div className={`relative ${viewMode === "list" ? "w-full md:w-48 h-64 md:h-auto" : "w-full h-64"}`}>
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform hover:scale-105" />
                  {!item.available && <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"><span className="text-white font-bold bg-red-600 px-3 py-1 rounded-lg">Unavailable</span></div>}
                  <button onClick={() => toggleWishlist(item.id)} className="absolute top-3 right-3 text-red-500 text-xl">
                    {wishlist.includes(item.id) ? <FaHeart /> : <FaRegHeart />}
                  </button>
                </div>
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-semibold text-lg text-forest">{item.title}</h3>
                    <p className="text-sm text-charcoal mb-2">{item.category} • {item.size} • {item.color}</p>
                    <p className="text-accent font-bold text-xl mb-1">UGX {item.price.toLocaleString()}</p>
                    <p className="text-gray-500 text-sm mb-2">Deposit: UGX {item.deposit.toLocaleString()}</p>
                    <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                    <div className="flex items-center gap-2 text-sm text-yellow-500 mb-2">
                      <FaStar /> {item.rating} ({item.reviews} reviews)
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, i) => <span key={i} className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">{tag}</span>)}
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2 flex-wrap">
                    {item.rent && <button onClick={() => openModal(item, "rent")} className="flex-1 px-3 py-2 bg-forest text-ivory rounded-lg hover:bg-forest-dark">Rent</button>}
                    <button onClick={() => openModal(item, "buy")} className="flex-1 px-3 py-2 bg-accent text-ivory rounded-lg hover:bg-accent-dark">Buy</button>
                  </div>
                </div>
              </div>
            )) : <p className="text-center text-charcoal font-semibold py-10">No items found.</p>}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-8 gap-3">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                className="px-3 py-2 bg-ivory rounded-lg shadow hover:bg-accent/20"
              >
                <FaChevronLeft />
              </button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-2 rounded-lg ${currentPage === i + 1 ? "bg-accent text-ivory" : "bg-ivory hover:bg-accent/20"}`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                className="px-3 py-2 bg-ivory rounded-lg shadow hover:bg-accent/20"
              >
                <FaChevronRight />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-ivory p-6 md:p-8 rounded-2xl max-w-md w-full relative">
            <button onClick={closeModal} className="absolute top-3 right-3 text-charcoal text-xl"><FaTimes /></button>
            <h2 className="text-2xl font-bold text-forest mb-4">{actionType === "rent" ? "Rent Outfit" : "Buy Outfit"}</h2>
            <p className="mb-4">{selectedItem.title} - UGX {selectedItem.price.toLocaleString()}</p>
            {actionType === "rent" && (
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-charcoal">Rental Days</label>
                <input type="number" min="1" value={rentalDays} onChange={e => setRentalDays(e.target.value)} className="w-full px-3 py-2 border rounded-lg" />
              </div>
            )}
            <button onClick={handleConfirm} className="w-full bg-accent text-ivory px-4 py-2 rounded-lg hover:bg-accent-dark">{actionType === "rent" ? `Rent for ${rentalDays} days` : "Buy Now"}</button>
          </div>
        </div>
      )}
    </div>
  );
}
