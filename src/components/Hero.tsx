import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-white">

      {/* Background Glow Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/20 blur-3xl rounded-full animate-pulse -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full animate-pulse -z-10"></div>

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:flex lg:items-center lg:justify-between py-24">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-center lg:text-left"
        >
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Grow Faster with{" "}
            <span className="text-amber-400">Boostify</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Modern digital tools and powerful templates designed to help
            creators, startups, and businesses scale faster and smarter.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

            <a
              href="/services"
              className="inline-flex items-center justify-center bg-amber-400 hover:bg-amber-500 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:scale-105"
            >
              Get Started
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </a>

            <a
              href="/about"
              className="inline-flex items-center justify-center border border-gray-300 dark:border-gray-600 hover:border-amber-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:text-amber-400"
            >
              Learn More
            </a>

          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-16 lg:mt-0 lg:w-1/2 flex justify-center"
        >
          <img
            src="/image/image2.png"
            alt="Boostify Digital Growth"
            className="w-full max-w-md lg:max-w-xl rounded-2xl shadow-2xl hover:shadow-amber-400/30 transition-all duration-500"
          />
        </motion.div>

      </div>

      {/* Bottom Gradient Divider */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>

    </section>
  );
};

export default Hero;
