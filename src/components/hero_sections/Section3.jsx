import React from "react";
import {digital_excellence_bg} from "../../data/assetes";

import Button from "../reusable/Button";

const Section3 = () => {
  return (
    <>
      <div
        className={`h-56 bg-cover bg-center rounded-xl flex sm:flex-row flex-col  justify-between items-center px-6 mt-10 sm:py-0 py-4`}
        style={{backgroundImage: `url(${digital_excellence_bg})`}}
      >
        <div>
          <div className="text-3xl text-[#5c5a5a]">Digital Excellence</div>
          <div className="text-3xl font-bold">Achieve Success through</div>
          <hr className="h-1 border-0 bg-gradient-to-r from-secondary to-white" />
        </div>

        <div className="">
          <Button text="Get Started Today!" />
        </div>
      </div>
    </>
  );
};

export default Section3;
