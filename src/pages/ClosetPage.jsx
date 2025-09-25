// src/pages/ClosetPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ClosetPage() {
  const navigate = useNavigate();

  // Dummy profile info
  const profile = {
    name: "Lowell Owuor",
    bio: "Fashion enthusiast. Renting & selling premium outfits.",
    avatar: "https://via.placeholder.com/100",
    verified: true,
    rating: 4.7,
    reviews: 32,
  };

  // Closet items state
  const [closetItems, setClosetItems] = useState([
    {
      id: 1,
      title: "Red Party Dress",
      description: "Perfect for evening occasions",
      category: "Party",
      size: "M",
      price: 1500,
      type: "rent",
      deposit: 500,
      status: "available",
      image: "https://via.placeholder.com/300x400.png?text=Party+Dress",
    },
    {
      id: 2,
      title: "Wedding Gown",
      description: "Elegant white gown",
      category: "Wedding",
      size: "L",
      price: 8000,
      type: "sell",
      status: "sold",
      image: "https://via.placeholder.com/300x400.png?text=Wedding+Gown",
    },
  ]);

  const [viewMode, setViewMode] = useState("grid");
  const [showForm, setShowForm] = useState(false);
  const [newItem, setNewItem] = useState({
    title: "",
    description: "",
    category: "",
    size: "",
    price: "",
    deposit: "",
    type: "rent",
    status: "available",
    image: "",
  });

  // Add new item
  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newItem.title || !newItem.price) return;
    setClosetItems([...closetItems, { id: Date.now(), ...newItem }]);
    setNewItem({
      title: "",
      description: "",
      category: "",
      size: "",
      price: "",
      deposit: "",
      type: "rent",
      status: "available",
      image: "",
    });
    setShowForm(false);
  };

  // Remove item
  const handleRemove = (id) => {
    setClosetItems(closetItems.filter((item) => item.id !== id));
  };

  // Mark as rented/sold
  const updateStatus = (id, status) => {
    setClosetItems(
      closetItems.map((item) =>
        item.id === id ? { ...item, status } : item
      )
    );
  };

  // Dummy transactions
  const transactions = [
    { id: 101, item: "Red Party Dress", type: "Rented", user: "Alice", date: "2025-09-20" },
    { id: 102, item: "Wedding Gown", type: "Sold", user: "Jane", date: "2025-09-18" },
    { id: 103, item: "Office Blazer", type: "Pending", user: "Bob", date: "2025-09-21" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white py-10 px-4 md:px-20">
      {/* Profile Section */}
      <div className="bg-white shadow-lg rounded-2xl p-6 flex items-center gap-6 mb-10">
        <img
          src={profile.avatar}
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-emerald-500 shadow-md"
        />
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2 text-gray-800">
            {profile.name}
            {profile.verified && (
              <span className="bg-emerald-500 text-white text-xs px-2 py-1 rounded-full shadow">
                Verified
              </span>
            )}
          </h1>
          <p className="text-gray-600">{profile.bio}</p>
          <p className="text-amber-500 font-medium">
            ⭐ {profile.rating} ({profile.reviews} reviews)
          </p>
        </div>
      </div>

      {/* Add Item Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">My Closet</h2>
        <button
          onClick={() => setShowForm(true)}
          className="px-5 py-2 bg-gradient-to-r from-emerald-500 to-emerald-700 text-white font-medium rounded-lg shadow hover:scale-105 transition"
        >
          + Add an Item
        </button>
      </div>

      {/* Add Item Form (Modal style) */}
      {showForm && (
        <div className="mb-8 p-6 border rounded-2xl shadow-lg bg-white">
          <h3 className="font-semibold text-lg mb-4 text-gray-700">Upload New Item</h3>
          <form onSubmit={handleAddItem} className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Title"
              value={newItem.title}
              onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
              className="border p-2 rounded-lg col-span-2 focus:ring-2 focus:ring-emerald-400"
            />
            <textarea
              placeholder="Description"
              value={newItem.description}
              onChange={(e) =>
                setNewItem({ ...newItem, description: e.target.value })
              }
              className="border p-2 rounded-lg col-span-2 focus:ring-2 focus:ring-emerald-400"
            />
            <select
              value={newItem.category}
              onChange={(e) =>
                setNewItem({ ...newItem, category: e.target.value })
              }
              className="border p-2 rounded-lg focus:ring-2 focus:ring-emerald-400"
            >
              <option value="">Category</option>
              <option>Wedding</option>
              <option>Party</option>
              <option>Formal</option>
              <option>Cultural</option>
            </select>
            <select
              value={newItem.size}
              onChange={(e) => setNewItem({ ...newItem, size: e.target.value })}
              className="border p-2 rounded-lg focus:ring-2 focus:ring-emerald-400"
            >
              <option value="">Size</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
            <input
              type="number"
              placeholder="Price"
              value={newItem.price}
              onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
              className="border p-2 rounded-lg focus:ring-2 focus:ring-emerald-400"
            />
            {newItem.type === "rent" && (
              <input
                type="number"
                placeholder="Deposit"
                value={newItem.deposit}
                onChange={(e) =>
                  setNewItem({ ...newItem, deposit: e.target.value })
                }
                className="border p-2 rounded-lg focus:ring-2 focus:ring-emerald-400"
              />
            )}
            <input
              type="text"
              placeholder="Image URL"
              value={newItem.image}
              onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
              className="border p-2 rounded-lg col-span-2 focus:ring-2 focus:ring-emerald-400"
            />
            <select
              value={newItem.type}
              onChange={(e) => setNewItem({ ...newItem, type: e.target.value })}
              className="border p-2 rounded-lg col-span-2 focus:ring-2 focus:ring-emerald-400"
            >
              <option value="rent">For Rent</option>
              <option value="sell">For Sale</option>
            </select>
            <div className="col-span-2 flex gap-3 mt-3">
              <button
                type="submit"
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg shadow hover:bg-emerald-700"
              >
                Publish
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded-lg shadow hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* View Mode Toggle */}
      <div className="flex justify-end mb-4 gap-2">
        <button
          onClick={() => setViewMode("grid")}
          className={`p-2 rounded-lg shadow ${viewMode === "grid" ? "bg-emerald-100 text-emerald-600" : "bg-gray-200 text-gray-600"}`}
        >
          <i className="fas fa-th"></i>
        </button>
        <button
          onClick={() => setViewMode("list")}
          className={`p-2 rounded-lg shadow ${viewMode === "list" ? "bg-emerald-100 text-emerald-600" : "bg-gray-200 text-gray-600"}`}
        >
          <i className="fas fa-list"></i>
        </button>
      </div>

      {/* Closet Items */}
      <div
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            : "flex flex-col gap-4"
        }
      >
        {closetItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition transform hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.category} • Size {item.size}</p>
              <p className="text-emerald-600 font-bold mt-1">
                UGX {item.price.toLocaleString()} {item.type === "rent" && "/day"}
              </p>
              {item.type === "rent" && (
                <p className="text-xs text-gray-400">Deposit: UGX {item.deposit}</p>
              )}
              <p className="mt-1 text-xs text-gray-500">Status: {item.status}</p>
              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => updateStatus(item.id, "sold")}
                  className="flex-1 bg-green-500 text-white py-1 rounded-lg text-sm shadow hover:bg-green-600"
                >
                  Mark Sold
                </button>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="flex-1 bg-red-500 text-white py-1 rounded-lg text-sm shadow hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Transaction Insights */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Transaction Insights</h2>
        <div className="bg-white shadow-xl rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-emerald-50 text-gray-700">
              <tr>
                <th className="p-3 text-left">Item</th>
                <th className="p-3 text-left">Type</th>
                <th className="p-3 text-left">User</th>
                <th className="p-3 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t) => (
                <tr key={t.id} className="border-t hover:bg-gray-50">
                  <td className="p-3">{t.item}</td>
                  <td className="p-3">{t.type}</td>
                  <td className="p-3">{t.user}</td>
                  <td className="p-3">{t.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
