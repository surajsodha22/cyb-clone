import React from "react";
import {mobApptechnologies} from "../../../data/data";
import SectionHeading from "../../../components/reusable/SectionHeading";

function EmergingTech({container}) {
  return (
    <div className="py-72 bg-white">
      <div className={`${container}  mx-auto px-4 sm:px-6 lg:px-8`}>
        {/* Header Section */}
        <div className="text-center mb-12">
          <SectionHeading
            title="Emerging Technologies We Are An Expert In"
            subtitle="follows the best app development practices while digitalizing your idea. Here are all the app development services offered by us:"
            align="center"
          />
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  px-22 gap-6">
          {mobApptechnologies.map((tech) => (
            <div key={tech.id} className="bg-gray-100 rounded-lg  p-6">
              {/* Icon */}
              <div className="mb-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <img
                    src={tech.icon}
                    alt={tech.title}
                    className="w-full object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-left">
                  {tech.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed text-left">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EmergingTech;
