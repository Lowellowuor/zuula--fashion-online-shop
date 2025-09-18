import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <Link to={`/items/${item.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
        <div className="aspect-square overflow-hidden">
          <img 
            src={item.image} 
            alt={item.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-charcoal truncate">{item.title}</h3>
          <p className="text-gray-600 text-sm mb-2">{item.category}</p>
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg font-bold text-emerald-500">UGX {item.price}</span>
            <div className="flex items-center">
              <span className="text-gold">⭐</span>
              <span className="text-sm text-gray-600 ml-1">{item.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
