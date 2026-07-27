import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import type { User } from "@supabase/supabase-js";

import DarkModeToggle from "./DarkModeToggle";
import { supabase } from "../lib/supabase";
import { signOut } from "../lib/auth";


type NavLink = {
  name: string;
  path: string;
};


const Navbar: React.FC = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<"buyer" | "seller" | null>(null);

  const location = useLocation();
  const navigate = useNavigate();



  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);




  useEffect(() => {

    setMenuOpen(false);

  }, [location]);






  useEffect(() => {

    const loadUser = async () => {

      const {
        data: {
          user
        },
      } = await supabase.auth.getUser();


      setUser(user);


      if (!user) {

        setRole(null);
        return;

      }



      const {
        data: profile
      } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();



      if (profile) {

        setRole(profile.role);

      }

    };



    loadUser();




    const {
      data: {
        subscription
      },
    } = supabase.auth.onAuthStateChange(
      async (_event, session) => {


        const currentUser =
          session?.user ?? null;



        setUser(currentUser);



        if (!currentUser) {

          setRole(null);
          return;

        }



        const {
          data: profile
        } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", currentUser.id)
          .single();



        if (profile) {

          setRole(profile.role);

        }


      }
    );



    return () =>
      subscription.unsubscribe();


  }, []);







  const handleLogout = async () => {

    const {
      error
    } = await signOut();


    if (error) {

      alert(error.message);
      return;

    }


    setUser(null);
    setRole(null);


    navigate("/login");

  };







  const navLinks: NavLink[] = [

    {
      name: "Home",
      path: "/",
    },

    {
      name: "Services",
      path: "/services",
    },

    {
      name: "Marketplace",
      path: "/marketplace",
    },

    {
      name: "About",
      path: "/about",
    },

    {
      name: "Contact",
      path: "/contact",
    },

  ];







  return (

    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >


      <div className="container mx-auto px-6 py-4 flex justify-between items-center">



        <Link
          to="/"
          className="text-2xl font-extrabold text-amber-400 hover:text-amber-300"
        >
          ⚡ Boostify
        </Link>





        <div className="hidden md:flex items-center gap-8">


          {navLinks.map((link) => (

            <Link
              key={link.name}
              to={link.path}
              className={`relative text-sm uppercase tracking-wide ${
                location.pathname === link.path
                  ? "text-amber-400"
                  : "text-gray-300 hover:text-amber-300"
              }`}
            >

              {link.name}


            </Link>

          ))}






          {role === "seller" && (

            <Link
              to="/seller"
              className="text-sm uppercase text-gray-300 hover:text-amber-300"
            >
              Seller Dashboard
            </Link>

          )}






          {user ? (

            <>

              <span className="text-sm text-gray-300 hidden lg:block">

                Hi,

                <span className="text-amber-400 font-semibold ml-1">
                  {user.email}
                </span>

              </span>




              <button
                onClick={handleLogout}
                className="text-sm uppercase text-red-400 hover:text-red-300 transition"
              >
                Logout
              </button>


            </>


          ) : (

            <>

              <Link
                to="/login"
                className="text-sm uppercase text-gray-300 hover:text-amber-300"
              >
                Login
              </Link>


              <Link
                to="/register"
                className="text-sm uppercase text-amber-400 hover:text-amber-300"
              >
                Register
              </Link>


            </>

          )}




          <DarkModeToggle />

        </div>





        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-300"
        >

          {menuOpen ? (

            <XMarkIcon className="h-7 w-7" />

          ) : (

            <Bars3Icon className="h-7 w-7" />

          )}

        </button>


      </div>






      <AnimatePresence>

        {menuOpen && (

          <motion.div

            initial={{
              height: 0,
              opacity: 0
            }}

            animate={{
              height: "auto",
              opacity: 1
            }}

            exit={{
              height: 0,
              opacity: 0
            }}

            className="md:hidden bg-black/95 px-6 pb-6"

          >


            <div className="flex flex-col gap-4 mt-4">



              {navLinks.map((link) => (

                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm uppercase text-gray-300"
                >
                  {link.name}
                </Link>

              ))}





              {role === "seller" && (

                <Link
                  to="/seller"
                  className="text-sm uppercase text-gray-300"
                >
                  Seller Dashboard
                </Link>

              )}






              {user ? (

                <>

                  <div className="bg-gray-800 rounded-lg border border-gray-700 p-3">

                    <p className="text-xs uppercase text-gray-400">
                      Signed In
                    </p>


                    <p className="text-sm text-amber-400 font-medium break-all">
                      {user.email}
                    </p>


                    {role && (

                      <p className="text-xs text-gray-400 mt-1">

                        Role:

                        <span className="text-amber-400 capitalize ml-1">
                          {role}
                        </span>

                      </p>

                    )}

                  </div>




                  <button
                    onClick={handleLogout}
                    className="text-sm uppercase text-red-400 text-left"
                  >
                    Logout
                  </button>


                </>


              ) : (

                <>

                  <Link
                    to="/login"
                    className="text-sm uppercase text-gray-300"
                  >
                    Login
                  </Link>


                  <Link
                    to="/register"
                    className="text-sm uppercase text-amber-400"
                  >
                    Register
                  </Link>


                </>

              )}



              <DarkModeToggle />

            </div>


          </motion.div>

        )}

      </AnimatePresence>



    </nav>

  );

};



export default Navbar;


