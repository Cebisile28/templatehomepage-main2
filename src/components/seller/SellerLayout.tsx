
import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

import SellerSidebar from "./SellerSidebar";

interface SellerLayoutProps {
  children: React.ReactNode;
}

const SellerLayout: React.FC<SellerLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-white text-slate-800">
      {/* SIDEBAR */}
      <SellerSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col md:ml-64 min-w-0 bg-white">
        {/* MOBILE TOP BAR */}
        <header
          className="
            md:hidden
            sticky
            top-0
            z-30
            bg-white
            border-b
            border-slate-200
            px-4
            py-3
            flex
            items-center
            justify-between
            shadow-sm
          "
        >
          <button
            onClick={() => setSidebarOpen(true)}
            className="
              p-2
              rounded-xl
              text-slate-600
              hover:bg-sky-50
              hover:text-sky-600
              transition
            "
            aria-label="Open sidebar"
          >
            <Bars3Icon className="w-7 h-7" />
          </button>

          <h1 className="text-xl font-extrabold text-sky-500">
            Boostify
          </h1>

          <div className="w-7" />
        </header>

        {/* PAGE CONTENT */}
        <main
          className="
            flex-1
            w-full
            bg-white
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


