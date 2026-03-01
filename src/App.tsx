import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import Navbar from "./components/Navbar";

// Pages
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ServicePage from "./components/pages/ServicePage";
import ContactPage from "./components/pages/ContactPage";

// Optional: 404 Page
const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center px-4">
      <h1 className="text-6xl font-bold text-amber-400 mb-4">404</h1>
      <p className="text-lg mb-6">Oops! The page you are looking for does not exist.</p>
      <a
        href="/"
        className="bg-amber-400 hover:bg-amber-500 text-black font-semibold px-6 py-3 rounded transition"
      >
        Go Back Home
      </a>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      {/* Global Navbar */}
      <Navbar />

      {/* Add padding-top to prevent navbar overlap */}
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* 404 Catch All */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

