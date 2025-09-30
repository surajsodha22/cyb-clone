import React from "react";
import ServicesDevOps from "./sections/ServicesDevOps";
import PartnershipCTA from "../../components/reusable/PartnershipCTA";
import WhatDevOps from "./sections/WhatDevOps";
import Implimentation from "./sections/Implimentation";
import Benefits from "./sections/Benefits";
import BenefitsServicesDevOps from "./sections/BenefitsServicesDevOps";
import TaskDevOps from "./TaskDevOps";
import ServicesManagedDevOps from "./ServicesManagedDevOps";
import ManagementTools from "./ManagementTools";
import MultiGridSlider from "../../components/reusable/MultiGridSlider";
import ReversePartnershipCTAMan from "../../components/reusable/ReversePartnershipCTAMan";
import {bgBlur} from "../../data/assetes";

const Devops = ({container}) => {
  return (
    <>
      <div className={`relative ${container}`}>
        <img
          src={bgBlur}
          alt=""
          className="sm:w-36 w-28 absolute sm:top-10 top-20 right-0 z-0"
        />
        <div className=" z-10">
          <ServicesDevOps container={container} />
        </div>
      </div>
      <div className={`${container} px-2`}>
        <div className="sm:mt-72">
          <PartnershipCTA />
        </div>
        <WhatDevOps />
        <Implimentation />
        <ReversePartnershipCTAMan />
      </div>
      <Benefits container={container} />
      <div className={`xl:px-0 px-2 ${container}`}>
        <BenefitsServicesDevOps />
        <TaskDevOps />
        <ServicesManagedDevOps />

        <ManagementTools />

        <div className="mb-72">
          <MultiGridSlider />
        </div>
      </div>
    </>
  );
};

export default Devops;
