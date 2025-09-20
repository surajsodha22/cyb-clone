import React from "react";
import BusinessModernizationProcess from "../../components/reusable/BusinessModernizationProcess";
import BusinessModernizationServices from "../../components/reusable/BusinessModernizationServices";
import ReversePartnershipCTA from "../../components/reusable/ReversePartnershipCTA";
import {BusinessTechnologies} from "../../data/data";
import {businessAiImg, ctaBanner2} from "../../data/assetes";
import BusinessModernizationMethodologies from "../../components/reusable/BusinessModernizationMethodologies";
import SectionHeading from "../../components/reusable/SectionHeading";
import AutoSlider from "../../components/reusable/AutoSlider";
import MultiGridSlider from "../../components/reusable/MultiGridSlider";
import CTA from "../../components/reusable/CTA";

const BusinessModernization = ({container}) => {
  const TechnologiesSection = () => {
    return (
      <section className="py-72 px-4 bg-white">
        <SectionHeading
          title="Technologies we use for Business Modernization"
          subtitle="Follows the best app development practices while digitalizing your
            idea. Here are all the app development services offered by us:"
        />

        <div className=" flex flex-wrap gap-24 justify-center">
          {/* Left side images */}
          <div className="">
            <img src={businessAiImg} alt="Technology 1" className="w-80" />
          </div>

          {/* Right side: technology list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-8 ">
            {BusinessTechnologies.map((tech, index) => (
              <div key={index} className="flex items-start gap-4 max-w-72 ">
                <div className="w-28 flex  justify-center ">
                  <img src={tech.icon} alt={tech.title} className="" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">
                    {tech.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  return (
    <div>
      <div className={`${container}`}>
        <BusinessModernizationServices />
        <div>
          <CTA image={ctaBanner2} />
        </div>
        {/* <ReversePartnershipCTA /> */}
      </div>
      <div className="mt-72 bg-primary py-10">
        <BusinessModernizationProcess className={`${container}`} />
      </div>

      <div className={`${container}`}>
        <TechnologiesSection />
      </div>
      <div className=" bg-gradient-to-b from-primary to-white">
        <BusinessModernizationMethodologies container={container} />
      </div>

      <div className={`${container}`}>
        <SectionHeading
          title="Our Industry Specific Mobile App Development Services"
          subtitle="follows the best app development practices while digitalizing your idea. Here are all the app development services offered by us:"
          align="center"
        />
        <AutoSlider reverse={true} />
      </div>
      <div className="mt-5">
        <MultiGridSlider />
      </div>
    </div>
  );
};

export default BusinessModernization;
