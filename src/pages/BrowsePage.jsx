// src/pages/BrowsePage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const sampleOutfits = [
  {
    id: 1,
    title: "Red Wedding Dress",
    category: "Wedding",
    size: "M",
    color: "Red",
    price: 100000,
    deposit: 20000,
    rent: true,
    image: "https://via.placeholder.com/300x400?text=Red+Dress",
    seller: "Fashionista01",
    verified: true,
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
    image: "https://via.placeholder.com/300x400?text=Floral+Dress",
    seller: "Trendsetter",
    verified: false,
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
    image: "https://via.placeholder.com/300x400?text=Graduation+Gown",
    seller: "ClassyCloset",
    verified: true,
  },
];

export default function BrowsePage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    size: "",
    color: "",
    priceRange: [0, 200000],
    rentOnly: false,
  });

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [actionType, setActionType] = useState(""); // "rent" or "buy"

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const filteredOutfits = sampleOutfits.filter((item) => {
    return (
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (filters.category ? item.category === filters.category : true) &&
      (filters.size ? item.size === filters.size : true) &&
      (filters.color ? item.color === filters.color : true) &&
      (filters.rentOnly ? item.rent === true : true) &&
      item.price >= filters.priceRange[0] &&
      item.price <= filters.priceRange[1]
    );
  });

  const handleView = (id) => {
    navigate(`/item/${id}`);
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
  };

  const handleConfirm = () => {
    alert(
      `${actionType === "rent" ? "Rental" : "Purchase"} confirmed for ${
        selectedItem.title
      }`
    );
    closeModal();
  };

  return (
    <div className="px-4 md:px-20 pt-24 pb-8 space-y-8">
      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <input
          type="text"
          placeholder="Search for outfits..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
        />
        <div className="flex gap-2 flex-wrap">
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange("category", e.target.value)}
            className="px-3 py-2 border rounded-lg"
          >
            <option value="">All Categories</option>
            <option value="Wedding">Wedding</option>
            <option value="Party">Party</option>
            <option value="Graduation">Graduation</option>
            <option value="Cultural">Cultural</option>
            <option value="Formal">Formal</option>
          </select>
          <select
            value={filters.size}
            onChange={(e) => handleFilterChange("size", e.target.value)}
            className="px-3 py-2 border rounded-lg"
          >
            <option value="">All Sizes</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
          <select
            value={filters.color}
            onChange={(e) => handleFilterChange("color", e.target.value)}
            className="px-3 py-2 border rounded-lg"
          >
            <option value="">All Colors</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Floral">Floral</option>
            <option value="Green">Green</option>
          </select>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.rentOnly}
              onChange={(e) => handleFilterChange("rentOnly", e.target.checked)}
            />
            Rent Only
          </label>
        </div>
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredOutfits.length > 0 ? (
          filteredOutfits.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-64 bg-gray-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.category}</p>
                <p className="font-bold text-emerald-600">
                  UGX {item.price.toLocaleString()} {item.rent && "/day"}
                </p>
                <p className="text-gray-400 text-sm">
                  Deposit: UGX {item.deposit.toLocaleString()}
                </p>
                <p className="text-gray-500 text-sm">
                  Seller: {item.seller}{" "}
                  {item.verified && (
                    <span className="text-emerald-600 font-bold">✔</span>
                  )}
                </p>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => handleView(item.id)}
                    className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-xl hover:bg-gray-300 transition-colors"
                  >
                    View
                  </button>
                  {item.rent && (
                    <button
                      onClick={() => openModal(item, "rent")}
                      className="flex-1 bg-emerald-600 text-white py-2 rounded-xl hover:bg-emerald-700 transition-colors"
                    >
                      Rent
                    </button>
                  )}
                  <button
                    onClick={() => openModal(item, "buy")}
                    className="flex-1 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-colors"
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No outfits found.
          </p>
        )}
      </div>

      {/* Modal */}
      {modalOpen && selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4">
              {actionType === "rent" ? "Rent" : "Buy"} {selectedItem.title}
            </h2>
            {actionType === "rent" && (
              <>
                <label className="block mb-2">
                  Rental Days:
                  <input
                    type="number"
                    defaultValue={1}
                    min={1}
                    className="w-full mt-1 px-3 py-2 border rounded-lg"
                  />
                </label>
                <p className="mb-2">
                  Deposit: UGX {selectedItem.deposit.toLocaleString()}
                </p>
                <p className="mb-4 font-bold">
                  Total: UGX{" "}
                  {(selectedItem.price + selectedItem.deposit).toLocaleString()}
                </p>
              </>
            )}
            {actionType === "buy" && (
              <p className="mb-4 font-bold">
                Total Price: UGX {selectedItem.price.toLocaleString()}
              </p>
            )}
            <button
              onClick={handleConfirm}
              className="w-full bg-emerald-600 text-white py-2 rounded-xl hover:bg-emerald-700 transition-colors"
            >
              Confirm {actionType === "rent" ? "Rental" : "Purchase"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
