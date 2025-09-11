import React from "react";
import {
  FaMobileAlt,
  FaCode,
  FaRobot,
  FaChartLine,
  FaCogs,
  FaUser,
} from "react-icons/fa";
import {services} from "../../data/data";
import SectionHeading from "../reusable/SectionHeading";

const Section2 = () => {
  return (
    <section className="mt-10">
      <SectionHeading
        title="A solution for your software needs."
        subtitle="We are ready to bridge the gap between your ideas and technology. Here is the way to filling the gaps and make your growth with innovation."
        align="center"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md transition-all hover:shadow-xl hover:bg-secondary hover:cursor-pointer`}
          >
            <div className="mb-4 ">
              <span className="p-2 bg-yellow-50 rounded-full inline-block">
                <img src={service.img} alt="" />
              </span>
            </div>
            <h3 className="text-xl  font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section2;
