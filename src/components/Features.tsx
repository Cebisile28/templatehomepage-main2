import React from 'react';

const Features = () => {
  const features = [
    {
      title: 'Responsive Design',
      description: 'Fully responsive layout that looks great on all devices from mobile to desktop.'
    },
    {
      title: 'Modern Stack',
      description: 'Built with React, TypeScript, and Tailwind CSS for a modern development experience.'
    },
    {
      title: 'Easy Customization',
      description: 'Simple to customize with Tailwind utility classes and component-based architecture.'
    }
  ];

  return (
    // Using CSS Grid for responsive card layout
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Added slide-in animation for title */}
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 animate-[slideIn_1s_ease-in-out]">
          Key Features
        </h2>
        {/* Responsive grid layout with gap */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            // Added hover animations and transform effects
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md border-t-4 border-amber-400 
                       hover:shadow-lg transition-all duration-300 hover:-translate-y-2
                       opacity-0 animate-[fadeIn_0.5s_ease-in_forwards]"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;