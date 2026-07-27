import React from "react";
import ContactForm from "../ContactForm";
import { Helmet } from "react-helmet";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const ContactPage: React.FC = () => {
  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>Contact Us | Boostify</title>

        <meta
          name="description"
          content="Get in touch with Boostify. We're here to answer your questions, provide support, or discuss your next project."
        />

        <meta
          name="keywords"
          content="Boostify contact, support, digital agency, get in touch"
        />

        <meta name="author" content="Boostify Team" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-amber-400 dark:bg-amber-500 text-white text-center transition-colors duration-500">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Contact Us
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Have a question, feedback, or idea? Our team is ready to assist you.
          Fill out the form below or reach us through any of the options listed.
        </p>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-gray-900 dark:text-gray-100">

          {/* Email */}
          <div className="flex flex-col items-center bg-white dark:bg-gray-900 p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300">
            <EnvelopeIcon className="w-10 h-10 text-amber-400 mb-3" />

            <h3 className="font-semibold text-xl mb-2">
              Email
            </h3>

            <a
              href="mailto:boostifymarketplace@gmail.com"
              className="text-amber-500 hover:text-amber-400 break-all"
            >
              boostifymarketplace@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center bg-white dark:bg-gray-900 p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300">
            <PhoneIcon className="w-10 h-10 text-amber-400 mb-3" />

            <h3 className="font-semibold text-xl mb-2">
              Phone
            </h3>

            <a
              href="tel:+27682531912"
              className="text-amber-500 hover:text-amber-400"
            >
              +27 68 253 1912
            </a>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center bg-white dark:bg-gray-900 p-6 rounded-lg shadow hover:shadow-lg transition-all duration-300">
            <MapPinIcon className="w-10 h-10 text-amber-400 mb-3" />

            <h3 className="font-semibold text-xl mb-2">
              Address
            </h3>

            <p>Durban, South Africa</p>
          </div>

        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-500">
        <div className="max-w-3xl mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
            Send Us a Message
          </h2>

          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <ContactForm />
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
        <div className="max-w-3xl mx-auto text-center">

          <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Prefer direct contact?
          </h3>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            You can also reach us via email or phone. We're always happy to help.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            <a
              href="mailto:boostifymarketplace@gmail.com"
              className="bg-amber-400 hover:bg-amber-500 text-black font-semibold px-6 py-3 rounded transition-all duration-300"
            >
              📧 Email Us
            </a>

            <a
              href="tel:+27682531912"
              className="bg-gray-900 hover:bg-black text-white font-semibold px-6 py-3 rounded transition-all duration-300"
            >
              📞 Call Us
            </a>

          </div>

        </div>
      </section>
    </>
  );
};

export default ContactPage;

