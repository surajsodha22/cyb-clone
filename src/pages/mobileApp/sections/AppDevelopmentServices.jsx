import React from "react";
import {bg_yellow} from "../../../data/assetes";
import {appDevelopmentServices} from "../../../data/data";
import SectionHeading from "../../../components/reusable/SectionHeading";

function AppDevelopmentServices({container}) {
  return (
    <div className={`pt-72 bg-white `}>
      <div className={`${container}`}>
        {/* Header Section */}
        <SectionHeading
          title="Our Mobile App Development Services"
          subtitle="follows the best app development practices while digitalizing your idea. Here are all the app development services offered by us:"
          align="center"
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {appDevelopmentServices.map((service) => (
            <div
              key={service.id}
              className="bg-white mb-72 mt-72  rounded-xl border border-gray-200 border-l-4 border-l-orange-300 shadow-lg p-8 relative hover:shadow-xl transition-shadow duration-300"
            >
              {/* Vector 2143 Background with Service Icon */}
              <div className="absolute -top-[90px] left-1/2 transform -translate-x-1/2">
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
