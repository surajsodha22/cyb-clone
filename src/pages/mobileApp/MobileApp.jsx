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

const MobileApp = ({container}) => {
  return (
    <>
      <div className={`${container}`}>
        <AppDevelopmentServices />
        <PartnershipCTA />
        <DevelopmentProcess />
        <CarouselAppServices />
        <EmergingTech />
        <AiServices />
        <AiFeatures />
        {/* <TechnologiesSection /> */}
      </div>
      <MultiGridSlider />
    </>
  );
};

export default MobileApp;
