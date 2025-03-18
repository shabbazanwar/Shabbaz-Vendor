import React, { useState } from "react";
import "./App.css";
import SideBar from "./components/Sidebar/sideBar.jsx"; // Importing from Sidebar component
import NavBar from "./components/Navbar/navBar.jsx"; // Importing from NavBar component
import Dashboard from './components/Dashboard/dashBoard.jsx';
import Category from './components/Categories/category.jsx';
import Subcategory from './components/Subcategories/subCategory.jsx';
import Brand from './components/Brands/brands.jsx';
import Product from './components/Products/products.jsx';
import Order from './components/Orders/orders.jsx';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
      <div className={darkMode ? "dark" : ""}>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <SideBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <Routes>
            <Route
              path="/"
              element={<Dashboard darkMode={darkMode} setDarkMode={setDarkMode} />}
            />
            <Route
              path="/categories"
              element={<Category darkMode={darkMode} setDarkMode={setDarkMode} />}
            />
            <Route
              path="/subcategories"
              element={<Subcategory darkMode={darkMode} setDarkMode={setDarkMode} />}
            />
            <Route
              path="/brands"
              element={<Brand darkMode={darkMode} setDarkMode={setDarkMode} />}
            />
            <Route
              path="/products"
              element={<Product darkMode={darkMode} setDarkMode={setDarkMode} />}
            />
            <Route
              path="/orders"
              element={<Order darkMode={darkMode} setDarkMode={setDarkMode} />}
            />
          </Routes>
        </div>
      </div>
  );
}

export default App;
