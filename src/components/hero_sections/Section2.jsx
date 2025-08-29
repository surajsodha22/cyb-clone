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

const Section2 = () => {
  return (
    <section className="">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        We build impactful mobile and web app
      </h2>
      <p className="text-center text-gray-600 mb-12">
        Here is how we have created a success story for brands dreaming big and
        something exceptional.
      </p>

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
            <h3 className="text-xl  mb-2">{service.title}</h3>
            <p className="">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section2;
