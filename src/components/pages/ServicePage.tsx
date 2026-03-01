import React from "react";
import { Helmet } from "react-helmet-async";
import {
  CubeIcon,
  ShieldCheckIcon,
  ArrowTrendingUpIcon,
  SparklesIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import Footer from "../Footer";

const ServicePage: React.FC = () => {
  const coreServices = [
    {
      icon: CubeIcon,
      title: "Digital Products",
      description:
        "From templates to tools, Boostify delivers ready-to-use digital products that save you time and help you perform better.",
      features: ["Customizable templates", "Pre-built components", "Easy integration"],
    },
    {
      icon: ShieldCheckIcon,
      title: "Brand Support",
      description:
        "Customizable assets and solutions that align with your business identity and help you grow consistently.",
      features: ["Design guidelines", "Brand assets", "Consultation"],
    },
    {
      icon: ArrowTrendingUpIcon,
      title: "Growth Tools",
      description:
        "We offer powerful, user-friendly resources designed to optimize your operations, marketing, and sales funnels.",
      features: ["Analytics tools", "Performance tracking", "Optimization strategies"],
    },
  ];

  const premiumServices = [
    {
      icon: SparklesIcon,
      title: "Custom Development",
      description: "Tailored solutions built specifically for your unique business needs and goals.",
    },
    {
      icon: RocketLaunchIcon,
      title: "Launch Support",
      description: "Complete guidance and support from planning through to successful deployment and beyond.",
    },
  ];

  return (
    <>
      {/* 🌐 SEO META TAGS */}
      <Helmet>
        <title>Our Services | Boostify</title>
        <meta
          name="description"
          content="Explore Boostify's comprehensive services including digital products, brand support, growth tools, and custom development solutions."
        />
        <meta
          name="keywords"
          content="Boostify services, digital products, web templates, brand support, growth tools, custom development"
        />
        <meta name="author" content="Boostify Team" />
      </Helmet>

      <main className="w-full">
        {/* 🎯 Hero Section */}
        <section className="py-20 px-4 md:px-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,146,60,0.1),transparent)] pointer-events-none" />

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
              Our Premium Services
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              At Boostify, we provide comprehensive digital solutions designed to
              empower your business, streamline your operations, and accelerate
              your growth in the digital landscape.
            </p>
          </div>
        </section>

        {/* 📌 Core Services Section */}
        <section className="py-20 px-4 md:px-10 bg-white dark:bg-gray-900 transition-colors duration-500">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Core Services
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                Our foundation services built to deliver exceptional value and impact
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

                    {/* Service Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
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

        {/* ✨ Premium Services Section */}
        <section className="py-20 px-4 md:px-10 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-500">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Premium Solutions
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                Advanced services for businesses looking to scale and innovate
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

        {/* 🔑 Why Choose Boostify */}
        <section className="py-20 px-4 md:px-10 bg-white dark:bg-gray-900 transition-colors duration-500">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose Boostify?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Our Approach
                </h3>
                <ul className="space-y-4">
                  {[
                    "Customer-centric solutions tailored to your specific needs",
                    "Expert team with years of industry experience",
                    "Transparent communication and project management",
                    "Competitive pricing without compromising quality",
                    "Ongoing support and continuous improvement",
                    "Scalable solutions that grow with your business",
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
                <h3 className="text-2xl font-bold mb-6">Our Commitment</h3>
                <p className="text-base mb-6 leading-relaxed">
                  We're committed to delivering exceptional results that exceed your
                  expectations. Every project is an opportunity to showcase our
                  dedication to excellence and innovation.
                </p>
                <p className="text-base font-semibold">
                  Your success is our success. Let's build something amazing together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 💼 Service Process */}
        <section className="py-20 px-4 md:px-10 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Process
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                A streamlined approach to delivering exceptional results
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: 1, title: "Discovery", desc: "Understanding your vision, goals, and requirements" },
                { step: 2, title: "Planning", desc: "Developing a comprehensive strategy and timeline" },
                { step: 3, title: "Execution", desc: "Building and implementing your solution" },
                { step: 4, title: "Support", desc: "Ongoing maintenance and optimization" },
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

        {/* 🚀 Call to Action Section */}
        <section className="py-20 px-4 md:px-10 bg-gradient-to-r from-amber-400 to-yellow-500 text-black text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent)] pointer-events-none" />

          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>

            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how Boostify can transform your business and help you
              achieve your goals. Contact us today for a personalized consultation.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="/contact"
                className="inline-block bg-black hover:bg-gray-800 text-amber-400 font-semibold py-3 px-8 rounded-md shadow-md transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </a>
              <a
                href="/"
                className="inline-block bg-white hover:bg-gray-100 text-black font-semibold py-3 px-8 rounded-md shadow-md transition-all duration-300 hover:scale-105"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 📌 Footer */}
      <Footer />
    </>
  );
};

export default ServicePage;
