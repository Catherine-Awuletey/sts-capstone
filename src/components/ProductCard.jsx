import React from "react";

export default function ProductCard({ name, brand, category, price, rating, imageUrl }) {
  return (
    <div className="border rounded-xl shadow p-4 w-full max-w-xs text-black">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover rounded-md" />
      <div className="mt-2">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-gray-500">{brand} • {category}</p>
        <p className="text-pink-600 font-bold">${price.toFixed(2)}</p>
        <p className="text-yellow-500">⭐ {rating}</p>
      </div>
    </div>
  );
}
