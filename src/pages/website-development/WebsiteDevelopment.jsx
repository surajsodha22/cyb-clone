import React from "react";
import Collaborate from "./sections/Collaborate";
import Process from "./sections/Process";
import ServicesWebDev from "./sections/ServicesWebDev";
import WhyChooseUS from "./sections/WhyChooseUS";

import MultiGridSlider from "../../components/reusable/MultiGridSlider";
import AutoSlider from "../../components/reusable/AutoSlider";
import SectionHeading from "../../components/reusable/SectionHeading";
import Section7 from "../../components/hero_sections/Section7";
import {ctaBanner, ctaBanner3} from "../../data/assetes";
import CTA from "../../components/reusable/CTA";

const WebsiteDevelopment = ({container}) => {
  return (
    <div>
      <div className={container}>
        <Collaborate />
        <CTA image={ctaBanner} />
      </div>
      <Process container={container} />
      <div className={container}>
        <ServicesWebDev />
      </div>
      <WhyChooseUS container={container} />
      <div className={container}>
        <Section7
          title="Technologies we Use "
          subtitle={
            "follows the best app development practices while digitalizing your idea. Here are all the app development services offered by us:"
          }
        />
        <div className="mt-72">
          <CTA image={ctaBanner3} />
        </div>
        <div className="mt-72">
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
