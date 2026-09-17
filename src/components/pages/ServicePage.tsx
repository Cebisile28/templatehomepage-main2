import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ShoppingBagIcon,
  UserGroupIcon,
  ArrowTrendingUpIcon,
  SparklesIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
  HeartIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

type Service = {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
};

const coreServices: Service[] = [
  {
    icon: ShoppingBagIcon,
    title: "Discover Digital Products",
    description:
      "Find useful digital products created to help you learn, work, create, and grow. Explore resources from people who have something valuable to share.",
    features: [
      "Discover useful digital products",
      "Explore creator-made resources",
      "Find products for your goals",
    ],
  },
  {
    icon: SparklesIcon,
    title: "Create & Sell",
    description:
      "Turn your knowledge, creativity, skills, and digital work into products that can reach people looking for useful solutions.",
    features: [
      "Create your seller presence",
      "Showcase your digital products",
      "Build your online opportunity",
    ],
  },
  {
    icon: ArrowTrendingUpIcon,
    title: "Grow Your Digital Business",
    description:
      "Build a stronger digital presence by improving your products, connecting with customers, and creating new opportunities over time.",
    features: [
      "Grow your digital presence",
      "Reach potential customers",
      "Build long-term opportunities",
    ],
  },
];

const additionalServices: Service[] = [
  {
    icon: UserGroupIcon,
    title: "Creator Community",
    description:
      "Boostify brings creators, entrepreneurs, freelancers, and digital product customers into one growing marketplace.",
    features: [
      "Connect through digital commerce",
      "Share knowledge and creativity",
      "Build meaningful relationships",
    ],
  },
  {
    icon: RocketLaunchIcon,
    title: "Business Opportunities",
    description:
      "Use your digital skills to create new possibilities. Whether you are starting small or building something bigger, Boostify gives you a place to begin.",
    features: [
      "Start with what you know",
      "Develop digital products",
      "Create new income opportunities",
    ],
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Built for Modern Life",
    description:
      "Enjoy a clean, responsive marketplace experience designed to work across phones, tablets, and desktop devices.",
    features: [
      "Mobile friendly",
      "Tablet compatible",
      "Desktop ready",
    ],
  },
];

const trustPoints = [
  {
    icon: ShieldCheckIcon,
    title: "Designed with trust in mind",
    description:
      "We believe a marketplace should feel clear, professional, and easy to understand.",
  },
  {
    icon: HeartIcon,
    title: "Built around people",
    description:
      "Behind every product is a creator, and behind every purchase is someone looking for value.",
  },
  {
    icon: LightBulbIcon,
    title: "Focused on real value",
    description:
      "Boostify is about useful digital products, meaningful opportunities, and helping people move forward.",
  },
];

const benefits = [
  "A simple marketplace experience",
  "Creator-friendly opportunities",
  "Digital product discovery",
  "Professional product presentation",
  "Responsive experience across devices",
  "A platform designed to grow with its community",
];

const journeySteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Explore digital products and find resources that match your needs.",
  },
  {
    number: "02",
    title: "Create",
    description:
      "Turn your skills, knowledge, and creativity into digital products.",
  },
  {
    number: "03",
    title: "Connect",
    description:
      "Connect with customers, creators, ideas, and new opportunities.",
  },
  {
    number: "04",
    title: "Grow",
    description:
      "Keep learning, improving, creating, and building your digital future.",
  },
];

const ServicePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />

        <title>
          Services | Boostify — Built for Value. Driven by Opportunity.
        </title>

        <meta
          name="description"
          content="Discover the services and opportunities available through Boostify. Discover digital products, create and sell, connect with others, and grow your digital business."
        />

        <meta
          name="keywords"
          content="Boostify Marketplace, digital marketplace, digital products, creators, sellers, entrepreneurs, digital business, online marketplace"
        />

        <meta name="author" content="Boostify" />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Services | Boostify Marketplace"
        />

        <meta
          property="og:description"
          content="Built for Value. Driven by Opportunity. Discover. Create. Connect. Grow with Boostify."
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <main className="w-full overflow-x-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-white">

        {/* =========================================================
            HERO
        ========================================================= */}
        <section className="relative overflow-hidden bg-slate-950 px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-28">

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-amber-400/20 blur-3xl sm:h-96 sm:w-96"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.07),transparent_55%)]"
          />

          <div className="relative z-10 mx-auto w-full max-w-5xl text-center">

            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-300">
              <SparklesIcon
                aria-hidden="true"
                className="h-4 w-4"
              />
              Built for Value. Driven by Opportunity.
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Discover.
              <br />

              <span className="text-amber-400">
                Create.
              </span>{" "}
              Connect.
              <br />

              Grow with{" "}
              <span className="text-amber-400">
                Boostify.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Boostify connects people looking for useful digital products
              with creators who have valuable skills, knowledge, and ideas
              to share.
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
              A marketplace built around value, opportunity, creativity,
              and the relationships that help people move forward.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/marketplace"
                className="inline-flex min-h-[52px] w-full max-w-xs items-center justify-center rounded-xl bg-amber-400 px-7 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-amber-400/10 transition-all duration-200 hover:bg-amber-500 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-amber-400/30 sm:w-auto"
              >
                Explore Marketplace
              </Link>

              <Link
                to="/register"
                className="inline-flex min-h-[52px] w-full max-w-xs items-center justify-center rounded-xl border border-slate-600 bg-slate-900/80 px-7 py-3 text-sm font-bold text-white transition-all duration-200 hover:border-amber-400 hover:text-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-400/20 sm:w-auto"
              >
                Become a Creator
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium text-slate-400 sm:text-sm">
              <span>Discover</span>
              <span className="text-amber-400">•</span>
              <span>Create</span>
              <span className="text-amber-400">•</span>
              <span>Connect</span>
              <span className="text-amber-400">•</span>
              <span>Grow</span>
            </div>
          </div>
        </section>

        {/* =========================================================
            INTRODUCTION
        ========================================================= */}
        <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 dark:bg-slate-950">

          <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-600 dark:text-amber-400">
                Built for Value
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
                Built around people, products, and opportunity.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8">
                We believe digital products become more valuable when they
                solve real problems. That is why Boostify brings customers
                and creators together in one place.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                Whether you are looking for your next useful resource or
                building a product of your own, Boostify gives you a place
                to discover value and create new opportunities.
              </p>

              <div className="mt-7">
                <Link
                  to="/about"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-slate-950 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-950/20 dark:bg-amber-400 dark:text-slate-950 dark:hover:bg-amber-500"
                >
                  Learn About Boostify
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-amber-400/10 blur-2xl" />

              <div className="relative rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 dark:bg-amber-400/10">
                  <HeartIcon
                    aria-hidden="true"
                    className="h-7 w-7 text-amber-600 dark:text-amber-400"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                  Driven by opportunity.
                </h3>

                <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                  Customers should feel confident discovering products.
                  Creators should feel empowered to share their work.
                  And both sides should have a reason to come back.
                </p>

                <div className="mt-7 h-px bg-slate-200 dark:bg-slate-800" />

                <p className="mt-6 text-sm font-semibold leading-6 text-slate-700 dark:text-slate-300">
                  Discover value. Create possibilities. Connect with people.
                  Grow with Boostify.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            CORE SERVICES
        ========================================================= */}
        <section className="w-full bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-10 lg:py-24 dark:bg-slate-900">

          <div className="mx-auto w-full max-w-7xl">

            <div className="mx-auto max-w-3xl text-center">

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-600 dark:text-amber-400">
                What You Can Do
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
                Discover. Create. Connect. Grow.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8">
                Boostify gives you different ways to discover value,
                share your skills, connect with others, and create new
                digital opportunities.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">

              {coreServices.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.title}
                    className="group flex h-full flex-col rounded-2xl border border-slate-200 border-t-4 border-t-amber-400 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950 sm:p-7"
                  >
                    <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-xl bg-amber-100 transition-transform duration-200 group-hover:scale-105 dark:bg-amber-400/10">
                      <Icon
                        aria-hidden="true"
                        className="h-7 w-7 text-amber-600 dark:text-amber-400"
                      />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {service.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                      {service.description}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300"
                        >
                          <CheckCircleIcon
                            aria-hidden="true"
                            className="mt-0.5 h-5 w-5 shrink-0 text-amber-500"
                          />

                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            TRUST SECTION
        ========================================================= */}
        <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">

          <div className="mx-auto w-full max-w-7xl">

            <div className="mx-auto max-w-3xl text-center">

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-400">
                Our Promise
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Value first. Opportunity forward.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Long-term marketplaces are built on relationships. We want
                every interaction with Boostify to feel clear, useful,
                trustworthy, and worthwhile.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">

              {trustPoints.map((point) => {
                const Icon = point.icon;

                return (
                  <article
                    key={point.title}
                    className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-7"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10">
                      <Icon
                        aria-hidden="true"
                        className="h-6 w-6 text-amber-400"
                      />
                    </div>

                    <h3 className="mt-5 text-xl font-bold">
                      {point.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                      {point.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            ADDITIONAL SERVICES
        ========================================================= */}
        <section className="w-full bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-10 lg:py-24 dark:bg-slate-950">

          <div className="mx-auto w-full max-w-7xl">

            <div className="mx-auto max-w-3xl text-center">

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-600 dark:text-amber-400">
                More Possibilities
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Designed to grow with you.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300">
                Start where you are and keep building. Boostify is designed
                to support different stages of your digital journey.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">

              {additionalServices.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 sm:p-7"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-400/10">
                      <Icon
                        aria-hidden="true"
                        className="h-6 w-6 text-amber-600 dark:text-amber-400"
                      />
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {service.description}
                    </p>

                    <ul className="mt-5 space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300"
                        >
                          <CheckCircleIcon
                            aria-hidden="true"
                            className="h-5 w-5 shrink-0 text-amber-500"
                          />

                          {feature}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            BENEFITS
        ========================================================= */}
        <section className="w-full bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-10 lg:py-24 dark:bg-slate-900">

          <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-600 dark:text-amber-400">
                Why Boostify
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
                Built for value. Driven by opportunity.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8">
                We are building Boostify with a simple idea: digital
                commerce should create meaningful value for everyone involved.
              </p>

              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                Customers should be able to discover products they value.
                Creators should have opportunities to share what they know.
                And the marketplace should become stronger as the community
                grows.
              </p>

              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-slate-950 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-950/20 dark:bg-amber-400 dark:text-slate-950 dark:hover:bg-amber-500"
                >
                  Our Story
                </Link>
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 p-6 text-slate-950 shadow-xl sm:p-8 lg:p-10">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/30">
                <ShieldCheckIcon
                  aria-hidden="true"
                  className="h-7 w-7"
                />
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                What you can expect from Boostify
              </h3>

              <ul className="mt-6 space-y-4">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3"
                  >
                    <CheckCircleIcon
                      aria-hidden="true"
                      className="mt-0.5 h-6 w-6 shrink-0"
                    />

                    <span className="font-medium">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* =========================================================
            JOURNEY
        ========================================================= */}
        <section className="w-full bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-10 lg:py-24 dark:bg-slate-950">

          <div className="mx-auto w-full max-w-7xl">

            <div className="mx-auto max-w-3xl text-center">

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-600 dark:text-amber-400">
                The Boostify Journey
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
                Discover. Create. Connect. Grow.
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
                Your journey with Boostify can begin with one simple step.
              </p>
            </div>

            <div className="relative mt-12">

              <div
                aria-hidden="true"
                className="absolute left-0 right-0 top-8 hidden h-px bg-slate-200 lg:block dark:bg-slate-800"
              />

              <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

                {journeySteps.map((step) => (
                  <article
                    key={step.number}
                    className="relative rounded-2xl border border-slate-200 bg-white p-6 text-center dark:border-slate-800 dark:bg-slate-950"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-amber-400 text-lg font-extrabold text-slate-950 shadow-md dark:border-slate-950">
                      {step.number}
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {step.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 px-4 py-16 text-center text-slate-950 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3),transparent_65%)]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-white/10 blur-3xl"
          />

          <div className="relative z-10 mx-auto w-full max-w-4xl">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/25">
              <RocketLaunchIcon
                aria-hidden="true"
                className="h-7 w-7"
              />
            </div>

            <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-slate-900/70">
              Built for Value. Driven by Opportunity.
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Discover. Create. Connect. Grow.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-900/80 sm:text-lg sm:leading-8">
              Find something useful. Share something valuable. Connect
              with opportunity. Build something meaningful with Boostify.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

              <Link
                to="/marketplace"
                className="inline-flex min-h-[52px] w-full max-w-xs items-center justify-center rounded-xl bg-slate-950 px-7 py-3 text-sm font-bold text-white shadow-lg transition-all hover:bg-slate-800 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-slate-950/20 sm:w-auto"
              >
                Explore Marketplace
              </Link>

              <Link
                to="/register"
                className="inline-flex min-h-[52px] w-full max-w-xs items-center justify-center rounded-xl border-2 border-slate-950 px-7 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-slate-950 hover:text-white focus:outline-none focus:ring-4 focus:ring-slate-950/20 sm:w-auto"
              >
                Join Boostify
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

export default ServicePage;
