import React from "react";
import {mobApptechnologies} from "../../../data/data";

function EmergingTech() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Emerging Technologies We Are An Expert In
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            follows the best app development practices while digitalizing your
            idea. Here are all the app development services offered by us:
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  px-22 gap-6">
          {mobApptechnologies.map((tech) => (
            <div
              key={tech.id}
              className="bg-white rounded-lg  p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="mb-4">
                <div className="w-12 h-12 shadow-lg rounded-lg flex items-center justify-center">
                  <img
                    src={tech.icon}
                    alt={tech.title}
                    className="w-8 h-8 object-contain"
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
