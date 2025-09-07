import React from "react";

export default function ProductCard({ name, brand, category, price, rating, imageUrl }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden w-full">
      <img 
        src={imageUrl} 
        alt={name} 
        loading="lazy" 
        className="w-full h-48 sm:h-56 object-cover" 
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{name}</h3>
        <p className="text-sm text-gray-500 mb-2">{brand} • {category}</p>
        <p className="text-pink-600 font-bold text-xl mb-2">${price.toFixed(2)}</p>
        <p className="text-yellow-500 text-sm">⭐ {rating}</p>
      </div>
    </div>
  );
}
