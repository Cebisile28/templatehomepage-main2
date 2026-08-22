import React from "react";
import { Helmet } from "react-helmet-async";

import Hero from "../Hero";
import Features from "../Features";
import { DynamicData } from "../DynamicData";

const HomePage: React.FC = () => {
  const siteUrl = "https://templatehomepage-main2-kehk.vercel.app";
  const imageUrl = siteUrl + "/og-image.jpg";

  return (
    <>
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

        {/* Open Graph */}
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
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

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

        {/* Browser theme */}
        <meta name="theme-color" content="#000000" />

        <meta
          name="format-detection"
          content="telephone=no"
        />
      </Helmet>

      <main className="w-full min-w-0 overflow-x-hidden">

        {/* HERO */}
        <section className="w-full min-w-0">
          <Hero />
        </section>

        {/* FEATURES */}
        <section
          id="features"
          className="
            w-full
            min-w-0
            scroll-mt-20
            overflow-hidden
            bg-gray-100
            transition-colors
            duration-500
            dark:bg-gray-900
          "
        >
          <Features />
        </section>

        {/* PRODUCTS */}
        <section
          id="products"
          className="
            w-full
            min-w-0
            scroll-mt-20
            overflow-hidden
            bg-white
            transition-colors
            duration-500
            dark:bg-gray-800
          "
        >
          <DynamicData />
        </section>

        {/* CALL TO ACTION */}
        <section
          id="cta"
          className="
            relative
            w-full
            overflow-hidden
            bg-gradient-to-br
            from-amber-400
            via-yellow-400
            to-amber-500
            px-4
            py-14
            text-center
            text-black
            sm:px-6
            sm:py-16
            lg:px-8
            lg:py-20
          "
        >
          {/* CTA Content */}
          <div
            className="
              relative
              z-10
              mx-auto
              w-full
              max-w-3xl
            "
          >
            <h2
              className="
                text-2xl
                font-bold
                leading-tight
                sm:text-3xl
                md:text-4xl
                lg:text-5xl
              "
            >
              Ready to take your business to the next level?
            </h2>

            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-base
                leading-7
                text-black/80
                sm:mt-5
                sm:text-lg
                sm:leading-8
              "
            >
              Boostify offers modern, scalable solutions for
              creators, entrepreneurs, and startups looking to make
              an impact online.
            </p>

            {/* CTA Button */}
            <div className="mt-7 sm:mt-8">
              <a
                href="/contact"
                className="
                  inline-flex
                  min-h-[48px]
                  w-full
                  max-w-xs
                  items-center
                  justify-center
                  rounded-lg
                  bg-black
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-amber-400
                  shadow-lg
                  transition-all
                  duration-300
                  hover:bg-gray-800
                  hover:shadow-xl
                  sm:w-auto
                  sm:px-8
                  sm:text-base
                  sm:hover:scale-105
                "
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Decorative Background */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.18),transparent_70%)]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-56
              w-56
              rounded-full
              bg-white/10
              blur-3xl
              sm:h-72
              sm:w-72
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-24
              -left-20
              h-64
              w-64
              rounded-full
              bg-white/10
              blur-3xl
              sm:h-80
              sm:w-80
            "
          />
        </section>
      </main>
    </>
  );
};

export default HomePage;









