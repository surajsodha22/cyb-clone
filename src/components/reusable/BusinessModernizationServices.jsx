import React from "react";
import {BusinessServices} from "../../data/data";
import SectionHeading from "./SectionHeading";

const BusinessModernizationServices = () => {
  return (
    <section className="bg-white py-16 px-4">
      <SectionHeading
        title="Our Business Modernization Services"
        align="center"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {BusinessServices.map((items, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md border-l-4 border-r-4 border-red-400 transition hover:shadow-lg"
          >
            <h3 className="text-lg font-semibold mb-3">{items?.title}</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {items?.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessModernizationServices;
