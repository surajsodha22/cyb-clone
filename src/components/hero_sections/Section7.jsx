import React from "react";
import {CiMobile1} from "react-icons/ci";
import {features, features2} from "../../data/data";
import SectionHeading from "../reusable/SectionHeading";

const Section7 = ({
  title = "Empowering Digital Transformation with Innovative Tech Solutions",
  subtitle,
}) => {
  return (
    <div className="">
      <SectionHeading title={title} subtitle={subtitle} />

      <div className="flex flex-col lg:flex-row justify-between">
        <div className="bg-secondary px-4 sm:px-6 py-4 flex-1 rounded-tl-2xl rounded-bl-2xl lg:rounded-tr-none lg:rounded-br-none">
          {features.map((feature, index) => (
            <div
              key={index}
              className="mt-0 hover:bg-[#FFD694] hover:shadow-[0px_4px_4px_0px_#00000040] p-3 sm:p-4 rounded flex gap-2 items-center"
            >
              <div>
                <CiMobile1 className="text-lg sm:text-xl" />
              </div>
              <div className="text-sm sm:text-base">{feature.title}</div>
            </div>
          ))}
        </div>
        <div className="bg-primary flex-1 border-t-4 border-[#DFDFDF] lg:border-t-0 lg:border-l-4">
          <div className="flex w-full flex-wrap justify-center items-center gap-3 sm:gap-4 max-w-2xl mx-auto p-3 sm:p-4 mt-6 sm:mt-10">
            {features2.map((feature, index) => (
              <div
                key={index}
                className="flex w-full sm:w-52 lg:w-[241px] h-[65px] sm:h-[75px] bg-white border border-[#FDC366] shadow-[0px_4px_4px_0px_#00000040] rounded-[14px] gap-2 items-center py-3 sm:py-4 pl-3 sm:pl-4"
              >
                <div className="w-8 sm:w-10">
                  <img
                    src={feature.img}
                    alt="img"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-sm sm:text-base lg:text-[18px] font-semibold">
                  {feature?.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
