import React from "react";
import {apps} from "../../data/data";

const Section5 = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col flex-wrap justify-between sm:gap-20">
        <div className="bg-gradient-to-r from-secondary to-white text-2xl sm:text-3xl md:text-4xl flex flex-col justify-center pl-3 sm:pl-4 py-4 sm:py-0">
          Strategic Partnerships
        </div>
        <div className="flex sm:justify-between justify-center flex-1 items-center  gap-5 sm:gap-5 flex-wrap mt-4 sm:mt-6">
          {apps.map((img, i) => (
            <div key={i} className="w-16 sm:w-20 md:w-24">
              <img
                src={img}
                alt={`app logo ${i + 1}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section5;
