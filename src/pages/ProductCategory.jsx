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
    <div>
      <h1>{categoryName} Products</h1>

      {filteredProducts.length > 0 ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
          {filteredProducts.map((product) => (
            <div key={product.id} style={{ border: "1px solid #ccc", padding: "1rem" }}>
              <img src={product.imageUrl} alt={product.name} loading="lazy" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
              <h2 className="text-black font-semibold text-lg">{product.name}</h2>
              <p className="text-sm text-gray-500">{product.brand}</p>
              <p className="text-pink-600 font-bold">${product.price}</p>
              <p className="text-yellow-500">⭐ {product.rating}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found in this category.</p>
      )}
    </div>
  );
};

export default ProductCategory;
