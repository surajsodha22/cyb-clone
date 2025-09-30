import React from "react";
import {
  tech_work,
  UiUxData,
  UiUxProcessSteps,
  UXUI_Slide,
} from "../../data/data";

import SectionHeading from "../../components/reusable/SectionHeading";
import AutoSlider from "../../components/reusable/AutoSlider";
import MultiGridSlider from "../../components/reusable/MultiGridSlider";
import FAQ from "../../components/reusable/FAQ";

import {UIUXProcess} from "../../data/assetes";
import ProcessTimeline from "./section/ProcessTimeline";
import PartnershipCTA from "../../components/reusable/PartnershipCTA";
import ReversePartnershipCTAMan from "../../components/reusable/ReversePartnershipCTAMan";

const UiUxDesign = ({container}) => {
  const TechWork = () => {
    return (
      <div className="flex flex-wrap gap-6 lg:justify-between justify-center mt-10">
        {tech_work.map((tech, index) => (
          <div
            key={index}
            className={`p-[2px] rounded-xl ${
              index % 2 === 0
                ? "bg-gradient-to-b from-[#F26064] to-[#FBC165]"
                : "bg-gradient-to-b from-[#FBC165] to-[#F26064]"
            } `}
          >
            <div className="sm:w-48 sm:h-48 w-32 h-32 bg-primary rounded-xl flex flex-col items-center justify-center">
              <div className="sm:w-20 sm:h-20 w-16 h-16 ">
                <img
                  src={tech.img}
                  alt={tech.title}
                  className="w-full rounded-full"
                />
              </div>
              <p className="sm:mt-4 mt-2 text-sm font-semibold text-[#121212]">
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
        <ProcessTimeline steps={UiUxProcessSteps} image={UIUXProcess} />
      </div>
    );
  };

  return (
    <div className="mt-72">
      <div className={`${container} xl:px-0 px-2`}>
        <SectionHeading title="Our UI/UX Design Services" align="center" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {UiUxData?.map((item, index) => (
            <div
              key={index}
              className={`${
                item?.reverse
                  ? "rounded-[50px_0px_50px_0px]"
                  : "rounded-[0px_50px_0px_50px]"
              } p-6 shadow-md transition-all duration-300 hover:bg-[#FFF6E6] border hover:border-secondary cursor-pointer`}
            >
              {/* Icon */}
              <div className="flex items-center mb-4">
                <img src={item?.icon} alt="icon" className="w-14 h-14" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2 text-left">
                {item?.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 text-left">{item?.desc}</p>
            </div>
          ))}
        </div>
        <div className=" mt-72 sm:pb-72 max-w-6xl mx-auto">
          <DesignProcess />
        </div>
        <div className="mt-72">
          <PartnershipCTA />
        </div>
        <div className=" mt-72 max-w-6xl mx-auto">
          <SectionHeading
            title="Technologies and Platforms We Use"
            subtitle=" follows the best app development practices while digitalizing your
          idea. Here are all the app development services offered by us:"
            align="center"
          />

          <TechWork />
        </div>
        <div className="mt-72">
          <ReversePartnershipCTAMan />
        </div>
        <div className="mt-72">
          <SectionHeading
            title="Our Industry Specific Mobile App Development Services"
            subtitle="follows the best app development practices while digitalizing your idea. Here are all the app development services offered by us:"
            align="center"
          />
          <AutoSlider slideData={UXUI_Slide} />
        </div>
      </div>

      <div className="my-72">
        <MultiGridSlider />
      </div>
      <div className={`${container} mb-72`}>
        <FAQ />
      </div>
    </div>
  );
};

export default UiUxDesign;
