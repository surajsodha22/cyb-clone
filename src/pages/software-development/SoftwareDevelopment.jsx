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

const SoftwareDevelopment = ({container}) => {
  return (
    <>
      <div className={`${container}`}>
        <SoftwareServices />
        <div className="mt-20">
          <PartnershipCTA />
        </div>
        <SoftwareProcess />
        <AdvanceTech />
        <ReversePartnershipCTA />
        <MethodsSoftware />
        <SoftwareCarusole />
        <ExpensesSoftware />
      </div>
      <MultiGridSlider />
    </>
  );
};

export default SoftwareDevelopment;
