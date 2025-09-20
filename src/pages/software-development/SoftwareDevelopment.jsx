import React from "react";
import SoftwareServices from "./sections/SoftwareServices";
import PartnershipCTA from "../../components/reusable/PartnershipCTA";
import AdvanceTech from "./sections/AdvanceTech";
import SoftwareProcess from "./sections/SoftwareProcess";
import ReversePartnershipCTA from "../../components/reusable/ReversePartnershipCTA";
import MethodsSoftware from "./sections/MethodsSoftware";
import SoftwareCarusole from "./sections/SoftwareCarusole";
import ExpensesSoftware from "./sections/ExpensesSoftware";
import MultiGridSlider from "../../components/reusable/MultiGridSlider";
import {ctaBanner, ctaBanner2} from "../../data/assetes";
import CTA from "../../components/reusable/CTA";

const SoftwareDevelopment = ({container}) => {
  return (
    <>
      <div className={`${container}`}>
        <SoftwareServices />
        <div className="">
          <CTA image={ctaBanner} />
          {/* <PartnershipCTA /> */}
        </div>
        <SoftwareProcess />
        <AdvanceTech />
        <div className="mt-72">
          <CTA image={ctaBanner2} />
          {/* <ReversePartnershipCTA /> */}
        </div>
      </div>
      <MethodsSoftware container={container} />
      <SoftwareCarusole container={container} />
      <div className={`${container}`}>
        <ExpensesSoftware />
      </div>
      <MultiGridSlider />
    </>
  );
};

export default SoftwareDevelopment;
