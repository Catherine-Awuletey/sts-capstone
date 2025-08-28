import React from "react";

export default function TestimonialCard({ name, review, rating }) {
  return (
    <div className="border p-4 rounded-md shadow-sm text-black">
      <p className="italic">"{review}"</p>
      <p className="mt-2 font-semibold">{name}</p>
      <p className="text-yellow-500">⭐ {rating}</p>
    </div>
  );
}
