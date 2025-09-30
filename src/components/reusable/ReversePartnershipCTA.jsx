import React from "react";
import {women2, whiteLine} from "../../data/assetes";
import Button from "./Button";

const ReversePartnershipCTA = () => {
  return (
    <div className="mt-6 max-w-6xl mx-auto">
      <div className="flex sm:justify-center items-end  sm:items-center  bg-gradient-to-r from-secondary to-yellow-100 sm:p-10 p-5  rounded-[45px] flex-col sm:flex-row relative  ">
        <img
          src={whiteLine}
          alt=""
          className="w-[100px] sm:w-[148px] absolute top-6 sm:top-10 left-0 z-0"
        />

        <div className="absolute sm:-bottom-32 -bottom-16 -left-5 sm:size-96 size-48 hidden lg:block">
          <img src={women2} alt="" />
        </div>

        <div className="lg:ml-60 flex flex-col justify-center lg:items-start items-center z-10">
          <div className="sm:text-2xl text-sm font-semibold pb-4 lg:max-w-lg text-center lg:text-left">
            Tech Powered Success Awaites. Empower Your Digital Journey.
          </div>
          <div>
            <Button
              text={"Schedule a Call"}
              onClick={() => alert("Schedule a Call")}
              variant={"bg-white"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReversePartnershipCTA;
