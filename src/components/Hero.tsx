import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden">
      {/* Background gradient or subtle shape */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50 to-white dark:from-gray-800 dark:to-gray-900 opacity-90" />

      {/* Main container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:flex lg:items-center lg:justify-between py-20">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Supercharge Your Business with{" "}
            <span className="text-amber-400">Boostify</span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Empowering creators, startups, and brands with sleek templates and
            growth-ready tools — designed for performance, style, and results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="/services"
              className="inline-flex items-center bg-amber-400 hover:bg-amber-500 text-black font-semibold px-8 py-3 rounded-md transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
            >
              Get Started
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </a>

            <a
              href="/about"
              className="inline-block border border-gray-400 dark:border-gray-600 hover:border-amber-400 text-gray-800 dark:text-gray-200 font-semibold px-8 py-3 rounded-md transition-all duration-300 hover:text-amber-400"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        {/* Hero Image / Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center"
        >
          <img
            src="https://cdn.dribbble.com/userupload/10087372/file/original-9ff6e9d72b37c20dcad90e7a5f0df7bb.png?resize=1024x768"
            alt="Boostify illustration"
            className="w-full max-w-md lg:max-w-lg object-contain rounded-xl shadow-lg hover:shadow-amber-400/30 transition-all duration-500"
          />
        </motion.div>
      </div>

      {/* Decorative floating shape */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gray-800/20 dark:bg-amber-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse -z-10"></div>
    </section>
  );
};

export default Hero;
