import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBoxOpen,
  FaTags,
  FaShoppingCart,
  FaUser,
  FaStore,
  FaCoins,
} from "react-icons/fa";
import {
  MdCategory,
  MdCampaign,
  MdSettings,
  MdOutlineAttachMoney,
  MdEmail,
} from "react-icons/md";

const Sidebar = ({ darkMode }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const navItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, path: "/" },
    { name: "Categories", icon: <MdCategory />, path: "/categories" },
    { name: "Sub Categories", icon: <MdCategory />, path: "/subcategories" },
    { name: "Brands", icon: <FaTags />, path: "/brands" },
    { name: "Products", icon: <FaBoxOpen />, path: "/products" },
    { name: "Orders", icon: <FaShoppingCart />, path: "/orders" },
    { name: "Shops", icon: <FaStore />, path: "/shops" },
    { name: "Users", icon: <FaUser />, path: "/users" },
    { name: "Payouts", icon: <MdOutlineAttachMoney />, path: "/payouts" },
    { name: "Coupon Codes", icon: <FaTags />, path: "/couponcodes" },
    { name: "Campaigns", icon: <MdCampaign />, path: "/campaigns" },
    { name: "Currencies", icon: <FaCoins />, path: "/currencies" },
    { name: "Newsletter", icon: <MdEmail />, path: "/newsletter" },
    { name: "Settings", icon: <MdSettings />, path: "/settings" },
  ];

  return (
    <div
      className={`flex h-screen fixed ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div
        className={`${
          darkMode ? "bg-gray-800" : "bg-gray-200"
        } ${isCollapsed ? "w-24" : "w-60"} duration-300 flex flex-col`}
      >
        {/* Sidebar Header */}
        <button onClick={toggleSidebar} className="p-4">
          {isCollapsed ? "Expand" : "Collapse"}
        </button>
        {/* Navigation Items */}
        <ul className="mt-2 space-y-2 overflow-y-auto pb-20 pl-3">
          {navItems.map((item, index) => (
            <li key={index} className="p-2 flex items-center gap-4 hover:bg-gray-700 rounded-md">
              <Link to={item.path} className="flex items-center px-4 py-2 text-lg font-medium">
                <span className="text-2xl">{item.icon}</span>
                <span
                  className={`transition-all duration-600 ${
                    isCollapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
