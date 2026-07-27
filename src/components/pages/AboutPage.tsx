import React from "react";
import About from "../About";
import { Helmet } from "react-helmet-async";
import {
  UsersIcon,
  LightBulbIcon,
  HeartIcon,
  ShoppingBagIcon,
  RocketLaunchIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>
          About Boostify | Digital Marketplace for Creators & Buyers
        </title>

        <meta
          name="description"
          content="Boostify is a digital marketplace connecting creators, entrepreneurs, and customers through quality digital products, resources, and creative solutions."
        />

        <meta
          name="keywords"
          content="Boostify marketplace, digital products, creators, sellers, buyers, online marketplace"
        />

        <meta name="author" content="Boostify Team" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 md:px-10 bg-white dark:bg-gray-900 transition-colors duration-500">
        <div className="max-w-5xl mx-auto text-center">

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900 dark:text-gray-100">
            Empowering Creators.
            <br />
            Connecting Buyers.
            <br />
            Building Digital Opportunities.
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">

            <span className="text-amber-500 font-semibold">
              Boostify
            </span>{" "}
            is a digital marketplace where creators, entrepreneurs, and
            businesses can share and sell their digital products while
            customers discover valuable tools, resources, and solutions.

          </p>

          <div className="mt-12">
            <About />
          </div>

        </div>
      </section>


      {/* Our Story */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Our Story
          </h2>

          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">

            Boostify was created with a simple vision: to give creators a place
            where they can transform their skills, knowledge, and ideas into
            digital products that reach customers around the world.

            <br />
            <br />

            At the same time, we wanted to create a trusted marketplace where
            customers can discover useful digital products created by talented
            individuals and businesses.

          </p>

        </div>

      </section>


      {/* Mission & Values */}
      <section className="py-20 bg-white dark:bg-gray-900">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
            Our Mission & Values
          </h2>


          <div className="grid md:grid-cols-3 gap-10">


            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md border-t-4 border-amber-400">

              <LightBulbIcon className="w-10 h-10 text-amber-400 mx-auto mb-4" />

              <h3 className="text-xl font-semibold text-center mb-3 text-gray-900 dark:text-gray-100">
                Creator Empowerment
              </h3>

              <p className="text-center text-gray-600 dark:text-gray-300">

                We provide creators with the tools and platform they need to
                showcase their skills, sell digital products, and grow their
                businesses.

              </p>

            </div>



            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md border-t-4 border-amber-400">

              <HeartIcon className="w-10 h-10 text-amber-400 mx-auto mb-4" />

              <h3 className="text-xl font-semibold text-center mb-3 text-gray-900 dark:text-gray-100">
                Trust & Quality
              </h3>

              <p className="text-center text-gray-600 dark:text-gray-300">

                We aim to build a secure marketplace where buyers discover
                quality products and sellers grow with confidence.

              </p>

            </div>



            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md border-t-4 border-amber-400">

              <UsersIcon className="w-10 h-10 text-amber-400 mx-auto mb-4" />

              <h3 className="text-xl font-semibold text-center mb-3 text-gray-900 dark:text-gray-100">
                Community Growth
              </h3>

              <p className="text-center text-gray-600 dark:text-gray-300">

                We connect buyers and sellers in a community built around
                creativity, opportunity, and digital entrepreneurship.

              </p>

            </div>


          </div>

        </div>

      </section>


      {/* How Boostify Works */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
            How Boostify Works
          </h2>


          <div className="grid md:grid-cols-3 gap-10">


            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow">

              <ShoppingBagIcon className="w-10 h-10 text-amber-400 mx-auto mb-4" />

              <h3 className="text-xl font-semibold text-center mb-3">
                Discover Products
              </h3>

              <p className="text-center text-gray-600 dark:text-gray-300">

                Buyers explore digital products, resources, and solutions
                created by talented sellers.

              </p>

            </div>



            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow">

              <RocketLaunchIcon className="w-10 h-10 text-amber-400 mx-auto mb-4" />

              <h3 className="text-xl font-semibold text-center mb-3">
                Sell & Grow
              </h3>

              <p className="text-center text-gray-600 dark:text-gray-300">

                Creators upload their products, reach customers, and build
                their digital businesses.

              </p>

            </div>



            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow">

              <UserGroupIcon className="w-10 h-10 text-amber-400 mx-auto mb-4" />

              <h3 className="text-xl font-semibold text-center mb-3">
                Grow Together
              </h3>

              <p className="text-center text-gray-600 dark:text-gray-300">

                Boostify creates opportunities for buyers and sellers to
                connect and succeed together.

              </p>

            </div>


          </div>

        </div>

      </section>


      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-amber-400 mb-6">
            Join the Boostify Marketplace
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-8">

            Whether you are looking for valuable digital products or ready to
            share your own creations, Boostify provides a place where ideas
            become opportunities.

          </p>


          <div className="flex flex-col md:flex-row justify-center gap-4">

            <button className="bg-amber-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-amber-300 transition">
              Explore Products
            </button>


            <button className="border border-amber-400 text-amber-400 px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 hover:text-black transition">
              Become a Seller
            </button>

          </div>

        </div>

      </section>

    </>
  );
};

export default AboutPage;
