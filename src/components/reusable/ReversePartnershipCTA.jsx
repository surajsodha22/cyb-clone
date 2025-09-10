import React from "react";
import {women2} from "../../data/assetes";
import Button from "./Button";

const ReversePartnershipCTA = () => {
  return (
    <div className="mt-6">
      <div className="flex sm:justify-center items-end  sm:items-center  bg-gradient-to-r from-secondary to-yellow-100 sm:p-10 p-5 rounded-2xl flex-col sm:flex-row relative  ">
        <div className="absolute sm:-bottom-32 -bottom-16 -left-5 sm:left-0 sm:size-96 size-48">
          <img src={women2} alt="" />
        </div>

        <div className="sm:ml-5">
          <div className="sm:text-2xl text-sm max-w-48 font-semibold pb-4 sm:max-w-lg">
            Tech Powered Success Awaites. Empower Your Digital Journey.
          </div>
          <div>
            <Button
              text={"Schedule a Call"}
              onClick={() => alert("Schedule a Call")}
              variant={"bg-gray-200 text-[black] hover:bg-gray-300"}
              className={""}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReversePartnershipCTA;
