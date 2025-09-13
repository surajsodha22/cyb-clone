import React from "react";
import SectionHeading from "../../../components/reusable/SectionHeading";
import {devOpsServices} from "../../../data/data";

const ServicesDevOps = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <SectionHeading
          title="Our DevOps Services"
          subtitle="follows the best app development practices while digitalizing your idea. Here are all the app development services offered by us:"
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {devOpsServices.map((service, index) => (
            <div
              key={service.id}
              className={` border-3 border-[#FFE5BB] rounded-xl shadow-lg p-8 relative hover:shadow-xl hover:border-3 hover:border-[#FFE5BB] hover:border-b-yellow-500 transition-all duration-300 ${
                index === 0 ? "bg-white" : "bg-white"
              }`}
            >
              {/* Red Circular Icon */}
              <div className=" ">
                <div className="w-14 h-14  rounded-full flex items-center justify-center ">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-14 h-14"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="pt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-left">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-left">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesDevOps;
