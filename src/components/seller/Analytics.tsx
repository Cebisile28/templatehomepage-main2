import React from "react";

const Analytics: React.FC = () => {
  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Seller Analytics
        </h1>

        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Track your store performance, sales, and customer growth.
        </p>
      </div>




      {/* STATS */}
      <div className="grid md:grid-cols-4 gap-6">


        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-6 border dark:border-gray-800">

          <p className="text-gray-500 text-sm">
            Total Revenue
          </p>

          <h2 className="text-3xl font-bold text-amber-400 mt-2">
            R0.00
          </h2>

        </div>




        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-6 border dark:border-gray-800">

          <p className="text-gray-500 text-sm">
            Products Sold
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
            0
          </h2>

        </div>




        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-6 border dark:border-gray-800">

          <p className="text-gray-500 text-sm">
            Customers
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
            0
          </h2>

        </div>




        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-6 border dark:border-gray-800">

          <p className="text-gray-500 text-sm">
            Orders
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
            0
          </h2>

        </div>


      </div>





      {/* SALES CHART PLACEHOLDER */}

      <section className="bg-white dark:bg-gray-900 rounded-2xl shadow border dark:border-gray-800 p-6">

        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Sales Overview
        </h2>


        <div className="
          h-72
          rounded-xl
          bg-gray-100
          dark:bg-gray-800
          flex
          items-center
          justify-center
          text-gray-500
        ">

          Sales chart will appear here

        </div>

      </section>






      {/* TOP PRODUCTS */}

      <section className="bg-white dark:bg-gray-900 rounded-2xl shadow border dark:border-gray-800 p-6">

        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-5">
          Top Performing Products
        </h2>


        <div className="text-gray-500 dark:text-gray-400">

          Your best selling products will appear here.

        </div>

      </section>






      {/* RECENT ACTIVITY */}

      <section className="bg-white dark:bg-gray-900 rounded-2xl shadow border dark:border-gray-800 p-6">

        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-5">
          Recent Activity
        </h2>


        <div className="text-gray-500 dark:text-gray-400">

          No recent sales activity yet.

        </div>

      </section>


    </div>
  );
};


export default Analytics;