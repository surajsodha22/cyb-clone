import {digital_excellence_bg} from "../../data/assetes";

import Button from "../reusable/Button";

const Section3 = () => {
  return (
    <>
      <div
        className={`h-[200px] sm:h-[254px] bg-cover bg-center bg-no-repeat rounded-[23px] flex sm:flex-row flex-col justify-between items-start sm:items-center px-4 sm:px-6 md:py-0 py-4 sm:py-6 shadow-[0px_4px_4px_0px_#00000040]`}
        style={{backgroundImage: `url(${digital_excellence_bg})`}}
      >
        <div className="text-left">
          <div className="text-xl sm:text-2xl md:text-[30px] text-[#000000] font-montserrat font-[300]">
            Technological brilliance
          </div>
          <div className="text-xl sm:text-2xl md:text-[30px] font-[700]">
            Realize Your Goals
          </div>
          <hr className="h-1 border-0 bg-gradient-to-r from-secondary to-white mt-2" />
        </div>
        <div className="mt-4 sm:mt-0 md:pr-20">
          <Button text="let's go" effect />
        </div>
      </div>
    </>
  );
};

export default Section3;
