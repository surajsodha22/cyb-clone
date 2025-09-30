import React, {useState} from "react";
import {contentData, features} from "../../data/data";
import SectionHeading from "../reusable/SectionHeading";

// Ye object banake har left category ke right items store karenge

const Section7 = () => {
  // Default active left menu = first feature
  const [active, setActive] = useState(features[0].title);

  return (
    <div>
      <SectionHeading title={"Go digital with innovation IT solution"} />

      <div className="flex flex-col lg:flex-row justify-between">
        {/* Left side menu */}
        <div className="bg-secondary px-4 sm:px-6 py-4 flex-1 rounded-tl-2xl rounded-bl-2xl lg:rounded-tr-none lg:rounded-br-none">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => setActive(feature.title)}
              className={`mt-0 cursor-pointer p-3 sm:p-4 rounded flex gap-2 items-center 
                ${
                  active === feature.title
                    ? "bg-[#FFD694] shadow-[0px_4px_4px_0px_#00000040] font-semibold"
                    : " hover:shadow-[0px_4px_4px_0px_#00000040]"
                }`}
            >
              <div className="w-[24px]">
                <img src={feature.img} alt={feature.title} className="w-full" />
              </div>
              <div className="text-sm sm:text-base">{feature.title}</div>
            </div>
          ))}
        </div>

        {/* Right side content */}
        <div className="bg-primary flex-1 border-[#DFDFDF] lg:border-t-4 rounded-l-2xl sm:rounded-l-none">
          <div className="flex w-full flex-wrap justify-center items-center gap-3 sm:gap-4 max-w-2xl mx-auto p-3 sm:p-4 mt-6 sm:mt-10">
            {contentData[active]?.map((feature, index) => (
              <div
                key={index}
                className="flex w-40 sm:w-52 lg:w-[241px] h-[65px] sm:h-[75px] bg-white border border-[#FDC366] shadow-[0px_4px_4px_0px_#00000040] rounded-[14px] gap-2 items-center py-3 sm:py-4 pl-3 sm:pl-4"
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
