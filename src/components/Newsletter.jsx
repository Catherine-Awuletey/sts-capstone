import React from 'react';

const Newsletter = ({ title, description, ctaText, placeholder }) => {
  return (
    <div className="bg-pink-50 rounded-xl p-6 text-black text-center shadow-md">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
      <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-2">
        <input
          type="email"
          placeholder={placeholder}
          className="px-4 py-2 border border-gray-300 rounded-md w-full sm:w-1/2"
        />
        <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition">
          {ctaText}
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
