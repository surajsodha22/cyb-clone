import React, {useState} from "react";
import {services} from "../../data/data";
import SectionHeading from "../reusable/SectionHeading";

const Section2 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="">
      <SectionHeading
        title="A solution for your software needs."
        subtitle="We are ready to bridge the gap between your ideas and technology. Here is the way to filling the gaps and make your growth with innovation."
        align="center"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-4 sm:p-6 rounded-[15px] transition-all hover:bg-[#FEBB4DDE] hover:cursor-pointer backdrop-blur-2xl shadow-custom`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="mb-3 sm:mb-4">
              <img
                src={hoveredIndex === index ? service.hoverImg : service.img}
                alt=""
                className="w-[56px] h-[79px]"
              />
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-[24px] font-semibold mb-2">
              {service.title}
            </h3>
            <p className="text-sm sm:text-base lg:text-[16px] font-[400] text-gray-600 font-montserrat line-height-[34px]">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section2;
