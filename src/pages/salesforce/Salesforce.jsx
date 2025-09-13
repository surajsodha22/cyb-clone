import React from "react";
import {SalesIndustary, salesServices, web3services} from "../../data/data";
import PartnershipCTA from "../../components/reusable/PartnershipCTA";
import ReversePartnershipCTA from "../../components/reusable/ReversePartnershipCTA";
import TalentNetwork from "../../components/reusable/TalentNetwork";
import FAQ from "../../components/reusable/FAQ";

const Salesforce = ({container}) => {
  return (
    <div className={"pt-4"}>
      <div className={`${container}`}>
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Prompt Engineering Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {salesServices.map((service, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border"
            >
              {/* Top-right image */}
              <div className="absolute top-0 right-0 size-20">
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
      <div className={`sm:mt-28 mt-10 ${container}`}>
        <PartnershipCTA />
      </div>

      <div className={`${container} mt-10`}>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 max-w-4xl mx-auto">
          We Follow a Trusted Blockchain Development Process Built By Industry
          Leaders
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center items-start">
          {SalesIndustary.map((step, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition p-6 text-center"
            >
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
          ))}
        </div>
      </div>

      <div className={` mt-10 ${container}`}>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Web3 Services we have Expertise In
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {web3services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
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
      <div className={`sm:mt-28 mt-10 ${container}`}>
        <ReversePartnershipCTA />
      </div>

      <div className={` mt-10 ${container}`}>
        <TalentNetwork />
      </div>

      <div className={` mt-10 ${container}`}>
        <FAQ />
      </div>
    </div>
  );
};

export default Salesforce;
