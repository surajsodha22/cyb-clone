import React from "react";

import SectionHeading from "../../../components/reusable/SectionHeading";
import {softwareServices} from "../../../data/data";

function SoftwareServices() {
  return (
    <section className="py-12 px-6 lg:px-20">
      {/* Heading */}
      <SectionHeading
        title={"Our Software Development Services"}
        subtitle={
          "We provide software development services that combine advanced technologies and industry experience, ensuring you receive a tailored,future-ready software solution."
        }
      />

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {softwareServices.map((service, index) => (
          <div
            key={index}
            className="bg-white border-2 border-[#FFE5BB] rounded-xl shadow-md p-8 hover:shadow-lg transition relative"
          >
            {/* Circular Icon Container - Top Right */}
            <div className="absolute -top-6 -right-6">
              <div className="w-20 h-20 bg-white border-2 border-[#FFE5BB] rounded-full flex items-center justify-center shadow-lg">
                <div className="text-red-500  object-contain">
                  <img src={service.icon} className="" alt="" />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="pr-">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SoftwareServices;
