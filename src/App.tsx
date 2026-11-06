
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

// Main website layout
const PublicLayout: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
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

          {/* Unknown website pages return to homepage */}
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

        {/* Registration is accessible without signing in */}
        <Route
          path="/register"
          element={<RegisterPage />}
        />

        {/* Login is accessible without signing in */}
        <Route
          path="/login"
          element={<LoginPage />}
        />

        {/* All seller pages require an authenticated seller */}
        <Route
          path="/seller/*"
          element={<SellerRoutes />}
        />

        {/* All other website pages require authentication */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <PublicLayout />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
};

export default App;



