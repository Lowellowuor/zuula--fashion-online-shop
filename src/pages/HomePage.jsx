// src/pages/HomePage.jsx
import { Link } from "react-router-dom";

// Mock data (replace with API fetch later)
const categories = ["Wedding", "Party", "Graduation", "Cultural", "Formal"];
const trendingOutfits = [
  { id: 1, title: "Red Dress", price: 50000, img: null },
  { id: 2, title: "Blue Suit", price: 75000, img: null },
  { id: 3, title: "Golden Gown", price: 120000, img: null },
];

export default function HomePage() {
  return (
    <div className="min-h-screen pt-16 pb-20 px-4 md:px-20"> {/* Added min-h-screen and proper padding */}
      <div className="space-y-16 py-8"> {/* Added vertical padding */}
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-pink-100 to-purple-100 py-20 text-center rounded-2xl shadow-md">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Rent • Borrow • Repeat
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Affordable Fashion for Every Event – Weddings, Parties, Graduations, and More
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/browse"
              className="bg-emerald-600 text-white px-6 py-3 rounded-2xl font-medium hover:bg-emerald-700 transition-colors"
            >
              Browse Outfits
            </Link>
            <Link
              to="/upload"
              className="bg-white text-emerald-600 border border-emerald-600 px-6 py-3 rounded-2xl font-medium hover:bg-emerald-50 transition-colors"
            >
              Upload Clothes
            </Link>
          </div>
        </section>

        {/* How It Works */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Upload", desc: "List your clothes in your digital closet for others to rent or buy." },
              { title: "Browse", desc: "Discover fashion for weddings, parties, and all special occasions." },
              { title: "Rent / Buy", desc: "Secure payments & deposits with Zuula escrow protection." },
            ].map((item, i) => (
              <div key={i} className="bg-white shadow-md rounded-2xl p-6 hover:scale-105 transition-transform">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Categories */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-8">Featured Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/browse?category=${category}`}
                className="bg-white shadow-md hover:shadow-lg rounded-2xl p-6 font-bold block transition-shadow hover:text-emerald-600"
              >
                {category}
              </Link>
            ))}
          </div>
        </section>

        {/* Trending Outfits */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-8">Trending Outfits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trendingOutfits.map((outfit) => (
              <div key={outfit.id} className="bg-white shadow-md rounded-2xl p-6 hover:scale-105 transition-transform">
                <div className="h-48 bg-gray-200 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-gray-500">{outfit.img ? <img src={outfit.img} alt={outfit.title} /> : "Image"}</span>
                </div>
                <p className="font-semibold">{outfit.title}</p>
                <p className="text-sm text-gray-600">UGX {outfit.price.toLocaleString()}/day</p>
                <Link
                  to={`/item/${outfit.id}`}
                  className="mt-3 inline-block bg-emerald-600 text-white px-4 py-2 rounded-xl hover:bg-emerald-700 transition-colors"
                >
                  Rent / Buy
                </Link>
              </div>
            ))}
          </div>
          <Link
            to="/browse"
            className="mt-6 inline-block bg-white text-emerald-600 border border-emerald-600 px-6 py-3 rounded-2xl font-medium hover:bg-emerald-50 transition-colors"
          >
            See All Outfits
          </Link>
        </section>

        {/* Trust & Safety */}
        <section className="text-center bg-gray-100 py-12 rounded-2xl">
          <h2 className="text-3xl font-semibold mb-6">Trust & Safety</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Every transaction is backed by ID verification, security deposits, and escrow protection. Rent and lend with confidence.
          </p>
        </section>

        {/* Ratings & Reviews Preview */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-8">User Ratings & Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white shadow-md rounded-2xl p-6">
                <p className="font-semibold mb-2">User {i}</p>
                <p className="text-gray-600 text-sm">
                  "Great service! The outfit was perfect and the booking process was smooth."
                </p>
                <div className="mt-2 text-amber-400">⭐⭐⭐⭐⭐</div>
              </div>
            ))}
          </div>
        </section>

        {/* Join Community CTA */}
        <section className="text-center py-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl">
          <h2 className="text-3xl font-semibold mb-6">Join the Zuula Community</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Turn closets into income. Make fashion sustainable. Find your next look today.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/signup"
              className="bg-emerald-600 text-white px-6 py-3 rounded-2xl font-medium hover:bg-emerald-700 transition-colors"
            >
              Join Now
            </Link>
            <Link
              to="/upload"
              className="bg-white text-emerald-600 border border-emerald-600 px-6 py-3 rounded-2xl font-medium hover:bg-emerald-50 transition-colors"
            >
              Upload Outfit
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}