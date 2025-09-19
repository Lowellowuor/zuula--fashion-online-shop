// src/pages/UploadPage.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function UploadPage() {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [tags, setTags] = useState("");
  const [price, setPrice] = useState("");
  const [deposit, setDeposit] = useState("");
  const [rentOrBuy, setRentOrBuy] = useState("rent");

  // Handle file selection
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would integrate with backend API
    console.log({
      images,
      title,
      description,
      category,
      size,
      color,
      tags,
      price,
      deposit,
      rentOrBuy,
    });
    alert("Item uploaded successfully!");
    // Reset form
    setImages([]);
    setTitle("");
    setDescription("");
    setCategory("");
    setSize("");
    setColor("");
    setTags("");
    setPrice("");
    setDeposit("");
    setRentOrBuy("rent");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 text-center">Upload New Outfit</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Images Upload */}
        <div>
          <label className="block font-semibold mb-2">Photos</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="block w-full border border-gray-300 rounded p-2"
          />
          <div className="flex gap-4 mt-4 flex-wrap">
            {images.map((img, index) => (
              <div key={index} className="w-24 h-24 relative border rounded overflow-hidden">
                <img
                  src={URL.createObjectURL(img)}
                  alt={`preview ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Item Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="w-full border border-gray-300 rounded p-2"
            >
              <option value="">Select Category</option>
              <option value="Wedding">Wedding</option>
              <option value="Party">Party</option>
              <option value="Graduation">Graduation</option>
              <option value="Cultural">Cultural</option>
              <option value="Formal">Formal</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1">Size</label>
            <input
              type="text"
              placeholder="e.g., S, M, L, XL"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Color / Pattern</label>
            <input
              type="text"
              placeholder="e.g., Red, Floral"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            required
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Tags</label>
          <input
            type="text"
            placeholder="Comma-separated keywords"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        {/* Pricing & Rent/Buy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block font-semibold mb-1">Rent / Buy</label>
            <select
              value={rentOrBuy}
              onChange={(e) => setRentOrBuy(e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
            >
              <option value="rent">Rent</option>
              <option value="buy">Buy</option>
              <option value="both">Both</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1">Price (UGX)</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>

          {rentOrBuy === "rent" && (
            <div>
              <label className="block font-semibold mb-1">Deposit (UGX)</label>
              <input
                type="number"
                value={deposit}
                onChange={(e) => setDeposit(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
          )}
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-emerald-600 text-white px-6 py-3 rounded-2xl font-medium hover:bg-emerald-700 transition-colors"
          >
            Publish Item
          </button>
        </div>
      </form>
    </div>
  );
}
