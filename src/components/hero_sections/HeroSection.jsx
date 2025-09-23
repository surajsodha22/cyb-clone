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
import {BG_section8} from "../../data/assetes";
const HeroSection = ({container}) => {
  return (
    <>
      <div className={`${container} mt-16 sm:mt-24 lg:mt-72`}>
        {/* Our Business */}
        <Section1 container={container} />
        {/* A solution for your software needs. */}
        <div className="mt-16 sm:mt-24 lg:mt-72 px-2 sm:px-0">
          <Section2 />
        </div>
        {/* Digital Excellence */}
        <div className="mt-16 sm:mt-24 lg:mt-72 px-2 sm:px-0">
          <Section3 />
        </div>
      </div>
      <div
        className={`bg-primary py-8 sm:py-12 lg:py-[72px] mt-16 sm:mt-24 lg:mt-72`}
      >
        {/* Why Cybdeer is the Strategic */}
        <Section4 container={container} />
      </div>
      <div className={`${container} mt-16 sm:mt-24 lg:mt-72`}>
        <Section5 />
      </div>
      <div className={`${container} mt-16 sm:mt-24 lg:mt-72 px-2 sm:px-0`}>
        {/* Go digital with innovation IT solution */}
        <Section7 />
      </div>

      <div
        className={` mt-16 sm:mt-24 lg:mt-72 bg-cover bg-center bg-no-repeat`}
        style={{
          backgroundImage: `url(${BG_section8})`,
        }}
      >
        {/* Our clients views on our services */}
        <Section8 container={container} />
      </div>
      {/* Our Latest Blog */}
      <div className={`${container} mt-16 sm:mt-24 lg:mt-72`}>
        <Section9 />
        <div className="mt-16 sm:mt-24 lg:mt-72 px-2 sm:px-0">
          <PartnershipCTA />
        </div>
      </div>
      <div className={`sm:pt-4 pt-0 mt-16 sm:mt-24 lg:mt-72`}>
        <FAQ container={container} />
      </div>
      <div className={`my-16 sm:my-24 lg:my-72`}>
        <MultiGridSlider />
      </div>
      {/* <div className="bg-primary sm:pt-4 pt-0  pb-4 mt-10 ">
        <Section13 container={container} />
      </div> */}
    </>
  );
};

export default HeroSection;
