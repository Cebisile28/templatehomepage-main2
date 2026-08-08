import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

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

        <Route
          path="/"
          element={<Navigate to="/seller/dashboard" replace />}
        />

        <Route
          path="/dashboard"
          element={<SellerDashboard />}
        />

        <Route
          path="/profile"
          element={<SellerProfile />}
        />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/products/create"
          element={<CreateProduct />}
        />

        <Route
          path="/orders"
          element={<Orders />}
        />

        <Route
          path="/customers"
          element={<Customers />}
        />

        <Route
          path="/analytics"
          element={<Analytics />}
        />

        <Route
          path="/reviews"
          element={<Reviews />}
        />

        <Route
          path="/earnings"
          element={<Earnings />}
        />

        <Route
          path="/settings"
          element={<Settings />}
        />

      </Routes>

    </SellerLayout>

  );

};

export default SellerRoutes;