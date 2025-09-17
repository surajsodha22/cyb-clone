import React from "react";
import SectionHeading from "../../../components/reusable/SectionHeading";
import {technologies} from "../../../data/data";
import ServiceCard from "../../../components/reusable/ServiceCard";

function AdvanceTech() {
  return (
    <section className="bg-white">
      {/* Heading Section */}
      <SectionHeading
        title={"Advanced Technology Solutions We Master in"}
        subtitle={
          "Our expert developers bring new ideas to digitize your business, creating the best software for both you and your customers with their professional advice."
        }
      />

      {/* Technology Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {technologies?.map((tech, index) => (
          <ServiceCard key={index} feature={tech} />
        ))}
      </div>
    </section>
  );
}

export default AdvanceTech;
