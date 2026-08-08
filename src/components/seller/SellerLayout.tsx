import React, { ReactNode, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

import SellerSidebar from "./SellerSidebar";

interface SellerLayoutProps {
  children: ReactNode;
}

const SellerLayout: React.FC<SellerLayoutProps> = ({ children }) => {

  const [sidebarOpen, setSidebarOpen] = useState(false);


  return (

    <div
      className="
        min-h-screen
        flex

        bg-gray-100
        dark:bg-gray-950

        text-gray-900
        dark:text-white
      "
    >


      {/* SIDEBAR */}

      <SellerSidebar

        open={sidebarOpen}

        onClose={() => setSidebarOpen(false)}

      />




      {/* MAIN AREA */}


      <div

        className="
          flex-1
          flex
          flex-col

          md:ml-64

          min-w-0
        "

      >




        {/* MOBILE TOP BAR */}


        <header

          className="
            md:hidden

            sticky
            top-0

            z-30

            bg-white
            dark:bg-gray-900

            border-b
            border-gray-200
            dark:border-gray-800

            px-4
            py-3

            flex
            items-center
            justify-between
          "

        >



          <button

            onClick={() => setSidebarOpen(true)}

            className="
              p-2

              rounded-xl

              hover:bg-gray-100
              dark:hover:bg-gray-800

              transition
            "

          >

            <Bars3Icon className="w-7 h-7"/>


          </button>




          <h1

            className="
              text-xl
              font-extrabold
              text-amber-400
            "

          >

            Boostify


          </h1>




          <div className="w-7"/>



        </header>






        {/* PAGE CONTENT */}


        <main

          className="
            flex-1

            w-full

            p-4

            sm:p-6

            lg:p-8

            overflow-x-hidden

          "

        >

          {children}

        </main>

      </div>

    </div>

  );

};

export default SellerLayout;

