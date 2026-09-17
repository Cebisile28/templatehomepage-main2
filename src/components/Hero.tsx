import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-heading"
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        text-slate-900
        dark:bg-slate-950
        dark:text-white
      "
    >
      {/* Background decorations */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-64
          w-64
          rounded-full
          bg-amber-400/20
          blur-3xl
          sm:h-80
          sm:w-80
          lg:h-96
          lg:w-96
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-24
          -left-24
          h-64
          w-64
          rounded-full
          bg-purple-500/10
          blur-3xl
          sm:h-80
          sm:w-80
          lg:h-96
          lg:w-96
        "
      />

      {/* Main content */}
      <div
        className="
          relative
          mx-auto
          flex
          w-full
          max-w-7xl
          flex-col
          items-center
          gap-10
          px-4
          pb-16
          pt-24
          sm:gap-12
          sm:px-6
          sm:pb-20
          sm:pt-28
          md:px-10
          lg:min-h-[calc(100vh-5rem)]
          lg:flex-row
          lg:justify-between
          lg:gap-12
          lg:px-8
          lg:pb-20
          lg:pt-24
        "
      >
        {/* Left content */}
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, x: -30 }
          }
          animate={
            shouldReduceMotion
              ? undefined
              : { opacity: 1, x: 0 }
          }
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            ease: "easeOut",
          }}
          className="
            relative
            z-10
            w-full
            max-w-2xl
            text-center
            lg:w-1/2
            lg:text-left
          "
        >
          {/* Brand statement */}
          <p
            className="
              text-sm
              font-bold
              uppercase
              tracking-[0.18em]
              text-amber-600
              dark:text-amber-400
            "
          >
            Built for Value. Driven by Opportunity.
          </p>

          {/* Main heading */}
          <h1
            id="hero-heading"
            className="
              mt-4
              text-4xl
              font-extrabold
              leading-[1.08]
              tracking-tight
              sm:text-5xl
              md:text-6xl
              lg:text-6xl
              xl:text-7xl
            "
          >
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

          {/* Description */}
          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              text-base
              leading-7
              text-slate-600
              sm:text-lg
              sm:leading-8
              lg:mx-0
              lg:text-xl
              dark:text-slate-300
            "
          >
            Boostify is a digital marketplace built for people
            who create, sell, discover, and use digital products.
            Find useful products, build your storefront, connect
            with opportunities, and grow your digital journey.
          </p>

          {/* CTA buttons */}
          <div
            className="
              mt-8
              flex
              w-full
              flex-col
              gap-3
              sm:flex-row
              sm:justify-center
              lg:justify-start
            "
          >
            <Link
              to="/marketplace"
              className="
                inline-flex
                min-h-[50px]
                w-full
                items-center
                justify-center
                rounded-xl
                bg-amber-400
                px-6
                py-3
                text-sm
                font-bold
                text-slate-950
                shadow-lg
                transition-all
                duration-200
                hover:bg-amber-500
                hover:shadow-xl
                focus:outline-none
                focus:ring-4
                focus:ring-amber-400/30
                sm:w-auto
                sm:px-8
                sm:text-base
              "
            >
              Explore Marketplace

              <ArrowRightIcon
                aria-hidden="true"
                className="ml-2 h-5 w-5"
              />
            </Link>

            <Link
              to="/register"
              className="
                inline-flex
                min-h-[50px]
                w-full
                items-center
                justify-center
                rounded-xl
                border
                border-slate-300
                bg-white
                px-6
                py-3
                text-sm
                font-bold
                text-slate-900
                transition-all
                duration-200
                hover:border-amber-400
                hover:text-amber-600
                focus:outline-none
                focus:ring-4
                focus:ring-amber-400/20
                sm:w-auto
                sm:px-8
                sm:text-base
                dark:border-slate-700
                dark:bg-slate-900
                dark:text-white
                dark:hover:border-amber-400
                dark:hover:text-amber-400
              "
            >
              Start Selling
            </Link>
          </div>

          {/* Brand journey */}
          <div
            className="
              mt-8
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-4
              gap-y-2
              text-xs
              font-bold
              uppercase
              tracking-wide
              text-slate-500
              sm:text-sm
              lg:justify-start
              dark:text-slate-400
            "
          >
            <span>Discover</span>

            <span
              aria-hidden="true"
              className="text-amber-400"
            >
              •
            </span>

            <span>Create</span>

            <span
              aria-hidden="true"
              className="text-amber-400"
            >
              •
            </span>

            <span>Connect</span>

            <span
              aria-hidden="true"
              className="text-amber-400"
            >
              •
            </span>

            <span>Grow</span>
          </div>
        </motion.div>

        {/* Right image */}
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, scale: 0.96 }
          }
          animate={
            shouldReduceMotion
              ? undefined
              : { opacity: 1, scale: 1 }
          }
          transition={{
            duration: shouldReduceMotion ? 0 : 0.7,
            delay: shouldReduceMotion ? 0 : 0.1,
            ease: "easeOut",
          }}
          className="
            relative
            z-10
            flex
            w-full
            justify-center
            lg:w-1/2
            lg:justify-end
          "
        >
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-xl">
            {/* Image glow */}
            <div
              aria-hidden="true"
              className="
                absolute
                inset-4
                rounded-3xl
                bg-amber-400/20
                blur-2xl
              "
            />

            <img
              src="/optimized/images_website-image.webp"
              alt="Boostify digital marketplace"
              width={900}
              height={700}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="
                relative
                block
                h-auto
                w-full
                rounded-2xl
                object-contain
                shadow-2xl
              "
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom divider */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-16
          w-full
          bg-gradient-to-t
          from-white
          to-transparent
          dark:from-slate-950
        "
      />
    </section>
  );
};

export default Hero;
