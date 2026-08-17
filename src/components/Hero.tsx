```tsx
import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-white
        text-gray-900
        dark:bg-gray-900
        dark:text-white
      "
    >
      {/* Background Glow Effects */}
      <div
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
          animate-pulse
          sm:h-80
          sm:w-80
          lg:h-96
          lg:w-96
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-24
          -left-24
          h-64
          w-64
          rounded-full
          bg-purple-500/20
          blur-3xl
          animate-pulse
          sm:h-80
          sm:w-80
          lg:h-96
          lg:w-96
        "
      />

      {/* Main Container */}
      <div
        className="
          relative
          mx-auto
          flex
          w-full
          max-w-7xl
          flex-col
          items-center
          px-4
          pb-16
          pt-28
          sm:px-6
          sm:pb-20
          sm:pt-32
          md:px-10
          lg:min-h-screen
          lg:flex-row
          lg:justify-between
          lg:px-8
          lg:pb-20
          lg:pt-28
        "
      >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="
            w-full
            max-w-2xl
            text-center
            lg:w-1/2
            lg:text-left
          "
        >
          {/* Small Label */}
          <div
            className="
              mb-5
              inline-flex
              items-center
              rounded-full
              border
              border-amber-400/30
              bg-amber-400/10
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-wider
              text-amber-500
              sm:text-sm
            "
          >
            ⚡ Grow Smarter with Boostify
          </div>

          {/* Headline */}
          <h1
            className="
              text-3xl
              font-extrabold
              leading-[1.15]
              tracking-tight
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              xl:text-7xl
            "
          >
            Supercharge Your Business with{" "}
            <span className="text-amber-400">
              ⚡ Boostify
            </span>
          </h1>

          {/* Subtext */}
          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              text-base
              leading-7
              text-gray-600
              sm:text-lg
              sm:leading-8
              lg:mx-0
              lg:text-xl
            "
          >
            Modern digital tools and powerful templates designed
            to help creators, startups, and businesses scale faster
            and smarter.
          </p>

          {/* Buttons */}
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
            <a
              href="/services"
              className="
                inline-flex
                min-h-[50px]
                w-full
                items-center
                justify-center
                rounded-lg
                bg-amber-400
                px-6
                py-3
                text-sm
                font-semibold
                text-black
                shadow-lg
                transition-all
                duration-300
                hover:bg-amber-500
                hover:shadow-xl
                sm:w-auto
                sm:px-8
                sm:text-base
                sm:hover:scale-105
              "
            >
              Get Started

              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>

            <a
              href="/about"
              className="
                inline-flex
                min-h-[50px]
                w-full
                items-center
                justify-center
                rounded-lg
                border
                border-gray-300
                px-6
                py-3
                text-sm
                font-semibold
                text-gray-900
                transition-all
                duration-300
                hover:border-amber-400
                hover:text-amber-500
                dark:border-gray-600
                dark:text-white
                sm:w-auto
                sm:px-8
                sm:text-base
              "
            >
              Learn More
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="
            mt-12
            flex
            w-full
            justify-center
            sm:mt-16
            lg:mt-0
            lg:w-1/2
            lg:pl-8
          "
        >
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-xl">
            {/* Image Glow */}
            <div
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
              alt="Boostify Digital Growth"
              loading="eager"
              fetchPriority="high"
              className="
                relative
                block
                h-auto
                w-full
                rounded-2xl
                object-contain
                shadow-2xl
                transition-all
                duration-500
                hover:shadow-amber-400/30
              "
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient Divider */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-20
          w-full
          bg-gradient-to-t
          from-white
          to-transparent
          dark:from-gray-900
        "
      />
    </section>
  );
};

export default Hero;
```

