import React from 'react';
import { FaSearch, FaHeart, FaShoppingCart, FaSyncAlt } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
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
        {["Home", "Products", "Shops", "Campaigns", "Contact", "About"].map((item) => (
          <a href="#" key={item} className="text-gray-700 hover:text-red-500 font-medium">
            {item}
          </a>
        ))}
      </nav>

      <div className="flex">
        {/* Sidebar with Categories and More */}
        <aside className="w-1/4 p-4">
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="space-y-2">
              <div className="p-2 border rounded cursor-pointer">Otties Foods</div>
              <div className="p-2 border rounded cursor-pointer">Everything Bally</div>
              <div className="p-2 border rounded cursor-pointer">47 Kicks</div>
              <div className="p-2 border rounded cursor-pointer">Leather Life</div>
              <div className="p-2 border rounded cursor-pointer">Neemarh Prints Shop</div>
              <div className="p-2 border rounded cursor-pointer">Jergio Jerseys</div>
              <div className="p-2 border rounded cursor-pointer text-red-600 font-bold">View All</div>
            </div>
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

          {/* Top Categories Section */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-2">Top Categories</h2>
            <p className="text-gray-500 mb-4">Lorem Ipsum is simply dummy text of the printing industry.</p>
            <div className="grid grid-cols-6 gap-4">
              {["Mobile", "Glasses", "Caps", "Shoes", "Shirts", "Pants"].map((category, index) => (
                <div key={index} className="bg-white shadow-md rounded-full p-4 flex flex-col items-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                  <p className="mt-2 text-center">{category}</p>
                </div>
              ))}
            </div>
            <button className="mt-4 bg-red-500 text-white px-6 py-2 rounded-full">View More</button>
          </section>

          {/* Best Selling Products */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-2">Best Selling Products</h2>
            <p className="text-gray-500 mb-4">Special products this month</p>
            <div className="grid grid-cols-4 gap-4">
              {["NBA Pants", "LV Sneakers", "Air Jordan", "Lakers T-Shirt"].map((product, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg p-4">
                  <div className="w-full h-40 bg-gray-300 rounded"></div>
                  <p className="mt-2 font-medium">{product}</p>
                  <p className="text-gray-500 text-sm">$58.00</p>
                </div>
              ))}
            </div>
            <button className="mt-4 bg-red-500 text-white px-6 py-2 rounded-full">View More</button>
          </section>

          {/* Additional Promo Section */}
          <section className="mt-8 bg-blue-100 p-8 rounded-lg flex">
            <div className="flex-1">
              <h2 className="text-2xl font-bold">UK Premier Store for Wrist Watches</h2>
              <p className="text-gray-500 mt-2">
                Our collection showcases an unparalleled selection of premium watches.
              </p>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full">View More</button>
            </div>
            <div className="w-1/3 bg-blue-300 rounded-lg"></div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default HomePage;
