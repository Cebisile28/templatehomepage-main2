import React from 'react';
import {
  CubeIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
} from '@heroicons/react/24/outline'; // Using outline icons for a clean look

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-16 px-4 md:px-8 bg-gray-50 text-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-transform hover:-translate-y-1">
            <CubeIcon className="h-10 w-10 text-amber-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Digital Products</h3>
            <p className="text-gray-600">
              From templates to tools, Boostify delivers ready-to-use digital
              products that save you time and help you perform better.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-transform hover:-translate-y-1">
            <ShieldCheckIcon className="h-10 w-10 text-amber-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Brand Support</h3>
            <p className="text-gray-600">
              Customizable assets and solutions that align with your business
              identity and help you grow consistently.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-transform hover:-translate-y-1">
            <TrendingUpIcon className="h-10 w-10 text-amber-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Growth Tools</h3>
            <p className="text-gray-600">
              We offer powerful, user-friendly resources designed to optimize
              your operations, marketing, and sales funnels.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <a
            href="/contact"
            className="inline-block bg-amber-400 hover:bg-amber-500 text-white font-semibold px-6 py-3 rounded transition"
          >
            Let’s Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;