
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
  XMarkIcon,
} from "@heroicons/react/24/outline";

interface Props {
  open: boolean;
  onClose: () => void;
}

const menuGroups = [
  {
    title: "Main",
    items: [
      {
        name: "Dashboard",
        path: "/seller/dashboard",
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

const SellerSidebar: React.FC<Props> = ({ open, onClose }) => {
  return (
    <>
      {/* MOBILE OVERLAY */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/40 z-40 md:hidden"
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed
          top-0
          left-0
          h-screen
          w-64
          bg-white
          text-slate-800
          border-r
          border-slate-200
          z-50
          flex
          flex-col
          transition-transform
          duration-300
          shadow-sm
          ${
            open ? "translate-x-0" : "-translate-x-full"
          }
          md:translate-x-0
        `}
      >
        {/* BRAND */}
        <div className="px-6 py-7 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-extrabold text-sky-500">
                Boostify
              </h1>

              <p className="text-xs text-slate-500 mt-1">
                Seller Marketplace
              </p>
            </div>

            <button
              onClick={onClose}
              className="md:hidden text-slate-500 hover:text-sky-600 transition"
              aria-label="Close sidebar"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* MENU */}
        <nav className="flex-1 overflow-y-auto px-4 py-5 space-y-6">
          {menuGroups.map((group) => (
            <div key={group.title}>
              <p className="text-[11px] uppercase tracking-widest text-slate-400 font-semibold mb-2 px-3">
                {group.title}
              </p>

              <div className="space-y-1">
                {group.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      end
                      onClick={onClose}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                          isActive
                            ? "bg-sky-500 text-white font-semibold shadow-md shadow-sky-100"
                            : "text-slate-600 hover:bg-sky-50 hover:text-sky-600"
                        }`
                      }
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </NavLink>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* FOOTER */}
        <div className="px-6 py-5 border-t border-slate-200">
          <p className="text-xs text-slate-500">
            Boostify Marketplace
          </p>

          <p className="text-xs text-slate-400 mt-1">
            Seller Portal v1.0
          </p>
        </div>
      </aside>
    </>
  );
};

export default SellerSidebar;
