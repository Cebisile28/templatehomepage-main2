import React from "react";
import { Link } from "react-router-dom";

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      features: ["Browse marketplace", "Basic access", "Email support"],
    },
    {
      name: "Pro Seller",
      price: "$9/month",
      features: ["Sell products", "Seller dashboard", "Analytics"],
    },
    {
      name: "Business",
      price: "$29/month",
      features: ["Priority listing", "Advanced analytics", "Featured badge"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold text-center text-amber-400 mb-10">
        Pricing Plans
      </h1>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="bg-gray-800 p-6 rounded-lg border border-gray-700"
          >
            <h2 className="text-2xl font-bold text-amber-400">
              {plan.name}
            </h2>

            <p className="text-3xl font-bold mt-2">{plan.price}</p>

            <ul className="mt-4 space-y-2 text-gray-300">
              {plan.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>

            <Link
              to="/register"
              className="mt-6 inline-block bg-amber-400 text-black px-4 py-2 rounded font-bold"
            >
              Get Started
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;