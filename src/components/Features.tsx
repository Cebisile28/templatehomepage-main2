import React, { useState } from "react";
import {
  DevicePhoneMobileIcon,
  CodeBracketIcon,
  WrenchScrewdriverIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}

const Features: React.FC = () => {
  const [features, setFeatures] = useState<Feature[]>([
    {
      title: "Responsive Design",
      description:
        "Deliver a consistent experience on all devices — from mobile to desktop — with a design that adapts seamlessly.",
      icon: DevicePhoneMobileIcon,
    },
    {
      title: "Modern Stack",
      description:
        "Built with React, TypeScript, and Tailwind CSS for high performance, scalability, and easy customization.",
      icon: CodeBracketIcon,
    },
    {
      title: "Easy Customization",
      description:
        "Modular and developer-friendly components that let you personalize your site without breaking structure.",
      icon: WrenchScrewdriverIcon,
    },
  ]);

  // 🧠 Optional: Dynamically add a new feature (for demo/future CMS integration)
  const addFeature = () => {
    const newFeature: Feature = {
      title: `Feature ${features.length + 1}`,
      description:
        "This feature was dynamically added — imagine loading this from your database or API.",
      icon: ArrowRightIcon,
    };
    setFeatures([...features, newFeature]);
  };

  return (
    <section
      id="features"
      className="py-20 px-6 md:px-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2
          className="text-4xl font-bold mb-6 text-gray-900 dark:text-white opacity-0 animate-[fadeIn_1s_ease-in-out_forwards]"
          style={{ animationDelay: "0.2s" }}
        >
          Why Choose <span className="text-amber-400">Boostify</span>?
        </h2>
        <p
          className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 opacity-0 animate-[fadeIn_1s_ease-in-out_forwards]"
          style={{ animationDelay: "0.5s" }}
        >
          Designed for modern creators, entrepreneurs, and developers — Boostify
          brings efficiency, beauty, and innovation together in one platform.
        </p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md border-t-4 border-amber-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group opacity-0 animate-[slideUp_1s_ease-in-out_forwards]"
                style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-amber-100 dark:bg-amber-500/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-amber-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Optional Add Feature Button */}
        <div
          className="text-center mt-16 opacity-0 animate-[bounceIn_1s_ease-in-out_forwards]"
          style={{ animationDelay: `${features.length * 0.2 + 1}s` }}
        >
          <button
            onClick={addFeature}
            className="bg-amber-400 hover:bg-amber-500 text-black font-semibold px-8 py-3 rounded-md transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
          >
            + Add Feature
          </button>
        </div>

        {/* CTA Section */}
        <div
          className="mt-20 text-center opacity-0 animate-[fadeIn_1s_ease-in-out_forwards]"
          style={{ animationDelay: "1.5s" }}
        >
          <a
            href="/services"
            className="inline-block bg-black dark:bg-amber-400 text-white dark:text-black px-10 py-4 font-bold rounded-md hover:bg-amber-500 hover:text-white dark:hover:bg-amber-500 transition-all duration-300 shadow-lg"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
