import React from "react";

export default function PromoCard({ title, description, ctaText, imageUrl }) {
  return (
    <div className="relative bg-cover text-white rounded-xl overflow-hidden" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="p-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p>{description}</p>
        <button className="mt-4 bg-pink-500 text-white py-2 px-4 rounded">{ctaText}</button>
      </div>
    </div>
  );
}
