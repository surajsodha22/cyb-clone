import React from "react";
import {Ai_Process, Ai_Services, Ai_services2} from "../../data/data";
import PartnershipCTA from "../../components/reusable/PartnershipCTA";
import AutoSlider from "../../components/reusable/AutoSlider";
import {ai_img2, ctaBanner} from "../../data/assetes";
import AutoSliderBox from "../../components/reusable/AutoSliderBox";
import MultiGridSlider from "../../components/reusable/MultiGridSlider";
import SectionHeading from "../../components/reusable/SectionHeading";
import CTA from "../../components/reusable/CTA";

const AIDevelopment = ({container}) => {
  return (
    <div className="pt-72">
      <div className={`${container}`}>
        <SectionHeading
          title="Our Prompt Engineering Services"
          align="center"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Ai_Services.map((service, index) => (
            <div
              key={index}
              className="relative  p-6 rounded-xl transition border mt-8 shadow-custom"
            >
              {/* Top-right image */}
              <div className="absolute -top-8 left-8 size-16">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-lg font-semibold my-4 w-60">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                illum ducimus deserunt vel dolorum sed aut explicabo
                repellendus, sit similique, aliquid minus maxime esse quasi
                perferendis numquam quod eligendi accusamus!
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className={`mt-72 ${container}`}>
        <CTA image={ctaBanner} />
      </div>

      <div className={`${container}`}>
        <div className="mt-72">
          <SectionHeading title="AI Development Process" align="center" />
          <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-6 relative">
            {/* Desktop horizontal line - hidden on mobile */}
            <hr className="hidden md:block border border-dashed w-[90%] border-[#F15E5F] absolute top-8 left-10 z-0" />

            {/* Mobile vertical line - hidden on desktop */}
            <div className="md:hidden absolute left-1/2 top-0 bottom-0 w-0.5 h-[90%] bg-[#F15E5F] border-dashed transform -translate-x-1/2 z-0"></div>

            {Ai_Process.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center z-10 w-full md:w-auto"
              >
                {/* Icon */}
                <div
                  className={`size-16 rounded-xl flex items-center justify-center bg-white `}
                >
                  <img src={step.img} alt={step.title} className="w-full" />
                </div>

                {/* Title */}
                <p className="text-sm md:text-base font-medium text-gray-800 max-w-36 mt-2">
                  {step.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`${container} mt-72`}>
        <SectionHeading
          title="Our Industry Specific Mobile App Development Services"
          subtitle="follows the best app development practices while digitalizing your idea. Here are all the app development services offered by us:"
          align="center"
        />
        <AutoSlider />
      </div>

      <div className={`${container} mt-72`}>
        <SectionHeading
          title="Trending AI Technologies we used to Build an AI Apps"
          subtitle="follows the best app development practices while digitalizing your idea. Here are all the app development services offered by us:"
          align="center"
        />

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Left: Images */}
          <div className="flex flex-col items-center gap-6 w-full lg:w-1/2">
            <img src={ai_img2} alt="AI on laptop" className=" max-w-full" />
          </div>

          {/* Right: Text Services */}
          <div className="flex flex-col gap-8 w-full lg:w-1/2">
            {Ai_services2.map((service, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={`${container} mt-72`}>
        <AutoSliderBox />
      </div>
      <MultiGridSlider />
    </div>
  );
};

export default AIDevelopment;
