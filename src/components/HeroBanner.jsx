import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';



const HeroBanner = ({ title, subtitle, ctaText, ctaLink, imageUrl }) => {
  
  useEffect(() => {
    console.log(imageUrl)
  }, [])

  return (
    <div className="relative rounded-xl overflow-hidden">
      <img src={imageUrl} alt={title} loading="lazy" className="w-full h-64 object-cover" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-black text-center px-4">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-lg mt-2">{subtitle}</p>
        <Link to={ctaLink} className="mt-4 bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600">
          {ctaText}
        </Link>
      </div>
    </div>
  );
};

export default HeroBanner;
