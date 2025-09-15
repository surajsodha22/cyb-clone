import React from "react";
import PartnershipCTA from "../../components/reusable/PartnershipCTA";
import Collaborate from "./sections/Collaborate";
import Process from "./sections/Process";
import ServicesWebDev from "./sections/ServicesWebDev";
import WhyChooseUS from "./sections/WhyChooseUS";

import ReversePartnershipCTAMan from "../../components/reusable/ReversePartnershipCTAMan";
import MultiGridSlider from "../../components/reusable/MultiGridSlider";
import AutoSlider from "../../components/reusable/AutoSlider";
import SectionHeading from "../../components/reusable/SectionHeading";
import Section7 from "../../components/hero_sections/Section7";

const WebsiteDevelopment = ({container}) => {
  return (
    <div>
      <div className={container}>
        <Collaborate />
        <PartnershipCTA />
        <Process />
        <ServicesWebDev />
        <WhyChooseUS />

        <Section7
          title="Technologies we Use "
          subtitle={
            "follows the best app development practices while digitalizing your idea. Here are all the app development services offered by us:"
          }
        />
        <div className="mt-28">
          <ReversePartnershipCTAMan />
        </div>
        <div className="mt-10">
          <SectionHeading
            title={"Our Industry Specific Mobile App Development Services"}
            subtitle={
              "follows the best app development practices while digitalizing your idea. Here are all the app development services offered by us:"
            }
            align="center"
          />
          <AutoSlider />
        </div>
      </div>

      <MultiGridSlider />
    </div>
  );
};

export default WebsiteDevelopment;
