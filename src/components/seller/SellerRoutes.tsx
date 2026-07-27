import React from "react";
import { Routes, Route } from "react-router-dom";

import SellerSidebar from "./SellerSidebar";

import SellerDashboard from "./SellerDashboard";
import Products from "./Products";
import CreateProduct from "./CreateProduct";
import Orders from "./Orders";
import Customers from "./Customers";
import Analytics from "./Analytics";
import Reviews from "./Reviews";
import Earnings from "./Earnings";
import Settings from "./Settings";


const SellerRoutes: React.FC = () => {

  return (

    <div className="
      min-h-screen
      flex
      bg-gray-100
      dark:bg-gray-950
    ">


      {/* SELLER SIDEBAR */}

      <SellerSidebar />



      {/* SELLER CONTENT */}

      <main
        className="
          flex-1
          p-6
          md:p-10
          overflow-x-hidden
        "
      >

        <Routes>


          {/* DASHBOARD */}

          <Route
            path="/"
            element={<SellerDashboard />}
          />



          {/* PRODUCTS */}

          <Route
            path="/products"
            element={<Products />}
          />


          <Route
            path="/products/create"
            element={<CreateProduct />}
          />



          {/* SALES */}

          <Route
            path="/orders"
            element={<Orders />}
          />


          <Route
            path="/customers"
            element={<Customers />}
          />



          {/* GROWTH */}

          <Route
            path="/analytics"
            element={<Analytics />}
          />


          <Route
            path="/reviews"
            element={<Reviews />}
          />



          {/* FINANCE */}

          <Route
            path="/earnings"
            element={<Earnings />}
          />



          {/* SETTINGS */}

          <Route
            path="/settings"
            element={<Settings />}
          />



        </Routes>


      </main>


    </div>

  );

};


export default SellerRoutes;