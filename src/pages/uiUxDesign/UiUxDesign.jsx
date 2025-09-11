import React from "react";
import {
  tech_work,
  UiUxData,
  UiUxProcessSteps,
  UXUI_Slide,
} from "../../data/data";
import PartnershipCTA from "../../components/reusable/PartnershipCTA";

import ReversePartnershipCTAMan from "../../components/reusable/ReversePartnershipCTAMan";
import SectionHeading from "../../components/reusable/SectionHeading";
import AutoSlider from "../../components/reusable/AutoSlider";
import MultiGridSlider from "../../components/reusable/MultiGridSlider";
import FAQ from "../../components/reusable/FAQ";
import {UIUXProcess} from "../../data/assetes";
import {FaCircle} from "react-icons/fa6";

const UiUxDesign = ({container}) => {
  const TechWork = () => {
    return (
      <div className="flex flex-wrap gap-6 justify-center mt-10">
        {tech_work.map((tech, index) => (
          <div
            key={index}
            className={`p-[2px] rounded-xl ${
              index % 2 === 0
                ? "bg-gradient-to-b from-[#F26064] to-[#FBC165]"
                : "bg-gradient-to-b from-[#FBC165] to-[#F26064]"
            } hover:scale-105 transition-transform`}
          >
            <div className="w-40 h-44 bg-primary rounded-xl flex flex-col items-center justify-center">
              <div className="w-16 h-16 ">
                <img
                  src={tech.img}
                  alt={tech.title}
                  className="w-full rounded-full"
                />
              </div>
              <p className="mt-4 text-sm font-semibold text-[#121212]">
                {tech.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const DesignProcess = () => {
    return (
      <div className="">
        <SectionHeading title=" Our UI/UX Design Process" align="center" />

        {/* Flex container for image and steps */}
        <div className="flex flex-wrap  justify-center  sm:gap-24 gap-4">
          {/* Left side - image */}

          <div className="w-96  rounded-lg overflow-hidden">
            <img
              src={UIUXProcess}
              alt="Design Process"
              className="w-full object-cover"
            />
          </div>

          {/* Right side - process steps */}

          <div className="  flex flex-col items-end relative ">
            {/* Dotted line (connecting steps) */}

            <div className="sm:h-80 h-80 border-l-2 border-dotted border-gray-400 absolute left-2 top-4 -z-10" />

            {UiUxProcessSteps.map((step, index) => (
              <div
                key={index}
                className={`flex items-start space-x-6 ${
                  index === 0 ? "mt-0" : "sm:mt-8 mt-3"
                }`}
              >
                {/* Circle indicator */}

                <div className="mt-2">
                  <FaCircle
                    className={`${
                      index === 0 ? "text-red-500" : "text-orange-400"
                    }`}
                  />
                </div>

                {/* Text content */}
                <div className="flex flex-col items-start">
                  <p className="text-xl font-semibold">{step.title}</p>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-10">
      <div className={`${container}`}>
        <SectionHeading title="Our UI/UX Design Services" align="center" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {UiUxData?.map((item, index) => (
            <div
              key={index}
              className={`${
                item?.reverse
                  ? "rounded-[50px_0px_50px_0px]"
                  : "rounded-[0px_50px_0px_50px]"
              } p-6 shadow-md transition-all duration-300 hover:bg-secondary border`}
            >
              {/* Icon */}
              <div className="flex items-center justify-center mb-4">
                <img src={item?.icon} alt="icon" className="w-10 h-10" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2 text-center">
                {item?.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 text-center">{item?.desc}</p>
            </div>
          ))}
        </div>
        <div className=" mt-16">
          <DesignProcess />
          <PartnershipCTA />
        </div>
        <div className="sm:mt-20 mt-16">
          <SectionHeading
            title="Technologies and Platforms We Use"
            subtitle=" follows the best app development practices while digitalizing your
          idea. Here are all the app development services offered by us:"
            align="center"
          />

          <TechWork />
        </div>
        <div className="sm:mt-28 mt-16">
          <ReversePartnershipCTAMan />
        </div>
        <div className="sm:mt-28 mt-16">
          <SectionHeading
            title="Our Industry Specific Mobile App Development Services"
            subtitle="follows the best app development practices while digitalizing your idea. Here are all the app development services offered by us:"
            align="center"
          />
          <AutoSlider reverse slideData={UXUI_Slide} />
        </div>
      </div>

      <MultiGridSlider />
      <div className={`${container}`}>
        <FAQ />
      </div>
    </div>
  );
};

export default UiUxDesign;
