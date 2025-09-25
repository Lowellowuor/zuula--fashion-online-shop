import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaHeart, FaRegHeart, FaFilter, FaStar, FaTimes, FaChevronLeft, FaChevronRight, FaCalendarAlt, FaUser, FaTags, FaArrowRight, FaFire, FaCrown, FaEye, FaBoxOpen } from "react-icons/fa";

export default function NewArrivalsSection() {
  const navigate = useNavigate();
  const [timeFilter, setTimeFilter] = useState("7days");
  const [sortBy, setSortBy] = useState("newest");
  const [search, setSearch] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState("grid");

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [actionType, setActionType] = useState("");
  const [rentalDays, setRentalDays] = useState(1);

  // Sample new arrivals data
  const newArrivals = [
    {
      id: 101,
      title: "Floral Print Maxi Dress",
      category: "wedding-guest",
      price: 80000,
      deposit: 55000,
      rating: 0,
      reviews: 0,
      location: "Kampala, Kololo",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
      available: true,
      verified: true,
      size: "42",
      color: "Multi-color",
      addedDate: "2023-10-20",
      isJustAdded: true,
      trending: true,
      tags: ["#wedding", "#floral", "#maxidress"],
      description: "Elegant floral maxi dress perfect for wedding guest occasions. Lightweight and comfortable with a flattering fit."
    },
    {
      id: 102,
      title: "Modern Gomesi with Gold Details",
      category: "traditional",
      price: 95000,
      deposit: 65000,
      rating: 0,
      reviews: 0,
      location: "Kampala, Central",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=500&fit=crop",
      available: true,
      verified: true,
      size: "44",
      color: "Purple",
      addedDate: "2023-10-19",
      isJustAdded: true,
      tags: ["#traditional", "#gomesi", "#golddetails"],
      description: "Modern take on the traditional Gomesi with intricate gold details. A perfect blend of contemporary and traditional styles."
    },
    {
      id: 103,
      title: "Graduation Stole & Dress Set",
      category: "graduation",
      price: 70000,
      deposit: 45000,
      rating: 0,
      reviews: 0,
      location: "Kampala, Makindye",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=500&fit=crop",
      available: true,
      verified: false,
      size: "40",
      color: "Blue",
      addedDate: "2023-10-18",
      isJustAdded: true,
      tags: ["#graduation", "#formal", "#academic"],
      description: "Complete graduation set including stole and dress. Perfect for your special academic achievement day."
    },
    {
      id: 104,
      title: "Kwanjula Outfit - Modern African",
      category: "introduction",
      price: 88000,
      deposit: 60000,
      rating: 4.7,
      reviews: 0,
      location: "Kampala, Nakawa",
      image: "https://images.unsplash.com/photo-1586023492125-27a5c5d2c2a1?w=400&h=500&fit=crop",
      available: true,
      verified: true,
      size: "46",
      color: "Gold",
      addedDate: "2023-10-15",
      isJustAdded: false,
      viewers: 12,
      tags: ["#kwanjula", "#african", "#traditional"],
      description: "Modern African outfit perfect for Kwanjula ceremonies. Elegant design with cultural significance."
    },
    {
      id: 105,
      title: "Sequined Party Dress",
      category: "party-club",
      price: 60000,
      deposit: 40000,
      rating: 0,
      reviews: 0,
      location: "Kampala, Lubaga",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=500&fit=crop",
      available: true,
      verified: false,
      size: "38",
      color: "Black",
      addedDate: "2023-10-10",
      isJustAdded: false,
      wishlistAdds: 8,
      tags: ["#party", "#sequined", "#evening"],
      description: "Sparkling sequined dress perfect for parties and evening events. Eye-catching and elegant."
    },
    {
      id: 106,
      title: "Bridal Gown with Train",
      category: "bridal",
      price: 160000,
      deposit: 100000,
      rating: 0,
      reviews: 0,
      location: "Kampala, Naguru",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=500&fit=crop",
      available: true,
      verified: true,
      size: "40",
      color: "Ivory",
      addedDate: "2023-10-05",
      isJustAdded: false,
      premiumOnly: true,
      tags: ["#bridal", "#wedding", "#train"],
      description: "Stunning bridal gown with elegant train. Perfect for your special wedding day."
    },
    {
      id: 107,
      title: "Traditional Bark Cloth Outfit",
      category: "cultural",
      price: 75000,
      deposit: 50000,
      rating: 0,
      reviews: 0,
      location: "Jinja",
      image: "https://images.unsplash.com/photo-1581252584894-2f5be56f3878?w=400&h=500&fit=crop",
      available: true,
      verified: true,
      size: "M",
      color: "Brown",
      addedDate: "2023-10-22",
      isJustAdded: true,
      tags: ["#cultural", "#traditional", "#barkcloth"],
      description: "Authentic bark cloth outfit showcasing Uganda's cultural heritage. Unique and eye-catching design."
    },
    {
      id: 108,
      title: "Executive Office Suit",
      category: "formal",
      price: 90000,
      deposit: 60000,
      rating: 4.4,
      reviews: 11,
      location: "Kampala",
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=500&fit=crop",
      available: true,
      verified: true,
      size: "L",
      color: "Navy",
      addedDate: "2023-10-21",
      isJustAdded: true,
      tags: ["#office", "#professional", "#executive"],
      description: "Elegant executive suit perfect for office wear and professional events. Tailored for a perfect fit."
    }
  ];

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Filter items based on time filter and search
  const filteredItems = newArrivals.filter(item => {
    const addedDate = new Date(item.addedDate);
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - addedDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    let timeFilterMatch = true;
    if (timeFilter === "7days") timeFilterMatch = diffDays <= 7;
    else if (timeFilter === "14days") timeFilterMatch = diffDays <= 14;
    else if (timeFilter === "30days") timeFilterMatch = diffDays <= 30;
    
    const searchMatch = item.title.toLowerCase().includes(search.toLowerCase()) || 
                       item.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
    
    return timeFilterMatch && searchMatch;
  });

  // Sort items
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === "newest") return new Date(b.addedDate) - new Date(a.addedDate);
    if (sortBy === "trending") return (b.wishlistAdds || 0) - (a.wishlistAdds || 0);
    if (sortBy === "priceLowHigh") return a.price - b.price;
    if (sortBy === "priceHighLow") return b.price - a.price;
    return 0;
  });

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(itemId => itemId !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
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

  // Get all unique tags
  const allTags = Array.from(new Set(newArrivals.flatMap(item => item.tags)));

  // Skeleton loader component
  const SkeletonLoader = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {[...Array(8)].map((_, index) => (
        <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden animate-pulse">
          <div className="h-72 bg-gray-200"></div>
          <div className="p-6 space-y-4">
            <div className="h-6 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-12 bg-gray-200 rounded mt-4"></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#F9F7F1',
      fontFamily: "'Lato', 'Open Sans', system-ui, sans-serif"
    }} className="px-4 md:px-20 py-12">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden mb-12" style={{
        background: 'linear-gradient(135deg, #046C4E 0%, #035c43 50%, #024c37 100%)',
        borderRadius: '16px',
        padding: '4rem 2rem',
        boxShadow: '0 20px 40px rgba(4, 108, 78, 0.3)'
      }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full" style={{
            backgroundColor: '#D4AF37',
            filter: 'blur(40px)',
            animation: 'float 6s ease-in-out infinite'
          }}></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full" style={{
            backgroundColor: '#00A86B',
            filter: 'blur(50px)',
            animation: 'float 8s ease-in-out infinite reverse'
          }}></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <h1 style={{
            fontFamily: 'Georgia, serif',
            fontSize: '3.5rem',
            fontWeight: '700',
            color: '#F7E7CE',
            marginBottom: '1.5rem',
            lineHeight: '1.2',
            letterSpacing: '-0.02em'
          }}>
            New Arrivals <span style={{ color: '#D4AF37' }}>Collection</span>
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#f0f7f4',
            maxWidth: '48rem',
            margin: '0 auto 2rem',
            lineHeight: '1.6',
            fontWeight: '300'
          }}>
            Discover the latest additions to our premium fashion rental collection. 
            Curated styles that blend elegance with contemporary fashion.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <button style={{
              background: 'linear-gradient(135deg, #D4AF37 0%, #b89422 100%)',
              color: '#013c2b',
              padding: '1rem 2rem',
              borderRadius: '8px',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
            }}>
              Explore Collection
            </button>
          </div>
        </div>
      </section>

      {/* Search & Filters Header */}
      <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-8">
        <div className="flex items-center space-x-6">
          <h2 style={{
            fontFamily: 'Georgia, serif',
            fontSize: '2rem',
            fontWeight: '600',
            color: '#024c37'
          }}>
            New Arrivals
          </h2>
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setViewMode("grid")} 
              style={{
                padding: '0.75rem',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: viewMode === "grid" ? '#d9ede6' : '#eae5ca',
                color: viewMode === "grid" ? '#035c43' : '#4A5568',
                transition: 'all 0.3s ease'
              }}
            >
              <i className="fas fa-th"></i>
            </button>
            <button 
              onClick={() => setViewMode("list")} 
              style={{
                padding: '0.75rem',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: viewMode === "list" ? '#d9ede6' : '#eae5ca',
                color: viewMode === "list" ? '#035c43' : '#4A5568',
                transition: 'all 0.3s ease'
              }}
            >
              <i className="fas fa-list"></i>
            </button>
          </div>
        </div>
        
        <div className="flex gap-3 items-center w-full lg:w-auto">
          <div className="relative flex-1 lg:flex-none">
            <input
              type="text"
              placeholder="Search new arrivals..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: '100%',
                minWidth: '16rem',
                padding: '0.875rem 1rem 0.875rem 2.5rem',
                border: '2px solid #b8ddd1',
                borderRadius: '8px',
                fontSize: '1rem',
                backgroundColor: 'white',
                color: '#3E2723'
              }}
              className="focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            <FaSearch className="absolute left-3 top-4 text-gray-400" />
          </div>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            style={{
              padding: '0.875rem 1.5rem',
              background: 'linear-gradient(135deg, #046C4E 0%, #035c43 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(4, 108, 78, 0.3)'
            }}
          >
            <FaFilter /> 
            <span className="hidden md:inline">Filters</span>
          </button>
        </div>
      </div>

      {/* Mobile Filters */}
      {showFilters && (
        <div className="md:hidden bg-white p-6 rounded-xl mb-8" style={{
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
          border: '1px solid #b8ddd1',
          borderTop: '4px solid #D4AF37'
        }}>
          <div className="flex justify-between items-center mb-6">
            <h3 style={{
              fontWeight: '600',
              color: '#024c37',
              fontSize: '1.125rem'
            }}>
              Filters
            </h3>
          </div>
          
          <div className="space-y-6">
            {/* Time Filter */}
            <div>
              <h4 style={{
                fontWeight: '500',
                color: '#035c43',
                marginBottom: '0.5rem'
              }}>
                Timeframe
              </h4>
              <select
                value={timeFilter}
                onChange={(e) => setTimeFilter(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  border: '2px solid #b8ddd1',
                  borderRadius: '8px',
                  backgroundColor: 'white',
                  color: '#3E2723'
                }}
              >
                <option value="7days">Last 7 Days</option>
                <option value="14days">Last 14 Days</option>
                <option value="30days">Last 30 Days</option>
              </select>
            </div>
            
            {/* Sort Filter */}
            <div>
              <h4 style={{
                fontWeight: '500',
                color: '#035c43',
                marginBottom: '0.5rem'
              }}>
                Sort By
              </h4>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  border: '2px solid #b8ddd1',
                  borderRadius: '8px',
                  backgroundColor: 'white',
                  color: '#3E2723'
                }}
              >
                <option value="newest">Newest First</option>
                <option value="trending">Most Popular</option>
                <option value="priceLowHigh">Price: Low to High</option>
                <option value="priceHighLow">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Tags Cloud */}
      <div className="bg-white p-8 rounded-xl mb-8" style={{
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
        border: '1px solid #b8ddd1',
        borderTop: '4px solid #D4AF37'
      }}>
        <h3 style={{
          fontWeight: '600',
          color: '#024c37',
          marginBottom: '1rem',
          fontSize: '1.25rem'
        }}>
          Popular Tags in New Arrivals
        </h3>
        <div className="flex flex-wrap gap-3">
          {allTags.slice(0, 12).map((tag, idx) => (
            <button
              key={idx}
              onClick={() => setSearch(tag.replace('#', ''))}
              style={{
                fontSize: '0.875rem',
                backgroundColor: '#f0f7f4',
                color: '#035c43',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                border: '1px solid #b8ddd1',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#d9ede6';
                e.target.style.color = '#024c37';
                e.target.style.borderColor = '#7cc4ab';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#f0f7f4';
                e.target.style.color = '#035c43';
                e.target.style.borderColor = '#b8ddd1';
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Filters & Sort Bar */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
        <p style={{ color: '#4A5568', fontSize: '1rem' }}>
          Showing {sortedItems.length} of {newArrivals.length} new items
        </p>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <span style={{ color: '#4A5568', fontSize: '0.875rem' }}>Timeframe:</span>
            <select
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
              style={{
                padding: '0.5rem 1rem',
                border: '2px solid #b8ddd1',
                borderRadius: '8px',
                fontSize: '0.875rem',
                backgroundColor: 'white',
                color: '#3E2723'
              }}
            >
              <option value="7days">Last 7 Days</option>
              <option value="14days">Last 14 Days</option>
              <option value="30days">Last 30 Days</option>
            </select>
          </div>
          
          <div className="flex items-center gap-3">
            <span style={{ color: '#4A5568', fontSize: '0.875rem' }}>Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: '0.5rem 1rem',
                border: '2px solid #b8ddd1',
                borderRadius: '8px',
                fontSize: '0.875rem',
                backgroundColor: 'white',
                color: '#3E2723'
              }}
            >
              <option value="newest">Newest First</option>
              <option value="trending">Most Popular</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* New Arrivals Grid */}
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <>
          {sortedItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {sortedItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
                  style={{
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                    border: '1px solid #b8ddd1',
                    borderTop: '4px solid #D4AF37'
                  }}
                >
                  <div className="relative">
                    <div className="h-72 bg-gray-100 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      {!item.available && (
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                          <span className="text-white font-bold bg-red-600 px-4 py-2 rounded-lg">Not Available</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {item.isJustAdded ? (
                        <span style={{
                          backgroundColor: '#dc2626',
                          color: 'white',
                          fontSize: '0.75rem',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '6px',
                          fontWeight: '600'
                        }}>
                          Just Added
                        </span>
                      ) : (
                        <span style={{
                          backgroundColor: '#046C4E',
                          color: 'white',
                          fontSize: '0.75rem',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '6px',
                          fontWeight: '600'
                        }}>
                          New
                        </span>
                      )}
                      
                      {item.trending && (
                        <span style={{
                          backgroundColor: '#D4AF37',
                          color: '#013c2b',
                          fontSize: '0.75rem',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '6px',
                          fontWeight: '600',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem'
                        }}>
                          <FaFire size={10} /> Trending
                        </span>
                      )}
                    </div>
                    
                    <button 
                      onClick={() => toggleWishlist(item.id)}
                      style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        padding: '0.75rem',
                        borderRadius: '50%',
                        border: 'none',
                        cursor: 'pointer',
                        backgroundColor: wishlist.includes(item.id) ? '#dc2626' : 'white',
                        color: wishlist.includes(item.id) ? 'white' : '#4A5568',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {wishlist.includes(item.id) ? <FaHeart /> : <FaRegHeart />}
                    </button>
                    
                    {item.verified && (
                      <div style={{
                        position: 'absolute',
                        top: '4rem',
                        right: '1rem',
                        backgroundColor: '#00A86B',
                        color: 'white',
                        fontSize: '0.75rem',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '6px',
                        fontWeight: '600'
                      }}>
                        Verified
                      </div>
                    )}
                    
                    {item.premiumOnly && (
                      <div style={{
                        position: 'absolute',
                        bottom: '1rem',
                        right: '1rem',
                        backgroundColor: '#D4AF37',
                        color: '#013c2b',
                        fontSize: '0.75rem',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '6px',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem'
                      }}>
                        <FaCrown size={10} /> Premium
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 space-y-3">
                    <h3 style={{
                      fontFamily: 'Georgia, serif',
                      fontWeight: '600',
                      fontSize: '1.25rem',
                      color: '#024c37',
                      lineHeight: '1.4'
                    }}>
                      {item.title}
                    </h3>
                    
                    <div className="flex items-center text-sm" style={{ color: '#4A5568' }}>
                      <span>{item.category}</span>
                      <span className="mx-2">•</span>
                      <span>{item.location}</span>
                    </div>
                    
                    {/* Rating or New Indicator */}
                    {item.rating > 0 ? (
                      <div className="flex items-center">
                        <div className="flex" style={{ color: '#D4AF37' }}>
                          {[...Array(5)].map((_, i) => (
                            <FaStar 
                              key={i} 
                              className={i < Math.floor(item.rating) ? 'text-current' : 'text-gray-300'} 
                              size={14}
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-sm" style={{ color: '#4A5568' }}>({item.reviews})</span>
                      </div>
                    ) : (
                      <div className="text-xs" style={{ color: '#718096' }}>No reviews yet</div>
                    )}
                    
                    <p style={{
                      fontWeight: '700',
                      color: '#046C4E',
                      fontSize: '1.125rem'
                    }}>
                      UGX {item.price.toLocaleString()} {item.rent && "/day"}
                    </p>
                    <p style={{
                      color: '#4A5568',
                      fontSize: '0.875rem'
                    }}>
                      Deposit: UGX {item.deposit.toLocaleString()}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.slice(0, 3).map((tag, idx) => (
                        <span 
                          key={idx} 
                          style={{
                            fontSize: '0.75rem',
                            backgroundColor: '#f0f7f4',
                            color: '#035c43',
                            padding: '0.25rem 0.5rem',
                            borderRadius: '12px',
                            border: '1px solid #b8ddd1'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Social Proof Indicators */}
                    <div className="flex justify-between items-center text-xs" style={{ color: '#718096' }}>
                      {item.viewers && (
                        <span className="flex items-center gap-1">
                          <FaEye size={10} /> {item.viewers} viewing now
                        </span>
                      )}
                      {item.wishlistAdds && (
                        <span className="flex items-center gap-1">
                          <FaHeart size={10} /> {item.wishlistAdds} saved
                        </span>
                      )}
                    </div>
                    
                    <div className="flex gap-3 mt-6">
                      <button
                        onClick={() => navigate(`/item/${item.id}`)}
                        style={{
                          flex: 1,
                          backgroundColor: '#eae5ca',
                          color: '#3E2723',
                          padding: '0.875rem',
                          borderRadius: '8px',
                          border: 'none',
                          cursor: 'pointer',
                          fontWeight: '500',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => {
                          e.target.style.backgroundColor = '#e0d9b4';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.backgroundColor = '#eae5ca';
                        }}
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => openModal(item, "rent")}
                        disabled={!item.available}
                        style={{
                          flex: 1,
                          background: item.available 
                            ? 'linear-gradient(135deg, #046C4E 0%, #035c43 100%)'
                            : '#d1d5db',
                          color: item.available ? 'white' : '#6b7280',
                          padding: '0.875rem',
                          borderRadius: '8px',
                          border: 'none',
                          cursor: item.available ? 'pointer' : 'not-allowed',
                          fontWeight: '600',
                          transition: 'all 0.3s ease',
                          boxShadow: item.available ? '0 4px 15px rgba(4, 108, 78, 0.3)' : 'none'
                        }}
                      >
                        Rent Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="col-span-full text-center py-16 bg-white rounded-xl" style={{
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
              border: '1px solid #b8ddd1'
            }}>
              <FaBoxOpen style={{ 
                fontSize: '4rem', 
                color: '#b8ddd1', 
                marginBottom: '1rem',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto'
              }} />
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#4A5568',
                marginBottom: '0.5rem'
              }}>
                No new arrivals found
              </h3>
              <p style={{ color: '#718096', marginBottom: '1.5rem' }}>
                Try adjusting your filters or search terms
              </p>
              <button 
                onClick={() => {
                  setSearch("");
                  setTimeFilter("30days");
                }}
                style={{
                  padding: '1rem 1.5rem',
                  background: 'linear-gradient(135deg, #046C4E 0%, #035c43 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(4, 108, 78, 0.3)'
                }}
              >
                Show All Recent Items
              </button>
            </div>
          )}
        </>
      )}

      {/* Email Signup for New Arrivals */}
      <div className="mt-16 rounded-xl p-12 text-center text-white" style={{
        background: 'linear-gradient(135deg, #046C4E 0%, #024c37 50%, #0B5137 100%)',
        boxShadow: '0 20px 40px rgba(4, 108, 78, 0.3)'
      }}>
        <h2 style={{
          fontFamily: 'Georgia, serif',
          fontSize: '2rem',
          fontWeight: '700',
          marginBottom: '0.75rem',
          color: '#F7E7CE'
        }}>
          Get First Access to New Arrivals
        </h2>
        <p style={{
          marginBottom: '2rem',
          fontSize: '1.125rem',
          color: '#d9ede6'
        }}>
          Be the first to know when new premium pieces are added to our collection
        </p>
        <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
          <input 
            type="email" 
            placeholder="Your email address" 
            style={{
              flex: 1,
              padding: '1rem 1.5rem',
              borderRadius: '8px',
              border: 'none',
              color: '#3E2723',
              fontSize: '1rem'
            }}
            className="focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button style={{
            padding: '1rem 2rem',
            background: 'linear-gradient(135deg, #D4AF37 0%, #b89422 100%)',
            color: '#013c2b',
            fontWeight: '700',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)'
          }}>
            Notify Me <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Rental/Buy Modal */}
      {modalOpen && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto" style={{
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)'
          }}>
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 style={{
                  fontFamily: 'Georgia, serif',
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#024c37'
                }}>
                  Rent Outfit
                </h3>
                <button 
                  onClick={closeModal} 
                  style={{
                    color: '#718096',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0.5rem'
                  }}
                >
                  <FaTimes size={20} />
                </button>
              </div>
              
              <div className="flex gap-4 mb-8">
                <div className="w-24 h-24 rounded-lg overflow-hidden" style={{
                  backgroundColor: '#f0f7f4'
                }}>
                  <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 style={{
                    fontWeight: '600',
                    color: '#024c37',
                    marginBottom: '0.25rem'
                  }}>
                    {selectedItem.title}
                  </h4>
                  <p style={{
                    color: '#046C4E',
                    fontWeight: '700',
                    fontSize: '1.125rem'
                  }}>
                    UGX {selectedItem.price.toLocaleString()}
                  </p>
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#4A5568'
                  }}>
                    Deposit: UGX {selectedItem.deposit.toLocaleString()}
                  </p>
                </div>
              </div>
              
              <div className="mb-8">
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  color: '#3E2723',
                  marginBottom: '0.75rem'
                }}>
                  Rental Period (Days)
                </label>
                <div className="flex items-center">
                  <button 
                    onClick={() => setRentalDays(prev => Math.max(1, prev - 1))}
                    style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      backgroundColor: '#eae5ca',
                      borderTopLeftRadius: '8px',
                      borderBottomLeftRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#3E2723'
                    }}
                  >
                    <FaChevronLeft size={12} />
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={rentalDays}
                    onChange={(e) => setRentalDays(Math.max(1, parseInt(e.target.value) || 1))}
                    style={{
                      width: '4rem',
                      height: '2.5rem',
                      borderTop: '2px solid #b8ddd1',
                      borderBottom: '2px solid #b8ddd1',
                      borderLeft: 'none',
                      borderRight: 'none',
                      textAlign: 'center',
                      color: '#3E2723'
                    }}
                  />
                  <button 
                    onClick={() => setRentalDays(prev => prev + 1)}
                    style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      backgroundColor: '#eae5ca',
                      borderTopRightRadius: '8px',
                      borderBottomRightRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#3E2723'
                    }}
                  >
                    <FaChevronRight size={12} />
                  </button>
                </div>
                <p style={{
                  fontSize: '0.875rem',
                  color: '#4A5568',
                  marginTop: '0.75rem'
                }}>
                  Total: UGX {(selectedItem.price * rentalDays).toLocaleString()}
                </p>
              </div>
              
              <div className="p-6 rounded-lg mb-8" style={{
                backgroundColor: '#f0f7f4',
                border: '1px solid #b8ddd1'
              }}>
                <h4 style={{
                  fontWeight: '600',
                  marginBottom: '0.75rem',
                  color: '#024c37'
                }}>
                  Summary
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span style={{ color: '#4A5568' }}>Rental Cost</span>
                    <span style={{ color: '#3E2723' }}>UGX {(selectedItem.price * rentalDays).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: '#4A5568' }}>Refundable Deposit</span>
                    <span style={{ color: '#3E2723' }}>UGX {selectedItem.deposit.toLocaleString()}</span>
                  </div>
                  <div style={{
                    borderTop: '2px solid #b8ddd1',
                    paddingTop: '0.75rem',
                    marginTop: '0.75rem'
                  }} className="font-medium flex justify-between">
                    <span style={{ fontWeight: '600', color: '#024c37' }}>Total Amount</span>
                    <span style={{ fontWeight: '700', color: '#046C4E' }}>UGX {(selectedItem.price * rentalDays + selectedItem.deposit).toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={handleConfirm}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #046C4E 0%, #035c43 100%)',
                  color: 'white',
                  padding: '1rem',
                  borderRadius: '8px',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(4, 108, 78, 0.3)'
                }}
              >
                Confirm Rental
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}