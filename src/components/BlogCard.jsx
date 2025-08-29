import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ title, link, imageUrl }) {
  return (
    <Link to={link} className="block text-black">
      <img src={imageUrl} alt={title} loading="lazy" className="w-full h-40 object-cover rounded-lg" />
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
    </Link>
  );
}
