import React from "react";
import AppDevelopmentServices from "./sections/AppDevelopmentServices";
import PartnershipCTA from "../../components/reusable/PartnershipCTA";
import DevelopmentProcess from "./sections/DevelopmentProcess";
import CarouselAppServices from "./sections/CarouselAppServices";
import EmergingTech from "./sections/EmergingTech";
import AiServices from "./sections/AiServices";
import AiFeatures from "./sections/AiFeatures";
// import TechnologiesSection from "./sections/TechnologiesSection";
import MultiGridSlider from "../../components/reusable/MultiGridSlider";
import {ctaBanner} from "../../data/assetes";
import CTA from "../../components/reusable/CTA";
import AutoSlider from "../../components/reusable/AutoSlider";
import SectionHeading from "../../components/reusable/SectionHeading";
import {sliderDataMobApp} from "../../data/data";

const MobileApp = ({container}) => {
  return (
    <>
      <div className={`${container}`}>
        <AppDevelopmentServices container={container} />
        <CTA image={ctaBanner} />

        {/* <PartnershipCTA /> */}
      </div>

      <DevelopmentProcess container={container} />

      <div className={`${container} mt-72`}>
        <SectionHeading
          title="Our Industry Specific Mobile App Development Services"
          subtitle="follows the best app development practices while digitalizing your idea. Here are all the app development services offered by us:"
          align="center"
        />
        <AutoSlider reverse={true} slideData={sliderDataMobApp} />
      </div>

      <EmergingTech container={container} />
      <AiServices container={container} />
      <AiFeatures container={container} />
      {/* <TechnologiesSection /> */}

      <MultiGridSlider />
    </>
  );
};

export default MobileApp;
