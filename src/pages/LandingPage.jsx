// src/pages/LandingPage.jsx
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="space-y-20 pt-24 px-4 md:px-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-green-500 text-white py-24 rounded-2xl shadow-lg text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Rent. Wear. Slay. Repeat.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
          Affordable fashion rentals for weddings, parties, and special occasions.  
          Upload your outfits, earn extra income, or browse the latest trends.
        </p>
        <div className="space-x-4">
          <Link
            to="/browse"
            className="bg-white text-emerald-600 px-6 py-3 rounded-xl font-semibold shadow hover:bg-gray-100 transition"
          >
            Browse Outfits
          </Link>
          <Link
            to="/upload"
            className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-orange-600 transition"
          >
            Upload Outfit
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section>
        <h2 className="text-3xl font-bold mb-10 text-center">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Wedding", "Party", "Casual", "Cultural"].map((category, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-xl h-40 flex items-center justify-center text-lg font-semibold hover:bg-emerald-100 hover:text-emerald-700 transition cursor-pointer shadow-sm"
            >
              {category}
            </div>
          ))}
        </div>
      </section>

      {/* Featured Outfits */}
      <section>
        <h2 className="text-3xl font-bold mb-10 text-center">Featured Outfits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              className="bg-white shadow-md rounded-xl p-5 hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="bg-gray-200 h-56 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Outfit Image</span>
              </div>
              <h3 className="font-bold text-lg mb-1">Outfit {id}</h3>
              <p className="text-sm text-gray-600 mb-3">
                UGX {(id * 50000).toLocaleString()}
              </p>
              <Link
                to={`/item/${id}`}
                className="inline-block text-emerald-600 font-medium hover:underline"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-16 rounded-2xl text-center shadow-inner">
        <h2 className="text-3xl font-bold mb-4">
          Got an Outfit You Don’t Use Often?
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Upload your dress, suit, or cultural wear and earn money every time it’s rented.  
          Turn your wardrobe into an income stream today!
        </p>
        <Link
          to="/upload"
          className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold shadow hover:bg-emerald-700 transition"
        >
          Start Uploading
        </Link>
      </section>
    </div>
  );
}

export default LandingPage;
