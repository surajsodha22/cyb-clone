import React from "react";
import {BusinessServices} from "../../data/data";
import SectionHeading from "./SectionHeading";

const BusinessModernizationServices = () => {
  return (
    <section className="bg-white py-72 px-4">
      <SectionHeading
        title="Our Business Modernization Services"
        align="center"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {BusinessServices.map((items, index) => (
          <div
            key={index}
            className="bg-white hover:bg-[#FFE6C0] p-6 rounded-2xl border-4 border-transparent border-l-red-400 border-r-red-400 hover:border-t-red-400 hover:border-b-red-400 hover:border-l-transparent hover:border-r-transparent cursor-pointer transition-all duration-300"
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
