import React from 'react';
import { FaBell } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 shadow-md z-50">
      <div className="text-lg font-bold text-gray-800 dark:text-gray-200">
        Shaboobz
      </div>
      <div className="flex items-center space-x-4">
        {/* Dark Mode Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-xl text-gray-800 dark:text-gray-200"
        >
          {darkMode ? <BsSun /> : <BsMoon />}
        </button>
        {/* Notification Bell */}
        <FaBell className="text-xl text-gray-800 dark:text-gray-200" />
        {/* Avatar */}
        <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600"></div>
      </div>
    </nav>
  );
};

export default Navbar;
