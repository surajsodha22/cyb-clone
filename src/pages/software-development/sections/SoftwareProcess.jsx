import React from "react";

import {softwareProcessSteps} from "../../../data/data";
import SectionHeading from "../../../components/reusable/SectionHeading";

function SoftwareProcess() {
  return (
    <section className="py-72 ">
      {/* Heading */}
      <SectionHeading
        title={"Our Software Development Process"}
        subtitle={
          "Our comprehensive, five-step roadmap guarantees a transparent, efficient, and reliable methodology for building your custom software."
        }
      />

      {/* Process Steps */}
      <div className="space-y-8">
        {/* Top Row - 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {softwareProcessSteps?.slice(0, 3).map((step, index) => (
            <div
              key={index}
              className=" border border-gray-200 rounded-xl shadow-md p-6  transition flex flex-col "
              style={{
                background:
                  "linear-gradient(75.3deg, #FFE5BB -23.53%, #FFFAF2 97.47%)",
              }}
            >
              {/* Heading and Icon */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-gray-900 flex-1 pr-4">
                  {step.title}
                </h3>
                <div className="flex-shrink-0">
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-gray-600 text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row - 2 cards centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full ">
            {softwareProcessSteps?.slice(3, 5).map((step, index) => (
              <div
                key={index + 3}
                className=" border border-gray-200 rounded-xl shadow-md p-6  transition flex flex-col "
                style={{
                  background:
                    "linear-gradient(75.3deg, #FFE5BB -23.53%, #FFFAF2 97.47%)",
                }}
              >
                {/* Heading and Icon */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-gray-900 flex-1 pr-4">
                    {step.title}
                  </h3>
                  <div className="flex-shrink-0">
                    <img
                      src={step.icon}
                      alt={step.title}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-gray-600 text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SoftwareProcess;
