import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaBox,
  FaHeart,
  FaSignOutAlt,
  FaBell,
} from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext.jsx";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const { user, logout } = useContext(AuthContext);

  // Load cart count on mount
  useEffect(() => {
    try {
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cartItems.length);
    } catch (error) {
      console.error("Error parsing cart data:", error);
      setCartCount(0);
    }
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md">
      <nav className="flex justify-end bg-gray-100 p-2">
        {user ? (
          <>
            <span className="px-4 py-2 text-gray-700">Welcome, {user.name}</span>
            {user.role === "vendor" ? (
              <Link to="/vendor/dashboard" className="px-4 py-2 text-purple-600">
                Vendor Dashboard
              </Link>
            ) : (
              <Link to="/vendor/register" className="px-4 py-2 text-purple-600">
                Become a Vendor
              </Link>
            )}
          </>
        ) : (
          <>
            <Link to="/login" className="px-4 py-2">Login</Link>
            <Link to="/sign-up" className="px-4 py-2">Register</Link>
            <Link to="/vendor/register" className="px-4 py-2">Become a Vendor</Link>
          </>
        )}
      </nav>

      <nav className="px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-purple-600 text-2xl font-bold">Shaboobz</Link>

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
          <Link to="/search">
            <FaSearch className="text-gray-600 text-xl cursor-pointer md:hidden" />
          </Link>

          <div className="relative">
            <button
              onClick={() => setNotificationOpen(!notificationOpen)}
              className="relative focus:outline-none"
            >
              <FaBell className="text-gray-600 text-xl cursor-pointer" />
            </button>
            {notificationOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2">
                <p className="px-4 py-2 text-gray-700 font-semibold">Notifications</p>
                <div className="border-t">
                  <Link to="/orders" className="block px-4 py-2">New order received</Link>
                  <Link to="/messages" className="block px-4 py-2">New message from a customer</Link>
                </div>
              </div>
            )}
          </div>

          {user ? (
            <div className="relative">
              <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center space-x-1">
                <FaUser className="text-gray-600 text-xl" /><span>{user.name}</span>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                  <Link to="/account" className="flex items-center px-4 py-2">
                    <FaUser className="mr-2" /> My Account
                  </Link>
                  <Link to="/orders" className="flex items-center px-4 py-2">
                    <FaBox className="mr-2" /> Orders
                  </Link>
                  <Link to="/wishlist" className="flex items-center px-4 py-2">
                    <FaHeart className="mr-2" /> Wishlist
                  </Link>
                  <button
                    onClick={logout}
                    className="flex items-center px-4 py-2 text-red-600 w-full"
                  >
                    <FaSignOutAlt className="mr-2" /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="px-4 py-2">Login</Link>
          )}

          <Link to="/cart" className="relative flex items-center space-x-1">
            <FaShoppingCart className="text-gray-600 text-xl" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">
                {cartCount}
              </span>
            )}
            <span>Cart</span>
          </Link>
        </div>
      </nav>

      <nav className="bg-gray-100 py-2 shadow-md">
        <div className="flex justify-center space-x-6 text-gray-700 font-medium text-sm">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/vendors">Vendors</Link>
          <Link to="/campaigns">Campaigns</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
