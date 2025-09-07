import React from "react";
import { useParams } from "react-router-dom";
import cosmeticsLandingData from "../data/cosmeticsLandingData"; // adjust path as needed

const ProductCategory = () => {
  const { categoryName } = useParams();

  // Filter products by category name from URL
  const filteredProducts = cosmeticsLandingData.productList.filter(
    (product) => product.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="container mx-auto lg:mx-0 p-8">
      <h1 className="text-2xl lg:text-3xl font-bold text-black mb-8 capitalize">{categoryName} Products</h1>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                loading="lazy" 
                className="w-full h-48 sm:h-56 object-cover" 
              />
              <div className="p-4">
                <h2 className="text-black font-semibold text-lg mb-2 line-clamp-2">{product.name}</h2>
                <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
                <p className="text-pink-600 font-bold text-xl mb-2">${product.price}</p>
                <p className="text-yellow-500 text-sm">⭐ {product.rating}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default ProductCategory;
