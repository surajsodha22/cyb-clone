import React from "react";

import {processSteps} from "../../data/data";
import SectionHeading from "./SectionHeading";

const BusinessModernizationProcess = ({container}) => {
  return (
    <section className={`${container} max-w-6xl mx-auto`}>
      <SectionHeading
        title="Process we use for Business Modernization"
        align="center"
      />

      <div className="relative flex flex-wrap flex-col md:flex-row justify-center items-start md:items-center sm:gap-10 ">
        {/* Optional SVG Path Background Here (or dashed border CSS) */}

        {processSteps.map((step, index) => (
          <div
            key={index}
            className="flex flex-wrap flex-col items-center text-center w-72 h-40 justify-center"
          >
            {/* Dashed Circle with Icon */}
            <div className="rounded-full ">
              <img
                src={step.icon}
                alt={step.title}
                className="size-16 object-contain"
              />
            </div>

            {/* Title & Description */}
            <h3 className="font-semibold mt-2 text-sm md:text-base">
              {step.title}
            </h3>
            <p className="text-xs text-gray-600 mt-1 leading-snug w-60 mx-auto">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessModernizationProcess;
