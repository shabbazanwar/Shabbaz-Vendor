import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/navBar.jsx"; // Ensure Navbar is in components folder
import {
  LoginPage,
  SignupPage,
  HomePage,
  ProductPage,
  VendorPage,
  VendorDashboardPage,
  VendorRegisterPage,
  VendorPreviewPage,
  CartPage,
} from "./Routes.js";
import "./App.css";
import { CartProvider } from "./components/Cart/cartContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

const App = () => {
  const location = useLocation(); // Get current route
  const hideNavbar = ["/login", "/sign-up", "/vendor/register"].includes(
    location.pathname
  ); // Hide Navbar on login and signup pages

  console.log("Current Path:", location.pathname);
  console.log("Navbar Hidden:", hideNavbar);

  return (
    <>
      {!hideNavbar && <Navbar />}{" "}
      {/* ✅ Navbar is hidden on login/signup pages */}
      <div className="min-h-screen bg-white text-gray-900">
      <AuthProvider>
        <CartProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/user/dashboard" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/sign-up" element={<SignupPage />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/vendors" element={<VendorPage />} />
              <Route
                path="/vendor/dashboard"
                element={<VendorDashboardPage />}
              />
              <Route path="/vendor/register" element={<VendorRegisterPage />} />
              <Route path="/vendors/:id" element={<VendorPreviewPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
        </CartProvider>
        </AuthProvider>
      </div>
    </>
  );
};

export default App;
