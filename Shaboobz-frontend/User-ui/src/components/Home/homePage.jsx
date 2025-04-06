import React, { useState } from "react";
import Navbar from "../Navbar/navBar.jsx";
import { Link  }from "react-router-dom";

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

  const topCategories = [
    { name: "Mobile", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743075101/OIP_eqqacm.jpg" },
    { name: "Glasses", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743075180/OIP_lryfhd.jpg" },
    { name: "Caps", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743076143/OIP_rmoozx.jpg" },
    { name: "Shoes", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1742818293/cld-sample-5.jpg" },
    { name: "Shirts", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743075223/download_e8uv98.jpg" },
    { name: "Pants", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743076132/Fully-elasticated_nftz90.jpg" },
  ];

  const bestSellingProducts = [
    { name: "NBA Pants", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743076311/download_kvwbga.jpg", price: "$58.00" },
    { name: "NB Sneakers", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743076489/OIP_iwe1mo.jpg", price: "$120.00" },
    { name: "Air Jordan", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743076626/download_fyf9sl.jpg", price: "$150.00" },
    { name: "Lakers T-Shirt", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743076603/OIP_wa5g9e.jpg", price: "$45.00" },
  ];
  
  const sponsoredProducts = [
    { name: "Nike Air Max 270", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743081302/OIP_xs7m4l.jpg" },
    { name: "Adidas Ultraboost", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743081283/OIP_rcaa41.jpg" },
    { name: "Puma Running Shoes", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743081296/OIP_m7lc1m.jpg" },
    { name: "New Balance 550", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743081940/OIP_wcogdv.jpg" },
  ];
  

  const officialStores = [
    { name: "Otties Foods", 
      img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743320841/otties7_pue6b1.jpg",
    products: [
      { id: "101", name: "Product A", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743374322/otties4_hzec3k.jpg", price: "$20" },
    ] },
    { name: "Everything Bally", 
      img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743359193/bally17_gg5la2.jpg",
    products: [
       { id: "101", name: "Product A", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743374335/bally11_cvgmra.jpg", price: "$20" },
    ] },
    { name: "47 Shoe Hub", 
      img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743359031/47k1_icrcdn.jpg",
    products: [
      { id: "101", name: "Product A", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743374361/47k2_igmyjs.jpg", price: "$20" },
    ] },
    { name: "Neemarh's Print Shop", 
      img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743323395/neemarh11_lg7piu.png",
    products: [
      { id: "101", name: "Product A", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743374306/neemarh3_nd4shb.jpg", price: "$20" },
    ] },
    { name: "Jergio Collections", 
      img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743323402/jergio1_un4jy3.jpg",
    products: [
      { id: "101", name: "Product A", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743374437/jergio8_mnrhdr.jpg", price: "$20" },
    ] },
    { name: "Leather Life", 
      img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743352396/leatherlife1_kcmajz.jpg",
    products: [
      { id: "101", name: "Product A", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743374230/leatherlife8_whb3lq.jpg", price: "$20" },
    ] },

  ];

  const applianceDeals = [
    { name: "Washing Machine", price: "$399.00", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743076760/OIP_moee04.jpg" },
    { name: "Microwave Oven", price: "$149.00", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743076774/OIP_vye5if.jpg" },
    { name: "Refrigerator", price: "$599.00", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743076836/OIP_h6iegr.jpg" },
    { name: "Blender", price: "$79.00", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743076890/OIP_wepe9c.jpg" },
  ];

  const phoneDeals = [
    { name: "iPhone 14", price: "$799.00", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743078898/OIP_dkfhmh.jpg" },
    { name: "Samsung Galaxy S23", price: "$999.00", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743078901/download_ax9m0h.jpg" },
    { name: "Google Pixel 7", price: "$699.00", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743079147/OIP_bdje50.jpg" },
    { name: "OnePlus 11", price: "$729.00", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743079135/OIP_xdwdc6.jpg" },
  ];

  const topSearched = [
    { name: "MacBook Pro", price: "$1,299.00", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743079402/download_skmabq.jpg" },
    { name: "Sony WH-1000XM5", price: "$399.00", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743079424/OIP_inpgc1.jpg" },
    { name: "Apple Watch Ultra", price: "$799.00", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743079448/OIP_hpbf4y.jpg" },
    { name: "Samsung OLED TV", price: "$2,199.00", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743079602/OIP_wy81qi.jpg" },
  ];

  const trendyWomensPicks = [
    { name: "Floral Dress", price: "$89.00", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743079878/OIP_bztlod.jpg" },
    { name: "Chanel Handbag", price: "$499.00", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743079945/download_qyzf8m.jpg" },
    { name: "Diamond Earrings", price: "$1,299.00", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743079949/download_naw2ws.jpg" },
    { name: "Pink Heels", price: "$159.00", img: "" },
  ];

  const handpickedProducts = [
    { name: "Arsenal Retro", price: "$150.00", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743080343/OIP_ridwbq.jpg" },
    { name: "Liverpool Retro", price: "$50.00", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743080376/download_j3nw6j.jpg" },
    { name: "Argentina Retro", price: "$200.00", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743080477/download_d79fi2.jpg" },
    { name: "Barcelona Retro", price: "$250.00", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743080384/OIP_gyngzp.jpg" },
  ];
  
  const newArrivals = [
    { name: "Baggy Jeans", price: "$58.00", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743080783/OIP_ch49mg.jpg" },
    { name: "Nike Slides", price: "$40.00", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743081215/OIP_tmr1fn.jpg" },
    { name: "Nike SB Slides", price: "$80.00", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743080916/download_hsdlsj.jpg" },
    { name: "Addidas Slides", price: "$90.00", img: "https://res.cloudinary.com/duw8lbca7/image/upload/v1743080943/OIP_fjc17q.jpg" },
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
              <div className="bg-[#D9D2E9] p-4 rounded-lg shadow-lg">
                <p className="text-center font-bold">{hoveredCategory}</p>
              </div>
            </div>
          )}

          {/* Top Categories Section */}
          <section className="mt-8">
    <h2 className="text-2xl font-bold mb-2">Top Categories</h2>
    <p className="text-gray-600 mb-4">Explore our best-selling categories.</p>
    <div className="grid grid-cols-6 gap-4">
      {topCategories.map((category, index) => (
        <div key={index} className="bg-[#EAE6F2] shadow-md rounded-full p-4 flex flex-col items-center">
          <img
            src={category.img}
            alt={category.name}
            className="w-16 h-16 object-cover rounded-full"
          />
          <p className="mt-2 text-center">{category.name}</p>
        </div>
      ))}
    </div>
    <button className="mt-4 bg-[#6D4A94] text-white px-6 py-2 rounded-full">View More</button>
  </section>

          {/* Best Selling Products */}
          <section className="mt-8 bg-[#EAE6F2] p-6 rounded-lg">
    <h2 className="text-2xl font-bold mb-2">Best Selling Products</h2>
    <p className="text-gray-600 mb-4">Special products this month</p>
    <div className="grid grid-cols-4 gap-4">
      {bestSellingProducts.map((product, index) => (
        <div key={index} className="bg-[#D9D2E9] shadow-md rounded-lg p-4">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-40 object-cover rounded"
          />
          <p className="mt-2 font-medium">{product.name}</p>
          <p className="text-gray-500 text-sm">{product.price}</p>
        </div>
      ))}
    </div>
    <button className="mt-4 bg-[#6D4A94] text-white px-6 py-2 rounded-full">View More</button>
  </section>


                    {/* Sponsored Products */}
                    <section className="mt-8 bg-[#EAE6F2] p-6 rounded-lg">
    <h2 className="text-2xl font-bold mb-2">Sponsored Products</h2>
    <p className="text-gray-600 mb-4">Sponsored products of this month</p>
    <div className="grid grid-cols-4 gap-4 bg-[#D9D2E9] p-6 rounded-lg shadow-md">
      {sponsoredProducts.map((product, index) => (
        <div key={index} className="bg-gray-100 rounded-lg p-4">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-40 object-cover rounded"
          />
          <p className="mt-2 font-medium">{product.name}</p>
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
      <p className="text-gray-600 mb-4">Official stores at Shaboobz</p>
      <div className="grid grid-cols-3 gap-4 bg-[#D9D2E9] p-6 rounded-lg shadow-md">
        {officialStores.map((store) => (
          <Link
            key={store.id}
            to={`/vendors/${store.id}`}
            state={{ vendor: store }}  // Pass vendor data using state
            className="bg-gray-100 rounded-lg p-4 flex flex-col justify-center items-center h-40 w-full text-lg font-bold text-gray-700 hover:bg-gray-200 transition shadow-md border border-gray-300"
          >
            <img src={store.img} alt={store.name} className="w-20 h-20 object-cover rounded-full shadow-md" />
            <span className="text-center mt-2">{store.name}</span>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-[#6D4A94] text-white px-6 py-2 rounded-full">
          View More
        </button>
      </div>
    </section>


         {/* Appliance Deals */}
<section className="mt-8 bg-[#EAE6F2] p-6 rounded-lg">
    <h2 className="text-2xl font-bold mb-2">Appliance Deals</h2>
    <p className="text-gray-600 mb-4">Top Appliance deals</p>
    <div className="grid grid-cols-4 gap-4">
      {applianceDeals.map((product, index) => (
        <div key={index} className="bg-[#D9D2E9] shadow-md rounded-lg p-4 flex flex-col items-center">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-40 object-cover rounded"
          />
          <p className="mt-2 font-medium">{product.name}</p>
          <p className="text-gray-500 text-sm">{product.price}</p>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-4">
      <button className="bg-[#6D4A94] text-white px-6 py-2 rounded-full">View More</button>
    </div>
  </section>

          {/* Best Phone Deals */}
          <section className="mt-8 bg-[#EAE6F2] p-6 rounded-lg">
    <h2 className="text-2xl font-bold mb-2">Best Phone Deals</h2>
    <p className="text-gray-600 mb-4">Special products this month</p>
    <div className="grid grid-cols-4 gap-4">
      {phoneDeals.map((product, index) => (
        <div key={index} className="bg-[#D9D2E9] shadow-md rounded-lg p-4 flex flex-col items-center">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-40 object-cover rounded"
          />
          <p className="mt-2 font-medium">{product.name}</p>
          <p className="text-gray-500 text-sm">{product.price}</p>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-4">
      <button className="bg-[#6D4A94] text-white px-6 py-2 rounded-full">View More</button>
    </div>
  </section>

          {/* Top Searched */}
          <section className="mt-8 bg-[#EAE6F2] p-6 rounded-lg">
    <h2 className="text-2xl font-bold mb-2">Top Searched</h2>
    <p className="text-gray-600 mb-4">Most popular picks this month</p>
    <div className="grid grid-cols-4 gap-4">
      {topSearched.map((product, index) => (
        <div key={index} className="bg-[#D9D2E9] shadow-md rounded-lg p-4 flex flex-col items-center">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-40 object-cover rounded"
          />
          <p className="mt-2 font-medium">{product.name}</p>
          <p className="text-gray-500 text-sm">{product.price}</p>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-4">
      <button className="bg-[#6D4A94] text-white px-6 py-2 rounded-full">View More</button>
    </div>
  </section>

{/* Trendy Women's Picks */}
<section className="mt-8 bg-[#EAE6F2] p-6 rounded-lg">
    <h2 className="text-2xl font-bold mb-2">Trendy Women's Picks</h2>
    <p className="text-gray-600 mb-4">Stylish must-haves for you</p>
    <div className="grid grid-cols-4 gap-4">
      {trendyWomensPicks.map((product, index) => (
        <div key={index} className="bg-[#D9D2E9] shadow-md rounded-lg p-4 flex flex-col items-center">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-40 object-cover rounded"
          />
          <p className="mt-2 font-medium">{product.name}</p>
          <p className="text-gray-500 text-sm">{product.price}</p>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-4">
      <button className="bg-[#6D4A94] text-white px-6 py-2 rounded-full">Shop Now</button>
    </div>
  </section>

          {/* Best Selling Products */}
          <section className="mt-8 bg-[#EAE6F2] p-6 rounded-lg">
    <h2 className="text-2xl font-bold mb-2">Handpicked for You</h2>
    <p className="text-gray-600 mb-4">Products Handpicked for You</p>
    <div className="grid grid-cols-4 gap-4">
      {handpickedProducts.map((product, index) => (
        <div key={index} className="bg-[#D9D2E9] shadow-md rounded-lg p-4 flex flex-col items-center">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-40 object-cover rounded"
          />
          <p className="mt-2 font-medium">{product.name}</p>
          <p className="text-gray-500 text-sm">{product.price}</p>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-4">
      <button className="bg-[#6D4A94] text-white px-6 py-2 rounded-full">View More</button>
    </div>
  </section>

          {/* Best Selling Products */}
            <section className="mt-8 bg-[#EAE6F2] p-6 rounded-lg">
    <h2 className="text-2xl font-bold mb-2">New Arrivals</h2>
    <p className="text-gray-600 mb-4">New Products</p>
    <div className="grid grid-cols-4 gap-4">
      {newArrivals.map((product, index) => (
        <div key={index} className="bg-[#D9D2E9] shadow-md rounded-lg p-4 flex flex-col items-center">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-40 object-cover rounded"
          />
          <p className="mt-2 font-medium">{product.name}</p>
          <p className="text-gray-500 text-sm">{product.price}</p>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-4">
      <button className="bg-[#6D4A94] text-white px-6 py-2 rounded-full">View More</button>
    </div>
  </section>
        </main>
      </div>
    </div>
  );
};

export default HomePage;