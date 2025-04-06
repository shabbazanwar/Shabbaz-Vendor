// CartPage.jsx
import React from "react";
import { useCart } from "../Cart/cartContext.jsx"; // Adjust path as needed

const CartPage = () => {
  const { cart } = useCart();

  if (cart.length === 0) {
    return <p className="p-6">Your cart is empty.</p>;
  }

  return (
    <div className="p-6 mt-48">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      <div className="grid grid-cols-1 gap-4">
        {cart.map((item, index) => (
          <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-md border border-gray-200">
            <img
              src={item.img}
              alt={item.name}
              className="w-16 h-16 object-cover rounded-md shadow-sm"
            />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-700">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
