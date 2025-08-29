import React from "react";
import {meet} from "../../data/assetes";
import {cybdeerProjects} from "../../data/data";

const Section4 = ({container}) => {
  return (
    <>
      <section
        className={`flex ${container}  flex-col md:flex-row items-center justify-between`}
      >
        <div className="w-full">
          <div className="text-3xl fornt-bold mb-4 max-w-lg mx-auto font-bold text-center">
            Why Cybdeer is the Strategic Choice for Your Project
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-5 flex-wrap items-center">
            <div className="flex flex-wrap gap-4 max-w-lg">
              {cybdeerProjects.map((project, index) => (
                <div
                  key={index}
                  className="border p-3 rounded shadow-sm sm:w-52 w-36 mx-auto bg-white"
                >
                  <div className="text-2xl font-bold text-red-500">
                    {project.num}
                  </div>
                  <div className="text-lg">{project.title}</div>
                </div>
              ))}
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
