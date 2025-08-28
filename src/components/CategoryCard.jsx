import React from "react";
import { Link } from "react-router-dom";

export default function CategoryCard({ name, imageUrl, link }) {
  return (
    <Link to={`/category/${name.toLowerCase()}`} className="block text-center text-black">
      <img src={imageUrl} alt={name} className="w-full h-40 object-cover rounded-lg" />
      <h4 className="mt-2 text-lg font-medium">{name}</h4>
    </Link>
  );
}
