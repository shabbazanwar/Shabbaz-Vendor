// VendorPreview.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../Cart/cartContext"; // Adjust path as needed

const VendorPreview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const vendor = location.state?.vendor;
  if (!vendor) return <p>Vendor not found</p>;

  const handleAddToCart = (product) => {
    addToCart(product);       // Add product to cart
    navigate("/cart");        // Navigate to Cart page
  };

  return (
    <div className="p-6 absolute mt-48">
      <h1 className="text-3xl font-bold">{vendor.name}</h1>
      <img
        src={vendor.img}
        alt={vendor.name}
        className="w-32 h-32 rounded-full border border-purple-400 mt-4 object-cover shadow-md"
      />
      <p className="mt-2 text-gray-700">
        Browse products from {vendor.name} below:
      </p>

      {/* Display Products */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-14 m-8">
        {vendor.products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-md border border-gray-200 w-full sm:w-64 md:w-72"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md shadow-sm"
            />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-700">{product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-2 bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorPreview;
