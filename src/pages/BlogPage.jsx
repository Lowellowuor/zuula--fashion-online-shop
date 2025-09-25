import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaSearch, FaCalendarAlt, FaUser, FaTags, FaArrowRight } from "react-icons/fa";

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "5 Summer Outfit Ideas You Must Try in Uganda",
    author: "Sarah N.",
    date: "Sept 20, 2025",
    excerpt: "Discover the latest summer outfit trends that are perfect for every occasion from weddings to garden parties...",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["#summer", "#trends", "#ugandafashion"],
    category: "Outfit Ideas",
    readTime: "5 min read",
    featured: true
  },
  {
    id: 2,
    title: "Sustainable Fashion Tips for the Conscious Ugandan",
    author: "Michael T.",
    date: "Sept 18, 2025",
    excerpt: "Learn how to create a sustainable wardrobe without compromising style while supporting local designers...",
    image: "https://images.unsplash.com/photo-1603400521630-9f2de124b33b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["#sustainable", "#eco", "#local"],
    category: "Sustainability Tips",
    readTime: "7 min read",
    featured: true
  },
  {
    id: 3,
    title: "How to Style Your Outfits for Work in Kampala",
    author: "Rebecca K.",
    date: "Sept 15, 2025",
    excerpt: "Professional yet stylish—tips on how to elevate your work outfits effortlessly for the office in Uganda...",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["#workwear", "#style", "#professional"],
    category: "How-To Guides",
    readTime: "6 min read",
    featured: false
  },
  {
    id: 4,
    title: "Top 10 Winter Fashion Trends for Ugandan Evenings",
    author: "David M.",
    date: "Sept 10, 2025",
    excerpt: "Stay warm and stylish with these top 10 winter fashion picks perfect for Kampala's cooler evenings...",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["#winter", "#trends", "#eveningwear"],
    category: "Fashion Trends",
    readTime: "8 min read",
    featured: false
  },
  {
    id: 5,
    title: "Accessorize Like a Pro: Ugandan Style Guide",
    author: "Rebecca K.",
    date: "Sept 8, 2025",
    excerpt: "Learn the art of accessorizing with local Ugandan pieces to make your outfits pop effortlessly...",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["#accessories", "#style", "#localdesign"],
    category: "How-To Guides",
    readTime: "4 min read",
    featured: false
  },
  {
    id: 6,
    title: "Traditional Attire with a Modern Twist",
    author: "Sarah N.",
    date: "Sept 5, 2025",
    excerpt: "How to incorporate traditional Ugandan fabrics and styles into contemporary fashion...",
    image: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["#traditional", "#modern", "#ugandaculture"],
    category: "Fashion Trends",
    readTime: "9 min read",
    featured: true
  },
  {
    id: 7,
    title: "Budget-Friendly Fashion for Students",
    author: "Michael T.",
    date: "Sept 3, 2025",
    excerpt: "Looking stylish on a student budget is possible with these tips and rental options...",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["#budget", "#students", "#affordable"],
    category: "How-To Guides",
    readTime: "5 min read",
    featured: false
  },
  {
    id: 8,
    title: "The Ultimate Guide to Wedding Guest Attire in Uganda",
    author: "Rebecca K.",
    date: "Aug 28, 2025",
    excerpt: "What to wear to different types of Ugandan weddings - from traditional to contemporary ceremonies...",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["#wedding", "#events", "#formalwear"],
    category: "Outfit Ideas",
    readTime: "10 min read",
    featured: true
  },
];

const categories = ["Outfit Ideas", "Fashion Trends", "Sustainability Tips", "How-To Guides"];

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [email, setEmail] = useState("");
  const [visiblePosts, setVisiblePosts] = useState(4);

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase()) &&
    (selectedCategory ? post.category === selectedCategory : true)
  );

  const handleLoadMore = () => {
    setVisiblePosts(prev => prev + 4);
  };

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-background font-body text-text-primary">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-100 via-background to-champagne py-20 md:py-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
            Zuula <span className="text-primary">Fashion Blog</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-text-secondary font-light">
            Tips, trends, and stories from Uganda's fashion rental community
          </p>
        </div>
      </section>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="md:col-span-1 space-y-8">
          {/* Search */}
          <div className="premium-card">
            <h3 className="font-semibold text-text-primary mb-4 text-lg font-heading">Search</h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search posts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-3 border border-background-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary pl-10 bg-background-50"
              />
              <FaSearch className="absolute left-3 top-3.5 text-text-muted" />
            </div>
          </div>

          {/* Categories */}
          <div className="premium-card">
            <h3 className="font-semibold text-text-primary mb-4 text-lg font-heading">Categories</h3>
            <ul className="space-y-3">
              {categories.map((cat, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left py-2 px-3 rounded-lg transition-all flex items-center justify-between font-body ${
                      selectedCategory === cat 
                        ? "bg-primary-100 text-primary-600 font-medium" 
                        : "text-text-secondary hover:bg-background-100"
                    }`}
                  >
                    <span>{cat}</span>
                    <span className="bg-primary-100 text-primary-600 text-xs px-2 py-1 rounded-full">
                      {blogPosts.filter(post => post.category === cat).length}
                    </span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setSelectedCategory("")}
                  className="w-full text-left py-2 px-3 rounded-lg text-text-secondary hover:bg-background-100 transition-all font-body"
                >
                  View All
                </button>
              </li>
            </ul>
          </div>

          {/* Featured Posts */}
          <div className="premium-card">
            <h3 className="font-semibold text-text-primary mb-4 text-lg font-heading">Featured Posts</h3>
            <ul className="space-y-4">
              {featuredPosts.slice(0, 3).map(post => (
                <li key={post.id} className="flex gap-3">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <a href="#" className="font-medium text-text-primary hover:text-primary text-sm leading-tight font-body">
                      {post.title}
                    </a>
                    <p className="text-xs text-text-muted mt-1">{post.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags Cloud */}
          <div className="premium-card">
            <h3 className="font-semibold text-text-primary mb-4 text-lg font-heading">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              {Array.from(new Set(blogPosts.flatMap(post => post.tags))).slice(0, 12).map((tag, idx) => (
                <button
                  key={idx}
                  onClick={() => setSearch(tag.replace('#', ''))}
                  className="text-xs bg-background-200 text-text-secondary px-3 py-1.5 rounded-full hover:bg-primary-100 hover:text-primary transition-all font-body"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-gradient-to-br from-primary to-forest p-6 rounded-xl text-white">
            <h3 className="font-semibold mb-4 text-lg font-heading">Stay Updated!</h3>
            <p className="text-sm mb-4 opacity-90 font-body">Subscribe for the latest articles and fashion tips.</p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/90 text-text-primary rounded-xl focus:outline-none focus:ring-2 focus:ring-white font-body"
                required
              />
              <button
                type="submit"
                className="w-full bg-white text-primary px-4 py-3 rounded-xl font-medium hover:bg-background-100 transition-all flex items-center justify-center btn-gold font-body"
              >
                Subscribe <FaArrowRight className="ml-2" />
              </button>
            </form>
          </div>
        </aside>

        {/* Blog Grid */}
        <section className="md:col-span-3">
          {/* Featured Post Highlight */}
          {filteredPosts.length > 0 && filteredPosts[0].featured && (
            <div className="mb-12 premium-card p-0 overflow-hidden">
              <img 
                src={filteredPosts[0].image} 
                alt={filteredPosts[0].title} 
                className="w-full h-80 object-cover" 
              />
              <div className="p-8">
                <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted mb-4 font-body">
                  <span className="flex items-center gap-1">
                    <FaUser className="text-primary" /> {filteredPosts[0].author}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt className="text-primary" /> {filteredPosts[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaTags className="text-primary" /> {filteredPosts[0].category}
                  </span>
                  <span>{filteredPosts[0].readTime}</span>
                </div>
                
                <h2 className="text-2xl font-bold text-text-primary mb-4 font-heading">{filteredPosts[0].title}</h2>
                <p className="text-text-secondary mb-6 font-body">{filteredPosts[0].excerpt}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {filteredPosts[0].tags.map((tag, idx) => (
                    <span key={idx} className="text-xs bg-primary-100 text-primary px-3 py-1.5 rounded-full font-body">{tag}</span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <a href="#" className="text-primary font-semibold hover:underline flex items-center font-body">
                    Read Full Article <FaArrowRight className="ml-2" />
                  </a>
                  
                  <div className="flex gap-3 text-text-muted">
                    <a href="#" className="hover:text-primary transition-colors"><FaFacebookF /></a>
                    <a href="#" className="hover:text-primary transition-colors"><FaTwitter /></a>
                    <a href="#" className="hover:text-primary transition-colors"><FaInstagram /></a>
                    <a href="#" className="hover:text-primary transition-colors"><FaPinterestP /></a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {filteredPosts.slice(featuredPosts[0]?.featured && filteredPosts[0]?.id === featuredPosts[0]?.id ? 1 : 0, visiblePosts).map(post => (
              <article key={post.id} className="premium-card p-0 overflow-hidden flex flex-col transition-all hover:shadow-xl">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-text-muted mb-3 font-body">
                    <span>{post.date}</span>
                    <span className="bg-primary-100 text-primary px-2 py-1 rounded-full">{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h2 className="font-bold text-lg mb-2 text-text-primary font-heading">{post.title}</h2>
                  <p className="text-text-secondary mb-4 flex-1 font-body">{post.excerpt}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs bg-background-200 text-text-secondary px-2 py-1 rounded-full font-body">{tag}</span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-background-300">
                    <div className="flex items-center gap-2 text-sm text-text-secondary font-body">
                      <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="Author" className="rounded-full w-8 h-8" />
                      <span>{post.author}</span>
                    </div>
                    
                    <a href="#" className="text-primary font-semibold hover:underline text-sm flex items-center font-body">
                      Read More <FaArrowRight className="ml-1 text-xs" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          {visiblePosts < filteredPosts.length && (
            <div className="text-center mt-12">
              <button
                onClick={handleLoadMore}
                className="px-8 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-600 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl btn-primary font-body"
              >
                Load More Articles
              </button>
            </div>
          )}

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-text-primary mb-2 font-heading">No articles found</h3>
              <p className="text-text-secondary font-body">Try adjusting your search or filter criteria</p>
              <button 
                onClick={() => { setSearch(""); setSelectedCategory(""); }}
                className="mt-4 px-6 py-2 bg-primary text-white rounded-xl font-medium hover:bg-primary-600 transition-all btn-primary font-body"
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>
      </main>

      {/* Comment Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-background-100 to-white rounded-xl my-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold mb-4 text-text-primary font-heading">Join the Conversation</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto font-body">
            Share your thoughts and ideas with our fashion community
          </p>
        </div>
        
        <form className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2 font-body">Name</label>
              <input 
                type="text" 
                id="name"
                placeholder="Your name" 
                className="w-full px-4 py-3 border border-background-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary font-body bg-background-50"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2 font-body">Email</label>
              <input 
                type="email" 
                id="email"
                placeholder="Your email" 
                className="w-full px-4 py-3 border border-background-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary font-body bg-background-50"
              />
            </div>
          </div>
          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-text-primary mb-2 font-body">Comment</label>
            <textarea 
              id="comment"
              placeholder="Your message" 
              rows={4} 
              className="w-full px-4 py-3 border border-background-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary font-body bg-background-50"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-600 transition-all shadow-lg hover:shadow-xl btn-primary font-body"
          >
            Post Comment
          </button>
        </form>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-r from-primary to-forest py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6 font-heading">Never Miss a Fashion Tip!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-body">
            Subscribe to our newsletter for the latest articles, style guides, and exclusive offers.
          </p>
          <form onSubmit={handleSubscribe} className="flex justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 bg-white/90 text-text-primary rounded-xl focus:outline-none focus:ring-2 focus:ring-white font-body"
              required
            />
            <button
              type="submit"
              className="bg-white text-primary px-6 py-4 rounded-xl font-medium hover:bg-background-100 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl btn-gold font-body"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}