// src/pages/BookingPage.jsx
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function BookingPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state?.item; // Passed from ItemDetailPage or ItemPage

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("pickup");
  const [address, setAddress] = useState("");

  if (!item) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl font-bold">No item selected for booking</h2>
        <button
          onClick={() => navigate("/browse")}
          className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg"
        >
          Browse Items
        </button>
      </div>
    );
  }

  // Calculate rental days & cost
  const rentalDays =
    startDate && endDate
      ? Math.max(
          1,
          (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24)
        )
      : 0;
  const rentalCost = rentalDays * item.price;
  const totalCost = rentalCost + item.deposit;

  const handleProceed = () => {
    navigate("/payment", {
      state: { item, startDate, endDate, deliveryMethod, address, totalCost },
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-md mt-6">
      <h1 className="text-2xl font-bold mb-4">Book Item</h1>

      {/* Item Summary */}
      <div className="flex gap-4 border-b pb-4 mb-4">
        <img
          src={item.image}
          alt={item.title}
          className="w-32 h-32 object-cover rounded-lg"
        />
        <div>
          <h2 className="font-semibold text-lg">{item.title}</h2>
          <p className="text-gray-600">{item.category}</p>
          <p className="text-emerald-600 font-bold">
            UGX {item.price.toLocaleString()} /day
          </p>
          <p className="text-sm text-gray-500">
            Deposit: UGX {item.deposit.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Dates */}
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium mb-1">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full"
          />
        </div>
      </div>

      {/* Delivery */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Delivery Method</label>
        <div className="flex gap-6">
          <label>
            <input
              type="radio"
              checked={deliveryMethod === "pickup"}
              onChange={() => setDeliveryMethod("pickup")}
            />
            <span className="ml-2">Pickup</span>
          </label>
          <label>
            <input
              type="radio"
              checked={deliveryMethod === "delivery"}
              onChange={() => setDeliveryMethod("delivery")}
            />
            <span className="ml-2">Delivery</span>
          </label>
        </div>
        {deliveryMethod === "delivery" && (
          <input
            type="text"
            placeholder="Enter delivery address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mt-2 border rounded-lg px-3 py-2 w-full"
          />
        )}
      </div>

      {/* Cost Summary */}
      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        <p>
          Rental Days: <span className="font-semibold">{rentalDays}</span>
        </p>
        <p>
          Rental Cost:{" "}
          <span className="font-semibold">
            UGX {rentalCost.toLocaleString()}
          </span>
        </p>
        <p>
          Deposit:{" "}
          <span className="font-semibold">
            UGX {item.deposit.toLocaleString()}
          </span>
        </p>
        <p className="text-lg font-bold text-emerald-700">
          Total: UGX {totalCost.toLocaleString()}
        </p>
      </div>

      {/* Actions */}
      <button
        onClick={handleProceed}
        disabled={!startDate || !endDate}
        className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition disabled:bg-gray-400"
      >
        Proceed to Payment
      </button>
    </div>
  );
}
