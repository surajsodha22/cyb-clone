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
      <div className={`${container} px-2 xl:px-0`}>
        <SoftwareServices />
        <div className="mt-72">
          <PartnershipCTA />
        </div>
        <SoftwareProcess />
        <AdvanceTech />
        <div className="mt-72">
          <ReversePartnershipCTA />
        </div>
      </div>
      <MethodsSoftware container={container} />
      <SoftwareCarusole container={container} />
      <div className={`${container} px-2 xl:px-0`}>
        <ExpensesSoftware />
      </div>

      <div className="my-72">
        <MultiGridSlider />
      </div>
    </>
  );
};

export default SoftwareDevelopment;
