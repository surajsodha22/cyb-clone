import React from "react";
import {ManImg} from "../../data/assetes";
import Button from "./Button";

const ReversePartnershipCTAMan = () => {
  return (
    <div className="mt-6">
      <div className="flex sm:justify-center items-end  sm:items-center  bg-gradient-to-r from-secondary to-yellow-100 sm:p-10 p-5 rounded-2xl flex-col sm:flex-row relative  ">
        <div className="absolute sm:-bottom-24 -bottom-0 -left-0 sm:left-8 sm:size-96 ">
          <img src={ManImg} alt="" className="sm:w-72 w-40" />
        </div>

        <div className="sm:ml-48">
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

export default ReversePartnershipCTAMan;
