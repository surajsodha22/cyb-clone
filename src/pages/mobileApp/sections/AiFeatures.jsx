import React from "react";
import {aiMobFeatures} from "../../../data/data";
import SectionHeading from "../../../components/reusable/SectionHeading";
import ServiceCard from "../../../components/reusable/ServiceCard";

const AiFeatures = ({container}) => {
  return (
    <section className={`${container} mt-72 `}>
      {/* Heading */}
      <div className="text-center mb-12">
        <SectionHeading
          title="Our AI App Development Services to help you to scale Your Idea"
          subtitle="follows the best app development practices while digitalizing your idea. Here are all the app development services offered by us:"
          align="center"
        />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {aiMobFeatures?.map((feature, index) => (
          <ServiceCard key={index} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default AiFeatures;
