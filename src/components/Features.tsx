import React from "react";
import {
  DevicePhoneMobileIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ArrowTrendingUpIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { motion, useReducedMotion } from "framer-motion";

interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}

const features: Feature[] = [
  {
    title: "Useful Digital Products",
    description:
      "Discover templates, resources, tools, and other digital products designed to help you work smarter and achieve more.",
    icon: ShoppingBagIcon,
  },
  {
    title: "Built for Creators",
    description:
      "Turn your knowledge, creativity, and digital work into products that people can discover and purchase.",
    icon: SparklesIcon,
  },
  {
    title: "Simple Selling",
    description:
      "Create your seller account and build your digital storefront without unnecessary complexity.",
    icon: UserGroupIcon,
  },
  {
    title: "Mobile Friendly",
    description:
      "Browse, shop, and manage your digital business from phones, tablets, and desktop devices.",
    icon: DevicePhoneMobileIcon,
  },
  {
    title: "A Growing Marketplace",
    description:
      "Connect buyers looking for useful digital products with creators who have something valuable to offer.",
    icon: ArrowTrendingUpIcon,
  },
  {
    title: "Designed for Trust",
    description:
      "A clean marketplace experience helps buyers discover products confidently and helps sellers present their work professionally.",
    icon: ShieldCheckIcon,
  },
];

const Features: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="
        w-full
        overflow-hidden
        bg-slate-50
        px-4
        py-16
        transition-colors
        duration-300
        dark:bg-slate-900
        sm:px-6
        sm:py-20
        md:px-8
        lg:px-10
        lg:py-24
      "
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-600 dark:text-amber-400">
            Why Boostify
          </p>

          <h2
            id="features-heading"
            className="
              mt-3
              text-3xl
              font-bold
              leading-tight
              tracking-tight
              text-slate-900
              dark:text-white
              sm:text-4xl
              md:text-5xl
            "
          >
            One marketplace. More opportunities.
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-slate-600
              dark:text-slate-300
              sm:text-lg
              sm:leading-8
            "
          >
            Boostify is designed to make digital commerce easier
            for both sides of the marketplace — people looking for
            useful products and creators ready to sell their work.
          </p>
        </div>

        {/* Feature cards */}
        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-5
            sm:mt-12
            sm:grid-cols-2
            sm:gap-6
            lg:grid-cols-3
            lg:gap-7
          "
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.title}
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 20,
                      }
                }
                whileInView={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : {
                        opacity: 1,
                        y: 0,
                      }
                }
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : {
                        duration: 0.45,
                        delay: index * 0.05,
                        ease: "easeOut",
                      }
                }
                className="
                  group
                  flex
                  h-full
                  flex-col
                  rounded-2xl
                  border
                  border-slate-200
                  border-t-4
                  border-t-amber-400
                  bg-white
                  p-6
                  shadow-sm
                  transition-shadow
                  duration-200
                  hover:shadow-lg
                  dark:border-slate-800
                  dark:bg-slate-950
                  sm:p-7
                "
              >
                <div
                  className="
                    mb-5
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-amber-100
                    dark:bg-amber-400/10
                  "
                >
                  <Icon
                    aria-hidden="true"
                    className="
                      h-6
                      w-6
                      text-amber-600
                      dark:text-amber-400
                    "
                  />
                </div>

                <h3
                  className="
                    text-xl
                    font-bold
                    leading-tight
                    text-slate-900
                    dark:text-white
                  "
                >
                  {feature.title}
                </h3>

                <p
                  className="
                    mt-3
                    flex-1
                    text-sm
                    leading-7
                    text-slate-600
                    dark:text-slate-300
                    sm:text-base
                  "
                >
                  {feature.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
 

