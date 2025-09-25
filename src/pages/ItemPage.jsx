// ItemPage.jsx
import { useParams, useNavigate } from "react-router-dom";
import { sampleOutfits } from "../data/outfits";

export default function ItemPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = sampleOutfits.find(o => o.id === parseInt(id));

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

  return (
    <div className="min-h-screen bg-gray-50 px-4 md:px-20 py-10">
      <div className="bg-white p-6 rounded-2xl shadow-md max-w-3xl mx-auto">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full max-h-96 object-cover rounded-xl mb-6" 
        />
        <h1 className="text-3xl font-bold mb-2">{item.title}</h1>
        <p className="text-gray-600 mb-4">{item.category} • {item.location}</p>
        <p className="text-xl font-bold text-emerald-600 mb-4">
          UGX {item.price.toLocaleString()} {item.rent && "/day"}
        </p>
        {item.rent && (
          <p className="text-gray-500 mb-4">Deposit: UGX {item.deposit.toLocaleString()}</p>
        )}
        
        <div className="mt-6 flex gap-3">
          {item.rent && (
            <button
              onClick={() => navigate(`/rent/${item.id}`)}
              className="flex-1 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Rent
            </button>
          )}
          <button
            onClick={() => alert("Buy functionality coming soon!")}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
