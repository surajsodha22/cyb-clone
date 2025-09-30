import React from "react";
import {SalesIndustary, salesServices, web3services} from "../../data/data";
import ReversePartnershipCTA from "../../components/reusable/ReversePartnershipCTA";
import TalentNetwork from "../../components/reusable/TalentNetwork";
import FAQ from "../../components/reusable/FAQ";
import SectionHeading from "../../components/reusable/SectionHeading";
import PartnershipCTA from "../../components/reusable/PartnershipCTA";

const Salesforce = ({container}) => {
  return (
    <div className={"pt-72 xl:px-0 px-2"}>
      <div className={`${container} pb-72`}>
        <SectionHeading
          title="Our Prompt Engineering Services"
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {salesServices.map((service, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-xl shadow-[0px_2px_16px_0px_#0000001F] transition border"
            >
              {/* Top-right image */}
              <div className="absolute -top-[2px] right-0 size-20">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-lg font-semibold mb-4 w-60">
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
      <div className={`sm:mt-72 mt-10 ${container}`}>
        <PartnershipCTA />
      </div>

      <div className={`${container} mt-72`}>
        <SectionHeading
          title="We Follow a Trusted Blockchain Development Process Built By Industry Leaders"
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center items-start">
          {SalesIndustary.map((step, index) => (
            <div
              key={index}
              className="border-r border-l cursor-pointer group relative bg-white border-t-4 hover:border-t-0  hover:border-b-4 border-secondary rounded-xl  transition-all duration-300 p-6 text-center h-48 overflow-hidden shadow-[0px_4px_4px_0px_#00000040]"
            >
              {/* Normal state - Icon and Title */}
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 transition-all duration-100 group-hover:opacity-0 group-hover:translate-y-[-20px]">
                {/* Icon image */}
                <div className="mb-4 flex justify-center">
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="size-20 object-contain"
                  />
                </div>
                <h3 className="text-sm font-semibold text-gray-800">
                  {step.title}
                </h3>
              </div>

              {/* Hover state - Description */}
              <div className="absolute inset-0 flex items-center justify-center p-6 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-[20px]">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={` mt-72 ${container}`}>
        <SectionHeading
          title="Web3 Services we have Expertise In"
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {web3services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-[0px_2px_8px_0px_#00000014] transition overflow-hidden"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-md font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`mt-72  ${container}`}>
        <ReversePartnershipCTA />
      </div>

      <div className={` mt-72 ${container}`}>
        <TalentNetwork />
      </div>

      <div className={` my-72 ${container}`}>
        <FAQ />
      </div>
    </div>
  );
};

export default Salesforce;
