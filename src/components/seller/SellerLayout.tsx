import React from "react";
import { Outlet } from "react-router-dom";

import SellerSidebar from "./SellerSidebar";


const SellerLayout: React.FC = () => {

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

      <SellerSidebar />


      {/* MAIN CONTENT */}

      <main
        className="
          flex-1
          min-h-screen
          p-6
          md:p-10
          overflow-y-auto
        "
      >

        <Outlet />

      </main>


    </div>

  );

};


export default SellerLayout;