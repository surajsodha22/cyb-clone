import React from "react";
import {BusinessPart1, BusinessPart2} from "../../data/assetes";
import PartnershipCTA from "../../components/reusable/PartnershipCTA";
import {infoCards} from "../../data/data";
import HeadingSection from "../../components/reusable/SectionHeading";

const Partnership = ({container}) => {
  return (
    <div className={`my-16`}>
      {/* Header */}
      <HeadingSection
        title="Our Partnership Programs That Empower Businesses"
        align="center"
      />

      {/* Partnership Cards */}
      <div
        className={`mt-12 flex flex-wrap md:gap-20 justify-between ${container} gap-5 `}
      >
        {/* Card 1 */}
        <div className="bg-[#FFE5E6] shadow-lg max-w-xl w-full  rounded-xl p-6 border border-gray-200 relative">
          <span className="text-sm font-bold text-pink-500">
            <img
              src={BusinessPart1}
              alt=""
              className="md:absolute size-20 top-[-40px] left-[-40px]"
            />
          </span>
          <div className="md:mt-12">
            <h3 className="text-xl font-semibold mb-2 mt-2">
              Outsourcing Partnership
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Reduce over 65% of the usual costs by partnering with us
              outsourcing your requirements. We dedicate our resources to ensure
              maximum ROI while handling the team’s communication for the
              smoothest workflow, saving your time and resources. Outsourcing
              with us works as an extension of your office, providing you with
              benefits at nearly no expense.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#FFF8E7] shadow-lg max-w-xl w-full  rounded-xl p-6 border border-gray-200 relative">
          <span className="text-sm font-bold text-pink-500">
            <img
              src={BusinessPart2}
              alt=""
              className="md:absolute size-20 top-[-40px] left-[-40px]"
            />
          </span>
          <div className="md:mt-12">
            <h3 className="text-xl font-semibold mb-2 mt-2">
              Business Partnership
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Becoming a channel partner is an opportunity for independent
              businesses to increase their market share and efficiency. With our
              comprehensive product offerings, you can deliver in different
              segments, whether B2B or B2C, without investing in IT resources
              for software.
            </p>
          </div>
        </div>
      </div>
      {/* CTA */}
      <div className={`sm:mt-28 mt-4 ${container} `}>
        <PartnershipCTA />
      </div>

      {/* Benefits Of Partnering With Us */}
      <div className="my-8 bg-gradient-to-b from-primary to-white">
        <h3 className="text-2xl font-bold text-center py-12">
          Benefits Of Partnering With Us
        </h3>

        <div className={`grid md:grid-cols-2 gap-8 ${container} `}>
          <div className="border border-secondary rounded-xl p-6 shadow-sm flex flex-col justify-center">
            <h4 className="font-semibold mb-2">
              Assured Time Project Delivery
            </h4>
            <p className="text-gray-700 text-sm ">
              By partnering with us you will stay ahead of the competition as we
              deliver products at comparatively low cost and a faster rate.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="border border-secondary rounded-xl p-6 flex flex-col justify-center">
              <h4 className="font-semibold mb-2">
                Stay Competitive, Stay Ahead
              </h4>
              <p className="text-gray-700 text-sm ">
                Planning to hire experienced developers? Look no further,
                partner with us and let our experienced developers work for you.
              </p>
            </div>
            <div className="border border-secondary rounded-xl p-6 flex flex-col justify-center">
              <h4 className="font-semibold mb-2">Overall Business Solutions</h4>
              <p className="text-gray-700 text-sm ">
                95% of the total products delivered by us were on time and
                within the desired budget.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ  */}
      <div className={`grid md:grid-cols-2 gap-10 ${container} my-10`}>
        {infoCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="bg-secondary px-6 py-1">
              <h3 className="font-semibold text-lg text-gray-800">
                {card.title}
              </h3>
            </div>
            <div className="px-6 py-4">
              <h4 className="font-semibold mb-2">{card.subtitle}</h4>
              <p className="text-gray-600 text-sm">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partnership;
