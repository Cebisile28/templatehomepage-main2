import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SITE_URL = "https://templatehomepage-main2-kehk.vercel.app";

const ServicePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>How Boostify Works | Buyers and Sellers</title>
        <meta
          name="description"
          content="Discover digital products on Boostify and learn how to get started as a seller."
        />
        <link rel="canonical" href={`${SITE_URL}/services`} />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>

      <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
        {/* HEADER */}
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
          <div className="mx-auto max-w-[1400px] px-4 py-4">
            <div className="flex items-center justify-between gap-3">
              <Link
                to="/"
                aria-label="Boostify homepage"
                className="flex shrink-0 items-center gap-2"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-500 to-yellow-600 text-xl text-white">
                  ⚡
                </span>
                <span className="text-xl font-extrabold tracking-tight">
                  Boostify
                </span>
              </Link>

              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="hidden rounded-xl px-3 py-2 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 sm:inline-flex"
                >
                  Sign in
                </Link>

                <Link
                  to="/marketplace"
                  className="rounded-xl px-2 py-2 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 sm:px-3"
                >
                  🛒 <span className="hidden sm:inline">Marketplace</span>
                  <span className="sm:hidden">Shop</span>
                </Link>

                <Link
                  to="/register"
                  className="rounded-xl bg-yellow-500 px-3 py-2.5 text-xs font-bold text-white hover:bg-yellow-600 sm:px-4 sm:text-sm"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* SEARCH BAR */}
            <form
              action="/marketplace"
              method="get"
              role="search"
              className="mt-5 flex w-full items-center gap-2 rounded-2xl border-2 border-yellow-200 bg-slate-50 p-1.5 shadow-md transition focus-within:border-yellow-500 focus-within:ring-4 focus-within:ring-yellow-100 dark:border-slate-700 dark:bg-slate-900 dark:focus-within:ring-yellow-950"
            >
              <span
                className="pl-3 text-xl text-yellow-600"
                aria-hidden="true"
              >
                ⌕
              </span>

              <input
                type="search"
                name="q"
                placeholder="Search products, templates, AI tools..."
                aria-label="Search Boostify"
                className="min-w-0 flex-1 bg-transparent px-2 py-3 text-sm outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500 sm:text-base"
              />

              <button
                type="submit"
                className="shrink-0 rounded-xl bg-yellow-500 px-4 py-3 text-sm font-bold text-white hover:bg-yellow-600 sm:px-7"
              >
                <span className="sm:hidden">Go</span>
                <span className="hidden sm:inline">Search</span>
              </button>
            </form>
          </div>

          {/* SIMPLIFIED NAVIGATION */}
          <nav
            aria-label="Main navigation"
            className="border-t border-slate-100 dark:border-slate-800"
          >
            <div className="mx-auto flex max-w-[1400px] items-center gap-6 overflow-x-auto px-4 py-3 text-sm font-medium whitespace-nowrap">
              <Link
                to="/marketplace"
                className="shrink-0 text-slate-600 hover:text-yellow-700 dark:text-slate-300 dark:hover:text-yellow-400"
              >
                Marketplace
              </Link>

              <Link
                to="/contact"
                className="shrink-0 text-slate-600 hover:text-yellow-700 dark:text-slate-300 dark:hover:text-yellow-400"
              >
                Contact
              </Link>

              <Link
                to="/services"
                aria-current="page"
                className="shrink-0 font-bold text-yellow-700 dark:text-yellow-400"
              >
                Services
              </Link>
            </div>
          </nav>
        </header>

        {/* HERO */}
        <section className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-4 py-12 sm:py-16 lg:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full bg-yellow-100 px-3 py-1.5 text-xs font-extrabold text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300">
                HOW BOOSTIFY WORKS
              </span>

              <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                Discover, create, and grow with{" "}
                <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  Boostify.
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
                Explore digital products, discover creative resources, or
                learn how to get started as a seller. Find products and
                resources that match your interests.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/marketplace"
                  className="inline-flex items-center justify-center rounded-xl bg-yellow-500 px-6 py-3.5 text-sm font-bold text-white hover:bg-yellow-600"
                >
                  Explore Marketplace →
                </Link>

                <Link
                  to="/register"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold hover:border-yellow-300 hover:bg-yellow-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
                >
                  Get Started as a Seller
                </Link>
              </div>
            </div>

            {/* INTRODUCTION CARD */}
            <div className="relative">
              <div className="absolute inset-8 rounded-full bg-yellow-200/60 blur-3xl dark:bg-yellow-900/30" />

              <div className="relative rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-600 text-2xl text-white">
                    ⚡
                  </div>

                  <div>
                    <p className="font-extrabold">Welcome to Boostify</p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      Your digital discovery space
                    </p>
                  </div>
                </div>

                <div className="mt-7 rounded-2xl border border-yellow-100 bg-yellow-50/70 p-5 dark:border-yellow-900 dark:bg-yellow-950/40">
                  <p className="text-sm font-bold text-yellow-700 dark:text-yellow-300">
                    Explore what you need
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    Browse the marketplace and explore digital products and
                    creative resources.
                  </p>

                  <Link
                    to="/marketplace"
                    className="mt-4 inline-flex rounded-xl bg-yellow-500 px-4 py-2.5 text-sm font-bold text-white hover:bg-yellow-600"
                  >
                    Browse Products
                  </Link>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-slate-200 p-4 dark:border-slate-700">
                    <span className="text-2xl">🛍️</span>
                    <p className="mt-3 text-sm font-bold">For Buyers</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                      Explore available products.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 p-4 dark:border-slate-700">
                    <span className="text-2xl">🎨</span>
                    <p className="mt-3 text-sm font-bold">For Sellers</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                      Learn how to get started.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BUYER AND SELLER INFORMATION */}
        <section className="mx-auto grid max-w-[1200px] gap-6 px-4 py-12 lg:grid-cols-2 lg:py-16">
          {/* BUYERS */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-100 text-xl dark:bg-yellow-950">
              🛍️
            </div>

            <h2 className="mt-5 text-2xl font-black">For Buyers</h2>

            <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
              Discover digital products and explore the available
              marketplace.
            </p>

            <div className="mt-7 space-y-6">
              {[
                {
                  step: "01",
                  title: "Explore products",
                  desc: "Browse the marketplace to find products that interest you.",
                },
                {
                  step: "02",
                  title: "Review product details",
                  desc: "Read descriptions and check the information provided before making a purchase.",
                },
                {
                  step: "03",
                  title: "Follow checkout",
                  desc: "Use the purchasing options available on the relevant product and checkout pages.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow-100 text-xs font-extrabold text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300">
                    {item.step}
                  </div>

                  <div>
                    <h3 className="text-sm font-bold">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-slate-500 dark:text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/marketplace"
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-yellow-500 px-5 py-3.5 text-sm font-bold text-white hover:bg-yellow-600"
            >
              Start Exploring →
            </Link>
          </div>

          {/* SELLERS */}
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-yellow-500 to-yellow-600 p-6 text-white sm:p-8">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-xl">
                🎨
              </div>

              <h2 className="mt-5 text-2xl font-black">For Sellers</h2>

              <p className="mt-3 text-sm leading-6 text-white/80">
                Interested in offering products on Boostify? Explore
                registration and the seller options available to you.
              </p>

              <div className="mt-7 space-y-6">
                {[
                  {
                    step: "01",
                    title: "Get started",
                    desc: "Visit the registration page to begin setting up your account.",
                  },
                  {
                    step: "02",
                    title: "Explore seller options",
                    desc: "Review the available tools and instructions for listing products.",
                  },
                  {
                    step: "03",
                    title: "Review the requirements",
                    desc: "Check the applicable terms, fees, payment arrangements, and product requirements.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-xs font-extrabold text-yellow-700">
                      {item.step}
                    </div>

                    <div>
                      <h3 className="text-sm font-bold">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-6 text-white/75">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/register"
                className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-yellow-700 hover:bg-yellow-50"
              >
                Get Started →
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CALL TO ACTION */}
        <section className="mx-auto max-w-[1200px] px-4 pb-12 sm:pb-16">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-8">
            <span className="text-xs font-extrabold uppercase tracking-wider text-yellow-700 dark:text-yellow-400">
              EXPLORE BOOSTIFY
            </span>

            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              Find your next idea
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
              Discover digital products and creative resources in one place.
              Start exploring the marketplace or get in touch if you need help.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/marketplace"
                className="inline-flex items-center justify-center rounded-xl bg-yellow-500 px-6 py-3.5 text-sm font-bold text-white hover:bg-yellow-600"
              >
                Explore Marketplace →
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-6 py-3.5 text-sm font-bold hover:border-yellow-300 hover:bg-yellow-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700"
              >
                Contact Boostify
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ServicePage;



