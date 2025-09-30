import React from "react";
import {ManImg, whiteLine} from "../../data/assetes";
import Button from "./Button";

const ReversePartnershipCTAMan = () => {
  return (
    <div className="mt-6 max-w-6xl mx-auto">
      <div className="mt-6">
        <div className="h-[200px] sm:h-[253px] flex justify-center lg:justify-between items-center  bg-gradient-to-r from-secondary to-[#FFECCE] p-4 sm:p-10 rounded-[45px] gap-3 sm:gap-4 flex-col sm:flex-row relative ">
          <img
            src={whiteLine}
            alt=""
            className="w-[100px] sm:w-[148px] absolute top-6 sm:top-10 left-0 z-0"
          />

          <div className="lg:ml-60 flex flex-col justify-center lg:items-start items-center ">
            <div className="absolute sm:-bottom-24 -bottom-0 -left-0 sm:left-28 sm:size-96 lg:block hidden">
              <img src={ManImg} alt="" className="w-[270px] h-[287px]" />
            </div>

            <div className="lg:ml-48 mx-auto z-10">
              <div
                className="  text-sm 
            sm:text-lg 
            md:text-[29px] 
            w-full 
            pb-3 
            sm:pb-4 
            font-montserrat 
            font-bold 
            leading-[25px] 
            sm:leading-[35px] 
            tracking-normal
            text-center lg:text-left"
              >
                Tech Powered Success Awaites. Empower Your Digital Journey.
              </div>
              <div className="flex justify-center lg:justify-start">
                <Button
                  text={"Schedule a Call"}
                  onClick={() => alert("Schedule a Call")}
                  variant={"bg-white"}
                  className={""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReversePartnershipCTAMan;
