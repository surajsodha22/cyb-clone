import React from "react";
import {lableIcon, meet} from "../../data/assetes";
import {cybdeerProjects} from "../../data/data";
import SectionHeading from "../reusable/SectionHeading";

const Section4 = ({container}) => {
  return (
    <>
      <section
        className={`flex ${container}  flex-col md:flex-row items-center justify-between`}
      >
        <div className="w-full">
          <div className="flex flex-col lg:flex-row justify-between gap-5 flex-wrap items-center">
            <div>
              <div className="max-w-xl">
                <SectionHeading
                  title=" Why Cybdeer only for your digital world?"
                  align="left"
                />
              </div>

              <div className="flex flex-wrap justify-between   gap-4 max-w-lg">
                {cybdeerProjects.map((project, index) => (
                  <div
                    key={index}
                    className="border rounded shadow-sm sm:w-52 w-40 mx-auto bg-white relative"
                  >
                    <img
                      src={lableIcon}
                      alt=""
                      className="absolute right-5 -top-1"
                    />
                    <div className="text-2xl font-bold text-red-500">
                      {project.num}
                    </div>
                    <div className="text-lg">{project.title}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src={meet} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section4;
