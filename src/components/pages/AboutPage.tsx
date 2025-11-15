import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet"; // ✅ For SEO optimization
import { UsersIcon, LightBulbIcon, HeartIcon } from "@heroicons/react/24/outline";

const AboutPage: React.FC = () => {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>About Us | Boostify</title>
        <meta
          name="description"
          content="Learn more about Boostify — a creative team helping businesses grow with modern, scalable, and stunning digital solutions."
        />
        <meta
          name="keywords"
          content="Boostify, About Boostify, digital agency, modern design, React, web development"
        />
        <meta name="author" content="Boostify Team" />
      </Helmet>

      {/* ✅ Main About Section */}
      <section
        id="about"
        className="py-20 px-4 md:px-10 bg-white dark:bg-gray-900 transition-colors duration-500"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-gray-100">
            Who We Are
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            At <span className="text-amber-500 font-semibold">Boostify</span>,
            we believe in empowering creators, entrepreneurs, and businesses with
            tools that inspire growth and innovation. Our mission is to simplify
            technology — helping you focus on what matters most: building your brand.
          </p>

          <About />
        </div>
      </section>

      {/* ✅ Mission / Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
            Our Mission & Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md border-t-4 border-amber-400 transition-transform hover:-translate-y-1 hover:shadow-lg duration-300">
              <LightBulbIcon className="w-10 h-10 text-amber-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We thrive on creativity and forward-thinking solutions that bring
                your ideas to life.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md border-t-4 border-amber-400 transition-transform hover:-translate-y-1 hover:shadow-lg duration-300">
              <HeartIcon className="w-10 h-10 text-amber-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                Passion
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Everything we create is driven by passion — for design, for technology,
                and for helping businesses grow.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md border-t-4 border-amber-400 transition-transform hover:-translate-y-1 hover:shadow-lg duration-300">
              <UsersIcon className="w-10 h-10 text-amber-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                Collaboration
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We work closely with clients and partners to build meaningful relationships
                that lead to long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Optional Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-12 text-amber-400">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: "Alex Johnson", role: "Founder & CEO" },
              { name: "Sofia Lee", role: "Lead Designer" },
              { name: "Mark Davis", role: "Frontend Developer" },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 shadow-lg hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-amber-500 text-black flex items-center justify-center text-2xl font-bold mb-4">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-amber-300">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Footer */}
      <Footer />
    </>
  );
};

export default AboutPage;
