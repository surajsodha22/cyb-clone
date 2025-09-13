import React from "react";

const AiFeatures = () => {
  const features = [
    {
      icon: "AI App Development Services.png",
      title: "Versatile Approach",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: "AI App Development Services (1).png",
      title: "Client Support",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: "AI App Development Services (2).png",
      title: "Secure App Creation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: "AI App Development Services (3).png",
      title: "High Scalability",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <section className="py-12 px-6 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Our AI App Development <span className="text-black">Services</span> to
          help you to scale <br /> Your Idea
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          follows the best app development practices while digitalizing your
          idea. Here are all the app development services offered by us:
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white border border-orange-200 rounded-xl shadow-sm p-2 pb-12 text-center hover:shadow-lg transition"
          >
            {/* Icon */}
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16  rounded-lg flex items-center justify-center">
                <img
                  src={`../../src/assetes/MobileAppDev/${feature.icon}`}
                  alt={feature.title}
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AiFeatures;
