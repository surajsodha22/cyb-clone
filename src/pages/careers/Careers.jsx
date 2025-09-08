import React from "react";
import {benefits, jobs} from "../../data/data";
import {girl} from "../../data/assetes";

const Careers = () => {
  return (
    <div className="bg-[#fff7f0] py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 mb-20 justify-between">
        {/* Left */}
        <div className="relative bg-secondary max-w-lg md:w-1/2 rounded-xl flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[400px]">
          <h2 className="text-white font-semibold text-lg sm:text-2xl absolute top-4 left-4 leading-snug">
            Based On What <br />
            They Said
          </h2>

          <img
            src={girl}
            alt="Employee"
            className="absolute bottom-0 left-72 w-56 sm:w-72 md:w-96 object-contain"
          />
        </div>

        {/* Right */}
        <div className="w-full md:w-1/2 space-y-6">
          <h3 className="text-xl sm:text-2xl font-semibold">You Get</h3>
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white flex items-center gap-4 p-4 rounded-lg shadow-sm border"
            >
              <span className="text-lg sm:text-xl">{item.icon}</span>
              <p className="text-sm sm:text-base text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Current Openings */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Current Openings</h2>
        <p className="text-sm text-gray-600 mt-1">
          Feel fulfilled. Have fun. Help us to shape the future.
        </p>
      </div>

      {/* Job Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-2">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition flex flex-col"
          >
            <div className="">
              <div className="w-10 h-10 flex items-center justify-center mb-3">
                <img
                  src={job.img}
                  alt={job.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                {job.title}
              </h4>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 mb-4">
              {job.experience}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {job.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="bg-[#FFE9CA] shadow-sm border text-xs px-2 py-1 rounded"
                >
                  {badge}
                </span>
              ))}
            </div>

            <button className="bg-[#F26064] text-white text-sm font-medium py-2 px-4 rounded-full hover:bg-red-600 self-start">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
