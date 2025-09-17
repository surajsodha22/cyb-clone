import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";
import Section10 from "./Section10";

import FAQ from "../reusable/FAQ";
import MultiGridSlider from "../reusable/MultiGridSlider";
import Section1 from "./Section1";

const HeroSection = ({container}) => {
  let marginTop = "mt-16";
  return (
    <>
      <div className={`sm:px-0 px-5  ${container} ${marginTop}`}>
        {/* Our Business */}
        <Section1 container={container} />
        {/* A solution for your software needs. */}
        <div className={marginTop}>
          <Section2 />
        </div>
        {/* Digital Excellence */}
        <div className={marginTop}>
          <Section3 />
        </div>
      </div>
      <div
        className={`bg-primary sm:px-0  sm:pt-4 pt-4 sm:pb-16 pb-10 ${marginTop} `}
      >
        {/* Why Cybdeer is the Strategic */}
        <Section4 container={container} />
      </div>
      <div className={`sm:px-0 px-5  ${container} ${marginTop}`}>
        <Section5 />
      </div>
      <div className={`sm:px-0 px-5  ${container} ${marginTop}`}>
        {/* Empowering Digital Transformation with Innovative Tech Solutions */}
        <Section7 />
      </div>
      <div
        className={`bg-primary sm:px-0 px-5 sm:pt-4 pt-4  pb-6 ${marginTop} `}
      >
        <Section8 container={container} />
      </div>
      {/* Our Latest Blog */}
      <div className={`sm:px-0 px-5  ${container} ${marginTop}`}>
        <Section9 />
        <div className="sm:mt-10 mt-4">
          <Section10 />
        </div>
      </div>
      <div
        className={`bg-primary sm:px-0 px-5 sm:pt-4 pt-0  pb-16 ${marginTop} `}
      >
        <FAQ container={container} />
      </div>
      <div className={`sm:px-0 px-5  ${container} ${marginTop}`}>
        <MultiGridSlider />
      </div>
      {/* <div className="bg-primary sm:px-0 px-5 sm:pt-4 pt-0  pb-4 mt-10 ">
        <Section13 container={container} />
      </div> */}
    </>
  );
};

export default HeroSection;
