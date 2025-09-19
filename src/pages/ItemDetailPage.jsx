import { useParams, Link } from "react-router-dom";

function ItemDetailPage() {
  const { id } = useParams();

  // Dummy data – will later be replaced with API/backend
  const outfits = [
    {
      id: 1,
      title: "Elegant Wedding Gown",
      price: "UGX 150,000",
      deposit: "UGX 50,000",
      category: "Wedding",
      seller: "Sarah K.",
      location: "Kampala",
      description:
        "A beautiful white wedding gown, perfect for special occasions. Size M, available for 3-day rentals.",
    },
    {
      id: 2,
      title: "Birthday Party Dress",
      price: "UGX 80,000",
      deposit: "UGX 30,000",
      category: "Party",
      seller: "Grace M.",
      location: "Entebbe",
      description:
        "Trendy red party dress, size S. Comfortable and elegant for evening events.",
    },
    {
      id: 3,
      title: "Luxury Suit",
      price: "UGX 200,000",
      deposit: "UGX 70,000",
      category: "Formal",
      seller: "James O.",
      location: "Kampala",
      description:
        "Premium luxury suit ideal for weddings, galas, or corporate events. Size L.",
    },
  ];

  const outfit = outfits.find((item) => item.id === parseInt(id));

  if (!outfit) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-700">Outfit Not Found</h2>
        <p className="text-gray-500">The item you are looking for doesn’t exist.</p>
        <Link to="/browse" className="mt-4 inline-block text-emerald-600 font-semibold">
          ← Back to Browse
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Layout: Image + Details */}
      <div className="grid md:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow">
        {/* Image */}
        <div className="bg-gray-200 h-96 flex items-center justify-center rounded-lg">
          <span className="text-gray-500">Outfit Image</span>
        </div>

        {/* Details */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-emerald-700">{outfit.title}</h1>
          <p className="text-gray-600 leading-relaxed">{outfit.description}</p>

          <div className="flex items-center gap-6 text-lg">
            <p className="text-emerald-600 font-bold">{outfit.price}</p>
            <p className="text-gray-700">Deposit: {outfit.deposit}</p>
          </div>

          <p className="text-sm text-gray-500">
            Category: <span className="font-medium">{outfit.category}</span>
          </p>

          {/* Seller Info */}
          <div className="border-t pt-4">
            <p className="font-medium">Seller: {outfit.seller}</p>
            <p className="text-sm text-gray-500">Location: {outfit.location}</p>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-6">
            <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition">
              Rent Now
            </button>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Reviews Placeholder */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Ratings & Reviews</h2>
        <p className="text-gray-500">No reviews yet. Be the first to leave one!</p>
      </div>

      {/* Back Link */}
      <div className="text-center">
        <Link to="/browse" className="text-emerald-600 hover:underline">
          ← Back to Browse
        </Link>
      </div>
    </div>
  );
}

export default ItemDetailPage;
