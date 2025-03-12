import React from 'react';
import { FaSearch, FaHeart, FaShoppingCart, FaSyncAlt } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Main Navbar */}
      <nav className="bg-white p-4 flex justify-between items-center shadow-md">
        <div className="flex-1">
          <h1 className="text-red-600 text-2xl font-bold">Shaboobz</h1>
        </div>
        <div className="flex-1 flex justify-center">
          <input type="text" placeholder="Search..." className="p-2 rounded w-2/3 border" />
        </div>
        <div className="flex-1 flex justify-end space-x-4">
          <FaSearch className="text-gray-600 text-xl" />
          <FaHeart className="text-gray-600 text-xl" />
          <FaSyncAlt className="text-gray-600 text-xl" />
          <FaShoppingCart className="text-gray-600 text-xl" />
        </div>
      </nav>

      {/* Mini Navbar */}
      <nav className="bg-gray-200 p-3 flex justify-center space-x-6 shadow-sm">
        <a href="#" className="text-gray-700 hover:text-red-600 font-medium">Home</a>
        <a href="#" className="text-gray-700 hover:text-red-600 font-medium">Products</a>
        <a href="#" className="text-gray-700 hover:text-red-600 font-medium">Shops</a>
        <a href="#" className="text-gray-700 hover:text-red-600 font-medium">Campaigns</a>
        <a href="#" className="text-gray-700 hover:text-red-600 font-medium">Contact</a>
        <a href="#" className="text-gray-700 hover:text-red-600 font-medium">About</a>
      </nav>

      <div className="flex">
        {/* Sidebar with Categories and More */}
        <aside className="w-1/4 p-4">
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="font-bold text-lg mb-4">Categories</h2>
            <div className="space-y-2">
              <div className="p-2 border rounded cursor-pointer">Busy Mart</div>
              <div className="p-2 border rounded cursor-pointer">Luxury Emporium</div>
              <div className="p-2 border rounded cursor-pointer">Elite Boutique</div>
              <div className="p-2 border rounded cursor-pointer">Tech & Trend</div>
              <div className="p-2 border rounded cursor-pointer">Zhop</div>
              <div className="p-2 border rounded cursor-pointer text-red-600 font-bold">View More Options</div>
            </div>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg mt-4">
            <h2 className="font-bold text-lg mb-2">More Options</h2>
            <ul className="space-y-2">
              <li className="p-2 border rounded cursor-pointer">New Arrivals</li>
              <li className="p-2 border rounded cursor-pointer">Best Sellers</li>
              <li className="p-2 border rounded cursor-pointer">Discount Offers</li>
              <li className="p-2 border rounded cursor-pointer">Trending Now</li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-3/4 p-4">
          {/* Hero Section */}
          <header className="bg-red-500 text-white p-10 text-center rounded-lg">
            <h2 className="text-3xl font-bold">SPECIAL SALE ONLY TODAY</h2>
            <p>Discount up to 50% off</p>
          </header>

          {/* Featured Collections */}
          <section className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-pink-300 p-6 rounded-lg flex flex-col items-center">
              <h3 className="text-xl font-bold text-center">Shop the latest from top brands</h3>
              <p className="text-center">Fully comfortable and smooth product</p>
              <button className="mt-2 bg-red-600 text-white px-4 py-2 rounded">View Collection</button>
            </div>
            <div className="bg-blue-300 p-6 rounded-lg flex flex-col items-center">
              <h3 className="text-xl font-bold text-center">Shop the latest from top brands</h3>
              <p className="text-center">Fully comfortable and smooth product</p>
              <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">View Collection</button>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white p-4 text-center text-gray-700 mt-4 shadow-md border rounded-sm">
        <p>Free Shipping | 100% Customer Feedback | Secure System | Online Support</p>
      </footer>
    </div>
  );
}

export default HomePage;
