
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

      <main className="min-h-screen overflow-x-hidden bg-white text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-white">

        {/* HERO SECTION */}
        <section className="relative overflow-hidden border-b border-slate-100 bg-white dark:border-slate-800 dark:bg-slate-950">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky-100/70 blur-3xl dark:bg-sky-900/20" />

          <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:py-24">

            <div>
              <span className="inline-flex items-center rounded-full bg-sky-100 px-4 py-2 text-xs font-extrabold tracking-wider text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                HOW BOOSTIFY WORKS
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                Discover, create, and grow with{" "}
                <span className="text-sky-500">
                  Boostify.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
                Explore digital products, discover creative resources, or
                learn how to get started as a seller. Boostify brings buyers
                and sellers together in one convenient digital space.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                <Link
                  to="/marketplace"
                  className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-sky-600"
                >
                  Explore Marketplace →
                </Link>

                <Link
                  to="/register"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-700 transition hover:border-sky-400 hover:bg-sky-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
                >
                  Get Started as a Seller
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-5 text-sm font-medium text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="text-sky-500">✓</span>
                  For Buyers
                </span>

                <span className="flex items-center gap-2">
                  <span className="text-sky-500">✓</span>
                  For Sellers
                </span>

                <span className="flex items-center gap-2">
                  <span className="text-amber-500">⚡</span>
                  Digital Discovery
                </span>
              </div>
            </div>

            {/* INTRODUCTION CARD */}
            <div className="relative">

              <div className="absolute inset-8 rounded-full bg-sky-200/60 blur-3xl dark:bg-sky-900/30" />

              <div className="relative rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20 sm:p-8">

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500 text-2xl text-white shadow-lg shadow-sky-500/20">
                    ⚡
                  </div>

                  <div>
                    <p className="text-lg font-extrabold text-slate-900 dark:text-white">
                      Welcome to{" "}
                      <span className="text-amber-500">Boostify</span>
                    </p>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      Your digital discovery space
                    </p>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-sky-100 bg-sky-50 p-5 dark:border-sky-900 dark:bg-sky-950/40">

                  <p className="text-sm font-bold text-sky-700 dark:text-sky-300">
                    Explore what you need
                  </p>

                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    Browse the marketplace and explore digital products and
                    creative resources.
                  </p>

                  <Link
                    to="/marketplace"
                    className="mt-5 inline-flex items-center rounded-xl bg-sky-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-sky-600"
                  >
                    Browse Products →
                  </Link>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4">

                  <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
                    <span className="text-2xl">🛍️</span>

                    <p className="mt-3 text-sm font-bold text-slate-900 dark:text-white">
                      For Buyers
                    </p>

                    <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                      Explore available products.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
                    <span className="text-2xl">🎨</span>

                    <p className="mt-3 text-sm font-bold text-slate-900 dark:text-white">
                      For Sellers
                    </p>

                    <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                      Learn how to get started.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BUYER AND SELLER INFORMATION */}
        <section className="mx-auto grid max-w-[1200px] gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">

          {/* BUYERS */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 sm:p-8">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-2xl dark:bg-sky-950">
              🛍️
            </div>

            <h2 className="mt-6 text-2xl font-black text-slate-900 dark:text-white">
              For Buyers
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Discover digital products and explore the available
              marketplace. Find resources that match your interests and needs.
            </p>

            <div className="mt-8 space-y-7">

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

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-xs font-extrabold text-sky-700 dark:bg-sky-950 dark:text-sky-300">
                    {item.step}
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/marketplace"
              className="mt-9 inline-flex w-full items-center justify-center rounded-xl bg-sky-500 px-5 py-4 text-sm font-bold text-white transition hover:bg-sky-600"
            >
              Start Exploring →
            </Link>
          </div>

          {/* SELLERS */}
          <div className="relative overflow-hidden rounded-[2rem] bg-sky-500 p-6 text-white shadow-xl shadow-sky-500/10 sm:p-8">

            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/15 blur-3xl" />

            <div className="relative">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-2xl">
                🎨
              </div>

              <h2 className="mt-6 text-2xl font-black">
                For Sellers
              </h2>

              <p className="mt-3 text-sm leading-7 text-white/90">
                Interested in offering products on Boostify? Explore
                registration and the seller options available to you.
              </p>

              <div className="mt-8 space-y-7">

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

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-xs font-extrabold text-sky-700">
                      {item.step}
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-white/85">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/register"
                className="mt-9 inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-4 text-sm font-bold text-sky-700 transition hover:bg-amber-300 hover:text-slate-900"
              >
                Get Started →
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CALL TO ACTION */}
        <section className="mx-auto max-w-[1200px] px-4 pb-16 sm:px-6 sm:pb-20">

          <div className="relative overflow-hidden rounded-[2rem] border border-sky-100 bg-sky-50 p-7 dark:border-slate-800 dark:bg-slate-900 sm:p-10">

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-200/50 blur-3xl dark:bg-sky-900/30" />

            <div className="relative">

              <span className="text-xs font-extrabold uppercase tracking-wider text-sky-700 dark:text-sky-400">
                EXPLORE BOOSTIFY
              </span>

              <h2 className="mt-3 text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">
                Find your next idea.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400">
                Discover digital products and creative resources in one place.
                Start exploring the marketplace or get in touch if you need help.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                <Link
                  to="/marketplace"
                  className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-7 py-4 text-sm font-bold text-white transition hover:bg-sky-600"
                >
                  Explore Marketplace →
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-slate-700 transition hover:border-sky-400 hover:bg-sky-50 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
                >
                  Contact Boostify
                </Link>

              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default ServicePage;




