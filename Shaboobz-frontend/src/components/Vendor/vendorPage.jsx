import React from "react";

const vendors = [
  {
    name: "Everything Bally",
    followers: 10,
    products: 40,
    logo: "🧣", // Replace with image URL if available
  },
  {
    name: "Otties Foods",
    followers: 25,
    products: 40,
    logo: "🍔", // Replace with image URL if available
  },
  {
    name: "47 Kicks",
    followers: 2,
    products: 100,
    logo: "👟", // Replace with image URL if available
  },
  {
    name: "Luxury Emporium",
    followers: 1,
    products: 9,
    logo: "💎",
  },
  {
    name: "Elite Boutique",
    followers: 2,
    products: 5,
    logo: "👟",
  },
  {
    name: "Tech & Trend",
    followers: 1,
    products: 3,
    logo: "🔧",
  },
  {
    name: "Zhop",
    followers: 0,
    products: 0,
    logo: "🛍️",
  },
];

const VendorsPage = () => {
  return (
    <div className="min-h-screen mt-40 bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center">All Vendors</h1>
      <p className="text-gray-600 text-center mb-6">
        Browse through our vendors and explore their products.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {vendors.map((vendor, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 text-center"
          >
            <div className="text-4xl mb-2">{vendor.logo}</div>
            <h2 className="text-xl font-semibold">{vendor.name}</h2>
            <p className="text-gray-500 mt-2">Followers: {vendor.followers}</p>
            <p className="text-gray-500">Total Products: {vendor.products}</p>
            <div className="mt-4 space-x-2">
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                View Store
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Follow
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorsPage;