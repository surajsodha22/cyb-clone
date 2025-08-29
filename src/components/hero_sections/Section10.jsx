import React from "react";
import Button from "../reusable/Button";
import {women} from "../../data/assetes";

const Section10 = () => {
  return (
    <div className="mt-6">
      <div className="flex justify-between sm:items-center items-start bg-gradient-to-r from-secondary to-yellow-100 sm:p-10 p-5 rounded-2xl gap-4 flex-col sm:flex-row relative ">
        <div>
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
        <div className="absolute sm:right-10 -right-5 bottom-0 -top-22 sm:w-72 w-36">
          <img src={women} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section10;
