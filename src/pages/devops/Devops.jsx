import React from "react";
import ServicesDevOps from "./sections/ServicesDevOps";
import PartnershipCTA from "../../components/reusable/PartnershipCTA";
import WhatDevOps from "./sections/WhatDevOps";
import Implimentation from "./sections/Implimentation";
import ReversePartnershipCTA from "../../components/reusable/ReversePartnershipCTA";
import Benefits from "./sections/Benefits";
import BenefitsServicesDevOps from "./sections/BenefitsServicesDevOps";
import TaskDevOps from "./TaskDevOps";
import ServicesManagedDevOps from "./ServicesManagedDevOps";
import ManagementTools from "./ManagementTools";
import MultiGridSlider from "../../components/reusable/MultiGridSlider";
import {ctaBanner, ctaBanner3} from "../../data/assetes";
import CTA from "../../components/reusable/CTA";

const Devops = ({container}) => {
  return (
    <>
      <div className={`${container}`}>
        <ServicesDevOps />
        <CTA image={ctaBanner} />
        <WhatDevOps />
        <Implimentation />
        <CTA image={ctaBanner3} />
      </div>
      <Benefits container={container} />
      <div className={container}>
        <BenefitsServicesDevOps />
        <TaskDevOps />
        <ServicesManagedDevOps />

        <ManagementTools />

        <MultiGridSlider />
      </div>
    </>
  );
};

export default Devops;
