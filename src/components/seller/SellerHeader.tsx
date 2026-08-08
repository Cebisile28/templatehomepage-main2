import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";

import {
  BellIcon,
  UserCircleIcon,
  PlusIcon,
  ArrowRightOnRectangleIcon,
  UserIcon,
  Cog6ToothIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";


type Profile = {
  full_name: string;
  avatar_url: string | null;
};


const SellerHeader: React.FC = () => {

  const navigate = useNavigate();

  const [profile, setProfile] = useState<Profile | null>(null);
  const [showProfile, setShowProfile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);


  useEffect(() => {

    const loadProfile = async () => {

      const {
        data: { user },
      } = await supabase.auth.getUser();


      if (!user) return;


      const { data } = await supabase
        .from("profiles")
        .select("full_name, avatar_url")
        .eq("id", user.id)
        .single();


      if (data) {
        setProfile(data);
      }

    };


    loadProfile();

  }, []);



  const logout = async () => {

    await supabase.auth.signOut();

    navigate("/login");

  };



  const hour = new Date().getHours();


  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
      ? "Good Afternoon"
      : "Good Evening";



  const today = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });



  return (

    <header className="mb-8">

      <div
        className="
          bg-gradient-to-r
          from-gray-900
          to-gray-800
          rounded-3xl
          p-6
          md:p-8
          text-white
          shadow-xl
          flex
          flex-col
          lg:flex-row
          justify-between
          gap-6
        "
      >


        {/* LEFT SIDE */}

        <div>


          <p className="text-gray-400 text-sm mb-2">
            {today}
          </p>


          <h1 className="text-3xl md:text-4xl font-bold">

            {greeting},

            <span className="text-amber-400">
              {" "}
              {profile?.full_name ?? "Seller"}
            </span>

            👋

          </h1>



          <p className="text-gray-300 mt-3 max-w-xl">

            Welcome back! Manage your products, sales,
            customers and marketplace growth from here.

          </p>



          <div className="flex flex-wrap gap-3 mt-6">


            <button
              onClick={() => navigate("/seller/products/create")}
              className="
                flex
                items-center
                gap-2
                bg-amber-400
                text-black
                px-5
                py-3
                rounded-xl
                font-semibold
                hover:bg-amber-500
                transition
              "
            >

              <PlusIcon className="w-5 h-5"/>

              Add Product

            </button>



            <button
              onClick={() => navigate("/marketplace")}
              className="
                flex
                items-center
                gap-2
                bg-white/10
                hover:bg-white/20
                px-5
                py-3
                rounded-xl
                font-semibold
                transition
              "
            >

              View Store

            </button>


          </div>


        </div>



        {/* RIGHT SIDE */}


        <div className="flex items-start gap-4 relative">


          {/* Notifications */}


          <div className="relative">


            <button
              onClick={() =>
                setShowNotifications(!showNotifications)
              }
              className="
                bg-white/10
                p-3
                rounded-xl
                hover:bg-white/20
                transition
              "
            >

              <BellIcon className="w-6 h-6"/>


              <span
                className="
                  absolute
                  top-2
                  right-2
                  w-2
                  h-2
                  bg-red-500
                  rounded-full
                "
              />

            </button>



            {showNotifications && (

              <div
                className="
                  absolute
                  right-0
                  mt-3
                  w-72
                  bg-white
                  text-gray-900
                  rounded-2xl
                  shadow-xl
                  p-4
                  z-50
                "
              >

                <h3 className="font-bold mb-3">
                  Notifications
                </h3>


                <p className="text-sm text-gray-500">
                  No new notifications yet.
                </p>


              </div>

            )}


          </div>





          {/* PROFILE */}


          <div className="relative">


            <button
              onClick={() =>
                setShowProfile(!showProfile)
              }
              className="
                flex
                items-center
                gap-3
                bg-white/10
                rounded-xl
                p-2
                hover:bg-white/20
                transition
              "
            >


              {profile?.avatar_url ? (

                <img
                  src={profile.avatar_url}
                  className="
                    w-12
                    h-12
                    rounded-xl
                    object-cover
                    border-2
                    border-amber-400
                  "
                />

              ) : (

                <UserCircleIcon className="w-12 h-12"/>

              )}


            </button>




            {showProfile && (

              <div
                className="
                  absolute
                  right-0
                  mt-3
                  w-64
                  bg-white
                  text-gray-900
                  rounded-2xl
                  shadow-xl
                  p-4
                  z-50
                "
              >


                <div className="border-b pb-3 mb-3">

                  <p className="font-bold">
                    {profile?.full_name ?? "Seller"}
                  </p>

                  <p className="text-sm text-gray-500">
                    Seller Account
                  </p>

                </div>


                <button
                  onClick={() => navigate("/seller/profile")}
                  className="menu-item"
                >
                  <UserIcon className="w-5 h-5"/>
                  My Profile
                </button>


                <button
                  onClick={() => navigate("/seller/analytics")}
                  className="menu-item"
                >
                  <ChartBarIcon className="w-5 h-5"/>
                  Analytics
                </button>


                <button
                  onClick={() => navigate("/seller/settings")}
                  className="menu-item"
                >
                  <Cog6ToothIcon className="w-5 h-5"/>
                  Settings
                </button>



                <button
                  onClick={logout}
                  className="
                    flex
                    items-center
                    gap-3
                    w-full
                    px-3
                    py-2
                    rounded-lg
                    text-red-500
                    hover:bg-red-50
                    mt-2
                  "
                >

                  <ArrowRightOnRectangleIcon className="w-5 h-5"/>

                  Logout

                </button>


              </div>

            )}


          </div>


        </div>


      </div>


    </header>

  );

};


export default SellerHeader;