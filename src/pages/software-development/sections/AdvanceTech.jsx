import React from "react";
import SectionHeading from "../../../components/reusable/SectionHeading";
import {technologies} from "../../../data/data";

function AdvanceTech() {
  return (
    <section className="py-10 px-6  bg-white">
      {/* Heading Section */}
      <SectionHeading
        title={"Advanced Technology Solutions We Master in"}
        subtitle={
          "Our expert developers bring new ideas to digitize your business, creating the best software for both you and your customers with their professional advice."
        }
      />

      {/* Technology Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {technologies?.map((tech, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-8 shadow-lg border border-red-200 hover:shadow-xl transition-all duration-300"
          >
            {/* Icon */}
            <div className="flex justify-center ">
              <div className="w-16 h-16  rounded-full flex items-center justify-center">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-[#231f20] mb-4 text-center">
              {tech.name}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed text-left">
              {tech.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdvanceTech;
