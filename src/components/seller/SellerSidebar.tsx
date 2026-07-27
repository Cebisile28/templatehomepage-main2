import React from "react";
import { NavLink } from "react-router-dom";

import {
  Squares2X2Icon,
  CubeIcon,
  PlusCircleIcon,
  ShoppingBagIcon,
  UsersIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  Cog6ToothIcon,
  StarIcon,
} from "@heroicons/react/24/outline";


const menuGroups = [

  {
    title: "Main",
    items: [
      {
        name: "Dashboard",
        path: "/seller",
        icon: Squares2X2Icon,
      },
    ],
  },


  {
    title: "Products",
    items: [
      {
        name: "All Products",
        path: "/seller/products",
        icon: CubeIcon,
      },
      {
        name: "Create Product",
        path: "/seller/products/create",
        icon: PlusCircleIcon,
      },
    ],
  },


  {
    title: "Sales",
    items: [
      {
        name: "Orders",
        path: "/seller/orders",
        icon: ShoppingBagIcon,
      },
      {
        name: "Customers",
        path: "/seller/customers",
        icon: UsersIcon,
      },
    ],
  },


  {
    title: "Growth",
    items: [
      {
        name: "Analytics",
        path: "/seller/analytics",
        icon: ChartBarIcon,
      },
      {
        name: "Reviews",
        path: "/seller/reviews",
        icon: StarIcon,
      },
    ],
  },


  {
    title: "Finance",
    items: [
      {
        name: "Earnings",
        path: "/seller/earnings",
        icon: CurrencyDollarIcon,
      },
    ],
  },


  {
    title: "Settings",
    items: [
      {
        name: "Settings",
        path: "/seller/settings",
        icon: Cog6ToothIcon,
      },
    ],
  },

];



const SellerSidebar: React.FC = () => {


  return (

    <aside
      className="
        hidden
        md:flex
        w-72
        min-h-screen
        flex-col
        bg-gray-900
        text-white
        border-r
        border-gray-800
      "
    >


      {/* BRAND */}

      <div
        className="
          p-8
          border-b
          border-gray-800
        "
      >

        <h1
          className="
            text-3xl
            font-bold
            text-amber-400
          "
        >
          Boostify
        </h1>


        <p
          className="
            text-sm
            text-gray-400
            mt-2
          "
        >
          Seller Marketplace
        </p>


      </div>



      {/* NAVIGATION */}

      <nav
        className="
          flex-1
          px-5
          py-6
          space-y-7
        "
      >

        {menuGroups.map((group) => (

          <div key={group.title}>


            <p
              className="
                text-xs
                uppercase
                tracking-wide
                text-gray-500
                mb-3
                px-3
              "
            >
              {group.title}
            </p>



            <div
              className="
                space-y-2
              "
            >

              {group.items.map((item) => {

                const Icon = item.icon;


                return (

                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === "/seller"}
                    className={({isActive}) =>
                      `
                      flex
                      items-center
                      gap-3
                      px-4
                      py-3
                      rounded-xl
                      transition
                      ${
                        isActive
                        ?
                        "bg-amber-400 text-black font-semibold"
                        :
                        "text-gray-300 hover:bg-gray-800 hover:text-white"
                      }
                      `
                    }
                  >

                    <Icon
                      className="w-5 h-5"
                    />


                    <span>
                      {item.name}
                    </span>


                  </NavLink>

                );

              })}

            </div>


          </div>

        ))}


      </nav>



      {/* FOOTER */}

      <div
        className="
          p-5
          border-t
          border-gray-800
        "
      >

        <p
          className="
            text-xs
            text-gray-500
          "
        >
          Boostify Marketplace
        </p>


        <p
          className="
            text-xs
            text-gray-600
            mt-1
          "
        >
          Seller Portal v1.0
        </p>


      </div>


    </aside>

  );

};


export default SellerSidebar;