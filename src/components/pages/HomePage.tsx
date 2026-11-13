
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRightIcon,
  ShoppingBagIcon,
  BriefcaseIcon,
  LightBulbIcon,
  MagnifyingGlassIcon,
  CheckCircleIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const categories = [
  {
    name: "Templates & Resources",
    description:
      "Discover useful digital resources to help bring your ideas to life.",
    icon: LightBulbIcon,
    value: "Templates",
  },
  {
    name: "Creative & Design",
    description: "Explore creative resources and design solutions.",
    icon: SparklesIcon,
    value: "UI Design",
  },
  {
    name: "Business & Marketing",
    description:
      "Find resources to support your business and marketing journey.",
    icon: BriefcaseIcon,
    value: "Business",
  },
  {
    name: "Development",
    description:
      "Discover resources for building and improving projects.",
    icon: ShoppingBagIcon,
    value: "Development",
  },
];

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Boostify | Discover More. Connect. Grow.</title>
        <meta
          name="description"
          content="Discover products, digital resources and services on Boostify. Explore opportunities for buyers and sellers in one marketplace."
        />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#38BDF8" />
      </Helmet>

      <main className="w-full overflow-hidden bg-white text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">

        {/* HERO SECTION */}
        <section className="relative isolate flex min-h-[580px] items-center overflow-hidden bg-slate-900 sm:min-h-[640px]">

          {/* Original background photograph - kept clear and visible */}
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=2000&q=90"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          />

          {/* Subtle neutral overlay for readable white text */}
          <div className="absolute inset-0 -z-10 bg-black/20" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />

          <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 md:py-32 lg:px-10">
            <div className="max-w-3xl">

              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/40 bg-black/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                <SparklesIcon className="h-4 w-4 text-sky-300" />
                Welcome to Boostify
              </div>

              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Discover.
                <span className="text-sky-300"> Connect.</span>
                <br />
                Get More.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white sm:text-lg md:text-xl">
                Discover useful products, digital resources and services.
                Connect with sellers, explore new possibilities and find
                what you need in one marketplace.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/marketplace"
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-sky-500 px-7 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-sky-600"
                >
                  Explore Marketplace
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>

                <Link
                  to="/register"
                  className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/70 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-slate-900"
                >
                  Join Boostify
                </Link>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white">
                <span className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-sky-300" />
                  Discover new possibilities
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-sky-300" />
                  Buyers and sellers welcome
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* MARKETPLACE INTRODUCTION */}
        <section className="bg-white px-5 py-20 transition-colors duration-300 dark:bg-slate-950 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">

            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
                Explore Boostify
              </p>

              <h2 className="mt-4 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                Everything starts with discovery.
              </h2>

              <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
                Whether you're looking for something useful or offering
                something valuable, Boostify brings opportunities together
                in one place.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => {
                const Icon = category.icon;

                return (
                  <Link
                    key={category.name}
                    to={`/marketplace?category=${encodeURIComponent(category.value)}`}
                    className="group rounded-2xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-2 hover:border-sky-300 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900 dark:hover:border-sky-400"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 transition group-hover:bg-sky-200 dark:bg-sky-950 dark:group-hover:bg-sky-900">
                      <Icon className="h-7 w-7 text-sky-700 dark:text-sky-300" />
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-slate-900 dark:text-white">
                      {category.name}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {category.description}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-sky-700 dark:text-sky-400">
                      Explore category
                      <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/marketplace"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-7 py-4 font-bold text-white transition hover:bg-sky-600"
              >
                Explore the Marketplace
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* WHY BOOSTIFY */}
        <section className="bg-slate-50 px-5 py-20 transition-colors duration-300 dark:bg-slate-900 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

            <div>
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
                alt="People working together and sharing ideas"
                loading="lazy"
                className="h-[340px] w-full rounded-3xl object-cover shadow-lg sm:h-[420px]"
              />
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
                Why Boostify?
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-4xl">
                More than a place to browse.
                <span className="text-sky-600 dark:text-sky-400">
                  {" "}A place to discover opportunities.
                </span>
              </h2>

              <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">
                Boostify aims to make discovering products, resources and
                services easier while giving sellers an opportunity to
                introduce their offerings to potential customers.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm dark:bg-slate-800">
                    <MagnifyingGlassIcon className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">
                      Discover with ease
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      Explore different categories and available offerings.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm dark:bg-slate-800">
                    <UserGroupIcon className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">
                      For buyers and sellers
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      A marketplace designed to bring both sides together.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm dark:bg-slate-800">
                    <ShieldCheckIcon className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">
                      Account protection
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      Email verification helps protect registered accounts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-white px-5 py-20 transition-colors duration-300 dark:bg-slate-950 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">

            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
                Getting started
              </p>

              <h2 className="mt-4 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                Simple. Straightforward. Convenient.
              </h2>

              <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
                Getting to know Boostify doesn't have to be complicated.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Explore",
                  description:
                    "Discover the marketplace and browse available categories.",
                },
                {
                  number: "02",
                  title: "Find what you need",
                  description:
                    "Explore offerings and discover products or services that interest you.",
                },
                {
                  number: "03",
                  title: "Join Boostify",
                  description:
                    "Create an account when you're ready to participate as a buyer or seller.",
                },
              ].map((step) => (
                <article
                  key={step.number}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-700 dark:bg-slate-900"
                >
                  <span className="text-4xl font-black text-sky-600 dark:text-sky-400">
                    {step.number}
                  </span>

                  <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* BUYERS AND SELLERS */}
        <section className="bg-slate-50 px-5 py-20 transition-colors duration-300 dark:bg-slate-900 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">

            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                There's a place for you at Boostify.
              </h2>

              <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
                Whether you're here to discover or to offer something,
                your journey starts here.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <article className="overflow-hidden rounded-3xl bg-white shadow-sm dark:bg-slate-950">
                <img
                  src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1000&q=85"
                  alt="Customer browsing products"
                  loading="lazy"
                  className="h-64 w-full object-cover"
                />

                <div className="p-8">
                  <p className="text-sm font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                    For Buyers
                  </p>

                  <h3 className="mt-3 text-2xl font-extrabold text-slate-900 dark:text-white">
                    Discover something useful.
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                    Explore available products, digital resources and
                    services to find options that match your needs.
                  </p>

                  <Link
                    to="/marketplace"
                    className="mt-7 inline-flex items-center gap-2 font-bold text-sky-700 hover:text-sky-900 dark:text-sky-400 dark:hover:text-sky-300"
                  >
                    Start exploring
                    <ArrowRightIcon className="h-5 w-5" />
                  </Link>
                </div>
              </article>

              <article className="overflow-hidden rounded-3xl bg-white shadow-sm dark:bg-slate-950">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85"
                  alt="Business owner working with a team"
                  loading="lazy"
                  className="h-64 w-full object-cover"
                />

                <div className="p-8">
                  <p className="text-sm font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                    For Sellers
                  </p>

                  <h3 className="mt-3 text-2xl font-extrabold text-slate-900 dark:text-white">
                    Put your offerings out there.
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                    Introduce your products and services to people
                    exploring the Boostify marketplace.
                  </p>

                  <Link
                    to="/register"
                    className="mt-7 inline-flex items-center gap-2 font-bold text-sky-700 hover:text-sky-900 dark:text-sky-400 dark:hover:text-sky-300"
                  >
                    Become a seller
                    <ArrowRightIcon className="h-5 w-5" />
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white px-5 py-20 transition-colors duration-300 dark:bg-slate-950 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-3xl">

            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
                Need to know more?
              </p>

              <h2 className="mt-4 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                Frequently asked questions
              </h2>
            </div>

            <div className="mt-12 space-y-4">
              {[
                {
                  question: "What is Boostify?",
                  answer:
                    "Boostify is an online marketplace where visitors can discover available products, digital resources and services offered through the platform.",
                },
                {
                  question: "Do I need an account to explore Boostify?",
                  answer:
                    "No. You can visit the public homepage and browse available marketplace content before registering. An account is required for protected account features.",
                },
                {
                  question: "Can I join as a buyer or a seller?",
                  answer:
                    "Yes. During registration, you can choose whether you want to join as a buyer or a seller.",
                },
                {
                  question: "How do I get started?",
                  answer:
                    "Start by exploring the marketplace. When you're ready to participate, select Join Boostify and create an account.",
                },
              ].map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900 dark:text-white">
                    {faq.question}

                    <span className="shrink-0 text-xl text-sky-600 dark:text-sky-400">
                      +
                    </span>
                  </summary>

                  <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-slate-600 dark:text-slate-300">
                Have another question?
              </p>

              <Link
                to="/contact"
                className="mt-3 inline-flex items-center gap-2 font-bold text-sky-700 hover:text-sky-900 dark:text-sky-400 dark:hover:text-sky-300"
              >
                Contact our team
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FINAL CALL TO ACTION */}
        <section className="bg-sky-500 px-5 py-20 text-center text-white transition-colors duration-300 dark:bg-slate-900 sm:px-8 md:py-24">
          <div className="mx-auto max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/90 dark:text-sky-400">
              Your journey starts here
            </p>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
              Ready to discover what Boostify has to offer?
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-8 text-white/95 dark:text-slate-300">
              Explore the marketplace today. When you're ready,
              become part of the Boostify community.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/marketplace"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-sky-700 shadow-sm transition hover:bg-sky-50 dark:bg-sky-500 dark:text-white dark:hover:bg-sky-600"
              >
                Explore Marketplace
                <ArrowRightIcon className="h-5 w-5" />
              </Link>

              <Link
                to="/register"
                className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/80 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-sky-700 dark:hover:text-slate-900"
              >
                Create an Account
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default HomePage;



