// RentPage.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { sampleOutfits } from "../data/outfits";

export default function RentPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = sampleOutfits.find((o) => o.id === parseInt(id));

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [duration, setDuration] = useState(1);
  const [total, setTotal] = useState(item ? item.price + item.deposit : 0);

  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) || 1;
      setDuration(diffDays > 0 ? diffDays : 1);
      setTotal(diffDays > 0 ? diffDays * item.price + item.deposit : item.price + item.deposit);
    }
  }, [startDate, endDate, item]);

  if (!item) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold">Item not found</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-emerald-600 text-white rounded-lg"
        >
          Go Back
        </button>
      </div>
    );
  }

  const handleConfirmBooking = () => {
    // Navigate to payment page, pass item and booking details
    navigate(`/payment/${item.id}`, {
      state: { item, startDate, endDate, duration, total },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 md:px-20 py-10">
      <div className="bg-white p-6 rounded-2xl shadow-md max-w-3xl mx-auto">
        {/* Item Summary */}
        <img
          src={item.image}
          alt={item.title}
          className="w-full max-h-96 object-cover rounded-xl mb-6"
        />
        <h1 className="text-3xl font-bold mb-2">{item.title}</h1>
        <p className="text-gray-600 mb-4">{item.category} • {item.location}</p>
        <p className="text-xl font-bold text-emerald-600 mb-4">
          UGX {item.price.toLocaleString()} / day
        </p>
        <p className="text-gray-500 mb-6">
          Deposit: UGX {item.deposit.toLocaleString()}
        </p>

        {/* Booking Form */}
        <div className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          <div className="flex justify-between font-medium">
            <span>Duration:</span>
            <span>{duration} {duration === 1 ? "day" : "days"}</span>
          </div>

          <div className="flex justify-between font-bold text-emerald-600 text-lg">
            <span>Total:</span>
            <span>UGX {total.toLocaleString()}</span>
          </div>

          <button
            onClick={handleConfirmBooking}
            className="w-full bg-emerald-600 text-white py-3 rounded-xl hover:bg-emerald-700 transition-colors font-medium"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
}
