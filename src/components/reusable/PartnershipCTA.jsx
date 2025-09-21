import React from "react";
import {cta_bg, women, whiteLine} from "../../data/assetes";
import Button from "./Button";

const PartnershipCTA = () => {
  return (
    <div className="h-[200px] sm:h-[253px] flex justify-between sm:items-center items-start bg-gradient-to-r from-[#FDC366] to-[#FFECCE] p-4 sm:p-10 rounded-[45px] gap-3 sm:gap-4 flex-col sm:flex-row relative max-w-6xl sm:mx-auto mx-8">
      <img
        src={whiteLine}
        alt=""
        className="w-[100px] sm:w-[148px] absolute top-6 sm:top-10 left-0 z-0"
      />
      <div className="relative z-10 ml-[2%] mt-4 sm:mt-0 sm:ml-[10%] flex flex-col justify-center">
        <div
          className="
            text-sm 
            sm:text-lg 
            md:text-[29px] 
            w-full 
            sm:w-2/3 
            pb-3 
            sm:pb-4 
            font-montserrat 
            font-bold 
            leading-[25px] 
            sm:leading-[35px] 
            tracking-normal
            "
        >
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
      <div className="absolute sm:right-10 -right-5 bottom-0 -top-22 w-[250px] sm:w-[330px]">
        <img src={women} alt="" />
      </div>
    </div>
  );
};

export default PartnershipCTA;
