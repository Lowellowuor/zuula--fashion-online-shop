// src/pages/PaymentPage.jsx
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state;

  const [method, setMethod] = useState("mobile");
  const [phone, setPhone] = useState("");
  const [card, setCard] = useState({ number: "", expiry: "", cvv: "" });

  if (!booking) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl font-bold">No booking found</h2>
        <button
          onClick={() => navigate("/browse")}
          className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg"
        >
          Browse Items
        </button>
      </div>
    );
  }

  const handlePayment = () => {
    alert(`Payment successful via ${method.toUpperCase()}!`);
    navigate("/dashboard");
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-md mt-6">
      <h1 className="text-2xl font-bold mb-4">Payment</h1>

      {/* Order Summary */}
      <div className="border-b pb-4 mb-4">
        <h2 className="font-semibold">Order Summary</h2>
        <p>{booking.item.title}</p>
        <p>
          {booking.startDate} → {booking.endDate}
        </p>
        <p className="text-lg font-bold text-emerald-700">
          Total: UGX {booking.totalCost.toLocaleString()}
        </p>
      </div>

      {/* Payment Method */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Payment Method</label>
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          className="border rounded-lg px-3 py-2 w-full"
        >
          <option value="mobile">Mobile Money</option>
          <option value="card">Card</option>
          <option value="cash">Cash on Delivery</option>
        </select>
      </div>

      {/* Dynamic Inputs */}
      {method === "mobile" && (
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <input
            type="tel"
            placeholder="07XXXXXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full"
          />
        </div>
      )}

      {method === "card" && (
        <div className="space-y-3 mb-4">
          <input
            type="text"
            placeholder="Card Number"
            value={card.number}
            onChange={(e) => setCard({ ...card, number: e.target.value })}
            className="border rounded-lg px-3 py-2 w-full"
          />
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="MM/YY"
              value={card.expiry}
              onChange={(e) => setCard({ ...card, expiry: e.target.value })}
              className="border rounded-lg px-3 py-2 w-full"
            />
            <input
              type="text"
              placeholder="CVV"
              value={card.cvv}
              onChange={(e) => setCard({ ...card, cvv: e.target.value })}
              className="border rounded-lg px-3 py-2 w-full"
            />
          </div>
        </div>
      )}

      {/* Pay Button */}
      <button
        onClick={handlePayment}
        className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition"
      >
        Confirm & Pay
      </button>
    </div>
  );
}
