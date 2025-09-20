import React, {useState} from "react";

import SectionHeading from "../../../components/reusable/SectionHeading";
import {softwareServices} from "../../../data/data";
import {boxBG, boxBGHover} from "../../../data/assetes";

function SoftwareServices() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-72 ">
      {/* Heading */}
      <SectionHeading
        title={"Our Software Development Services"}
        subtitle={
          "We provide software development services that combine advanced technologies and industry experience, ensuring you receive a tailored,future-ready software solution."
        }
      />

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8  mx-auto">
        {softwareServices.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl w-full h-64 sm:h-72 lg:h-80 p-4 sm:p-6 lg:p-8 relative bg-cover bg-center cursor-pointer transition-all duration-300 mx-auto"
            style={{
              backgroundImage:
                hoveredIndex === index ? `url(${boxBGHover})` : `url(${boxBG})`,
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Circular Icon Container - Top Right */}
            <div className="absolute top-0 right-0 ">
              <div className="w-20 h-20  lg:w-[90px] lg:h-[90px]  rounded-full flex items-center justify-center">
                <div className="text-red-500 object-contain">
                  <img
                    src={
                      hoveredIndex === index
                        ? service?.hoverIcon
                        : service?.icon
                    }
                    className="w-full"
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="pr-24 mt-4 sm:mt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3 sm:mb-4 leading-tight ">
                {service.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">
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
