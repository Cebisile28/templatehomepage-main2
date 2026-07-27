import React from "react";
import { Helmet } from "react-helmet-async";
import {
  ShoppingBagIcon,
  UserGroupIcon,
  ArrowTrendingUpIcon,
  SparklesIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const ServicePage: React.FC = () => {
  const coreServices = [
    {
      icon: ShoppingBagIcon,
      title: "Digital Marketplace",
      description:
        "Discover high-quality digital products from trusted sellers. Browse templates, business resources, digital tools, and more.",
      features: [
        "Instant digital downloads",
        "Secure transactions",
        "Wide product selection",
      ],
    },
    {
      icon: UserGroupIcon,
      title: "Seller Platform",
      description:
        "Turn your knowledge and creativity into income by selling digital products through Boostify.",
      features: [
        "Seller accounts",
        "Product management",
        "Sales tracking",
      ],
    },
    {
      icon: ArrowTrendingUpIcon,
      title: "Business Growth Tools",
      description:
        "Access resources and tools designed to help entrepreneurs, freelancers, and businesses grow faster.",
      features: [
        "Marketing resources",
        "Growth strategies",
        "Business insights",
      ],
    },
  ];

  const premiumServices = [
    {
      icon: SparklesIcon,
      title: "Premium Seller Tools",
      description:
        "Advanced tools designed to help sellers maximize visibility, manage products efficiently, and grow their sales.",
    },
    {
      icon: RocketLaunchIcon,
      title: "Custom Business Solutions",
      description:
        "Tailored digital solutions and support for businesses looking to expand their online presence.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Services | Boostify Marketplace</title>

        <meta
          name="description"
          content="Explore Boostify Marketplace services including digital products, seller tools, business growth resources, and premium solutions."
        />

        <meta
          name="keywords"
          content="Boostify Marketplace, digital marketplace, seller tools, business growth, digital products"
        />

        <meta name="author" content="Boostify Marketplace" />
      </Helmet>

      <main className="w-full">
        {/* HERO */}
        <section className="py-20 px-4 md:px-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,146,60,0.1),transparent)] pointer-events-none" />

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
              Boostify Marketplace Services
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Empowering entrepreneurs, creators, and businesses through a
              modern marketplace for digital products, growth resources, and
              innovative online opportunities.
            </p>
          </div>
        </section>

        {/* CORE SERVICES */}
        <section className="py-20 px-4 md:px-10 bg-white dark:bg-gray-900 transition-colors duration-500">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Core Services
              </h2>

              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                Everything you need to buy, sell, and grow in the digital
                economy.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {coreServices.map((service, index) => {
                const Icon = service.icon;

                return (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
                  >
                    <Icon className="w-12 h-12 text-amber-400 mb-4" />

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li
                          key={fIndex}
                          className="flex items-start gap-3"
                        >
                          <CheckCircleIcon className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />

                          <span className="text-gray-700 dark:text-gray-300 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PREMIUM SOLUTIONS */}
        <section className="py-20 px-4 md:px-10 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-500">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Premium Solutions
              </h2>

              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                Advanced services for sellers and businesses looking to scale.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {premiumServices.map((service, index) => {
                const Icon = service.icon;

                return (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-amber-400"
                  >
                    <Icon className="w-12 h-12 text-amber-400 mb-4" />

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
                {/* WHY CHOOSE BOOSTIFY */}
        <section className="py-20 px-4 md:px-10 bg-white dark:bg-gray-900 transition-colors duration-500">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose Boostify?
              </h2>

              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                We make buying and selling digital products simple, secure, and
                accessible for everyone.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  What You Get
                </h3>

                <ul className="space-y-4">
                  {[
                    "Secure marketplace for buyers and sellers",
                    "Easy seller registration and onboarding",
                    "Fast digital product delivery",
                    "Modern and responsive platform",
                    "Simple product management dashboard",
                    "Dedicated customer support",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />

                      <span className="text-gray-700 dark:text-gray-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-400 to-yellow-500 rounded-lg p-8 text-black shadow-lg">
                <h3 className="text-2xl font-bold mb-6">
                  Our Commitment
                </h3>

                <p className="text-base mb-6 leading-relaxed">
                  Boostify is committed to helping entrepreneurs, freelancers,
                  students, and businesses succeed by providing a trusted
                  marketplace where digital products can be bought and sold with
                  confidence.
                </p>

                <p className="text-base font-semibold">
                  Your success is our mission.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* OUR PROCESS */}
        <section className="py-20 px-4 md:px-10 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                How It Works
              </h2>

              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                Start selling or buying in just a few simple steps.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: 1,
                  title: "Create Account",
                  desc: "Register as a buyer or seller in just a few minutes.",
                },
                {
                  step: 2,
                  title: "Upload Products",
                  desc: "Sellers upload digital products with images and pricing.",
                },
                {
                  step: 3,
                  title: "Sell & Buy",
                  desc: "Customers browse, purchase, and instantly access products.",
                },
                {
                  step: 4,
                  title: "Grow Together",
                  desc: "Build your business and reach more customers through Boostify.",
                },
              ].map((process, index) => (
                <div key={index} className="relative">
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md text-center h-full">
                    <div className="w-12 h-12 bg-amber-400 text-black rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                      {process.step}
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {process.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {process.desc}
                    </p>
                  </div>

                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-1 bg-amber-400 transform -translate-y-1/2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="py-20 px-4 md:px-10 bg-gradient-to-r from-amber-400 to-yellow-500 text-black text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent)] pointer-events-none" />

          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Join Boostify?
            </h2>

            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Whether you're looking to buy premium digital products or become a
              seller and grow your online business, Boostify Marketplace is
              built for you.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="/register"
                className="inline-block bg-black hover:bg-gray-800 text-amber-400 font-semibold py-3 px-8 rounded-md shadow-md transition-all duration-300 hover:scale-105"
              >
                Create Account
              </a>

              <a
                href="/marketplace"
                className="inline-block bg-white hover:bg-gray-100 text-black font-semibold py-3 px-8 rounded-md shadow-md transition-all duration-300 hover:scale-105"
              >
                Explore Marketplace
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ServicePage;
