import React from "react";
import {mobAppImg} from "../../../data/assetes";

function DevelopmentProcess() {
  const processSteps = [
    {
      id: 1,
      title: "Requirement Gathering And Project Analysis",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 2,
      title: "Planning & Strategy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 3,
      title: "UI/UX Design",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 4,
      title: "App Development",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 5,
      title: "Testing & Quality Assurance",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 6,
      title: "Requirement Gathering And Project Analysis",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 7,
      title: "Deployment & Launch",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Mobile App Development Process
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            follows the best app development practices while digitalizing your
            idea. Here are all the app development services offered by us:
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Image Collage */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md">
              {/* Organic blob background shape */}
              <div className="absolute inset-0 bg-white rounded-1 "></div>

              {/* Main image container */}
              <div className="relative z-10 p-8">
                <img
                  src={mobAppImg}
                  alt="Mobile App Development Process"
                  className="w-full h-auto rounded-[40px]"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Process Steps */}
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={step.id} className="flex items-start space-x-4">
                {/* Red circular number badge with connecting line */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="border-2 border-red-500 rounded-full">
                    <div className="w-10 h-10 bg-red-500  border-2  border-white rounded-full flex items-center justify-center shadow-md">
                      <span className="text-white font-bold text-lg">
                        {step.id}
                      </span>
                    </div>
                  </div>

                  {index < processSteps.length - 1 && (
                    <div className="w-0.5 h-16 bg-orange-300 mt-2"></div>
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 text-left mb-2 ">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm text-left leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevelopmentProcess;
