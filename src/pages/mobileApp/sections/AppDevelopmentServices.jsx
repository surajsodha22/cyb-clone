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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-8 gap-4">
          {appDevelopmentServices.map((service) => (
            <div
              key={service.id}
              className="bg-white sm:mb-4 mb-2 mt-72  rounded-xl border border-gray-200 p-8 relative "
            >
              <div className="absolute left-0 top-[5%] h-[90%] w-1 bg-secondary rounded"></div>
              {/* Vector 2143 Background with Service Icon */}
              <div className="absolute -top-[90px] left-1/2 transform -translate-x-1/2">
                <div className="w-44 h-44 flex items-center justify-center relative">
                  {/* Service Icon on top */}
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-full h-full object-contain relative z-10"
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
