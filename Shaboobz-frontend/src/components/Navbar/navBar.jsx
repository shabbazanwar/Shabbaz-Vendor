import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaBox,
  FaHeart,
} from "react-icons/fa";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Vendors", path: "/vendors" },
    { name: "Campaigns", path: "/campaigns" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="flex justify-end bg-gray-100 p-2">
        <Link to="/login" className="px-4 py-2 rounded-md">Login</Link>
        <Link to="/sign-up" className="px-4 py-2 rounded-md">Register</Link>
        <Link to="/sign-up" className="px-4 py-2 rounded-md">Become a vendor</Link>
      </nav>

      <nav className="bg-white px-6 py-4 shadow-md flex justify-between items-center">
        <Link to="/" className="text-purple-600 text-2xl font-bold">
          Shaboobz
        </Link>
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center border rounded-md overflow-hidden w-2/3">
            <input
              type="text"
              placeholder="Search products..."
              className="p-2 w-full focus:outline-none"
            />
            <button className="bg-purple-600 text-white px-4 py-2">
              <FaSearch />
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/search" aria-label="Search">
            <FaSearch className="text-gray-600 text-xl cursor-pointer md:hidden" />
          </Link>
          <div className="relative">
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center space-x-1 focus:outline-none">
              <FaUser className="text-gray-600 text-xl cursor-pointer" />
              <span>Account</span>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                <Link to="/account" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                  <FaUser className="mr-2" /> My Account
                </Link>
                <Link to="/orders" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                  <FaBox className="mr-2" /> Orders
                </Link>
                <Link to="/wishlist" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                  <FaHeart className="mr-2" /> Wishlist
                </Link>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <Link to="/cart" className="flex items-center space-x-1" aria-label="Cart">
              <FaShoppingCart className="text-gray-600 text-xl cursor-pointer" />
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </nav>

      <nav className="bg-gray-100 px-6 py-3 flex justify-center space-x-6 shadow-sm">
        {navLinks.map((link) => (
            <Link
            to={link.path}
            key={link.name}
            className="text-gray-700 hover:text-purple-600 font-medium transition duration-200"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;