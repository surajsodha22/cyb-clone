import React from "react";
import {locations} from "../../data/data";
import {location_Icon} from "../../data/assetes";

const Section13 = ({container}) => {
  return (
    <>
      <div className={`${container} `}>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-between gap-6 sm:gap-8 lg:px-4">
          {locations?.map((data, index) => (
            <div
              key={index}
              className="bg-white w-full max-w-sm sm:w-80 lg:w-96 shadow-sm rounded-2xl text-center px-4 sm:px-6 py-6 sm:py-8 border border-gray-200 mx-auto sm:mx-0"
            >
              <div className="mb-4 sm:mb-6 mx-auto flex items-center justify-center h-20 sm:h-24">
                <img
                  className="w-full h-full object-contain"
                  src={data?.img}
                  alt=""
                />
              </div>

              <div className="flex items-start justify-center gap-2 text-sm text-gray-700">
                <img src={location_Icon} alt="location" />
                <p className="max-w-xs text-center text-sm sm:text-base lg:text-lg leading-relaxed">
                  {data?.address}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Section13;
