import React from "react";
import {locations} from "../../data/data";
import {MdLocationOn} from "react-icons/md";

const Section13 = ({container}) => {
  return (
    <>
      <div className={`${container} mt-10`}>
        <div className="flex flex-wrap justify-between gap-8">
          {locations?.map((data, index) => (
            <div
              key={index}
              className="bg-white w-96 shadow-sm rounded-2xl text-center px-6 py-8 border border-gray-200"
            >
              <div className="mb-6 h-32 w-32 mx-auto flex items-center justify-center">
                <img
                  className="w-full h-full object-contain"
                  src={data?.img}
                  alt=""
                />
              </div>

              <div className="flex items-start justify-center gap-2 text-sm text-gray-700">
                <MdLocationOn className="text-orange-500 text-lg flex-shrink-0 mt-1" />
                <p className="max-w-xs text-center text-lg leading-relaxed">
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
