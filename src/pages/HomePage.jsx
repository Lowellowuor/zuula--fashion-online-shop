import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfessionalFashionHomepage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [stats, setStats] = useState({ users: 0, listings: 0, rentals: 0 });
  const [email, setEmail] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchCategory, setSearchCategory] = useState('All Categories');
  const navigate = useNavigate();

  // Animated counter effect
  useEffect(() => {
    const animateCounter = (target, setter, duration = 2000) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
    };

    animateCounter(12500, (val) => setStats(prev => ({...prev, users: val})));
    animateCounter(3400, (val) => setStats(prev => ({...prev, listings: val})));
    animateCounter(8900, (val) => setStats(prev => ({...prev, rentals: val})));
  }, []);

  // Handle search functionality - navigate to browse page
  const handleSearch = () => {
    // Navigate to browse page with search parameters
    navigate('/browse', { 
      state: { 
        searchQuery: searchQuery.trim(),
        category: searchCategory
      }
    });
  };

  // Handle Enter key press in search input
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Handle category click - navigate to browse page with category filter
  const handleCategoryClick = (categoryName) => {
    navigate('/browse', { 
      state: { 
        category: categoryName
      }
    });
  };

  const testimonials = [
    {
      name: "Sarah K.",
      role: "Frequent Event Attendee",
      content: "Saved over 2M UGX last year by renting instead of buying new outfits for weddings!",
      rating: 5
    },
    {
      name: "Grace M.",
      role: "Fashion Influencer",
      content: "My closet is now earning me money. I've made 1.5M UGX renting out my designer pieces.",
      rating: 5
    },
    {
      name: "David T.",
      role: "Wedding Planner",
      content: "Recommend this to all my clients. The escrow system makes everything so secure.",
      rating: 5
    }
  ];

  const features = [
    {
      icon: "🔒",
      title: "Secure Escrow Payments",
      description: "Your money is held safely until you confirm receipt and satisfaction"
    },
    {
      icon: "⭐",
      title: "Verified Community",
      description: "All users are ID-verified with ratings and reviews for trust"
    },
    {
      icon: "🚚",
      title: "Flexible Delivery Options",
      description: "Choose pickup, delivery, or meetup based on your preference"
    },
    {
      icon: "💎",
      title: "Premium Luxury Access",
      description: "Rent high-end designer pieces at a fraction of retail price"
    }
  ];

  const trendingCategories = [
    { 
      name: "Wedding Guest", 
      count: "1.2k+ outfits", 
      color: "from-pink-500 to-rose-500",
      image: "../assets/download1.jpg"
    },
    { 
      name: "Traditional Gomesi", 
      count: "800+ outfits", 
      color: "from-purple-500 to-indigo-500",
      image: "../assets/download4.jpg"
    },
    { 
      name: "Cocktail Party", 
      count: "950+ outfits", 
      color: "from-blue-500 to-cyan-500",
      image: "../assets/bosslady.jpg"
    },
    { 
      name: "Graduation Gowns", 
      count: "600+ outfits", 
      color: "from-green-500 to-emerald-500",
      image: "../assets/GraduationGown.jpg",
    }
  ];

  // Hero background image - replace with your actual image path
  const heroBackgroundImage = "../assets/";

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section with Background Image */}
      <section 
        className="relative bg-gradient-to-br from-primary-700/90 via-primary-600/90 to-primary-800/90 text-white py-20 lg:py-28"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(4, 108, 78, 0.9), rgba(3, 92, 67, 0.9), rgba(1, 60, 43, 0.9)), url(${heroBackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <span className="text-accent">✨</span>
              <span className="text-sm">Trusted by {stats.users.toLocaleString()}+ Ugandan fashion lovers</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Your Fashion Freedom <span className="text-accent">Starts Here</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-primary-100 leading-relaxed">
              Rent stunning outfits for every occasion. Earn from your closet. Sustainable, affordable, fabulous.
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-2xl p-2 shadow-2xl max-w-2xl mx-auto mb-8">
              <div className="flex flex-col lg:flex-row gap-2">
                <input 
                  type="text" 
                  placeholder="Search for dresses, Gomesi, suits, accessories..." 
                  className="flex-1 px-6 py-4 text-text-primary rounded-xl border-0 focus:ring-2 focus:ring-primary"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <select 
                  className="px-4 py-4 text-text-primary rounded-xl border-0 focus:ring-2 focus:ring-primary"
                  value={searchCategory}
                  onChange={(e) => setSearchCategory(e.target.value)}
                >
                  <option>All Categories</option>
                  <option>Wedding Guest</option>
                  <option>Traditional</option>
                  <option>Cocktail</option>
                  <option>Formal</option>
                  <option>Graduation Gowns</option>
                </select>
                <button 
                  className="btn-primary px-8 py-4 rounded-xl font-semibold whitespace-nowrap hover:bg-primary-700 transition-all duration-300 transform hover:scale-105"
                  onClick={handleSearch}
                >
                  Search Outfits
                </button>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>✅ ID Verified Community</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>🔒 Secure Escrow Payments</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>⭐ 4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-background-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary-600">{stats.users.toLocaleString()}+</div>
              <div className="text-text-secondary font-medium">Active Community Members</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary-600">{stats.listings.toLocaleString()}+</div>
              <div className="text-text-secondary font-medium">Fashion Items Available</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary-600">{stats.rentals.toLocaleString()}+</div>
              <div className="text-text-secondary font-medium">Successful Rentals</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-background-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4 text-primary-700">
              Why Choose StyleShare?
            </h2>
            <p className="text-xl text-text-secondary">
              We've built the most trusted fashion rental platform in Uganda with features designed for your safety and convenience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="premium-card text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-primary-600">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Categories with Images */}
      <section id="categories" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4 text-primary-700">
              Trending Categories
            </h2>
            <p className="text-xl text-text-secondary">
              Discover the most popular outfit categories for Uganda's vibrant social scene
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingCategories.map((category, index) => (
              <div 
                key={index} 
                className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                onClick={() => handleCategoryClick(category.name)}
              >
                <div 
                  className={`bg-gradient-to-br ${category.color} rounded-2xl aspect-square relative overflow-hidden`}
                  style={{
                    backgroundImage: category.image 
                      ? `linear-gradient(to bottom right, rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${category.image})`
                      : undefined,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                    <p className="text-white/80">{category.count}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 text-primary-600 px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Browse →
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Browse All Button */}
          <div className="text-center mt-12">
            <button 
              onClick={() => navigate('/browse')}
              className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-all duration-300 transform hover:scale-105"
            >
              Browse All Categories
            </button>
          </div>
        </div>
      </section>

      {/* How It Works - Enhanced */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-background-100 to-background-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4 text-primary-700">
              How StyleShare Works
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">1</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Create Your Profile</h3>
                  <p className="text-text-secondary">Sign up and complete your ID verification to join our trusted community.</p>
                </div>
              </div>

              <div className="flex space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">2</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Browse or List Items</h3>
                  <p className="text-text-secondary">
                    <button 
                      onClick={() => navigate('/browse')}
                      className="text-primary hover:underline font-semibold"
                    >
                      Find perfect outfits
                    </button> for your events or start earning by listing items from your closet.
                  </p>
                </div>
              </div>

              <div className="flex space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">3</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Book Securely</h3>
                  <p className="text-text-secondary">Reserve your items with secure escrow payments and delivery coordination.</p>
                </div>
              </div>

              <div className="flex space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">4</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Enjoy & Review</h3>
                  <p className="text-text-secondary">Wear with confidence and build your reputation through reviews.</p>
                </div>
              </div>

              <div className="pt-6">
                <button 
                  onClick={() => navigate('/browse')}
                  className="bg-accent text-primary-900 px-8 py-4 rounded-xl font-bold hover:bg-accent-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Browsing Outfits
                </button>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div 
                className="bg-background-200 rounded-2xl h-80 flex items-center justify-center bg-cover bg-center cursor-pointer"
                style={{
                  backgroundImage: 'url(/images/how-it-works-demo.jpg)' // Replace with your demo image
                }}
                onClick={() => navigate('/browse')}
              >
                {/* Fallback content if image doesn't load */}
                <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 hover:bg-white transition-all duration-300">
                  <div className="text-4xl mb-4">👗</div>
                  <p className="text-text-muted font-semibold mb-2">Click to browse outfits</p>
                  <button className="text-primary font-bold hover:underline">
                    Explore Collection →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4 text-primary-700">
              Loved by Our Community
            </h2>
            <p className="text-xl text-text-secondary">
              Don't just take our word for it. Here's what our users are saying.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8 lg:p-12">
              <div className="text-center">
                <div className="text-accent text-4xl mb-4">"</div>
                <p className="text-2xl lg:text-3xl text-primary-800 font-light leading-relaxed mb-8">
                  {testimonials[activeTestimonial].content}
                </p>
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">⭐</span>
                  ))}
                </div>
                <div>
                  <div className="font-bold text-lg text-primary-700">{testimonials[activeTestimonial].name}</div>
                  <div className="text-text-secondary">{testimonials[activeTestimonial].role}</div>
                </div>
              </div>

              <div className="flex justify-center space-x-3 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeTestimonial ? 'bg-primary' : 'bg-primary-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Ready to Join the Fashion Revolution?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Sign up today and get UGX 10,000 off your first rental. Start your sustainable fashion journey now.
          </p>
          
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address" 
              className="flex-1 px-6 py-4 rounded-xl text-text-primary border-0 focus:ring-2 focus:ring-accent"
            />
            <button 
              onClick={() => navigate('/browse')}
              className="bg-accent text-primary-900 px-8 py-4 rounded-xl font-bold hover:bg-accent-600 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              Get Started Free
            </button>
          </div>
          
          <p className="text-sm text-primary-200 mt-4">
            No credit card required. Join 12,500+ fashion lovers in Uganda.
          </p>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="py-12 bg-background-100 border-t border-background-200">
        <div className="container mx-auto px-6">
          <div className="text-center text-text-secondary mb-6">Trusted and secured by</div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold">🔒 SSL Secure</div>
            <div className="text-2xl font-bold">⭐ 4.9/5 Rating</div>
            <div className="text-2xl font-bold">👑 Premium Partners</div>
            <div className="text-2xl font-bold">💳 Secure Payments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalFashionHomepage;