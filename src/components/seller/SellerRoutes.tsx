// src/components/seller/SellerRoutes.tsx

import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import SellerLayout from "./SellerLayout";
import SellerDashboard from "./SellerDashboard";
import Products from "./Products";
import CreateProduct from "./CreateProduct";
import Orders from "./Orders";
import Customers from "./Customers";
import Analytics from "./Analytics";
import Reviews from "./Reviews";
import Earnings from "./Earnings";
import Settings from "./Settings";
import SellerProfile from "./SellerProfile";

const SellerRoutes: React.FC = () => {
  return (
    <SellerLayout>
      <Routes>
        {/* Seller home */}
        <Route
          path="/"
          element={<Navigate to="/seller/dashboard" replace />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={<SellerDashboard />}
        />

        {/* Profile */}
        <Route
          path="/profile"
          element={<SellerProfile />}
        />

        {/* Products */}
        <Route
          path="/products"
          element={<Products />}
        />

        {/* Create Product */}
        <Route
          path="/products/create"
          element={<CreateProduct />}
        />

        {/* Orders */}
        <Route
          path="/orders"
          element={<Orders />}
        />

        {/* Customers */}
        <Route
          path="/customers"
          element={<Customers />}
        />

        {/* Analytics */}
        <Route
          path="/analytics"
          element={<Analytics />}
        />

        {/* Reviews */}
        <Route
          path="/reviews"
          element={<Reviews />}
        />

        {/* Earnings */}
        <Route
          path="/earnings"
          element={<Earnings />}
        />

        {/* Settings */}
        <Route
          path="/settings"
          element={<Settings />}
        />

        {/* Unknown seller page */}
        <Route
          path="*"
          element={<Navigate to="/seller/dashboard" replace />}
        />
      </Routes>
    </SellerLayout>
  );
};

export default SellerRoutes;

