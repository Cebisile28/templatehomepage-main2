
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
  CheckCircleIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const values = [
  {
    title: "Creator Empowerment",
    description:
      "We want creators to have the opportunity to turn their knowledge, skills, and creativity into something valuable.",
    icon: LightBulbIcon,
  },
  {
    title: "Trust & Quality",
    description:
      "We believe long-term marketplaces are built through transparency, reliable experiences, and products that provide genuine value.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Community Growth",
    description:
      "We want buyers and sellers to grow together through creativity, collaboration, and new digital opportunities.",
    icon: UsersIcon,
  },
];

const experiences = [
  {
    number: "01",
    title: "Discover",
    description:
      "Explore digital products, resources, templates, tools, and ideas created by people with something valuable to share.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85",
    alt: "Creative professional working on a laptop",
    icon: ShoppingBagIcon,
  },
  {
    number: "02",
    title: "Create & Sell",
    description:
      "Turn your expertise and creativity into digital products and introduce them to customers looking for solutions.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
    alt: "Small business team working together",
    icon: RocketLaunchIcon,
  },
  {
    number: "03",
    title: "Grow Together",
    description:
      "Build relationships, improve your products, discover new opportunities, and become part of the Boostify community.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85",
    alt: "Colleagues collaborating around a table",
    icon: UserGroupIcon,
  },
];

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Boostify | Discover, Connect and Grow</title>

        <meta
          name="description"
          content="Learn about Boostify, a digital marketplace connecting creators, entrepreneurs, sellers and customers through useful products, resources and opportunities."
        />

        <meta
          name="keywords"
          content="Boostify marketplace, digital products, creators, sellers, buyers, online marketplace, digital business"
        />

        <meta name="author" content="Boostify Marketplace" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <main className="w-full overflow-x-hidden bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">

        {/* =====================================================
            HERO SECTION
        ====================================================== */}
        <section className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-slate-950 sm:min-h-[620px]">

          {/* Clear original background photograph */}
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=90"
            alt="A team working together and sharing ideas"
            aria-hidden="true"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          />

          {/* Light overlay only, keeping the photograph natural */}
          <div className="absolute inset-0 -z-10 bg-black/20" />

          <div className="mx-auto w-full max-w-7xl px-5 py-24 text-center sm:px-8 md:py-32 lg:px-10">

            <div className="mx-auto max-w-4xl">

              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/40 bg-black/20 px-4 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur-[2px]">
                <SparklesIcon className="h-4 w-4 text-sky-300" />
                About Boostify Marketplace
              </div>

              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
                Where ideas become
                <span className="text-sky-300"> opportunities.</span>
              </h1>

              <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white drop-shadow-md sm:text-lg md:text-xl">
                Boostify is a digital marketplace built to connect people who
                create with people who need. We believe great digital products
                should be easier to discover, easier to share, and easier to
                turn into opportunities.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

                <Link
                  to="/marketplace"
                  className="inline-flex min-h-14 items-center justify-center rounded-xl bg-sky-600 px-7 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-sky-700"
                >
                  Explore Marketplace
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>

                <Link
                  to="/register"
                  className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/70 bg-black/20 px-7 py-4 font-bold text-white shadow-sm backdrop-blur-[2px] transition hover:bg-white hover:text-slate-900"
                >
                  Become a Seller
                </Link>

              </div>

              <div className="mt-9 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-white drop-shadow-md">

                <span className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-sky-300" />
                  For buyers and sellers
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-sky-300" />
                  Discover new possibilities
                </span>

              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            OUR STORY
        ====================================================== */}
        <section className="bg-white px-5 py-20 transition-colors duration-300 dark:bg-slate-950 sm:px-8 lg:px-10">

          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

            <div className="relative">

              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
                alt="A small business team sharing ideas and working together"
                loading="lazy"
                className="h-[350px] w-full rounded-3xl object-cover shadow-xl sm:h-[460px]"
              />

              <div className="absolute -bottom-6 -right-3 max-w-xs rounded-2xl border border-slate-100 bg-white p-5 shadow-xl dark:border-slate-700 dark:bg-slate-900">

                <div className="flex items-center gap-3">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100 dark:bg-sky-950">
                    <HeartIcon className="h-6 w-6 text-sky-700 dark:text-sky-300" />
                  </div>

                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">
                      Built around people
                    </p>

                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Creativity and opportunity.
                    </p>
                  </div>

                </div>
              </div>
            </div>

            <div className="pt-5 lg:pt-0">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
                Our Story
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-4xl">
                Built around people, creativity, and opportunity.
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300">
                Boostify started with a simple idea: talented people should
                have a place where they can turn their knowledge, creativity,
                and skills into digital products that can reach customers.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
                At the same time, customers deserve a marketplace where they
                can discover useful products and resources without feeling
                overwhelmed.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
                That's why Boostify is designed around both sides of the
                marketplace — helping creators grow while helping customers
                find products that genuinely add value.
              </p>

              <Link
                to="/marketplace"
                className="mt-8 inline-flex items-center gap-2 font-bold text-sky-700 transition hover:text-sky-900 dark:text-sky-400 dark:hover:text-sky-300"
              >
                Discover the marketplace
                <ArrowRightIcon className="h-5 w-5" />
              </Link>

            </div>
          </div>
        </section>

        {/* =====================================================
            OUR PURPOSE
        ====================================================== */}
        <section className="bg-slate-50 px-5 py-20 transition-colors duration-300 dark:bg-slate-900 sm:px-8 lg:px-10">

          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
                Our Purpose
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-4xl">
                More than a place to browse.
                <span className="text-sky-600 dark:text-sky-400">
                  {" "}A place to discover opportunities.
                </span>
              </h2>

              <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">
                We want Boostify to become a place where buyers return because
                they trust the experience — and where sellers stay because
                they feel supported as they build something meaningful.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">

                {[
                  { number: "01", label: "Discover" },
                  { number: "02", label: "Create" },
                  { number: "03", label: "Connect" },
                  { number: "04", label: "Grow" },
                ].map((item) => (

                  <div
                    key={item.number}
                    className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-950"
                  >
                    <p className="text-2xl font-extrabold text-sky-600 dark:text-sky-400">
                      {item.number}
                    </p>

                    <p className="mt-2 font-semibold text-slate-900 dark:text-white">
                      {item.label}
                    </p>
                  </div>

                ))}

              </div>
            </div>

            <div className="relative">

              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85"
                alt="People collaborating and learning together around a table"
                loading="lazy"
                className="h-[360px] w-full rounded-3xl object-cover shadow-xl sm:h-[450px]"
              />

              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/5" />

            </div>

          </div>
        </section>

        {/* =====================================================
            MISSION AND VALUES
        ====================================================== */}
        <section className="bg-white px-5 py-20 transition-colors duration-300 dark:bg-slate-950 sm:px-8 lg:px-10">

          <div className="mx-auto max-w-7xl">

            <div className="mx-auto max-w-3xl text-center">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
                What We Believe
              </p>

              <h2 className="mt-4 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                Building relationships, not just transactions.
              </h2>

              <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
                Every marketplace interaction should create value for
                someone. Our goal is to build an experience people can trust
                and return to.
              </p>

            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">

              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <article
                    key={value.title}
                    className="group rounded-2xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:border-sky-300 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900 dark:hover:border-sky-500"
                  >

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 transition group-hover:bg-sky-200 dark:bg-sky-950 dark:group-hover:bg-sky-900">
                      <Icon className="h-7 w-7 text-sky-700 dark:text-sky-300" />
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                      {value.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                      {value.description}
                    </p>

                  </article>
                );
              })}

            </div>
          </div>
        </section>

        {/* =====================================================
            THE BOOSTIFY EXPERIENCE
        ====================================================== */}
        <section className="bg-slate-50 px-5 py-20 transition-colors duration-300 dark:bg-slate-900 sm:px-8 lg:px-10">

          <div className="mx-auto max-w-7xl">

            <div className="mx-auto max-w-3xl text-center">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
                The Boostify Experience
              </p>

              <h2 className="mt-4 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                Simple for buyers. Powerful for creators.
              </h2>

              <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
                Discover what is possible, share what you create and find
                opportunities to grow.
              </p>

            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">

              {experiences.map((experience) => {
                const Icon = experience.icon;

                return (
                  <article
                    key={experience.number}
                    className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-700 dark:bg-slate-950"
                  >

                    <div className="relative overflow-hidden">
                      <img
                        src={experience.image}
                        alt={experience.alt}
                        loading="lazy"
                        className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
                      />

                      <div className="absolute left-5 top-5 rounded-lg bg-sky-600 px-4 py-2 text-sm font-bold text-white shadow-lg">
                        {experience.number}
                      </div>
                    </div>

                    <div className="p-7">

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 dark:bg-sky-950">
                        <Icon className="h-6 w-6 text-sky-700 dark:text-sky-300" />
                      </div>

                      <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                        {experience.title}
                      </h3>

                      <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                        {experience.description}
                      </p>

                    </div>
                  </article>
                );
              })}

            </div>
          </div>
        </section>

        {/* =====================================================
            OUR COMMITMENT
        ====================================================== */}
        <section className="bg-white px-5 py-20 transition-colors duration-300 dark:bg-slate-950 sm:px-8 lg:px-10">

          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

            <div className="relative order-2 lg:order-1">

              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85"
                alt="Business professionals having a collaborative discussion"
                loading="lazy"
                className="h-[350px] w-full rounded-3xl object-cover shadow-xl sm:h-[430px]"
              />

            </div>

            <div className="order-1 lg:order-2">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
                Our Commitment
              </p>

              <h2 className="mt-4 text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                We're building for the long term.
              </h2>

              <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">
                We don't want Boostify to be a place people visit once. We want
                it to become a marketplace people trust, creators grow with,
                customers return to, and businesses can build relationships
                through.
              </p>

              <div className="mt-8 space-y-5">

                <div className="flex gap-4">

                  <CheckCircleIcon className="mt-1 h-6 w-6 shrink-0 text-sky-600 dark:text-sky-400" />

                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">
                      Trust
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      Build confidence through better experiences.
                    </p>
                  </div>

                </div>

                <div className="flex gap-4">

                  <CheckCircleIcon className="mt-1 h-6 w-6 shrink-0 text-sky-600 dark:text-sky-400" />

                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">
                      Value
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      Make every interaction useful and meaningful.
                    </p>
                  </div>

                </div>

                <div className="flex gap-4">

                  <CheckCircleIcon className="mt-1 h-6 w-6 shrink-0 text-sky-600 dark:text-sky-400" />

                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">
                      Growth
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      Create opportunities for everyone involved.
                    </p>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CALL TO ACTION
        ====================================================== */}
        <section className="relative isolate overflow-hidden bg-sky-950 px-5 py-20 text-center text-white sm:px-8 md:py-24">

          <div
            aria-hidden="true"
            className="absolute -right-32 -top-32 -z-10 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-32 -left-32 -z-10 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl"
          />

          <div className="mx-auto max-w-3xl">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
              <HeartIcon className="h-8 w-8 text-sky-300" />
            </div>

            <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-sky-300">
              Your next opportunity starts here
            </p>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
              Be part of the Boostify journey.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-sky-100">
              Whether you're looking for your next useful digital product or
              ready to share something you've created, there's a place for you
              at Boostify.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

              <Link
                to="/marketplace"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-sky-500 px-8 py-4 font-bold text-white transition hover:bg-sky-600"
              >
                <ShoppingBagIcon className="h-5 w-5" />
                Explore Marketplace
              </Link>

              <Link
                to="/register"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/50 px-8 py-4 font-bold text-white transition hover:bg-white hover:text-sky-950"
              >
                Join Boostify
                <ArrowRightIcon className="h-5 w-5" />
              </Link>

            </div>

          </div>
        </section>

      </main>
    </>
  );
};

export default AboutPage;



