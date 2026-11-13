
import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
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
import ProtectedRoute from "./components/ProtectedRoute";

// Public website layout
const PublicLayout: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white text-gray-900">
      <Navbar />

      <main className="w-full min-w-0">
        <Routes>
          {/* Public homepage */}
          <Route path="/" element={<HomePage />} />

          {/* Public information pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/pricing" element={<PricingPage />} />

          {/* Public marketplace browsing */}
          <Route
            path="/marketplace"
            element={<MarketplacePage />}
          />

          {/* Public product previews */}
          <Route
            path="/product/:id"
            element={<ProductPage />}
          />

          {/* Unknown public pages return to homepage */}
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

// Main application
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public registration */}
        <Route
          path="/register"
          element={<RegisterPage />}
        />

        {/* Public login */}
        <Route
          path="/login"
          element={<LoginPage />}
        />

        {/* Protected seller pages */}
        <Route
          path="/seller/*"
          element={
            <ProtectedRoute requiredRole="seller">
              <SellerRoutes />
            </ProtectedRoute>
          }
        />

        {/* Public website pages - no registration required */}
        <Route
          path="/*"
          element={<PublicLayout />}
        />

      </Routes>
    </BrowserRouter>
  );
};

export default App;





