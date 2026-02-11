/**
 * ---------------------------------------------------------
 *  File: /src/components/pages/ServicePage.tsx
 *  Fixed imports & typing, correct Footer path.
 * ---------------------------------------------------------
 */

import React from "react";
import { Helmet } from "react-helmet-async";
import { CodeBracketIcon, PaintBrushIcon, ChartBarIcon } from "@heroicons/react/24/outline";
import Footer from "../Footer"; // correct relative path

const ServicePage: React.FC = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Modern, scalable, and high-performance websites built with the latest technologies like React and Tailwind.",
      icon: CodeBracketIcon,
    },
    {
      title: "UI/UX Design",
      description:
        "Beautiful and user-centered designs that create meaningful digital experiences.",
      icon: PaintBrushIcon,
    },
    {
      title: "Digital Marketing",
      description:
        "Strategic marketing solutions to grow your brand, increase visibility, and boost conversions.",
      icon: ChartBarIcon,
    },
  ];

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Our Services | Boostify</title>
        <meta
          name="description"
          content="Explore Boostify's professional web development, UI/UX design, and digital marketing services."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-gray-100">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We provide powerful digital solutions to help businesses grow,
            innovate, and succeed in today's competitive world.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <Icon className="w-12 h-12 text-amber-500 mb-6" />
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="mb-8 text-lg">
            Let’s work together to create something amazing.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ServicePage;
