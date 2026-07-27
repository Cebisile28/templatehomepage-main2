import React from "react";

const Orders: React.FC = () => {

  const orders = [
    {
      id: "#1001",
      customer: "Example Customer",
      product: "Digital Product",
      amount: "R0.00",
      status: "Pending",
      date: "Today",
    },
  ];


  return (

    <div className="space-y-8">


      {/* HEADER */}

      <div>

        <h1 className="
          text-3xl
          font-bold
          text-gray-900
          dark:text-white
        ">
          Orders
        </h1>


        <p className="
          mt-3
          text-gray-500
          dark:text-gray-400
        ">
          View and manage your customer orders.
        </p>


      </div>







      {/* ORDER SUMMARY */}


      <div className="grid md:grid-cols-4 gap-6">



        <div className="
          bg-white
          dark:bg-gray-900
          rounded-xl
          shadow
          border
          dark:border-gray-800
          p-6
        ">

          <p className="text-sm text-gray-500">
            Total Orders
          </p>

          <h2 className="
            text-3xl
            font-bold
            mt-2
            text-gray-900
            dark:text-white
          ">
            0
          </h2>

        </div>





        <div className="
          bg-white
          dark:bg-gray-900
          rounded-xl
          shadow
          border
          dark:border-gray-800
          p-6
        ">

          <p className="text-sm text-gray-500">
            Pending Orders
          </p>

          <h2 className="
            text-3xl
            font-bold
            mt-2
            text-amber-400
          ">
            0
          </h2>

        </div>






        <div className="
          bg-white
          dark:bg-gray-900
          rounded-xl
          shadow
          border
          dark:border-gray-800
          p-6
        ">

          <p className="text-sm text-gray-500">
            Completed Orders
          </p>

          <h2 className="
            text-3xl
            font-bold
            mt-2
            text-green-500
          ">
            0
          </h2>

        </div>






        <div className="
          bg-white
          dark:bg-gray-900
          rounded-xl
          shadow
          border
          dark:border-gray-800
          p-6
        ">

          <p className="text-sm text-gray-500">
            Revenue
          </p>

          <h2 className="
            text-3xl
            font-bold
            mt-2
            text-gray-900
            dark:text-white
          ">
            R0.00
          </h2>

        </div>


      </div>









      {/* SEARCH */}

      <section className="
        bg-white
        dark:bg-gray-900
        rounded-xl
        shadow
        border
        dark:border-gray-800
        p-6
      ">


        <input

          type="text"

          placeholder="Search orders..."

          className="
            w-full
            rounded-lg
            bg-gray-100
            dark:bg-gray-800
            p-3
            outline-none
            text-gray-900
            dark:text-white
          "

        />


      </section>









      {/* ORDERS TABLE */}


      <section className="
        bg-white
        dark:bg-gray-900
        rounded-xl
        shadow
        border
        dark:border-gray-800
        p-6
      ">



        <h2 className="
          text-xl
          font-bold
          mb-6
          text-gray-900
          dark:text-white
        ">
          Customer Orders
        </h2>





        {orders.length === 0 ? (


          <div className="
            text-center
            py-10
            text-gray-500
            dark:text-gray-400
          ">

            No orders yet.

            <br />

            Your customer purchases will appear here.

          </div>



        ) : (



          <div className="overflow-x-auto">


            <table className="w-full text-left">


              <thead>


                <tr className="
                  border-b
                  dark:border-gray-800
                  text-gray-500
                ">


                  <th className="p-3">
                    Order ID
                  </th>


                  <th className="p-3">
                    Customer
                  </th>


                  <th className="p-3">
                    Product
                  </th>


                  <th className="p-3">
                    Amount
                  </th>


                  <th className="p-3">
                    Status
                  </th>


                  <th className="p-3">
                    Date
                  </th>


                  <th className="p-3">
                    Actions
                  </th>


                </tr>


              </thead>





              <tbody>


                {orders.map((order) => (


                  <tr
                    key={order.id}
                    className="
                      border-b
                      dark:border-gray-800
                    "
                  >



                    <td className="
                      p-3
                      text-gray-900
                      dark:text-white
                    ">
                      {order.id}
                    </td>





                    <td className="
                      p-3
                      text-gray-500
                    ">
                      {order.customer}
                    </td>





                    <td className="
                      p-3
                      text-gray-900
                      dark:text-white
                    ">
                      {order.product}
                    </td>





                    <td className="
                      p-3
                      font-semibold
                      text-gray-900
                      dark:text-white
                    ">
                      {order.amount}
                    </td>





                    <td className="p-3">

                      <span className="
                        bg-amber-100
                        text-amber-700
                        px-3
                        py-1
                        rounded-full
                        text-sm
                      ">

                        {order.status}

                      </span>

                    </td>





                    <td className="
                      p-3
                      text-gray-500
                    ">
                      {order.date}
                    </td>





                    <td className="p-3 space-x-3">


                      <button className="
                        text-blue-500
                        hover:underline
                      ">
                        View
                      </button>




                      <button className="
                        text-green-500
                        hover:underline
                      ">
                        Complete
                      </button>


                    </td>




                  </tr>


                ))}



              </tbody>


            </table>


          </div>


        )}


      </section>





    </div>

  );

};


export default Orders;