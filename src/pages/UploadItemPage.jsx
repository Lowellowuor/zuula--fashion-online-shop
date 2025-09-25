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
  
  // New state variables for enhanced features
  const [condition, setCondition] = useState("");
  const [minRentalPeriod, setMinRentalPeriod] = useState("1");
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [location, setLocation] = useState("");
  const [isPremium, setIsPremium] = useState(false);
  const [unavailableDates, setUnavailableDates] = useState([]);
  const [styleTags, setStyleTags] = useState([]);
  const [eventType, setEventType] = useState("");

  // Handle file selection
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  // Handle delivery options checkbox changes
  const handleDeliveryOptionChange = (option) => {
    if (deliveryOptions.includes(option)) {
      setDeliveryOptions(deliveryOptions.filter(item => item !== option));
    } else {
      setDeliveryOptions([...deliveryOptions, option]);
    }
  };

  // Handle style tags selection
  const handleStyleTagChange = (tag) => {
    if (styleTags.includes(tag)) {
      setStyleTags(styleTags.filter(item => item !== tag));
    } else {
      setStyleTags([...styleTags, tag]);
    }
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
      condition,
      minRentalPeriod,
      deliveryOptions,
      location,
      isPremium,
      unavailableDates,
      styleTags,
      eventType
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
    setCondition("");
    setMinRentalPeriod("1");
    setDeliveryOptions([]);
    setLocation("");
    setIsPremium(false);
    setUnavailableDates([]);
    setStyleTags([]);
    setEventType("");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-emerald-700">Upload New Outfit</h1>

      <form onSubmit={handleSubmit} className="space-y-8 bg-white p-6 rounded-lg shadow-md">
        {/* Images Upload */}
        <div className="border-b pb-6">
          <label className="block font-semibold mb-2 text-gray-700">Photos</label>
          <p className="text-sm text-gray-500 mb-3">Upload clear photos from different angles</p>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer border-gray-300 bg-gray-50 hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500">PNG, JPG (MAX. 5MB each)</p>
              </div>
              <input 
                type="file" 
                accept="image/*" 
                multiple 
                onChange={handleImageChange} 
                className="hidden" 
              />
            </label>
          </div>
          <div className="flex gap-4 mt-4 flex-wrap">
            {images.map((img, index) => (
              <div key={index} className="w-24 h-24 relative border rounded overflow-hidden shadow-sm">
                <img
                  src={URL.createObjectURL(img)}
                  alt={`preview ${index}`}
                  className="w-full h-full object-cover"
                />
                <button 
                  type="button"
                  onClick={() => setImages(images.filter((_, i) => i !== index))}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Item Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b pb-6">
          <div>
            <label className="block font-semibold mb-1 text-gray-700">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="e.g., Elegant Red Gomesi"
              className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          
          <div>
            <label className="block font-semibold mb-1 text-gray-700">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="">Select Category</option>
              <option value="Wedding">Wedding</option>
              <option value="Party">Party</option>
              <option value="Graduation">Graduation</option>
              <option value="Cultural">Cultural</option>
              <option value="Formal">Formal</option>
              <option value="Traditional">Traditional</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1 text-gray-700">Event Type</label>
            <select
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="">Select Event Type</option>
              <option value="Traditional Wedding">Traditional Wedding</option>
              <option value="Church Wedding">Church Wedding</option>
              <option value="Introduction">Introduction</option>
              <option value="Cocktail Party">Cocktail Party</option>
              <option value="Birthday">Birthday</option>
              <option value="Graduation">Graduation</option>
              <option value="Gala">Gala</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1 text-gray-700">Size</label>
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="">Select Size</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="2XL">2XL</option>
              <option value="3XL">3XL</option>
              <option value="Free Size">Free Size</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1 text-gray-700">Color / Pattern</label>
            <input
              type="text"
              placeholder="e.g., Red, Floral, Striped"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          
          <div>
            <label className="block font-semibold mb-1 text-gray-700">Condition</label>
            <select
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              required
              className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="">Select Condition</option>
              <option value="new">New with tags</option>
              <option value="like_new">Like New</option>
              <option value="gently_used">Gently Used</option>
              <option value="well_worn">Well Worn</option>
            </select>
          </div>
        </div>

        {/* Style Tags */}
        <div className="border-b pb-6">
          <label className="block font-semibold mb-2 text-gray-700">Style Tags</label>
          <p className="text-sm text-gray-500 mb-3">Select all that apply to your item</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["Gomesi", "Kanzu", "Modern", "Traditional", "Western", "African", "Formal", "Casual", "Vintage", "Designer", "Luxury", "Bohemian"].map(tag => (
              <div key={tag} className="flex items-center">
                <input
                  type="checkbox"
                  id={`tag-${tag}`}
                  checked={styleTags.includes(tag)}
                  onChange={() => handleStyleTagChange(tag)}
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                />
                <label htmlFor={`tag-${tag}`} className="ml-2 text-sm text-gray-700">
                  {tag}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="border-b pb-6">
          <label className="block font-semibold mb-1 text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            placeholder="Describe your item, including any special features, brand, and any flaws to note..."
            required
            className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>

        <div className="border-b pb-6">
          <label className="block font-semibold mb-1 text-gray-700">Tags</label>
          <input
            type="text"
            placeholder="Comma-separated keywords (e.g., wedding, traditional, red, designer)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>

        {/* Location Information */}
        <div className="border-b pb-6">
          <label className="block font-semibold mb-1 text-gray-700">Location</label>
          <p className="text-sm text-gray-500 mb-3">Where is this item located for pickup/delivery?</p>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          >
            <option value="">Select Location in Kampala</option>
            <option value="Central">Central Division</option>
            <option value="Kawempe">Kawempe Division</option>
            <option value="Makindye">Makindye Division</option>
            <option value="Nakawa">Nakawa Division</option>
            <option value="Rubaga">Rubaga Division</option>
            <option value="Other">Other Areas</option>
          </select>
        </div>

        {/* Delivery Options */}
        <div className="border-b pb-6">
          <label className="block font-semibold mb-2 text-gray-700">Delivery Options</label>
          <p className="text-sm text-gray-500 mb-3">How can borrowers receive this item?</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div 
              className={`border rounded-lg p-4 cursor-pointer ${deliveryOptions.includes("pickup") ? 'border-emerald-500 bg-emerald-50' : 'border-gray-300'}`}
              onClick={() => handleDeliveryOptionChange("pickup")}
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={deliveryOptions.includes("pickup")}
                  onChange={() => handleDeliveryOptionChange("pickup")}
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                />
                <label className="ml-2 text-gray-700 font-medium">Pickup</label>
              </div>
              <p className="text-sm text-gray-500 mt-1">Borrower picks up from your location</p>
            </div>
            
            <div 
              className={`border rounded-lg p-4 cursor-pointer ${deliveryOptions.includes("delivery") ? 'border-emerald-500 bg-emerald-50' : 'border-gray-300'}`}
              onClick={() => handleDeliveryOptionChange("delivery")}
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={deliveryOptions.includes("delivery")}
                  onChange={() => handleDeliveryOptionChange("delivery")}
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                />
                <label className="ml-2 text-gray-700 font-medium">Delivery</label>
              </div>
              <p className="text-sm text-gray-500 mt-1">You deliver to borrower (may charge extra)</p>
            </div>
            
            <div 
              className={`border rounded-lg p-4 cursor-pointer ${deliveryOptions.includes("meetup") ? 'border-emerald-500 bg-emerald-50' : 'border-gray-300'}`}
              onClick={() => handleDeliveryOptionChange("meetup")}
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={deliveryOptions.includes("meetup")}
                  onChange={() => handleDeliveryOptionChange("meetup")}
                  className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                />
                <label className="ml-2 text-gray-700 font-medium">Meetup</label>
              </div>
              <p className="text-sm text-gray-500 mt-1">Meet at a public location</p>
            </div>
          </div>
        </div>

        {/* Pricing & Rent/Buy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b pb-6">
          <div>
            <label className="block font-semibold mb-1 text-gray-700">Rent / Buy</label>
            <select
              value={rentOrBuy}
              onChange={(e) => setRentOrBuy(e.target.value)}
              className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="rent">Rent Only</option>
              <option value="buy">Sell Only</option>
              <option value="both">Both Rent and Sell</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1 text-gray-700">
              {rentOrBuy === "buy" ? "Price (UGX)" : "Rental Price (UGX per day)"}
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          {rentOrBuy !== "buy" && (
            <div>
              <label className="block font-semibold mb-1 text-gray-700">Deposit (UGX)</label>
              <input
                type="number"
                value={deposit}
                onChange={(e) => setDeposit(e.target.value)}
                className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          )}
        </div>

        {rentOrBuy !== "buy" && (
          <div className="border-b pb-6">
            <label className="block font-semibold mb-1 text-gray-700">Minimum Rental Period</label>
            <select
              value={minRentalPeriod}
              onChange={(e) => setMinRentalPeriod(e.target.value)}
              className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            >
              <option value="1">1 day</option>
              <option value="3">3 days</option>
              <option value="7">1 week</option>
            </select>
          </div>
        )}

        {/* Premium Option */}
        <div className="border-b pb-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={isPremium}
              onChange={(e) => setIsPremium(e.target.checked)}
              className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
            />
            <label className="ml-2 text-gray-700 font-medium flex items-center">
              Mark as Premium Item 
              <span className="ml-2 bg-amber-100 text-amber-800 text-xs font-medium px-2.5 py-0.5 rounded">Gold</span>
            </label>
          </div>
          <p className="text-sm text-gray-500 mt-1">Premium items get featured placement and are eligible for our luxury collection (requires verification)</p>
        </div>

        {/* Submit */}
        <div className="text-center pt-4">
          <button
            type="submit"
            className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors shadow-md"
          >
            Publish Item
          </button>
        </div>
      </form>
    </div>
  );
}