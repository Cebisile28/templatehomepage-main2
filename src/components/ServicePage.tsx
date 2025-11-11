import React from "react";
import Services from "../components/Services";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet"; // ✅ SEO

const ServicesPage: React.FC = () => {
  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>Our Services | Boostify</title>
        <meta
          name="description"
          content="Explore Boostify's services: digital products, brand support, and growth tools. Boost your business today!"
        />
        <meta
          name="keywords"
          content="Boostify services, digital products, brand support, growth tools"
        />
        <meta name="author" content="Boostify Team" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-amber-400 dark:bg-amber-500 text-white text-center transition-colors duration-500">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-[fadeIn_1s_ease-in-out]">
          Our Services
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto animate-[fadeIn_1s_ease-in-out_0.2s]">
          We provide a range of solutions to help your business thrive.
          From digital products to brand support and growth tools, Boostify
          empowers you to succeed.
        </p>
      </section>

      {/* Services Component */}
      <Services />

      {/* Call to Action */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Ready to Boost Your Business?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Contact us today and let's create something amazing together.
          </p>
          <a
            href="/contact"
            className="inline-block bg-amber-400 hover:bg-amber-500 text-white font-semibold px-6 py-3 rounded transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ServicesPage;
