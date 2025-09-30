import React from "react";
import Collaborate from "./sections/Collaborate";
import Process from "./sections/Process";
import ServicesWebDev from "./sections/ServicesWebDev";
import WhyChooseUS from "./sections/WhyChooseUS";

import MultiGridSlider from "../../components/reusable/MultiGridSlider";
import AutoSlider from "../../components/reusable/AutoSlider";
import SectionHeading from "../../components/reusable/SectionHeading";
import {bgBlur, ctaBanner3} from "../../data/assetes";
import CTA from "../../components/reusable/CTA";
import PartnershipCTA from "../../components/reusable/PartnershipCTA";
import Technologies from "./sections/Technologies";
import ReversePartnershipCTAMan from "../../components/reusable/ReversePartnershipCTAMan";

const WebsiteDevelopment = ({container}) => {
  return (
    <div>
      <div className="max-w-[1500px] mx-auto relative">
        <img
          src={bgBlur}
          alt=""
          className="absolute top-16 right-0 md:w-40 w-28 z-0"
        />
        <div className={`${container} z-10 xl:px-0 px-2`}>
          <Collaborate />
          <div className="sm:mt-72">
            <PartnershipCTA />
          </div>
        </div>
      </div>
      <Process container={container} />
      <div className="max-w-[1500px] mx-auto relative">
        <img
          src={bgBlur}
          alt=""
          className="absolute top-24 right-0 md:w-40 w-28 z-0"
        />
        <div className={`${container} z-10 xl:px-0 px-2`}>
          <ServicesWebDev />
        </div>
      </div>
      <WhyChooseUS container={container} />
      <div className={`max-w-6xl mx-auto xl:px-0 px-2`}>
        <Technologies />
        <div className="mt-72">
          <ReversePartnershipCTAMan />
        </div>
      </div>

      <div className={`${container} mt-72`}>
        <SectionHeading
          title={"Our Industry Specific Mobile App Development Services"}
          subtitle={
            "follows the best app development practices while digitalizing your idea. Here are all the app development services offered by us:"
          }
          align="center"
        />
        <AutoSlider />
      </div>
      <div className={`my-72`}>
        <MultiGridSlider />
      </div>
    </div>
  );
};

export default WebsiteDevelopment;
