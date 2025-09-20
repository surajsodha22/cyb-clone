import React from "react";
import {lableIcon, meet, bgSection4} from "../../data/assetes";
import {cybdeerProjects} from "../../data/data";
import SectionHeading from "../reusable/SectionHeading";

const Section4 = ({container}) => {
  return (
    <>
      <section
        className={`flex ${container} flex-col md:flex-row items-center justify-between bg-cover bg-center bg-no-repeat`}
        style={{
          backgroundImage: `url(${bgSection4})`,
        }}
      >
        <div className="w-full">
          <div className="flex flex-col lg:flex-row justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-5 flex-wrap items-center lg:items-end">
            <div className="max-w-lg mb-4 sm:mb-6 lg:mb-0">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black line-height-[52px] letter-spacing-[0%]">
                Why Cybdeer only for your digital world?
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row w-full lg:w-auto">
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 w-full sm:w-1/2 items-center mb-4 sm:mb-0">
                {cybdeerProjects.map((project, index) => (
                  <div
                    key={index}
                    className="relative w-[160px] sm:w-[180px] md:w-[196px] rounded-xl shadow-sm p-[1px]"
                    style={{
                      background:
                        "linear-gradient(180deg, #EEF1F2 0%, #F26064 100%)",
                    }}
                  >
                    {/* inner white card */}
                    <div className="relative rounded-xl bg-white py-3 sm:py-4 md:py-6 px-2 sm:px-3 md:px-4 h-full w-full">
                      <img
                        src={lableIcon}
                        alt=""
                        className="absolute right-2 sm:right-3 md:right-5 -top-1 w-[14px] sm:w-[16px] md:w-auto"
                      />

                      <div className="text-xl sm:text-2xl md:text-[28px] font-bold mb-1 sm:mb-2">
                        {project.num}
                      </div>
                      <div className="flex gap-1 sm:gap-2">
                        <img
                          src={project.icon}
                          alt=""
                          className="w-3 sm:w-4 h-3 sm:h-4"
                        />
                        <div className="text-[10px] sm:text-xs md:text-[14px]  text-gray-500">
                          {project.title}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full lg:w-auto flex justify-center lg:justify-end ">
                <img
                  src={meet}
                  alt=""
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section4;
