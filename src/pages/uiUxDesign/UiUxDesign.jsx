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

import {ctaBanner, ctaBanner2, UIUXProcess} from "../../data/assetes";
import CTA from "../../components/reusable/CTA";
import ProcessTimeline from "./section/ProcessTimeline";

const UiUxDesign = ({container}) => {
  const TechWork = () => {
    return (
      <div className="flex flex-wrap gap-6 justify-between mt-10">
        {tech_work.map((tech, index) => (
          <div
            key={index}
            className={`p-[2px] rounded-xl ${
              index % 2 === 0
                ? "bg-gradient-to-b from-[#F26064] to-[#FBC165]"
                : "bg-gradient-to-b from-[#FBC165] to-[#F26064]"
            } hover:scale-105 transition-transform`}
          >
            <div className="w-48 h-52 bg-primary rounded-xl flex flex-col items-center justify-center">
              <div className="w-20 h-20 ">
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
        <ProcessTimeline steps={UiUxProcessSteps} image={UIUXProcess} />
      </div>
    );
  };

  return (
    <div className="mt-72">
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
        <div className=" mt-72">
          <DesignProcess />
          <div className="mt-72">
            <CTA image={ctaBanner} />
          </div>
        </div>
        <div className=" mt-72">
          <SectionHeading
            title="Technologies and Platforms We Use"
            subtitle=" follows the best app development practices while digitalizing your
          idea. Here are all the app development services offered by us:"
            align="center"
          />

          <TechWork />
        </div>
        <div className="mt-72">
          <CTA image={ctaBanner2} />
        </div>
        <div className="mt-72">
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
