import React from "react";
import {webDevServices} from "../../../data/data";

const ServicesWebDev = () => {
  return (
    <div className="py-16 bg-white relative overflow-hidden">
      {/* Background dotted pattern */}
      <div className="absolute top-0 right-0 w-64 h-full opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Web Development Services
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            follows the best app development practices while digitalizing your
            idea. Here are all the app development services offered by us:
          </p>
        </div>

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
