import React, { useState } from "react";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Product = ({ darkMode }) => {
  const [products, setProducts] = useState([
    { id: 1, name: "iPhone 14", status: "In stock", price: "$999" },
    { id: 2, name: "Galaxy S23", status: "In stock", price: "$899" },
    { id: 3, name: "MacBook Pro", status: "In stock", price: "$1999" },
    { id: 4, name: "Surface Pro", status: "In stock", price: "$1599" },
    { id: 5, name: "AirPods Pro", status: "In stock", price: "$249" },
    { id: 6, name: "PS5", status: "In stock", price: "$499" },
    { id: 7, name: "Xbox Series X", status: "In stock", price: "$499" },
    { id: 8, name: "Kindle Paperwhite", status: "In stock", price: "$129" },
    { id: 9, name: "GoPro Hero 11", status: "In stock", price: "$399" },
    { id: 10, name: "Fitbit Versa 4", status: "In stock", price: "$229" },
    { id: 11, name: "Sony WH-1000XM5", status: "In stock", price: "$349" },
    { id: 12, name: "LG OLED TV", status: "In stock", price: "$1299" },
    { id: 13, name: "Dell XPS 13", status: "In stock", price: "$1499" },
    { id: 14, name: "Nintendo Switch", status: "In stock", price: "$299" },
    { id: 15, name: "Bose SoundLink", status: "In stock", price: "$199" },
    { id: 16, name: "Canon EOS R5", status: "In stock", price: "$3899" },
    { id: 17, name: "Google Pixel 7", status: "In stock", price: "$599" },
    {
      id: 18,
      name: "iPad Pro",
      status: "In stock",
      price: "$1099",
      status: "In stock",
    },
    {
      id: 19,
      name: "Samsung Galaxy Tab S8",
      status: "In stock",
      price: "$799",
    },
    { id: 20, name: "Dyson V15", status: "In stock", price: "$749" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div
      className={`${
        darkMode
          ? "dark:bg-gray-800 dark:text-gray-200"
          : "bg-gray-100 text-gray-800"
      } p-6 min-h-screen mt-16`}
    >
      <div className="ml-60">
        <header className="flex justify-between items-end mb-6">
          <h1 className="text-2xl font-bold">Products</h1>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600">
            + Add Product
          </button>
        </header>
      </div>
      <div
        className={`${
          darkMode ? "bg-gray-800" : "bg-white"
        } max-w-6xl mx-auto rounded-lg shadow-lg p-4 mt-16 border mr-2`}
      >
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-sm px-4 py-2 border rounded-lg shadow-sm focus:outline-none ${
              darkMode
                ? "bg-gray-700 text-white border-gray-600"
                : "bg-gray-100 text-gray-800 border-gray-300"
            }`}
          />
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr
              className={`${
                darkMode ? "bg-gray-700 text-white" : "bg-red-500 text-white"
              } text-left`}
            >
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <tr
                  key={product.id}
                  className={`border-b ${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  } ${darkMode ? "even:bg-gray-800" : "even:bg-gray-50"}`}
                >
                  <td className="px-4 py-2 font-medium">{product.name}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`text-sm font-medium px-3 py-1 rounded ${
                        product.status === "Active"
                          ? darkMode
                            ? "bg-green-900 text-green-300"
                            : "bg-green-100 text-green-800"
                          : darkMode
                          ? "bg-red-900 text-red-300"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">{product.price}</td>
                  <td className="px-4 py-2 flex gap-2">
                    <button
                      className={`${
                        darkMode
                          ? "text-blue-300 hover:text-blue-400"
                          : "text-blue-500 hover:text-blue-700"
                      }`}
                    >
                      <FaPen />
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className={`${
                        darkMode
                          ? "text-red-300 hover:text-red-400"
                          : "text-red-500 hover:text-red-700"
                      }`}
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
