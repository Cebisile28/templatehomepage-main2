import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Hero from "../Hero";
import Features from "../Features";
import DynamicData from "../DynamicData";

const SITE_URL = "https://templatehomepage-main2-kehk.vercel.app";
const OG_IMAGE_URL = `${SITE_URL}/og-image.jpg`;

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />

        <title>
          Boostify | Built for Value. Driven by Opportunity.
        </title>

        <meta
          name="description"
          content="Boostify is a digital marketplace built for value and driven by opportunity. Discover digital products, create and sell your work, connect with others, and grow your digital business."
        />

        <meta
          name="keywords"
          content="Boostify, digital marketplace, digital products, online marketplace, creators, entrepreneurs, digital downloads, templates, online business, digital sellers"
        />

        <meta name="author" content="Boostify" />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href={SITE_URL} />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Boostify | Built for Value. Driven by Opportunity."
        />

        <meta
          property="og:description"
          content="Discover. Create. Connect. Grow. Explore useful digital products and create new opportunities with Boostify."
        />

        <meta property="og:type" content="website" />

        <meta property="og:url" content={SITE_URL} />

        <meta property="og:site_name" content="Boostify" />

        <meta property="og:image" content={OG_IMAGE_URL} />

        <meta
          property="og:image:secure_url"
          content={OG_IMAGE_URL}
        />

        <meta
          property="og:image:type"
          content="image/jpeg"
        />

        <meta property="og:image:width" content="1200" />

        <meta property="og:image:height" content="630" />

        <meta
          property="og:image:alt"
          content="Boostify digital marketplace"
        />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Boostify | Built for Value. Driven by Opportunity."
        />

        <meta
          name="twitter:description"
          content="Discover. Create. Connect. Grow. Explore digital products and opportunities with Boostify."
        />

        <meta
          name="twitter:image"
          content={OG_IMAGE_URL}
        />

        <meta
          name="twitter:image:alt"
          content="Boostify digital marketplace"
        />

        {/* Browser theme */}
        <meta name="theme-color" content="#0f172a" />

        <meta
          name="format-detection"
          content="telephone=no"
        />
      </Helmet>

      <main
        className="
          w-full
          min-w-0
          overflow-x-hidden
          bg-white
          text-slate-900
          transition-colors
          duration-300
          dark:bg-slate-950
          dark:text-white
        "
      >
        {/* Brand sign */}
        <div className="flex w-full justify-center bg-slate-950 px-4 pb-3 pt-20 sm:pt-20">
          <Link
            to="/"
            aria-label="Boostify home"
            className="inline-flex items-center text-lg font-extrabold text-amber-400 transition-colors hover:text-amber-300 sm:text-xl"
          >
            <span
              aria-hidden="true"
              className="text-amber-400"
            >
              ⚡
            </span>

            <span className="ml-1">
              Boostify
            </span>
          </Link>
        </div>

        {/* Hero */}
        <Hero />

        {/* Features */}
        <Features />

        {/* Projects */}
        <DynamicData />

        {/* CTA */}
        <section
          id="cta"
          aria-labelledby="cta-heading"
          className="
            relative
            w-full
            overflow-hidden
            bg-gradient-to-br
            from-amber-400
            via-yellow-400
            to-amber-500
            px-4
            py-16
            text-center
            text-slate-950
            sm:px-6
            sm:py-20
            lg:px-8
            lg:py-24
          "
        >
          {/* Background decoration */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_65%)]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-72
              w-72
              rounded-full
              bg-white/10
              blur-3xl
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-28
              -left-24
              h-80
              w-80
              rounded-full
              bg-white/10
              blur-3xl
            "
          />

          <div
            className="
              relative
              z-10
              mx-auto
              w-full
              max-w-4xl
            "
          >
            {/* Yellow brand sign */}
            <div className="mb-5 flex justify-center">
              <div className="inline-flex items-center rounded-full border border-slate-950/20 bg-white/20 px-5 py-2 text-sm font-extrabold text-slate-950">
                <span aria-hidden="true" className="mr-2">
                  ⚡
                </span>

                Boostify Marketplace
              </div>
            </div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900/70">
              Built for Value. Driven by Opportunity.
            </p>

            <h2
              id="cta-heading"
              className="
                mt-3
                text-3xl
                font-bold
                leading-tight
                tracking-tight
                sm:text-4xl
                md:text-5xl
              "
            >
              Discover. Create. Connect. Grow.
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-base
                leading-7
                text-slate-900/80
                sm:text-lg
                sm:leading-8
              "
            >
              Discover useful digital products, create and share
              your work, connect with opportunities, and grow with
              the Boostify marketplace.
            </p>

            <div
              className="
                mt-8
                flex
                flex-col
                items-center
                justify-center
                gap-3
                sm:flex-row
              "
            >
              <Link
                to="/marketplace"
                className="
                  inline-flex
                  min-h-[48px]
                  w-full
                  max-w-xs
                  items-center
                  justify-center
                  rounded-xl
                  bg-slate-950
                  px-7
                  py-3
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  transition-colors
                  duration-200
                  hover:bg-slate-800
                  hover:shadow-xl
                  focus:outline-none
                  focus:ring-4
                  focus:ring-slate-950/20
                  sm:w-auto
                "
              >
                Explore Marketplace
              </Link>

              <Link
                to="/register"
                className="
                  inline-flex
                  min-h-[48px]
                  w-full
                  max-w-xs
                  items-center
                  justify-center
                  rounded-xl
                  border-2
                  border-slate-950
                  bg-transparent
                  px-7
                  py-3
                  text-sm
                  font-bold
                  text-slate-950
                  transition-colors
                  duration-200
                  hover:bg-slate-950
                  hover:text-white
                  focus:outline-none
                  focus:ring-4
                  focus:ring-slate-950/20
                  sm:w-auto
                "
              >
                Start Selling
              </Link>
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-slate-900/60 sm:text-sm">
              Discover • Create • Connect • Grow
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;