import React from "react";

const Customers: React.FC = () => {

  const customers = [
    {
      id: 1,
      name: "Example Customer",
      email: "customer@example.com",
      orders: 0,
      spent: "R0.00",
      status: "Active",
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
          Customers
        </h1>


        <p className="
          mt-3
          text-gray-500
          dark:text-gray-400
        ">
          Manage your customers and track customer activity.
        </p>

      </div>







      {/* CUSTOMER SUMMARY */}


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
            Total Customers
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
            New Customers
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
            Returning Customers
          </p>


          <h2 className="
            text-3xl
            font-bold
            mt-2
            text-blue-500
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
            Customer Revenue
          </p>


          <h2 className="
            text-3xl
            font-bold
            mt-2
            text-amber-400
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

          placeholder="Search customers..."

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









      {/* CUSTOMER TABLE */}


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
          Customer List
        </h2>





        {customers.length === 0 ? (

          <div className="
            text-center
            py-10
            text-gray-500
            dark:text-gray-400
          ">

            No customers yet.

            <br />

            Your customers will appear here after purchases.

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
                    Customer
                  </th>


                  <th className="p-3">
                    Email
                  </th>


                  <th className="p-3">
                    Orders
                  </th>


                  <th className="p-3">
                    Spent
                  </th>


                  <th className="p-3">
                    Status
                  </th>


                  <th className="p-3">
                    Actions
                  </th>


                </tr>

              </thead>





              <tbody>


                {customers.map((customer)=>(


                  <tr
                    key={customer.id}
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
                      {customer.name}
                    </td>



                    <td className="
                      p-3
                      text-gray-500
                    ">
                      {customer.email}
                    </td>




                    <td className="
                      p-3
                      text-gray-900
                      dark:text-white
                    ">
                      {customer.orders}
                    </td>




                    <td className="
                      p-3
                      font-semibold
                      text-gray-900
                      dark:text-white
                    ">
                      {customer.spent}
                    </td>




                    <td className="p-3">

                      <span className="
                        bg-green-100
                        text-green-700
                        px-3
                        py-1
                        rounded-full
                        text-sm
                      ">

                        {customer.status}

                      </span>

                    </td>




                    <td className="p-3">

                      <button className="
                        text-blue-500
                        hover:underline
                      ">
                        View
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


export default Customers;