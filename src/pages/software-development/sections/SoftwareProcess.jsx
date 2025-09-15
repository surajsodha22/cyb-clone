import React from "react";

import {softwareProcessSteps} from "../../../data/data";
import SectionHeading from "../../../components/reusable/SectionHeading";

function SoftwareProcess() {
  return (
    <section className="py-12 px-6 lg:px-20">
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
              className="bg-gradient-to-br from-[#FFE5BB] to-[#FFFFAF2] border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-lg transition flex flex-col h-48"
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
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row - 2 cards centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-6xl">
            {softwareProcessSteps?.slice(3, 5).map((step, index) => (
              <div
                key={index + 3}
                className="bg-gradient-to-br from-[#FFE5BB] to-[#FFFFAF2] border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-lg transition flex flex-col h-48"
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
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-gray-600 text-sm leading-relaxed">
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
