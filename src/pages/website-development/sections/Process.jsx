import React from "react";
import {WebProcessSteps} from "../../../data/data";
import SectionHeading from "../../../components/reusable/SectionHeading";

const Process = ({container}) => {
  return (
    <div className="my-16 bg-primary">
      <div className={`${container} py-16`}>
        <SectionHeading title="Our Web Development Process" align="center" />

        {/* Process Steps */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8">
          {WebProcessSteps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              {/* Process Card */}
              <div className="bg-white rounded-xl p-4 w-52 min-h-44 border border-[#FFAD32] shadow-lg hover:shadow-xl transition-shadow">
                {/* Icon */}
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <img
                      src={step.icon}
                      alt={step.title}
                      className="w-10 h-10"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-gray-900 text-center mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-700 text-center leading-tight">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
