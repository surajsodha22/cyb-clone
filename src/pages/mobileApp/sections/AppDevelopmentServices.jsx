import React from "react";
import {bg_yellow} from "../../../data/assetes";
import {appDevelopmentServices} from "../../../data/data";

function AppDevelopmentServices() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Mobile App Development Services
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            follows the best app development practices while digitalizing your
            idea. Here are all the app development services offered by us:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {appDevelopmentServices.map((service) => (
            <div
              key={service.id}
              className="bg-white mb-16 mt-16  rounded-xl border border-gray-200 border-l-4 border-l-orange-300 shadow-lg p-8 relative hover:shadow-xl transition-shadow duration-300"
            >
              {/* Vector 2143 Background with Service Icon */}
              <div className="absolute -top-24 left-1/2 transform -translate-x-1/2">
                <div className="w-44 h-44 flex items-center justify-center relative">
                  {/* Vector 2143 Background */}
                  <img
                    src={bg_yellow}
                    alt="Background Icon"
                    className="w-44 h-44 object-contain absolute"
                  />
                  {/* Service Icon on top */}
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-12 h-12 object-contain relative z-10"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="pt-20">
                <h3 className="text-md font-bold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AppDevelopmentServices;
