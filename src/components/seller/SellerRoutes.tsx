
import React from "react";
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import ProtectedRoute from "../ProtectedRoute";

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
    <ProtectedRoute requiredRole="seller">
      <SellerLayout>
        <Routes>
          {/* Redirect /seller to the dashboard */}
          <Route
            index
            element={
              <Navigate
                to="/seller/dashboard"
                replace
              />
            }
          />

          {/* Seller Dashboard */}
          <Route
            path="dashboard"
            element={<SellerDashboard />}
          />

          {/* Seller Profile */}
          <Route
            path="profile"
            element={<SellerProfile />}
          />

          {/* Products */}
          <Route
            path="products"
            element={<Products />}
          />

          <Route
            path="products/create"
            element={<CreateProduct />}
          />

          {/* Orders and Customers */}
          <Route
            path="orders"
            element={<Orders />}
          />

          <Route
            path="customers"
            element={<Customers />}
          />

          {/* Business Growth */}
          <Route
            path="analytics"
            element={<Analytics />}
          />

          <Route
            path="reviews"
            element={<Reviews />}
          />

          {/* Finance */}
          <Route
            path="earnings"
            element={<Earnings />}
          />

          {/* Settings */}
          <Route
            path="settings"
            element={<Settings />}
          />

          {/* Unknown seller pages */}
          <Route
            path="*"
            element={
              <Navigate
                to="/seller/dashboard"
                replace
              />
            }
          />
        </Routes>
      </SellerLayout>
    </ProtectedRoute>
  );
};

export default SellerRoutes;




