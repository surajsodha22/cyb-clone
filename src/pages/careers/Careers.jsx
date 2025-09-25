import React from "react";
import {benefits, jobs} from "../../data/data";
import {girl, girlCareer} from "../../data/assetes";
import HeadingSection from "../../components/reusable/SectionHeading";

const Careers = ({container}) => {
  return (
    <div className=" my-72 ">
      <div
        className={`${container} flex flex-col md:flex-row gap-10 mb-20 justify-between items-center px-2`}
      >
        {/* Left */}

        <div>
          <img
            src={girlCareer}
            alt="girlCareer"
            className="w-full h-full object-contain"
          />
        </div>
        {/* <div className="relative bg-secondary max-w-96 h-96 md:w-1/2 rounded-xl flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[400px]">
          <h2 className="text-white font-semibold text-lg sm:text-2xl absolute top-4 left-4 leading-snug">
            Based On What <br />
            They Said
          </h2>

          <img
            src={girl}
            alt="Employee"
            className="absolute bottom-0 left-48 w-96 object-contain"
          />
        </div> */}

        {/* Right */}
        <div className="w-full md:w-1/2 bg-[#FDF8F0] p-8 rounded-2xl lg:h-[600px] ">
          <h2 className="text-2xl font-bold  mb-0">You Get</h2>

          <div className=" mt-6 relative lg:block hidden ">
            <div className="bg-white flex items-center gap-4 p-4 shadow-[0px_4px_4px_0px_#00000040] border border-[#C0C0C0] xl:w-[500px] lg:w-[450px]">
              <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                <img
                  src={benefits[0].icon}
                  alt={benefits[0].text}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <p className="text-base text-gray-800 font-medium leading-relaxed">
                {benefits[0].text}
              </p>
            </div>
            <div className="bg-white flex items-center gap-4 p-4 shadow-[0px_4px_4px_0px_#00000040] border border-[#C0C0C0] absolute top-[120px] -left-7 xl:w-[500px] lg:w-[450px]">
              <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                <img
                  src={benefits[1].icon}
                  alt={benefits[1].text}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <p className="text-base text-gray-800 font-medium leading-relaxed">
                {benefits[1].text}
              </p>
            </div>
            <div className="bg-white flex items-center gap-4 p-4 shadow-[0px_4px_4px_0px_#00000040] border border-[#C0C0C0] absolute top-[240px] -left-12 xl:w-[500px] lg:w-[450px]">
              <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                <img
                  src={benefits[2].icon}
                  alt={benefits[2].text}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <p className="text-base text-gray-800 font-medium leading-relaxed">
                {benefits[2].text}
              </p>
            </div>
            <div className="bg-white flex items-center gap-4 p-4 shadow-[0px_4px_4px_0px_#00000040] border border-[#C0C0C0] absolute top-[360px] -left-20 xl:w-[500px] lg:w-[450px]">
              <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                <img
                  src={benefits[3].icon}
                  alt={benefits[3].text}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <p className="text-base text-gray-800 font-medium leading-relaxed">
                {benefits[3].text}
              </p>
            </div>
          </div>

          <div className="space-y-4 mt-6 lg:hidden ">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="bg-white flex items-center gap-4 p-4  shadow-[0px_4px_4px_0px_#00000040] border border-[#C0C0C0]"
              >
                <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <img
                    src={item.icon}
                    alt={item.text}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <p className="text-base font-medium ">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Current Openings */}
      <div className="bg-[#FDF8F0] py-72">
        <div className={`${container}`}>
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
                  className="bg-white p-6 rounded-2xl shadow-[0px_0px_8px_0px_#00000040] border  flex flex-col h-full"
                >
                  {/* Icon and Title Section */}
                  <div className="mb-4">
                    <div
                      className={`w-16 h-16  rounded-xl flex items-center justify-center mb-2`}
                    >
                      <img
                        src={job.img}
                        alt={job.title}
                        className="w-14 h-14 object-contain "
                      />
                    </div>
                    <h4 className="text-[20px] font-semibold mb-0">
                      {job.title}
                    </h4>
                    <p className="text-[15px]">{job.experience}</p>
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
                  <button className="bg-[#F26064] text-white text-sm font-bold py-3 px-6 rounded-full w-36 shadow-custom">
                    Apply Now
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
