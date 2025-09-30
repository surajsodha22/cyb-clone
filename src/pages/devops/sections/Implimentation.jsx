import React from "react";
import {
  devopsPro1,
  devopsPro2,
  devopsPro3,
  devopsPro4,
  devopsPro5,
  devopsPro6,
} from "../../../data/assetes";
import SectionHeading from "../../../components/reusable/SectionHeading";

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
    <section className="py-72 ">
      <div className="">
        {/* Header Section */}
        <SectionHeading
          title="DevOps Implimentation Process Followed by Us"
          subtitle="follows the best app development practices while digitalizing your idea. Here are all the app development services offered by us:"
        />

        {/* Process Flow Container */}
        <div className="rounded-2xl p-6 md:p-8 xl:p-12 relative overflow-hidden shadow-custom bg-[#FFFCF8]">
          {/* Desktop Dashed Line - hidden on mobile/tablet */}
          <hr className="hidden xl:block border border-dashed w-[70%] border-[#F15E5F] absolute top-[40%] left-40 z-0" />

          {/* Process Steps */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 xl:gap-12 relative z-10">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className="flex flex-col items-center text-center"
              >
                {/* Icon Container */}
                <div className="mb-3 relative z-20">
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="w-16 h-16 md:w-20 md:h-20"
                  />
                </div>

                {/* Step Title */}
                <h3 className="text-xs md:text-sm font-bold text-gray-900 leading-tight text-center max-w-32">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Implimentation;
