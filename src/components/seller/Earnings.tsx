import React from "react";

const Earnings: React.FC = () => {
  return (
    <div className="space-y-8">

      {/* HEADER */}

      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Earnings
        </h1>

        <p className="mt-3 text-gray-500 dark:text-gray-400">
          Track your seller revenue, payments, and transaction history.
        </p>
      </div>




      {/* EARNINGS SUMMARY */}

      <div className="grid md:grid-cols-4 gap-6">


        <div className="
          bg-white
          dark:bg-gray-900
          rounded-xl
          shadow
          border
          border-gray-200
          dark:border-gray-800
          p-6
        ">

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Total Earnings
          </p>

          <h2 className="
            mt-3
            text-3xl
            font-bold
            text-amber-400
          ">
            R0.00
          </h2>

        </div>




        <div className="
          bg-white
          dark:bg-gray-900
          rounded-xl
          shadow
          border
          border-gray-200
          dark:border-gray-800
          p-6
        ">

          <p className="text-sm text-gray-500 dark:text-gray-400">
            This Month
          </p>

          <h2 className="
            mt-3
            text-3xl
            font-bold
            text-gray-900
            dark:text-white
          ">
            R0.00
          </h2>

        </div>





        <div className="
          bg-white
          dark:bg-gray-900
          rounded-xl
          shadow
          border
          border-gray-200
          dark:border-gray-800
          p-6
        ">

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Pending Payments
          </p>

          <h2 className="
            mt-3
            text-3xl
            font-bold
            text-gray-900
            dark:text-white
          ">
            R0.00
          </h2>

        </div>





        <div className="
          bg-white
          dark:bg-gray-900
          rounded-xl
          shadow
          border
          border-gray-200
          dark:border-gray-800
          p-6
        ">

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Available Balance
          </p>

          <h2 className="
            mt-3
            text-3xl
            font-bold
            text-green-500
          ">
            R0.00
          </h2>

        </div>


      </div>






      {/* TRANSACTIONS */}

      <section className="
        bg-white
        dark:bg-gray-900
        rounded-xl
        shadow
        border
        border-gray-200
        dark:border-gray-800
        p-6
      "> 


        <h2 className="
          text-xl
          font-bold
          text-gray-900
          dark:text-white
          mb-5
        ">
          Recent Transactions
        </h2>


        <div className="
          rounded-lg
          bg-gray-100
          dark:bg-gray-800
          p-6
          text-center
          text-gray-500
          dark:text-gray-400
        ">

          No transactions yet.

          <br />

          Your product sales will appear here.

        </div>


      </section>






      {/* WITHDRAWAL */}

      <section className="
        bg-white
        dark:bg-gray-900
        rounded-xl
        shadow
        border
        border-gray-200
        dark:border-gray-800
        p-6
      ">


        <h2 className="
          text-xl
          font-bold
          text-gray-900
          dark:text-white
        ">
          Withdraw Funds
        </h2>


        <p className="
          mt-3
          text-gray-500
          dark:text-gray-400
        ">
          Add your payment details to receive seller payouts.
        </p>



        <button
          disabled
          className="
            mt-5
            bg-amber-400
            text-black
            px-6
            py-3
            rounded-lg
            font-semibold
            opacity-50
            cursor-not-allowed
          "
        >
          Request Withdrawal
        </button>


      </section>




    </div>
  );
};


export default Earnings;