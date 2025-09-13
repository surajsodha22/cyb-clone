import React from "react";
import {
  devopsPro1,
  devopsPro2,
  devopsPro3,
  devopsPro4,
  devopsPro5,
  devopsPro6,
} from "../../../data/assetes";

const Implimentation = () => {
  const processSteps = [
    {
      id: 1,
      title: "Strategy Development",
      icon: devopsPro1,
      color: "bg-[#FFE5BB]",
      textColor: "text-gray-800",
    },
    {
      id: 2,
      title: "Continuous Monitoring",
      icon: devopsPro2,
      color: "bg-[#FF6B35]",
      textColor: "text-white",
    },
    {
      id: 3,
      title: "Technology Identification",
      icon: devopsPro3,
      color: "bg-[#FFE5BB]",
      textColor: "text-gray-800",
    },
    {
      id: 4,
      title: "DevOps Execution",
      icon: devopsPro4,
      color: "bg-[#FF6B35]",
      textColor: "text-white",
    },
    {
      id: 5,
      title: "Regular Monitoring",
      icon: devopsPro5,
      color: "bg-[#FFE5BB]",
      textColor: "text-gray-800",
    },
    {
      id: 6,
      title: "Digital Transformation",
      icon: devopsPro6,
      color: "bg-[#FF6B35]",
      textColor: "text-white",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            DevOps Implimentation Process Followed by Us
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            follows the best app development practices while digitalizing your
            idea. Here are all the app development services offered by us:
          </p>
        </div>

        {/* Process Flow Container */}
        <div className="rounded-2xl shadow-lg p-8 md:p-12 relative overflow-hidden">
          {/* Dashed Line */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block"
            style={{width: "calc(100% - 160px)", top: "calc(50% - 20px)"}}
          >
            <div className="w-full h-1 border-t-4 border-dashed border-[#FF6B35]"></div>
          </div>

          {/* Process Steps */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 relative z-10">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className="flex flex-col items-center text-center"
              >
                {/* Icon Container */}
                <div className="mb-3 relative z-20">
                  <img src={step.icon} alt={step.title} className="w-20 h-20" />
                </div>

                {/* Step Title */}
                <h3 className="text-sm font-bold text-gray-900 leading-tight text-center">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Mobile Dashed Line - Vertical */}
          <div className="absolute left-1/2 top-8 bottom-8 w-0.5 transform -translate-x-1/2 border-l-2 border-dashed border-[#FF6B35] lg:hidden"></div>
        </div>
      </div>
    </section>
  );
};

export default Implimentation;
