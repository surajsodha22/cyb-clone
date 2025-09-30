import React from "react";
import {BusinessPart1, BusinessPart2} from "../../data/assetes";
import PartnershipCTA from "../../components/reusable/PartnershipCTA";
import {infoCards} from "../../data/data";
import HeadingSection from "../../components/reusable/SectionHeading";

const Partnership = ({container}) => {
  return (
    <div className={`my-72 `}>
      {/* Partnership Cards */}
      <div
        className={`my-72 flex flex-wrap md:gap-20 justify-center px-2 lg:px-0 ${container} gap-5 `}
      >
        <HeadingSection
          title="Our Partnership Programs That Empower Businesses"
          align="center"
        />
        {/* Card 1 */}
        <div className="bg-[#FFE5E6]  max-w-md w-full  rounded-[30px] p-8  relative">
          <span className="">
            <img
              src={BusinessPart1}
              alt=""
              className="md:absolute size-20 top-[-40px] left-[-40px]"
            />
          </span>
          <div className="md:mt-12">
            <h3 className="text-xl font-bold mb-2 mt-2">
              Outsourcing Partnership
            </h3>
            <p className="text-base sm:leading-10  leading-7">
              Reduce over 60% of the total cost by partnering with us to
              outsource your IT operations. Hire dedicated developers or a
              complete team from us. We are handling the training and
              installation costs for the technologies, so you won't have to
              worry about anything. Alternatively, you may reach out to us and
              let us work as an extension of your office, providing you with
              benefits at nearly no expense.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#FFF8E7]  max-w-md w-full  rounded-[30px] p-8  relative">
          <span className="">
            <img
              src={BusinessPart2}
              alt=""
              className="md:absolute size-20 top-[-40px] left-[-40px]"
            />
          </span>
          <div className="md:mt-12">
            <h3 className="text-xl font-bold mb-2 mt-2">
              Business Partnership
            </h3>
            <p className="text-base sm:leading-10  leading-7">
              Becoming a channel partner is an opportunity for independent
              business consultants like yourself. Make use of our technological
              know-how to your financial advantage. With our comprehensive
              project management services, we can assist you in efficiently
              delivering IT resources for whatever job you direct our way..
            </p>
          </div>
        </div>
      </div>
      {/* CTA */}
      <div className={`mt-72 px-2 lg:px-0 ${container} `}>
        <PartnershipCTA />
      </div>

      {/* Benefits Of Partnering With Us */}
      <div className="my-72 bg-gradient-to-b from-primary to-white px-2 lg:px-0">
        <div className={`max-w-6xl mx-auto px-2 lg:px-0`}>
          <h3 className="text-[28px] font-bold text-center py-12">
            Benefits Of Partnering With Us
          </h3>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center `}
        >
          <div className="border border-[#FEBB4D] md:min-h-56 bg-white rounded-[50px] p-8 md:leading-8 leading-7 shadow-[0px_4px_1px_0px_#FEBB4D66] flex flex-col justify-center">
            <h4 className="font-semibold mb-2 text-[22px]">
              Assured Time Project Delivery
            </h4>
            <p className="text-gray-700 text-[17px] ">
              By partnering with us you will stay ahead of the competition as we
              deliver products at comparatively low cost and a faster rate.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="border border-[#FEBB4D] bg-white rounded-[50px] p-8 md:min-h-56 md:leading-8 leading-7 shadow-[0px_4px_1px_0px_#FEBB4D66] flex flex-col justify-center">
              <h4 className="font-semibold mb-2 text-[22px]">
                Stay Competitive, Stay Ahead
              </h4>
              <p className="text-gray-700 text-[17px] ">
                Planning to hire experienced developers? Look no further,
                partner with us and let our experienced developers work for you.
              </p>
            </div>
            <div className="border border-[#FEBB4D] bg-white rounded-[50px] p-8 md:min-h-56 md:leading-8 leading-7 shadow-[0px_4px_1px_0px_#FEBB4D66] flex flex-col justify-center">
              <h4 className="font-semibold mb-2 text-[22px]">
                Overall Business Solutions
              </h4>
              <p className="text-gray-700 text-[17px] ">
                95% of the total products delivered by us were on time and
                within the desired budget.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ  */}
      <div
        className={`grid md:grid-cols-2 px-2 lg:px-0 gap-10  my-72 max-w-6xl mx-auto`}
      >
        {infoCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-b-2xl rounded-t-lg shadow-md overflow-hidden"
          >
            <div className="bg-secondary rounded-lg px-6 py-1">
              <h3 className="font-semibold text-[22px] ">{card.title}</h3>
            </div>
            <div className="px-6 py-4">
              <h4 className=" mb-2 text-lg">{card.subtitle}</h4>
              <p className="  text-base">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partnership;
