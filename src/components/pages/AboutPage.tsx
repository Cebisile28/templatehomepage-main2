import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  UsersIcon,
  LightBulbIcon,
  HeartIcon,
  ShoppingBagIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>
          About Boostify | Digital Marketplace for Creators & Buyers
        </title>

        <meta
          name="description"
          content="Discover the story behind Boostify Marketplace — a digital marketplace connecting creators, entrepreneurs, sellers, and customers through useful digital products and opportunities."
        />

        <meta
          name="keywords"
          content="Boostify marketplace, digital products, creators, sellers, buyers, online marketplace, digital business"
        />

        <meta name="author" content="Boostify Marketplace" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <main className="w-full overflow-x-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
        {/* =========================================================
            HERO
        ========================================================= */}
        <section className="relative overflow-hidden bg-slate-950 px-4 py-20 text-white sm:px-6 md:py-24 lg:px-8 lg:py-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-amber-400/20 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-5xl text-center">
            {/* =====================================================
                BOOSTIFY BRAND
            ====================================================== */}
            <Link
              to="/"
              aria-label="Boostify home"
              className="mx-auto inline-flex items-center justify-center gap-3 rounded-2xl px-3 py-2 transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-amber-400/30"
            >
              <span
                aria-hidden="true"
                className="text-5xl leading-none text-amber-400 drop-shadow-[0_0_18px_rgba(251,191,36,0.35)] sm:text-6xl"
              >
                ⚡
              </span>

              <span className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Boostify
              </span>
            </Link>

            <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
              About Boostify Marketplace
            </p>

            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Where ideas become
              <span className="text-amber-400"> opportunities.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Boostify is a digital marketplace built to connect people who
              create with people who need. We believe great digital products
              should be easier to discover, easier to share, and easier to
              turn into opportunities.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/marketplace"
                className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-amber-400 px-7 py-3 text-sm font-bold text-slate-950 shadow-lg transition-all hover:bg-amber-500 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-amber-400/30"
              >
                Explore Marketplace

                <ArrowRightIcon
                  aria-hidden="true"
                  className="ml-2 h-5 w-5"
                />
              </Link>

              <Link
                to="/register"
                className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-slate-600 bg-slate-900 px-7 py-3 text-sm font-bold text-white transition-all hover:border-amber-400 hover:text-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-400/20"
              >
                Become a Seller
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================
            OUR STORY
        ========================================================= */}
        <section className="bg-slate-50 px-4 py-16 text-slate-900 sm:px-6 md:py-20 lg:px-8 dark:bg-slate-950 dark:text-white">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-600 dark:text-amber-400">
                Our Story
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                Built around people, creativity, and opportunity.
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-700 dark:text-slate-300">
                Boostify started with a simple idea: talented people should
                have a place where they can turn their knowledge, creativity,
                and skills into digital products that can reach customers.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-700 dark:text-slate-300">
                At the same time, customers deserve a marketplace where they
                can discover useful products and resources without feeling
                overwhelmed.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-700 dark:text-slate-300">
                That's why Boostify is designed around both sides of the
                marketplace — helping creators grow while helping customers
                find products that genuinely add value.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl ring-1 ring-slate-900/10 sm:p-10 dark:bg-slate-900">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400">
                <HeartIcon
                  aria-hidden="true"
                  className="h-7 w-7 text-slate-950"
                />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                More than a marketplace.
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                We want Boostify to become a place where buyers return because
                they trust the experience — and where sellers stay because
                they feel supported as they build something meaningful.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-white/10 p-4">
                  <p className="text-2xl font-bold text-amber-400">01</p>
                  <p className="mt-1 text-sm text-slate-300">Discover</p>
                </div>

                <div className="rounded-xl bg-white/10 p-4">
                  <p className="text-2xl font-bold text-amber-400">02</p>
                  <p className="mt-1 text-sm text-slate-300">Create</p>
                </div>

                <div className="rounded-xl bg-white/10 p-4">
                  <p className="text-2xl font-bold text-amber-400">03</p>
                  <p className="mt-1 text-sm text-slate-300">Connect</p>
                </div>

                <div className="rounded-xl bg-white/10 p-4">
                  <p className="text-2xl font-bold text-amber-400">04</p>
                  <p className="mt-1 text-sm text-slate-300">Grow</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            MISSION & VALUES
        ========================================================= */}
        <section className="bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8 dark:bg-slate-950">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-600 dark:text-amber-400">
                What We Believe
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
                Building relationships, not just transactions.
              </h2>

              <p className="mt-5 text-slate-600 dark:text-slate-300">
                Every marketplace interaction should create value for
                someone. Our goal is to build an experience people can trust
                and return to.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-400/10">
                  <LightBulbIcon
                    aria-hidden="true"
                    className="h-6 w-6 text-amber-600 dark:text-amber-400"
                  />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                  Creator Empowerment
                </h3>

                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  We want creators to have the opportunity to turn their
                  knowledge, skills, and creativity into something valuable.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-400/10">
                  <ShieldCheckIcon
                    aria-hidden="true"
                    className="h-6 w-6 text-amber-600 dark:text-amber-400"
                  />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                  Trust & Quality
                </h3>

                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  We believe long-term marketplaces are built through
                  transparency, reliable experiences, and products that
                  provide genuine value.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-400/10">
                  <UsersIcon
                    aria-hidden="true"
                    className="h-6 w-6 text-amber-600 dark:text-amber-400"
                  />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                  Community Growth
                </h3>

                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  We want buyers and sellers to grow together through
                  creativity, collaboration, and new digital opportunities.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* =========================================================
            HOW IT WORKS
        ========================================================= */}
        <section className="bg-slate-50 px-4 py-16 sm:px-6 md:py-20 lg:px-8 dark:bg-slate-900">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-600 dark:text-amber-400">
                The Boostify Experience
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
                Simple for buyers. Powerful for creators.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <article className="rounded-2xl bg-white p-7 shadow-sm dark:bg-slate-950">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 font-black text-slate-950">
                  1
                </div>

                <ShoppingBagIcon
                  aria-hidden="true"
                  className="mt-6 h-8 w-8 text-amber-500"
                />

                <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
                  Discover
                </h3>

                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  Explore digital products, resources, templates, tools, and
                  ideas created by people with something valuable to share.
                </p>
              </article>

              <article className="rounded-2xl bg-white p-7 shadow-sm dark:bg-slate-950">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 font-black text-slate-950">
                  2
                </div>

                <RocketLaunchIcon
                  aria-hidden="true"
                  className="mt-6 h-8 w-8 text-amber-500"
                />

                <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
                  Create & Sell
                </h3>

                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  Turn your expertise and creativity into digital products
                  and introduce them to customers looking for solutions.
                </p>
              </article>

              <article className="rounded-2xl bg-white p-7 shadow-sm dark:bg-slate-950">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 font-black text-slate-950">
                  3
                </div>

                <UserGroupIcon
                  aria-hidden="true"
                  className="mt-6 h-8 w-8 text-amber-500"
                />

                <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
                  Grow Together
                </h3>

                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  Build relationships, improve your products, discover new
                  opportunities, and become part of the growing Boostify
                  community.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* =========================================================
            WHY BOOSTIFY
        ========================================================= */}
        <section className="bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8 dark:bg-slate-950">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 dark:bg-amber-400/10">
              <HeartIcon
                aria-hidden="true"
                className="h-7 w-7 text-amber-600 dark:text-amber-400"
              />
            </div>

            <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
              We're building for the long term.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              We don't want Boostify to be a place people visit once. We want
              it to become a marketplace people trust, creators grow with,
              customers return to, and businesses can build relationships
              through.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
                <p className="font-bold text-amber-500">TRUST</p>

                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Build confidence through better experiences.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
                <p className="font-bold text-amber-500">VALUE</p>

                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Make every interaction useful and meaningful.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
                <p className="font-bold text-amber-500">GROWTH</p>

                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Create opportunities for everyone involved.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black px-4 py-20 text-white sm:px-6 md:py-24 lg:px-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-amber-400/15 blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div
              aria-hidden="true"
              className="mx-auto mb-6 text-5xl leading-none text-amber-400 drop-shadow-[0_0_18px_rgba(251,191,36,0.35)]"
            >
              ⚡
            </div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
              Your next opportunity starts here
            </p>

            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl md:text-5xl">
              Be part of the Boostify journey.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Whether you're looking for your next useful digital product or
              ready to share something you've created, there's a place for you
              at Boostify.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/marketplace"
                className="inline-flex min-h-[50px] items-center justify-center rounded-xl bg-amber-400 px-7 py-3 text-sm font-bold text-slate-950 shadow-lg transition-all hover:bg-amber-500 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-amber-400/30"
              >
                <ShoppingBagIcon
                  aria-hidden="true"
                  className="mr-2 h-5 w-5"
                />

                Explore Products
              </Link>

              <Link
                to="/register"
                className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-amber-400 px-7 py-3 text-sm font-bold text-amber-400 transition-all hover:bg-amber-400 hover:text-slate-950 focus:outline-none focus:ring-4 focus:ring-amber-400/20"
              >
                Become a Seller

                <ArrowRightIcon
                  aria-hidden="true"
                  className="ml-2 h-5 w-5"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;

