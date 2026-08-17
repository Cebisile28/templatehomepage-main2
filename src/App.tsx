import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import MarketplacePage from "./components/pages/MarketplacePage";
import PricingPage from "./components/pages/PricingPage";
import ProductPage from "./components/pages/ProductPage";
import ServicePage from "./components/pages/ServicePage";

import SellerRoutes from "./components/seller/SellerRoutes";

const PublicLayout: React.FC = () => {
  return (
    <div
      className="
        min-h-screen
        w-full
        overflow-x-hidden
        bg-white
        text-gray-900
        dark:bg-gray-900
        dark:text-white
      "
    >
      <Navbar />

      <main className="w-full min-w-0">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/about" element={<AboutPage />} />

          <Route path="/contact" element={<ContactPage />} />

          <Route path="/services" element={<ServicePage />} />

          <Route
            path="/marketplace"
            element={<MarketplacePage />}
          />

          <Route path="/pricing" element={<PricingPage />} />

          <Route
            path="/product/:id"
            element={<ProductPage />}
          />

          <Route path="/login" element={<LoginPage />} />

          <Route
            path="/register"
            element={<RegisterPage />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* SELLER PORTAL */}
        <Route
          path="/seller/*"
          element={<SellerRoutes />}
        />

        {/* PUBLIC WEBSITE */}
        <Route
          path="*"
          element={<PublicLayout />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

