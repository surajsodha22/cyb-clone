import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";

import FAQ from "../reusable/FAQ";
import MultiGridSlider from "../reusable/MultiGridSlider";
import Section1 from "./Section1";

import PartnershipCTA from "../reusable/PartnershipCTA";
const HeroSection = ({container}) => {
  return (
    <>
      <div className={`  ${container} mt-72`}>
        {/* Our Business */}
        <Section1 container={container} />
        {/* A solution for your software needs. */}
        <div className="mt-72">
          <Section2 />
        </div>
        {/* Digital Excellence */}
        <div className="mt-72">
          <Section3 />
        </div>
      </div>
      <div className={`bg-primary py-[72px] mt-72 `}>
        {/* Why Cybdeer is the Strategic */}
        <Section4 container={container} />
      </div>
      <div className={` ${container} mt-72`}>
        <Section5 />
      </div>
      <div className={` ${container} mt-72`}>
        {/* Empowering Digital Transformation with Innovative Tech Solutions */}
        <Section7 />
      </div>
      <div className={`bg-primary  mt-72 `}>
        <Section8 container={container} />
      </div>
      {/* Our Latest Blog */}
      <div className={`  ${container} mt-72`}>
        <Section9 />
        <div className="mt-72">
          <PartnershipCTA />
        </div>
      </div>
      <div className={` sm:pt-4 pt-0 mt-72 `}>
        <FAQ container={container} />
      </div>
      <div className={`my-72`}>
        <MultiGridSlider />
      </div>
      {/* <div className="bg-primary sm:pt-4 pt-0  pb-4 mt-10 ">
        <Section13 container={container} />
      </div> */}
    </>
  );
};

export default HeroSection;
