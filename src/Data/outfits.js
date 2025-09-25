// src/data/outfits.js
export const sampleOutfits = [
  {
    id: 1,
    title: "Casual Streetwear",
    category: "Streetwear",
    location: "Kampala",
    image: "https://via.placeholder.com/400x300.png?text=Streetwear",
    price: 50000,
    rent: true,
    deposit: 20000,
  },
  {
    id: 2,
    title: "Formal Suit",
    category: "Formal",
    location: "Nairobi",
    image: "https://via.placeholder.com/400x300.png?text=Suit",
    price: 200000,
    rent: false, // cannot rent, only buy
  },
  {
    id: 3,
    title: "Summer Dress",
    category: "Casual",
    location: "Kigali",
    image: "https://via.placeholder.com/400x300.png?text=Summer+Dress",
    price: 70000,
    rent: true,
    deposit: 30000,
  },
  {
    id: 4,
    title: "Traditional Attire",
    category: "Cultural",
    location: "Dar es Salaam",
    image: "https://via.placeholder.com/400x300.png?text=Traditional+Attire",
    price: 120000,
    rent: true,
    deposit: 50000,
  },
];
