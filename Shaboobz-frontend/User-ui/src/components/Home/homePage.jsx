import React, { useState } from "react";
import Navbar from "../Navbar/navBar.jsx";

const HomePage = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    "Phones & Tablets",
    "Health & Beauty",
    "Home & Office",
    "Electronics",
    "Fashion",
    "Supermarket",
    "Computing",
    "Baby Products",
    "Gaming",
  ];

  return (
    <div className="bg-[#F7F7F7] min-h-screen text-[#333]">
      <Navbar />
      <div className="pt-48 flex relative">
        {/* Sidebar with Categories */}
        <aside className="w-1/6 p-4">
          <div className="bg-white p-4 shadow-md rounded-lg">
            <div className="space-y-2 text-sm">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="cursor-pointer hover:text-purple-400 transition"
                  onMouseEnter={() => setHoveredCategory(category)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  {category}
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-3/4 p-4 relative">
          {/* Hero Section */}
          <header className="bg-[#8B5FBF] text-white p-10 text-center rounded-lg">
            <h2 className="text-3xl font-bold">SPECIAL SALE ONLY TODAY</h2>
            <p>Discount up to 50% off</p>
          </header>

          {/* Hover Card (Image Appears Over Carousel) */}
          {hoveredCategory && (
            <div className="absolute top-0 left-0 w-1/2 h-1/6 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <p className="text-center font-bold">{hoveredCategory}</p>
              </div>
            </div>
          )}

          {/* Top Categories Section */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-2">Top Categories</h2>
            <p className="text-gray-600 mb-4">Explore our best-selling categories.</p>
            <div className="grid grid-cols-6 gap-4">
              {["Mobile", "Glasses", "Caps", "Shoes", "Shirts", "Pants"].map((category, index) => (
                <div key={index} className="bg-[#EAE6F2] shadow-md rounded-full p-4 flex flex-col items-center">
                  <div className="w-16 h-16 bg-[#C2B0D5] rounded-full"></div>
                  <p className="mt-2 text-center">{category}</p>
                </div>
              ))}
            </div>
            <button className="mt-4 bg-[#6D4A94] text-white px-6 py-2 rounded-full">View More</button>
          </section>

          {/* Best Selling Products */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-2">Best Selling Products</h2>
            <p className="text-gray-600 mb-4">Special products this month</p>
            <div className="grid grid-cols-4 gap-4">
              {["NBA Pants", "LV Sneakers", "Air Jordan", "Lakers T-Shirt"].map((product, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg p-4">
                  <div className="w-full h-40 bg-[#D9D2E9] rounded"></div>
                  <p className="mt-2 font-medium">{product}</p>
                  <p className="text-gray-500 text-sm">$58.00</p>
                </div>
              ))}
            </div>
            <button className="mt-4 bg-[#6D4A94] text-white px-6 py-2 rounded-full">View More</button>
          </section>

                    {/* Sponsored Products */}
                    <section className="mt-8 bg-[#E0F2FE] p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">Sponsored Products</h2>
            <p className="text-gray-600 mb-4">Sponsored products of this month</p>
            <div className="grid grid-cols-4 gap-4 bg-white p-6 rounded-lg shadow-md">
              {["NBA Pants", "LV Sneakers", "Air Jordan", "Lakers T-Shirt"].map((product, index) => (
                <div key={index} className="bg-gray-100 rounded-lg p-4">
                  <div className="w-full h-40 bg-[#D9D2E9] rounded"></div>
                  <p className="mt-2 font-medium">{product}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <button className="bg-[#4e4997] text-white px-6 py-2 rounded-full">View More</button>
            </div>
          </section>

          {/* Official Stores */}
          <section className="mt-8 bg-[#F4F1FA] p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-2">Official Stores</h2>
            <p className="text-gray-600 mb-4">Special products this month</p>
            <div className="grid grid-cols-3 gap-4 bg-white p-6 rounded-lg shadow-md">
              {["Otties Foods", "Everything Bally", "47 Kicks"].map((store, index) => (
                <a key={index} href="#" className="bg-gray-100 rounded-lg p-4 flex justify-center items-center h-32 w-40 text-lg font-bold text-gray-700 hover:bg-gray-200 transition shadow-md border border-gray-300">
                  <span className="text-center">{store}</span>
                </a>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <button className="bg-[#6D4A94] text-white px-6 py-2 rounded-full">View More</button>
            </div>
          </section>


          {/* Best Selling Products */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-2">Appliances Deals</h2>
            <p className="text-gray-600 mb-4">Special products this month</p>
            <div className="grid grid-cols-4 gap-4">
              {["NBA Pants", "LV Sneakers", "Air Jordan", "Lakers T-Shirt"].map((product, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg p-4">
                  <div className="w-full h-40 bg-[#D9D2E9] rounded"></div>
                  <p className="mt-2 font-medium">{product}</p>
                  <p className="text-gray-500 text-sm">$58.00</p>
                </div>
              ))}
            </div>
            <button className="mt-4 bg-[#6D4A94] text-white px-6 py-2 rounded-full">View More</button>
          </section>
          {/* Best Selling Products */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-2">Best Phone Deals</h2>
            <p className="text-gray-600 mb-4">Special products this month</p>
            <div className="grid grid-cols-4 gap-4">
              {["NBA Pants", "LV Sneakers", "Air Jordan", "Lakers T-Shirt"].map((product, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg p-4">
                  <div className="w-full h-40 bg-[#D9D2E9] rounded"></div>
                  <p className="mt-2 font-medium">{product}</p>
                  <p className="text-gray-500 text-sm">$58.00</p>
                </div>
              ))}
            </div>
            <button className="mt-4 bg-[#6D4A94] text-white px-6 py-2 rounded-full">View More</button>
          </section>
          {/* Best Selling Products */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-2">Best Selling Products</h2>
            <p className="text-gray-600 mb-4">Special products this month</p>
            <div className="grid grid-cols-4 gap-4">
              {["NBA Pants", "LV Sneakers", "Air Jordan", "Lakers T-Shirt"].map((product, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg p-4">
                  <div className="w-full h-40 bg-[#D9D2E9] rounded"></div>
                  <p className="mt-2 font-medium">{product}</p>
                  <p className="text-gray-500 text-sm">$58.00</p>
                </div>
              ))}
            </div>
            <button className="mt-4 bg-[#6D4A94] text-white px-6 py-2 rounded-full">View More</button>
          </section>
          {/* Best Selling Products */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-2">Best Selling Products</h2>
            <p className="text-gray-600 mb-4">Special products this month</p>
            <div className="grid grid-cols-4 gap-4">
              {["NBA Pants", "LV Sneakers", "Air Jordan", "Lakers T-Shirt"].map((product, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg p-4">
                  <div className="w-full h-40 bg-[#D9D2E9] rounded"></div>
                  <p className="mt-2 font-medium">{product}</p>
                  <p className="text-gray-500 text-sm">$58.00</p>
                </div>
              ))}
            </div>
            <button className="mt-4 bg-[#6D4A94] text-white px-6 py-2 rounded-full">View More</button>
          </section>
          {/* Best Selling Products */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-2">Best Selling Products</h2>
            <p className="text-gray-600 mb-4">Special products this month</p>
            <div className="grid grid-cols-4 gap-4">
              {["NBA Pants", "LV Sneakers", "Air Jordan", "Lakers T-Shirt"].map((product, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg p-4">
                  <div className="w-full h-40 bg-[#D9D2E9] rounded"></div>
                  <p className="mt-2 font-medium">{product}</p>
                  <p className="text-gray-500 text-sm">$58.00</p>
                </div>
              ))}
            </div>
            <button className="mt-4 bg-[#6D4A94] text-white px-6 py-2 rounded-full">View More</button>
          </section>
          {/* Best Selling Products */}
          <section className="mt-8">
            <h2 className="text-2xl font-bold mb-2">Best Selling Products</h2>
            <p className="text-gray-600 mb-4">Special products this month</p>
            <div className="grid grid-cols-4 gap-4">
              {["NBA Pants", "LV Sneakers", "Air Jordan", "Lakers T-Shirt"].map((product, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg p-4">
                  <div className="w-full h-40 bg-[#D9D2E9] rounded"></div>
                  <p className="mt-2 font-medium">{product}</p>
                  <p className="text-gray-500 text-sm">$58.00</p>
                </div>
              ))}
            </div>
            <button className="mt-4 bg-[#6D4A94] text-white px-6 py-2 rounded-full">View More</button>
          </section>
        </main>
      </div>
    </div>
  );
};

export default HomePage;