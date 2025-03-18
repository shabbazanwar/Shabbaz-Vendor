import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaBox,
  FaHeart,
  FaSignOutAlt,
} from "react-icons/fa";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Load user from localStorage (Persist login state)
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.reload(); // Refresh page to update navbar
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md">
      {/* Top navigation (Login/Register/Vendor) */}
      <nav className="flex justify-end bg-gray-100 p-2">
        {user ? (
          <>
            <span className="px-4 py-2 text-gray-700">Welcome, {user.name}</span>
            {user.role === "vendor" ? (
              <Link to="/vendor/dashboard" className="px-4 py-2 rounded-md text-purple-600">
                Vendor Dashboard
              </Link>
            ) : (
              <Link to="/vendor/register" className="px-4 py-2 rounded-md text-purple-600">
                Become a Vendor
              </Link>
            )}
          </>
        ) : (
          <>
            <Link to="/login" className="px-4 py-2 rounded-md">Login</Link>
            <Link to="/sign-up" className="px-4 py-2 rounded-md">Register</Link>
            <Link to="/vendor/register" className="px-4 py-2 rounded-md">Become a Vendor</Link>
          </>
        )}
      </nav>

      {/* Main Navbar */}
      <nav className="px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-purple-600 text-2xl font-bold">
          Shaboobz
        </Link>

        {/* Search Bar (Visible on large screens) */}
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

        {/* Icons and User Menu */}
        <div className="flex items-center space-x-4">
          {/* Mobile Search Icon */}
          <Link to="/search" aria-label="Search">
            <FaSearch className="text-gray-600 text-xl cursor-pointer md:hidden" />
          </Link>

          {/* User Dropdown (If Logged In) */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-1 focus:outline-none"
              >
                <FaUser className="text-gray-600 text-xl cursor-pointer" />
                <span>{user.name}</span>
              </button>

              {/* Dropdown Menu */}
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
                  <button
                    onClick={handleLogout}
                    className="flex items-center px-4 py-2 text-red-600 hover:bg-gray-100 w-full"
                  >
                    <FaSignOutAlt className="mr-2" /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="px-4 py-2 rounded-md">Login</Link>
          )}

          {/* Cart */}
          <Link to="/cart" className="flex items-center space-x-1" aria-label="Cart">
            <FaShoppingCart className="text-gray-600 text-xl cursor-pointer" />
            <span>Cart</span>
          </Link>
        </div>
      </nav>

      {/* Mini Navbar (Categories) */}
      <nav className="bg-gray-100 py-2 shadow-md">
        <div className="flex justify-center space-x-6 text-gray-700 font-medium text-sm">
          <Link to="/" className="hover:text-purple-600">Home</Link>
          <Link to="/products" className="hover:text-purple-600">Products</Link>
          <Link to="/vendors" className="hover:text-purple-600">Vendors</Link>
          <Link to="/campaigns" className="hover:text-purple-600">Campaigns</Link>
          <Link to="/contact" className="hover:text-purple-600">Contact</Link>
          <Link to="/about" className="hover:text-purple-600">About</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
