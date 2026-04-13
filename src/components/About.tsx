import React from "react";
import { SparklesIcon, UserGroupIcon, LightBulbIcon } from "@heroicons/react/24/outline";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-12 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image Section */}
        <div className="relative group">
          <img
            src="/optimized/images_image1.webp"
            alt="About Boostify team"
            className="rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-500"
          />
          {/* Decorative overlay */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-amber-400/20 to-transparent group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
        </div>

        {/* Right: Content Section */}
        <div className="text-gray-800 dark:text-gray-100">
          <h2
            className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100 opacity-0 animate-[fadeIn_1s_ease-in-out_forwards]"
            style={{ animationDelay: "0.2s" }}
          >
            About <span className="text-amber-400">Boostify</span>
          </h2>

          <p
            className="text-lg text-gray-600 dark:text-gray-300 mb-6 opacity-0 animate-[fadeIn_1s_ease-in-out_forwards]"
            style={{ animationDelay: "0.4s" }}
          >
            At Boostify, we empower creators, startups, and businesses with tools
            and designs that make growth effortless. Our mission is simple — 
            deliver clean, functional, and modern digital experiences that stand 
            out in today’s crowded landscape.
          </p>

          <div
            className="grid sm:grid-cols-3 gap-6 mt-8 opacity-0 animate-[slideUp_1s_ease-in-out_forwards]"
            style={{ animationDelay: "0.6s" }}
          >
            {/* Value 1 */}
            <div className="flex flex-col items-center">
              <SparklesIcon className="h-8 w-8 text-amber-400 mb-2" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Innovation</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">We drive innovation with cutting-edge solutions.</p>
            </div>
            {/* Value 2 */}
            <div className="flex flex-col items-center">
              <UserGroupIcon className="h-8 w-8 text-amber-400 mb-2" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Community</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">Building strong communities around our products.</p>
            </div>
            {/* Value 3 */}
            <div className="flex flex-col items-center">
              <LightBulbIcon className="h-8 w-8 text-amber-400 mb-2" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Creativity</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">Fostering creativity in every project we undertake.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
