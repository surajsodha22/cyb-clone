import React from "react";
import {benefits, jobs} from "../../data/data";
import {girl} from "../../data/assetes";
import HeadingSection from "../../components/reusable/SectionHeading";

const Careers = ({container}) => {
  return (
    <div className=" my-72 ">
      <div
        className={`${container} flex flex-col md:flex-row gap-10 mb-20 justify-between items-center`}
      >
        {/* Left */}
        <div className="relative bg-secondary max-w-96 h-96 md:w-1/2 rounded-xl flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[400px]">
          <h2 className="text-white font-semibold text-lg sm:text-2xl absolute top-4 left-4 leading-snug">
            Based On What <br />
            They Said
          </h2>

          <img
            src={girl}
            alt="Employee"
            className="absolute bottom-0 left-48 w-96 object-contain"
          />
        </div>

        {/* Right */}
        <div className="w-full md:w-1/2 space-y-6 bg-[#FDF8F0] p-8 rounded-2xl">
          <HeadingSection title="You Get" align="left" />

          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white flex items-center gap-4 p-4 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center text-2xl">
                {item.icon}
              </div>
              <p className="text-base text-gray-800 font-medium leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Current Openings */}
      <div className="bg-[#FDF8F0] py-72">
        <HeadingSection
          title="Current Openings"
          subtitle="Feel fulfilled. Have fun. Help us to shape the future."
        />

        {/* Job Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  px-2">
          {jobs.map((job, index) => {
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                {/* Icon and Title Section */}
                <div className="mb-4">
                  <div
                    className={`w-16 h-16  rounded-xl flex items-center justify-center mb-4`}
                  >
                    <img
                      src={job.img}
                      alt={job.title}
                      className="w-14 h-14 object-contain "
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {job.title}
                  </h4>
                  <p className="text-sm text-gray-600">{job.experience}</p>
                </div>

                {/* Tags Section */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {job.badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="bg-[#FFE9CA] text-black text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Apply Button */}
                <button className="bg-[#F26064] text-white text-sm font-bold py-3 px-6 rounded-full hover:bg-red-600 transition-colors duration-300 w-36">
                  Apply Now
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Careers;
