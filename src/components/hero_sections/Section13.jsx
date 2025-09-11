import React from "react";
import {locations} from "../../data/data";

const Section13 = ({container}) => {
  return (
    <>
      <div className={`${container}`}>
        <section className={`"pt-16 px-4 `}>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((data, index) => (
              <div
                key={index}
                className="bg-white w-72 mx-auto shadow-md rounded-2xl  text-center px-6 py-8"
              >
                <div className="text-5xl mb-6 h-24 w-24 mx-auto">
                  <img className="rounded-lg  w-full" src={data.img} alt="" />
                </div>

                <div className="flex items-start justify-center gap-2 text-sm text-gray-700">
                  <p className="max-w-xs">{data.address}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <hr className="mt-10 border border-gray-200" />
      </div>
    </>
  );
};

export default Section13;
