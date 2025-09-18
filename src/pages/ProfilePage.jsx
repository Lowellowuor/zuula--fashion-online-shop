// src/pages/ProfilePage.jsx
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("closet");

  // Sample data
  const listings = [
    { id: 1, title: "Wedding Gown", price: 50000, img: "https://via.placeholder.com/200" },
    { id: 2, title: "Party Dress", price: 30000, img: "https://via.placeholder.com/200" },
    { id: 3, title: "Graduation Outfit", price: 40000, img: "https://via.placeholder.com/200" },
  ];

  const transactions = [
    { id: 1, item: "Evening Gown", type: "Rented", date: "2025-09-15" },
    { id: 2, item: "Cocktail Dress", type: "Bought", date: "2025-09-10" },
  ];

  const reviews = [
    { id: 1, reviewer: "Alice", rating: 5, comment: "Great outfit and smooth transaction!" },
    { id: 2, reviewer: "Bob", rating: 4, comment: "Good quality, but shipping was slow." },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-36 h-36 rounded-full object-cover border-2 border-emerald-500"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-3xl font-bold">Jane Doe</h2>
            <FaCheckCircle className="text-emerald-500" />
          </div>
          <p className="text-gray-600 mb-4">@janedoe_fashion</p>
          <div className="flex gap-6 mb-4">
            <div>
              <span className="font-bold">120</span> Listings
            </div>
            <div>
              <span className="font-bold">450</span> Followers
            </div>
            <div>
              <span className="font-bold">200</span> Following
            </div>
          </div>
          <p className="mb-4 text-gray-700">
            Fashion enthusiast. Renting & selling trendy outfits for every occasion.
          </p>
          <button className="px-4 py-2 border border-emerald-500 text-emerald-500 rounded hover:bg-emerald-50 transition">
            Edit Profile
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-8 border-b border-gray-300">
        <div className="flex gap-8">
          <button
            className={`pb-2 ${activeTab === "closet" ? "border-b-2 border-emerald-500 font-semibold" : "text-gray-600"}`}
            onClick={() => setActiveTab("closet")}
          >
            Closet
          </button>
          <button
            className={`pb-2 ${activeTab === "transactions" ? "border-b-2 border-emerald-500 font-semibold" : "text-gray-600"}`}
            onClick={() => setActiveTab("transactions")}
          >
            Transactions
          </button>
          <button
            className={`pb-2 ${activeTab === "reviews" ? "border-b-2 border-emerald-500 font-semibold" : "text-gray-600"}`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === "closet" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {listings.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow p-4">
                <img src={item.img} alt={item.title} className="w-full h-48 object-cover rounded-md mb-2" />
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-600">UGX {item.price.toLocaleString()}/day</p>
                <div className="flex gap-2 mt-2">
                  <button className="flex-1 py-1 bg-emerald-500 text-white rounded hover:bg-emerald-600 transition">Rent</button>
                  <button className="flex-1 py-1 border border-emerald-500 text-emerald-500 rounded hover:bg-emerald-50 transition">Buy</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "transactions" && (
          <div className="space-y-4">
            {transactions.map((t) => (
              <div key={t.id} className="p-4 bg-white shadow rounded flex justify-between">
                <div>
                  <p className="font-semibold">{t.item}</p>
                  <p className="text-gray-600">{t.type}</p>
                </div>
                <p className="text-gray-500">{t.date}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-4">
            {reviews.map((r) => (
              <div key={r.id} className="p-4 bg-white shadow rounded">
                <p className="font-semibold">{r.reviewer}</p>
                <p className="text-gray-500">Rating: {r.rating} / 5</p>
                <p className="text-gray-700">{r.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
