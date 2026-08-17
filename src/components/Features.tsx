```tsx
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

  // Dynamically add a new feature
  const addFeature = () => {
    const newFeature: Feature = {
      title: `Feature ${features.length + 1}`,
      description:
        "This feature was dynamically added — imagine loading this from your database or API.",
      icon: ArrowRightIcon,
    };

    setFeatures((currentFeatures) => [
      ...currentFeatures,
      newFeature,
    ]);
  };

  return (
    <section
      id="features"
      className="
        w-full
        overflow-hidden
        bg-gray-50
        px-4
        py-14
        transition-colors
        duration-300
        dark:bg-gray-900
        sm:px-6
        sm:py-16
        md:px-10
        lg:px-8
        lg:py-20
      "
    >
      <div className="mx-auto w-full max-w-7xl text-center">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl">
          <h2
            className="
              text-3xl
              font-bold
              leading-tight
              text-gray-900
              opacity-0
              animate-[fadeIn_1s_ease-in-out_forwards]
              dark:text-white
              sm:text-4xl
            "
            style={{
              animationDelay: "0.2s",
            }}
          >
            Why Choose{" "}
            <span className="text-amber-400">
              Boostify
            </span>
            ?
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-base
              leading-7
              text-gray-600
              opacity-0
              animate-[fadeIn_1s_ease-in-out_forwards]
              dark:text-gray-300
              sm:text-lg
              sm:leading-8
            "
            style={{
              animationDelay: "0.5s",
            }}
          >
            Designed for modern creators, entrepreneurs, and
            developers — Boostify brings efficiency, beauty, and
            innovation together in one platform.
          </p>
        </div>

        {/* Feature Cards */}
        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-6
            sm:mt-12
            sm:grid-cols-2
            sm:gap-7
            lg:grid-cols-3
            lg:gap-8
          "
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={`${feature.title}-${index}`}
                className="
                  group
                  flex
                  h-full
                  flex-col
                  rounded-xl
                  border-t-4
                  border-amber-400
                  bg-white
                  p-6
                  shadow-md
                  opacity-0
                  transition-all
                  duration-500
                  animate-[slideUp_1s_ease-in-out_forwards]
                  hover:-translate-y-1
                  hover:shadow-xl
                  dark:bg-gray-800
                  sm:p-7
                  lg:p-8
                  lg:hover:-translate-y-2
                "
                style={{
                  animationDelay: `${index * 0.2 + 0.5}s`,
                }}
              >
                {/* Icon */}
                <div className="mb-5 flex justify-center">
                  <div
                    className="
                      rounded-full
                      bg-amber-100
                      p-3
                      transition-transform
                      duration-300
                      group-hover:scale-110
                      dark:bg-amber-500/20
                    "
                  >
                    <Icon className="h-8 w-8 text-amber-500" />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="
                    mb-3
                    text-xl
                    font-semibold
                    leading-tight
                    text-gray-900
                    dark:text-white
                  "
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    flex-1
                    text-sm
                    leading-7
                    text-gray-600
                    dark:text-gray-300
                    sm:text-base
                  "
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Add Feature Button */}
        <div
          className="
            mt-10
            opacity-0
            animate-[bounceIn_1s_ease-in-out_forwards]
            sm:mt-12
          "
          style={{
            animationDelay: `${features.length * 0.2 + 1}s`,
          }}
        >
          <button
            type="button"
            onClick={addFeature}
            className="
              inline-flex
              min-h-[48px]
              w-full
              max-w-xs
              items-center
              justify-center
              rounded-lg
              bg-amber-400
              px-6
              py-3
              text-sm
              font-semibold
              text-black
              shadow-md
              transition-all
              duration-300
              hover:bg-amber-500
              hover:shadow-lg
              sm:w-auto
              sm:px-8
              sm:text-base
              sm:hover:scale-105
            "
          >
            + Add Feature
          </button>
        </div>

        {/* Services CTA */}
        <div
          className="
            mt-14
            opacity-0
            animate-[fadeIn_1s_ease-in-out_forwards]
            sm:mt-16
            lg:mt-20
          "
          style={{
            animationDelay: "1.5s",
          }}
        >
          <a
            href="/services"
            className="
              inline-flex
              min-h-[50px]
              w-full
              max-w-sm
              items-center
              justify-center
              rounded-lg
              bg-black
              px-6
              py-3
              text-sm
              font-bold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:bg-amber-500
              hover:text-white
              dark:bg-amber-400
              dark:text-black
              dark:hover:bg-amber-500
              sm:w-auto
              sm:px-10
              sm:text-base
            "
          >
            Explore Our Services
          </a>
        </div>

      </div>
    </section>
  );
};

export default Features;
```

