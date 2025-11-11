import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import DynamicData from "../utils/DynamicData";
import { Helmet } from "react-helmet"; // ✅ For SEO/meta tags

const HomePage: React.FC = () => {
  return (
    <>
      {/* ✅ SEO Optimization */}
      <Helmet>
        <title>Boostify | Empower Your Digital Presence</title>
        <meta
          name="description"
          content="Boostify helps you grow your business with modern tools, beautiful templates, and digital solutions that work on every device."
        />
        <meta name="keywords" content="Boostify, web templates, digital tools, responsive design, React, TailwindCSS" />
        <meta name="author" content="Boostify Team" />
      </Helmet>

      {/* ✅ Hero Section */}
      <Hero />

      {/* ✅ Features Section */}
      <section
        id="features"
        className="scroll-mt-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-500"
      >
        <Features />
      </section>

      {/* ✅ Dynamic API Data Section */}
      <section
        id="products"
        className="scroll-mt-20 bg-white dark:bg-gray-800 transition-colors duration-500"
      >
        <DynamicData />
      </section>

      {/* ✅ Call to Action Section */}
      <section
        id="cta"
        className="py-16 bg-gradient-to-r from-amber-400 to-yellow-500 text-black text-center relative overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to take your business to the next level?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Boostify offers modern, scalable solutions for creators, entrepreneurs, and startups looking to make an impact online.
          </p>
          <a
            href="/contact"
            className="inline-block bg-black hover:bg-gray-800 text-amber-400 font-semibold py-3 px-8 rounded-md shadow-md transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </a>
        </div>

        {/* Optional decorative element */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent)] pointer-events-none" />
      </section>

      {/* ✅ Footer Section */}
      <Footer />
    </>
  );
};

export default HomePage;
