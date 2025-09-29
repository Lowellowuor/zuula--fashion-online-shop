// src/pages/ItemDetailPage.jsx
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Star, ShieldCheck, Heart, Share2, Calendar, MapPin, Tag } from "lucide-react";

function ItemDetailPage() {
  const { id } = useParams();

  // Dummy data – replace with backend later
  const outfits = [
    {
      id: 1,
      title: "Elegant Wedding Gown",
      price: 150000,
      deposit: 50000,
      category: "Wedding",
      size: "M",
      status: "Available",
      tags: ["Wedding", "White", "Elegant", "Lace"],
      seller: "Sarah K.",
      verified: true,
      location: "Kampala",
      images: ["../assets/download(4).jpg"],
      description: "A beautiful white wedding gown with intricate lace detailing, perfect for special occasions. Size M, available for 3-day rentals. Professionally cleaned and maintained.",
      features: ["Lace detailing", "Train included", "Professional cleaning", "Size adjustments available"],
      reviews: [
        { user: "Alice", rating: 5, comment: "Absolutely stunning! The dress fit perfectly and made me feel like a princess.", date: "2024-01-15" },
        { user: "Mary", rating: 4, comment: "Beautiful gown, looked amazing in photos. Delivery was a bit late but worth the wait.", date: "2024-01-08" },
      ],
    },
    {
      id: 2,
      title: "Birthday Party Dress",
      price: 80000,
      deposit: 30000,
      category: "Party",
      size: "S",
      status: "Rented Out",
      tags: ["Party", "Red", "Trendy", "Evening"],
      seller: "Grace M.",
      verified: false,
      location: "Entebbe",
      images: ["../assets/download(1).jpg"],
      description: "Trendy red party dress, size S. Comfortable and elegant for evening events with a flattering silhouette.",
      features: ["Evening wear", "Comfortable fit", "Dry clean only"],
      reviews: [],
    },
  ];

  const outfit = outfits.find((item) => item.id === parseInt(id));

  // UI state
  const [selectedDate, setSelectedDate] = useState("");
  const [mainImage, setMainImage] = useState(outfit?.images[0]);
  const [wishlist, setWishlist] = useState(false);

  if (!outfit) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center py-12">
          <h2 className="text-2xl font-heading text-text-primary mb-4">Outfit Not Found</h2>
          <p className="text-text-secondary mb-6">The item you are looking for doesn't exist.</p>
          <Link to="/browse" className="text-primary font-semibold hover:underline">
            ← Back to Browse
          </Link>
        </div>
      </div>
    );
  }

  // Review average
  const avgRating =
    outfit.reviews.length > 0
      ? (
          outfit.reviews.reduce((sum, r) => sum + r.rating, 0) /
          outfit.reviews.length
        ).toFixed(1)
      : null;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto space-y-8 p-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-text-muted">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/browse" className="hover:text-primary transition-colors">Browse</Link>
          <span className="mx-2">/</span>
          <span className="text-text-primary">{outfit.title}</span>
        </nav>

        {/* Layout: Images + Details */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image Carousel */}
          <div className="space-y-6">
            <div className="premium-card p-0 overflow-hidden">
              <div className="bg-background-200 h-96 flex items-center justify-center rounded-lg overflow-hidden">
                <img
                  src={mainImage}
                  alt={outfit.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex gap-3">
              {outfit.images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setMainImage(img)}
                  className={`premium-card p-0 overflow-hidden cursor-pointer transition-all duration-300 ${
                    mainImage === img ? 'ring-2 ring-accent transform scale-105' : 'opacity-80 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt="thumbnail"
                    className="w-20 h-20 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div className="premium-card">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-heading text-text-primary mb-2">{outfit.title}</h1>
                  <div className="flex items-center gap-4 text-sm text-text-muted">
                    <span className="flex items-center gap-1">
                      <MapPin size={16} />
                      {outfit.location}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      outfit.status === "Available" 
                        ? "bg-primary-100 text-primary" 
                        : "bg-red-100 text-red-600"
                    }`}>
                      {outfit.status}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setWishlist(!wishlist)}
                    className="p-3 rounded-full border border-background-300 hover:border-accent transition-all duration-300"
                  >
                    <Heart
                      size={20}
                      className={wishlist ? "text-red-500 fill-red-500" : "text-text-muted"}
                    />
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert("Link copied to clipboard!");
                    }}
                    className="p-3 rounded-full border border-background-300 hover:border-primary transition-all duration-300"
                  >
                    <Share2 size={20} className="text-text-muted" />
                  </button>
                </div>
              </div>

              {/* Description */}
              <p className="text-text-secondary leading-relaxed mb-6">{outfit.description}</p>

              {/* Features */}
              {outfit.features && (
                <div className="mb-6">
                  <h3 className="font-heading text-text-primary mb-3">Features</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {outfit.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-text-secondary">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="flex gap-2 flex-wrap mb-6">
                {outfit.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium bg-primary-50 text-primary rounded-full flex items-center gap-1"
                  >
                    <Tag size={12} />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Pricing */}
              <div className="bg-gradient-to-r from-background-50 to-background-100 p-4 rounded-lg mb-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <p className="text-3xl font-bold text-primary">
                    UGX {outfit.price.toLocaleString()}
                  </p>
                  <span className="text-sm text-text-muted">/ rental</span>
                </div>
                <p className="text-text-secondary">
                  Refundable Deposit: <span className="font-semibold text-accent">UGX {outfit.deposit.toLocaleString()}</span>
                </p>
              </div>

              {/* Size & Category */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-1">Size</label>
                  <p className="font-semibold text-text-primary">{outfit.size}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-muted mb-1">Category</label>
                  <p className="font-semibold text-text-primary">{outfit.category}</p>
                </div>
              </div>

              {/* Booking */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-text-primary mb-2 flex items-center gap-2">
                  <Calendar size={16} />
                  Select Rental Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="premium-card border-background-300 w-full px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Seller Info */}
              <div className="border-t border-background-300 pt-4 flex items-center gap-4">
                <div className="flex-1">
                  <p className="font-heading font-medium flex items-center gap-2">
                    {outfit.seller}
                    {outfit.verified && (
                      <ShieldCheck size={18} className="text-accent" />
                    )}
                  </p>
                  <p className="text-sm text-text-muted">Member since 2023</p>
                </div>
                <Link
                  to="/profile"
                  className="text-primary font-semibold hover:underline transition-colors"
                >
                  View Closet →
                </Link>
              </div>

              {/* Actions */}
              <div className="flex gap-4 mt-6">
                <button className="btn-primary flex-1 py-3">
                  Rent Now
                </button>
                <button className="btn-gold py-3 px-6">
                  Buy Now
                </button>
              </div>
              <button className="w-full mt-3 border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary-50 transition-all duration-300 font-semibold">
                Message Seller
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="premium-card">
          <h2 className="text-2xl font-heading text-text-primary mb-6">Ratings & Reviews</h2>
          {avgRating ? (
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl font-bold text-primary">{avgRating}</div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[1,2,3,4,5].map((star) => (
                    <Star
                      key={star}
                      size={20}
                      className={`${
                        star <= avgRating 
                          ? "text-accent fill-accent" 
                          : "text-background-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-text-secondary">
                  Based on {outfit.reviews.length} review{outfit.reviews.length !== 1 ? 's' : ''}
                </p>
              </div>
            </div>
          ) : (
            <p className="text-text-muted mb-6">No reviews yet. Be the first to review this item!</p>
          )}
          
          <div className="space-y-6">
            {outfit.reviews.map((review, idx) => (
              <div key={idx} className="border-b border-background-300 pb-6 last:border-0">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-heading font-medium text-text-primary">{review.user}</p>
                  <span className="text-sm text-text-muted">{review.date}</span>
                </div>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-text-secondary leading-relaxed">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Suggested Items */}
        <div className="premium-card">
          <h2 className="text-2xl font-heading text-text-primary mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {outfits
              .filter((item) => item.id !== outfit.id)
              .map((suggested) => (
                <Link
                  key={suggested.id}
                  to={`/item/${suggested.id}`}
                  className="premium-card p-0 overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div className="bg-background-200 h-48 flex items-center justify-center overflow-hidden">
                    <img
                      src={suggested.images[0]}
                      alt={suggested.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-heading font-medium text-text-primary mb-2 group-hover:text-primary transition-colors">
                      {suggested.title}
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-bold text-primary">
                        UGX {suggested.price.toLocaleString()}
                      </p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        suggested.status === "Available" 
                          ? "bg-primary-100 text-primary" 
                          : "bg-red-100 text-red-600"
                      }`}>
                        {suggested.status}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center pt-6">
          <Link 
            to="/browse" 
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline transition-colors"
          >
            ← Back to Browse
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailPage;