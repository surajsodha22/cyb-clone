import React from "react";

import {processSteps} from "../../data/data";
import SectionHeading from "./SectionHeading";
import {businessProcessImg} from "../../data/assetes";

const BusinessModernizationProcess = ({container}) => {
  return (
    <section className={`max-w-6xl mx-auto`}>
      <SectionHeading
        title="Process we use for Business Modernization"
        align="center"
      />

      <div className="w-full lg:px-0 px-2">
        <img src={businessProcessImg} alt="Business Modernization Process" />
      </div>

      {/*
      <div className="relative flex flex-wrap flex-col md:flex-row justify-center items-start md:items-center sm:gap-10 ">
         {processSteps.map((step, index) => (
          <div
            key={index}
            className="flex flex-wrap flex-col items-center text-center w-72 h-40 justify-center"
          >
            <div className="rounded-full ">
              <img
                src={step.icon}
                alt={step.title}
                className="size-16 object-contain"
              />
            </div>

            <h3 className="font-semibold mt-2 text-sm md:text-base">
              {step.title}
            </h3>
            <p className="text-xs text-gray-600 mt-1 leading-snug w-60 mx-auto">
              {step.description}
            </p>
          </div>
        ))} 
      </div>
      */}
    </section>
  );
};

export default BusinessModernizationProcess;
