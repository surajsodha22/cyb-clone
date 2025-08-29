import React from "react";
import {apps} from "../../data/data";

const Section5 = () => {
  return (
    <div>
      <div className=" flex flex-wrap justify-between sm:gap-20">
        <div className="bg-gradient-to-r from-secondary to-white text-4xl flex flex-col justify-center pl-4 ">
          Strategic Partnerships
        </div>
        <div className="flex sm:justify-between justify-center flex-1 items-center sm:gap-20 gap-5 flex-wrap mt-6">
          {apps.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`app logo ${i + 1}`}
              className="sm:size-32 size-14 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section5;
