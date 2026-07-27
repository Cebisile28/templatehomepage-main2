import React from "react";
import { Link as RouterLink } from "react-router-dom";

import SellerHeader from "../seller/SellerHeader";
import SellerStats from "../seller/SellerStats";


const SellerDashboard: React.FC = () => {

  return (

    <div className="space-y-8">


      {/* HEADER */}

      <SellerHeader />


      {/* STATISTICS */}

      <SellerStats />



      {/* QUICK ACTIONS */}

      <section
        className="
          bg-white
          dark:bg-gray-900
          rounded-2xl
          shadow-lg
          border
          border-gray-200
          dark:border-gray-800
          p-6
        "
      >

        <h2
          className="
            text-2xl
            font-bold
            text-gray-900
            dark:text-white
            mb-5
          "
        >
          Quick Actions
        </h2>



        <div
          className="
            grid
            md:grid-cols-3
            gap-4
          "
        >


          <RouterLink
            to="/seller/products/create"
            className="
              bg-amber-400
              hover:bg-amber-500
              text-black
              font-semibold
              rounded-xl
              p-4
              transition
              text-center
            "
          >
            + Create Product
          </RouterLink>



          <RouterLink
            to="/seller/products"
            className="
              bg-gray-100
              dark:bg-gray-800
              rounded-xl
              p-4
              font-semibold
              hover:bg-gray-200
              dark:hover:bg-gray-700
              transition
              text-center
            "
          >
            Manage Products
          </RouterLink>



          <RouterLink
            to="/seller/orders"
            className="
              bg-gray-100
              dark:bg-gray-800
              rounded-xl
              p-4
              font-semibold
              hover:bg-gray-200
              dark:hover:bg-gray-700
              transition
              text-center
            "
          >
            View Orders
          </RouterLink>


        </div>


      </section>





      {/* REVENUE AREA */}

      <section
        className="
          bg-white
          dark:bg-gray-900
          rounded-2xl
          shadow-lg
          border
          border-gray-200
          dark:border-gray-800
          p-6
        "
      >

        <h2
          className="
            text-2xl
            font-bold
            mb-5
          "
        >
          Revenue Overview
        </h2>


        <div
          className="
            h-64
            rounded-xl
            bg-gray-100
            dark:bg-gray-800
            flex
            items-center
            justify-center
            text-gray-500
          "
        >

          Revenue chart will appear here

        </div>


      </section>





      {/* RECENT PRODUCTS */}

      <section
        className="
          bg-white
          dark:bg-gray-900
          rounded-2xl
          shadow-lg
          border
          border-gray-200
          dark:border-gray-800
          p-6
        "
      >

        <h2
          className="
            text-2xl
            font-bold
            mb-5
          "
        >
          Recent Products
        </h2>


        <div
          className="
            text-gray-500
            dark:text-gray-400
          "
        >

          Your latest products will appear here.

        </div>


      </section>





      {/* RECENT ORDERS */}

      <section
        className="
          bg-white
          dark:bg-gray-900
          rounded-2xl
          shadow-lg
          border
          border-gray-200
          dark:border-gray-800
          p-6
        "
      >

        <h2
          className="
            text-2xl
            font-bold
            mb-5
          "
        >
          Recent Orders
        </h2>


        <div
          className="
            text-gray-500
            dark:text-gray-400
          "
        >

          Your customer orders will appear here.

        </div>


      </section>





      {/* NOTIFICATIONS */}

      <section
        className="
          bg-white
          dark:bg-gray-900
          rounded-2xl
          shadow-lg
          border
          border-gray-200
          dark:border-gray-800
          p-6
        "
      >

        <h2
          className="
            text-2xl
            font-bold
            mb-5
          "
        >
          Notifications
        </h2>


        <div
          className="
            text-gray-500
            dark:text-gray-400
          "
        >

          No new notifications.

        </div>


      </section>


    </div>

  );

};


export default SellerDashboard;
