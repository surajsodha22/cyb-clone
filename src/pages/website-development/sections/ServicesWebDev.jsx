import React from "react";
import {webDevServices} from "../../../data/data";
import SectionHeading from "../../../components/reusable/SectionHeading";
const ServicesWebDev = () => {
  return (
    <div className=" ">
      {/* Background dotted pattern */}

      <div className="">
        {/* Header Section */}
        <SectionHeading
          title="Our Web Development Services"
          subtitle="follows the best app development practices while digitalizing your idea. Here are all the app development services offered by us:"
          align="center"
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webDevServices?.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Icon with background blob */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  {/* Orange/yellow blob background */}
                  <div className="absolute inset-0 transform rotate-12 scale-110 opacity-80"></div>
                  {/* Icon container */}
                  <div className="relative w-16 h-16 bg-white rounded-full flex items-center justify-center ">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-16 h-16"
                    />
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesWebDev;
