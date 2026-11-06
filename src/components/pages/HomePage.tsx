import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Squares2X2Icon,
  PaintBrushIcon,
  MegaphoneIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  CodeBracketIcon,
  ArrowRightIcon,
  LightBulbIcon,
  MagnifyingGlassIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const categories = [
  {
    name: "Templates",
    description: "Explore resources designed to help you get started.",
    icon: Squares2X2Icon,
    value: "Templates",
  },
  {
    name: "Design",
    description: "Find resources for your creative projects.",
    icon: PaintBrushIcon,
    value: "UI Design",
  },
  {
    name: "Marketing",
    description: "Resources to support your marketing activities.",
    icon: MegaphoneIcon,
    value: "Marketing",
  },
  {
    name: "Business",
    description: "Useful resources for your business journey.",
    icon: BriefcaseIcon,
    value: "Business",
  },
  {
    name: "Education",
    description: "Resources to support learning and development.",
    icon: AcademicCapIcon,
    value: "Education",
  },
  {
    name: "Development",
    description: "Resources for building and improving projects.",
    icon: CodeBracketIcon,
    value: "Development",
  },
];

const Homepage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const search = searchTerm.trim();

    if (search) {
      navigate(`/marketplace?search=${encodeURIComponent(search)}`);
    } else {
      navigate("/marketplace");
    }
  };

  return (
    <>
      <Helmet>
        <title>Home | Digital Resources</title>
        <meta
          name="description"
          content="Explore digital resources, templates, design materials, and tools to support your next idea."
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <main className="min-h-screen w-full overflow-x-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
        {/* HEADER */}
        <header className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
          <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <Link
              to="/"
              aria-label="Home"
              className="rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </header>

        {/* HERO */}
        <section className="relative overflow-hidden bg-slate-950 px-4 py-20 text-white sm:px-6 md:py-28 lg:px-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-amber-400/15 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Find the right resources for your next idea.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Explore digital resources and practical tools to help you learn,
              create, plan, and move your ideas forward.
            </p>

            <form
              onSubmit={handleSearch}
              className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 rounded-2xl bg-white p-3 shadow-xl sm:flex-row"
            >
              <label htmlFor="homepage-search" className="sr-only">
                Search resources
              </label>

              <div className="flex min-w-0 flex-1 items-center gap-3 px-3">
                <MagnifyingGlassIcon
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-slate-400"
                />

                <input
                  id="homepage-search"
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="What are you looking for?"
                  className="min-h-12 w-full border-0 bg-transparent text-slate-900 outline-none placeholder:text-slate-400 focus:ring-0"
                />
              </div>

              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-amber-400 px-7 py-3 font-bold text-slate-950 transition-colors hover:bg-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-400/40"
              >
                Search
                <ArrowRightIcon aria-hidden="true" className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="h-5 w-5 text-amber-400"
                />
                Explore useful resources
              </span>

              <span className="inline-flex items-center gap-2">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="h-5 w-5 text-amber-400"
                />
                Find inspiration for your ideas
              </span>
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section
          id="categories"
          className="bg-slate-50 px-4 py-16 sm:px-6 md:py-20 lg:px-8 dark:bg-slate-900"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                  Explore by category
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-slate-600 dark:text-slate-300">
                  Browse different areas to find resources that match your
                  interests, goals, and projects.
                </p>
              </div>

              <Link
                to="/marketplace"
                className="inline-flex items-center gap-2 self-start font-semibold text-amber-700 transition-colors hover:text-amber-800 sm:self-auto dark:text-amber-400 dark:hover:text-amber-300"
              >
                Explore resources
                <ArrowRightIcon aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => {
                const Icon = category.icon;

                return (
                  <Link
                    key={category.name}
                    to={`/marketplace?category=${encodeURIComponent(category.value)}`}
                    className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-amber-400/30 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-amber-400/50"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 transition-colors group-hover:bg-amber-200 dark:bg-amber-400/10 dark:group-hover:bg-amber-400/20">
                      <Icon
                        aria-hidden="true"
                        className="h-6 w-6 text-amber-700 dark:text-amber-400"
                      />
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                      {category.name}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                      {category.description}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-700 dark:text-amber-400">
                      Explore category
                      <ArrowRightIcon
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8 dark:bg-slate-950">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                Spend less time searching. Focus on what matters.
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-300">
                Finding the right resource can help you take the next step
                with confidence. Explore different categories, compare your
                options, and choose resources that suit your needs.
              </p>

              <Link
                to="/marketplace"
                className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-3 font-bold text-slate-950 transition-colors hover:bg-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-400/40"
              >
                Start exploring
                <ArrowRightIcon aria-hidden="true" className="h-5 w-5" />
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <article className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-400/10">
                  <Squares2X2Icon
                    aria-hidden="true"
                    className="h-6 w-6 text-amber-700 dark:text-amber-400"
                  />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
                  Different categories
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  Browse a range of topics and find resources relevant to your
                  interests.
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800 sm:mt-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-400/10">
                  <LightBulbIcon
                    aria-hidden="true"
                    className="h-6 w-6 text-amber-700 dark:text-amber-400"
                  />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
                  Ideas and inspiration
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  Discover possibilities and find a starting point for your
                  next project.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-slate-50 px-4 py-16 sm:px-6 md:py-20 lg:px-8 dark:bg-slate-900">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                A simple way to get started
              </h2>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                Follow a few simple steps to find resources that fit what
                you're working on.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <article className="rounded-2xl bg-white p-7 shadow-sm dark:bg-slate-950">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 font-black text-slate-950">
                  1
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                  Choose a category
                </h3>

                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  Start with a topic that matches your interests or the
                  project you want to work on.
                </p>
              </article>

              <article className="rounded-2xl bg-white p-7 shadow-sm dark:bg-slate-950">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 font-black text-slate-950">
                  2
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                  Explore your options
                </h3>

                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  Browse the available resources and look for options that
                  suit your needs.
                </p>
              </article>

              <article className="rounded-2xl bg-white p-7 shadow-sm dark:bg-slate-950">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 font-black text-slate-950">
                  3
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                  Take your next step
                </h3>

                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  Use what you find to support your learning, creativity, or
                  business goals.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black px-4 py-20 text-white sm:px-6 md:py-24 lg:px-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-amber-400/15 blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
              Your next step starts here.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Explore the available categories and find resources to help
              move your next idea forward.
            </p>

            <Link
              to="/marketplace"
              className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-amber-400 px-7 py-3 font-bold text-slate-950 shadow-lg transition-all hover:bg-amber-500 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-amber-400/40"
            >
              Continue exploring
              <ArrowRightIcon aria-hidden="true" className="h-5 w-5" />
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-slate-200 bg-white px-4 py-8 sm:px-6 lg:px-8 dark:border-slate-800 dark:bg-slate-950">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Discover resources for your next idea.
            </p>

            <Link
              to="/marketplace"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors hover:text-amber-600 dark:text-slate-300 dark:hover:text-amber-400"
            >
              Explore resources
              <ArrowRightIcon aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Homepage;