import React from "react";
import { Helmet } from "react-helmet-async";

// 🧩 Page Components
import Hero from "../Hero";
import Features from "../Features";
import { DynamicData } from "../DynamicData";

const HomePage: React.FC = () => {
  const siteUrl = "https://templatehomepage-main2-kehk.vercel.app";
  const imageUrl = `${siteUrl}/og-image.jpg`;

  return (
    <>
      {/* 🌐 SEO + SOCIAL META TAGS */}
      <Helmet>
        <html lang="en" />

        <title>Boostify | Empower Your Digital Presence</title>

        <meta
          name="description"
          content="Boostify helps businesses grow with modern digital solutions, responsive websites, powerful tools, and scalable online experiences."
        />

        <meta
          name="keywords"
          content="Boostify, web templates, digital tools, responsive design, React, TailwindCSS, digital agency, web development"
        />

        <meta name="author" content="Boostify Team" />
        <meta name="robots" content="index, follow" />

        <link rel="canonical" href={siteUrl} />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Boostify | Empower Your Digital Presence"
        />

        <meta
          property="og:description"
          content="Modern digital solutions for creators, entrepreneurs, startups, and businesses."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content="Boostify" />

        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:secure_url" content={imageUrl} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Boostify - Empower Your Digital Presence"
        />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Boostify | Empower Your Digital Presence"
        />

        <meta
          name="twitter:description"
          content="Modern digital solutions for creators, entrepreneurs, startups, and businesses."
        />

        <meta name="twitter:image" content={imageUrl} />

        <meta
          name="twitter:image:alt"
          content="Boostify - Empower Your Digital Presence"
        />
      </Helmet>

      <main className="w-full">
        {/* 🎯 Hero Section */}
        <Hero />

        {/* ⭐ Features Section */}
        <section
          id="features"
          className="scroll-mt-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-500"
        >
          <Features />
        </section>

        {/* 🔄 Dynamic API Products Section */}
        <section
          id="products"
          className="scroll-mt-20 bg-white dark:bg-gray-800 transition-colors duration-500"
        >
          <DynamicData />
        </section>

        {/* 🚀 Call To Action */}
        <section
          id="cta"
          className="py-16 bg-gradient-to-r from-amber-400 to-yellow-500 text-black text-center relative overflow-hidden"
        >
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to take your business to the next level?
            </h2>

            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Boostify offers modern, scalable solutions for creators,
              entrepreneurs, and startups looking to make an impact online.
            </p>

            <a
              href="/contact"
              className="inline-block bg-black hover:bg-gray-800 text-amber-400 font-semibold py-3 px-8 rounded-md shadow-md transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </a>
          </div>

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent)] pointer-events-none" />
        </section>
      </main>
    </>
  );
};

export default HomePage;








