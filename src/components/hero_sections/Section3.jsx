import {digital_excellence_bg} from "../../data/assetes";

import Button from "../reusable/Button";

const Section3 = () => {
  return (
    <>
      <div
        className={`h-[200px] sm:h-[254px] bg-cover bg-center bg-no-repeat rounded-xl flex sm:flex-row flex-col justify-between items-center px-4 sm:px-6 md:py-0 py-4 sm:py-6 shadow-[0px_4px_4px_0px_#00000040]`}
        style={{backgroundImage: `url(${digital_excellence_bg})`}}
      >
        <div className="text-center sm:text-left">
          <div className="text-xl sm:text-2xl md:text-3xl text-[#5c5a5a]">
            Digital Excellence
          </div>
          <div className="text-xl sm:text-2xl md:text-3xl font-bold">
            Achieve Success through
          </div>
          <hr className="h-1 border-0 bg-gradient-to-r from-secondary to-white mt-2" />
        </div>
        <div className="mt-4 sm:mt-0 md:pr-20">
          <Button text="let's go" />
        </div>
      </div>
    </>
  );
};

export default Section3;
