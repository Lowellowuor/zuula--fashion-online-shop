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
      <h1 className="text-4xl font-bold mb-6 text-center text-primary-800 font-heading">Upload New Outfit</h1>
      <p className="text-lg text-text-secondary text-center mb-8 max-w-2xl mx-auto">
        Share your beautiful outfits with our community. Fill in the details below to list your item for rent or sale.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-xl shadow-lg premium-card">
        {/* Images Upload */}
        <div className="border-b border-background-300 pb-8">
          <label className="block font-semibold mb-3 text-text-primary text-lg">Photos</label>
          <p className="text-sm text-text-muted mb-4">Upload clear photos from different angles to showcase your outfit</p>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-xl cursor-pointer border-background-300 bg-background-50 hover:bg-background-100 transition-colors">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-12 h-12 mb-4 text-text-muted" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p className="mb-2 text-sm text-text-muted"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-text-muted">PNG, JPG (MAX. 5MB each)</p>
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
          <div className="flex gap-4 mt-6 flex-wrap">
            {images.map((img, index) => (
              <div key={index} className="w-24 h-24 relative border border-background-300 rounded-lg overflow-hidden shadow-sm group">
                <img
                  src={URL.createObjectURL(img)}
                  alt={`preview ${index}`}
                  className="w-full h-full object-cover"
                />
                <button 
                  type="button"
                  onClick={() => setImages(images.filter((_, i) => i !== index))}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Item Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-background-300 pb-8">
          <div>
            <label className="block font-semibold mb-2 text-text-primary">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="e.g., Elegant Red Gomesi"
              className="w-full border border-background-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background-50"
            />
          </div>
          
          <div>
            <label className="block font-semibold mb-2 text-text-primary">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="w-full border border-background-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background-50"
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
            <label className="block font-semibold mb-2 text-text-primary">Event Type</label>
            <select
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="w-full border border-background-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background-50"
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
            <label className="block font-semibold mb-2 text-text-primary">Size</label>
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full border border-background-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background-50"
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
            <label className="block font-semibold mb-2 text-text-primary">Color / Pattern</label>
            <input
              type="text"
              placeholder="e.g., Red, Floral, Striped"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full border border-background-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background-50"
            />
          </div>
          
          <div>
            <label className="block font-semibold mb-2 text-text-primary">Condition</label>
            <select
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              required
              className="w-full border border-background-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background-50"
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
        <div className="border-b border-background-300 pb-8">
          <label className="block font-semibold mb-3 text-text-primary text-lg">Style Tags</label>
          <p className="text-sm text-text-muted mb-4">Select all that apply to your item</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Gomesi", "Kanzu", "Modern", "Traditional", "Western", "African", "Formal", "Casual", "Vintage", "Designer", "Luxury", "Bohemian"].map(tag => (
              <div key={tag} className="flex items-center">
                <input
                  type="checkbox"
                  id={`tag-${tag}`}
                  checked={styleTags.includes(tag)}
                  onChange={() => handleStyleTagChange(tag)}
                  className="h-5 w-5 text-primary focus:ring-primary border-background-300 rounded"
                />
                <label htmlFor={`tag-${tag}`} className="ml-3 text-text-secondary font-medium">
                  {tag}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="border-b border-background-300 pb-8">
          <label className="block font-semibold mb-2 text-text-primary">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            placeholder="Describe your item, including any special features, brand, and any flaws to note..."
            required
            className="w-full border border-background-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background-50"
          />
        </div>

        <div className="border-b border-background-300 pb-8">
          <label className="block font-semibold mb-2 text-text-primary">Tags</label>
          <input
            type="text"
            placeholder="Comma-separated keywords (e.g., wedding, traditional, red, designer)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full border border-background-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background-50"
          />
        </div>

        {/* Location Information */}
        <div className="border-b border-background-300 pb-8">
          <label className="block font-semibold mb-2 text-text-primary">Location</label>
          <p className="text-sm text-text-muted mb-4">Where is this item located for pickup/delivery?</p>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border border-background-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background-50"
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
        <div className="border-b border-background-300 pb-8">
          <label className="block font-semibold mb-3 text-text-primary text-lg">Delivery Options</label>
          <p className="text-sm text-text-muted mb-4">How can borrowers receive this item?</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div 
              className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                deliveryOptions.includes("pickup") 
                  ? 'border-primary bg-primary-100 shadow-md' 
                  : 'border-background-300 hover:border-primary-300'
              }`}
              onClick={() => handleDeliveryOptionChange("pickup")}
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={deliveryOptions.includes("pickup")}
                  onChange={() => handleDeliveryOptionChange("pickup")}
                  className="h-5 w-5 text-primary focus:ring-primary border-background-300 rounded"
                />
                <label className="ml-3 text-text-primary font-medium">Pickup</label>
              </div>
              <p className="text-sm text-text-muted mt-2">Borrower picks up from your location</p>
            </div>
            
            <div 
              className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                deliveryOptions.includes("delivery") 
                  ? 'border-primary bg-primary-100 shadow-md' 
                  : 'border-background-300 hover:border-primary-300'
              }`}
              onClick={() => handleDeliveryOptionChange("delivery")}
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={deliveryOptions.includes("delivery")}
                  onChange={() => handleDeliveryOptionChange("delivery")}
                  className="h-5 w-5 text-primary focus:ring-primary border-background-300 rounded"
                />
                <label className="ml-3 text-text-primary font-medium">Delivery</label>
              </div>
              <p className="text-sm text-text-muted mt-2">You deliver to borrower (may charge extra)</p>
            </div>
            
            <div 
              className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                deliveryOptions.includes("meetup") 
                  ? 'border-primary bg-primary-100 shadow-md' 
                  : 'border-background-300 hover:border-primary-300'
              }`}
              onClick={() => handleDeliveryOptionChange("meetup")}
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={deliveryOptions.includes("meetup")}
                  onChange={() => handleDeliveryOptionChange("meetup")}
                  className="h-5 w-5 text-primary focus:ring-primary border-background-300 rounded"
                />
                <label className="ml-3 text-text-primary font-medium">Meetup</label>
              </div>
              <p className="text-sm text-text-muted mt-2">Meet at a public location</p>
            </div>
          </div>
        </div>

        {/* Pricing & Rent/Buy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-background-300 pb-8">
          <div>
            <label className="block font-semibold mb-2 text-text-primary">Rent / Buy</label>
            <select
              value={rentOrBuy}
              onChange={(e) => setRentOrBuy(e.target.value)}
              className="w-full border border-background-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background-50"
            >
              <option value="rent">Rent Only</option>
              <option value="buy">Sell Only</option>
              <option value="both">Both Rent and Sell</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-2 text-text-primary">
              {rentOrBuy === "buy" ? "Price (UGX)" : "Rental Price (UGX per day)"}
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="w-full border border-background-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background-50"
            />
          </div>

          {rentOrBuy !== "buy" && (
            <div>
              <label className="block font-semibold mb-2 text-text-primary">Deposit (UGX)</label>
              <input
                type="number"
                value={deposit}
                onChange={(e) => setDeposit(e.target.value)}
                className="w-full border border-background-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background-50"
              />
            </div>
          )}
        </div>

        {rentOrBuy !== "buy" && (
          <div className="border-b border-background-300 pb-8">
            <label className="block font-semibold mb-2 text-text-primary">Minimum Rental Period</label>
            <select
              value={minRentalPeriod}
              onChange={(e) => setMinRentalPeriod(e.target.value)}
              className="w-full border border-background-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-background-50"
            >
              <option value="1">1 day</option>
              <option value="3">3 days</option>
              <option value="7">1 week</option>
            </select>
          </div>
        )}

        {/* Premium Option */}
        <div className="border-b border-background-300 pb-8">
          <div className="flex items-start p-4 bg-accent-50 rounded-lg border border-accent-200">
            <input
              type="checkbox"
              checked={isPremium}
              onChange={(e) => setIsPremium(e.target.checked)}
              className="h-5 w-5 text-accent focus:ring-accent border-background-300 rounded mt-1"
            />
            <div className="ml-3">
              <label className="text-text-primary font-semibold flex items-center">
                Mark as Premium Item 
                <span className="ml-3 bg-accent text-primary-900 text-sm font-bold px-3 py-1 rounded-full">Gold</span>
              </label>
              <p className="text-sm text-text-muted mt-1">
                Premium items get featured placement and are eligible for our luxury collection (requires verification)
              </p>
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="text-center pt-6">
          <button
            type="submit"
            className="btn-primary bg-gradient-to-r from-primary to-primary-600 text-white px-10 py-4 rounded-xl font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
          >
            Publish Item
          </button>
          <p className="text-text-muted text-sm mt-4">
            By publishing, you agree to our terms of service and community guidelines
          </p>
        </div>
      </form>
    </div>
  );
}